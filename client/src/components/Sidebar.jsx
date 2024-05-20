import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { navlinks } from '../constants';
import BlockFundLogo from '../assets/BlockFundLogo.png';
import { MdWbSunny }  from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link to="/">
        <img src={BlockFundLogo} width={"50px"} height={"50px"} alt="logo" className="rounded-md" />
      </Link>

      <div className={`flex-1 flex flex-col justify-between items-center ${theme === 'light' ? 'bg-white' : 'dark:bg-[#1c1c24]'} rounded-[20px] w-[76px] py-4 mt-12`}>
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => {
            const IconComponent = theme === 'light' ? link.iconLight : link.iconDark;
            return (
              <div
                key={link.name}
                className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === link.name && (theme === 'light' ? 'bg-gray-100' : 'dark:bg-[#2c2f32]')} flex justify-center items-center ${!link.disabled && 'cursor-pointer'}`}
                onClick={() => {
                  if (!link.disabled) {
                    setIsActive(link.name);
                    navigate(link.link);
                  }
                }}
              >
                <IconComponent size={24} />
              </div>
            );
          })}
        </div>
        <div
          className={`w-[48px] h-[48px] rounded-[10px] ${theme === 'light' ? 'bg-gray-100' : 'dark:bg-[#1c1c24]'} flex justify-center items-center cursor-pointer`}
          onClick={toggleTheme}
        >
          {theme === 'light' ? <MdWbSunny size={24} /> : <FaMoon size={20}  />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
