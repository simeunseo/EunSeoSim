# Q1. **Presentation Component - Container Component ↔ Custom hook ↔ Atomic를** 비교해보자!

Presentation Component와 Container Component는 Redux를 사용하는 프로젝트에서 자주 사용되는 구조이다.

### 두가지 패턴으로 나누는 이유

React에서 컴포넌트의 재사용성과 유지보수성을 높이기 위해서이다. React에서 컴포넌트는 상태 관리, DOM 관리, 이벤트 관리 등 다양한 역할을 하는 중요한 개념인데, 이런 다양한 작업을 각 모든 컴포넌트마다 처리하게 되면 복잡하고 가독성이 떨어져 유지보수가 힘들어진다. 따라서 Redux를 개발한 Dan abramovs는 패턴에 따라 분리하여 사용하기를 권장하고 있다. 즉 UI 쪽과 Data 쪽이 분리되는 것이다.

### Presentation Component

- 오직 뷰만을 담당하는 컴포넌트이다. 즉, **어떻게 보여지는 지**를 책임진다.
- 내부에 Presentation Component와 Container Component 모두를 포함할 수 있으며 대개 DOM 마크업과 자체 Style을 가진다.
- 어플리케이션의 나머지 부분에 대해 아무런 의존성을 가지지 않는다. 즉, 단독적인 컴포넌트가 된다.
- Redux의 스토어에는 직접적인 접근 권한이 없고, 오직 props로만 데이터를 가져올 수 있다.
- state, LifeCycle, 성능 최적화가 없는 경우에 Functional Component로 작성한다.
- 대부분의 경우 state를 갖고있지 않으며, 갖고있을 경우 데이터에 관련된 것이 아니라 UI를 관리하기 위해서여야 한다.
- ex) Page, Slidebar, Story, UserInfo, List, …

### Container Component

- 어떻게 동작하는지를 담당하는 컴포넌트이다.
- 내부에 Presentation Component와 Container Component를 모두 포함할 수 있지만, 전체를 감싸는 용도일 때를 제외하고는 대개 자체적인 DOM 마크업이나 Style을 가지지 않는다.
- 데이터 및 데이터와 관련된 동작을 다른 Presentation Component와 Container Component에 제공한다.
- 직접 작성되기 보다는 HOC(Higher-Order Components) 로 부터 생성되는 경우가 많다.
- 주로 데이터 저장소로 활용되며, state를 갖는 경우가 많다. Redux에 직접적으로 접근할 수 있다.
- ex) UserPage, FollowersSlidebar, StoryContainer, FollowedUserList, …

# 어떤 방식을 택해야 좋은 것일까?

### 어떻게 나눠야 할까

컴포넌트를 나눌 때는 state를 가지고 있냐 아니냐와 같이 기능적인 부분보다는 해당 컴포넌트가 어떤 **목적**을 가지고 있는지에 집중하는 것이 좋다.

- ex) ContextMenu 컴포넌트는 어떤 **동작**을 수행하는 것이 목적이라기 보다, 어떻게 **보여지는가**가 목적이기 때문에 Presentation으로 분류하는 것이 좋다.

### 오해

어떤 것을 Presentation으로 하고 어떤 것을 Container로 할지, 또 이 구조를 사용할지 말지는 자유이며 따라야할 규칙이 아니다. 따라서 둘의 구분을 너무 명확히 하려고 하지 말자. 별로 중요하지 않을 때도 있으며 명확히 구분하는 것도 어려운 일이다.

<img src="https://user-images.githubusercontent.com/55528304/233558972-277c8eb6-e72d-403c-89ac-3c0bd10d0c22.png" alt="Dan-Abramov가-남긴-트윗">

<small>이 방식을 제안한 Dan Abramov가 남긴 트윗 - 이제는 이 패턴을 추천하지 않는다고 한다.</small>

### 비슷한 다른 분류법들

- Stateful Component & Stateless Component
  - 대체적으로 Presentation은 Stateless하고, Container는 Stateful하다.
- Class Component & Functional Component
  - State, LifeCycle, 성능 최적화가 필요하지 않은 경우 Functional Component를 사용하고 나머지는 Class Component를 사용한다.
- Pure & ImPure Component
  - 보통 같은 props와 state가 주어졌을 때 같은 출력이 나오는 컴포넌트를 Pure Component라고 한다.

### React 폴더 구조는 어떻게 가져가야 할까?

폴더 구조도 정말 정하기 나름이며 다양한 방법이 존재한다. 팀원들끼리 상의하여 최적화된 폴더구조를 같이 고민해나가면 되겠지만, 대체로 아래와 같은 구조들이 많이 논의된다.

```jsx
└─ src
 ├─ components
 ├─ assets
 ├─ hooks (= hoc)
 ├─ pages
 ├─ constants
 ├─ config
 ├─ styles
 ├─ services (= api)
 ├─ utils
 ├─ contexts
 ├─ App.js
 └─ index.js
```

- **components**
  재사용 가능한 컴포넌트들이 위치하는 폴더이다. 컴포넌트는 매우 많아질 수 있기 때문에 이 폴더 내부에서 하위폴더로 추가로 분류하는 경우가 많다.
