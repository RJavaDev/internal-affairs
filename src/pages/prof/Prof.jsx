import React from "react";

import { Inputs, Selects, Title } from "../../components/style/styleComponent";
import { useState, useRef } from "react";
import { Options } from "../../components/imputs/Imputs";

export default function Prof() {
  function inputClickTwoo() {
    let eliNput = document.getElementById("organization_phones");
    eliNput.addEventListener("input", function (e) {
      let x = e.target.value
        .replace(/\D/g, "")
        .match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);

      e.target.value =
        "+(" + x[1] + ") " + x[2] + "-" + x[3] + "-" + x[4] + "-" + x[5];
    });
  }

  let PolisFirstNamePROF = useRef();
  let PolisNamePROF = useRef();
  let PolisFatherNamePROF = useRef();
  let voqeaJoyiShPROF = useRef();
  let voqeaJoyiMahallaPROF = useRef();
  let voqeaJoyiAniqManzilPROF = useRef();
  let TelPROF = useRef();
  let PRofHisobdagiSHaxsPROF = useRef();
  let HodimHulosasiPROF = useRef();

  function ClickBotton() {
    console.log("bosildi");
    console.log(PolisFirstNamePROF.current.value);
    console.log(PolisNamePROF.current.value);
    console.log(PolisFatherNamePROF.current.value);
    console.log(voqeaJoyiShPROF.current.value);
    console.log(voqeaJoyiMahallaPROF.current.value);
    console.log(voqeaJoyiAniqManzilPROF.current.value);
    console.log(TelPROF.current.value);
    console.log(PRofHisobdagiSHaxsPROF.current.value);
    console.log(HodimHulosasiPROF.current.value);
  }
  return (
    <div>
      <Title>
        <h2 className='pb-1 m-0 mb-3 mt-4'>PROF Hisobida turuvchi shaxslar</h2>
      </Title>
      <div>
        <form>
          <div className='row'>
            <label className='col-4'>
              <span className='d-block pb-1'>Familiya</span>
              <Inputs
                ref={PolisFirstNamePROF}
                name='inputTextFirstName'
                required
              />
            </label>
            <label className='col-4'>
              <span className='d-block pb-1'>Ismi</span>
              <Inputs
                ref={PolisNamePROF}
                name='inputTextName'
                required
              ></Inputs>
            </label>
            <label className='col-4'>
              <span className='d-block pb-1  '>Otasini ismi</span>
              <Inputs
                ref={PolisFatherNamePROF}
                required
                name='inputTextPolisPapa'
              />
            </label>
          </div>
          <div className='row mt-4'>
            <label className='col-4'>
              <span className='d-block pb-1  '>Voqea Joyi (tuman)</span>

              <Selects ref={voqeaJoyiShPROF} name='rental-option'>
                <option selected={true}>Jizzax sh</option>
              </Selects>
            </label>

            <label className='col-4'>
              <span className='d-block pb-1  '>Voqea Joyi (mahalla) </span>
              <Selects ref={voqeaJoyiMahallaPROF} name='rental-optionPof'>
                <Options></Options>
              </Selects>
            </label>

            <label className='col-4'>
              <span className='d-block pb-1 '>Joy haqida to'liq ma'lumot</span>

              <Inputs ref={voqeaJoyiAniqManzilPROF} required name='uy_manzil' />
            </label>
          </div>

          <div className='row mt-3'>
            <label className='col-4   '>
              <span className='d-block pb-1  '>Telefon raqami</span>
              <Inputs
                ref={TelPROF}
                onClick={() => inputClickTwoo()}
                className='input-heroTwoo '
                id='organization_phones'
                name='organization_phones'
                placeholder='(+998) 99-000-00-00'
                default
                defaultValue='+998'
                minLength={7}
                type='tell'
                required
              />
            </label>

            <label className='col-4'>
              <span className='d-block pb-1  '>
                {" "}
                Tekshirilgan PROF Hisobida turuvchi shaxslar
              </span>
              <Inputs ref={PRofHisobdagiSHaxsPROF} name='InputsProf' required />
            </label>
          </div>

          <div className='row mt-5 justify-content-center align-items-center'>
            <label className='col-8'>
              <span className='d-block pb-1   '>Hodim Hulosasi</span>
              <textarea
                ref={HodimHulosasiPROF}
                name='textArea'
                style={{
                  display: "block",
                  width: "100%",
                  // maxWidth: "180px",
                  height: "90px",
                  backgroundColor: "#F2F2F2",
                  border: "1px solid green",
                  borderRadius: "6px",
                  outline: "none",
                  fontSize: "14px",
                  padding: "8px 2px",
                }}
                required
              ></textarea>
            </label>
            <button
              onClick={(e) => ClickBotton(e.preventDefault())}
              className='col-2'
              type='submit'
              style={{
                width: "120px",
                height: "40px",
                backgroundColor: "#F2F2F2",
                border: "1px solid green",
                borderRadius: "6px",
                outline: "none",
                fontSize: "14px",
                padding: "8px 2px",
              }}
            >
              <strong>Yuborish</strong>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
