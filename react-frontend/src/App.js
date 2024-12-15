import './App.css';
import Sidebar from "./components/Sidebar";
import Message from "./components/Message";
import Widget from "./components/Widget";
import Input from './components/Input';
import pie from './media/pie.png'
function App() {
  return (
    <div className="App flex flex-row">
        <Sidebar></Sidebar>
        {/*<Message></Message>*/}
        <Widget content={"text"}></Widget>
        {/*<Input></Input>*/}
    </div>
  );
}

export default App;
