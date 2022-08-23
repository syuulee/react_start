import { useState } from 'react';
import Test from "./list";

const App = () => {
    const [num, setNum] = useState(1);
    const numHandler = () => (
        setNum(num + 1))
    return (
        <>
            <h1>{num}</h1>
            {/* <button onClick={numHandler}>NUM PLUS</button> */}
            <Test list="우영우" name="동그라미" age={30405} onClick={numHandler} />
            <Test list="스위스" name="동그라미" age={30405} onClick={numHandler} />
            <Test list="별똥별" name="동그라미" age={30405} />
            <Test list="토마토" name="동그라미" age={30405} />
        </>
    )
}
export default App;



/* 함수식 쓰는 방법 
1. function App() {
  return <>     웰치스오렌지
  </>
}

2. const App = function () {
  return <>개피곤</>
}
*/

/* const Test = ({ list }) => {
  = const {list} = props */