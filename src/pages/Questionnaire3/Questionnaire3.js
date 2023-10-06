import { useNavigate } from "react-router-dom";
import OptionCard from "../../components/OptionCard/OptionCard";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import backArrowIcon from "../../assets/icons/back-arrow.svg";
import "./questionnaire3.scss";

const Questionnaire = () => {
  const options = ["Call", "In-app chat", "In person meeting"];

  const testData = [{ bgcolor: "#757575", completed: 100 }];
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/questionnaire/3");
  };

  const handleBackButton = () => {
    navigate("/questionnaire");
  };

  return (
    <section className="questionnaire3">
      {/* question section */}
      <h2> What is your preferred mode of communication with your advisor? </h2>
      {options.map((option) => {
        return <OptionCard answer={option} onClick={handleClick} />;
      })}

      <div className="questionnaire3__progress-bar">
        {testData.map((item, i) => (
          <ProgressBar
            key={i}
            bgcolor={item.bgcolor}
            completed={item.completed}
          />
        ))}
      </div>

      {/* next question button section */}
      <div className="questionnaire3__bottom-container">
        <button className="questionnaire3__button" onClick={handleBackButton}>
          <p> Finish </p>
        </button>
      </div>
    </section>
  );
};

export default Questionnaire;
