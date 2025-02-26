import React from "react";
import Section from "./Section";

// 카테고리별 영화 데이터 하드코딩 예시
const MOVIES_BY_CATEGORY = {
  박스오피스: [
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "캡틴 아메리카: 브레이브 뉴 월드",
      ageRating: "12",
      ticketRate: "35%",
      releaseDate: "2025.02.12",
      likeCount: 764,
    },
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "말할 수 없는 비밀",
      ageRating: "ALL",
      ticketRate: "9.5%",
      releaseDate: "2025.01.27",
      likeCount: 1300,
    },
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "미키17",
      ageRating: "15",
      ticketRate: "7.7%",
      releaseDate: "2025.02.28",
      likeCount: 1100,
    },
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "미드나잇 인 파리",
      ageRating: "15",
      ticketRate: "6.9%",
      releaseDate: "2025.02.12",
      likeCount: 718,
    },
    // ...원하는 만큼 추가
  ],

  상영예정작: [
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "명탐정 코난: 14번째 표적",
      ageRating: "12",
      ticketRate: "2.8%",
      releaseDate: "2025.02.14",
      likeCount: 365,
    },
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "엘리: 몬스터 패밀리",
      ageRating: "ALL",
      ticketRate: "0.4%",
      releaseDate: "2025.02.14",
      likeCount: 43,
    },
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "히어",
      ageRating: "12",
      ticketRate: "0.8%",
      releaseDate: "2025.02.19",
      likeCount: 542,
    },
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "써니데이",
      ageRating: "12",
      ticketRate: "0.6%",
      releaseDate: "2025.02.19",
      likeCount: 45,
    },
    // ...
  ],

  단독: [
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "러브레터 [30주년 에디션]",
      ageRating: "12",
      ticketRate: "2.5%",
      releaseDate: "2025.01.01",
      likeCount: 2000,
    },
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "영화 러브 라이브! 니지가사키 하이스쿨 아이돌 동호회",
      ageRating: "ALL",
      ticketRate: "1.1%",
      releaseDate: "2025.02.06",
      likeCount: 336,
    },
    // ...
  ],

  필름소사이어티: [
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "수카바티: 극락축구단",
      ageRating: "12",
      ticketRate: "0.2%",
      releaseDate: "2024.07.31",
      likeCount: 64,
    },
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "카라바조의 그림자",
      ageRating: "19",
      ticketRate: "0.1%",
      releaseDate: "2025.01.22",
      likeCount: 231,
    },
    // ...
  ],

  클래식소사이어티: [
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "[오페라] 호프만의 이야기",
      ageRating: "ALL",
      ticketRate: "0.2%",
      releaseDate: "2025.02.06",
      likeCount: 29,
    },
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "[RBO] 신데렐라",
      ageRating: "ALL",
      ticketRate: "0.1%",
      releaseDate: "2025.02.04",
      likeCount: 62,
    },
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "셰익스피어 컴퍼니: 맥베스",
      ageRating: "12",
      ticketRate: "0%",
      releaseDate: "2024.12.04",
      likeCount: 81,
    },
    // ...
  ],
};

export default function Main({ category }) {
  // 현재 선택된 카테고리에 해당하는 영화 목록 불러오기
  const moviesToShow = MOVIES_BY_CATEGORY[category] || [];

  return (
    <main className="flex-1 p-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {moviesToShow.map((movie, index) => (
        <Section key={index} movie={movie} />
      ))}
    </main>
  );
}
