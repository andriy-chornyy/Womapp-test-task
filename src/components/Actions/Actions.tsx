import "./Actions.scss";
import { Switcher } from "../Switcher";

export const Actions = () => {
  return (
    <div className="actions">
      <Switcher />

      <button className="sign-in__button">Sign in</button>

      <button className="burger-menu-button" aria-label="Open navigation menu">
        <img className="burger-icon" src="/burger.svg" alt="Burger icon"></img>
      </button>
    </div>
  );
};
