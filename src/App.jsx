import React from 'react';
import Home from './routes/home/home.components';
import SignIn from './routes/sign-in/sign-in.component';
import { Routes, Route} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component';



const Shop = () => {
  return <h1>I am the shop page</h1>
}


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element = {<Navigation />} >
          <Route index element= {<Home />} />
          <Route path='shop' element = {<Shop />} />
          <Route path='sign-in' element = {<SignIn />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
