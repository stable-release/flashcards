import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { createDeck } from "../../utils/api";
import CardForm from "../Forms/CardForm";

function Create() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
    });

    const history = useHistory();

    const handleChange = ({ target }) => {
        const value = target.value;
        setFormData({
            ...formData,
            [target.name]: value,
        });
    };

    async function postData() {
        const data = formData;
        const deck = await createDeck(data);
        history.push(`/decks/${deck.id}`)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postData();
    }

    return (
        <div>
            <Breadcrumb />
            <CardForm handleSubmit={handleSubmit} formData={formData} handleChange={handleChange} deckId={deck.id}/>
        </div>
    );
}

export default Create;
