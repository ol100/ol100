import { useRef } from 'react';
import './App.css';
import ScrollToTop from './components/Scroll';
import Header from './components/Header';
import Section from './components/Section';


function App() {
  const services = useRef(null);
  const blog = useRef(null);
  const contact = useRef(null);

  return (
    <div className="App">
      <ScrollToTop />
      <Header services = {services} blog={blog} contact={contact}/>
      <Section reference={services} classname="services" name="Services" />
      <Section reference={blog} classname="blog" name="Blog" />
      <Section reference={contact} classname="contact" name="Contact" />
    </div>
  );
}

export default App;
