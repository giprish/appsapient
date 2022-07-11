import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Redirect} from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import Navbar from './navbar';
import Footer from './Footer';
import Blog from './blog';
import Faq from './faq';
import Createathon from './createathon';
import Web_designing_services from './web_designing_services';
import Application_development from './application_development';
import Web_development_services from './web_development_services';




const App =() => {
    return (
        <><Navbar/>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
                       
            <Route exact path="/" component={Home}/>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/faq" component={Faq}/>            
            <Route exact path="/web_designing_services" component={Web_designing_services}/>
            <Route exact path="/Web_development_services" component={Web_development_services}/>
            <Route exact path="/application_development" component={Application_development}/>
           
            <Route exact path="/createathon" component={Createathon}/>
          
            
           
                  
        </Switch>
      
        
        <Footer/>
        </>
    );
};

export default App;