function Login(){

    const submitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value; 

        const regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

        console.log(regexEmail.test(email));

        if (email === '' || password === '' ){
            console.log('Please fill in all fields');
        }

    }

    return (
      <>
        <h2>Sign in with your account</h2>
        <form onSubmit={submitHandler}>
          <label>
            <span>E-mail: </span>
            <input type="email" name="email" />
          </label>
          <br />
          <label>
            <span>Password: </span>
            <input type="password" name="password" />
          </label>
          <br />
          <button type="submit">Sign in</button>
        </form>
      </>
    );
}

export default Login;