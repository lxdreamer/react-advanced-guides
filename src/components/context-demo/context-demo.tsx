import React, { Component, useContext } from "react"

// context提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。

const TitleContext= React.createContext('title默认值') //默认值，只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效
// titleContext.displayName = 'lxx'  // 在devtool的显示名称

// 使用Provider 将值传递下去,无论多深都能拿到，一个provider可以给多个组件消费，
// Provider 及其内部 consumer 组件都不受制于 shouldComponentUpdate 函数，因此当 consumer 组件在其祖先组件退出更新的情况下也能更新
// 由于value是浅比较，需要注意父组件provider的重新渲染意外导致子组件重新渲染： value={{something: 'something'}}
export function ContextDemo() {
  return (
    <TitleContext.Provider value='真正的title'>
      <Header></Header>
    </TitleContext.Provider>
    // <Header></Header>
  )
}

// 中间的组件不必传递context
function Header () {
  return (
    <div>
      <Title></Title>
      <TitleConsumer></TitleConsumer>
      <TitleFC></TitleFC>
    </div>
  )
}

class Title extends Component {
  // static contextType = titleContext; // es2022 原有静态属性和方法只能通过原型链的方法调用
  render() {
    return (
      <h1>Title:{this.context}</h1>
    )
  }
}
Title.contextType = TitleContext // 使用context来消费


// 如果多个需要嵌套使用
function TitleConsumer () {
  return (
    <TitleContext.Consumer>
    {value =>
      <h1>TitleConsumer:{value}</h1>
    }
    </TitleContext.Consumer>
  )
}

function TitleFC () {
  const context = useContext(TitleContext)
  return (
    <h1>TitleFC:{context}</h1>
  )
}



// 弊端： 使组件的复用性变差
