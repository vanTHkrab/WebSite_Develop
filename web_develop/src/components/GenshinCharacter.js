import './GenshinCharacter.css';

function GenshinCharacter(props) {
    const { character, onCharacterClick } = props;
    return (
        <div className="genshin-character">
            <img src={character.thumbnaiURL} onClick={() => {onCharacterClick(character)}}/>
            <h4>{character.title}</h4>
        </div>
    );
}

export default GenshinCharacter;