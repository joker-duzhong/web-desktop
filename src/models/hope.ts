import { createVNode, render } from "vue";
import { HopeInterface, HopeNamespace } from "./types";
import Application from "../components/Application.vue";

export class Hope implements HopeInterface {
  private static _ins = new Hope();
  private name: string = "hope-";
  public static get ins(): Hope {
    return Hope._ins ? Hope._ins : (Hope._ins = new Hope());
  }
  /**
   * 渲染
   * @param className class 类名
   * @param div 当前dom
   * @param template 模板
   * @param props 参数
   */
  private rander(className: string, div?: HTMLDivElement | HTMLAudioElement, template?: any, props?: any) {
    const doms = document.getElementsByClassName(className);
    for (let i = 0; i < doms.length; i++) {
      doms[i].remove();
    }
    if (div) {
      div.setAttribute("class", className); // 为dom添加一个唯一标识类（无实质功能）
      document.body.appendChild(div); // 容器追加到body中
      const vnode = createVNode(template, props); // 将组件编译为虚拟dom节点
      render(vnode, div); // 将虚拟dom添加到div容器中
    }
  }

  /**
   *  createApp
   *
   *  文档: [https://tdesign.tencent.com/mobile-vue/components/toast](https://tdesign.tencent.com/mobile-vue/components/toast)
   */
  createApp(options: HopeNamespace.AppOptions): void {
    const { appid } = options;
    const div = document.createElement("div"); // 创建一个dom容器节点div
    this.rander(this.name + "toast", div, Application, { appid });
  }
}

/** Hope 实例 */
export const hope = Hope.ins;
