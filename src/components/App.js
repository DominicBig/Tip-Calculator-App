import "./App.scss";
import logo from "../images/logo.svg";
import InputBlock from "./InputBlock";
import OutPutBlock from "./OutPutBlock";

function App() {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="card">
        <InputBlock />
        <OutPutBlock />
      </div>
    </div>
  );
}

export default App;
