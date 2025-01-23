# javascript

- 자바스크립트<sub>ex01<sub>

  > 공식명칭 : ECMA Script  
  > 넷스케이프 브랜든 아이크라는 사람 썬마이크로 시스템즈와 협력해서 만든 언어
  >
  > - 웹브라우저에서 지원하는 유일한 언어
  > - 구글에서 JS V8 엔진을 향상시키고, 오픈 소스로 배포

  - js 구동시키는 2가지 방법
    1.  프론트엔드(사용자PC) : 웹브라우저 JS 해석, 템플릿엔진(리액트, Vue, 엥귤러)
    2.  백엔스(서버PC) : Node.js 웹 서버 프로그램
  - HTML에서 js 선언하는 3가지 방법
    1. head/body 태그 안에서 script태그 안에서
    2. html태그 인라인 속성으로
    3. 별도의 js파일 import/link

---

- body 태그 출력
  > ```javascript
  > document.write("Hello js");
  > ```
  >
  > - js 내장객체 - 코드를 메모리에

---

- 사용자로부터 입력<sub>ex05<sub>

  > ```javascript
  > let name = prompt("설명 문구");
  > ```

  - string타입 (문자열)으로 반환
    ```javascript
    let name = prompt("이름을 입력하세요.");
    document.write("입력된 이름은 " + name);
    ```
  - boolean타입으로 반환 : true / false
    ```javascript
    let select = confirm("파일 전송할까요?");
    document.write("당신의 선택은 " + select);
    ```

---

- 변수와 상수<sub>ex06<sub>

  > 변수 : 메모리공간(주소)에 이름을 붙여논 것  
  > 상수 : 변수로서 한번 값이 지정되면 변경 불가, PI 같은 고정값에 사용  
  > var : 변수, 재선언, 타입변경 가능  
  > let : 변수 (최근에 추가됨)  
  > const : 상수

---

- 데이터입 - type 형 <sub>ex07<sub>

  > 데이터 타입
  >
  > - number : 숫자(정수,실수) 자바:int long short byte float double
  > - string : 문자열,문자한자 자바:String char
  > - boolean : 논리형 true/false 자바:boolean
  > - undefined : 변수가 선언되지 않았을때, 값이 초기화되지 않았을때
  > - object : 객체타입, 배열(리스트),K-V객체 자바:클래스객체
  > - function : 함수타입(함수형 변수) 자바:익명객체, 람다식

  - 함수형 function 변수는 주소값을 가지고 있다.

---

_연습문제 - 테이블 출력하기 <sub>ex08<sub>_

---

- 형변환 : number타입과 string 타입<sub>ex10<sub>

  > number ➡ string => string()  
  > string ➡ number => Number()

  - 예외적인 방법
    ```javascript
    let num3 = "123" * 1;
    document.write(typeof num3 + "<br>");
    let num4 = +"123";
    document.write(typeof num4 + "<br>");
    ```
    - 비추천

---

