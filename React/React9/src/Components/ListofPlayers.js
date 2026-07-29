import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 90 },
        { name: "Rohit Sharma", score: 80 },
        { name: "Shubman Gill", score: 65 },
        { name: "KL Rahul", score: 72 },
        { name: "Hardik Pandya", score: 68 },
        { name: "Ravindra Jadeja", score: 75 },
        { name: "R Ashwin", score: 60 },
        { name: "Mohammed Shami", score: 55 },
        { name: "Jasprit Bumrah", score: 85 },
        { name: "Mohammed Siraj", score: 50 },
        { name: "Kuldeep Yadav", score: 78 }
    ];

    const below70 = players.filter(player => player.score < 70);

    return (
        <div>
            <h2>List of Players</h2>

            {players.map((player, index) => (
                <p key={index}>
                    {player.name} - {player.score}
                </p>
            ))}

            <h2>Players with Score Below 70</h2>

            {below70.map((player, index) => (
                <p key={index}>
                    {player.name} - {player.score}
                </p>
            ))}
        </div>
    );
}

export default ListofPlayers;