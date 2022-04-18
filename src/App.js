import "./App.css";
import Main from "./components/main/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div className="bg-white">
      <NavBar />
      <Main />
    </div>
  );
};

export default App;
