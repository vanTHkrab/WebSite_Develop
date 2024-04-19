import './GenshinPost.css';

function GenshinPost(props) {
    const { character, onBgClick } = props;
    return (
        <div className="genshin-post">
            <div className="genshin-post-bg" />
            <div className="genshin-post-content" onClick={onBgClick}>
                <img src={character.thumbnaiURL} />
                <h4>{character.title}</h4>
            </div>
        </div>
    );
}

export default GenshinPost;