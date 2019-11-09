// reducer takes in two things:
// 1. the "action" function
// 2. copy of current state


// initial the state with empty array. ES6 default input state = [] .
function posts(state = [], action){
    switch(action.type) {
        case "INCREMENT_LIKES" :
            console.log("INCREMENT_LIKES clicked");
            // return the updated state.
            const i = action.index;
                return [
                    ...state.slice(0, i),
                    // before the one we are updating
                    {...state[i], likes: state[i].likes + 1},
                    ...state.slice(i + 1),
                    // after the one we are updating
                ]
        default:
            return state;
    }
}

export default posts;