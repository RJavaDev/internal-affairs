import React, { useState } from "react";
import "../header/header.css";
import Select from "react-select";
function Header() {
  const [selectedOption, setSelectedOption] = useState("none");
  const options = [
    { value: "none", label: "one" },
    { value: "left", label: "two" },
    { value: "right", label: "three" },
    {
      value: "tilt,left",
      label: "four",
    },
    {
      value: "tilt,right",
      label: "five",
    },
  ];
  const handleTypeSelect = (e) => {
    setSelectedOption(e.value);
  };
  return (
    <>
      <header className='header'>
        <div className='container'>
          <div className='blog'>
            <h1 className='text-white'>PPX BAZASI</h1>
            <div className='cardsHead'>
              <Select
                className='section-card'
                options={options}
                onChange={handleTypeSelect}
                value={options.filter(function (option) {
                  return option.value === selectedOption;
                })}
                label='Single select'
              />
              <form className='form-deta'>
                <input
                  className='deta-input input-style'
                  type='namber'
                  placeholder='Sana'
                />
                <input
                  className='deta-input input-style'
                  type='text'
                  placeholder='Oy'
                />
                <input
                  className='deta-input input-style'
                  type='text'
                  placeholder='Yil'
                />
              </form>
              <input
                className='text-input input-style'
                type='text'
                placeholder='Typing'
              />
            </div>
            <div className='btn-card'>
              <button className='btn-nav'>Click Me</button>
            </div>
          </div>
        </div>
      </header>
      <hr className='line' />
    </>
  );
}

export default Header;
