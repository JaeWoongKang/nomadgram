import React, {Component} from "react";
import propTypes from "prop-types";
import LoginForm from "./presenter";

class Container extends Component{
    state = {
        username:"",
        password:""
    }

    static propTypes = {
        facebookLogin: propTypes.func.isRequired,
        usernameLogin: propTypes.func.isRequired
    }

    render(){
        const{username,password} = this.state;
        return <LoginForm 
                    handleInputChange={this._handleInputChange}
                    handleSubmit = {this._handleSubmit}
                    handleFacebookLogin = {this._handleFacebookLogin}
                    usernameValue={username} 
                    passwordValue={password}

                />;
    }
    _handleInputChange = event =>{
        const {target:{value,name}} = event;
        this.setState({
            //name:value는 state의 변수에 name이 있을 때 이렇게 사용, [name]은 해당 인풋의 name값을 의미함.
            [name]:value
        });
    };
    _handleSubmit = event => {
        //리덕스 액션
        const { usernameLogin } = this.props;
        const { username, password } = this.state;
        event.preventDefault();
        usernameLogin( username, password );
    }
    _handleFacebookLogin = response => {
        const { facebookLogin } = this.props;
        facebookLogin(response.accessToken);
    }
}


export default Container;