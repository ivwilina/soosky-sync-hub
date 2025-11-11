import Server from "./server/Server";
import config from "./configs/ServerConfig";
import mongoose from "mongoose";

/*-----------------------------------------------------------------------------------------*/

const HTTP_PORT = config.http.port;
const HTTP_HOSTNAME = config.http.hostName;
const MONGODB_URI = config.mongodb.dbURI; 

(async () => {
  try {
    if (!MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variable");
    }
    await mongoose.connect(MONGODB_URI);
    const server = new Server();
    server.listen(HTTP_PORT, HTTP_HOSTNAME);
  } catch (error) {
    console.log(error.message);
  }
})();
