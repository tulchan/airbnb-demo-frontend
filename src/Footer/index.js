import React from "react";
import "../fonts.css";
import FootLogo from "./footlogo.svg";
import Facebook from "./facebook.svg";
import Twitter from "./twitter.svg";
import Instagram from "./instagram.svg";
import {
  Nav,
  NavName,
  Wrapper,
  Sectionfooter,
  Copy,
  NavigationLink,
  Select,
  Link,
  Options,
  Logo,
  SelectValue
} from "./style";
import { FluidContainer } from "../Containers";

export default function() {
  return (
    <Wrapper>
      <FluidContainer>
        <div className="row">
          <div className="col-xs-12 col-sm-3">
            <Select>
              <Options>
                <option>United states dollar</option>
                <option>Англия</option>
                <option>Северная Ирландия</option>
                <option>Шотландия</option>
                <option>Уэльс</option>
              </Options>
              <SelectValue>
                <span>English</span>
              </SelectValue>
            </Select>
            <Select>
              <Options>
                <option>English</option>
                <option>Англия</option>
                <option>Северная Ирландия</option>
                <option>Шотландия</option>
                <option>Уэльс</option>
              </Options>
              <SelectValue>
                <span>United States dollar</span>
              </SelectValue>
            </Select>
          </div>

          <div className=" col-sm-3 hidden-xs">
            <NavName>Airbnb</NavName>
            <Nav>
              <NavigationLink href="">About us</NavigationLink>
              <NavigationLink href="">Careers</NavigationLink>
              <NavigationLink href="">Press</NavigationLink>
              <NavigationLink href="">Policies</NavigationLink>
              <NavigationLink href="">Help</NavigationLink>
              <NavigationLink href="">Diversity & Belongin</NavigationLink>
            </Nav>
          </div>
          <div className=" col-sm-3 hidden-xs">
            <NavName>Discover</NavName>
            <Nav>
              <NavigationLink href="">Trust & Safety</NavigationLink>
              <NavigationLink href="">Travel Credit</NavigationLink>
              <NavigationLink href="">Gift Cards</NavigationLink>
              <NavigationLink href="">Refirbnb Citizen</NavigationLink>
              <NavigationLink href="">Business Travel</NavigationLink>
              <NavigationLink href="">Guidebooks</NavigationLink>
              <NavigationLink href="">Refirbnbmag</NavigationLink>
            </Nav>
          </div>
          <div className=" col-sm-3 hidden-xs">
            <NavName>Hosting</NavName>
            <Nav>
              <NavigationLink href="">Why Host</NavigationLink>
              <NavigationLink href="">Hospitality</NavigationLink>
              <NavigationLink href="">Responsible hosting</NavigationLink>
              <NavigationLink href="">Comunity Center</NavigationLink>
            </Nav>
          </div>
          <div className="col-xs-12">
            <Sectionfooter>
              <div>
                <Logo src={FootLogo} alt="" />
                <Copy>© Refirbnb Inc.</Copy>
              </div>
              <div>
                <nav>
                  <Link href="">Terms</Link>
                  <Link href="">Privacy</Link>
                  <Link href="">Site map</Link>
                  <Link href="">
                    <img src={Facebook} alt="" />
                  </Link>
                  <Link href="">
                    <img src={Twitter} alt="" />
                  </Link>
                  <Link href="">
                    <img src={Instagram} alt="" />
                  </Link>
                </nav>
              </div>
            </Sectionfooter>
          </div>
        </div>
      </FluidContainer>
    </Wrapper>
  );
}
