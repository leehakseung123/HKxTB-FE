// 연습문제 1: 조건부 렌더링과 키 사용
// 아래의 tasks 배열을 활용하여, 완료된 작업과 완료되지 않은 작업을 분리하여 렌더링하는 컴포넌트를 작성하세요.
// 요구사항
// 1. 완료된 작업은 <h3>완료된 작업</h3> 아래에 리스트로 렌더링합니다.
// 2. 완료되지 않은 작업은 <h3>할 일 목록</h3> 아래에 렌더링합니다.
// 3. filter()함수를 사용하여, tasks 배열을 2개 생성후 사용한다.

import React, { useEffect, useState } from "react";

export function TaskList() {
  const tasks = [
    { id: 1, text: "React 공부하기", completed: true },
    { id: 2, text: "운동하기", completed: false },
    { id: 3, text: "저녁 먹기", completed: false },
    { id: 4, text: "독서하기", completed: true },
  ];

  const completedTasks = tasks.filter((task) => task.completed);
  const incompleteTasks = tasks.filter((task) => !task.completed);

  return (
    <div>
      <h3>완료된 작업</h3>
      <ul>
        {completedTasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>

      <h3>할 일 목록</h3>
      <ul>
        {incompleteTasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

//연습문제 2: 리스트 정렬과 키
// 아래의 products 배열을 가격 순으로 정렬하여 렌더링하는 컴포넌트를 작성하세요.
// 요구사항
// 1. 최저가부터 최고가 순으로 정렬하여 <ul>로 렌더링합니다.
// 2. 각 제품은 상품명 - 가격 형태로 표시합니다.
// 3. sort()함수를 사용합니다.

export function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 600 },
    { id: 3, name: "Tablet", price: 800 },
  ];

  const sortedProducts = [...products].sort((a, b) => a.price - b.price);

  return (
    <div>
      <h3>제품 목록 (가격 오름차순)</h3>
      <ul>
        {sortedProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

//연습문제 3: 입력 폼과 리스트 추가
// 사용자가 입력한 새로운 항목을 리스트에 추가하는 컴포넌트를 작성하세요.
// 요구사항
// 1. 초기 리스트는 빈 배열입니다.
// 2. 사용자가 입력하고 버튼을 누르면 입력한 항목이 리스트에 추가됩니다.
// 3. 각 리스트 항목은 고유한 키를 가져야 합니다.
export function DynamicList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim() === "") return; // 빈 문자열 무시
    const newItemObject = {
      id: Date.now(), // 고유한 id (타임스탬프 사용)
      text: newItem,
    };
    setItems((prevItems) => [...prevItems, newItemObject]);
    setNewItem("");
  };

  return (
    <div>
      <h3>동적 리스트</h3>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="항목 입력"
      />
      <button onClick={handleAddItem}>추가하기</button>

      <h3>목록 리스트</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

// 연습문제4: jsonplaceholder사이트의 JSON응답을 리스트로 출력하시오.
//URL : https://jsonplaceholder.typicode.com/posts
// 요구사항
// 1. React로 jsonplaceholder.typicode.com/posts API를 호출하여
//    id, title, body를 출력하는 간단한 리스트를 구성하세요.
// 2. useEffect와 fetch: API 호출을 처리합니다.
// 3. useState: 데이터를 저장합니다.
// 4. 데이터 로딩 중 상태와 오류 처리도 간단히 포함합니다.
export function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("네트워크 응답에 문제가 있습니다.");
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>오류 발생: {error}</div>;

  return (
    <div>
      <h3>Posts List</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>
              {post.id} - {post.title}
            </strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
//연습문제5
//연습문제4에서 가져온 posts에다가
// 입력 폼을 통해 새로운 post를 동적으로 추가하고 초기에는 10개의 post만 보여주는 리액트 컴포넌트를 작성했습니다.
// 요구사항
// 1. 처음에는 API로 가져온 10개의 post만 보여줍니다.
// 2. 사용자가 입력 폼에 id, User ID, Title, Body를 입력하고 제출하면 새로운 post가 동적으로 추가됩니다.
export function PostsWithForm() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({
    id: "",
    userId: "",
    title: "",
    body: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 컴포넌트 마운트 시 API로부터 posts 데이터를 가져오며, 처음 10개만 사용
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("네트워크 응답에 문제가 있습니다.");
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data.slice(0, 10)); // 초기 10개만 사용
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // 폼 입력값 변경 처리
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 폼 제출 시 새로운 post를 리스트에 추가
  const handleSubmit = (e) => {
    e.preventDefault();

    // 모든 필드가 입력되었는지 확인
    if (!form.id || !form.userId || !form.title || !form.body) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    const newPost = {
      id: form.id,
      userId: form.userId,
      title: form.title,
      body: form.body,
    };

    // 새로운 post를 리스트 맨 앞에 추가
    setPosts((prevPosts) => [newPost, ...prevPosts]);

    // 폼 초기화
    setForm({
      id: "",
      userId: "",
      title: "",
      body: "",
    });
  };

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>오류 발생: {error}</div>;

  return (
    <div>
      <h3>Posts With Form</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID: </label>
          <input
            type="text"
            name="id"
            value={form.id}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>User ID: </label>
          <input
            type="text"
            name="userId"
            value={form.userId}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Body: </label>
          <input
            type="text"
            name="body"
            value={form.body}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">새로운 Post 추가</button>
      </form>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>
              {post.id} - {post.title}
            </strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
