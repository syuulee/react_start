import Some from "./some";

const Test = ({ list, age, name, onClick }) => {

    console.log(onClick)
    return (
        <div>
            <button onClick={onClick}>π</button>
            <h2>λ§μ΄ {list} {age} μΉκ΅¬ {name}list
                <button onClick={
                    () => (
                        alert(list)
                    )
                }>click</button>
            </h2>
            <Some list={list} />
            <ul>
                <li>λ§μ΄ λ€μ μλ€ μ΄λ§ λ§μ΄ λ€μ μλ€ μ΄λ§</li>
                <li>λ§μ΄ λ€μ μλ€ μ΄λ§ λ§μ΄ λ€μ μλ€ μ΄λ§</li>
                <li>λ§μ΄ λ€μ μλ€ μ΄λ§ λ§μ΄ λ€μ μλ€ μ΄λ§</li>
                <li>λ§μ΄ λ€μ μλ€ μ΄λ§ λ§μ΄ λ€μ μλ€ μ΄λ§</li>
                <li>λ§μ΄ λ€μ μλ€ μ΄λ§ λ§μ΄ λ€μ μλ€ μ΄λ§</li>
            </ul>
        </div >
    )
}

export default Test;