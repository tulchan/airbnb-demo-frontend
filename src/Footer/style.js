import styled from "styled-components";
import footerdroparrow from "../footerdroparrow.svg";

export const Nav = styled.nav`
  list-style: none;
  text-align: left;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;
export const Logo = styled.img`
  vertical-align: middle;
  margin-right: 12px;
`;
export const NavName = styled.div`
  font: 15px "CircularAir-Bold", sans-serif;
  text-align: left;
  margin-bottom: 15px;
  color: #383838;
`;
export const Wrapper = styled.div`
  margin-top: 64px;
  padding-top: 50px;
  padding-bottom: 30px;
  border-top: 1px solid rgba(72, 72, 72, 0.2);
  color: #636363;
`;
export const Sectionfooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(72, 72, 72, 0.2);
  padding-top: 30px;
  margin-top: 40px;
  flex-direction: column;
  align-items: left;
  @media only screen and (min-width: 400px) {
    flex-direction: row;
    align-items: center;
  }
`;
export const NavigationLink = styled.a`
  margin-bottom: 8px;
  font-family: "CircularAir-Book";
  line-height: normal;
  font-size: 15px;
`;
export const Copy = styled.span`
  vertical-align: middle;
`;

export const Link = styled.a`
  margin-left: 10px;
  display: inline-block;
  vertical-align: middle;
  &:first-child {
    margin-left: 0;
  }
`;

export const Select = styled.div`
  position: relative;
  width: 83%;
  height: 48px;
  margin-bottom: 16px;
`;

export const Options = styled.select`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
`;

export const SelectValue = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-left: 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 5px;
  font: 18px "CircularAir-Light", sans-serif;
  align-items: center;
  justify-content: space-between;
  &:after {
    content: "";
    width: 16px;
    height: 9px;
    margin-right: 16px;
    background-image: url(${footerdroparrow});
    background-repeat: no-repeat;
    background-size: contain;
  }
`;
