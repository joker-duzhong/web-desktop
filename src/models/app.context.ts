import { SystemModel } from "./system";

export type ConfigInfo = {
  relationUrl: string;
};

class AppContext {
  private static _ins: AppContext = new AppContext();
  private _config = <ConfigInfo>{};
  private _system: SystemModel = new SystemModel();

  constructor() { }

  public static get ins(): AppContext {
    return this._ins ? this._ins : (this._ins = new AppContext());
  }

  /** 静态配置文件 */
  public get config(): ConfigInfo {
    return this._config;
  }
  public setConfig(info: ConfigInfo): void {
    this._config = info;
  }

  /** system 设备基础信息 */
  public get system(): SystemModel {
    return this._system;
  }

}
/** 全局 非响应式数据 管理 */
export const appContext: AppContext = AppContext.ins;
