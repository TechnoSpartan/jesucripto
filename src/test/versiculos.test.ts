import request from 'supertest';
import express from 'express';
import versiculoRoutes from '../routes/versiculos';

const app = express();
app.use(express.json());
app.use('/api', versiculoRoutes);

describe('API /api/versiculo', () => {
    it('debería responder con un versículo aleatorio', async () => {
        const res = await request(app).get('/api/versiculo');
        expect(res.statusCode).toBe(200);
        expect(res.body.versiculo).toBeDefined();
    });
});
