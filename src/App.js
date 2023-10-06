import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Questionnaire from "./pages/Questionnaire/Questionnaire";
import Questionnaire2 from "./pages/Questionnaire2/Questionnaire2";
import Questionnaire3 from "./pages/Questionnaire3/Questionnaire3";
import ChatPage from "./pages/ChatPage/ChatPage";
import AvailableAdvisors from "./components/AvailableAdvisors/AvailableAdvisors";
import AdvisorInfo from "./components/AdvisorInfo/AdvisorInfo";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={`/questionnaire`} element={<Questionnaire />} />
          <Route path={`/questionnaire/2`} element={<Questionnaire2 />} />
          <Route path={`/questionnaire/3`} element={<Questionnaire3 />} />
          <Route path={`/advisors`} element={<AvailableAdvisors />} />
          <Route path={`/advisor`} element={<AdvisorInfo />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
