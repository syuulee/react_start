import { useRef, useState } from "react";
import './basic.css';

const App = () => {
  const [num, setNum] = useState(1);
  const [toggle, setToggle] = useState(true)
  // const link = useRef(1); // useRef: 리렌더링 하지 않는다. 컴포넌트의 속성만 조회&수정
  // console.log(num)
  // console.log('App')
  const Test = () => {
    return (
      <div>
        hello
      </div>
    )
  }
  return (
    <>
      {num}
      {/* {num} {link.current} */}
      <section className={toggle ? '' : 'on'}>
        {toggle ? 'loading...' : <Test />}
      </section>
      <div>00700</div>
      {/* {console.log(num, link.current)} */}
      <button onClick={
        () => {
          setNum(num + 1),  // ;이 아닌 , 인 이유 : 화살표 함수 안에 함수가 2개 실행되면 수미표를 사용
            console.log(toggle),
            setToggle(!toggle), //부정연산자 !
            console.log(num)
          //   link.current = link.current + 1;
          // console.log(link.current)
        }
      }>PUSH</button>
    </>
  )
}


export default App;