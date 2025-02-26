import React from "react";

export default function Header() {
  return (
    <header className="bg-white">
      {/* 상단 헤더 영역 (VIP, 멤버십, 고객센터, 로그인, 회원가입, 빠른예매) */}
      <div className="flex justify-between items-center py-2 px-4">
        {/* 왼쪽 */}
        <div className="flex space-x-4">
          <span className="text-xs text-gray-700 cursor-pointer">VIP LOUNGE</span>
          <span className="text-xs text-gray-700 cursor-pointer">멤버십</span>
          <span className="text-xs text-gray-700 cursor-pointer">고객센터</span>
        </div>
        {/* 오른쪽 */}
        <div className="flex space-x-4">
          <span className="text-xs text-gray-700 cursor-pointer">로그인</span>
          <span className="text-xs text-gray-700 cursor-pointer">회원가입</span>
          <span className="text-xs text-gray-700 cursor-pointer">빠른예매</span>
        </div>
      </div>
    </header>
  );
}
