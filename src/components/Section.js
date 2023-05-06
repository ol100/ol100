import ActionAreaCard from './Cards';
import CustomCard from './CustomCard';
import cards from '../css/card.module.css'
function Section({reference, classname, name}){
    
    return(
        <div ref={reference} className={`${classname} space`}>
        <h3>{name}</h3>
        <div className={cards.wrap}>
        <ActionAreaCard />
        <CustomCard />
        </div>
        
      </div>
    )
}

export default Section;