- 연산자 <sub>ex1<sub>

  - | 산술 연산자 | **설명**            | **예제**         |
    | ----------- | ------------------- | ---------------- |
    | `+`         | 덧셈                | `a + b`          |
    | `-`         | 뺄셈                | `a - b`          |
    | `*`         | 곱셈                | `a * b`          |
    | `/`         | 나눗셈              | `a / b`          |
    | `%`         | 나머지 (모듈로)     | `a % b`          |
    | `**`        | 거듭제곱            | `a ** b`         |
    | `++`        | 값 증가 (전위/후위) | `++a` 또는 `a++` |
    | `--`        | 값 감소 (전위/후위) | `--a` 또는 `a--` |

  - | 할당 연산자 | **설명**         | **예제**  |
    | ----------- | ---------------- | --------- |
    | `=`         | 단순 할당        | `a = b`   |
    | `+=`        | 덧셈 후 할당     | `a += b`  |
    | `-=`        | 뺄셈 후 할당     | `a -= b`  |
    | `*=`        | 곱셈 후 할당     | `a *= b`  |
    | `/=`        | 나눗셈 후 할당   | `a /= b`  |
    | `%=`        | 나머지 후 할당   | `a %= b`  |
    | `**=`       | 거듭제곱 후 할당 | `a **= b` |

  - | 비교 연산자 | **설명**                     | **예제**  |
    | ----------- | ---------------------------- | --------- |
    | `==`        | 동등 비교 (타입 변환 포함)   | `a == b`  |
    | `===`       | 일치 비교 (타입 변환 없이)   | `a === b` |
    | `!=`        | 부등 비교 (타입 변환 포함)   | `a != b`  |
    | `!==`       | 불일치 비교 (타입 변환 없이) | `a !== b` |
    | `>`         | 크다                         | `a > b`   |
    | `<`         | 작다                         | `a < b`   |
    | `>=`        | 크거나 같다                  | `a >= b`  |
    | `<=`        | 작거나 같다                  | `a <= b`  |

  - 논리 연산자

    | 논리 연산자 | 설명                                 | 예제       |
    | ----------- | ------------------------------------ | ---------- |
    | `&&`        | 논리 AND (두 값 모두 `true`여야 함)  | `a && b`   |
    | `\|\|`      | 논리 OR (하나라도 `true`이면 `true`) | `a \|\| b` |
    | `!`         | 논리 NOT (부정)                      | `!a`       |

  - 비트 연산자

    | 비트 연산자 | 설명                    | 예제      |
    | ----------- | ----------------------- | --------- |
    | `&`         | 비트 AND                | `a & b`   |
    | `\|`        | 비트 OR                 | `a \| b`  |
    | `^`         | 비트 XOR                | `a ^ b`   |
    | `~`         | 비트 NOT (보수)         | `~a`      |
    | `<<`        | 왼쪽 시프트             | `a << n`  |
    | `>>`        | 오른쪽 시프트           | `a >> n`  |
    | `>>>`       | 부호 없는 오른쪽 시프트 | `a >>> n` |

  - 조건부 연산자

    | 조건부 연산자 | 설명                                                                       | 예제                     |
    | ------------- | -------------------------------------------------------------------------- | ------------------------ |
    | `? :`         | 조건식에 따른 값 선택. 조건이 `true`이면 앞의 값, `false`이면 뒤의 값 선택 | `조건식 ? 참값 : 거짓값` |

  - 연산자 우선순위

    | **우선순위** | **연산자**                                                                            | **설명**                                       |
    | ------------ | ------------------------------------------------------------------------------------- | ---------------------------------------------- |
    | 1            | 후위 증감: `expr++`, `expr--`                                                         | 후위 증감 연산자                               |
    | 2            | 전위 증감 및 단항: `++expr`, `--expr`, `+`, `-`, `!`, `~`, `typeof`, `void`, `delete` | 전위 증감, 단항 연산자                         |
    | 3            | 지수 연산자: `**`                                                                     | 거듭제곱 연산자                                |
    | 4            | 곱셈, 나눗셈, 나머지: `*`, `/`, `%`                                                   | 산술 곱셈, 나눗셈, 모듈로                      |
    | 5            | 덧셈, 뺄셈: `+`, `-`                                                                  | 산술 덧셈, 뺄셈                                |
    | 6            | 시프트 연산자: `<<`, `>>`, `>>>`                                                      | 비트 시프트 연산자                             |
    | 7            | 관계 연산자: `<`, `<=`, `>`, `>=`, `in`, `instanceof`                                 | 크기 비교, 포함, 인스턴스 검사                 |
    | 8            | 동등 비교: `==`, `!=`, `===`, `!==`                                                   | 동등 및 일치 비교                              |
    | 9            | 비트 AND: `&`                                                                         | 비트 AND 연산자                                |
    | 10           | 비트 XOR: `^`                                                                         | 비트 XOR 연산자                                |
    | 11           | 비트 OR: `\|`                                                                         | 비트 OR 연산자                                 |
    | 12           | 논리 AND: `&&`                                                                        | 논리 AND 연산자                                |
    | 13           | 논리 OR: `\|\|`                                                                       | 논리 OR 연산자                                 |
    | 14           | 조건부(삼항) 연산자: `? :`                                                            | 삼항 조건 연산자                               |
    | 15           | 할당 연산자: `=`, `+=`, `-=`, `*=`, `/=`, `%=` 등                                     | 할당 및 복합 할당 연산자                       |
    | 16           | 쉼표 연산자: `,`                                                                      | 여러 표현식을 하나로 결합 (가장 낮은 우선순위) |

---

---

- 변수 선언 규칙

  > - 첫 글자는 문자, 밑줄, 또는 $로 시작해야 한다
  > - 숫자로 시작할 수 없다.
  > - 공백을 포함할 수 없다.
  > - 예약어를 사용할 수 없다.
  >   - if, else, var, let, const, function, ...
  > - 대소문자를 구분한다.

