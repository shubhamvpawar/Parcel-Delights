import React from "react";

//Class Component
class About extends React.Component {
  //Whenever you create an instance of class, constructor is called and it is best place to receive props and create state variables.
  //Recieving props in an class component
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
  }

  render() {
    //RENDER - returns a piece of JSX which will be displayed on UI.

    //Destructuring
    // const {name} = this.props;
    const { count, count2 } = this.state;

    return (
      <div>
        <h1>About</h1>
        <h2>This is About Component</h2>
        {/* Way to access props - assuming name is passed in props to this component */}
        {/* <h2>Name: {this.props.name}</h2> */}
        <h4>Count: {this.state.count}</h4>
        <h4>Count: {count2}</h4>
        <button
          onClick={() => {
            //Never update state variables directly Ex. this.state.count = this.state.count + 1;

            //We use this.setState which contains an object and that object will have the updated value of your State
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increment
        </button>
      </div>
    );
  }
}

export default About;
