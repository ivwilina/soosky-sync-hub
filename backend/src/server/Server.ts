import express, { Request, Response } from "express";
import cors from "cors";
import {} from "module";
import _userManagementModule_user from "../modules/userManagement/User.routes";
import _userManagementModule_admin from "../modules/userManagement/Admin.routes";
import _incognitoQAModule_user from "../modules/incognitoQA/User.routes";
import _incognitoQAModule_admin from "../modules/incognitoQA/Admin.routes";
import _authModule from "../modules/auth/Auth.routes";

/*-----------------------------------------------------------------------------------------*/

export default class Server {
  constructor() {
    this._init();
  }

  private async _init() {
    try {
      this._registerMiddlewares();
      await this._loadRoutes();
      this._registerRoutes();
    } catch (error) {}
  }

  private readonly _DEFAULT_HTTP_HOSTNAME = "localhost";

  private readonly _DEFAULT_HTTP_PORT = 3000;

  private readonly _server = express();

  private _routes = [["GET", "/", this._GET_index.bind(this)]];

  private async _GET_index(_, res: Response): Promise<any> {
    res
      .status(200)
      .json({ message: "This is Soosky Sync Hub API default endpoint!" });
  }

  private async _loadRoutes() {
    const _userManagement_user = new _userManagementModule_user();
    const _userManagement_admin = new _userManagementModule_admin();
    const _incognitoQA_user = new _incognitoQAModule_user();
    const _incognitoQA_admin = new _incognitoQAModule_admin();
    const _auth = new _authModule();
    this._routes.push(..._userManagement_user.routes);
    this._routes.push(..._userManagement_admin.routes);
    this._routes.push(..._incognitoQA_user.routes);
    this._routes.push(..._incognitoQA_admin.routes);
    this._routes.push(..._auth.routes);
  }

  private _registerRoutes() {
    for (const [method, path, ...handlers] of this._routes) {
      this._server[method.toLowerCase()](path, ...handlers);
    }
  }

  private _registerMiddlewares() {
    // **NOTE: cors
    this._server.use(cors());
    this._server.use(express.json());
  }

  public listen(port: number, hostName: string): Promise<any> {
    const HTTP_PORT = port || this._DEFAULT_HTTP_PORT;
    const HTTP_HOSTNAME = hostName || this._DEFAULT_HTTP_HOSTNAME;
    return new Promise(() => {
      this._server.listen(HTTP_PORT, HTTP_HOSTNAME, () => {
        console.log(
          `Server is listening on http://${HTTP_HOSTNAME}:${HTTP_PORT}`
        );
      });
    });
  }
}
