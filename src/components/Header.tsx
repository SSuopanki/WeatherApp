import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Title>Weather App</Title>
      <HeaderDiv>
        <div>
          <Heading to="Oulu">Oulu</Heading>
          <Heading to="Helsinki">Helsinki</Heading>
        </div>
      </HeaderDiv>
    </>
  );
};

const HeaderDiv = styled.div`
  display: flex;
`;

const Heading = styled(Link)`
  width: 100px;
  font-size: 30px;
  color: #ffffff;
  text-decoration: none;
  margin-left: 2rem;

  &:active {
    color: #03394e;
  }
  &:hover {
    color: #00b7ff;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  color: #4b49a1;
`;
