import React from 'react';

export default class AuthPage extends React.Component {
    state = {
        emailEl: React.createRef(),
        passwordEl: React.createRef()
    }

    submitHandler = async (event) => {
        event.preventDefault()
        const email = this.state.emailEl.current.value
        const password = this.state.passwordEl.current.value

        const requestBody = {
            query: `
                mutation {
                    createUser(userInput: {email: "${email}", password: "${password}"}) {
                        _id
                        email
                        password
                    }
                }
            `
        }
        let res = await fetch('http://localhost:4000/graphql',{
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let result = await res.json()
        console.log(result);
        
    }

    render (){
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label for="email">email</label>
                    <input type="email" id="email" ref={this.state.emailEl}></input>
                </div>
                <div>
                    <label for="password">password</label>
                    <input type="password" id="password" ref={this.state.passwordEl}></input>
                </div>
                <div>
                    <button type="submit">submit</button>
                </div>
            </form>
        )
    }
}