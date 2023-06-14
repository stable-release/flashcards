import React from "react";
import Breadcrumb from "./Breadcrumb";
import { useParams } from "react-router-dom"
import { createCard, readDeck } from "../../utils/api";
import { useState, useEffect } from "react";
import CardForm from "../Forms/CardForm";

function NewCard() {
    const {deckId} = useParams();
    const [ deck, setDeck] = useState({});
    const [ formData, setFormData ] = useState({
        front: "",
        back: ""
    });

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

    async function postData() {
        const abortController = new AbortController();
        await createCard(deckId, formData, abortController.signal);
        setFormData({
            front:"",
            back:""
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postData();
    }

    const handleChange = ({ target }) => {
        const value = target.value;
        setFormData({
            ...formData,
            [target.name]: value,
        });
    };

    return (
        <div>
            <Breadcrumb deck={deck}/>
            <CardForm handleSubmit={handleSubmit} formData={formData} handleChange={handleChange} deckId={deckId} submit="Save" negate="Done" link={`decks/${deckId}`}/>
        </div>
    )
}

export default NewCard;