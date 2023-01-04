import React from 'react'
import { useUsercontext } from '../UserContext/UsersContext';
import Message from '../Helpers/Message';
const UsersChatBox = () => {
    const { WithChat, setWithChat } = useUsercontext();

    const oncloseChate = (e) => {
        const rememberUsers = WithChat.filter((val) => val.id !== e);
        setWithChat(rememberUsers)
    }

    return (
        <div className='all-chat-box'>
            {WithChat.map((val) => {
                return <div key={val.id}>
                    <div className="accordion" >
                        <div className="accordion-item">
                            <h2 className="accordion-header p-0  " id={`heading${val.Name}`}>
                                <div className="header  d-flex justify-content-between align-items-center">
                                    <div key={val.id} className="d-flex align-itmes-center users m-0">
                                        <div className='userprofile-status'>
                                            <img className="profile_picture" src={val.profile} alt={val.Name} />
                                            {val.online && <div className='online-Status'></div>}
                                        </div>
                                        <div className="px-3">
                                            <h5> {val.Name} </h5>
                                            <p>Last Message</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mx-1">
                                        <button className="accordion-button bg-white me-3" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${val.Name}`} aria-expanded="true"
                                                aria-controls={`collapse${val.Name}`}>
                                        </button>
                                        <button className="btnclose btn btn-outline-primary" onClick={() => oncloseChate(val.id)}>
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            </h2>
                            <div id={`collapse${val.Name}`} className="accordion-collapse collapse show" aria-labelledby={`heading${val.Name}`}>
                                <div className="accordion-body">
                                    <Message />
                                </div>
                                <div className="sending_part" >
                                    <input type="text" placeholder='Typing....' />
                                    <input type="file" id="file" className='file-attach' />
                                    <button type="button" className="btn btn-outline-primary"><i className="fas fa-paper-plane"></i></button>
                                    <button type="file" className="btn btn-outline-primary"><i className="fas fa-paperclip"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default UsersChatBox