function Section({reference, classname, name}){
    
    return(
        <div ref={reference} className={classname}>
        <h3>{name}</h3>
      </div>
    )
}

export default Section;