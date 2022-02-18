import {Svg} from "@svgdotjs/svg.js";
import {HmiComponent} from "../../hmi";

export let FanComponent: HmiComponent = {
  uuid: "fan",
  name: "风机",
  icon: "/assets/hmi/components/fan.svg",
  group: "工业",

  setup(elem: Svg, props: any): void {

  }
}
