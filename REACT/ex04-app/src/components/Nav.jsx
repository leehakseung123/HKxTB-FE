// Nav.jsx
import React, { useState } from "react";
import {
  FaBars,
  FaSearch,
  FaCalendarAlt,
  FaUserCircle,
  FaHome,
} from "react-icons/fa";

export default function Nav() {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const categories = [
    "박스오피스",
    "상영예정작",
    "단독",
    "필름소사이어티",
    "클래식 소사이어티",
  ];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center space-x-4">
          <FaBars className="text-gray-700 cursor-pointer" />
          <FaSearch className="text-gray-700 cursor-pointer" />
        </div>
        <div className="flex space-x-16">
          <span
            className="text-lg font-bold text-gray-700 hover:text-purple-800 cursor-pointer relative"
            onMouseEnter={() => setShowSubMenu(true)}
            onMouseLeave={() => setShowSubMenu(false)}
          >
            영화
            {showSubMenu && (
              <div className="absolute top-8 w-[100vw] bg-teal-400 shadow-lg">
                <ul clasName=" ">
                  <li className="text-sm p-4 text-white py-1 cursor-pointer">
                    전체영화
                  </li>
                </ul>
              </div>
            )}
          </span>

          <span className="text-lg font-bold text-gray-700 hover:text-purple-800 cursor-pointer">
            예매
          </span>
          <span className="text-lg font-bold text-gray-700 hover:text-purple-800 cursor-pointer">
            극장
          </span>
        </div>
        <div className="flex justify-center">
          <img src="src/components/logo.png" alt="Logo" className="h-16" />
        </div>
        <div className="flex space-x-16">
          <span className="text-lg font-bold text-gray-700 hover:text-purple-800 cursor-pointer">
            이벤트
          </span>
          <span className="text-lg font-bold text-gray-700 hover:text-purple-800 cursor-pointer">
            스토어
          </span>
          <span className="text-lg font-bold text-gray-700 hover:text-purple-800 cursor-pointer">
            혜택
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <FaCalendarAlt className="text-gray-700 cursor-pointer" />
          <FaUserCircle className="text-gray-700 cursor-pointer" />
        </div>
      </div>

      {/* 서브 네비게이션 (전체영화, 카테고리 탭, 체크박스, 검색창 등) */}
      <div className="px-4 py-4 h-10 bg-gray-100 flex items-center">
        {/* 상단 경로 안내 */}
        <div className="flex items-center text-sm text-gray-500 mb-1 justify-start">
          <FaHome className="mr-1" />
          <span>&gt;</span>
          <span className="mx-1">영화</span>
          <span>&gt;</span>
          <span className="ml-1">전체영화</span>
        </div>
      </div>
      {/* 큰 타이틀 */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">전체영화</h1>

        {/* 카테고리 탭 */}
        <ul className="flex space-x-6 text-sm border-b border-gray-300 pb-2">
          {categories.map((categoryName, index) => (
            <li
              key={index}
              className={`cursor-pointer ${
                selectedCategory === categoryName
                  ? "font-bold text-purple-800 border-b-2 border-purple-800"
                  : "text-gray-700 hover:text-purple-800"
              }`}
              onClick={() => setSelectedCategory(categoryName)}
            >
              {categoryName}
            </li>
          ))}
        </ul>

        {/* 체크박스, 영화 개수, 검색창 */}
        <div className="flex items-center mt-3">
          {/* 체크박스 - 개봉작만 */}
          <div className="flex items-center space-x-1">
            <inpu
              type="checkbox"
              id="releasedOnly"
              className="cursor-pointer"
            />
            <label
              htmlFor="releasedOnly"
              className="text-sm text-gray-700 cursor-pointer"
            >
              개봉작만
            </label>
          </div>

          <div className="ml-4 text-sm text-gray-700">
            90개의 영화가 검색되었습니다.
          </div>

          {/* 검색창 */}
          <div className="ml-auto">
            <input
              type="text"
              placeholder="영화명 검색"
              className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
