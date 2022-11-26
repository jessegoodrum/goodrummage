import React from 'react';
import Home from './routes/home/home.components';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import { Routes, Route} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component';


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element = {<Navigation />} >
          <Route index element= {<Home />} />
          <Route path='shop' element = {<Shop />} />
          <Route path='auth' element = {<Authentication />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
