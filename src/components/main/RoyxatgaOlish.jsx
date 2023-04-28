import { Buttons, Inputs, Selects, Title } from "../style/styleComponent";
import { useState, useRef } from "react";
import { Options } from "../imputs/Imputs";

export function RoyxatgaOlish() {
  const [count, useCounts] = useState(true);
  const FunkState = () => {
    useCounts(!count);
  };

  function inputClick() {
    let eliNput = document.getElementById("organization_phone");
    eliNput.addEventListener("input", function (e) {
      let x = e.target.value
        .replace(/\D/g, "")
        .match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);

      e.target.value =
        "+(" + x[1] + ") " + x[2] + "-" + x[3] + "-" + x[4] + "-" + x[5];
    });
  }
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

  let polisName = useRef();
  let polisFirstName = useRef();
  let polisFather = useRef();
  let polisTel = useRef();

  let polisLocation = useRef();
  let polisMahalla = useRef();
  let polisPolisJoy = useRef();
  let polisKeltirilganJoy = useRef();

  let polisDescription = useRef();
  let witnessName = useRef();
  let witnessFirstName = useRef();
  let witnessFather = useRef();
  let witnessTel = useRef();
  let hodimHulosa = useRef();
  let tugilganKuni = useRef();

  const [Polisfinger, setPolisfinger] = useState();
  const [fotoPolis, setfotoPolis] = useState();
  const [Witnesfinger, setWitnesfinger] = useState();
  const [fotoWitnes, setfotoWitnes] = useState();
  function handleFilePolisFInger(et) {
    setPolisfinger(et.target.files[0]);
  }
  function handleFilePolisFoto(evt) {
    setfotoPolis(evt.target.files[0]);
  }
  function handleFileWillsFinger(even) {
    setWitnesfinger(even.target.files[0]);
  }
  function handleFileWillsFoto(eve) {
    setfotoWitnes(eve.target.files[0]);
  }

  function ClickBotton(e) {
    e.preventDefault();
    console.log("bosildi");

    console.log(polisName.current.value);
    console.log(polisFirstName.current.value);
    console.log(polisFather.current.value);
    console.log(polisTel.current.value);
    console.log(tugilganKuni.current.value);

    console.log(polisDescription.current.value);
    console.log(witnessName.current.value);
    console.log(witnessFirstName.current.value);
    console.log(witnessFather.current.value);
    console.log(witnessTel.current.value);
    console.log(hodimHulosa.current.value);

    console.log(polisLocation.current.value);
    console.log(polisMahalla.current.value);
    console.log(polisPolisJoy.current.value);
    console.log(polisKeltirilganJoy.current.value);

    console.log(Polisfinger);
    console.log(fotoPolis);
    console.log(Witnesfinger);
    console.log(fotoWitnes);
  }

  return (
    <div>
      <Title>
        <h2 className='pb-1 m-0 mb-3 mt-2'>Ro'yhatga olish</h2>
      </Title>

      <div>
        <form onSubmit={(e) => ClickBotton(e)}>
          <div className='row'>
            <label className='col-4'>
              <span className='d-block pb-1'>Familiya</span>
              <Inputs ref={polisFirstName} name='inputTextFirstName' required />
            </label>
            <label className='col-4'>
              <span className='d-block pb-1'>Ismi</span>
              <Inputs ref={polisName} name='inputTextName' required></Inputs>
            </label>
            <label className='col-4'>
              <span className='d-block pb-1  '>Otasini ismi</span>
              <Inputs ref={polisFather} required name='inputTextPolisPapa' />
            </label>
          </div>

          <div className='mt-3 row'>
            <label className='col-4   '>
              <span className='d-block pb-1  '>Telefon raqami</span>
              <Inputs
                ref={polisTel}
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

            <label className='col-2 pe-1 ' htmlFor='file-cv'>
              <span className='d-block pb-1   '>Barmoq izi</span>

              <input
                // ref={polisFileFinger}
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

            <label className='col-2 ps-1 ' htmlFor='file-cvs'>
              <span className='d-block pb-1  '>Rasm</span>
              <input
                onChange={(eve) => handleFilePolisFoto(eve)}
                // ref={polisFileFoto}
                accept='.pdf'
                className='input-file-adminka'
                id='file-cvs'
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

            <label className='col-4'>
              <span className='d-block pb-1  '>Tug'ilgan sanasi</span>

              <Inputs name='data' type={"date"} required ref={tugilganKuni} />
            </label>
          </div>

          <div className='row mt-3'>
            {/* <div className=' '> */}
            <label className='col-4'>
              <span className='d-block pb-1  '>Voqea Joyi (tuman)</span>

              <Selects ref={polisLocation} name='rental-option'>
                <option selected={true}>Jizzax sh</option>
              </Selects>
            </label>
            <label className='  col-4'>
              <span className='d-block pb-1  '>Voqea Joyi (mahalla) </span>

              <Selects
                className='Select__menu-list'
                ref={polisMahalla}
                name='rental-option'
              >
                <Options></Options>
              </Selects>
            </label>
            <label className='col-4'>
              <span className='d-block pb-1 '>Joy haqida to'liq ma'lumot</span>

              <Inputs required name='uy_manzil' ref={polisPolisJoy} />
            </label>
            {/* </div> */}
          </div>
          <label className='mini-input mt-4 mb-2'>
            <span className='d-block pb-1 '>Olib kelingan joy</span>
            <Inputs required name='uy_manzil' ref={polisKeltirilganJoy} />
          </label>
          <label className='col-12'>
            <span className='d-block pb-1  '>Voqea Sababi</span>
            <textarea
              ref={polisDescription}
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

          <label className='d-flex align-items-center mt-3 '>
            <span className='me-2 mb-1  '>Guvohlar</span>
            <input
              type='Checkbox'
              onChange={() => FunkState()}
              // checked={}
              style={{
                width: "20px",
                height: "20px",
              }}
            />
          </label>

          <div
            className={
              count == false
                ? "row mt-3 GuvohTable "
                : "row mt-3 GuvohTable d-none"
            }
          >
            <label className='col-4'>
              <span className='d-block pb-1  '>Familiya</span>
              <Inputs ref={witnessFirstName} name='inputTextFamiliya' />
            </label>
            <label className='col-4'>
              <span className='d-block pb-1  '>Ismi</span>
              <Inputs ref={witnessName} name='inputTextIsmi' />
            </label>
            <label className='col-4'>
              <span className='d-block pb-1  '>Otasini ismi</span>
              <Inputs ref={witnessFather} name='inputTextPapa' />
            </label>
          </div>
          <div
            className={
              count == false
                ? "mt-3 row justify-content-center align-items-center GuvohTable"
                : "mt-3 row justify-content-center align-items-center GuvohTable d-none"
            }
          >
            <label className='col-4'>
              <span className='d-block pb-1  '>Telefon raqami</span>

              <Inputs
                ref={witnessTel}
                onClick={() => inputClick()}
                className='input-heroTwoo '
                id='organization_phone'
                name='organization_phone'
                placeholder='(+998) 99-000-00-00'
                default
                defaultValue='+998'
                minLength={7}
                type='tell'
                required
              />
            </label>

            <label className='col-2 ps-1 ' htmlFor='file-c'>
              <span className='d-block pb-1  '>Barmoq Izi</span>
              <input
                onChange={(event) => handleFileWillsFinger(event)}
                // ref={witnessFileFinger}
                className='input-file-adminka'
                id='file-c'
                name='file_yuklash'
                type='file'
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
            <label className='col-2 ps-1 ' htmlFor='files'>
              <span className='d-block pb-1  '>Rasm</span>
              <input
                onChange={(event) => handleFileWillsFoto(event)}
                // ref={witnessFileFoto}
                className='input-file-adminka'
                id='files'
                name='file_yuklash'
                type='file'
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
          <div className='row mt-3 justify-content-center align-items-center'>
            <label className='col-8'>
              <span className='d-block pb-1   '>Hodim Hulosasi</span>
              <textarea
                name='textArea'
                ref={hodimHulosa}
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
            <Buttons className='col-2' type='submit'>
              <strong>Yuborish</strong>
            </Buttons>
          </div>
        </form>
      </div>
    </div>
  );
}
