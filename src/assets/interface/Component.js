/** @jsx Component.createElement */
class VirtualDOM {
  static changeState(component, state) {

  }
  static renderElement(node) {
    if (typeof node === "string") return document.createTextNode(node)  //텍스트일경우 예외처리
    const el = document.createElement(node.type)
    // 자식 node를 먼저 renderElemet 를 거친 후, 해당 노드를 추가
    node.children.map(VirtualDOM.renderElement).forEach(element => { el.appendChild(element) })
    // 생성된 Element return.
    return el
  }
  static createElement(type, props = {}, ...children) {
    //해당 노드가 class(function) 일 경우 instance 생성 후, render 함수 결과를 return
    if (typeof type === "function") { return new type({...props, ...children }).render() }
    return { type, props, children };
  }
  static render(newVdom, container) { //Element를 container에 적재
    //diff 비교 알고리즘을 안씀
    container.innerHTML = ''
    container.appendChild(VirtualDOM.renderElement(newVdom));
  }
}



class Component {
  constructor(props) { this.props = props }
  setState(state) {
      this.state = {...this.state, state}
      VirtualDOM.changeState(this, this.state)
  }
  render() {}
}
