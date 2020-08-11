import React, {Component} from "react";
import users from "../login";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    };

    handleClick = () => {
        console.log("Name : " + this.state.name);

        let isLoggedIn = false;
        users.map(user => {
            if (user.name === this.state.name && user.password === this.state.password) {
                isLoggedIn = true;
            }
            return isLoggedIn;
        });

        if (isLoggedIn) {
            console.log(this.props.history.push('/dashboard'));
            localStorage.setItem('login', JSON.stringify({name : this.state.name}));

        } else {
            alert("Incorrect user credential")
        }
    };

    render() {
        return (

            <div>
                <input type="text" name="name"
                       placeholder="Enter name"
                       onChange={this.handleChange}/> <br/>

                <input type="password"
                       name="password"
                       placeholder="Enter password"
                       onChange={this.handleChange}/> <br/>

                <button onClick={this.handleClick}> Login</button>
            </div>


        )
    }

}

export default Login;