import React, { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh; /* 화면 전체 높이 */
  background-color: #186746; /* 초록색 배경 */
`;

const ImageSection = styled.div`
  width: 100%;
  flex: 2; /* 상단 이미지 섹션이 화면의 2/3 차지 */
  background-image: url("/HUG.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const FormContainer = styled.div`
  flex: 1; /* 로그인 섹션이 화면의 1/3 차지 */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  background-color: #186746; /* 흰색 배경 */
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin: 5px 0;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
`;

const Button = styled.button`
  padding: 10px;
  width: 80%;
  font-size: 16px;
  margin: 5px 0;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

function LoginPage({ onLogin }) {
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(name, birthdate);
  };

  return (
    <MainContainer>
      <ImageSection />
      <FormContainer>
        <Input
          type="text"
          placeholder="이름을 입력하세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="생년월일 (YYYY-MM-DD)"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <Button onClick={handleSubmit}>로그인</Button>
      </FormContainer>
    </MainContainer>
  );
}

export default LoginPage;
