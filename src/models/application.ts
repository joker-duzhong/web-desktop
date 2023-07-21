// export declare const createApp: CreateAppFunction<Element>;

export interface AppBaseInfo {
  /** 应用 id  */
  appid: string;
  /** icon */
  icon: string;
  /** 应用名 */
  name: string;
}

export class ApplicationModel {
  private _data = <ApplicationInfo>{};
}
