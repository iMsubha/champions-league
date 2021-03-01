import React from 'react';

const Member = (props) => {
    const member = props.member;
    return (
        <div className="card">
            <p>{member.full_name}</p>
            <p>Salary: ${member.salary}</p>
        </div>
    );
};

export default Member;