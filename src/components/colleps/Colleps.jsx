import { Avatar } from "@mui/material";
import React from "react";
import { Title } from "../style/styleComponent";
import { NavLink } from "react-router-dom";
function Colleps() {
  return (
    <div className='cardLeftNavbar    pb-5'>
      <div className='Avatar-box'>
        <Avatar
          alt='Cindy Baker'
          src=''
          style={{
            width: "90px",
            height: "90px",
            marginRight: "auto",
            marginLeft: "auto",
            marginBottom: "10px",
          }}
        />
        <NavLink
          to={"Polis-Name"}
          className={({ isActive }) =>
            isActive
              ? "Link d-block text-white text-decoration-none text-center pt-2 pb-2 mt-2 active"
              : "Link d-block text-white text-decoration-none text-center pt-2 pb-2 mt-2"
          }
        >
          <Title>
            {" "}
            <span className='d-block h3 text-center'>Umid Abdurovufov</span>
          </Title>
        </NavLink>
      </div>

      {/* <div className={"BossColeps"}> */}
      <ul className='list-unstyled p-0 m-0'>
        <li className='itemColleps'>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "Link d-block text-white text-decoration-none text-center pt-2 pb-2 mt-2 active"
                : "Link d-block text-white text-decoration-none text-center pt-2 pb-2 mt-2"
            }
          >
            IIO larga olib kelingan fuqarolar
          </NavLink>
        </li>{" "}
        <li className='itemColleps'>
          <NavLink
            to={"bayonnomalar"}
            className={({ isActive }) =>
              isActive
                ? "Link d-block text-white text-decoration-none text-center pt-2 pb-2 mt-2 active"
                : "Link d-block text-white text-decoration-none text-center pt-2 pb-2 mt-2"
            }
          >
            Tuzilgan bayonnomalar
          </NavLink>
        </li>
        <li className='itemColleps'>
          <NavLink
            to={"PROF"}
            className={({ isActive }) =>
              isActive
                ? "Link d-block text-white text-decoration-none text-center pt-2 pb-2 mt-2 active"
                : "Link d-block text-white text-decoration-none text-center pt-2 pb-2 mt-2"
            }
          >
            Tekshirilgan PROF hisobda turuvchi shaxslar
          </NavLink>
        </li>
        <li className='itemColleps'>
          <NavLink
            to={"qidiruvdagilar"}
            className={({ isActive }) =>
              isActive
                ? "Link d-block text-white text-decoration-none text-center pt-2 pb-2 mt-2 active"
                : "Link d-block text-white text-decoration-none text-center pt-2 pb-2 mt-2"
            }
          >
            Ushlangan qidiruvdagilar
          </NavLink>
        </li>
        <li className='itemColleps'>
          <NavLink
            to={"bedaraklar"}
            className={({ isActive }) =>
              isActive
                ? "Link d-block text-white text-decoration-none text-center pt-2 pb-2 mt-2 active"
                : "Link d-block text-white text-decoration-none text-center pt-2 pb-2 mt-2"
            }
          >
            Aniqlangan bedaraklar
          </NavLink>
        </li>
        <li className='itemColleps'>
          <NavLink
            to={"qorovullari"}
            className={({ isActive }) =>
              isActive
                ? "Link d-block text-white text-decoration-none text-center pt-2 pb-2 mt-2 active"
                : "Link d-block text-white text-decoration-none text-center pt-2 pb-2 mt-2"
            }
          >
            Tekshirilgan obyektlar qorovullari
          </NavLink>
        </li>
        <li className='itemColleps'>
          <NavLink
            to={"qurollar"}
            className={({ isActive }) =>
              isActive
                ? "Link d-block text-white text-decoration-none text-center pt-2 pb-2 mt-2 active"
                : "Link d-block text-white text-decoration-none text-center pt-2 pb-2 mt-2"
            }
          >
            Tekshirilgan ov qurollari
          </NavLink>
        </li>
      </ul>
      {/* </div> */}
    </div>
  );
}

export default Colleps;
