import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Example2 } from "../assets/image";
import palette from "../lib/styles/palette";

const Datas = [
  {
    title: "면역력이 좋아지고 싶어요",
    link: "/info/immun",
  },
  {
    title: "관절이 안좋아요",
    link: "/info/jointbon",
  },
  {
    title: "간이 안좋아요",
    link: "/info/liver",
  },
  {
    title: "치아가 약해요",
    link: "/info/mouth",
  },
  {
    title: "전립선이 안좋아요",
    link: "/info/prostate",
  },
  {
    title: "피로가 심해요",
    link: "/info/tiredness",
  },
  {
    title: "소변이 안나와요",
    link: "/info/urinarytractinfo",
  },
  {
    title: "혈액지방이 높아요",
    link: "/info/triglyceridesInfo",
  },
];

const Navbar = () => {
  return (
    <Container>
      <Link to="/">
        <Logo src={Example2} />
      </Link>
      {Datas.map(({ link, title }) => (
        <Link to={link} key={`data_${title}`}>
          <NavItem>{title}</NavItem>
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
