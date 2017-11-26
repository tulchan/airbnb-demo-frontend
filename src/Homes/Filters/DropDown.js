import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 32px 55px;
  font: inherit;
  font-size: 16px;
  border: none;
  outline: none;
  background-color: ${props => (props.isOpen ? "#008489" : "#fff")};
  color: ${props => (props.isOpen ? "#fff" : "#383838")};
`;

const Apply = Button.extend`
  color: #008489;
`;

const Filter = styled.button`
  padding: 7px 15px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  font: 14px "CircularAir-Book", sans-serif;
  line-height: 16px;
  background-color: ${props => (props.isOpen ? "#008489" : "#fff")};
  color: ${props => (props.isOpen ? "#fff" : "#383838")};
  border-radius: 4px;
  cursor: pointer;
  margin-right: 12px;
  outline: none;
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 53px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.07);
  border-radius: 4px;
  background: #fff;
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export class DropDown extends React.Component {
  state = {
    isOpen: false
  };

  toggleOpen = e => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  onApply = e => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <div>
        <Filter onClick={this.toggleOpen} isOpen={this.state.isOpen}>
          {this.state.isOpen ? "Check in — Check out " : this.props.name}
        </Filter>

        {this.state.isOpen && (
          <ModalWrapper>
            {this.props.children}
            <Footer>
              <Button>Cancel</Button>
              <Apply isApply>Apply</Apply>
            </Footer>
          </ModalWrapper>
        )}
      </div>
    );
  }
}
