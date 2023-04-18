import ActionAreaCard from './Cards';
function Section({reference, classname, name}){
    
    return(
        <div ref={reference} className={`${classname} space`}>
        <h3>{name}</h3>
        <ActionAreaCard />
      </div>
    )
}

export default Section;