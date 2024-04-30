import { MongoClient, ServerApiVersion } from 'mongodb';

let _client: MongoClient;

export class MongoClientSingleton {
  private static instance: MongoClientSingleton;

  private constructor(uri: string, options: any) {
    if (!_client) {
      _client = new MongoClient(uri, options);
    }
  }

  public static getInstance(): MongoClientSingleton {
    if (!MongoClientSingleton.instance) {
      const username = process.env.MONGODB_USERNAME || '';
      const password = process.env.MONGODB_PASSWORD || '';
      let connection_string = process.env.MONGODB_CONNECTION_STRING || '';
      connection_string = connection_string.replace('<user>', username).replace('<password>', password);

      const options = {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
      };

      MongoClientSingleton.instance = new MongoClientSingleton(connection_string, options);
    }

    return MongoClientSingleton.instance;
  }

  public getClient(): MongoClient {
    return _client;
  }
}
