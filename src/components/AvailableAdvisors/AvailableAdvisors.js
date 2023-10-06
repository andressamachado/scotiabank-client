import "./AvailableAdvisors.scss";
import Vector from "../../assets/icons/Vector.svg";
import Keanu from "../../assets/icons/Ellipse 22.svg";
import Cameron from "../../assets/icons/Ellipse 179.svg";
import Esther from "../../assets/icons/Ellipse 180.svg";

const AvailableAdvisors = () => {
  return (
    <main className="main_advisors">
      <h2 className="main__h2">Available Advisors</h2>
      <div className="advisor__card">
        <div className="advisor__wrapper">
          <img className="advisor__photo" src={Keanu} alt="Keanu Reeves" />
        </div>
        <div className="advisor__card--wrapper">
          <div className="advisor__name">Keanu Reeves</div>
          <div className="advisor__gender">(He/Him)</div>
          <div className="advisor__vectorIcon">
            <img src={Vector} alt="vector Icon" />
          </div>
          <div className="advisor__investing">Invensting</div>
          <div className="advisor__company">Wills & Trusts</div>

          <div className="advisor__paragraph">
            "My goals to help my clients manage and grow their wealth. During my
            work ours, I'm always online to chat with my clients!"
          </div>
        </div>
      </div>

      <div className="advisor__card">
        <div className="advisor__wrapper">
          <img className="advisor__photo" src={Cameron} alt="Keanu Reeves" />
        </div>
        <div className="advisor__card--wrapper">
          <div className="advisor__name">Cameron Wilson</div>
          <div className="advisor__gender">(She/Her)</div>
          <div className="advisor__vectorIcon">
            <img src={Vector} alt="vector Icon" />
          </div>
          <div className="advisor__investing">Invensting</div>
          <div className="advisor__company">Credit</div>

          <div className="advisor__paragraph">
            "My passion is to build a wealth management plan for aspiring
            homeowners."
          </div>
        </div>
      </div>

      <div className="advisor__card">
        <div className="advisor__wrapper">
          <img className="advisor__photo" src={Esther} alt="Keanu Reeves" />
        </div>
        <div className="advisor__card--wrapper">
          <div className="advisor__name">Esther Howard</div>
          <div className="advisor__gender">(He/Him)</div>
          <div className="advisor__vectorIcon">
            <img src={Vector} alt="vector Icon" />
          </div>
          <div className="advisor__investing">Invensting</div>
          <div className="advisor__company">Retirement Plan</div>

          <div className="advisor__paragraph">
            "I aspire to help my clients build a retirment plan that is tailored
            for heir needs."
          </div>
        </div>
      </div>
    </main>
  );
};

export default AvailableAdvisors;
