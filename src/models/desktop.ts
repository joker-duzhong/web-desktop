import { AppBaseInfo } from "./application";

export class DesktopModel {
  private _shortcuts: AppBaseInfo[] = [];


  public setShortcuts(list: AppBaseInfo[]): void {
    this._shortcuts = list;
  }
  public get shortcuts(): AppBaseInfo[] {
    return this._shortcuts;
  }
}
