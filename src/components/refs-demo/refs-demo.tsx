import  React, { useEffect }  from 'react';

// 将 ref 自动地通过组件传递到其一子组件
// todo
const MyInput  = React.forwardRef((props, ref: any) =>(
  <input ref={ref} type="text" />
  // <input forwardedRef={ref} type="text" />
))

const inputRef = React.createRef()


export function RefsDemo() {
  console.log(inputRef.current)
  useEffect(() => {
    console.log('更新后', inputRef.current)
  })
  const show = ()=>{
    console.log(inputRef.current)
  }
  return (
    <div>
      <MyInput ref={inputRef}></MyInput>
      <button onClick={show}>显示ref</button>
    </div>
  )
}
