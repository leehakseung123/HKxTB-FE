import React from "react";

export default function Aside({ category }) {
  const recommendedMovies = {
    박스오피스: ["추천 영화 1", "추천 영화 2", "추천 영화 3"],
    상영예정작: ["추천 영화 4", "추천 영화 5"],
    단독: ["단독 상영작 1", "단독 상영작 2"],
    필름소사이어티: ["필름소사이어티 추천 1"],
    클래식소사이어티: ["클래식소사이어티 추천 1"],
  };

  return (
    <aside className="w-64 bg-gray-50 p-4 border-l border-gray-300 hidden xl:block">
      <h3 className="font-bold text-lg mb-4">{category} 추천 영화</h3>
      <ul className="space-y-2 text-sm">
        {(recommendedMovies[category] || []).map((movie, index) => (
          <li key={index} className="hover:text-purple-600 cursor-pointer">
            {movie}
          </li>
        ))}
      </ul>
    </aside>
  );
}
