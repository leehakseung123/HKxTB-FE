// Ex.jsx
import React, { useState, useMemo, useCallback, useRef } from "react";
//연습문제 1: 숫자 배열의 평균값 구하기 (useMemo 사용)
// 목표:
// 사용자가 입력하는 숫자들을 배열에 추가하고, 배열의 평균값을 **useMemo**로
//   최적화하여 불필요한 재계산을 방지하세요.
// 힌트:
// 배열에 새로운 숫자가 추가될 때만 평균값을 재계산해야 합니다.
// 평균값을 구하려면 배열의 합을 배열의 길이로 나누면 됩니다.
export function Exercise1() {
  const [number, setNumber] = useState("");
  const [list, setList] = useState([]);

  const handleAddNumber = () => {
    if (number !== "") {
      setList([...list, parseFloat(number)]);
      setNumber("");
    }
  };
  const average = useMemo(() => {
    console.log("평균값 계산 중...");
    if (list.length === 0) return 0;
    const sum = list.reduce((acc, curr) => acc + curr, 0);
    return sum / list.length;
  }, [list]);

  return (
    <div>
      <h2>연습문제 1: 숫자 배열의 평균값 구하기 (useMemo 사용)</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="숫자를 입력하세요"
      />
      <button onClick={handleAddNumber}>추가</button>
      <p>입력된 숫자 목록: {list.join(", ")}</p>
      <p>평균값: {average}</p>
    </div>
  );
}
// 연습문제 2: 버튼 클릭 시 숫자 증가하기 (useCallback)
// 목표:
// 1. 숫자를 상태로 관리하고, 버튼을 클릭할 때마다 숫자가 1씩 증가합니다.
// 2. useCallback을 사용하여 버튼 클릭 핸들러가 컴포넌트가 리렌더링될 때마다 새로 생성되지 않도록 최적화하세요.

// 연습문제 3: 입력창 초기화하기 (useRef)
// 목표:
// 사용자가 입력한 텍스트를 버튼 클릭 시 초기화하고, 입력창에 포커스를 다시 설정합니다.
// **useRef**를 사용하여 입력창을 제어하세요.
// 힌트:
// 입력창에 접근하기 위해 **useRef**로 참조를 생성하세요.
// **inputRef.current.value**를 이용해 입력 값을 초기화하고, **inputRef.current.focus()**로 포커스를 설정합니다.
export function Exercise2() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h2>연습문제 2: 숫자 증가하기 (useCallback)</h2>
      <p>현재 숫자: {count}</p>
      <button onClick={handleIncrement}>+1 증가</button>
    </div>
  );
}

// 연습문제 3: 입력창 초기화하기 (useRef 사용)
export function Exercise3() {
  const inputRef = useRef(null);

  const handleReset = () => {
    if (inputRef.current) {
      inputRef.current.value = ""; // 입력창 초기화
      inputRef.current.focus(); // 입력창에 포커스
    }
  };

  return (
    <div>
      <h2>연습문제 2: 버튼 클릭 시 숫자 증가하기 (useCallback)</h2>
      <input type="text" ref={inputRef} placeholder="여기에 입력하세요" />
      <button onClick={handleReset}>초기화</button>
    </div>
  );
}
