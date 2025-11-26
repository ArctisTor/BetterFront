import { useState } from "react";
import NavBar from "../../NavBar";

import "./MeadRecipeModal.css";
import DeleteIcon from "@mui/icons-material/Delete";



interface ModalModel {
    isOpen: boolean;
    closeModal: () => void;
}

interface IngredientSection {
    id: number;
    title: string;
    items: IngredientItem[];
}

interface IngredientItem {
    id: number;
    description: string
}

const MeadRecipeModal: React.FC<ModalModel> = ({ isOpen, closeModal }) => {

    const [meadName, setMeadName] = useState("");
    const [meadABV, setMeadABV] = useState(0.0);
    const [sections, setSections] = useState<IngredientSection[]>([]);

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
        setSections(prev => [
            ...prev,
            { id: Date.now() + Math.random(), title: "", items: [] as IngredientItem[] }
        ]);
    };

    const deleteSection = (id: number) => {
        setSections(prev => prev.filter(section => section.id !== id));
    };

    const updateSectionTitle = (id: number, newTitle: string) => {
        setSections(prev =>
            prev.map(section => (section.id === id ? { ...section, title: newTitle } : section))
        );
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

                            {sections.map((section) => (
                                <div key={section.id} className="ingredient-section mb-4">
                                    <div className="sectionTitle">
                                        <button className="delete-btn" onClick={() => deleteSection(section.id)}>
                                            <DeleteIcon />
                                        </button>
                                        <label className="form-label fw-semibold d-block mb-2">
                                            Section Title
                                        </label>
                                        <input
                                            type="text"
                                            className="section-title-input form-control"
                                            placeholder="e.g. Primary Fermentation, Bottling, Aging..."
                                            onChange={(e) => updateSectionTitle(section.id, e.target.value)}
                                            value={section.title}
                                        />
                                    </div>
                                    <div className="ingredient-items">
                                        <div className="ingredient-label">
                                            <label className="form-label fw-semibold d-block mb-2">
                                                Items
                                            </label>
                                        </div>

                                        <div className="ingredient-item-list">
                                            <button type="button" className="add-btn">
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="center-add-button-div">
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