const Navbar = () => {
  return (
    <header className="flex justify-between items-center bg-white p-4 shadow-md">
      {/* 로고 영역 */}
      <div className="text-2xl font-bold text-blue-600">
        <a href="#">TechStore</a>
      </div>

      {/* 네비게이션 메뉴 */}
      {/* Tailwind 반응형 클래스:
          - hidden: 기본적으로 숨김
          - md:flex: 화면 크기가 medium 이상일 때만 flex로 표시 */}
      <nav className="hidden md:flex">
        <ul className="flex space-x-8">
          {/* 첫 번째 메뉴 항목: "제품" */}
          <li className="relative group">
            <a
              href="#"
              className="p-2 whitespace-nowrap text-gray-700 hover:text-white hover:bg-blue-600 rounded"
            >
              제품
            </a>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded mt-2 w-max">
              <li>
                <a href="#" className="block p-2 hover:bg-blue-600 hover:text-white whitespace-nowrap">
                  전자기기
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 hover:bg-blue-600 hover:text-white whitespace-nowrap">
                  의류
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 hover:bg-blue-600 hover:text-white whitespace-nowrap">
                  도서
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 hover:bg-blue-600 hover:text-white whitespace-nowrap">
                  액세서리
                </a>
              </li>
            </ul>
          </li>

          {/* 두 번째 메뉴 항목: "서비스" */}
          <li className="relative group">
            <a href="#" className="p-2 whitespace-nowrap text-gray-700 hover:text-white hover:bg-blue-600 rounded">
              서비스
            </a>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded mt-2 w-max">
              <li>
                <a href="#" className="block p-2 hover:bg-blue-600 hover:text-white whitespace-nowrap">
                  컨설팅
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 hover:bg-blue-600 hover:text-white whitespace-nowrap">
                  교육
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 hover:bg-blue-600 hover:text-white whitespace-nowrap">
                  고객지원
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 hover:bg-blue-600 hover:text-white whitespace-nowrap">
                  유지보수
                </a>
              </li>
            </ul>
          </li>

          {/* 세 번째 메뉴 항목: "회사소개" */}
          <li className="relative group">
            <a href="#" className="p-2 whitespace-nowrap text-gray-700 hover:text-white hover:bg-blue-600 rounded">
              회사소개
            </a>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded mt-2 w-max">
              <li>
                <a href="#" className="block p-2 hover:bg-blue-600 hover:text-white whitespace-nowrap">
                  회사정보
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 hover:bg-blue-600 hover:text-white whitespace-nowrap">
                  팀 소개
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 hover:bg-blue-600 hover:text-white whitespace-nowrap">
                  채용
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 hover:bg-blue-600 hover:text-white whitespace-nowrap">
                  연락처
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
