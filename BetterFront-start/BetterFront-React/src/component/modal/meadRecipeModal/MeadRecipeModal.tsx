import { useState } from "react";
import NavBar from "../../NavBar";

import "./MeadRecipeModal.css";   // ← THIS IS THE ONLY LINE YOU NEED


interface ModalModel {
    isOpen: boolean;
    closeModal: () => void;
}

const MeadRecipeModal: React.FC<ModalModel> = ({ isOpen, closeModal }) => {

    const [meadName, setMeadName] = useState("");
    const [meadABV, setMeadABV] = useState(0.0);
    const [sections, setSections] = useState<string[]>([]);

    if (!isOpen) return null;

    const createRecipe = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Submited");
    };

    const handleMeadNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setMeadName(newValue);
    }

    const handleMeadABV = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(event.target.value); // Convert string → number
        setMeadABV(isNaN(newValue) ? 0 : newValue); // Optional: default to 0 if invalid
    }

    const addSection = () => {
        setSections([...sections, ""]);
    };

    return (
        <>
            <div className="modal-overlay">
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <NavBar title={"New Mead Recipe"} />
                    <form onSubmit={createRecipe}>
                        <div className="form-row">
                            <label htmlFor="meadName">Name</label>
                            <input
                                id="meadName"
                                type="text"
                                value={meadName}
                                onChange={handleMeadNameChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-row">
                            <label htmlFor="meadABV">ABV</label>
                            <input
                                id="meadABV"
                                type="number"
                                step="0.1"
                                value={meadABV}
                                onChange={handleMeadABV}
                                className="form-control"
                            />
                        </div>

                        <div className="ingredient-list-container">
                            <div className="label-title">
                                <label>Ingredient List </label>
                            </div>

                            {/* Dynamic sections — NO onChange, NO warnings, just works */}
                            {sections.map((_, index) => (
                                <div key={index} className="ingredient-section mb-4">
                                    <label className="form-label fw-semibold d-block mb-2">
                                        Section Title
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g. Primary Fermentation, Bottling, Aging..."
                                        defaultValue=""
                                    />
                                </div>
                            ))}

                            <div className="center-add-button">
                                <button type="button" className="add-btn" onClick={addSection}>
                                    +
                                </button>
                            </div>
                        </div>

                        <div className="form-row">
                            <label>Steps</label>
                        </div>
                        <hr />
                        <div className="modal-footer">
                            <button onClick={closeModal}>
                                Save
                            </button>
                            <button className="cancel-btn" onClick={closeModal}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}


export default MeadRecipeModal;