import { HashRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from "./startPage";
import ImportantNotes from "./ImportantNotes";
import NeedsPage from "./needPage";
import "./App.css";
import SlidesPage from "./slidesPage";
import ProgramPage from "./programsStart"

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <header className="App-Content">
          <Routes>
             <Route path="/" element={<StartPage />} />
             <Route path="/important-note" element={<ImportantNotes />} />
             <Route path="/need-page" element={<NeedsPage/>} />
             <Route path = "/slides-page" element={<SlidesPage/>} />
             <Route path="/start-programs" element={<ProgramPage/>} />
          </Routes>
          
        </header>
      </div>
    </Router>
  );
}

export default App;
