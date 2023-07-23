import { createVNode, render } from "vue";
import { HopeInterface, HopeNamespace } from "./@types";
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
  private rander(className: string, template?: any, props?: any) {
    const doms = document.getElementsByClassName(className);
    if (doms?.length) {
      console.log('应用已创建');
      return;
    }
    const div = document.getElementById('desktop-main'); // 容器追加到body中
    const vnode = createVNode(template, props); // 将组件编译为虚拟dom节点
    render(vnode, div); // 将虚拟dom添加到div容器中
  }

  /**
   * 创建应用
   * @param options 
   */
  createApp(options: HopeNamespace.AppOptions): void {
    const { appid, el } = options;
    this.rander(this.name + appid, Application, { appid, el });
  }

  /**
   * 销毁应用
   * @param appid 
   */
  destroyApp(appid: string): void {
    const doms = document.getElementsByClassName(this.name + appid);
    for (let i = 0; i < doms.length; i++) {
      doms[i].remove();
    }
  }
}

/** Hope 实例 */
export const hope = Hope.ins;
