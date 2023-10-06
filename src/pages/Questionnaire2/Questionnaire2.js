import { useNavigate } from "react-router-dom";
import "react-step-progress-bar/styles.css";
import OptionCard from "../../components/OptionCard/OptionCard";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import backArrowIcon from "../../assets/icons/back-arrow.svg";
import "./questionnaire2.scss";
import PageFooter from "../../assets/logo/footer-image.svg";

const Questionnaire = () => {
  const options = ["Conservative", "Balanced", "Aggressive"];

  const testData = [{ bgcolor: "#757575", completed: 33 }];
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/questionnaire/3");
  };

  const handleBackButton = () => {
    navigate("/questionnaire");
  };

  return (
    <>
      <section className="questionnaire2">
        {/* question section */}
        <h2> How confortable are you with investment rist? </h2>
        {options.map((option) => {
          return <OptionCard answer={option} onClick={handleClick} />;
        })}

        <div className="questionnaire2__progress-bar">
          {testData.map((item, i) => (
            <ProgressBar
              key={i}
              bgcolor={item.bgcolor}
              completed={item.completed}
            />
          ))}
        </div>

        {/* next question button section */}
        <div className="questionnaire2__bottom-container">
          <button className="questionnaire2__button" onClick={handleBackButton}>
            <img src={backArrowIcon} />
          </button>
        </div>
      </section>
      <img src={PageFooter} />
    </>
  );
};

export default Questionnaire;
