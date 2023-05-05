import ActionAreaCard from './Cards';
import CustomCard from './CustomCard';
function Section({reference, classname, name}){
    
    return(
        <div ref={reference} className={`${classname} space`}>
        <h3>{name}</h3>
        <ActionAreaCard />
        <CustomCard />
      </div>
    )
}

export default Section;