import { useState } from "react";
import "../style/TwitterCard.css";
export function TwitterCard({formatUser,image,username,children, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const txtBtn = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowing ? "article-card-btn is-following" : "article-card-btn";
    const imageSrc = `/src/img/${image}`;

    //maneja el estado 
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className="article-card">
            <header className="article-card-header">
                <img
                    className="article-card-img"
                    src={imageSrc}
                    alt="avatar de persona"
                />
                <div className="article-card-user-data">
                    {children} 
                    <span>{formatUser(username)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="article-card-text">{txtBtn}</span>
                    <span className="article-card-unfollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}
