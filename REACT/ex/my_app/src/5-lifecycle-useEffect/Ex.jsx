// Ex.jsx
import React, { useState, useEffect } from "react";
// 연습문제1: 컴포넌트 마운트 시 콘솔에 메시지 출력하기
// 목표: 컴포넌트가 마운트될 때 콘솔에 "컴포넌트가 마운트되었습니다." 메시지를 출력하세요.
// 요구사항:
// useEffect를 사용하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정하세요.
// 힌트: 빈 배열 []을 의존성 배열로 사용하세요.
export function Exercise1() {
  useEffect(() => {
    console.log("컴포넌트가 마운트되었습니다.");
  }, []);

  return (
    <div>
      <p>콘솔을 확인해보세요!</p>
    </div>
  );
}
// 연습문제2. 상태값이 변경될 때 메시지 출력하기
// 목표: 버튼을 클릭하여 상태값을 변경할 때마다 콘솔에 상태값이 출력되도록 만드세요.
// 요구사항:
// useEffect를 사용하여 상태값이 변경될 때마다 메시지를 출력하세요.
// 힌트: useEffect의 의존성 배열에 상태값을 넣으세요.
export function Exercise2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("상태값 변경:", count);
  }, [count]);

  return (
    <div>
      <p>현재 상태값: {count}</p>
      <button onClick={() => setCount(count + 1)}>상태값 변경</button>
    </div>
  );
}

//연습문제3: 타이머 기능 (마운트 및 언마운트)
// 목표: 컴포넌트가 마운트되면 1초마다 상태값이 증가하는 타이머를 시작하고, 컴포넌트가 언마운트될 때 타이머를 정리하세요.
// 요구사항:
// useEffect를 사용하여 마운트 시 타이머를 시작하고, 언마운트 시 타이머를 정리하세요.
// 1초마다 상태값을 증가시키세요.
// 힌트: setInterval과 clearInterval 사용
export function Exercise3() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    // 언마운트 시 타이머 정리
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p>타이머: {timer}초</p>
    </div>
  );
}
// 4. 윈도우 크기 변경 감지
// 목표: 윈도우의 크기가 변경될 때마다 현재 창의 너비를 화면에 표시하세요.
// 요구사항:
// useEffect로 이벤트 리스너를 등록하고 창 크기가 변경될 때마다 상태를 업데이트하세요.
// 언마운트 시 이벤트 리스너를 해제하세요.
// 힌트: window.addEventListener와 window.removeEventListener
export function Exercise4() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <p>현재 창 너비: {windowWidth}px</p>
    </div>
  );
}

//연습문제5: API 호출 및 데이터 로드
// 목표: 컴포넌트가 마운트될 때 API 호출을 통해 데이터를 가져와 화면에 표시하세요.
// 요구사항:
// 1. URL: https://jsonplaceholder.typicode.com/posts
// 2. 상위 10개의 포스트 테이터만 출력하세요.
// 3. useEffect를 사용하여 컴포넌트가 마운트될 때 데이터를 로드하세요.
// 4. 데이터를 로드한 후 상태에 저장하고 화면에 출력하세요.
// 힌트: fetch 또는 axios 모듈 사용 가능합니다.
export function Exercise5() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 비동기 함수로 API 호출
    // async/await 구문 : JS에서 비동기적인 처리를 할 떄 사용하는 구문
    // promise/then 구문 :
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        // 상위 10개 포스트만 선택
        setPosts(data.slice(0, 10));
      })
      .catch((error) => console.error("API 호출 에러:", error));
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
