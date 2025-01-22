# CSS; Cascading Style Sheet

---

- CSS를 적용하는 3가지 방법<sub>ex02</sub>

  > 1. head 태그 안에 스타일태그로 넣는 방법
  > 2. inline 태그 = html 태그 안에 style 속성을 넣는 방법 <br> > &nbsp;&nbsp;&nbsp;&nbsp;간단하게 스타일을 적용할 때
  > 3. 별도의 css 파일을 만들어서 import 하는 방법 <br> > &nbsp;&nbsp;&nbsp;&nbsp;style이 많을 때

---

- 선택자 - 전체 선택자, 태그 선택자<sub>ex03</sub>

  > 전체 선택자 : \*  
  > 태그선택자 : html 태그명

---

- id 선택자, class 선택자<sub>ex04<sub>

  > id속성 : html문서안의 유일한 태그를 지정할 때 사용  
  > class 속성 : 유사한 여러개를 묶어서 지정할 때 사용  
  > id는 #을 붙여서 지정  
  > class는 .을 붙여서 지정

---

- 속성선택자: [ ] 사용<sub>ex06<sub>
- 후손 선택자
  > 상속관계(계층) : 태그 안에 태그가 들어가는 경우
  >
  > - 후손 : 상속관계에서 아래의 모든 태그
  >   - 후순관계는 공백문자
  > - 직계 : 상속관계에서 바로 아래의 한 개의 요소
  >   - 직계 선택자는 > 오른쪽 꺽쇠 문자

---

_연습문제 8, 9, 10_

---

- 형제 (동위레벨) 선택자
  > 바로 뒤에 있는 레벨 선택시 **+**  
  > 위에 있는 모든 레벨 선택시 **~**

---

- 반응(액션, 이벤트) 선택자<sub>ex12<sub>

  > hover : 커서가 위로 올라왔을시  
  > active : 클릭시

---

- 상태선택자<sub>ex13<sub>

  > 포커스 : `입력대기상태`  
  > 활성화 : `Enabled`. 기본값, 정상동작상태  
  > 비활성화 : `Disabled`, 입력(동작) 불능상태  
  > 체크됨 : `checked`, 체크박스  
  > 선택됨 : `selected`, 선택박스

---

- n번째 선택자 : nth-child

  ```css
  li:child(1) {
    color: red;
  }
  li:nth-child(2) {
    color: blue;
  }
  li:first-child {
    color: aqua;
  }
  li:last-chind {
    color: brown;
  }
  ```

- n번째 선택자 - n변수 사용
  ```css
  /* n이 o~7까지 적용됨 */
  li:nth-child(n) {
    color: red;
  }
  /* 짝수번째 선택 */
  li:nth-child(2n) {
    background-color: aqua;
  }
  li:nth-child(2n + 1) {
    background-color: brown;
  }
  ```
- n번째 선택자(상속관계) : nth-of-type
  ```css
  p:nth-child(1) {
    color: red;
  }
  /* div 밑에 있는 모든 p 태그에서 1번째 */
  div p:nth-of-type(1) {
    color: blue;
  }
  div p:first-of-type {
    background-color: aqua;
  }
  div p:last-of-type {
    background-color: brown;
  }
  ```

---

_연습문제 17 18_

---

- 부정선택자 - not<sub>ex19<sub>
  > 지정한 선택자에 해당하는 요소들을 제외한 나머지 요소를 선택

---

- CSS 크기 단위<sub>ex20<sub>

  > px, %, em, rem

