import React from "react";

// 浅对比
// 可以使用扩展运算符或者object.assign返回一个新的对象而不是修改老的对象
export class CounterButtonPure extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {count: [1,2,3,4]}
  }
  changState = ()=> {
    let count = this.state.count
    count.push(5)
    this.setState({count})
    // this.setState({count: [...count,5] })
  }

  render() {
    return (
      <div>
        <button onClick={this.changState}>
          改变state的值
        </button>
        <span>Count: {this.state.count.toString()}</span>
      </div>

    );
  }
}
