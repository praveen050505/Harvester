import './App.css';
import Navbar from './components/Navbar'
import Body from './components/Body'
import Ourharvester from './components/Ourharvester'
import OurWork from './components/Ourwork'
import WhyChooseus from './components/WhyChooseus'
import ContactUs from './components/ContactUs'
import Payments from './components/Payments'
import Footer from './components/Footer'
function App() {
  return (
    <div className='app-container'>
    <Navbar></Navbar>
    <Body></Body>
    <Ourharvester></Ourharvester>
    <OurWork></OurWork>
    <WhyChooseus></WhyChooseus>
    <ContactUs></ContactUs> 
    <Payments></Payments>
    <Footer></Footer>
    </div>
  );
}

export default App;
