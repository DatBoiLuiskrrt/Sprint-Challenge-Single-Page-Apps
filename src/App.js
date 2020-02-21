import React,{useState} from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import {
  Route,
  Switch
} from "react-router-dom";


export default function App() {

  return (
    <main>
      <Switch>
      
      <Route path="/characters/">
      <CharacterList/>
      </Route>
      <Route  path="/">
      <Header />
      
      <WelcomePage/>
      </Route>
      </Switch>
      </main>
  );
}
