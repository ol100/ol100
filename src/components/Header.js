import { useEffect, useState } from "react";
import MainNavigation from "./Menu";

function Header({services,blog,contact}){

  const [sticky, setSticky] = useState("");

    const scrollToSection = (elementRef) => {
        window.scrollTo({
          top: elementRef.current.offsetTop - 64,
          behavior: "smooth",
        });
      };

    //sticky
    useEffect(()=> {
      window.addEventListener('scroll',isSticky);
      return () => {
        window.removeEventListener('scroll', isSticky);
      };
    });

    const isSticky= (e) =>{
      const scrollTop = window.scrollY;
      const stickyClass = scrollTop >= 16 ? "is-sticky" : "";
      setSticky(stickyClass);
      console.log(stickyClass);
    }
    const classes = `hero space ${sticky}`
    return(
      <div className={classes}>
      <div className="burger">
        <MainNavigation />
      </div>
        <ul className="center">
          <li onClick={()=>scrollToSection(services)} className='link'>Services</li>
          <li onClick={()=>scrollToSection(blog)} className='link'>Blog</li>
          <li onClick={()=>scrollToSection(contact)} className='link'>Contact</li>
        </ul>
      </div>
      
    )
}

export default Header;