import "./AdvisorInfo.scss";
import Keanu from "../../assets/icons/Ellipse 22.svg";
import BackArrow from "../../assets/icons/arrow-back.svg";
import Schedule from "../../assets/icons/Schedule now button.svg";
import emailbutton from "../../assets/icons/emailbutton.svg";
import ChatNow from "../../assets/icons/Chat now button.svg";
import CalendarIcon from "../../assets/icons/calendarIcon.svg";
import chatting from "../../assets/icons/portrait.svg";
import chat from "../../assets/icons/chatting.svg";
import email from "../../assets/icons/email.svg";

const AdvisorInfo = () => {
  return (
    <article className="advisors">
      <h2 className="advisors__heading">My Advisor</h2>
      <img className="advisors__backarrow" src={BackArrow} alt="back arrow" />
      <div className="advisors__section">
        <div className="advisors__section-image">
          <img
            className="advisors__section-photo"
            src={Keanu}
            alt="Keanu Reeves"
          />
        </div>
        <div className="advisors__info">
          <div className="advisors__info-name">Keanu Reeves</div>
          <div className="advisors__info-gender">(He/Him)</div>
          <div className="advisors__info-type">Wealth Management</div>
          <div className="advisors__info-investment">Invensting</div>
          <div className="advisors__info-company">Wills & Trusts</div>
        </div>
      </div>

      <section className="advisors__timeframe">
        <div className="advisors__timeframe-calendar">
          <img
            className="advisors__timeframe-calendar"
            src={CalendarIcon}
            alt="Callendar Icon"
          />
        </div>
        <div className="advisors__timeframe-container">
          <div className="advisors__timeframe-appointment">Appointments</div>
          <div className="advisors__timeframe-information">
            No appointments scheduled
          </div>
          <div className="advisors__timeframe-schedule">
            <img
              className="advisors__timeframe-schedule"
              src={Schedule}
              alt="schedule"
            />
          </div>
        </div>
      </section>
      <section className="advisors__timeframe">
        <div className="advisors__timeframe-calendar">
          <img
            className="advisors__timeframe-calendar"
            src={chatting}
            alt="Callendar Icon"
          />
        </div>
        <div className="advisors__timeframe-container">
          <div className="advisors__timeframe-appointment">Call</div>
          <div className="advisors__timeframe-information">
            (555)555-5555, ext: 2890
          </div>
        </div>
      </section>
      <section className="advisors__timeframe">
        <div className="advisors__timeframe-calendar">
          <img
            className="advisors__timeframe-calendar"
            src={chat}
            alt="Callendar Icon"
          />
        </div>
        <div className="advisors__timeframe-container">
          <div className="advisors__timeframe-appointment">In App Messages</div>

          <div className="advisors__timeframe-schedule">
            <img
              className="advisors__timeframe-schedule"
              src={ChatNow}
              alt="schedule"
            />
          </div>
        </div>
      </section>

      <section className="advisors__timeframe">
        <div className="advisors__timeframe-calendar">
          <img
            className="advisors__timeframe-calendar"
            src={email}
            alt="Callendar Icon"
          />
        </div>
        <div className="advisors__timeframe-container">
          <div className="advisors__timeframe-appointment">Email</div>

          <div className="advisors__timeframe-schedule">
            <img
              className="advisors__timeframe-schedule"
              src={emailbutton}
              alt="schedule"
            />
          </div>
        </div>
      </section>
    </article>
  );
};

export default AdvisorInfo;
