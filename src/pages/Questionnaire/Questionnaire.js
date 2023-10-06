import { useNavigate } from "react-router-dom";
import OptionCard from "../../components/OptionCard/OptionCard";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import backArrowIcon from "../../assets/icons/back-arrow.svg";
import "./questionnaire.scss";
import PageFooter from "../../assets/logo/footer-image.svg";

const Questionnaire = () => {
  const options = [
    "Wealth growth",
    "Retirement planning",
    "Debt Repayment",
    "Other",
  ];

  const testData = [{ bgcolor: "#757575", completed: 0 }];
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/questionnaire/2");
  };

  const handleBackButton = () => {
    navigate("/");
  };

  return (
    <>
      <section className="questionnaire">
        {/* question section */}
        <h2> What are your primary financial goals? </h2>
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
      <img src={PageFooter} />
    </>
  );
};

export default Questionnaire;
