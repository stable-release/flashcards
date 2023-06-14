import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { deleteDeck, readDeck } from "../../utils/api/index";
import Breadcrumb from "./Breadcrumb";
import Descripton from "./Description";
import CardsList from "./Cards/CardsList";

function ViewDeck() {
    const { deckId } = useParams();
    const [deck, setDeck] = useState([]);
    const [deleteId, setDeleteId] = useState();
    const history = useHistory();

    useEffect(() => {
        const abortController = new AbortController();

        async function loadDeck() {
            try {
                if (deleteId) {
                    await deleteDeck(deleteId);
                    history.push("/")
                }
            const Deck = await readDeck(deckId, abortController.signal);
            setDeck(Deck);
            } catch (error) {
                console.log(error);
            }
        }

        loadDeck();
    }, [deckId, deleteId]);

    const handleDelete = (deckId) => {
        if (
            window.confirm(
                "Delete this deck? \n\nYou will not be able to recover it"
            )
        ) {
            setDeleteId(deckId);
        }
    };

    return (
        <div>
            <Breadcrumb deck={deck} />
            <div className="container m-0 p-0">
                <Descripton deck={deck} handleDelete={handleDelete} deckId={deckId}/>
            </div>
            <div style={{padding:"20px"}}>
                    <h4>Cards</h4>
                    <CardsList deckId={deckId}/>
            </div>
        </div>
    );
}

export default ViewDeck;
