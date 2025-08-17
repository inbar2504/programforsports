import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from "./startPage";
import ImportantNotes from "./ImportantNotes";
import NeedsPage from "./needPage";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-Content">
          <Routes>
             <Route path="/" element={<StartPage />} />
             <Route path="/important-note" element={<ImportantNotes />} />
             <Route path="/need-page" element={<NeedsPage/>} />
          </Routes>
          
        </header>
      </div>
    </Router>
  );
}

export default App;
