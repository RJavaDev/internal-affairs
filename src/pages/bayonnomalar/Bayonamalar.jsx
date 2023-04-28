import React from "react";

import {
  Inputs,
  Selects,
  Textareas,
  Title,
} from "../../components/style/styleComponent";
import { useState, useRef } from "react";

export default function Bayonamalar() {
  const [PolisfingerBayonnoma, setPolisfingerBayonnoma] = useState();
  const [PolisFotosBayonnoma, setPolisFotosBayonnoma] = useState();

  function handleFilePolisFInger(et) {
    setPolisfingerBayonnoma(et.target.files[0]);
  }
  function handleFilePolisFoto(ets) {
    setPolisFotosBayonnoma(ets.target.files[0]);
  }

  let polisNameBayonnoma = useRef();
  let polisFirstNameBayonnoma = useRef();
  let polisFatherBayonnoma = useRef();
  let polisTelBayonnoma = useRef();
  let DataBayonnoma = useRef();
  let TuzilganBayonnoma = useRef();
  let OlibKelinganJoyBayonnoma = useRef();
  let HodimHulosasiBayonnoma = useRef();

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

  function ClickBotton(e) {
    e.preventDefault();
    console.log("bayonnoma");
    console.log(polisFirstNameBayonnoma.current.value);
    console.log(polisNameBayonnoma.current.value);
    console.log(polisFatherBayonnoma.current.value);
    console.log(polisTelBayonnoma.current.value);
    console.log(DataBayonnoma.current.value);
    console.log(TuzilganBayonnoma.current.value);
    console.log(OlibKelinganJoyBayonnoma.current.value);
    console.log(HodimHulosasiBayonnoma.current.value);
    console.log(PolisfingerBayonnoma);
    console.log(PolisFotosBayonnoma);
  }

  return (
    <div>
      <Title>
        <h2 className='pb-1 m-0 mb-3 mt-4'>Bayonnomalar</h2>
      </Title>
      <div>
        <form onSubmit={(e) => ClickBotton(e)}>
          <div className='row'>
            <label className='col-4'>
              <span className='d-block pb-1'>Familiya</span>
              <Inputs
                ref={polisFirstNameBayonnoma}
                name='inputTextFirstName'
                required
              />
            </label>
            <label className='col-4'>
              <span className='d-block pb-1'>Ismi</span>
              <Inputs
                ref={polisNameBayonnoma}
                name='inputTextName'
                required
              ></Inputs>
            </label>
            <label className='col-4'>
              <span className='d-block pb-1  '>Otasini ismi</span>
              <Inputs
                required
                ref={polisFatherBayonnoma}
                name='inputTextPolisPapa'
              />
            </label>
          </div>

          <div className='mt-3 row'>
            <label className='col-4   '>
              <span className='d-block pb-1  '>Telefon raqami</span>
              <Inputs
                ref={polisTelBayonnoma}
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
                onChange={(even) => handleFilePolisFInger(even)}
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

            <label className='col-2 ps-1 ' htmlFor='file-cvBayon'>
              <span className='d-block pb-1  '>Rasm</span>
              <input
                onChange={(even) => handleFilePolisFoto(even)}
                className='input-file-adminka'
                id='file-cvBayon'
                name='file_yuklashBayon'
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
            <label className='col-4'>
              <span className='d-block pb-1  '>Tug'ilgan sanasi</span>

              <Inputs ref={DataBayonnoma} name='data' type={"date"} required />
            </label>
          </div>

          <div className='row  mt-4 mb-2'>
            <label className='  col-4'>
              <span className='d-block pb-1 '>Olib kelingan joy</span>
              <Inputs
                ref={OlibKelinganJoyBayonnoma}
                required
                name='uy_manzil'
              />
            </label>
          </div>
          <div className='row mt-3   '>
            <label className='col-8'>
              <span className='d-block pb-1  '>Tuzilgan bayonnoma</span>
              <Textareas
                ref={TuzilganBayonnoma}
                name='textArea'
                required
              ></Textareas>
            </label>
          </div>

          <div className='row mt-5 justify-content-start align-items-center'>
            <label className='col-8'>
              <span className='d-block pb-1   '>Hodim Hulosasi</span>
              <Textareas
                ref={HodimHulosasiBayonnoma}
                name='textAreaHulosa'
                required
              ></Textareas>
            </label>

            <button
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
