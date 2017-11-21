import styled from "styled-components";
import loupe from "./search.svg";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input.attrs({
  type: "search"
})`
  width: 100%;
  height: 48px;
  padding-left: 52px;
  margin-left: 50px;
  font: 16px "CircularAir-Book", sans-serif;
  line-height: 24px;
  background-image: url(${loupe});
  background-repeat: no-repeat;
  background-position: 12px center;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 5px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  @media only screen and (max-width: 1200px) {
    margin-left: 34px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  margin-left: 25px;
  color: #383838;
  text-decoration: none;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
