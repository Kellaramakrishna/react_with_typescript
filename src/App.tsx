import MyButton from './components/Button';
import Form from './components/Form'
import './App.css';
import {CounterProvider} from './Provider/Counter'

function App() {

  const onClickFun=()=>alert("clicked")

  return (
    <div className="App">
      <CounterProvider>
      <MyButton onClickFun={onClickFun} text="Touch Me"/>
      </CounterProvider>
      
      <Form/>
    </div>
  );
}

export default App;
