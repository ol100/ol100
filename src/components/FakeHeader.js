import { useEffect, useState } from 'react'
import fake from '../css/fake.module.css'

export default function Fake(){

    const [show, setShow] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',check);
    })

    const check= () =>{
        const scrollTop = window.scrollY;
        setShow(scrollTop>=16 ? true : false)
    }

    let fakeDiv = <div className={fake.fakeheader}></div>

    return(
        <div>{show && fakeDiv}</div>
    )
}