- 논리 연산자<sub>ex14</sub>
  > AND 연산자 : ~이고, ~이면서  
  > OR 연산자 : ~이거나, 또는, ~일수도, ~중의 하나이면  
  > NOT 연산자 : ~가 아닌  
  > AND : 모두 참이어야 참  
  > OR : 하나만 참이면 참  
  > NOT

<br>

- 조건문<sub>ex15</sub> : 선택적인 실행이 가능하도록 하는 구문

  - if문 : `if(조건식;절) { 조건식이 참일때 수행되는 수행문 }`
    - if문의 4가지 형식
      1. 단일 if문
      2. if else문
      3. if else if문
      4. 중첩 if문(if문 if문이 들어감)  
         if문은 3중 중첩이상 설계하면, 가독성이 떨어짐

---

- switch문<sub>ex16</sub> : `switch() {case n: 실행문; break ..... default: 실행문;break;}`

  - number타입, 문자열, 논리형

`비교에는 === 사용! 타입과 값을 모두 비교`

- 패턴 (형식)

  > 소괄호() : 함수이름() if() switch() for() while()  
  > 중괄호{} : 배열요소{} KV객체{} 클래스{} 스코우프{}  
  > 대괄호[] : 배열요소 []

- 랜덤수 발생하기 : Math.random() 함수
  > 0.0 ~ 0.99999999... 까지의 임의수 발생

---

_연습문제 - swich case문<sub>ex_switchcase</sub>_

> 1~10까지의 랜덤한 정수 1개를 발생시키고, switch문에서 짝수, 홀수 여부를 출력하시오.
>
> 주사위를 2개 던져서, 첫번째 주사위는 10의 자리로, 두번째 주사위는 1의 자리로 만들어서 출력하시오

- 반복문 : for while, do-while문<sub>ex17</sub>

  > 반복문 : 반복적인 실행문을 간단히 처리하기 위한 구문  
  > for문 형식
  >
  > ```javascript
  > for ( 초기화; 조건식; 증감문 )
  > {
  >   조건이 참일 때 수행되는 반복적인 실행문
  > }
  > ```

- 런타임 디버깅 : 실행시에 중단점을 활용한 오류 수정
  1. 중단점 설정
  2. 스텝 오버 : 다음 줄 실행
  3. 스텝 인 : 함수 안으로 들어감
  4. 스텝 아웃 : 함수 밖으로 빠져나옴.

---

_연습문제 - for문 사용 <sub>ex18</sub>_

> 1. 반복변수 i를 1부터 10까지 출력하시오.
> 2. 1부터 10사이의 홀수만 출력하시오.
> 3. 1부터 10사이의 3의 배수만 출력하시오.
> 4. 1부터 100까지의 합을 출력하시오.
> 5. 1부터 6사이의 랜덤수 10개를 출력하시오.
> 6. 1부터 100사이의 랜덤값을 100개 발생시키고, 그 중 가장 큰 수를 출력하시오.
> 7. 1부터 100까지의 소수의 갯수를 출력하시오.  
>    소수 : 약수가 1과 자신인 수  
>    약수 : 나누어 떨어지는 수
> 8. 이번주 행운의 로또 숫자 6개를 출력하시오.  
>     1부터 45까지의 랜덤한 수 6개를 뽑되 반복허용하지 않음.  
>    재추첨 로직을 넣으시오.
> 9. 주사위 2개 10번 던져서,
>    두 주사위 수를 합산한 다음  
>     최소수와 최대수를 출력하시오.

---

- 반복문 - break문, continue문 <sub>ex19</sub>

  > break문 : 해당 반복문 (for, while), switch문을 종료함.  
  > continue문 : 해당 회차(Loop)를 건너뜀, 증감문으로 이동  
  > 이중 반복문에서 break, continue를 사용할 때 레이블을 사용한다.

---

- 배열 <sub>ex20</sub>

  > 배열 Array : 연속된 공간에 동일한 타입의 데이터를
  > 순차적으로 나열한 자료구조  
  >  인덱스(순번)가 0부터 시작 1,2,3...
  >
  > 배열 + 리스트 하나로 통합  
  >  리스트(List) : 배열에 기능을 추가( 추가, 삭제, 치환 )등  
  >  용도 : 대량의 데이터를 처리할 때 + 반복문과 함께
  >
  > - 배열의 선언  
  >    let 배열이름 = [리터럴1,리터럴2,리터럴3];  
  >   let 배열이름 = []; 빈배열
  >
  > `````html
  > let nums = [10, 20, 30];````
  > `````

---

