import React from "react";
import { deleteCard, readDeck } from "../../../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CardsList({ deckId }) {
    const [cards, setCards] = useState([]);
    const [deleteId, setDeleteId] = useState();

    useEffect(() => {
        const abortController = new AbortController();

        async function loadDeck() {
            try {
                if (deleteId) {
                    await deleteCard(deleteId);
                }
                const Deck = await readDeck(deckId, abortController.signal);
                setCards(Deck.cards);
            } catch (error) {
                console.log(error);
            }
        }

        loadDeck();
    }, [deleteId, deckId]);

    const handleDelete = (cardId) => {
        if (
            window.confirm(
                "Delete this card? \n\nYou will not be able to recover it"
            )
        ) {
            setDeleteId(cardId);
        }
    };

    const list = cards.map((card) => {
        return (
            <div key={card.id} className="container p-2 m-0 border">
                <div className="row">
                    <div className="col-6">{card.front}</div>
                    <div className="col-6">
                        <div>{card.back}</div>
                        <div>
                            <Link to={`/decks/${deckId}/cards/${card.id}/edit`} className="btn btn-secondary mr-2">
                                Edit
                            </Link>
                            <button
                                to="/"
                                className="btn btn-danger mr-2"
                                onClick={() => handleDelete(card.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return <div>{list}</div>;
}

export default CardsList;
