import React, {useState, useEffect} from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTop=()=>{
    const[showScrollTopButton, setShowScrollTopButton] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 300){
                setShowScrollTopButton(true)
            } else{
                setShowScrollTopButton(false)
            }
        }, [])
        })
    const scrollTop = (elementRef) => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    
    let button =  <ArrowUpwardIcon className="top-btn-pos top-btn-style" onClick={scrollTop}></ArrowUpwardIcon>;

    return(
        <div>{showScrollTopButton && button}</div>
    )
}

export default ScrollToTop;