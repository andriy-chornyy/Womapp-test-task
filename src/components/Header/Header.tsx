import { Actions } from "../Actions";
import "./header.scss";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <a href="https://womapp.uk/" target="_blank" className="logo-link">
          <img src="./Logo.svg" alt="Company logo" className="logo" />
        </a>

        <Actions />
      </div>
    </div>
  );
};
