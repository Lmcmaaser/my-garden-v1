import React from 'react';
import './SignUp.css';

export default class SignUp extends React.Component{
    render() {
        return(
            <div>
                <h3>Sign Up!</h3>
                <form className="sign_up_form">
                    <div>
                        <label htmlFor="sign_up_form_user_name">
                            User name:
                        </label>
                        <Input
                            name='user_name'
                            type='text'
                            required
                            id="sign_up_form_user_name">
                        </Input>
                    </div>
                    <div>
                        <label htmlFor="sign_up_form_password">
                            Password:
                        </label>
                        <Input
                            name='password'
                            type='password'
                            required
                            id="sign_up_form_password">
                        </Input>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="submit-button"
                            aria-label="submit-button"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
