import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

// export default class Display extends React.Component {
//   static propTypes = {
//     value: PropTypes.string,
//   };

//   render() {
//     return (
//       <div className="component-display">
//         <div>{this.props.value}</div>
//       </div>
//     );
//   }
// }

const Display = () => {
  return (
    <div className="component-app">
      <button>HELLO!</button>
    </div>
  );
};

export default Display;
