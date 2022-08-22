import "./App.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Body from "./components/Body/Body";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes} from "react-router-dom";
import ModalPopup from "./components/Modal/ModalPopup";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/create" element={<ModalPopup />} />
          <Route path="/update" element={<ModalPopup />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