- 배경 이미지<sub>ex24

  ```javascript
  background-image: url('이미지경로');
  ```

  - 배경색과 이미지 함께 사용
    ```javascript
      background: url('이미지경로') no-repeat center/cover, #배경색;
    ```
  - 이미지 반복 설정

    ```javascript
    background-repeat: // repeat; 기본값: 이미지 반복
    background-repeat: // no-repeat; 반복하지 않음
    background-repeat: // repeat-x; 가로로만 반복
    background-repeat: // repeat-y; 세로로만 반복
    ```

  - 이미지 위치 설정

    ```javascript
    background-position: top left; // 왼쪽 위
    background-position: center; // 중앙
    background-position: bottom right; // 오른쪽 아래
    background-position: 50% 50%; // 상대적 위치 (x, y 비율)
    ```

  - 배경 이미지 크기 설정
    ```javascript
    background-size: auto;  // 기본값: 원래 이미지 크기
    background-size: cover; // 요소를 채우도록 비율 유지, 넘칠 수 있음
    background-size: contain; // 요소 안에 맞춤, 비율 유지
    background-size: 100px 200px; // 고정 크기 지정
    background-size: 50% 50%; // 요소 크기에 대한 비율 지정
    ```
  - 배경 고정 여부 설정
    ```javascript
    background-attachment: scroll;  // 기본값: 스크롤에 따라 이동
    background-attachment: fixed; // 화면에 고정
    background-attachment: local; // 콘텐츠와 함께 스크롤
    ```
  - 복합 배경 설정

    ```javascript
    background: url('이미지경로') no-repeat center/cover fixed;
    ```

  - 배경 클립 범위 설정
    ```javascript
    background-clip: border-box;  // 기본값: 테두리까지 배경 적용
    background-clip: padding-box; // 패딩 영역까지만 배경 적용
    background-clip: content-box; // 콘텐츠 영역까지만 배경 적용
    ```
  - 배경 혼합 모드
    ```javascript
    background-blend-mode: normal;  // 기본값: 혼합 없음
    background-blend-mode: multiply;  // 곱하기 혼합
    background-blend-mode: screen;  // 스크린 혼합
    background-blend-mode: overlay; // 오버레이 혼합
    ```

---

_연습문제 EX24, 25_

---

- display 속성 <sub>ex26

  > display:none : 안보이게, 자기공간도 사라짐  
  > visibility : hidden : 안보이게, 자기공간 존재  
  > block : 한줄차지, 줄바꿈이 됨  
  > inline : 콘텐츠만큼 너비차지, 줄바꿈이 안됨  
  > inline-block : inline이면서 너비/높이 확보 가능

  | **Block 속성**  | `div`, `h1~h6`, `p`, `hr`, `ol`, `ul`, `li`, `table`, `form` |
  | --------------- | ------------------------------------------------------------ |
  | **Inline 속성** | `span`, `a`, `img`, Text 속성(`b`, `small`, `ins`, ...)      |

---

- box model<sub>ex27

  > margin : 다른 요소와의 간격  
  > border : 테두리선의 굵기  
  > padding : 테두리선과 내용물의 간격  
  > contents : 내용물의 크기

---

