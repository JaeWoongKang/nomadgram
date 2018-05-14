import React from "react";
// import Ionicon from "react-ionicons";
import formStyles from "shared/formStyles.scss";
import propTypes from "prop-types";
import FacebookLogin from "react-facebook-login";


const LoginForm = (props, context) => (
    <div className={formStyles.formComponent}>
      <form className={formStyles.form} onSubmit={props.handleSubmit}>
        <input 
          type="text" placeholder={context.t("Username")} 
          className={formStyles.textInput} 
          value={props.usernameValue} 
          onChange = {props.handleInputChange}
          name="username"
        />
        <input
          type="password"
          placeholder={context.t("Password")}
          className={formStyles.textInput}
          value={props.passwordValue}
          onChange = {props.handleInputChange}
          name="password"
        />
        <input 
          type="submit" 
          value={context.t("Log in")} 
          className={formStyles.button} 
        />
      </form>
      <span className={formStyles.divider}>{context.t("or")}</span>
      <span className={formStyles.facebookLink}>
      <FacebookLogin
        appId="170159707011046"
        autoLoad={false}
        fields="name,email,picture"
        callback={props.handleFacebookLogin} 
        cssClass={formStyles.facebookLink}
        icon = "fa-facebook-official"
        textButton={context.t("Log in with Facebook")}
        />
      </span>
      <span className={formStyles.forgotLink}>{context.t("Forgot password?")}</span>
    </div>
  );
  LoginForm.propTypes = {
    usernameValue:propTypes.string.isRequired,
    passwordValue:propTypes.string.isRequired,
    handleInputChange : propTypes.func.isRequired,
    handleSubmit:propTypes.func.isRequired,
    handleFacebookLogin : propTypes.func.isRequired
  };  
  LoginForm.contextTypes = {
    t:propTypes.func.isRequired
  };

  export default LoginForm;