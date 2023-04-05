# Q1. 웹 최적화는 무엇일까?

웹 최적화 원하는 웹 성능을 구현하기 위한 조건을 만드는 것으로, 다양한 부분으로 살펴볼 수 있다.

## ✅ 속도 최적화

페이지 로딩 시간을 빠르게 하는 것이다. 로딩 속도가 빠를수록 사용자들이 웹사이트를 더 많이 방문하고, 더 오래 머무르며, 더 긍정적인 사용자 경험을 가지게 되기 때문이다. 또한 검색 엔진에서도 웹사이트의 속도를 고려하여 검색 순위를 결정하기 때문에, 웹 속도 최적화는 검색 엔진 최적화(SEO)에도 중요한 요소 중 하나이다. 속도 최적화를 위해 다음과 같은 방법을 사용할 수 있다.

- 이미지 크기를 줄인다.
- 브라우저 캐시를 이용하여 자주 사용되는 파일들을 저장해두고 재사용한다.
- 전 세계적으로 분산된 서버인 Content Delivery Network(CDN)을 이용한다.
- JavaScript와 같은 스크립트 파일들을 최적화한다.
- 서버의 성능을 높이기 위해 적절한 호스팅 서비스를 선택하고, 서버의 자원 사용을 최적화한다.

## ✅ 사용성 최적화

UX 측면에서 사용자들이 서비스를 쉽게 이해하고 사용할 수 있는 경험을 제공하는 것이다. 사용자의 요구와 욕구에 맞추어 페이지를 구성하고, 사용자들이 겪을 문제점을 파악하고 해결하기 위해 사용자의 피드백을 수집하거나 웹사이트에서 발생하는 데이터를 분석할 수 있다. 사용성 최적화를 위한 요소에는 다음과 같은 것들이 있다.

- 사용자가 원하는 정보를 쉽게 찾을 수 있도록 콘텐츠와 레이아웃을 구성한다.
- 화면 크기에 따라 레이아웃이 적절히 조정되는 반응형 디자인을 고려한다.
- 신체적, 인지적, 기술적 장애를 가진 사람을 포함한 모든 사용자가 웹사이트를 이용할 수 있도록 디자인한다.

## ✅ 안정성 최적화

웹사이트가 오류 없이 안정적으로 동작하도록 하는 것이다. 사용자의 이탈률을 감소시키는데 중요하다. 안정성 최적화를 위해 다음과 같은 방법을 사용할 수 있다.

- 잘못된 코드가 생기지 않도록 코드 품질을 관리한다.
- 암호화된 연결을 제공하거나 적절한 방화벽을 적용하여 보안을 강화한다.
- 지속적인 모니터링을 통해 사이트의 장애를 빠르게 감지하여 조치한다.

## ✅ SEO 최적화

웹사이트가 검색 엔진에 잘 노출시켜서 더 많은 사용자를 유도하기 위한 작업이다. 검색 엔진의 알고리즘을 이해하고 그에 맞게 사이트를 구성해야 한다. SEO 최적화를 위한 방법은 다음과 같은 것들이 있다.

- 검색 엔진에서 웹사이트를 분석할 때 메타 태그를 이용하여 사이트의 정보를 수집하므로, 메타태그를 적절히 작성한다.
- 웹사이트의 구조를 보여주는 사이트맵을 작성하여 검색 엔진이 사이트에 대한 정보를 더 정확하고 빠르게 수집할 수 있도록 한다.
- 사이트 내부의 페이지들이 서로 링크되는 방식인 내부 링크 구조를 명확하고 간단하게 구성한다.

# Q2. 최적화가 필요한 이유는 무엇일까?

웹 최적화는 궁극적으로 사용자를 더 많이 끌어모으기 위해서이다. 웹이 최적화된다는 것은 다른 사이트에 비해 자주 상단에 노출되어 유입률을 높이고, 빠른 속도와 좋은 사용성으로 방문한 사용자의 이탈률을 줄여 서비스에서 기대하는 사용자의 작용을 유도할 수 있고 이는 사용자의 수를 늘리는 것으로 이어진다. 또한 메모리 사용과 처리 시간 등 컴퓨터의 여러 리소스를 소모하며 동작하는 웹 환경에서 최소한의 데이터로 가장 빠른 시간안에 사용자에게 화면을 띄우므로써 각종 비용 대비 효과를 늘리고 수익 창출에 도움이 될 수 있다.

