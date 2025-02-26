import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-8 text-sm mt-8">
      <div className="container mx-auto px-4">
        {/* 예시로 메뉴들 */}
        <div className="flex flex-wrap justify-center space-x-4 mb-4 text-gray-600">
          <span className="cursor-pointer hover:text-gray-800">회사소개</span>
          <span className="cursor-pointer hover:text-gray-800">인재채용</span>
          <span className="cursor-pointer hover:text-gray-800">사회공헌</span>
          <span className="cursor-pointer hover:text-gray-800">제휴/광고/부대사업문의</span>
          <span className="cursor-pointer hover:text-gray-800">이용약관</span>
          <span className="cursor-pointer hover:text-gray-800">개인정보처리방침</span>
        </div>
        <p className="text-gray-600 text-center">
          서울특별시 강남구 테헤란로 87길 22 도심공항타워 408호 ARS 1544-0070 ...
        </p>
        <p className="text-gray-600 text-center mt-2">
          COPYRIGHT © MegaboxJoongAng, Inc. All rights reserved
        </p>
      </div>
    </footer>
  );
}
