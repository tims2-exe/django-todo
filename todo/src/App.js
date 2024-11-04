import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<TestPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
