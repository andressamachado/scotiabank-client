import "./option-card.scss";

const OptionCard = ({ answer, onClick }) => {
  return (
    <div className="option-card" onClick={onClick}>
      <span>{answer}</span>
    </div>
  );
};

export { OptionCard };
