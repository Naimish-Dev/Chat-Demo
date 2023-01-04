import React, { useState, useEffect } from 'react'
import { useUsercontext } from '../UserContext/UsersContext'
import UserAvater from '../Helpers/UserAvater'
const UserChatlist = () => {
    const { users, WithChat, setWithChat } = useUsercontext();
const [first, setfirst] = useState([])


useEffect(() => {
    setfirst(users)
}, [users])

    const GetUserChat=(e)=>{
        const withc =users.filter((val)=> val.id === e);
    const unique = Array.from(new Set([...WithChat, ...withc]));    
    if (unique.length > 2)  (unique.splice(0, unique.length - 2))
    setWithChat(unique)
    }
    
    const SerachUser= (e)=>{
        let dumaydata = [...users]
const searchvalue=(e.target.value);


const coprdata= (dumaydata.filter(word => word.Name.includes(searchvalue)));
            setfirst(coprdata)

    }

    return (
        <div className='main_message_card'>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <div className="header p-2 d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                            <img src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt="" className="profile_picture" />
                            <h3 className="ms-2"> I am sender</h3>
                                </div>
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        </button>
                        </div>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                                <div className="search_group"> 
                                    <i className="fas fa-search"></i>
                                <input type="text" placeholder="Search Users"  onChange={(e)=>SerachUser(e)}/>
                                </div>
                            {first.map((val)=>{
                                return <UserAvater  key={val.id} val={val} onGetUserChat={GetUserChat}></UserAvater>
                            })}

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default UserChatlist