export interface HopeInterface {
  /** 创建audio上下文AudioContext对象。 */
  createApp(options: HopeNamespace.AppOptions): void;
}

export namespace HopeNamespace {
  export interface AppOptions {
    /** 应用 id  */
    appid: string;
    /** icon */
    icon: string;
    /** 应用名 */
    name: string;
    /** 实例 */
    el?: Element;
  }
}


export enum ThemeEnum {
  Light = "light",
  Dark = "dark",
}