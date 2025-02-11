//Ex.jsx
import React from "react";
// 1. 문제 1: 단일 Props 전달하기
// 목표: 단일 `props`를 활용하여 간단한 문구를 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - `Greeting`이라는 자식 컴포넌트를 만드세요.
// - `name`이라는 `props`를 받아 "환영합니다,
//   [이름]님!"이라는 문구를 렌더링합니다.
// - 부모 컴포넌트에서 여러 사람의 이름을 넘겨 출력합니다.
function Greeting(props) {
  return <p>환영합니다, {props.name}님!</p>;
}

export function Ex1() {
  return (
    <div>
      <h2>문제 1</h2>
      <Greeting name="홍길동" />
      <Greeting name="김철수" />
      <Greeting name="박영희" />
    </div>
  );
}
// 2. 문제 2: 여러 Props 전달하기
// 목표: 여러 개의 `props`를 활용하여 사용자의 정보를 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - `UserCard`라는 자식 컴포넌트를 작성하세요.
// - `name`, `age`, `job`을 `props`로 받아 사용자 정보를 표시합니다.
// - 부모 컴포넌트에서 두 명의 사용자 정보를 전달해 렌더링합니다.
function UserCard(props) {
  const { name, age, job } = props;
  return (
    <div>
      <p>{name}</p>
      <p>나이: {age}</p>
      <p>직업: {job}</p>
    </div>
  );
}

export function Ex2() {
  return (
    <div>
      <h2>문제 2</h2>
      <UserCard name="홍길동" age={25} job="프로그래머" />
      <UserCard name="김민수" age={30} job="디자이너" />
    </div>
  );
}
// 3. 문제 3: 배열 Props 전달하기
// 목표: 배열 데이터를 `props`로 전달하여 리스트 형태로 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - `ItemList`라는 자식 컴포넌트를 작성하세요.
// - `items`라는 배열을 `props`로 받아 `<li>` 태그로 각 항목을 렌더링합니다.
// - 부모 컴포넌트에서 두 개의 다른 배열을 전달해 두 개의 목록을 출력합니다.
function ItemList(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
}

export function Ex3() {
  const fruits = ["사과", "바나나", "오렌지"];
  const langs = ["자바스크립트", "자바", "파이썬"];

  return (
    <div>
      <h2>문제 3</h2>
      <ItemList items={fruits} />
      <ItemList items={langs} />
    </div>
  );
}
// 4. 문제 4: 이벤트 Props 전달하기
// 목표: 버튼을 클릭했을 때 이벤트를 처리하는 컴포넌트를 작성하세요.
// 요구사항:
// - `ClickButton`이라는 자식 컴포넌트를 작성하세요.
// - 부모 컴포넌트에서 클릭 시 경고창이 뜨도록 이벤트 핸들러를 전달하세요.
function ClickButton(props) {
  return <button onClick={props.onClick}>버튼 클릭</button>;
}

export function Ex4() {
  const handleClick = () => {
    alert("버튼이 클릭되었습니다!");
  };

  return (
    <div>
      <h2>문제 4</h2>
      <ClickButton onClick={handleClick} />
    </div>
  );
}

// 5. 문제 5: children을 이용한 컴포넌트 구성
// 목표: `children`을 활용하여 컴포넌트 내부에서 콘텐츠를 자유롭게 구성하는 연습을 합니다.
// 요구사항:
// - `InfoCard`라는 자식 컴포넌트를 작성하세요.
// - `title`이라는 `props`와 `children`을 사용하여 제목과 본문 콘텐츠를 렌더링합니다.
// - 부모 컴포넌트에서 두 개의 카드를 렌더링하세요.

function InfoCard(props) {
  const { title, children } = props;
  return (
    <div>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

export function Ex5() {
  return (
    <div>
      <h2>문제 5: children 이용 (InfoCard)</h2>
      <InfoCard title="카드 제목 1">
        <p>여기는 첫 번째 카드의 본문입니다.</p>
      </InfoCard>
      <InfoCard title="카드 제목 2">
        <ul>
          <li>리스트 아이템1</li>
          <li>리스트 아이템2</li>
        </ul>
      </InfoCard>
    </div>
  );
}
