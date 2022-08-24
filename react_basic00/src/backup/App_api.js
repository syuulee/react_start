import TopBanner from "./pages/TopBanner";
import List from "./pages/ListTest";
import './basic.css';
import { useEffect, useState } from "react";

const detail = () => {
  return (
    <h2>DATA[0].title</h2>
  )
}



const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(result => setData(result))
  }, []);

  //axios


  //JSON.parse()


  // console.log(Object(data[0]).id)→data[0]이 object가 아니라서
  // async await

  return (
    <div>
      {
        data.map(it => <li key={it.id}>{it.id} {it.title}</li>).slice(0, 10)
      }
    </div>
  )
}


export default App;

//  <TopBanner />
// <ListTest />