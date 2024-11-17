import React, { useState } from "react";
import Papa from "papaparse";
import styled from "styled-components";
import LoginPage from "./LoginPage";
import UserInfo from "./UserInfo";
import PrayerSection from "./PrayerSection";

const AppContainer = styled.div`
  flex-direction: column;
  align-items: center;
  background-color: #186746;
`;

function App() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);

  const loadCSV = () => {
    Papa.parse("../data.csv", {
      download: true,
      header: true,
      complete: (result) => {
        setData(result.data);
      },
    });
  };

  const handleLogin = (name, birthdate) => {
    const userData = data.find(
      (user) => user.name === name && user.birthdate === birthdate
    );
    if (userData) {
      setUser(userData);
    } else {
      alert("이름 또는 생년월일이 일치하지 않습니다.");
    }
  };

  React.useEffect(() => {
    loadCSV();
  }, []);

  return (
    <AppContainer>
      {!user ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <>
          <UserInfo name={user.name} role={user.role} />
        </>
      )}
    </AppContainer>
  );
}

export default App;
