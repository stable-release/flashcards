import React from "react";
import { Link } from "react-router-dom";

function CardForm({handleSubmit, handleChange, formData, deckId, submit, negate, link}) {
    return (
        <form onSubmit={handleSubmit}>
            <div className="container p-0 m-0">
                <div className="col-12 p-0">
                    <label htmlFor="front">Front</label>
                </div>
                <div className="col-12 p-0">
                    <textarea
                        name="front"
                        type="text"
                        value={formData.front}
                        placeholder="Front side of card"
                        onChange={handleChange}
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-12 p-0">
                    <label htmlFor="back">Back</label>
                </div>
                <div className="col-12 p-0">
                    <textarea
                        name="back"
                        type="text"
                        value={formData.back}
                        placeholder="Back side of card"
                        onChange={handleChange}
                        style={{ width: "100%" }}
                    />
                </div>
            </div>
            <Link
                to={link}
                className="btn btn-secondary mr-2"
            >
                {negate}
            </Link>
            <button className="btn btn-primary" type="submit">
                {submit}
            </button>
        </form>
    );
}

export default CardForm;
