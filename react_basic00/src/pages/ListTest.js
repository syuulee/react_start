const DATA = [
    { id: 1, name: 'ㅇㅅㅇ', age: 100, sleep: true },
    { id: 2, name: 'ㅇㅁㅇ', age: 101, sleep: true },
    { id: 3, name: 'ㅇㅂㅇ', age: 102, sleep: true }
]

const List = () => {
    return (
        <ul>
            {
                DATA.map(
                    (it, idx) =>
                        <li key={it.id}>
                            {idx + 1}번 {it.name}은 {it.age}살 {it.sleep ? '자고 있음' : '놀고 있음'}
                        </li>)
            }
            {/* {DATA[0].name}은 {DATA[0].age}살 {DATA[0].sleep && '자고 있음'},
      {DATA[1].name}은 {DATA[1].age}살 {DATA[1].sleep && '자고 있음'},
      {DATA[2].name}은 {DATA[2].age}살 {DATA[2].sleep && '자고 있음'}, */}
            {/* DATA 0의 name */}
            {/* {DATA[0].sleep && '자고 있음'} = sleep이 true면, 자고있음을 나오게 한다 */}
            {DATA.map(it => { return <li>{it.name}</li> })}

        </ul >
    )
}

export default List;