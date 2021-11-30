import "./App.scss";
import logo from "../images/logo.svg";
import dollarIcon from "../images/icon-dollar.svg";
import personIcon from "../images/icon-person.svg";
import Button from "./Button";

function App() {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="card">
        <div className="input">
          <div className="bill-container">
            <div className="label-wrapper">
              <label htmlFor="inp-bill">Bill</label>
            </div>
            <div className="inp-wrapper">
              <input
                type="text"
                className="inp-text"
                name="inp-bill"
                id="inp-bill"
                placeholder="0.0"
              />
              <img src={dollarIcon} alt="dollar icon" />
            </div>
          </div>

          <div className="tips-container">
            <div className="label-wrapper">
              <label htmlFor="inp-tips">Select Tip %</label>
            </div>
            <div className="button-wraper">
              <Button styleName="btn" value="5%" />
              <Button styleName="btn " value="10%" />
              <Button styleName="btn btn-active" value="15%" />
              <Button styleName="btn" value="25%" />
              <Button styleName="btn" value="50%" />

              <input
                type="text"
                className="inp-text"
                name="inp-tip"
                id="inp-tip"
                placeholder="Custom"
              />
            </div>
          </div>
          <div className="people-container">
            <div className="label-wrapper">
              <label htmlFor="inp-people">Number of People</label>
              <div className="error-msg">Can`t be zero </div>
            </div>
            <div className="inp-wrapper">
              <input
                type="text"
                className="inp-text"
                name="inp-people"
                id="inp-people"
                placeholder="1"
              />
              <img src={personIcon} alt="person icon" />
            </div>
          </div>
        </div>
        <div className="output">
          <div className="lines-wrapper">
            <div className="line-output">
              <div className="title-wrapper">
                <div className="title">Tip Amount </div>
                <div className="desc">/ person</div>
              </div>
              <div className="value">$4.27</div>
            </div>

            <div className="line-output">
              <div className="title-wrapper">
                <div className="title">Total </div>
                <div className="desc">/ person</div>
              </div>
              <div className="value">$32.77</div>
            </div>
          </div>
          <Button styleName="btn-reset" value="Reset" />
        </div>
      </div>
    </div>
  );
}

export default App;
