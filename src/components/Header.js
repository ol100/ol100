function Header({services,blog,contact}){

    const scrollToSection = (elementRef) => {
        window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: "smooth",
        });
      };

    return(
        <div className="hero">
        <ul>
          <li onClick={()=>scrollToSection(services)} className='link'>Services</li>
          <li onClick={()=>scrollToSection(blog)} className='link'>Blog</li>
          <li onClick={()=>scrollToSection(contact)} className='link'>Contact</li>
        </ul>
      </div>
    )
}

export default Header;