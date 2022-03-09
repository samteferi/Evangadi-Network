import React from "react";

const SignUp = () => {

	return (
		<div>
			<h1>SignUp</h1>
			<form >
				<label>First Name: </label>
				<input type="text" name="firstName" /><br/>
				<label>Last Name: </label>
				<input type="text" name="lastName" /><br/>
				<label>Email: </label>
				<input type="text" name="email" /><br/>
				<label>Password: </label>
                <input type="password" name="password" /><br/>
                <button>submit</button>
			</form>
		</div>
	);
};

export default SignUp;
