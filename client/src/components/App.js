import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
// import Header from './Header';
// import Landing from './pages/Landing';
// import About from './pages/About';
// import Shop from './shop/Shop';
import Chatbot from './chatbot/Chatbot';
import Navbar from './Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';

// const App = () => (
//     <div>
//        <BrowserRouter>
         
//            <div className="container">
//                <Header />
//                <Route exact path="/" component={Landing} />
//                <Route exact path="/about" component={About} />
//                <Route exact path="/shop" component={Shop} />
//                <Chatbot />
//            </div>
//        </BrowserRouter>
//     </div>
// )
// export default App;

function App() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' component={Services} />
            <Route path='/products' component={Products} />
            <Route path='/sign-up' component={SignUp} />
          </Switch>
          <Chatbot/>
        </Router>
      </>
    );
  }
  
  export default App;
  

