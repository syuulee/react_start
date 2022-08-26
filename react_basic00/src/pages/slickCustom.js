import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";


const SlickCustom = () => {
    const SlideEle = [
        { id: 1, h2: '01. JEWELLERY COLLECTION', p: '모던하면서도 클래식한 디자인들을 완벽하게 표현한 그라프 하우스의 시그너쳐 컬렉션은 다양한 컷, 스톤 그리고 색상들을 멋진 조합으로 선사합니다. ' },
        { id: 2, h2: '02. JEWELLERY COLLECTION', p: '모던하면서도 클래식한 디자인들을 완벽하게 표현한 그라프 하우스의 시그너쳐 컬렉션은 다양한 컷, 스톤 그리고 색상들을 멋진 조합으로 선사합니다. ' },
        { id: 3, h2: '03. JEWELLERY COLLECTION', p: '모던하면서도 클래식한 디자인들을 완벽하게 표현한 그라프 하우스의 시그너쳐 컬렉션은 다양한 컷, 스톤 그리고 색상들을 멋진 조합으로 선사합니다. ' },
        { id: 4, h2: '04. JEWELLERY COLLECTION', p: '모던하면서도 클래식한 디자인들을 완벽하게 표현한 그라프 하우스의 시그너쳐 컬렉션은 다양한 컷, 스톤 그리고 색상들을 멋진 조합으로 선사합니다. ' }
    ];


    const s1 = useRef();
    const [num, setNum] = useState();

    useEffect(() => {
        setNum(0)
    }, [])
    // useState()의 초기값을 만들어주는 역할을 하도록 하겠다 = useState(0)

    const set = {
        arrows: false,
        autoplay: true,
        afterChange: idx => {
            setNum(idx)
        }
    }

    return (
        <>
            <Slider ref={s1} {...set} className="MainVisual">
                {
                    /* Slider를 컨트롤 하기 위해서 ref를 써서 이름을 붙여주는 것 */
                    SlideEle.map((itm, idx) => <figure
                        key={itm.id}
                        className={`itm0${idx + 1} ${idx == num ? 'on' : ''}`}
                    >
                        <div className="slogan">
                            <h2>{itm.h2}</h2>
                            <p>{itm.p}</p>
                            <a href="#!" onClick={e => e.preventDefault}>more</a>
                        </div>


                    </figure>)
                    //  반복문 돌려줄 때 key값을 적어줘야함
                }
            </Slider>

            <div className="num">
                {num + 1} / {SlideEle.length}

            </div>


            <div className="slideArrow">
                <i className="xi-arrow-left" onClick={() => s1.current.slickPrev()}></i>
                <i className="xi-arrow-right" onClick={() => s1.current.slickNext()}></i>
            </div>

            <ul className="slideDot">
                {
                    SlideEle.map((dot, idx) => <li key={dot.id}
                        onClick={() =>
                            s1.current.slickGoTo(idx)
                        }
                        className={idx == num ? 'on' : ''}
                    >
                        {dot.id}</li>)
                }
            </ul>
        </>
    )
}

export default SlickCustom;