- **assets**
  이미지 혹은 폰트와 같은 파일들이 저장되는 폴더이다. 이미지와 같은 파일들을 public에 직접 넣는 경우도 있는데 둘의 차이는 컴파일시에 필요한지 여부이다. 파비콘과 같이 index.html내부에서 직접 사용하여 컴파일 단계에서 필요하지 않은 파일들은 public에반면, 컴포넌트 내부에서 사용하는 이미지 파일인 경우 이 assets 폴더에 위치시켜야 한다.
- **hooks (= hoc)**
  커스텀 훅이 위치하는 폴더이다.
- **pages**
  react router등을 이용하여 라우팅을 적용할 때 페이지 컴포넌트를 이 폴더에 위치시킨다.
- **constants**
  공통적으로 사용되는 상수들을 정의한 파일들이 위치하는 폴더입니다.
- **config**
  config 파일이 많지 않은 경우 보통 최상위에 위치시켜놓지만 여러개의 config 파일이 있을 경우 폴더로 분리하기도 한다.
- **styles**
  css 파일들이 포함되는 폴더이다.
- **services (= api)**
  보통 api관련 로직의 모듈 파일이 위치하며 auth와 같이 인증과 관련된 파일이 포함되기도 한다.
- **utils**
  정규표현식 패턴이나 공통함수 등 공통으로 사용하는 유틸 파일들이 위치하는 폴더이다.
- **contexts**
  contextAPI를 사용할 때 관련 파일들이 위치하는곳으로 상태관리를 위해 contextAPI 대신 redux를 사용 할 경우 폴더 이름을 store로 사용하기도 한다.

# 프론트엔드에게 디자인 패턴이란 어떤 존재일까?

### 아키텍처 VS 디자인 패턴

- 아키텍처 : 하나의 시스템(혹은 서비스)의 구성과 동작 원리이다. 소프트웨어의 특성들을 기술적, 사업적 기대사항에 맞는 구조화된 솔루션으로 만들어가는 과정으로 `아키텍처 특성`, `아키텍처 결정`, `설계 원칙`이 결합된 시스템의 구조이다.
  - 아키텍처 특성 : 시스템의 기능과 직교하는 시스템의 성공 기준 (성능, 확장성, 신뢰성, 활용성, 유지보수성, 접근성, 보안성, 사용성 등)
  - 아키텍처 결정 : 시스템 구축에 필요한 규칙을 정하는 것으로, 시스템의 제약 조건을 형성한다.
  - 설계 원칙 : 시스템 구축에 필요한 가이드라인을 정하는 것이다.
- 디자인 패턴
  - 소프트웨어 개발 과정에서 사용되고 발견한 코드 레벨의 설계 패턴들을 정의한 것으로, 객체지향에서 주로 사용한다. 모듈이 어떤 역할을 수행하는지, 클래스 범위, 함수의 목적 등 소프트웨어의 특정 구현을 직접 제공하지는 않지만 반복되는 문제 상황들을 최적화된 방법으로 해결하도록 돕는다.
    → 쉽게 말해, **어떻게 코드를 작성할 것인가에 대한 방법론**

### 우리는 왜 이러한 디자인 패턴을 사용해야 할까?

디자인 패턴은 소프트웨어 설계에서 반복적으로 나타나는 문제에 대한 해결책을 제공하기 때문에, 프론트엔드 개발자로서 최적의 방법으로 문제를 처리하기 위해 사용할 수 있다. 급속도로 변화하는 웹 개발 생태계에서 개발자들은 여러가지 문제에 부딪히면서 계속해서 더 나은 아키텍처와 프레임워크, 라이브러리들을 제안하며 새로운 디자인 패턴이 꾸준히 탄생한다. 최신 기술이 탄생하면서 이전 만큼의 가치가 없어진 것들도 있고, 최신 기술의 문제를 해결하기 위해 진화해오는 것들도 있다. 이런 과정에서 다양한 디자인 패턴에 관심을 가지고 여러가지 시도를 해보는 것은 더 효율적이고 더 나은 시스템을 갖추기 위해 분명 중요한 일이다. 또 공유되어있는 디자인 시스템에 대해서도 이것이 어떤 점에서 이득이 되는지, 더 나은 방법은 없을지 생각하고 고민하는 자세도 필요할 것이다.

> 참고자료

- [https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- [https://redux.vlpt.us/1-2-presentational-and-container-components.html](https://redux.vlpt.us/1-2-presentational-and-container-components.html)
- [https://velog.io/@st_hwang/babwm67z](https://velog.io/@st_hwang/babwm67z)
- [https://velog.io/@userhwseo/Atomic-Design](https://velog.io/@userhwseo/Atomic-Design)
- [https://velog.io/@sisofiy626/React-리액트의-폴더-구조](https://velog.io/@sisofiy626/React-%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%9D%98-%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0)
- 좋았던 글 : [https://doiler.tistory.com/m/38](https://doiler.tistory.com/m/38)
