import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import "./index.css"; // Tailwind CSS 세팅

function App() {
  // 탭 선택 상태
  const [selectedCategory, setSelectedCategory] = useState("박스오피스");

  return (
    <div className="min-h-screen flex flex-col">
      {/* 상단 헤더 */}
      <Header />

      {/* 메인 네비 + '전체영화' 탭 영역 */}
      <Nav selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      {/* 메인 콘텐츠 (카테고리에 따라 다른 영화들) + 사이드바 */}
      <div className="flex flex-1">
        <Main category={selectedCategory} />
        <Aside category={selectedCategory} />
      </div>

      {/* 하단 푸터 */}
      <Footer />
    </div>
  );
}

export default App;
