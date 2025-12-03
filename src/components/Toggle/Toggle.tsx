import { useEffect, useState } from 'react';
import './toggle.scss';

export const Toggle = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    if (isNightMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isNightMode]);

  const handleToggleClick = () => {
    setIsNightMode(prevMode => !prevMode);
  };

  return (
    <div
      className='toggle'
      onClick={handleToggleClick}
      aria-checked={isNightMode}
      role="switch"
    >
      <div
        className={`toggle__indicator ${isNightMode ? 'toggle__indicator--moved' : ''}`}
      >
        {isNightMode ? (
          <img className="night-icon" src="/night-icon.svg" alt="Night theme icon" />
        ) : (
          <img className="sunny" src="/sunny.svg" alt="Day theme icon" />
        )}
      </div>
    </div>
  )
}