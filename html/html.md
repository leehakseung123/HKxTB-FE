# html

---

- 문서 제목 태그

  > h1 : 32픽셀 기본글씨 2배  
  > h2 : 24픽셀, 기본글씨 1.5배  
  > h3 : 21.28픽셀, 기본글씨 1.33배  
  > h4 : 18.72픽셀, 기본글씨 1.17배  
  > h5 : 13.28픽셀, 기본글씨 0.83배  
  > h6 : 10.72픽셀, 기본글씨 0.67배

- `<br>` : 줄 바꿈 태그
- `<p> ` : 문단 태그
- `<a href=""> </a>` : 하이퍼링크, 앵커 태그

  > 페이지 안에서 스크롤 하기
  >
  > - `<a href="#p1">문단 1로 이동</>`

- 텍스트 속성 태그<sub>ex08</sub>
  1. **`<b>`** (Bold)
  - **역할:** 텍스트를 굵게 표시합니다.
  - **예시:** `<b>굵은 텍스트</b>`
  - **결과:** **굵은 텍스트**

2. **`<i>`** (Italic)

   - **역할:** 텍스트를 기울임꼴로 표시합니다.
   - **예시:** `<i>기울임 텍스트</i>`
   - **결과:** _기울임 텍스트_

3. **`<small>`** (Small Text)

   - **역할:** 텍스트를 작게 표시합니다.
   - **예시:** `<small>작은 텍스트</small>`
   - **결과:** 작은 텍스트

4. **`<sub>`** (Subscript)

   - **역할:** 텍스트를 아래 첨자로 표시합니다.
   - **예시:** `화학식 H<sub>2</sub>O`
   - **결과:** 화학식 H₂O

5. **`<sup>`** (Superscript)

   - **역할:** 텍스트를 위 첨자로 표시합니다.
   - **예시:** `2<sup>nd</sup> Edition`
   - **결과:** 2ⁿᵈ Edition

6. **`<ins>`** (Inserted Text)

   - **역할:** 삽입된 텍스트를 밑줄로 강조합니다.
   - **예시:** `<ins>삽입된 텍스트</ins>`
   - **결과:** 삽입된 텍스트

7. **`<del>`** (Deleted Text)
   - **역할:** 삭제된 텍스트를 취소선으로 표시합니다.
   - **예시:** `<del>삭제된 텍스트</del>`
   - **결과:** ~~삭제된 텍스트~~

- 목록 (리스트) 태그<sub>ex09</sub>

  > ol : ordered list : 순서 있는 1,2,3
  > ul : undered list : 순서 없는 점점점
  > li : 항목

- 테이블 태그<sub>ex10</sub>

  > thead : table header  
  > tbody : table body 표 내용  
  > tr : table row 한줄  
  > th : table headercell 제목셀  
  > td : table data 데이터셀

- 테이블 셀 병합<sub>ex11</sub>

  > 속성 colspan : 가로방향 셀 병합
  > 속성 rowspan : 세로방향 셀 병합

- 테이블 태그의 속성들<sub>ex12</sub>

  > border : 테두리선의 굵기  
  > width : 넓이  
  > height : 높이  
  > rowspan : 세로칸수  
  > colspan : 가로칸수  
  > font 태그의 color 속성 : 글씨 속성  
  > bgcolor : 배경속성  
  > align : 정렬 (left, center, right)

- 이미지 태그<sub>ex13</sub>
  > `````html
  > <img src="image.jpg" alt="대체 텍스트" />
  > 이미지 다운로드 링크 걸기 ````html
  > <a href="#" download="이미지 파일"> </a>
  > `````

_연습문제 - 시 웹페이지 만들기 <sub>ex15</sub>_

- 입력양식 태그 - form 태그<sub>ex16</sub>

  > 로그인, 회원가입 화면에서 사용자의 정보를 서버로 전송하는 용도
  >
  > 웹 브라우저가 서버에 데이터를 통신하는 방법
  >
  > 1. form태그 통신 : GET/POST 메소드
  > 2. WB 주소줄을 이용한 통신 : GET 메소드
  > 3. JS를 이용한 통신 :
  >    - fetch함수, ajax 함수, axious 함수, GET/POST/PUT/FETCH/DELETE

  ## HTTP GET 방식

- **예시:**  
  `http://localhost:3000/login?id=admin&pw=1234`
