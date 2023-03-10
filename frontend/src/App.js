import MainPage from "./Components/Main/MainPage";
import {BrowserRouter} from "react-router-dom"
import "./App.css"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MainPage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
