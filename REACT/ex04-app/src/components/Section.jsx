import React from "react";

export default function Section({ movie }) {
  return (
    <div className="border rounded-lg shadow-sm overflow-hidden bg-white hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={movie.imageUrl}
          alt={movie.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white text-xs px-2 py-0.5">
          {movie.ageRating}
        </div>
      </div>
      <div className="p-3">
        <h2 className="text-sm font-bold line-clamp-2">{movie.title}</h2>
        <p className="text-xs text-gray-600 mt-1">
          예매율 {movie.ticketRate} | 개봉일 {movie.releaseDate}
        </p>
        <div className="flex items-center justify-between mt-3">
          <div className="text-xs text-gray-500">
            <span className="mr-1">🤍</span>
            {movie.likeCount}
          </div>
          <button className="bg-purple-600 text-white text-xs px-3 py-1 rounded-md hover:bg-purple-700 transition">
            예매
          </button>
        </div>
      </div>
    </div>
  );
}
