# REACT

- 순수 html 문서 <sub>ex01

  > 웹사이트 : 여러 웹페이지의 모임  
  > 웹페이지(html)를 만드는 방법
  >
  > 1. MPA(Multi page app)
  >    - 전통적인 방법 : HTML/CSS/JS
  >      - Web Templete : 부트스트랩, 테일윈드 - 단점 : 페이지 이동시 재렌더링 과정에서 부드럽지 않음, 구조적 설계가 부족하다.  
  >        &emsp;&emsp;&emsp;index.html news.html cafe.html login.html ...<br>
  > 2. SPA(Single page app)
  >    - index.html 파일 하나만 존재
  >    - <div id="root"></div> 루트엘리먼트에 JS 다 렌더링 (그린다.)
  >    - 장점 : 모바일 앱처럼 화면전환이 빠르고, 부드럽다. <br> &emsp;&emsp;&emsp;구조적 설계를 다양하게 (클래스, 함수, 객체) 할 수 있다.
  >
  > &emsp;&emsp;&emsp;전체 번들(웹사이트의 모든 데이터를 한꺼번에 다운로드 후 동작)
  >
  > &emsp;&emsp;- 초기 진입시 지연이 발생할 수 있다.

- 순수 js로 html 만들기<sub>ex02

  > ```javascript
  > // <h1 class="greeting">Hello World!</h1>
  > //JS로 h1 문서객체를 생성해서 추가한다.
  > const h1 = document.createElement("h1");
  > h1.className = "greeting";
  > h1.textContent = "Hello World";
  > // 생성된 h1 문서객체를 root div에 추가한다.
  > document.getElementById("root").appendChild(h1);
  > ```

- 리액트 함수(lib)를 이용하여 html 요소 생성하기<sub>ex03

  > 라이브러리(도서관) : 여러 함수의 모임

  ```javascript
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
  ```

- JSX를 이용한 html 요소 생성하기<sub>ex04

  > JSX문법을 JS로 변환시켜주는 js  
  >  min : 용량을 줄이기 위해서 공백,줄바꿈을 없앰.
  >
  > ```javascript
  > <script src="https://unpkg.com/@babel/standalone/babel.min.js"> </script>
  > ```
