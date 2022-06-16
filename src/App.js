import './style.css';
import Classcomponent from './component/ClassComp';
import Functioncomponent from './component/FuncComp';

function App() {
return (
  <div className="App">
    <h1 className="head"style={{textShadow:"2px 2px 2px aqua"}}>Styling using functional and class components</h1>
  
    <Functioncomponent />
  
    <Classcomponent />  
  </div>
 
);
}

export default App;