- 배열선언<sub>ex21</sub>

  > - 대괄호를 이용한Araay 객체를 이용한 방법
  >
  > ```html
  > let nums1 = [10, 20, 30]; let nums2 = []; // njum2[0] = 10; num2.push(10);
  > num2.push(20); num2.push(30);
  > ```
  >
  > - Array 객체를 이용한Araay 객체를 이용한 방법  
  >    new : 객체생성시 사용하는 예약어  
  >   객체 (object) : 코드로 정의(클래스, 함수)된 메모리에 적재 후 활성화 된 상태. 인스턴스
  >
  >   ```javascript
  >   let arr = new Array(); // 생성자 함수
  >   console.log(typeof arr);
  >   console.log(arr instanceof Array);
  >   arr.push("수박", "망고", "바나나");
  >   console.log(arr);
  >   let arr2 = new Array(5); //길이가 5인 빈배열
  >   console.log(arr2.length);
  >   console.log(arr2[0]);
  >   let arr3 = new Array(1, 2, 3, 4, 5);
  >   console.log(arr3); //Array.of 사용
  >   let arr4 = Array.of(5); //데이터 5 길이 1인 배열
  >   console.log(arr4);
  >   let arr5 = Array.of(1, 2, 3, 4, 5);
  >   console.log(arr5); //Array.from 사용
  >   let arr6 = Array.from("hello");
  >   console.log(arr6); //['h', 'e', 'l', 'l', 'o']
  >   ```
  >
  > - 집합 Set : 중복허용을 하지 않는 자료구조
  >   - 순번(인덱스)이 없고 키 값도 없는 구조
  >   - 중복되지 않는 데이터: Key값, Index 용도
  >   ```javascript
  >   let arr7 = Array.from(new Set([1, 2, 3]));
  >   console.log(arr7); // [1, 2, 3]
  >   ```
  > - 매핑 함수를 적용한 배열
  >
  > ```javascript
  > let arr8 = Array.from([1, 2, 3], (x) => x * 2);
  > console.log(arr8);
  > ```

---

- 배열의 함수<sub>ex21</sub>

  > 자바스크립트에서 배열은 리스트의 기능을 포함  
  > push() : 맨 뒤에 요소추가  
  > unshift : 맨 앞에 추가  
  > splice() : 교체(치환) (인덱스, 지우는 갯수, 교체값)  
  > delete 연산자 : 지우고 empty로 남김  
  > pop() : 맨 마지막 지우기  
  > shift() : 맨 처음 지우기  
  > contact() : 배열을 결함  
  > sort() : 정렬, 오름차순  
  > reverse() : 역정렬, 내림차순

  - 값 타입 변수 vs 참조 타입 변수
    - 값 타입은 메모리 공간에 실제 값을 가짐
    - 참조 타입은 메모리 공간에 실제값의 주소값을 가짐
    - 기본 데이이터 타입 : number
  - `let arrD = [20, 10, 30, 40, 50];`
    - 주소값을 복사한다. 실제값이 바꿔도 가리키는 값은 같다
    - 원본 값을 저장하고 싶으면, 새로운 배열을 만들어야 한다.

---

- 함수 Function<sub>ex23<sub>

  > 함수 : 코드 뭉치에 이름을 붙여놓은 것
  >
  > - 용도 :
  >   - 코드 중복 제거 - 재사용성
  >   - 코드 이름 붙여서 - 가독성
  >   - 기능적 분리/결함 - 모듈화
  >
  > <br>
  > function (함수선언) / return (함수의 종료)
  >
  > <br>
  >
  > 4가지 형식
  >
  > 1. 매개변수 X 반환값 X
  >
  > ```javascript
  > function myFunc1() {
  >   console.log("myFunc1()");
  >   return;
  > }
  > ```
  >
  > 2.  매개변수 O 반환값 X
  >
  > ```javascript
  > function myFunc2(param) {
  >   console.log("myFunc2()" + param);
  >   return;
  > }
  > myFunc2("홍길동");
  > ```
  >
  > 3. 매개변수X 반환값 O
  >
  > ```javascript
  > function myFunc3() {
  >   return "홍길동2";
  > }
  > const name = myFunc3;
  > console.log(name);
  > ```
  >
  > 4. 매개변수O 반환값 O
  >
  > ```javascript
  > function myFunc4(param) {
  >   return param * 2;
  > }
  > console.log(myFunc4(2));
  >
  > let varFunc = function () {
  >   console.log("varFunc()");
  >   return;
  > };
  > varFunc();
  > ```
  >
  > - 함수형 변수 (익명함수)
  >
  >   - 함수를 변수처럼 선언해서 사용하는 것
  >   - 변수는 매개변수 전달가능
  >   - 함수형변수도 전달 가능
  >
  > - 콜백함수(비동기처리)
  >   - 비동기 처리 : 변역시간과 처리시간이 다름
  >   - ex) 사용자의 반응, 통신 - 호출.응답 시간이 다름
  > - 화살표 연산자 사용
  >
  > ```javascript
  >   let varFunc2 = () => {
  >     console.log("varFunc()");
  >     return;
  >   };
  >   let varFunc3 = (param) => {
  >     console.log(param);
  >   };
  >   varFunc3("홍길동")> ;
  >
  >   let sum = (param1, parma2) => {
  >     return param1 + param2;
  >   };
  >
  >   let sub = (param1, parma2) => {
  >     return param1 - param2;
  >   };
  >
  >   function calc(param1, param2, method) {
  >     return method(param1, param2);}
  >
  >   console.log(calc(10, 20, sum));
  >   console.log(calc(10, 20, sub));
  >   // 확장 : 버튼 눌렀을 때 처리해야 할 코드
  >   //      : 통신 응답되었을 때 처리해야할 코드
  > ```

