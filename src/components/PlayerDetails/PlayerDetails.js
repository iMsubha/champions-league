import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PlayerDetails.css'
import { Button } from 'react-bootstrap';
const PlayerDetails = (props) => {
    // console.log(props);
    const { full_name, image, salary, team_name, nationality } = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="card player-details shadow">
            <div className="mt-3">
                <img className="player-image" src={image} alt="" srcset="" />
            </div>
            <div>
                <h4 className="mt-3 font-weight-normal">{full_name}</h4>
                <p className="font-weight-lighter mb-0 font-weight-bold">{team_name}</p>
                <p className="font-weight-lighter mb-0">{nationality}</p>
                <p className="font-weight-lighter">Salary: ${salary}</p>
            </div>
            <Button onClick={() => handleAddPlayer(props.player)} className="main-button mb-3">ADD ME</Button>
        </div>
    );
};

export default PlayerDetails;