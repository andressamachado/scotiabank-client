import Header from "./components/Header/Header";
import "./app.scss";
import Questionnaire from "./components/Questionnaire/Questionnaire";
import ChatPage from "./pages/ChatPage/ChatPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Questionnaire />} />
          <Route path="/advisors" element={<Advisors />} />
          <Route path="/chatnow" element={<ChatPage />} />
        </Routes>
        <Questionnaire />
      </BrowserRouter>
    </div>
  );
}

export default App;
