import React from "react";
import "../table/table.css";
import { Popover, OverlayTrigger, ButtonToolbar } from "react-bootstrap";
import { Button } from "@mui/material";
function Tables() {
  const handleonclick = () => {};
  const users = [
    {
      name: "Davron",
      lastname: "Sulaymonov",
      sharfi: "Shuxrativich",
      phone: "+998983549872",
      deta: "23.06.2003",
      tuman: "Dostlik",
      mahalla: "Olmos",
      voqea_joyi: "Sebzor",
      olingan_joy: "Yangiyol",
      hodim_hulosasi: "loyiha tugadi",
    },
  ];

  const popoverBottom = (
    <Popover
      className='popover'
      id='popover-positioned-right'
      title='Popover bottom'
    >
      <strong>Holy guacamole!</strong> Check this info. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Labore, cupiditate.
    </Popover>
  );
  return (
    <div className='base-table'>
      {/* <div className='container'> */}
      <div className='table-body'>
        <table key={1}>
          <thead>
            <tr key={12232} className='table-nav'>
              <th key={11}>taxrirlash</th>
              <th key={12}>Ismi</th>
              <th key={13}>Familyasi</th>
              <th key={14}>Otasining ismi</th>
              <th key={15}>Telefon raqami</th>
              <th key={16}>Tug`ilgan yili</th>
              <th key={17}>Voqea joyi (Tuman)</th>
              <th key={18}>Voqea joyi (Mahalla)</th>
              <th key={19}>Voqea joyi haqida to`liq malumot</th>
              <th key={20}>Olib kelingan joy</th>
              <th key={21}>Hodim hulosasi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={1122} className='table-show'>
                <td key={1222}>
                  <Button variant=''>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      class='bi bi-pencil-square'
                      viewBox='0 0 16 16'
                    >
                      <path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />
                      <path
                        fill-rule='evenodd'
                        d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z'
                      />
                    </svg>
                  </Button>
                </td>
                <td key={122}>{user.name}</td>
                <td key={2}>{user.lastname}</td>
                <td key={3}>{user.sharfi}</td>
                <td key={4}>{user.phone}</td>
                <td key={5}>{user.deta}</td>
                <td key={6}>{user.tuman}</td>
                <td key={7}>{user.mahalla}</td>
                <td key={8}>{user.voqea_joyi}</td>
                <td key={9}>{user.olingan_joy}</td>
                <td key={10}>{user.hodim_hulosasi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* </div> */}
    </div>
  );
}
export default Tables;
