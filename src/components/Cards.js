import cards from '../css/card.module.css'
import React, {useState, useEffect} from "react";
function Card(){
    const ref = React.useRef(null);

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    useEffect(()=>{
        const subtitle = ref.current;
        const createWord = (text, index) => {
            const word = document.createElement("span");
            
            word.innerHTML = `${text} `;
            
            word.classList.add("cardsubtitleword");
            
            word.style.transitionDelay = `${index * 40}ms`;
            
            return word;
        }

        const addWord = (text, index) => subtitle.appendChild(createWord(text, index));

        const createSubtitle = text => text.split(" ").map(addWord);

        createSubtitle("But in a much more real sense, I have no idea what I'm doing.");
    })

    return(
        <div className={cards.carta}>

        <div className={cards.card}>
                <div className={cards.cardcontent}>
                    <h3 className={cards.cardtitle}>I know exactly what I'm doing</h3>
                    <h4 ref={ref} className={cards.cardsubtitle}></h4>
                </div>
                    <i className="fa-solid fa-hat-witch card-icon"></i>
            </div>

        </div>
        
    )
}

export default Card;