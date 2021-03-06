import {connect} from "react-redux";
import Container from "./container";
import { actionCreators as userActions }  from "redux/modules/user"

//액션을 리듀서에게 디스패치 하는 방법
const mapDispatchToProps = ( dispatch, ownProps ) => {
    return {
        facebookLogin : ( access_token ) => {
            dispatch(userActions.facebookLogin(access_token));
        },
        createAccount : (username, password, email, name) =>{
            dispatch(userActions.createAccount(username, password, email, name));
        }
    }
}


export default connect(null, mapDispatchToProps )(Container);