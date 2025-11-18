import { useState } from "react";
import NavBar from "../../NavBar";
import { ErrorMessage } from "../../../models/ErrorMessage";

import "./debutVTuber.css";

interface ModalModel {
  isOpen: boolean;
  closeModal: () => void;
}

const DebutVTuber: React.FC<ModalModel> = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  const today = new Date().toISOString().split("T")[0];
  const [debutDate, setDebutDate] = useState(today);
  const [birthday, setBirthday] = useState(today);
  const [error, setError] = useState<ErrorMessage[]>([]);

  const handleDebutDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const debutDate = event.target.value;
    if (!debutDate) {
      const debutError = {
        source: "debutDate",
        message: "Please enter a valid date",
      };
      setError([...error, debutError]);
    } else {
      // Remove the error if the input becomes valid
      setError((prevErrors) =>
        prevErrors.filter((err) => err.source !== "debutDate")
      );
      setDebutDate(debutDate);
    }
  };

  const debutVTuber = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Submited");
  };

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <NavBar title={"Debut VTuber"} />
          <form onSubmit={debutVTuber}>
            <div className="form-row">
              <label htmlFor="date">Debut Date</label>
              <input
                id="debutDate"
                type="date"
                value={debutDate}
                onChange={handleDebutDateChange}
                className="form-control"
              />
            </div>
            <div className="form-row">
              <label htmlFor="date">Birthday</label>
              <input
                id="birthday"
                type="date"
                value={birthday}
                onChange={handleDebutDateChange}
                className="form-control"
              />
            </div>
            <hr />
            <div className="modal-footer">
              <button className="" onClick={closeModal}>
                Debut
              </button>
              <button className="" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DebutVTuber;