- 테두리선의 속성<sub>ex28

  | **속성**                        | **예시**                                 | **설명**                                                                                        |
  | ------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------- |
  | `border`                        | `border: 1px solid #000;`                | **두께**, **스타일**, **색상**을 한 번에 지정 (단축 속성).                                      |
  | `border-width`                  | `border-width: 2px;`                     | 테두리의 **두께**를 지정. (px, em, rem 등 사용)                                                 |
  | `border-style`                  | `border-style: solid;`                   | 테두리 **스타일** 지정 (solid, dashed, dotted, double 등).                                      |
  | `border-color`                  | `border-color: #333;`                    | 테두리 **색상** 지정 (#hex, rgb(), rgba() 등).                                                  |
  | `border-top`                    | `border-top: 2px dashed red;`            | 위(상단) 테두리(두께, 스타일, 색상)를 한 번에 지정.                                             |
  | `border-right`                  | `border-right: 3px solid green;`         | 오른쪽(우측) 테두리 지정.                                                                       |
  | `border-bottom`                 | `border-bottom: 2px dotted blue;`        | 아래(하단) 테두리 지정.                                                                         |
  | `border-left`                   | `border-left: 5px double #999;`          | 왼쪽(좌측) 테두리 지정.                                                                         |
  | `border-top-width`              | `border-top-width: 4px;`                 | 위쪽 테두리의 두께만 지정.                                                                      |
  | `border-top-style`              | `border-top-style: dashed;`              | 위쪽 테두리의 스타일만 지정.                                                                    |
  | `border-top-color`              | `border-top-color: teal;`                | 위쪽 테두리의 색상만 지정.                                                                      |
  | _(right, bottom, left 도 동일)_ |                                          |                                                                                                 |
  | `border-radius`                 | `border-radius: 10px;`                   | 모서리를 **둥글게**. 4개의 값으로 각 모서리를 따로 지정 가능.                                   |
  | `border-image`                  | `border-image: url('img.png') 30 round;` | 이미지를 테두리에 맞춰 잘라서 표시. `border-image-slice`, `border-image-repeat` 등과 함께 사용. |

  > **Tips**
  >
  > - 기본적으로 테두리가 보이려면 `border-style`을 **none 외의** 것으로 지정해야 합니다(예: `solid`).
  > - `border` 단축 속성을 사용하면 `border-width`, `border-style`, `border-color`를 동시에 지정할 수 있어 편리합니다.
  > - 방향별 속성(`border-top`, `border-right`, `border-bottom`, `border-left`)은 *개별 설정*이 필요할 때 사용합니다.

- box sizing 속성<sub>ex30

  > width, height의 기준을 설정  
  > contents-box : 기본, 콘텐츠의 너비/높이 기준  
  > border-box : 콘텐츠+패딩+테두리선 굵기까지를 너비/높이로  
  > contents-box : 속성으로는 패딩+굵기까지 고려해야됨

- 글꼴(Font-family 속성)

  > serif(명조 계열) : Times New Roman, Bodoni, Garamond, Minion Web, …
  >
  > - 끝이 뾰족한 폰트, 명조체
  >
  > sans-serif(고딕 계열) : MS Trebuchet, MS Arial, MS Verdana, Univers, …
  >
  > - 끝이 매끈한 폰트, 고딕체
  >
  > cursive(필기체) : Caflisch Script, Adobe Poetica, Sanvito, Ex Ponto  
  > fantasy(장식체) : Alpha Geometrique, Critter, Cottonwood, FB Reactor, Studz  
  > monospace(고정폭) : Courier, MS Courier New, Prestige, Everson Mono …  
  > 가변폭 글꼴 : 굴림(Gulim) (가변너비 - 예쁘게), 돋움(Dotum), 바탕(Batang), 궁서(Gungsuh)  
  > 고정폭 글꼴 : 굴림체(GulimChe) (고정너비 - 정리정돈), 돋움체(DotumChe), 바탕체(BatangChe), 궁서체(GungsuhChe)  
  > 세로 글꼴 : @굴림

- position 속성<sub>ex33

  > - 웹 페이지 만드는 과정  
  >   화면 레이아웃(베치) - 박스모델  
  >    1.html태그  
  >    2. 시멘틱태그(header, footer, main, section, aside)  
  >    3. div 태그 다 넣는다. <div id="header  
  >    4.block, inline, inline-box  
  >    5.flexbox 정렬/배치 : float 속성  
  >    6.width, height  
  >    7.overflow: hidden  
  >    8.마진, 패딩  
  >    9. position
  >
  >   1. static:기본값 순차적으로 쌓이는 방식
  >   2. relative : 상대좌표에 위치(부모태그)
  >   3. absolute : 절대좌표  
  >      (기준 :relative, absolute, fixed 있는 부모 태그)
  >   4. fixed : 고정좌표 : 뷰포트(웹화면) 기준
  >   5. sticky : 특정 scroll 위치에 고정
  >
  >   10) top, right, bottom, left, right - static은 제외

  ***

  _연습문제_

  ***

  - 콘텐츠 효과 처리 - overflow 속성<sub>ex38

    > 속성은 요소의 콘텐츠가 박스(컨테이너) 범위를 넘어설 때 이를 어떻게 처리할지 결정

    | **속성값**   | **설명**                                                                           |
    | ------------ | ---------------------------------------------------------------------------------- |
    | `visible`    | 기본값. 넘치는 콘텐츠를 잘리지 않고 그대로 표시합니다.                             |
    | `hidden`     | 컨테이너를 넘어서는 콘텐츠가 잘리고, 보이지 않습니다.                              |
    | `scroll`     | 콘텐츠가 넘칠 경우 **스크롤바**가 항상 표시됩니다 (넘치지 않아도 스크롤바가 보임). |
    | `auto`       | 콘텐츠가 넘칠 때만 **자동으로 스크롤바**가 표시됩니다.                             |
    | `overflow-x` | **가로 방향** 스크롤 처리 설정. `visible`, `hidden`, `scroll`, `auto`를 지정 가능. |
    | `overflow-y` | **세로 방향** 스크롤 처리 설정. `visible`, `hidden`, `scroll`, `auto`를 지정 가능. |

---

