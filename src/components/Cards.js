//import cards from '../css/card.module.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
/*function Card(){
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

export default Card;*/

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }} className='space spaceCards'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
