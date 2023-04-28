import React from "react";

import {
  Inputs,
  Selects,
  Textareas,
  Title,
} from "../../components/style/styleComponent";
import { useState, useRef } from "react";
import { Options } from "../../components/imputs/Imputs";

export default function Qidiruvdagilar() {
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

  let PolisName = useRef();
  let PolisFirstName = useRef();

  function ClickBotton() {
    console.log("bosildi");
    console.log(PolisName.current.value);
    console.log(PolisFirstName.current.value);
  }
  return (
    <div>
      <Title>
        <h2 className='pb-1 m-0 mb-3 mt-4'>Ushlangan qidiruvdagilar</h2>
      </Title>
      <div>
        <form>
          <div className='row'>
            <label className='col-4'>
              <span className='d-block pb-1'>Familiya</span>
              <Inputs ref={PolisFirstName} name='inputTextFirstName' required />
            </label>
            <label className='col-4'>
              <span className='d-block pb-1'>Ismi</span>
              <Inputs ref={PolisName} name='inputTextName' required></Inputs>
            </label>
            <label className='col-4'>
              <span className='d-block pb-1  '>Otasini ismi</span>
              <Inputs required name='inputTextPolisPapa' />
            </label>
          </div>

          <div className='mt-3 row'>
            <label className='col-4   '>
              <span className='d-block pb-1  '>Telefon raqami</span>
              <Inputs
                onClick={() => inputClickTwoo()}
                className='input-heroTwoo '
                id='organization_phones'
                name='organization_phones'
                placeholder='(+998) 99-000-00-00'
                defaultValue='+998'
                minLength={7}
                type='tell'
                required
              />
            </label>

            <label className='col-2 pe-1 ' htmlFor='file-cv'>
              <span className='d-block pb-1   '>Barmoq izi</span>

              <input
                className='input-file-adminka'
                id='file-cv'
                name='file_yuklash'
                type='file'
                // placeholder='file yuklang'
                style={{
                  display: "none",
                  width: "0",
                  height: "0",
                  fontSize: "14px",

                  padding: "0px",
                }}
              />

              <div
                className='Fayl-text '
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: "#F2F2F2",
                  border: "1px solid green",
                  borderRadius: "6px",
                  outline: "none",
                  padding: "8px 1px",
                  fontSize: "14px",
                }}
              >
                file yuklash
              </div>
            </label>
            <label className='col-2 ps-1 ' htmlFor='file-cv'>
              <span className='d-block pb-1  '>Rasm</span>
              <input
                className='input-file-adminka'
                id='file-cv'
                name='file_yuklash'
                type='file'
                // placeholder='file yuklang'
                style={{
                  display: "none",
                  width: "0",
                  height: "0",
                  fontSize: "14px",

                  padding: "0px",
                }}
              />

              <div
                className='Fayl-text '
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: "#F2F2F2",
                  border: "1px solid green",
                  borderRadius: "6px",
                  outline: "none",
                  padding: "8px 1px",
                  fontSize: "14px",
                }}
              >
                file yuklash
              </div>
            </label>
          </div>

          <div className='row mt-4'>
            <label className='col-4'>
              <span className='d-block pb-1  '>Voqea Joyi (tuman)</span>

              <Selects name='rental-option'>
                <option selected={true}>Jizzax sh</option>
              </Selects>
            </label>

            <label className='col-4'>
              <span className='d-block pb-1  '>Voqea Joyi (mahalla) </span>

              <Selects name='rental-option'>
                <Options></Options>
              </Selects>
            </label>

            <label className='col-4'>
              <span className='d-block pb-1 '>Joy haqida to'liq ma'lumot</span>

              <Inputs required name='uy_manzil' />
            </label>
          </div>

          {/* <div className='row mt-3'>
            <label className='col-8'>
              <span className='d-block pb-1  '>Tuzilgan bayonnoma</span>
              <textarea
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
          </div> */}

          <div className='row mt-5 justify-content-center   align-items-center'>
            <label className='col-8'>
              <span className='d-block pb-1   '>Hodim Hulosasi</span>
              <Textareas name='textAreaHulosa' required></Textareas>
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
