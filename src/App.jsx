import { HashRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from "./allPages/startPage";
import ImportantNotes from "./allPages/ImportantNotes";
import NeedsPage from "./allPages/needPage";
import "./App.css";
import SlidesPage from "./allPages/slidesPage";
import ProgramPage from "./allPages/programsStart";
import RunningProgram from "./allPages/runningProgram";
import RunningProgramWeeks from "./allPages/runningProgramWeeks";
import SwimmingProgram from "./allPages/swimmingProgram";
import StretchingProgram from "./allPages/stretchingProgram";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <header className="App-Content">
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/important-note" element={<ImportantNotes />} />
            <Route path="/need-page" element={<NeedsPage />} />
            <Route path="/slides-page" element={<SlidesPage />} />
            <Route path="/start-programs" element={<ProgramPage />} />
            <Route path="/running-program" element={<RunningProgram />} />
            <Route path="/running-program-weeks" element={<RunningProgramWeeks />}/>
            <Route path="/swimming-program" element={<SwimmingProgram />} />
            <Route path="/stretching-program" element={<StretchingProgram />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
