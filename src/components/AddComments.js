import React from 'react';

const AddComments = ({addComment}) => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        addComment(e.target.name.value, e.target.comment.value);
        e.target.name.value = "";
        e.target.comment.value = "";
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className={'form'}>
                <input placeholder={'name'} name={'name'} className={'name_input'}/>
                <textarea placeholder={'comment'} name={'comment'} className={'comment_input'}/>
                <button onSubmit={handleSubmit} className={'post_button'}>Post</button>
            </form>
        </div>
    );
};

export default AddComments;