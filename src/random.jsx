import React from "react";

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genreData: this.props.genreData,
      functionData: this.props.functionData,
      scoreData: this.props.scoreData,
      res: ""
    };
    this.toggleSubmit = this.toggleSubmit.bind(this);
  }

  toggleSubmit(e) {
    e.preventDefault();
    let genreData = this.state.genreData;
    let functionData = this.state.functionData;
    let scoreData = this.state.scoreData;
    let res = this.state.res;
    let randGenre =
      genreData[Math.floor(Math.random() * genreData.length)].text;
    let randFunction =
      functionData[Math.floor(Math.random() * functionData.length)].text;
    let randScore =
      scoreData[Math.floor(Math.random() * scoreData.length)].text;
    res = `Genre:  ${randGenre} Function: ${randFunction} Score: ${randScore}`;
    this.setState({ res });
  }

  render() {
    return (
      <>
        <button class="random" onClick={this.toggleSubmit}>
          Randomize
        </button>
        <p>{this.state.res}</p>
      </>
    );
  }
}

export default Random;
