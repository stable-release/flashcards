import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";
import { useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api";
import { useEffect } from "react";
import DeckForm from "../Forms/DeckForm";

function Edit() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
    });

    const history = useHistory();
    const { deckId } = useParams();

    const handleChange = ({ target }) => {
        const value = target.value;
        setFormData({
            ...formData,
            [target.name]: value,
        });
    };

    async function postData() {
        const data = {...formData, id: deckId};
        await updateDeck(data);
        history.push(`/decks/${deckId}`)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postData();
    }

    useEffect(() => {
        async function loadDeck() {
            try {
                const deck = await readDeck(deckId);
                setFormData({
                    name: deck.name,
                    description: deck.description
                })
            } catch (error) {
                console.log(error);
            }
        }
        
        loadDeck();
    },[deckId])

    return (
        <div>
            <Breadcrumb deckId={deckId} name={formData.name} />
            <div className="container p-0 m-0">
                <h1>Edit Deck</h1>
                <DeckForm handleSubmit={handleSubmit} formData={formData} handleChange={handleChange} linkNegate="/"/>
            </div>
        </div>
    );
}

export default Edit;
