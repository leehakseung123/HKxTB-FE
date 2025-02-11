import React, { useState } from "react";
//연습문제1: 마우스 오버와 마우스 아웃 이벤트
// 목표: onMouseEnter와 onMouseLeave 이벤트를 사용하여
//  마우스가 특정 영역에 들어오거나 나갈 때 상태를 변경하는 방법을 학습합니다.
// 요구사항: 다음 조건에 맞는 컴포넌트를 작성하세요.
// 마우스가 박스 위에 올라가면 배경색이 변경됩니다.
// 마우스가 박스를 벗어나면 원래 배경색으로 돌아옵니다.
// 상태로 관리되는 메시지를 화면에 출력하세요. (예: "마우스가 들어왔습니다", "마우스가 나갔습니다")

export function Exercise1() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: isHovered ? "skyblue" : "lightgray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered ? "마우스가 들어왔습니다" : "마우스가 나갔습니다"}
    </div>
  );
}
//연습문제2: 폼 제출 이벤트 처리하기
// 목표: onSubmit 이벤트를 통해 폼 제출을 처리하고 기본 동작을 방지하는 방법
//요구사항 - 다음 조건에 맞는 컴포넌트를 작성하세요.
// 1.사용자 이름과 나이를 입력하는 폼을 만드세요.
// 2.폼이 제출되면 입력값을 콘솔에 출력하고 입력 필드를 비웁니다.
// 3.기본 폼 제출 동작을 방지하세요 (e.preventDefault() 사용).
export function Exercise2() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 동작(페이지 리로드) 방지
    console.log("Name:", name);
    console.log("Age:", age);

    // 제출 후 입력 필드 초기화
    setName("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>이름: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>나이: </label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <button type="submit">제출</button>
    </form>
  );
}
// 연습문제 3: 입력 필드에서 글자 수 제한하기
// 목표: 입력 필드의 입력값을 상태로 관리하고 글자 수 제한하는 방법을 학습합니다.
// 요구사항: 다음 조건에 맞는 컴포넌트를 작성하세요.
// 1.사용자가 텍스트를 입력할 수 있는 입력 필드가 있습니다.
// 2.입력값은 최대 10자까지만 허용됩니다.
// 3.입력값의 길이에 따라 남은 글자 수를 화면에 표시하세요.
export function Exercise3() {
  const [text, setText] = useState("");
  const maxLength = 10;

  const handleChange = (e) => {
    // 최대 글자 수를 초과하지 않을 때만 상태에 반영
    if (e.target.value.length <= maxLength) {
      setText(e.target.value);
    }
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>남은 글자 수: {maxLength - text.length}</p>
    </div>
  );
}
