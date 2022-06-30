import "../css/index.css"
import "../css/component.less"
// @ts-ignore
import pgy from "../img/pgy.png"
function component() {
  const element = document.createElement("div");

  element.innerHTML = ["hello", "webpack"].join(" ");
  element.className = "content";

  // 创建一个img元素，设置src属性
  const imgEl = new Image();
  // @ts-ignore
  imgEl.src = pgy;
  element.appendChild(imgEl)

  // 创建div，设置背景图片
  const bgDivEl = document.createElement("div");
  bgDivEl.style.width = 200 + "px"
  bgDivEl.style.height = 200 + "px"
  bgDivEl.className = 'bg-img'
  // bgDivEl.style.backgroundColor = "red"
  element.appendChild(bgDivEl)

  return element
}

document.body.appendChild(component());