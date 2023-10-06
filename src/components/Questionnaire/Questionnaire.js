import "react-step-progress-bar/styles.css";
import OptionCard from "../OptionCard/OptionCard";
import ProgressBar from "../ProgressBar/ProgressBar";
import backArrowIcon from "../../assets/icons/back-arrow.svg";
import "./questionnaire.scss";

const Questionnaire = () => {
  const options = [
    "Wealth growth",
    "Retirement planning",
    "Debt Repayment",
    "Other",
  ];

  const testData = [{ bgcolor: "#d91c36", completed: 33 }];

  return (
    <section className="questionnaire">
      {/* question section */}
      <h2> What are your primary financial goals? </h2>
      {options.map((option) => {
        return <OptionCard answer={option} />;
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
        <button className="questionnaire__button">
          <img src={backArrowIcon} />
        </button>
      </div>
    </section>
  );
};

export default Questionnaire;
