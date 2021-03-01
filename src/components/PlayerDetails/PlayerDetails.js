import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PlayerDetails.css'
import { Button } from 'react-bootstrap';
const PlayerDetails = (props) => {
    // console.log(props);
    const { full_name, image, salary, team_name } = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="card player-details shadow">
            <div className="mt-3">
                <img className="player-image" src={image} alt="" srcset="" />
            </div>
            <div className="card_body">
                <h4>{full_name}</h4>
                <p>Salary: {salary}</p>
                <p>Team : {team_name}</p>
            </div>
            <Button onClick={() => handleAddPlayer(props.player)} className="main-button mb-3">ADD ME</Button>
        </div>
    );
};

export default PlayerDetails;