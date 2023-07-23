// export declare const createApp: CreateAppFunction<Element>;

import { Component } from "vue";

export interface AppBaseInfo {
  /** 应用 id  */
  appid: string;
  /** icon */
  icon: string;
  /** 应用名 */
  name: string;
  /** 组件实例 */
  el: Component;
}

export class ApplicationModel {
  // private _data = <ApplicationInfo>{};
}
