// reducer takes in two things:
// 1. the "action" function
// 2. copy of current state


// initial the state with empty array.
function posts(state = [], action){
    console.log("Post change.")
    console.log(state, action);
    return state;
}

export default posts;