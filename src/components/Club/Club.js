import React from 'react';

const Club = (props) => {
    //console.log(props.club);
    const members = props.club;
    let totalBudget = members.reduce((total, club) => total + club.salary, 0)
    //const [full_name] = props.club;

    return (
        <div>
            <h1>This is club</h1>
            <p>Total added Member: {members.length}</p>
            <p>{totalBudget}</p>
        </div>
    );
};

export default Club;