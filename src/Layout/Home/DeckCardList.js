import React from "react";
import DeckCard from "./DeckCard";

function DeckCardList({deckList, handleDelete}) {
    
    const decks = deckList.map((deck) => {
        return <DeckCard key={deck.id} deck={deck} handleDelete={handleDelete} deckId={deck.id} length={deck.cards.length}/>
    })
    
    return (
        <div>
        {decks}
        </div>
    )
}

export default DeckCardList;