import Some from "./some";

const Test = ({ list, age, name, onClick }) => {

    console.log(onClick)
    return (
        <div>
            <button onClick={onClick}>🍔</button>
            <h2>마이 {list} {age} 친구 {name}list
                <button onClick={
                    () => (
                        alert(list)
                    )
                }>click</button>
            </h2>
            <Some list={list} />
            <ul>
                <li>마이 네임 임네 이마 마이 네임 임네 이마</li>
                <li>마이 네임 임네 이마 마이 네임 임네 이마</li>
                <li>마이 네임 임네 이마 마이 네임 임네 이마</li>
                <li>마이 네임 임네 이마 마이 네임 임네 이마</li>
                <li>마이 네임 임네 이마 마이 네임 임네 이마</li>
            </ul>
        </div >
    )
}

export default Test;