import { useState } from "react";
import { BsFillCloudLightningFill } from "react-icons/bs";


const TopBanner = () => {
    console.log(styles)
    // 1. 아이콘을 클릭한다.
    // 2. 아이콘을 클릭하면 TopBanner의 class를 "on"을 붙인다 / 뗀다.
    // 3. 변수를 만들어서 true / false 되는 스위치를 만들고
    // 4. true / false 값에 따라서 class를 "on"을 붙인다 / 뗀다.

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className={`TopBanner ${toggle ? 'on' : ''}`}>
                <h2>Lorem, ipsum dolor. {toggle ? 'on' : ''}</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br /> Expedita consectetur et a omnis. Minima, dolorem?</p>
                <a href="#" onClick={
                    (e) => {
                        e.preventDefault();
                    }}>more</a>
            </div>
            <span onClick={() => {
                setToggle(!toggle)
            }} className={toggle ? 'btn on' : 'btn'}>
                <BsFillCloudLightningFill />
            </span>
        </>
    )
}

export default TopBanner;