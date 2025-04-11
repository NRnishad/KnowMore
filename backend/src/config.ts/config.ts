import dotenv from 'dotenv'
dotenv.config()



export interface MongoDBConfig {
    URI: string | undefined;
}

export interface Config {
    
    mongoDB: MongoDBConfig;
    
}

export const config : Config = {
mongoDB: {
    URI : process.env.MONGO_URI 
},
}