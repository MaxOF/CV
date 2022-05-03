import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import RemoteWork from "./components/remoteWork/RemoteWork";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main />
            <Skills />
            <Projects />
            <RemoteWork />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
