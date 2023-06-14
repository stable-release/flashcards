import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home/Home";
import Study from "./Study/Study";
import ViewDeck from "./ViewDeck/ViewDeck";
import Create from "./Create/Create";
import Edit from "./Edit/Edit";
import NewCard from "./NewCard/NewCard";
import EditCard from "./EditCard/EditCard";

function Layout() {
  const [decks, setDecks] = useState([]);
  const [cards, setCards] = useState([]);

    return (
        <div>
            <Header />
            <div className="container">
                {/* TODO: Implement the screen starting here */}
                <Switch>
                    <Route exact path="/">
                        <Home setDecks={setDecks} setCards={setCards}/>
                    </Route>

                    <Route path="/decks/new">
                        <Create />
                    </Route>
                    <Route path="/decks/:deckId/cards/:cardId/edit">
                        <EditCard />
                    </Route>
                    <Route path="/decks/:deckId/cards/new">
                        <NewCard />
                    </Route>
                    <Route path="/decks/:deckId/study">
                        <Study />
                    </Route>
                    <Route path="/decks/:deckId/edit">
                        <Edit />
                    </Route>
                    <Route path="/decks/:deckId">
                        <ViewDeck />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Layout;
