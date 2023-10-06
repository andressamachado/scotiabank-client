import { Header } from "./components/Header/Header";
import "./app.scss";
// import { Questionnaire } from "./components/Questionnaire/Questionnaire";
import { AvailableAdvisors } from "./components/AvailableAdvisors/AvailableAdvisors";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Questionnaire /> */}
      <AvailableAdvisors />
    </div>
  );
}

export default App;
