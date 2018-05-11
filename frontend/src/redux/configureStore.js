import { createStore , combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { composeWithDevTools } from "redux-devtools-extension";
import {i18nState } from "redux-i18n"
import user from 'redux/modules/user';
//import Reactotron from "ReactotronConfig"



/** node js의 프로세스를 보여주는 변수
 const env = env;*/

/**현재 환경을 설명해주는 변수
const env = process.env;**/
/*현재 환경이 개발인지 운영인지 판별가능*/
const env = process.env.NODE_ENV;
const history = createHistory();

const middlewares = [thunk, routerMiddleware(history)];




if(env === "development"){
    //development일 때만 부르고 싶기 때문에 import 하지 않고 이렇게 작성함.
    const {logger} = require("redux-logger");
    middlewares.push(logger);
}



console.log(env);

const reducer = combineReducers({
    user,
    routing: routerReducer,
    i18nState
})

let store;
if(env === "development"){
    //development일 때만 부르고 싶기 때문에 import 하지 않고 이렇게 작성함.
    store = initialState =>
    //Reactotron.
    createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
}else{
    store = initialState => 
    createStore(reducer, applyMiddleware(...middlewares));
}




//history 오브젝트가 필요해서 export하는 것임. 미들웨어와 라우터랑 연결되어 있어서 다른데에서도 쓰려고..
export { history };

export default store();