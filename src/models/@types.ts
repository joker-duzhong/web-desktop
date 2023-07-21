import { AppBaseInfo } from "./application";

export interface HopeInterface {
  /** 创建audio上下文AudioContext对象。 */
  createApp(options: HopeNamespace.AppOptions): void;
}

export namespace HopeNamespace {
  export interface AppOptions extends AppBaseInfo {
    /** 实例 */
    el?: Element;
  }
}

export enum ThemeEnum {
  Light = "light",
  Dark = "dark",
}
