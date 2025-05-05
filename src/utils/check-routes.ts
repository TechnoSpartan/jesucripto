import fs from 'fs';
import path from 'path';
import ts from 'typescript';

const projectRoot = path.resolve(__dirname, 'src');

function isControllerUsedAsRouter(sourceFile: ts.SourceFile) {
  const results: string[] = [];

  function visit(node: ts.Node) {
    if (ts.isCallExpression(node)) {
      if (
        ts.isPropertyAccessExpression(node.expression) &&
        node.expression.name.getText() === 'use'
      ) {
        const args = node.arguments;
        if (args.length >= 2) {
          const routeArg = args[1];
          if (ts.isIdentifier(routeArg)) {
            results.push(`⚠️ Posible controller usado en app.use(): ${routeArg.getText()} en ${sourceFile.fileName}`);
          }
        } else if (args.length === 1) {
          const routeArg = args[0];
          if (ts.isIdentifier(routeArg)) {
            results.push(`⚠️ app.use(...) con 1 argumento identificador: ${routeArg.getText()} en ${sourceFile.fileName}`);
          }
        }
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return results;
}

function checkDirectory(dir: string): string[] {
  const files = fs.readdirSync(dir);
  let warnings: string[] = [];

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      warnings = warnings.concat(checkDirectory(fullPath));
    } else if (file.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const sourceFile = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true);
      warnings = warnings.concat(isControllerUsedAsRouter(sourceFile));
    }
  }

  return warnings;
}

const warnings = checkDirectory(projectRoot);

if (warnings.length > 0) {
  console.log('🔍 Revisión de rutas:');
  warnings.forEach(w => console.log(w));
} else {
  console.log('✅ Todo limpio. No se detectaron controllers mal usados en app.use().');
}
