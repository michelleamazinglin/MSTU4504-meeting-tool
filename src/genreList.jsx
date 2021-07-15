import React from "react";

class GenreList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genreData: this.props.genreData
    };
  }

  render() {
    return (
      <>
        {this.state.genreData.map((ele) => (
          <ul>
            <li>
              {ele.text}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  let genreData = this.state.genreData;
                  let ele = this.state.ele;
                  var eleIndex = genreData.indexOf(ele);
                  genreData = genreData.splice(eleIndex, 1);
                  this.setState(genreData);
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

export default GenreList;
