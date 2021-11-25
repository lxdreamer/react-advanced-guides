import React from "react";

export class CounterButton extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {count: 1};
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    if (this.props.text !== nextProps.text) {
      return true;
    }
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.setState((state: { count: number; }) => ({count: state.count + 1}))}>
          {this.props.text}
        </button>
        <span>Count: {this.state.count}</span>
      </div>

    );
  }
}
