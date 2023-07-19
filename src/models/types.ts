export interface HopeInterface {
  /** 创建audio上下文AudioContext对象。 */
  createApp(options: HopeNamespace.AppOptions): void;
}

export namespace HopeNamespace {
  export interface Dialog {
    /** 标题 */
    title?: string;
    /** 内容 */
    content: string;
    /** 取消按钮文本 */
    cancelBtn?: string;
    /** 确认按钮文本 */
    confirmBtn?: string;
    /** 点击取消回调 */
    cancel?: () => void;
    /** 点击确认回调 */
    confirm?: () => void;
  }

  export interface PreviewImageOptions {
    /** current 为当前显示图片的链接 */
    current: string | number;
    /** 需要预览的图片链接列表  */
    images: string[];
    /** 关闭时触发  */
    close?: () => void;
    /** 预览图片切换时触发 */
    indexChange?: (index: number) => void;
  }
  export interface ToastOptions {
    /** 图标排列方式。 默认 row */
    direction?: "row" | "column";
    /** 弹窗显示毫秒数  默认  2000  */
    duration?: number;
    /** 自定义图标  */
    icon?: string | Function;
    /** 弹窗显示文字  */
    message: string;
    /** 弹窗展示位置。 默认 middle  */
    placement?: "top" | "middle" | "bottom";
    /** 防止滚动穿透，即不允许点击和滚动 默认  false  */
    preventScrollThrough?: Boolean;
    /** 提示类型  */
    theme: "loading" | "success" | "fail";
  }

  export interface AppOptions {
    /** 音频的地址  */
    appid: string;
  }
}
