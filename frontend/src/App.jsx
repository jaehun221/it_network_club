import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";

function App() {
  return (
    // 라우팅 기능을 제공
    <Router>
      <Routes>
        {/*
        특정 URL 경로와 컴포넌트를 연결
        path="/": 메인 페이지
        element={<SignUp />}: 해당 경로에서 보여줄 컴포넌트
        */}
        <Route path="/" element={<SignUp />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
      </Routes>
    </Router>
  );
}

export default App;