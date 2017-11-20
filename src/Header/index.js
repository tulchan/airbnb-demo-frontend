import React from "react";
import logo from "./logo.svg";
import { FluidContainer } from "../Containers";
import { Wrapper, Header, HeaderLogo, Input, Nav, Link } from "./style";

export default function() {
  return (
    <Header>
      <FluidContainer>
        <Wrapper>
          <div className="col-xs-10 col-sm-7">
            <HeaderLogo>
              <img src={logo} alt="logo" />
              <Input placeholder="Try &quot;Miami&quot;" />
            </HeaderLogo>
          </div>
          <Nav>
            <Link href="">Become a host</Link>
            <Link href="">Help</Link>
            <Link href="">Sign Up</Link>
            <Link href="">Log In</Link>
          </Nav>
        </Wrapper>
      </FluidContainer>
    </Header>
  );
}
