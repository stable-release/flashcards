import React from "react";
import CreateDeck from "./CreateDeck";
import DeckCardList from "./DeckCardList";
import { useEffect, useState } from "react";
import { deleteDeck, listDecks } from "../../utils/api";

const PORT = process.env.REACT_APP_PORT;

/*
[0]   \{^_^}/ hi!
[0]
[0]   Loading ./data/db.json
[0]   Done
[0] 
[0]   Resources
[0]   http://localhost:8080/decks
[0]   http://localhost:8080/cards
[0]
[0]   Home
[0]   http://localhost:8080
*/

function Home({setDecks, setCards}) {
    const [deckList, setDeckList] = useState([]);
    const [deleteId, setDeleteId] = useState();

    // Load Initial Deck State
    useEffect(() => {
        const abortController = new AbortController();

        async function loadDecks() {
            try {
                if (deleteId) {
                    await deleteDeck(deleteId);
                }
                const decks = await listDecks(abortController.signal);
                setDeckList(decks);
            } catch (error) {
                console.log(error);
            }
        }

        loadDecks();
    }, [deleteId]);

    const handleCreate = () => {};

    const handleDelete = (deckId) => {
        if (
            window.confirm(
                "Delete this deck? \n\nYou will not be able to recover it"
            )
        ) {
            setDeleteId(deckId);
        }
    };

    if (deckList.length) {
        return (
            <div>
                <CreateDeck handleCreate={handleCreate} />
                <DeckCardList
                    deckList={deckList}
                    handleDelete={handleDelete}
                />
            </div>
        );
    } else {
        return (
            <div>
                <CreateDeck handleCreate={handleCreate} />
                <h1>Create a deck to start!</h1>
            </div>
        );
    }
}

export default Home;
