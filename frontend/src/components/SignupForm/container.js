import React,{Component} from "react";
import SignupForm from "./presenter";


class Container extends Component{
    state = {
        email:"",
        fullName : "",
        username : "",
        password :""
    }
    render(){
        const{email,fullName,username,password} = this.state;
        return <SignupForm 
                    handleInputChange={this._handleInputChange}
                    handleSubmit = {this._handleSubmit}
                    emailValue={email}
                    fullNameValue={fullName}
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
        event.preventDefault();
        console.log(this.setState);
        //리덕스 액션
    }
}

export default Container;