- img태그 이미지 배치 - object-fit 속성<sub>ex39

  > 고정된 비율을 가진 콘텐츠가 부모 컨테이너의 크기에 어떻게 맞춰질지를 결정

  | 속성값       | 설명                                                                                                      |
  | ------------ | --------------------------------------------------------------------------------------------------------- |
  | `fill`       | 기본값. **부모 요소 전체**를 채우도록 이미지를 늘리거나 줄임. 비율이 맞지 않으면 이미지가 왜곡될 수 있음. |
  | `contain`    | 이미지 비율을 유지하면서 **부모 요소 안에 전부 들어가도록** 조정. 남는 영역이 생길 수 있음.               |
  | `cover`      | 이미지 비율을 유지하면서 **부모 요소를 꽉 채우도록** 조정. 일부 이미지가 잘릴 수 있음.                    |
  | `none`       | 이미지의 크기를 **원본 그대로** 유지. 부모 요소 크기에 맞추지 않음.                                       |
  | `scale-down` | `none` 또는 `contain` 중 더 작은 쪽으로 이미지를 보여줌.                                                  |

---

- 텍스트나 콘텐츠의 정렬<sub>ex40

  > text-align : 수평정렬  
  > vertical-align : 수직정렬
  >
  > - 수직정렬은 가능한 flexbox 사용
  > - inline요소에만 적용가능, block 요소 안됨

---

- 레이아웃 배치를 자유롭게 - display:flex<sub>ex42,43

  - display: flex
    - 요소를 플렉스 컨테이너로 만들어, 자식 요소(플렉스 아이템)들을 유연하게 배치할 수 있게 함.
  - flex-direction
    - 플렉스 아이템들이 정렬되는 방향(가로/세로)을 설정. (row, column 등)
  - flex-wrap
    - 아이템이 컨테이너 범위를 넘어가는 경우 줄바꿈 여부를 결정. (nowrap, wrap 등)
  - justify-content
    - 주 축(가로 방향 혹은 flex-direction)의 정렬 방식을 설정. (flex-start, center, space-between 등)
  - align-items
    - 교차 축(세로 방향)의 정렬 방식을 설정. (flex-start, center, stretch 등)
  - align-content
    - 여러 줄로 배치될 때 교차 축에서 전체 라인을 어떻게 정렬할지 결정. (줄이 여러 개 생길 때만 의미 있음)
  - order
    - 플렉스 아이템의 순서를 재배치할 때 사용. (HTML 순서와는 독립적으로 표시 순서를 조정)
  - flex-grow / flex-shrink / flex-basis
    - 아이템의 확장/축소 비율 및 기본 크기를 지정해, 공간을 어떻게 분배할지 결정.
    - 예: flex: 1 0 auto에서 1은 grow, 0은 shrink, auto는 basis에 해당.

- 주축방향 정렬 - justify-content<sub>ex44

  > 플렉스 컨테이너의 **주 축(메인 축)**에서 플렉스 아이템들을 어떻게 정렬할지 결정하는 속성  
  >  flex-direction이 row일 때는 가로 방향 정렬을, column일 때는 세로 방향 정렬을 담당

  - flex-start (기본값)
    - 아이템들을 주 축의 시작 부분에 모읍니다.
  - flex-direction: row;라면 왼쪽 정렬,
  - flex-direction: column;이라면 위쪽 정렬과 유사합니다.
  - flex-end
    - 아이템들을 주 축의 끝 부분에 모읍니다.
  - flex-direction: row;일 때는 오른쪽, column;일 때는 아래쪽 정렬.
  - center
    - 주 축을 기준으로 아이템들을 중앙에 모읍니다.
    - 수직 방향(세로)이나 수평 방향(가로) 어느 쪽이든 flex-direction 설정값에 따라 정중앙 정렬.
  - space-between
    - 아이템들 사이에만 균등한 여백을 줍니다.
    - 첫 번째 아이템은 주 축의 시작 부분에,  
      마지막 아이템은 주 축의 끝 부분에 위치하며,  
       중간 아이템들 간 간격만 균등하게 분배
  - space-around - 아이템들 양 옆에 균등한 여백을 줍니다.  
    각 아이템의 양쪽에 동일한 간격이 생기며,  
     컨테이너의 양 끝과의 간격은 중간 아이템들 사이 간격의 절반이 됩니다.
  - space-evenly
    - 아이템들 사이와 컨테이너 양 끝 부분까지 모두 동일한 간격을 줍니다.
    - space-between나 space-around와 달리, 모든 간격이 동일하게 설정됩니다.

- 교차축방향정렬 : align-items<sub>ex45,46

  > 플렉스 컨테이너 내부에서, 교차 축 방향으로 아이템을 어떻게 정렬할지 지정.

  - flex-start
    - 교차 축의 시작 지점에 아이템들을 정렬.
  - flex-end
    - 교차 축의 끝 지점에 아이템들을 정렬.
  - center
    - 교차 축의 중앙에 아이템들을 모음.
  - baseline
    - 텍스트의 베이스라인을 기준으로 아이템들을 정렬.
  - stretch (기본값)
    - 아이템들을 남은 교차 축 공간만큼 자동으로 늘려서 채움.

