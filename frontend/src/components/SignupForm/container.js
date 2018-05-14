import React,{Component} from "react";
import SignupForm from "./presenter";
import propTypes from "prop-types";

class Container extends Component{
    state = {
        email:"",
        name : "",
        username : "",
        password :""
    }

    static propTypes = {
        facebookLogin: propTypes.func.isRequired,
        createAccount: propTypes.func.isRequired
    }
    render(){
        const{email,name,username,password} = this.state;
        return <SignupForm 
                    handleInputChange={this._handleInputChange}
                    handleSubmit = {this._handleSubmit}
                    handleFacebookLogin = {this._handleFacebookLogin}
                    emailValue={email}
                    nameValue={name}
                    usernameValue={username} 
                    passwordValue={password}/>;
    }
    _handleInputChange = event =>{
        const {target:{value,name}} = event;
        console.log(this.state);
        this.setState({
            //name:value는 state의 변수에 name이 있을 때 이렇게 사용, [name]은 해당 인풋의 name값을 의미함.
            [name]:value
        });
    };
    _handleSubmit = event => {
        //리덕스 액션
        const { email, name, password, username } = this.state;
        const { createAccount } = this.props;
        createAccount(username, password, email, name);
    }
    _handleFacebookLogin = response => {
        const { facebookLogin } = this.props;
        facebookLogin(response.accessToken);
    }

}

export default Container;