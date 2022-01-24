import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import {Homepage} from "./components/Homepage";
import {MainContent} from './components/MainContent/MainContent'


function App() {
  return (
      <div className="all_container">
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/stores" element={<MainContent></MainContent>}/>
            <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
  );
}

export default App;