- 각자 정렬 : align-self<sub>ex47,48,50_1

  > 특정 플렉스 아이템(개별 요소)의 교차 축 정렬 방식을 별도로 지정

  - flex-start
    - 교차 축의 시작 지점에 정렬.
  - flex-end
    - 교차 축의 끝 지점에 정렬.
  - center
    - 교차 축의 중앙에 정렬.
  - baseline
    - 텍스트의 베이스라인에 맞춰 정렬.
  - stretch
    - 아이템을 남는 교차 축 공간만큼 늘림.

- basis, grow, shrink 속성<sub>

  - flex-basis : 유연한 박스의 기본 영역

    > - auto, 기본값 : 아이템의 너비높이에 따라서 결정, 계속늘어남
    > - initial - 컨테이너 공간이 부족하면, 최소크기까지 줄임
    > - 수치(100px, 50%) - 기본적인 너비/높이값

  - grow 속성 : 유연하게 늘리기

    > 기본값 : 0  
    > 정수값 : 총합 n/sum 비율

  - shrink 속성 : 유연하게 줄이기
    > 기본값 : 1  
    > width를 고정크기로 설정한다.

- grow, shrink 애니메이션<sub>ex51,52

- 순서 정하기 - order<sub>ex53

- 높낮이 정하기 - z-index <sub>ex54

---

\_연습문제<sub>ex55,56,57

---

- 큰 이미지를 쪼개쓰기 - 스프라이트<sub>ex58

  ```javascript
  .icon {
  display: inline-block;
  width: 50px;       /* 보여줄 영역 너비 */
  height: 50px;      /* 보여줄 영역 높이 */
  background-image: url('sprite.png');
  background-repeat: no-repeat;
  }

  /* 예: x=0, y=-100 픽셀 지점에 있는 아이콘 사용 */
  .icon.home {
  background-position: 0 -100px;
  }

  /* 예: x=-50, y=-100 픽셀 지점에 있는 아이콘 사용 */
  .icon.search {
  background-position: -50px -100px;
  }
  ```

  ***

\_연습문제- 다음로그인화면<sub>ex59

---

- 변환효과 - transition속성<sub>ex64

  > 특정 CSS 속성이 변할 때(예: hover, focus, 클릭),  
  > 부드러운 애니메이션 효과로 전환될 수 있게 함

  ```javascript
  .selector {
  transition: [property] [duration] [timing-function] [delay];
  }
  ```

  - property: 애니메이션할 CSS 속성(또는 all)
  - duration: 애니메이션 진행 시간 (ex: 0.3s, 200ms)
  - timing-function: 애니메이션 속도 곡선 (ex: ease, linear, ease-in-out)
  - delay: 애니메이션 시작 전 지연 시간 (ex: 0.2s)

- 변환속성 - transform 속성<sub>ex66

  > 크기, 각도 등이 변형되는 것

- 수평/수직 정렬(align)<sub>ex67

  > 1. text-align : 2행 이상부터 오동작 가능성 있음
  > 2. vertical-align : inline or inline-block, table에서만 가능
  > 3. line-height : 부모와 자신의 높이를 조절
  > 4. margin, padding : 부정확하다
  > 5. position-absolute, top, left, bottom, right : 부정확
  > 6. flexbos : center
  > 7. css grid : center

---

- css 리셋코드<sub>ex70

---

- 반응형 웹 - 미디어쿼리 속성<sub>ex71,72

  > 화면 너비에 따라서 반응하는 동적인 웹  
  > 화면 높이는 스크롤이 있어서 별도 처리가 필요없음

  - pc화면너비 : 가로 960px 이상
  - tablet : 가로 768px 이상
  - mobile 화면너비 : 가로 767px 이하

---

\_연습문제 <sub>ex73

---

- 벤더 프리픽스<sub>ex74

  > 웹 브라우저에 새로운 기능이 나올 때 중간단계로 벤더 프리픽스 제공  
  > 새기능 : transition, transform, gradient, user-select
  >
  > 1. linear-gradient : 구버전 기능 없음
  > 2. -webkit -linear -gradient : 중간실험단계 버전
  > 3. linear.com 사이트 : 웹 브라우저 기능 명세
