import React from "react";
import { Link } from "react-router-dom";

function DeckForm({ handleSubmit, handleChange, formData, linkNegate }) {
    return (
        <div>
                            <form onSubmit={handleSubmit}>
                    <div className="container p-0 m-0">
                        <div className="col-12 p-0">
                            <label htmlFor="name" style={{ width: "100%" }}>
                                Name
                            </label>
                        </div>
                        <div className="col-12 p-0">
                            <input
                                name="name"
                                type="text"
                                value={formData.name}
                                placeholder="Deck Name"
                                onChange={handleChange}
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div className="col-12 p-0">
                            <label
                                htmlFor="description"
                                style={{ width: "100%" }}
                            >
                                Description
                            </label>
                        </div>
                        <div className="col-12 p-0">
                            <textarea
                                name="description"
                                type="text"
                                value={formData.description}
                                placeholder="Brief description of the deck"
                                onChange={handleChange}
                                style={{ width: "100%" }}
                            />
                        </div>
                    </div>
                    <div className="container p-0 m-0">
                        <Link to={linkNegate} className="btn btn-secondary mr-2">
                            Cancel
                        </Link>
                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
        </div>
    )
}

export default DeckForm;