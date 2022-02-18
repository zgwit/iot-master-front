import {HmiComponent} from "../../hmi";
import {Polyline} from "@svgdotjs/svg.js";

export let PolylineComponent: HmiComponent = {
  uuid: "polyline",
  name: "折线",
  icon: "/assets/hmi/components/polyline.svg",
  group: "基础组件",
  type: "polyline",

  setup(element: Polyline, properties: any): void {

  }
}
