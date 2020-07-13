const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT'

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state
        case UPDATE_NEW_TEXT:
            state.newPostText = action.newText;
            this._callSubscriber(this._state);
            return state
        default:
            return state
    }
}

export default profileReducer;