---

    - 타이머 관련 함수<sub>ex24<sub>

      > setTimeout 함수 : 일정시간 후에 코드 호출
      > setInterval 함수 : 일정시간마다(주기적) 코드 호출

---

<br>

- JS 객체 Key-Value 함수 <sub>ex25<sub>

  > JS 객체  
  >  key : 반드시 문자열("" 제외) - JSON Key "key"  
  >  value : 다양한 타입 (number, string, funtion, object, ...)  
  >  객체 선언  
  > `let object = {apple: 1000, banana: 2000};`

---

- 클래스<sub>ex26<sub>

  > class는 ES6버전부터 지원
  > 그 전에 prototype을 통해서 상속을 지원했는데,  
  >  문법이 복잡해서 잘 사용하지 않음  
  >  JS는 간단히 스크립트언어인데,  
  >  리액트, Node.js를 통해 대용량의 프로그램을 만들기 시작하면서  
  >  클래스에 대한 필요성이 대두되었다.
  >
  >     객체지향(클래스-객체) : 상속, 생성자함수, 가상함수(인터페이스)
  >     클래스 사용 이유
  >       1. 변수와 함수를 클래싱(모듈화)
  >       2. 상속, 생성자함수, 가상함수(오버라이드)
  >
  >     클래스 선언
  >
  > ```javascript
  > class Person {
  >   name = "홍길동";
  >   walk() {
  >     console.log(this.name + " 는 걷는다.");
  >   }
  > }
  > ```
  >
  >     클래스 객체 생성
  >
  > ```javascript
  > let person = new Person();
  > person.walk();
  > ```
  >
  >     생성자 함수 : 객체생성시 자동으로 호출되는 함수
  >     용도 : 초기화
  >
  > get, set 함수  
  >  용도 : 읽어가거나 설정되는 값을 필터링하는 기능.
  >
  > ```javascript
  > class Person3 {
  >   constructor(name, age) {
  >     this.name = name;
  >     this.age = age;
  >   }
  >   get name() {
  >     console.log("get");
  >     return this._name + "님 어서오세쇼"; // get 함수에선 _ 사용
  >   }
  >
  >   set name(newValue) {
  >     console.log("set");
  >     if (newValue) {
  >       if (String(newValue).length > 5) {
  >         console.log("이름이 5글자 이상임.");
  >       } else {
  >         this._name = newValue;
  >       }
  >       this._name = newValue;
  >     }
  >   }
  > }
  > ```

