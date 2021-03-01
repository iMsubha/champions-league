import React from 'react';

const Member = (props) => {
    const member = props.member;
    return (
        <div>
            <p className="card">{member.full_name}</p>
        </div>
    );
};

export default Member;