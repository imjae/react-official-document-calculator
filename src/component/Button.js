import React from "react";
import "./Button.css";

// export default class Button extends React.Component {
//   static propTypes = {
//     name: PropTypes.string,
//     orange: PropTypes.bool,
//     wide: PropTypes.bool,
//     clickHandler: PropTypes.func,
//   };

  // handleClick = () => {
  //   this.props.clickHandler(this.props.name);
  // };

//   render() {
// const className = [
//   "component-button",
//   this.props.orange ? "orange" : "",
//   this.props.wide ? "wide" : "",
// ];

// return (
//   <div className={className.join(" ").trim()}>
//     <button onClick={this.handleClick}>{this.props.name}</button>
//   </div>
// );
//   }
// }

const Button = (props) => {
  const className = [
    "component-button",
    props.orange ? "orange" : "",
    props.wide ? "wide" : "",
  ];

  const handleClick = () => {
    props.clickHandler(props.name);
  };

  return (
    <div className={className.join(" ").trim()}>
      <button onClick={() => handleClick()}>{props.name}</button>
    </div>
  );
};

export default Button;
