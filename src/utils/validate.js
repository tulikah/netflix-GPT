export const validateEmail = (email, pwd) => {
    // const isEmailValid =  String(email)
    //   .toLowerCase()
    //   .match(
        const isEmailValid = /(.+)@(.+){2,}\.(.+){2,}/.test(email)
    //   );

      const isPwdValid =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(pwd);

      if(!isEmailValid) return "Email Id is not valid";
      if(!isPwdValid) return "Password is not valid";

      return null
  };