# Q3. 이를 위해 어떤 개발을 해야 할까?

## ✅ 성능 최적화

### 성능 측정 도구 사용하기

- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) : Chrome 개발자 도구에 내장되어 있는 도구이며 웹사이트의 다양한 측면을 평가하여 개발자가 개선할 수 있는 성능 이슈를 제공하는 것에 중점을 둔다.
- [PageSpeed Insights](https://pagespeed.web.dev/?utm_source=psi&utm_medium=redirect&hl=ko) : 웹사이트의 로딩 속도를 중점으로 평가하며 측정 결과를 0~100점 사이의 점수로 제공한다. Lighthouse와 비슷하다.
- [Google Optimize](https://marketingplatform.google.com/about/optimize/) : A/B테스트 도구로, 방문자를 임의의 두 집단으로 나누고 페이지를 다르게 보여준 후 어떤 페이지가 더 성과가 높게 나오는지 확인할 수 있다.
- [Mobile Friendly Test](https://search.google.com/test/mobile-friendly) : 페이지가 모바일에서 얼마나 쉽게 사용할 수 있는지를 확인할 수 있다.

## ✅ 렌더링 최적화

리플로우를 최대한 적게 발생시키면서 빠르게 화면을 그리는 것을 목표로 한다.

### CSS 최적화

- 리플로우, 리페인트를 고려하여 작성하기
  ![Untitled](https://user-images.githubusercontent.com/55528304/229984638-31b61a74-82eb-4cc0-9ef2-0b615414807f.png)
  브라우저에 스타일이 그려지는 순서는 위와 같다. 레이아웃에 영향을 주는 css 속성을 변경할 경우 ‘Layout’부터 다시 그려지게 되는데 이를 리플로우라고 한다.
  ![Untitled 1](https://user-images.githubusercontent.com/55528304/229984614-9d91d1f5-d26e-4f9a-8060-28d37bdfe53c.png)
  레이아웃에 영향을 주지 않는 속성을 변경하면 ‘Paint’부터 다시 수행하게 되는데 이를 리페인트라고 한다. 리플로우가 일어나면 전체 픽셀을 다시 계산해야 하기 때문에 되도록 리페인트 속성을 사용하여 스타일을 작성하는게 좋다.
  - 리플로우를 발생시키는 속성
    ```css
    position / width / height / margin / padding / display / top / left / right / bottom /
    box-sizing / border-color / text-align / border / border-width /
    font-family / float / font-size / font-weight / line-height / vertical-align /
    white-space / word-wrap / text-overflow / text-shadow ...
    ```
  - 리페인트를 발생시키는 속성
    ```css
    color / border-style / visibility / background / background-color /
    background-image / background-position / background-repeat / background-size /
    text-decoration / outline / outline-style / outline-color / outline-width /
    border-radius / box-shadow ...
    ```
  - 리플로우와 리페인트를 발생시키지 않는 속성
    ```css
    opacity / transform / cursor / z-index ...
    ```
- 사용하지 않는 CSS 제거 : 사용하지 않는 CSS는 Lighthouse를 통해 확인할 수 있다.
- 간결한 스타일 작성 : 복잡한 셀렉터 사용을 지양하고 선택자를 간결하게 사용하여 특이성을 낮게 유지한다.
  ```css
  .mypage .mypage_item {
    ...;
  } /* 🔺 */
  .mypage_item {
    ...;
  } /* ✅ */
  ```
  위 코드의 첫 줄의 경우 .mypage_item의 부모요소를 확인하기 위해 DOM을 거슬러 올라가는 시간이 소요된다.
- position 설정시 `absolute`나 `fixed`로 설정하면 주변 요소에 영향을 주지 않는다.

### HTML 최적화

- 인라인 스타일 지양 : 웹 페이지가 그려질 때 레이아웃에 영향을 미치면서 추가로 리플로우를 발생시킨다.
- 복잡한 DOM 트리 지양 : DOM이 작고 깊이가 얕을수록 좋고, 불필요하게 감싸는 요소는 제거한다.

### 애니메이션 최적화

- 자바스크립트 api, 라이브러리보다 css를 통해 구현하는 것이 성능면에서 좋다.
- `transform`은 리플로우와 리페인트를 발생시키지 않으므로 렌더링 속도를 향상시킬 수 있다.

### JavaScript 최적화

- 강제 동기 레이아웃 최적화
  DOM의 속성을 변경하면 화면 업데이트를 위해 레이아웃이 발생할 수 있는데, 특정 속성을 읽을 때 최신 값을 계산하기 위해 레이아웃이 동기적으로 발생하는 것을 강제 동기 레이아웃이라고 한다. 이는 JS 실행 시간을 증가시킨다.
- 레이아웃 스래싱 피하기
  한 프레임 내에서 강제 동기 레이아웃이 연속적으로 발생하는 것을 막아야 한다.

[더보기](https://ui.toast.com/fe-guide/ko_PERFORMANCE#%EA%B0%95%EC%A0%9C-%EB%8F%99%EA%B8%B0-%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83-%EC%B5%9C%EC%A0%81%ED%99%94)

## ✅ 로딩 최적화

### css는 head에서, js는 body 하단에서 불러오기

- html과 css는 바로 눈에 보이는 부분이므로 빠르게 그려질수록 좋다.
- js를 제외한 구조들을 모두 로드한 뒤에 js를 다운로드하는 것이 좋다.

### media 속성 사용

반응형 조건별로 css를 불러온다.

```html
<link href="style.css" rel="stylesheet" />
<!-- 🔺 -->
<link
  href="style.css"
  rel="stylesheet"
  media="(min-width:320px) and (max-width:768px)"
/>
<!-- 브라우저의 넓이가 320이상 769미만일때 스타일시트 해석 -->
<link href="style.css" rel="stylesheet" media="print" />
<!-- 프린트할때만 스타일시트 해석 -->
```

### async/defer

async와 defer 속성을 사용하면 파일의 실행 시점을 조정할 수 있다.

```html
<!-- 병렬 다운로드 & 즉시실행 -->
<script async src="test.js"></script>

<!-- 병렬 다운로드 & 지연실행(웹페이지가 모두 그려지고 DOM이 들어왔을 때 스크립트를 실행한다) -->
<script defer src="test.js"></script>
```

- `<script>` : 반드시 순서대로 실행되어야 할 때
  ![Untitled 2](https://user-images.githubusercontent.com/55528304/229984619-7deb6ab6-5a4a-4a05-b506-6ac7937151f2.png)
- `<script async>` : 빨리 실행되어야 할 때
  ![Untitled 3](https://user-images.githubusercontent.com/55528304/229984623-c4991dc2-9523-427c-85f6-ad343400a252.png)
- `<script defer>` : 마지막에 파싱해도 상관없을 때
  ![Untitled 4](https://user-images.githubusercontent.com/55528304/229984626-6642ee13-7a3b-4ede-9534-5bcb0ad15b4e.png)

### 이미지 최적화

- `<picture>` 사용
  - type 속성으로 사용자 환경에 맞는 이미지를 제공할 수 있다.
  - media 속성으로 브라우저 사이즈에 맞는 이미지를 제공할 수 있다.
- img 지연로딩 활용 : loading 속성 (auto, lazy, eager)로 이미지를 지연/병렬 로딩할 수 있다.
  - auto : 디폴트 값
  - lazy : 보이는 부분만 먼저 출력하고 화면 바깥쪽 이미지는 로딩하지 않는다.
  - eager : 화면 위치에 상관없이 페이지가 로딩되자마자 이미지를 로드한다.
- 스프라이트 이미지 사용 : 여러 이미지를 하나의 이미지로 만들고 css의 background-position 속성으로 부분적으로 이미지를 사용한다. 이미지 파일 개수를 줄일 수 있다.

### 파일 압축하기

- 웹팩 사용 : 웹팩은 모듈을 번들링 해주는 프레임워크로, 여러개의 자원을 하나의 파일로 병합 및 압축해준다. [더보기](https://velog.io/@kim-jaemin420/%EC%9B%B9%ED%8C%A9%EC%9B%B9%ED%8C%A9%EC%9D%B4%EB%9E%80-%EC%9B%B9%ED%8C%A9%EC%9D%B4-%ED%95%98%EB%8A%94-%EC%9D%BC%EA%B3%BC-%ED%95%84%EC%9A%94%ED%95%9C-%EC%9D%B4%EC%9C%A0)
- JS 압축 : [UglifyJS](https://www.npmjs.com/package/uglify-js) 등으로 파일을 압축한다.

### CDN 사용

Content Delivery Network로, 유저에게 많은 콘텐츠를 손실없이 빠르게 전달할 수 있다.

### 캐싱

이전과 동일한 리소스 요청이 왔을 때 저장해둔 파일을 사용하여 더 빠르게 로딩할 수 있다.

## ✅ SEO 최적화

[Google SEO 기본 가이드](https://developers.google.com/search/docs/beginner/seo-starter-guide#googleseeyourpage)

### Google의 SEO 체크리스트 항목 및 중요도 배점

![Untitled 5](https://user-images.githubusercontent.com/55528304/229984628-328a5142-1bc0-4109-8f1f-72aff2f9f63f.png)

![Untitled 6](https://user-images.githubusercontent.com/55528304/229984609-ad561d04-81e4-46e7-97c8-2c4768f660a9.png)

### SEO 최적화를 위한 코드 작성

- 문법에 맞는 HTML 작성
  - 시맨틱 태그 사용하기
  - [Google Rich Result Test](https://search.google.com/test/rich-results?hl=ko)로 잘못된 마크업을 사용했는지 디버깅
- 고유하고 정확한 페이지 제목 사용하기
  - 눈길을 사로잡는 문구 사용
  - 페이지마다 고유한 title 태그 작성
  - 제목의 시작이나 끝에 사이트 이름을 포함하고 나머지 제목은 –, :, |를 사용
- 메타 태그 사용
  - 페이지를 정확하게 나타내는 설명 작성
  - 설명에 콘텐츠 관련 정보를 포함
- a 태그로 적절한 키워드 배치
  - `<div>` , `<button>` 보다는 `<a>` 이용
  - `<a href>` 요소가 없으면 Google이 URL을 크롤링하지 않음
- HTTPS 적용
  - https 보안 프로토콜을 사용하는 사이트에 SEO 점수를 추가 부여함
- 올바른 상태 코드 작성 : [관련 자료](https://developers.google.com/search/docs/crawling-indexing/http-network-errors?hl=ko)

## Q4. 최적화를 위한 개발을 꼭 해야 할까?

웹 사이트의 목적과 상황에 따라 큰 부분을 차지할 수 있다. 최적화는 사용자 경험의 개선으로 이어지고, 이는 기업의 실적으로 이어지기 때문이다. 비용 측면이 아니더라도, 다양한 사용자들이 직접 사용하고 가치를 얻을 서비스를 개발하는 입장에서 사용자의 입장, UX를 고려하는 것은 필수불가결하다고 생각한다.

또한 웹 어플리케이션은 복합적인 환경 위에서 동작하며, 다양한 브라우저의 기술이 빠른 속도로 변화하므로 프론트엔드 개발자로서 이런 변화의 속도에 발맞춰 계속해서 공부하고 페이지를 개선하는 것은 반드시 갖춰야 할 자세이다.

> 참고자료
>
> - [https://velog.io/@hsecode/최적화-웹-성능-최적화-방법-5분-완성](https://velog.io/@hsecode/%EC%B5%9C%EC%A0%81%ED%99%94-%EC%9B%B9-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94-%EB%B0%A9%EB%B2%95-5%EB%B6%84-%EC%99%84%EC%84%B1)
> - 우리의 친구 GPT
