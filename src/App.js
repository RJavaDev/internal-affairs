import "./App.css";
import Colleps from "./components/colleps/Colleps";
import { RoyxatgaOlish } from "./components/main/RoyxatgaOlish";
import { Container } from "./components/style/styleComponent.jsx";
import { Route, Routes } from "react-router-dom";

import Bayonamalar from "./pages/bayonnomalar/Bayonamalar";
import Prof from "./pages/prof/Prof";
import Qidiruvdagilar from "./pages/qidiruvdagilar/Qidiruvdagilar";
import Bedaraklar from "./pages/bedaraklar/Bedaraklar";
import Qorovullari from "./pages/qorovullari/Qorovullari";
import Qurollar from "./pages/qurollar/Qurollar";
import BosIndex from "./pages/BosBaza/bosIndex";

import UserPolis from "./pages/PolisName/UserPolis.jsx";
import { useState, useContext } from "react";
import LoginUser from "./pages/Login/Login";
import { userContext } from "./components/context/userContext";
function App() {
  const [states, useStates] = useState("");
  const [passwords, usePasswords] = useState("");
  console.log(states);
  console.log(passwords);

  if (states == "admin" || (states == "Admin" && passwords == "123456789")) {
    return (
      <Container>
        <div className='d-flex'>
          <Colleps />
          <div className='w-100'>
            <Routes>
              <Route path='Polis-Name' element={<UserPolis />} />
              <Route index path='/' element={<RoyxatgaOlish />} />
              <Route path='bayonnomalar' element={<Bayonamalar />} />
              <Route path='PROF' element={<Prof />} />
              <Route path='qidiruvdagilar' element={<Qidiruvdagilar />} />
              <Route path='bedaraklar' element={<Bedaraklar />} />
              <Route path='qorovullari' element={<Qorovullari />} />
              <Route path='qurollar' element={<Qurollar />} />
            </Routes>
          </div>
        </div>
      </Container>
    );
  } else if (states == "superadmin" && passwords == "12345") {
    console.log("sim");
    return <BosIndex />;
  } else {
    console.log("bekor");
  }

  return (
    <>
      <userContext.Provider
        value={{ states, useStates, passwords, usePasswords }}
      >
        <LoginUser />

        {/* */}
      </userContext.Provider>
    </>
  );
}

export default App;
