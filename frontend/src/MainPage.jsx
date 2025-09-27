import React from "react";
import "./MainPage.css"; // CSS 파일 불러오기

const MainPage = () => {
    <title>mainpage</title>
  return (
    <div className="container">

      {/* Header */}
      <header className="header">

        <div className="aws_logo">
            <img src="/aws_logo.png" alt="AWS Logo" className="aws_logo" />
        </div>
        
        <nav className="nav">
            <ul>
            <li><a href="/MainPage">Home</a></li>
            <li><a href="/PostDetail">PostDetail</a></li>
            <li><a href="/PostForm">PostForm</a></li>
            <li><a href="/PostList">PostList</a></li>
            </ul>
        </nav>

        <div className="account">
          <img src="/account.png" alt="Profile" className="account_logo" />
          <div className="account-menu">
            <a href="/auth/signup">로그인</a>
            <a href="/auth/signup">회원가입</a>
          </div>
          </div>

      </header>

      {/* Main Content */}
      <main className="main">
        
      </main>

    </div>
  );
};

export default MainPage;
