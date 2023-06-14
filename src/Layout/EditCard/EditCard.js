import React from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readCard, readDeck, updateCard } from "../../utils/api";
import Breadcrumb from "./Breadcrumb";
import CardForm from "../Forms/CardForm";

function EditCard() {
    const { deckId, cardId } = useParams();
    const [ formData, setFormData ] = useState({
        front: "",
        back: "",
    });
    const [ deck, setDeck ] = useState({});
    const [ card, setCard ] = useState({});
    const history = useHistory();

    useEffect(() => {
        const abortController = new AbortController();

        async function loadDeck() {
            try {
                const Deck = await readDeck(deckId, abortController.signal);
                setDeck(Deck);
            } catch (error) {
                console.log(error);
            }
        }

        loadDeck();

    }, [deckId])

    useEffect(() => {
        const abortController = new AbortController();

        async function loadCard() {
            try {
                const Card = await readCard(cardId, abortController.signal);
                setCard(Card);
            } catch (error ) {
                console.log(error);
            }
        }

        loadCard();
    }, [cardId])

    useEffect(() => {
        setFormData({
            front:card.front,
            back:card.back
        })
    }, [card])

    async function postData() {
        const abortController = new AbortController();
        await updateCard({...card, front:formData.front, back:formData.back}, abortController.signal);
        setFormData({
            front:"",
            back:""
        });
        history.push(`decks/${deckId}`)
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
        <Breadcrumb deck={deck} />
        <CardForm handleSubmit={handleSubmit} formData={formData} handleChange={handleChange} deckId={deckId} submit="Save" negate="Cancel" link={`decks/${deckId}`}/>
        </div>
    )
}

export default EditCard;