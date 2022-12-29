import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Example2 } from "../assets/image";
import palette from "../lib/styles/palette";

const Datas = [
  "눈이 안좋아요",
  "코가 안좋아요",
  "귀가 안들려요",
  "이가 안좋아요",
  "살빼고 싶어요",
  "키크고 싶어요",
];

const Navbar = () => {
  return (
    <Container>
      <Link to="/">
        <Logo src={Example2} />
      </Link>
      {Datas.map((data) => (
        <Link to="/info/mouse" key={`data_${data}`}>
          <NavItem>{data}</NavItem>
        </Link>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 247px;
  min-height: 100;
  border-right: 1px solid ${palette.sky.base};
  padding-right: 20px;
`;

const Logo = styled.img`
  width: 100%;
  margin-bottom: 8px;
`;

const NavItem = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${palette.main.secondary};
  border-radius: 10px;
  margin: 6px 0;
  color: #9e9e9e;
  display: flex;
  align-items: center;
  padding-left: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  :hover {
    color: #ffffff;
    transform: scale(1.05);
    font-weight: 600;
  }
`;

export default Navbar;
