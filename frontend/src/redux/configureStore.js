import { createStore , combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import users from 'redux/modules/users';

/** node js의 프로세스를 보여주는 변수
 const env = env;*/

/**현재 환경을 설명해주는 변수
const env = process.env;**/
/*현재 환경이 개발인지 운영인지 판별가능*/
const env = process.env.NODE_ENV;
const middlewares = [thunk];
if(env === "development"){
    //development일 때만 부르고 싶기 때문에 import 하지 않고 이렇게 작성함.
    const {logger} = require("redux-logger");
    middlewares.push(logger);
}



console.log(env);

const reducer = combineReducers({
    users
})



let store = initialState => createStore(reducer, applyMiddleware(...middlewares));

export default store();