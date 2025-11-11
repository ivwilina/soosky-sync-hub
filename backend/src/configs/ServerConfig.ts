import dotenv from "dotenv";

/*-----------------------------------------------------------------------------------------*/

dotenv.config();

/*-----------------------------------------------------------------------------------------*/

const config = {
  http: {
    hostName: process.env.HTTP_HOSTNAME,
    port: parseInt(process.env.HTTP_PORT),
  },
  mongodb: {
    dbURI: process.env.MONGODB_URI
  }
};

/*-----------------------------------------------------------------------------------------*/

export default config;
