import React from "react";
import styled from "styled-components";

const UserCard = styled.div`
  background-color: #186746;
  display: flex; /* 중앙 정렬을 위해 플렉스 박스 사용 */
  flex-direction: column;
  justify-content: center; /* 세로 중앙 정렬 */
  align-items: center; /* 가로 중앙 정렬 */
  text-align: center;
  width: 100%;
  height: 100vh; /* 화면 전체 높이 */
`;

const UserName = styled.h1`
  font-size: 24px;
  color: #fff; /* 글자 색상을 흰색으로 설정 */
  margin: 10px 0; /* 상하 간격 추가 */
`;

const UserRole = styled.p`
  font-size: 18px;
  color: #fff; /* 글자 색상을 흰색으로 설정 */
  margin: 5px 0; /* 상하 간격 추가 */
`;

function UserInfo({ name, role }) {
  return (
    <UserCard>
      <UserName>25 HUG 크리스마스 블레싱</UserName>
      <UserName>{name}</UserName>
      <UserRole>{role}</UserRole>
    </UserCard>
  );
}

export default UserInfo;
