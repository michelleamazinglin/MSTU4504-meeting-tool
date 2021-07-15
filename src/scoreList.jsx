import React from "react";

class ScoreList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreData: this.props.scoreData
    };
  }

  render() {
    return (
      <>
        {this.state.scoreData.map((ele) => (
          <ul>
            <li>
              {ele.text}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  let scoreData = this.state.scoreData;
                  let ele = this.state.ele;
                  var eleIndex = scoreData.indexOf(ele);
                  scoreData = scoreData.splice(eleIndex, 1);
                  this.setState(scoreData);
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

export default ScoreList;
