import React, {useState} from 'react';

const Comments = ({id, name, comment, time, onDelete}) => {

    const handleDelete = ()=>{
        onDelete(id);
    }


    return (
        <div className={'main_container'}>
            <div className={'comment_container'}>
                <img src='https://via.placeholder.com/600/d32776'/>
                <div className={'comment_text'}>
                    <div className={'name'}>
                        <div>{name}</div>
                        <p className={'time'}>{time}</p>
                    </div>
                    <div className={'comment'}>{comment}</div>
                </div>
                <div className={'buttons'}>
                    <button onClick={handleDelete} className={'delete_button'}>Delete</button>
                </div>
            </div>

            <hr className={'seperation'}/>
        </div>

    );
};

export default Comments;