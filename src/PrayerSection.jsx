import React from "react";
import styled from "styled-components";

const PrayerContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 20px;
  width: 100%;
`;

const PrayerTitle = styled.h2`
  font-size: 20px;
  color: #333;
  text-align: center;
  margin-bottom: 10px;
`;

const PrayerText = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  text-align: center;
`;

function PrayerSection({ prayer }) {
  return (
    <PrayerContainer>
      <PrayerTitle>기도문</PrayerTitle>
      <PrayerText>{prayer}</PrayerText>
    </PrayerContainer>
  );
}

export default PrayerSection;
