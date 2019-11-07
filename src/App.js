import React from "react";

class App extends React.Component {
  state = {
    displayFlag: true
  };

  switchDisplay = () =>
    this.setState({
      displayFlag: !this.state.displayFlag
    });

  render = () => {
    return (
      <>
        <button onClick={this.switchDisplay}>switchDisplay</button>
        {this.state.displayFlag && <div>hello</div>}
      </>
    );
  };
}

export default App;
