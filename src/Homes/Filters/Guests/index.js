import React, { Component } from "react";
import styled from "styled-components";
import Counter from "../../../UI/Counter";
import close from "./close.svg";

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  background: #fff;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 5;
  @media screen and (min-width: 768px) {
    position: static;
  }
`;

const Popup = styled.div`
  position: static;
  min-width: 326px;
  height: 100%;
  top: 100%;
  z-index: 9;
  background: #fff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  @media screen and (min-width: 768px) {
    position: absolute;
    box-shadow: none;
    padding: 0;
    height: auto;
  }
`;

const InnerWrapper = styled.div`
  padding: 31px 15px 0px 24px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.div`
  font: 20px "CircularAir-Book";
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0px -1px 0px #d5d5d5;
  padding: 8px;
  @media screen and (min-width: 768px) {
    position: static;
    box-shadow: none;
    padding: 0;
    margin-top: 20px;
  }
`;

const Button = styled.button`
  display: none;
  width: 110px;
  height: 64px;
  background: none;
  border: none;
  font: 16px "CircularAir-Book";
  color: ${props => (props.isApply ? "#0F7276" : "#383838")};
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const SaveButton = styled.button`
  display: block;
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 4px;
  font: 18px "CircularAir-Bold", sans-serif;
  line-height: 21px;
  cursor: pointer;
  background: #ff5a5f;
  color: #fff;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 16px;
  padding-bottom: 10px;
  font: 14px "CircularAir-Book", sans-serif;
  line-height: normal;
  width: 100%;
  z-index: 6;
  background: #fff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Ages = styled.p`
  font: 16px "CircularAir-Light";
`;

const CloseButton = styled.button`
  border: none;
  background: url(${close});
  background-repeat: no-repeat;
  background-position: center;
  height: 26px;
  width: 26px;
  cursor: pointer;
`;

const Title = styled.div`
  color: #383838;
`;

const Reset = styled.div`
  color: #0f7276;
  cursor: pointer;
`;

const Link = styled.button`
  display: none;
  border: 1px solid;
  border-color: ${props =>
    props.active ? "#01524c" : "rgba(72, 72, 72, 0.2)"};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 0.4rem 0.78rem;
  white-space: nowrap;
  transition: 0.25s ease-out;
  background: ${props => (props.active ? "#008489" : "#fff")};
  color: ${props => (props.active ? "#fff" : "#383838")};
  font: 14px "CircularAir-Book", sans-serif;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

class Guests extends Component {
  state = {
    adults: this.props.adults,
    children: this.props.children,
    infants: this.props.infants
  };

  onCount = (value, key) => {
    this.setState({ [key]: value });
  };

  onApply = () => {
    this.props.onApplyProp(
      this.state.adults,
      this.state.children,
      this.state.infants
    );
  };

  onCancel = () => {
    this.props.onCancelProp(null);
  };

  render() {
    return (
      <Wrapper>
        <Link active onClick={this.onCancel}>
          Guests
        </Link>
        <Popup>
          <Header>
            <CloseButton onClick={this.onCancel} />
            <Title>Guests</Title>
            <Reset>Reset</Reset>
          </Header>
          <InnerWrapper>
            <Row>
              <div>
                <Label>Adults</Label>
              </div>
              <Counter
                onChange={this.onCount}
                value={this.state.adults}
                id="adults"
              />
            </Row>
            <Row>
              <div>
                <Label>
                  Adults
                  <Ages>Ages 2 — 12</Ages>
                </Label>
              </div>
              <Counter
                onChange={this.onCount}
                value={this.state.children}
                id="children"
              />
            </Row>
            <Row>
              <div>
                <Label>
                  Infants
                  <Ages>Under 2</Ages>
                </Label>
              </div>
              <Counter
                onChange={this.onCount}
                value={this.state.infants}
                id="infants"
              />
            </Row>
          </InnerWrapper>
          <Footer>
            <Button onClick={this.onCancel}>Cancel</Button>
            <Button isApply onClick={this.onApply}>
              Apply
            </Button>
            <SaveButton onClick={this.onApply}>Save</SaveButton>
          </Footer>
        </Popup>
      </Wrapper>
    );
  }
}

export default Guests;
