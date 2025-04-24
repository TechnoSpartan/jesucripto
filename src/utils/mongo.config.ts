import 'dotenv/config';

interface MongoConfig {
    uri: string;
    options?: {
        user: string;
        pass: string;
        dbName: string;
        retryWrites: boolean;
        appName: string;
    };
}

export const mongoConfig = (): MongoConfig => {

    const {
              MONGO_URI_POPULATE
    } = process.env;


    if (!MONGO_URI_POPULATE) {
        throw new Error("❌ Variables de entorno no definidas correctamente");
    }

    return {
        uri: MONGO_URI_POPULATE
    };
}