- 문자열 제어 함수들

  > 문자열 선언
  >
  > ```javascript
  > let string1 = "문자열";
  > ```
  >
  > 문자열 선언
  >
  > ```javascript
  > let string1 = "문자열";
  > console.log(typeof string1);
  > let string2 = new String("문자열2");
  > console.log(typeof string2);
  > let string3 = "Abcedf";
  > ```
  >
  > 문자열길이
  >
  > ```javascript
  > console.log(string3.length);
  > ```
  >
  > 대문자변경
  >
  > ```javascript
  > console.log(string3.toUpperCase());
  > ```
  >
  > 소문자변경
  >
  > ```javascript
  > console.log(string3.toLowerCase());
  > ```
  >
  > 문자 한자만 가져오기
  >
  > ```javascript
  > let char = string3.charAt(0);
  > console.log(char);
  > ```
  >
  > 문자의 인덱스를 찾기
  >
  > ```javascript
  > let string4 = "java_script_programming";
  > ```
  >
  > "script"문자열의 위치(인덱스)?
  >
  > ```javascript
  > console.log(string4.indexOf("script"));
  > 5;
  > ```
  >
  > "i"문자(열)의 위치는?  
  >  못찾으면 -1을 리턴
  >
  > ```javascript
  > console.log(string4.lastIndexOf("i"));
  > ```
  >
  > 문자열 치환
  >
  > ```javascript
  >      let replaced = string4.replace("java", "ECMA");
  >      console.log(string4); 원본은 그대로 유지
  >      console.log(replaced);
  > ```
  >
  > 문자열 일부 가져오기 (start end)
  >
  > ```javascript
  > let substr1 = string4.substring(5, 11);
  > console.log(substr1);
  > ```
  >
  > 문자열 분리 split
  >
  > ```javascript
  > let string5 = "딸기,배,포도,사과,바나나";
  > let array = string5.split(",");
  > console.log(array);
  > ```
  >
  > 문자열 연결 + concat함수
  >
  > ```javascript
  >      let string6 = "ECMA";
  >      let string7 = "Script";
  >      let concated = string6.concat(string7);
  >      console.log(string6); 원본 그대로
  >      console.log(concated);
  > ```
  >
  > 좌우끝 공백 제거 trim
  >
  > ```javascript
  > let string8 = "  This is java script  ";
  > console.log(string8.trim());
  > ```
  >
  > 모든 공백 제거 - 정규식
  >
  > ```javascript
  > let fullTrimStr = string8.replace(/(\s*)/g, "");
  > console.log(fullTrimStr);
  > ```
  >
  > 정규식 - 숫자만 들어왔는지? 010-1234-1234 => 01012341234
  >
  > - 이메일 형식인지?
  > - 이름 형식으로 들어왔는지?

- ES6 최신문법<sub>ex28<sub>

  > 템플릿 리터럴
  > 화살표 함수
  > 실행문이 한줄일 떄, 중괄호, return 생략 가능  
  > 모듈 내보내기/가져오기 (export/import)  
  > 클래스 - 상속 : 자원을 물려받는것  
  > 오버라이드 : 부모의 자원을 재정의하는 것  
  > 부모 생성자함수 호출

- 구조분해할당과 전개연산자<sub>ex29<sub>

  > 구조분해할당; Destructuring Assignment  
  >  : 배열이나 객체의 값을 간편하게 추출하여 변수에 할당하는 문법

  - 배열의 구조분해 할당 :
    - 배열의 순서대로 값을 할당
  - 배열에서 나머지 값 할당 :
    - ...rest를 사용하여 나머지 값을 배열로 묶어서 할당할 수 있다.
  - 값 교환(swap) :
    - 구조분해할당을 사용하여 변수 값 교환을 간단하게 처리할 수 있다
  - 객체의 구조분해할당 :
    - 객체의 key를 기준으로 값을 변수에 할당
  - 새로운 이름으로 할당
  - 필요한 속성만 선택적으로 할당 가능

  > 전개연산자; Spread Operator :  
  > 배열이나 객체를 펼치거나 결합하는데 사용

  - 객체 병합
    - 여러 객체를 하나로 합칠 때 사용하며, 키가 중복될 경우 마지막 객체의 값이 적용
  - 객체 속성 제외
    - 특정 속성을 제외한 나머지를 새로운 객체로 만들 수 있다.
  - 함수의 인자 전달
    - 배열의 값을 전개하여 함수의 인자로 전달 가능
  - 기본값 설정 및 덮어쓰기
    - 기본값 객체를 사용자 설정 객체로 덮어쓰는 방식으로 사용 가능

