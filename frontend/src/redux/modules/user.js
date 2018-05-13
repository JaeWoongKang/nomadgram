//imports

//actions

const SAVE_TOKEN = "SAVE_TOKEN";

//actions creators
function saveToken(token){
    return{
        type: SAVE_TOKEN,
        token
    }
}

//API actions

function facebookLogin(access_token){
    //thunk 미들웨어는 액션의 디스패치를 딜레이 시켜준다.
    return dispatch => {
        fetch("/users/login/facebook/",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                access_token: access_token
            })
        })
        .then( response => response.json())
        .then( json => {
            localStorage.setItem("jwt", json.token);
            dispatch(saveToken(json.token))
         })
        .catch( err => console.log( err ))
    }
}

// inital state

 const initialState = {
     isLoggedIn : localStorage.getItem("jwt") ? true : false
}

//reducer
function reducer(state = initialState, action){
    switch(action.type){
        case SAVE_TOKEN:
            return applySetToken(state, action);
        default:
        return state;
    }
}
// reducer functions

function applySetToken(state, action){
    const {token} = action;
    return {
        ...state,
        isLoggedIn:true,
        token
    }
}

//exports
const actionCreators = {
    facebookLogin : facebookLogin
}

export { actionCreators }
// reducer export

export default reducer;