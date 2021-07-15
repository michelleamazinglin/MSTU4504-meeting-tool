import React from "react";
import GenreList from "./genreList";
import ScoreList from "./scoreList";
import FunctionList from "./functionList";
import Random from "./random";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      genreData: [
        { text: "Platform" },
        { text: "Survival" },
        { text: "Horror" },
        { text: "Serious" }
      ],
      genreInput: "",
      functionData: [{ text: "clicking" }, { text: "keyborad" }],
      functionInput: "",
      scoreData: [{ text: "score" }, { text: "time" }, { text: "billboard" }],
      scoreInput: ""
    };
    this.genreInput = this.genreInput.bind(this);
    this.handleSubmitGenre = this.handleSubmitGenre.bind(this);
    this.functionInput = this.functionInput.bind(this);
    this.handleSubmitFunction = this.handleSubmitFunction.bind(this);
    this.scoreInput = this.scoreInput.bind(this);
    this.handleSubmitScore = this.handleSubmitScore.bind(this);
  }

  genreInput(e) {
    const genreInput = e.target.value;
    this.setState({ genreInput });
  }

  handleSubmitGenre(e) {
    e.preventDefault();
    let genreInput = this.state.genreInput;
    let genreData = this.state.genreData;
    let newData = {
      text: genreInput
    };
    genreData.push(newData);
    genreInput = "";
    this.setState({ genreData, genreInput });
  }

  functionInput(e) {
    const functionInput = e.target.value;
    this.setState({ functionInput });
  }

  handleSubmitFunction(e) {
    e.preventDefault();
    let functionInput = this.state.functionInput;
    let functionData = this.state.functionData;
    let newData = {
      text: functionInput
    };
    functionData.push(newData);
    functionInput = "";
    this.setState({ functionData, functionInput });
  }

  scoreInput(e) {
    const scoreInput = e.target.value;
    this.setState({ scoreInput });
  }

  handleSubmitScore(e) {
    e.preventDefault();
    let scoreInput = this.state.scoreInput;
    let scoreData = this.state.scoreData;
    let newData = {
      text: scoreInput
    };
    scoreData.push(newData);
    scoreInput = "";
    this.setState({ scoreData, scoreInput });
  }

  render() {
    return (
      <>
        <div class="threeRowContainer">
          <div>
            <form>
              <label for="genre">Genre: </label>
              <input
                id="genre"
                type="text"
                value={this.state.genreInput}
                onChange={this.genreInput}
                placeholder="Genre input here"
              />
              <input type="submit" onClick={this.handleSubmitGenre} />
            </form>
            <GenreList genreData={this.state.genreData} />
          </div>
          <div>
            <form>
              <label for="functionality">Functionality: </label>
              <input
                id="functionality"
                type="text"
                value={this.state.functionInput}
                onChange={this.functionInput}
                placeholder="functionality input here"
              />
              <input type="submit" onClick={this.handleSubmitFunction} />
            </form>
            <FunctionList functionData={this.state.functionData} />
          </div>
          <div>
            <form>
              <label for="score">Reward method: </label>
              <input
                id="score"
                type="text"
                value={this.state.scoreInput}
                onChange={this.scoreInput}
                placeholder="reward method input here"
              />
              <input type="submit" onClick={this.handleSubmitScore} />
            </form>
            <ScoreList scoreData={this.state.scoreData} />
          </div>
        </div>
        <Random
          genreData={this.state.genreData}
          functionData={this.state.functionData}
          scoreData={this.state.scoreData}
        />
      </>
    );
  }
}

export default Form;