- map 함수<sub>ex30<sub>

  > 배열 전체순환하면서 주어진 콜백함수를 통해 새로운 배열을 생성하는 함수

  - for문 : 배열의 각 요소를 순환
  - for ... of 문 : 배열의 각 요소를 순환
    ```javascript
    for (const item of arr) {
    }
    ```
  - forEach 함수 : 배열의 각 요소에 대해 주어진 콜백 함수를 실행
    ```javascript
    arr.forEach((item, index, array) => {});
    ```
  - map 함수

    > 원본 배열은 변경되지 않고, 새로운 배열을 반환  
    > 주어진 콜백 함수의 결과로 새로운 배열을 만든다.

    - 기본 사용법 : 배열의 각 요소를 변환하여 새로운 배열을 만든다.

    ```javascript
    const newArr = arr.map((item) => ) { return item * 2 };

    const newArr = arr.map((item) =>item * 2 ); // 한줄일 때 return 생략 가능
    ```

    - 내장 함수 활용

      ```javascript
      // 제곱근 계산
      let sqrt = arr.map(Math.sqrt);
      console.log(sqrt); // [3.162, 4.472, 5.477, 6.324, 7.071]

      // 문자열 변환
      let string = arr.map(String);
      console.log(string); // ['10', '20', '30', '40', '50']

      // 숫자 변환
      let nums = string.map(Number);
      console.log(nums); // [10, 20, 30, 40, 50]
      ```

  - 객체 배열에서 특정 값 추출

    - map 함수로 추출

      > 객체 배열에서 특정 속성 값만 추출합니다.

      ```javascript
      const users = [
        { id: 1, name: "hong" },
        { id: 2, name: "park" },
        { id: 3, name: "lee" },
      ];
      const userNames = users.map((user) => user.name);
      console.log(userNames); // ['hong', 'park', 'lee']
      ```

    - for...of문으로 추출

      > map 대신 반복문을 사용하여 추출할 수도 있습니다.

      ```javascript
      let newNames = [];
      for (const user of users) {
        newNames.push(user.name);
      }
      console.log(newNames); // ['hong', 'park', 'lee']
      ```

    - 변환 후 새로운 문자열 배열 반환

      > 배열 요소를 변환하여 대문자 문자열 배열을 생성합니다.

      ```javascript
      const upperNames = userNames.map((name) => name.toUpperCase());
      console.log(upperNames); // ['HONG', 'PARK', 'LEE']
      ```

    - 조건문 사용
      > map 내부에서 조건문을 사용하여 값을 변환할 수 있습니다
      ```javascript
      const newArr3 = arr.map((number) => (number > 30 ? 1 : 0));
      console.log(newArr3); // [0, 0, 0, 1, 1]
      ```

---

- reduce함수 <sub>ex31

  - 배열의 모든 요소를 순환하며 **하나의 값**으로 줄이는 함수.
  - 누적값을 활용하여 합계, 최대값, 객체 생성 등 다양한 작업에 사용됨.
  - 문법:
    ```javascript
    array.reduce((accumulator, currentValue, currentIndex, array) => {
      // 로직
      return accumulator;
    }, initialValue);
    ```

---

_연습문제 - map, reduce<sub>ex32_

---

- find, filter 함수<sub>ex33<sub>

  > find : 특정 값을 찾아낸다. 반환값은 특정값이나 undefined(못찾으면)  
  > filter : 필터, 특정요소를 걸러낸다. 반환값은 배열(or 빈배열(못찾으면))

---

- js로 html문서객체 조작하기<sub>ex34

  > - JS 내장 객체
  >
  > 1. window : 웹브라우저 창 (화면)
  > 2. documnet : DOM; Documnet Object Model 을 제어
  > 3. location : 페이지주소(URL) 제어
  > 4. history : 페이지 방문 기록 제어
  > 5. console : 로깅 제어
  > 6. navigator : 웹브라우저와 사용자 시스템 정보
  > 7. fetch : HTTP 통신, ES6의 내장함수
  >    - ex.) axios lib, jQuery ajax

---

- location객체<sub>ex35

  > location 객체를 통한 페이지 이동
  >
  > 1. 리다이렉트 방식
  >    - 사이트간의 이동
  >    - 내부데이터 (세션) 버림
  >    - location(GET), a 태그 (GET), meta refresh(GET)
  > 2. 포워드 방식
  >    - 내부 페이지간의 이동
  >    - 내부데이터(세션) 유지

---

- innerHTML, innerText<sub>ex36

  - 공통점 : HTML태그의 내용을 문자열로 보관하고 있음.
  - innerHTML : 문자열이 HTML태그로 인식
  - innerText : 문자열이 단순 Text로 인식

- 문서객체를 선택하는 함수<sub>ex37

  > 문서객체 모델 (Documnet Object Model)  
  > 웹브라우저가 html문서를 로딩(분석)한 후에 트리 모양으로 관리하는 데이터 구조 또는 객체

  문서 객체를 선택

  1. 아이디로 선택
     - getElementById()
  2. 클래스로 선택
     - getElementsClassName()
  3. 태그로 선택
     - getElementsByTagName()
  4. css 선택자로 선택
     - querySelector( css 선택자)
     - querySelectorAll( css 선택자 )

  - onload() 함수 : 웹브라우저가 HTML문서 로딩 후에 한번 호출해줌
  - 콜백함수 : 먼전 선언(등록)해놓고, 나중에 호출

