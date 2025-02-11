// 연습문제1: 동적 표현식 렌더링
// 목표: props로 받은 이름을 화면에 출력하는 간단한 컴포넌트 연습
// 요구사항
// 1. Namecard 컴포넌트를 만들고, user 객체의 정보를 JSX에 넣어서
//   표현한다.
// 2. props는 사용안함.

//연습문제2: props를 이용해 이름과 나이 출력하기
// 목표 : props로 전달받은 이름과 나이를 사용자 정의 컴퍼넌트에 출력한다.
// 요구사항
// 1. Greeting 함수형 컴퍼넌트를 만드록, props로 전달받은 name과 age를 출력한다.
// 2. 출력양식 : 안녕하세요, 홍길동님! 당신의 나이는 25살입니다.

//연습문제3: 다음의 객체배열의 데이터를 출력하시오.
//목표: props로 전달받은 객체 배열의 데이터를 조작할 수 있다.
//요구사항
// 1. 상품이름 - 가격(원)으로 출력한다.
// 출력 예) 1. 노트북 - 8000원
//          2. 스마트폰 - 4000원
/// src/Ex.jsx
import React from "react";

/* ===========================================
   (연습문제1) props 없이 user 객체 직접 사용
   =========================================== */
function Namecard() {
  // 컴포넌트 안에 user 객체를 직접 선언
  const user = {
    firstName: "김",
    lastName: "민수",
    age: 30,
  };

  return (
    <div>
      <h2>
        {user.firstName}
        {user.lastName}
        나이: {user.age}살
      </h2>
    </div>
  );
}

/* ===========================================
   (연습문제2) props로 받은 name, age 출력
   =========================================== */
function Greeting(props) {
  const { name, age } = props;
  return (
    <p>
      안녕하세요, {name}님! 당신의 나이는 {age}살입니다.
    </p>
  );
}

/* ===========================================
   (연습문제3) props로 전달받은 products 배열 출력
   =========================================== */
function ProductList(props) {
  const { products } = props;

  return (
    <div>
      {products.map((product, index) => (
        <p key={product.id}>
          {index + 1}. {product.name} - {product.price}원
        </p>
      ))}
    </div>
  );
}

// (연습문제3)에서 쓸 상품 배열
const products = [
  { id: 1, name: "노트북", price: 8000 },
  { id: 2, name: "스마트폰", price: 4000 },
  { id: 3, name: "태블릿", price: 6000 },
];

// 모든 연습문제를 모아 렌더링할 최종 컴포넌트
function Ex() {
  return (
    <div>
      {/* (연습문제1) user 객체를 직접 쓰는 Namecard */}
      <Namecard />

      {/* (연습문제2) props로 전달받은 name, age */}
      <Greeting name="홍길동" age={25} />

      {/* (연습문제3) props로 products 배열 전달 */}
      <ProductList products={products} />
    </div>
  );
}

export default Ex;
