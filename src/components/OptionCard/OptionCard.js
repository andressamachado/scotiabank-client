import "./option-card.scss";

const OptionCard = ({ answer }) => {
  return (
    <div className="option-card">
      <span>{answer}</span>
    </div>
  );
};

export { OptionCard };
