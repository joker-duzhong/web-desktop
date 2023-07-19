import { ThemeEnum } from "./@types";




export type SystemInfo = {
  viewWidth: number;
  viewHeight: number;
  taskbarHeight: number;
  wallpaper?: string;
  theme: ThemeEnum;
};

export class SystemModel {
  private _data = <SystemInfo>{};

  constructor() { }

  public init(): void {
    const { clientWidth, clientHeight } = document.documentElement;
    let theme = localStorage.getItem("theme") as ThemeEnum || ThemeEnum.Light;
    let wallpaper = localStorage.getItem("wallpaper") || "https://w.wallhaven.cc/full/7p/wallhaven-7prmdv.jpg";
    this._data = {
      viewWidth: clientWidth,
      viewHeight: clientHeight - 50,
      taskbarHeight: 50,
      wallpaper,
      theme,
    };
  }

  public get data(): SystemInfo {
    return this._data;
  }

  public setWallpaper(wallpaper: string): void {
    localStorage.setItem("wallpaper", wallpaper);
    this._data.wallpaper = wallpaper;
  }
}
