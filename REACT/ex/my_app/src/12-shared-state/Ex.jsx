/**
 * 연습문제 1: 두 개의 숫자 입력 필드의 합 계산하기 (State 끌어올리기)
    문제 설명:
    두 개의 숫자 입력 필드를 만들고 입력한 숫자들의 합을 부모 컴포넌트에서 
    실시간으로 계산하여 출력합니다.
 */
import React, { useState } from "react";

function NumberInput({ label, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input type="number" value={value} onChange={onChange} />
    </div>
  );
}

// 부모 컴포넌트: 두 숫자의 합 계산
export function SumCalculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleNum1Change = (e) => {
    setNum1(Number(e.target.value));
  };

  const handleNum2Change = (e) => {
    setNum2(Number(e.target.value));
  };

  const sum = num1 + num2;

  return (
    <div>
      <h2>두 수의 합 계산</h2>
      <NumberInput label="숫자 1: " value={num1} onChange={handleNum1Change} />
      <NumberInput label="숫자 2: " value={num2} onChange={handleNum2Change} />
      <h3>합계: {sum}</h3>
    </div>
  );
}
/**
 * 연습문제2: 선택한 리스트 항목 표시하기 (State 끌어올리기)
 * 문제 설명:
    리스트에 여러 항목(예: 과일 목록)이 주어져 있고, 사용자가 항목을 선택하면 
    선택한 항목들이 부모 컴포넌트에서 관리되어 화면에 표시됩니다.

    const items = ["사과", "바나나", "오렌지", "수박", "포도"];

    요구사항
    항목을 클릭하면 선택된 항목들이 부모 컴포넌트에 저장되어 표시됩니다.
    이미 선택된 항목을 클릭하면 해당 항목이 선택 목록에서 제거됩니다.
    상태는 부모 컴포넌트에서 관리합니다.
 */
export function FruitSelector() {
  const items = ["사과", "바나나", "오렌지", "수박", "포도"];
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (item) => {
    setSelectedItems(
      (prevSelected) =>
        prevSelected.includes(item)
          ? prevSelected.filter((i) => i !== item) // 이미 선택되어 있다면 제거
          : [...prevSelected, item] // 선택되지 않았다면 추가
    );
  };

  return (
    <div>
      <h2>과일 선택</h2>
      <ul>
        {items.map((item) => (
          <li
            key={item}
            onClick={() => handleItemClick(item)}
            style={{
              backgroundColor: selectedItems.includes(item)
                ? "lightgrey" // 선택된 경우 배경색 지정
                : "transparent", // 선택되지 않은 경우 기본 배경
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <h3>선택된 과일</h3>
      <ul>
        {selectedItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
