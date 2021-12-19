# <center>Vanilla Javascript SPA</center>

<p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" height="230"></p>

---

![image](https://user-images.githubusercontent.com/22098393/146664270-9a8eb888-c1fa-41b7-9ed3-5af6cda1e51c.png)

## ✔목적
- [ ] 모듈을 구분하는 능력을 키우고, 페이지를 랜더링 하는 과정을 이해
- [ ] Javascript의 문법을 최대한 활용하여 언어에 대한 이해 향상
- [ ] 구현 후, React의 동작 방식과 비교하며 React 내부 동작 이해

## 💡기반 및 개념
- [ ] Javscript의 module별 관리를 위해 Webpack과 live-server를 사용
- [ ] `이벤트 위임` *Event Delegation*: 이벤트 버블링 *Event Bubbling* , 이벤트 캡쳐링 *Event Capturing* 사용
- [ ] React의 개발 방법을 모방

## 🛠구현
### 1순위
- [ ] Component 단위로 페이지를 개발
- [ ] Router기능을 통해 SPA 방식의 페이지 개발
- [ ] Flux패턴의 통합 상태관리 기능 구현
- [ ] 이벤트 위임을 통해 이벤트 재등록으로 인한 성능 저하 개선
### 2순위
- [ ] React Hooks 구현
- [ ] Template 형식이 아닌 Virtual-dom을 통해서 handling
  - [ ] Diff 알고리즘을 통해 re-rendering 성능 개선
  - [ ] Babel 을통해 가독성 좋게 코딩

## 🧪테스트 프로젝트 시나리오
- [ ] Router는 Main, Contact, Todo, Notfound 으로 구성한다.
- [ ] Router에서 제공하는 Navigation Link 기능을 통해 redirect 없이 화면을 전환한다.
- [ ] 각 Router는 state와 이벤트를 통해 동적인 화면을 구성한다.
- [ ] --- 이후 작성 ---