import React from "react";

class FunctionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      functionData: this.props.functionData
    };
  }

  render() {
    return (
      <>
        {this.state.functionData.map((ele) => (
          <ul>
            <li>
              {ele.text}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  let functionData = this.state.functionData;
                  let ele = this.state.ele;
                  var eleIndex = functionData.indexOf(ele);
                  functionData = functionData.splice(eleIndex, 1);
                  this.setState(functionData);
                }}
              >
                X
              </button>
            </li>
          </ul>
        ))}
      </>
    );
  }
}

export default FunctionList;
