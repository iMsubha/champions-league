import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import playersData from '../../playersData/data.json'
import PlayerDetails from '../PlayerDetails/PlayerDetails';
import './Players.css'
import Club from '../Club/Club';
const Players = () => {
    const first15 = playersData.slice(0, 20);
    const [players, setPlayer] = useState(first15); //15 data
    const [selectedPlayer, setSelectedPlayer] = useState([])

    const handleAddPlayer = (player) => {
        const newSelectedPlayer = [...selectedPlayer, player]
        setSelectedPlayer(newSelectedPlayer)
    }
    useEffect(() => {
        setPlayer(players);
    }, [])

    return (
        <div className="players">
            <div className="players-container">
                {
                    players.map(player => <PlayerDetails key={player.id} player={player} handleAddPlayer={handleAddPlayer} />)
                }
            </div>
            <div className="club-container">
                <Club club={selectedPlayer} />
            </div>
        </div>
    );
};

export default Players;