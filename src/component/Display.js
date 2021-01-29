import React from "react";

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

const Display = (props) => {

  return (
    <div className="component-display">
      <div>{props.value}</div>
    </div>
  );
};

export default Display;
