// import ".// App.css";
import React, { useState } from "react";
import vektor from "../../assets/imgs/Vector.png";
import { Link, NavLink } from "react-router-dom";

export default function UserPolis() {
  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    e.preventDefault();
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const HandleOnClick = (e) => {};

  return (
    <>
      <div className='section-one'>
        <div className='container'>
          <div className='section-one-nav'>
            <div className='file ms-2 me-2'>
              <img className='camera pe-5' src={vektor} alt='logo' />
              <label htmlFor='file'>
                <input
                  accept='.jpg , .png'
                  className='file-import  '
                  name='file'
                  onChange={handleFileChange}
                  type='file'
                />
              </label>
              <div className='text-center'>{file && `Yuklandi`}</div>
            </div>
            <form className='userBox'>
              <div>
                <input
                  className='user-name'
                  type='text'
                  placeholder='typing user name'
                />
              </div>
            </form>
            <NavLink
              className=' text-white text-decoration-none text-center'
              to='/'
            >
              <div className='exit'>
                <span className=''>X</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className='section-two'>
        <div className='row mt-5'>
          <div className='points'>
            <div className='col-6'>
              <div className='point'>
                <h3 className='point-title'>0</h3>
              </div>
              <h3 className='text-center d-block mt-5 '>
                Bir kunlik toplangan ball
              </h3>
            </div>
            <div className='col-6 '>
              <div className='point'>
                <h3 className='point-title'>1212</h3>
              </div>
              <h3 className='text-center d-block mt-5 '>
                Bir oylik toplangan ball
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className='section-three'>
        <NavLink className='nav-link' href='##'>
          Bajarilgan ishlar
        </NavLink>
      </div>
    </>
  );
}
