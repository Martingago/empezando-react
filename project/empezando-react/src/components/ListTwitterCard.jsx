import { TwitterCard } from "./TwitterCard";
import "../style/ListTwitter.css";

export function ListTwitterCard() {
    //funcion para añadir @ al nombre de usuario
    const formatUserName = (value) => {
        return "@" + value;
    };


    const users = [
        {
            id: 0,
            name: "Martin Gago",
            username: "Martingago",
            isFollowing: false,
            image: "avatar.png"
        },
        {
            id: 1,
            name: "Miguel Angel Durán",
            username: "Midudev",
            isFollowing: true,
            image: "avatar.png"
        },
        {
            id: 2,
            name: "Maria Montero",
            username: "MaruxaMontero_",
            isFollowing: true,
            image: "avatar.png"
        }
    ]

    return (
        <section className="listTwitter-section">
         {
            users.map(user => {
                const {id, name, username, isFollowing, image} = user;
                return(
                    <TwitterCard 
                    key={id}
                    formatUser={formatUserName} 
                    image={image} 
                    username={username} 
                    initialIsFollowing={isFollowing}>
                        {name}
                    </TwitterCard>
                )
            })
         }
        </section>
    );
}
