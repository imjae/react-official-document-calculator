import Button from "./Button";
import React from "react";

import "./ButtonPanel.css";

// export default class ButtonPanel extends React.Component {
//   static propTypes = {
//     clickHandler: PropTypes.func,
//   };

  // handleClick = buttonName => {
  //   this.props.clickHandler(buttonName);
  // };

//   render() {
//     return (
// <div className="component-button-panel">
//   <div>
//     <Button name="AC" clickHandler={this.handleClick} />
//     <Button name="+/-" clickHandler={this.handleClick} />
//     <Button name="%" clickHandler={this.handleClick} />
//     <Button name="÷" clickHandler={this.handleClick} orange />
//   </div>
//   <div>
//     <Button name="7" clickHandler={this.handleClick} />
//     <Button name="8" clickHandler={this.handleClick} />
//     <Button name="9" clickHandler={this.handleClick} />
//     <Button name="x" clickHandler={this.handleClick} orange />
//   </div>
//   <div>
//     <Button name="4" clickHandler={this.handleClick} />
//     <Button name="5" clickHandler={this.handleClick} />
//     <Button name="6" clickHandler={this.handleClick} />
//     <Button name="-" clickHandler={this.handleClick} orange />
//   </div>
//   <div>
//     <Button name="1" clickHandler={this.handleClick} />
//     <Button name="2" clickHandler={this.handleClick} />
//     <Button name="3" clickHandler={this.handleClick} />
//     <Button name="+" clickHandler={this.handleClick} orange />
//   </div>
//   <div>
//     <Button name="0" clickHandler={this.handleClick} wide />
//     <Button name="." clickHandler={this.handleClick} />
//     <Button name="=" clickHandler={this.handleClick} orange />
//   </div>
// </div>
//     );
//   }
// }

const ButtonPanel = (props) => {

  return (
    <div className="component-button-panel">
      <div>
        <Button name="AC" clickHandler={props.clickHandler} />
        <Button name="+/-" clickHandler={props.clickHandler} />
        <Button name="%" clickHandler={props.clickHandler} />
        <Button name="÷" clickHandler={props.clickHandler} orange />
      </div>
      <div>
        <Button name="7" clickHandler={props.clickHandler} />
        <Button name="8" clickHandler={props.clickHandler} />
        <Button name="9" clickHandler={props.clickHandler} />
        <Button name="x" clickHandler={props.clickHandler} orange />
      </div>
      <div>
        <Button name="4" clickHandler={props.clickHandler} />
        <Button name="5" clickHandler={props.clickHandler} />
        <Button name="6" clickHandler={props.clickHandler} />
        <Button name="-" clickHandler={props.clickHandler} orange />
      </div>
      <div>
        <Button name="1" clickHandler={props.clickHandler} />
        <Button name="2" clickHandler={props.clickHandler} />
        <Button name="3" clickHandler={props.clickHandler} />
        <Button name="+" clickHandler={props.clickHandler} orange />
      </div>
      <div>
        <Button name="0" clickHandler={props.clickHandler} wide />
        <Button name="." clickHandler={props.clickHandler} />
        <Button name="=" clickHandler={props.clickHandler} orange />
      </div>
    </div>
  );
};

export default ButtonPanel;
