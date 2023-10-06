import { useNavigate } from "react-router-dom";
import "react-step-progress-bar/styles.css";
import OptionCard from "../../components/OptionCard/OptionCard";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import backArrowIcon from "../../assets/icons/back-arrow.svg";
import "./questionnaire2.scss";

const Questionnaire = () => {
  const options = ["Conservative", "Balanced", "Aggressive"];

  const testData = [{ bgcolor: "#d91c36", completed: 66 }];
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/questionnaire/3");
  };

  const handleBackButton = () => {
    navigate("/questionnaire");
  };

  return (
    <section className="questionnaire">
      {/* question section */}
      <h2> How confortable are you with investment rist? </h2>
      {options.map((option) => {
        return <OptionCard answer={option} onClick={handleClick} />;
      })}

      <div className="questionnaire__progress-bar">
        {testData.map((item, i) => (
          <ProgressBar
            key={i}
            bgcolor={item.bgcolor}
            completed={item.completed}
          />
        ))}
      </div>

      {/* next question button section */}
      <div className="questionnaire__bottom-container">
        <button className="questionnaire__button" onClick={handleBackButton}>
          <img src={backArrowIcon} />
        </button>
      </div>
    </section>
  );
};

export default Questionnaire;
