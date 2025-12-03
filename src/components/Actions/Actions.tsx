import './Actions.scss';
import { Toggle } from '../Toggle';

export const Actions = () => {
  return (
    <div className="actions">
      <Toggle />
      
      <button className="sign-in__button">
        Sign in
      </button>

      <button className='burger-menu-button'>
        <img
          className='burger-icon'
          src="/burger.svg"
          alt='Burger icon'
        >
        </img>
      </button>
    </div>
  )
}