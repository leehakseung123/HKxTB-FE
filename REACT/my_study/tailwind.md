
# React + Tailwind CSS 3.4 설치 및 설정 가이드 (Vite 사용)

이 가이드는 **React 프로젝트에 Tailwind CSS 3.4**를 **Vite**를 사용하여 설치 및 설정하는 과정을 설명합니다.  
Tailwind CSS는 **유틸리티 기반의 CSS 프레임워크**로, 빠르고 효율적인 스타일링을 도와줍니다.

---

## 📌 1. 프로젝트 생성

1. **명령 프롬프트 실행**
   - Windows 검색창에 `cmd` 입력
   - `관리자 권한으로 실행` (권한 문제로 인해 일부 명령어가 실패할 수 있으므로 권장)

2. **프로젝트 생성**  
   `Documents` 폴더에 `react` 디렉터리를 생성 후 명령어 입력:
   ```bash
   cd C:\Users\pcuser\Documents\react
   npm create vite@latest tailwindcss-project -- --template react
   ```
   - **`tailwindcss-project`**라는 이름의 **Vite 기반 리액트 프로젝트**가 생성됩니다.
   - **Vite**는 Create React App(CRA)보다 **더 빠르고 가벼운 개발 환경**을 제공합니다.

3. **프로젝트 폴더로 이동**
   ```bash
   cd tailwindcss-project
   ```
   **💡 참고:**  
   - 이 명령어로 **tailwindcss-project** 디렉터리로 이동합니다. 이후 모든 명령어는 이 디렉터리 안에서 실행해야 합니다.

---

## 📌 2. Tailwind CSS 설치

1. **Tailwind CSS, PostCSS, Autoprefixer 설치**
   ```bash
   npm install -D tailwindcss@3 postcss autoprefixer
   ```
   - `-D` 옵션은 **개발 의존성(DevDependencies)**으로 설치한다는 의미입니다.
   - **PostCSS**와 **Autoprefixer**는 Tailwind CSS가 브라우저 호환성을 유지하도록 도와줍니다.

2. **Tailwind 초기화 파일 생성**
   ```bash
   npx tailwindcss init -p
   ```
   - 이 명령어는 **`tailwind.config.js`** 및 **`postcss.config.js`** 설정 파일을 생성합니다.
   - **`-p`** 옵션은 PostCSS 설정 파일을 함께 생성합니다.

---

## 📌 3. 프로젝트 설정 (Tailwind 적용)

1. **`tailwind.config.js` 수정**  
   `tailwind.config.js` 파일을 열고 `content` 속성에 아래와 같이 경로를 추가합니다:
   ```js
   module.exports = {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```
   **💡 참고:**  
   - `content` 속성은 **Tailwind CSS가 사용하는 파일 경로**를 지정합니다.  
   - 지정된 경로에 포함된 HTML 및 JSX 파일에서 사용된 Tailwind 클래스만 최종 CSS 파일에 포함됩니다.

2. **`index.css` 수정**  
   `src/index.css` 파일에 Tailwind의 기본 디렉티브를 추가합니다:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
   **💡 참고:**  
   - 이 순서는 중요합니다. `@tailwind base` → `@tailwind components` → `@tailwind utilities` 순서로 적용해야 합니다.  
   - **`base`**는 브라우저 기본 스타일을 재설정하고, **`components`**는 Tailwind 컴포넌트 스타일을 포함하며, **`utilities`**는 유틸리티 클래스가 들어갑니다.

---

## 📌 4. 프로젝트 실행

1. **VSCode로 프로젝트 열기**
   ```bash
   code .
   ```
   - **`code .`** 명령어는 현재 디렉터리를 Visual Studio Code에서 엽니다.  
   - **VSCode가 설치**되어 있어야 합니다.

2. **개발 서버 실행**
   ```bash
   npm run dev
   ```
   - 브라우저에서 `http://localhost:3000`에 접속하여 프로젝트를 확인합니다.
   - Vite는 기본적으로 `3000번 포트`를 사용하며, **수정된 파일을 자동으로 새로고침**합니다.

---

## 📌 추가 팁 & 주의사항

1. **Tailwind 사용 시 클래스 누락 문제**
   - `tailwind.config.js`의 `content` 경로가 잘못 설정되면 Tailwind 클래스가 제대로 적용되지 않을 수 있습니다.
   - HTML 및 JS 파일의 **전체 경로가 지정**되어 있는지 확인하세요.

2. **VSCode 확장 프로그램 추천**
   - **Tailwind CSS IntelliSense**: Tailwind CSS 클래스 자동 완성 및 문서 제공  
   - **ES7+ React/Redux/React-Native snippets**: 리액트 관련 코드 스니펫 제공

---

## 📌 참고 자료
- [Tailwind CSS 공식 문서](https://v3.tailwindcss.com/docs/guides/vite)
- [Vite 공식 문서](https://vitejs.dev/)
- [VSCode 다운로드](https://code.visualstudio.com/)
