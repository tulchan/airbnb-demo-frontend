import React from "react";
import logo from "./logo.svg";
import { FluidContainer } from "../UI/Containers";
import { Link } from "react-router-dom";
import { Wrapper, Header, HeaderLogo, Input, Nav, NavLink } from "./style";

export default function() {
  return (
    <Header>
      <FluidContainer>
        <Wrapper>
          <div className="col-xs-10 col-sm-7">
            <HeaderLogo>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
              <Input placeholder="Try &quot;Miami&quot;" />
            </HeaderLogo>
          </div>
          <Nav>
            <NavLink href="">Become a host</NavLink>
            <NavLink href="">Help</NavLink>
            <NavLink href="">Sign Up</NavLink>
            <NavLink href="">Log In</NavLink>
          </Nav>
        </Wrapper>
      </FluidContainer>
    </Header>
  );
}
