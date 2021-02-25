import logo from './logo.svg';
import './App.css';
import FetchData from './myComponent/fetch'
import AllData from './myComponent/data'
import IncreaseData from './myComponent/dataincrease'
import MyComponent from './myComponent/pages/mycomponent';
import Myroute from './myComponent/pages/myroute';
import { BrowserRouter } from 'react-router-dom';
import Func from './myComponent/func'

function App() {
  return (
    <div className="App">
      <Func></Func>
      {/* <BrowserRouter>
        <MyComponent></MyComponent>
        <Myroute></Myroute>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
