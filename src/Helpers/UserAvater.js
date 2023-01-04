import React from 'react'

const UserAvater = ({ val, onGetUserChat}) => {
    return (

        <div key={val.id} className="d-flex align-itmes-center user m-0" onClick={() => onGetUserChat(val.id)}>
            <div className='userprofile-status'>
                <img className="profile_picture" src={val.profile} alt={val.Name} />
                {val.online && <div className='online-Status'></div>}
            </div>
            <div className="px-3">
                <h5> {val.Name} </h5>
                <p>Last Message</p>
            </div>                       
        </div>
    )
}

export default UserAvater