import React from "react";
import { Link } from "react-router-dom";

function Descripton({ deck, handleDelete, deckId }) {
    const plus = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus"
            viewBox="0 0 16 16"
        >
            ::before
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
        </svg>
    );

    return (
        <div className="container m-0 p-0">
            <div className="card border-0">
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <h5 className="card-title">{deck.name}</h5>
                        </div>
                        <div className="col">
                            <h6 className="card-subtitle">{}</h6>
                        </div>
                    </div>
                    <p className="card-text">{deck.description}</p>
                </div>
            </div>
            <div className="row m-0 p-0">
                <div className="col-9">
                    <Link to={`/decks/${deckId}/edit`} className="btn btn-secondary mr-2">
                        Edit
                    </Link>
                    <Link to={`/decks/${deck.id}/study`} className="btn btn-primary  mr-2">
                        Study
                    </Link>
                    <Link to={`/decks/${deck.id}/cards/new`} className="btn btn-primary">
                        {plus} Add Cards
                    </Link>
                </div>
                <div className="col-3">
                    <button className="btn btn-danger" onClick={() => handleDelete(deckId)}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default Descripton;
