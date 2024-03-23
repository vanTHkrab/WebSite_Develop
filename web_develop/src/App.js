import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import GenshinCharacter from './components/GenshinCharacter';
import GenshinPost from './components/GenshinPost';
import characters from './data/characters';
import AppSearch from './components/AppSearch';


function App() {
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [searchText, setSearchText] = useState('');

    function onCharacterOpenClick(theCharacter) {
        setSelectedCharacter(theCharacter);
    }

    function onCharacterCloseClick() {
        setSelectedCharacter(null);
    }

    
    const characterElements = characters.filter((character) =>{
        return character.id.toLowerCase().includes(searchText.toLowerCase());
    }).map((character, index) => {
        return <GenshinCharacter key={index} character={character} onCharacterClick={onCharacterOpenClick}/>;
    });

    let characterPost = null;
    if (!!selectedCharacter) {
        characterPost = <GenshinPost character={selectedCharacter} onBgClick={onCharacterCloseClick}/>
    }

    return (
        <div className="logo">
            {/* <AppHeader />
            <video width="320px" height="240px" autoplay>
                <source src="/image/video/ping.mp4" type="video/mp4" />
            </video> */}
            <section className="app-section">
                <div className="app-container">
                    <AppSearch value={searchText} onValueChange={setSearchText}/>
                    <div className="app-gird">
                        {characterElements}
                    </div>
                {characterPost}
                </div>
            </section>
        </div>
    );
}

export default App;