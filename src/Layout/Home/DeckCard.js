import React from "react";
import { Link } from "react-router-dom";

function DeckCard({ deck, handleDelete, deckId, length }) {
    return (
        <div className="container m-0 p-0">
            <div className="card">
                <div className="card-body">
                <div className="row">
                <div className="col-9">
                <h5 className="card-title">{deck.name}</h5>
                </div>
                <div className="col-3">{length} cards</div>
                <div className="col">
                    <h6 className="card-subtitle">{}</h6>
                </div>

                </div>
                    <p className="card-text">{deck.description}</p>
                    <div className="row">
                        <div className="col d-flex justify-content-start">
                            <Link to={`/decks/${deckId}`} className="btn btn-secondary mr-2">View</Link>
                            <Link to={`/decks/${deckId}/study`} className="btn btn-primary">Study</Link>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <button className="btn btn-danger" onClick={() => handleDelete(deckId)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeckCard;
