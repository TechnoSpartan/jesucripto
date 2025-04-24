import 'dotenv/config';

export const mongoConfig = () => {
    const {
        MONGO_URI,
        MONGO_USER,
        MONGO_PASS,
        MONGO_DB_NAME,
        MONGO_APP_NAME,
    } = process.env;


    if (!MONGO_URI || !MONGO_USER || !MONGO_PASS || !MONGO_DB_NAME || !MONGO_APP_NAME) {
        throw new Error("❌ Variables de entorno no definidas correctamente");
    }

    return {
        uri: MONGO_URI,
        options: {
        user: MONGO_USER,
            pass: MONGO_PASS,
            dbName: MONGO_DB_NAME,
            retryWrites: true,
            appName: MONGO_APP_NAME,
        }
    };
}
