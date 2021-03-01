import React from 'react';
import Member from '../Member/Member';
import './Club.css'
const Club = (props) => {
    //console.log(props.club);
    const members = props.club;
    let totalBudget = members.reduce((total, club) => total + club.salary, 0)
    //const [full_name] = props.club;

    return (
        <div className="ml-5 pt-2">
            <h1 className="club">ARSENAL</h1>
            <p>Total team members: {members.length}</p>
            {
                members.map(member => <Member member={member} />)
            }
            <h4>Total Budget: ${totalBudget}</h4>
        </div>
    );
};

export default Club;