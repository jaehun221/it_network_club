// 회원가입 페이지
import { useState } from "react"; // 컴포넌트의 상태 관리
import "./SignUp.css"; // css파일 가져오기
import axios from "axios";
5
export default function Signup() { // 컴포넌트를 다른 파일에사서 사용할 수 있도록 내보냄
  const [formData, setFormData] = useState({ // 현재 폼의 모든 입력값들을 저장 및 업데이트 하는 객체
    userId: "", // 초기값
    password: "", // 초기값
    confirmPassword: "", // 초기값
    name: "", // 초기값
    email: "" // 초기값
  });

  const signChange = (e) => {
    setFormData({
      ...formData, // 기존 데이터를 유지 (스프레드 연산자)
      [e.target.name]: e.target.value // 변경된 필드만 업데이트
    });
  };

  const signSubmit = async (e) => {
    e.preventDefault(); // 페이지 새로고침 방지

    if (formData.password !== formData.confirmPassword) { // 비밀번호 확인 검증
      alert("비밀번호가 일치하지 않습니다."); // 일치하지 않을 경우 알림
      return;
    }
  
    const payload = {
      user_id: formData.userId,
      user_pw: formData.password,
      user_nm: formData.name,
      email: formData.email
};


    try{
      const response = await axios.post('http://localhost:8080/auth/user', payload)
      // axios로 spring에 요청을 보냄
      console.log('성공',response.data);
    }catch(error){
      console.log('에러발생',error);
    }

    console.log("회원가입 데이터:", formData);
    alert("회원가입이 완료되었습니다!");
   // 회원가입 성공 알림
  }
  

  return ( // jsx 렌더링
    <div className="signup-container">
      <h2 className="signup-title">회원가입</h2>
      <form onSubmit={signSubmit} className="signup-form">
        <input
          type="text"
          name="userId"
          placeholder="아이디"
          value={formData.userId}
          onChange={signChange}
          className="signup-input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={formData.password} // 현재 상태값을 input에 표시
          onChange={signChange} // 입력값 변경 시 상태 업데이트
          className="signup-input" // 어떤 필드인지 식별
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="비밀번호 확인"
          value={formData.confirmPassword}
          onChange={signChange}
          className="signup-input"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={formData.name}
          onChange={signChange}
          className="signup-input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="이메일"
          value={formData.email}
          onChange={signChange}
          className="signup-input"
          required
        />
        <button type="submit" className="signup-button">
          회원가입
        </button>
      </form>
    </div>
  );
}