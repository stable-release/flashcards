import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { readDeck } from "../../utils/api";
import Breadcrumb from "./Breadcrumb";
import FlashCard from "./FlashCard";

function Study() {
    const { deckId } = useParams();
    const [deck, setDeck] = useState({});

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

    useEffect(() => {
        const abortController = new AbortController();

        async function loadDeck() {
            try {
                const Deck = await readDeck(deckId, abortController.signal);
                setDeck(Deck);
            } catch (error) {
                console.log(error)
            }
        }

        loadDeck();
    }, [deckId])

    if (!deck.cards) {
        return (
            <div>
                <Breadcrumb deck={deck}/>
                <h3>Study: {deck.name}</h3>
                <h5>Not enough cards.</h5>
                <p>You need at least 3 cards to study. There are 0 cards in the deck.</p>
                <button className="btn btn-primary">{plus}Add Cards</button>
            </div>
        )

    } else if (deck.cards.length < 3) {
        return (
            <div>
            <Breadcrumb deck={deck}/>
            <h3>Study: {deck.name}</h3>
            <h5>Not enough cards.</h5>
            <p>You need at least 3 cards to study. There {deck.cards.length == 1 ? "is" : "are"} {deck.cards.length} card{deck.cards.length == 1 ? "" : "s"} in the deck.</p>
            <Link to={`/decks/${deck.id}/cards/new`} className="btn btn-primary">{plus}Add Cards</Link>
        </div>
        )
    }
    
    else {
        return (
            <div>
                <Breadcrumb deck={deck}/>
                <h3>Study: {deck.name}</h3>
                <FlashCard deck={deck}/>
            </div>
        );
    }
}

export default Study;
