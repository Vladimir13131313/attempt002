import './App.css';
import {Homepage} from "./components/Homepage";
import {Truck} from "./components/Homepage/Truck/Truck";


function App() {
  return (
      <div className="all_container">
        <Homepage />
          <Truck/>
      </div>
  );
}

export default App;
