// Reducer Composition structure.
function postComments(state = [], action){
    switch(action.type) {
        case "ADD_COMMENT" :
            // return the new state with the new comment.
            return [ ...state,{
                user: action.author,
                text: action.comment
            }]
        case "REMOVE_COMMENT" :

        default:
            return state;
    }
    return state;
}


// initial the state with empty array.
function comments(state = [], action){
    // console.log(state, action);
    if(typeof action.postId !== "undefined"){
        return {
            // copy the current state
            ...state,
            // overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments;