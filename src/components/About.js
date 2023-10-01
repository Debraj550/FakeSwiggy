import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("About constructor called");
  }

  componentDidMount() {
    console.log("About componenet mounted");
  }

  render() {
    console.log("About rendered");
    return (
      <div className="about-container">
        <h1>This is Debraj Dhar</h1>
        <h2>Fake Swiggy about section</h2>

        <UserClass name={"debraj"} />
      </div>
    );
  }
}

export default About;
