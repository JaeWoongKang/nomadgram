import React from "react";
import formStyles from "shared/formStyles.scss";
import propTypes from "prop-types";
import FacebookLogin from "react-facebook-login";

const SignupForm = (props, context) => (
    <div className={formStyles.formComponent}>
      <h3 className={formStyles.signupHeader}>
        {context.t("Sign up to see photos and videos from your friends.")}
      </h3>
      
      <span className={formStyles.facebookSignupLink}>
      <FacebookLogin
        appId="170159707011046"
        autoLoad={true}
        fields="name,email,picture"
        callback={props.handleFacebookLogin} 
        cssClass={formStyles.facebookLink}
        icon = "fa-facebook-official"
        textButton={context.t("Log in with Facebook")}
        />
      </span>
      <span className={formStyles.divider}>{context.t("or")}</span>
      <form className={formStyles.form}>
        <input 
          type="email" 
          placeholder={context.t("Email")} 
          className={formStyles.textInput} 
          onChange={props.handleInputChange} 
          name="email"
        />
        <input
          type="text" 
          placeholder={context.t("Full Name")} 
          className={formStyles.textInput} 
          onChange={props.handleInputChange}
          name="fullname"
        />
         
        <input
          type="username"
          placeholder={context.t("Username")}
          className={formStyles.textInput}
          onChange={props.handleInputChange}
          name="username"
        />
        <input
          type="password"
          placeholder={context.t("Password")}
          className={formStyles.textInput}
          onChange={props.handleInputChange}
          name="password"
        />
        <input 
          name="signupSubmit"
          type="submit" 
          value={context.t("Sign up")} 
          className={formStyles.button} 
          onSubmit={props.handleSubmit}/>
      </form>
      <p className={formStyles.terms}>
        {context.t("By signing up, you agree to our <span>Terms & Privacy Policy</span>.")}
      </p>
    </div>
  );
  SignupForm.propTypes = {
    emailValue:propTypes.string.isRequired,
    fullNameValue:propTypes.string.isRequired,
    usernameValue:propTypes.string.isRequired,
    passwordValue:propTypes.string.isRequired,
    handleInputChange : propTypes.func.isRequired,
    handleSubmit:propTypes.func.isRequired,
    handleFacebookLogin:propTypes.func.isRequired
  };  

  SignupForm.contextTypes = {
    t:propTypes.func.isRequired
  };
  export default SignupForm;