import Child1 from './components/Child1'
import React from "react";
import FavoriteColor from './components/FavouriteColor';
import {Test1} from './components/Test'
import Timer from './components/Timer';
import {TimerTest} from './components/TimerTest';
import {Color} from './components/Color'

import Garage from './components/Garage'


const a = 90;
function App() {
  return (
    <React.StrictMode>
      {/* <FavoriteColor/> */}
      {/*<Timer/>*/}
      <Garage/>
      {/* <TimerTest/> */}

   
      {/* <Test1/> */}
      {/* <Child1/> 
      {san.Charan()}
      <h1> valuee of a is : {san.a}</h1> */}
    </React.StrictMode>
    
  );
}

export default App;