- **구성 요소 설명:**

  - **`http` (스키마):** 통신 규약(프로토콜)
  - **`://` (구분자):** 스키마와 서버 주소를 구분
  - **`localhost` (서버 주소):** 서버의 IP 주소(로컬 PC의 경우 `127.0.0.1`)
  - **`3000` (포트 번호):** 프로그램에서 사용하는 인터넷 번호
  - **`/login` (경로):** 서버 내 특정 프로그램 경로
  - **`?` (구분자):** 경로와 데이터(Query String)를 구분
  - **`id=admin&pw=1234` (Query String):** `Key=Value` 쌍으로 데이터 전송
    - `id=admin`: ID가 `admin`
    - `pw=1234`: PW가 `1234`

- **한글 사용 시 URL Encoding 필요:**
  - 예: "한양" → `%ED%95%9C%EC%96%91`
  - 유니코드를 3바이트로 변환하고 `%` 기호로 표시

---

### **연습문제**

- **GET 방식의 주소 완성:**
  - 요구사항:
    1. HTTP GET 방식
    2. 서버 주소: `www.mysite.com` (IP: `172.182.381.273`)
    3. 포트 번호: `8080`
    4. 경로: `/mypage/qna`
    5. 데이터: `phone=01012341234`와 `address=한양`
  - **완성된 주소:**  
    `http://www.mysite.com:8080/mypage/qna?phone=01012341234&address=%ED%95%9C%EC%96%91`

---

## 도메인 및 IP 주소

- **도메인 네임 (Domain Name):**  
  숫자로 된 IP 주소를 사람이 읽기 쉽게 영문/한글로 변환한 이름

  - 예: `http://www.naver.com` → `https://125.200.222.141`

- **도메인 네임 서버 (DNS):**  
  도메인 네임을 IP 주소로 변환해주는 서버

- **IP 주소:** 인터넷 상의 고유 PC 주소
  - **IPv4 형식:** `0~255.0~255.0~255.0~255`
    - 예: `127.0.0.1` (내 PC 주소)
    - 예: `192.168.0.1` (무선공유기 기본 주소)

---

## HTTP POST 방식

- **특징:**  
  데이터가 HTTP 패킷의 Body에 감춰져 전송됨
- **예시:**  
  `http://localhost:3000/login`

---

## `<form>` 태그 정리

- **역할:** 사용자 데이터를 서버로 전송
- **속성:**

  - **`action`:** 데이터를 전송할 서버 주소
  - **`method`:** 전송 방식 (`GET`/`POST`)

- **`<input>` 태그:** 사용자 데이터를 입력받는 태그

  - **`type` 속성:**
    - `text`: 문자열 입력
    - `password`: 암호문 입력
    - `submit`: 전송 실행 버튼
  - **`name` 속성:** 서버로 전달되는 매개변수 이름
    - 예: `name="id"` → 서버에서 매개변수 `id`로 데이터 처리

- **예시 코드:**

  ```html
  <form action="http://www.myserver.com" method="GET">
    <input type="text" name="id" /><br />
    <input type="password" name="password" /><br />
    <input type="submit" />
  </form>
  ```

- 입력태그의 종류<sub>ex17, 18, 19</sub>
  > label 태그 : 입력태그의 제목 표시  
  > for 속성 : label태그와 input 태그를 연결해주는 역할
  >
  > ```html
  > <label for="id">아이디</label>
  > ```
  >
  > type 속성 : 입력되는 데이터의 타입  
  > id : html 문서의 유일한 식별자  
  > name : request parameter 서버의 전송되어지는 데이터, 서버의 매개변수와 연결  
  > value : 입력된 데이터(초기값 넣을 수 있음)  
  > placeholder : 힌트 문구  
  > checkbox : 여러 개 선택 가능
  >
  > - 서버에서 checkbox라는 이름으로 파라미터를 받는다. 배열형태이다.
  > - checked : 체크된 상태
  >
  > button 태그 : type이 없으면 기본값이 submit이다.  
  > type="hiiden" : 숨김속성, 사용자에게는 보이지 않고 서버에는 전송  
  > select 태그 : 선택목록
  >
  > ```html
  > <select name="" id="">
  >   <option value=""></option>
  > </select>
  > ```
  >
  > `<hr />` : 수평선 태그  
  > 색상 선택 태그 : ` 
html <input type="color" value=""`  
  > 날짜 선택 태그 : `<input type="date" name="date" value="2025-01-06" />`  
  > 날짜시간 선택 태그: `<input type="datetime-local" name="date" value="2025-01-06" />`  
  > email 태그 : `<input type="email" name="email" value="aaa@gmail.com" />`  
  > month 태그: `<input type="month" value="2025-01" />`  
  > 숫자 태그 : `<input type="number" value="10" min="" max="" step=""/>`  
  > 범위 태그 : `<input type="range" value="10" min="" max="" step="" oninput=""/>`  
  > 많은 양의 텍스트를 입력받을 때 : textarea 태그 : `<textarea name="" cols="" rows="" id="">`
