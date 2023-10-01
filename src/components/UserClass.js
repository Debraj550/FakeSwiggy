import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };

    //console.log("Child constructor called");
  }

  componentDidMount() {
    //console.log("child mounted");
  }

  render() {
    //console.log("Child rendered");
    const { count } = this.state;
    return (
      <div className="userclass-container">
        <h1>This is the child class</h1>
        <h2>{count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase counter
        </button>
      </div>
    );
  }
}

export default UserClass;
