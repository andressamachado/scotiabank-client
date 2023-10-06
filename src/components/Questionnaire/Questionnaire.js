import OptionCard from "../OptionCard/OptionCard";
import nextPageIcon from "../../assets/icons/next.svg";
import "./questionnaire.scss";

const Questionnaire = () => {
  const options = [
    "Wealth growth",
    "Retirement planning",
    "Debt Repayment",
    "Other",
  ];

  return (
    <section className="questionnaire">
      {/* question section */}
      <h2> What are your primary financial goals? </h2>
      {options.map((option) => {
        return <OptionCard answer={option} />;
      })}

      {/* next question button section */}
      <div className="questionnaire__bottom-container">
        <button className="questionnaire__button">
          <img src={nextPageIcon} />
        </button>
      </div>
    </section>
  );
};

export default Questionnaire;
