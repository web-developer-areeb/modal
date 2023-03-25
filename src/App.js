import { useState } from "react";
import Modal from "./components/Modal";


const App = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="app">
      <button className="btn" onClick={() => setOpenModal(true)}>Open Modal</button>
      {openModal && 
        <Modal setOpenModal={setOpenModal}/>
      }
    </div>
  );
}

export default App;