---

_연습 문제 <sub>ex38,39,40,41, 42_

---

- js로 html요소 (문서객체)의 속성 변경<sub>ex43

  > getAttribute : 속성 가져오기  
  > setAttribute : 속성 설정하기

- JS로 class명 설정하기<sub>ex44
  > h1 태그에 id="header"로 접근한다.  
  > 두 개의 버튼(“액티브 Active”, “셀렉트 Select”)을 클릭할 때마다 JavaScript
  > 함수 func1(), func2()가 실행된다.  
  > func1() 함수는 #header 요소에 active 클래스를 토글(추가/제거)한다.  
  > func2() 함수는 #header 요소에 select 클래스를 토글(추가/제거)한다.  
  > CSS에서 .active와 .select 클래스의 스타일을 정의해 스타일이 적용되도록 한다.

---

- 테이블 태그에서 버튼 클릭 이벤트 처리<sub>ex45

  > 각 버튼에는 id와 value, 그리고 onclick 이벤트가 지정되어 있음.  
  > clickBtn(index) 함수를 호출할 때 index 값을 인자로 전달해, 해당 버튼의 id="btn"+index 값에 접근함.  
  > 선택된 버튼의 value를 가져온 뒤, `<h2>` 태그의 내용(innerHTML)을 “몇 번째 버튼이 클릭되었고, 그 버튼의 value 값이 무엇인지”로 업데이트함.

---

_연습문제 <sub>ex46, 47_

---

- JS로 라디오버튼 확인<sub>ex48

  > 1. 버튼 클릭으로 현재 체크된 라디오 버튼의 정보를 확인(value_check 함수)
  > 2. 라디오 버튼 변경 이벤트로 바로바로 표시(handleChange 함수)
  >
  > - document.getElementsByName("fruit")
  >
  >   - 동일한 name 속성을 가진 라디오 버튼들을 배열 형태로 가져옵니다.
  >   - 반복문(for ... of)을 통해 체크(radio.checked) 여부를 확인합니다.
  >
  > - 라디오 버튼의 체크 여부
  >
  >   - checked === true 로 선택된 라디오 버튼인지 판별할 수 있습니다.
  >
  > - document.getElementById(value).innerText
  >
  > - 라디오 버튼의 value와 일치하는 id를 가진 요소(span)의 텍스트를 가져옵니다.
  > - 예를 들어, value="apple"이면 id="apple" 인 요소를 찾습니다.
  > - 결과 표시
  >
  >   - document.getElementsByTagName("h3") 나  
  >     document.getElementsByTagName("h4") 등으로 특정 태그를 배열 형태로 가져온 뒤,  
  >      [인덱스]로 접근하여 .innerText를 변경합니다.
  >
  > - 이벤트 바인딩
  >
  >   - onchange="handleChange(this)" 와 같이 작성하면, 해당 라디오 버튼이 선택될 때마다 함수가 실행되고,  
  >     this를 통해 선택된 라디오 DOM 요소를 받아옵니다.

- 입력폼 데이터 유효성 체크하기<sub>ex49

  > onsubmit="return 함수()"
  >
  > 함수가 true를 반환하면 폼 전송, false면 전송 취소.  
  > 검사 후 경고(alert)를 주고 전송을 막거나 통과시킬 수 있음.  
  > 직접 form.submit() 호출
  >
  > 자바스크립트에서 유효성 검사 후, 코드 내에서 form.submit()을 실행해 폼을 전송할 수 있음.  
  > fetch/API 전송
  >
  > 전통적인 폼 전송 대신 비동기 통신(fetch, axios)으로 서버에 요청을 보내고,  
  > 응답을 받은 뒤 별도의 로직을 추가할 수도 있음.  
  > 이처럼 입력값의 유효성을 사전에 검사하면 불필요한 서버 요청을 줄이고, 사용자의 잘못된 입력을 초기에 방지할 수 있습니다.

- 메인화면 탭 메뉴 구현<sub>ex50

  > 메인화면 탭 메뉴 구현  
  > https://dinfree.com/lecture/frontend/123_js_exam.html#q-1  
  > https://www.w3schools.com/howto/howto_js_tab_header.asp  
  > "w3schools howto" 구글검색  
  > HTML / CSS / JS UI템플릿

- 어코디언 UI 구현<sub>ex51
- Responsive Top Navigation<sub>ex52
- 페이드인-아웃 애니메이션<sub>ex53
- 페이지 네비게이션 예제<sub>ex54
- 파비콘 설정<sub>ex55
