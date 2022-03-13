import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import LoginForm from '../login-form/login-form'
import Sidebar from '../sidebar/sidebar'
import Main from '../main/main'

// const getData = async () => {
//     const res = await axios.get('https://geolocation-db.com/json/')
//     // console.log(res.data);
//     return res.data;
// }

export default class App extends Component {
  state = {
    email: null,
    name: null,
    profilePic: null,
    trigger: false,
  }

  onSubmitted = (resp) => {
    // console.log(resp);
    // console.log(resp.profileObj);
    if(resp.profileObj.email.substr(-13) === '@phystech.edu') {
      this.setState({
        email: resp.profileObj.email,
        username: resp.profileObj.name,
        profilePic: resp.profileObj.imageUrl
      });
    } else {
      alert('Пожалуйста, используйте почту @phystech.edu');
    }
    
  }

  onToggled = (resp) => {
    console.log(resp);
  }

  render() {
    return (
      <Routes>
        <Route path='/' exact={true} element={<React.Fragment><Sidebar data={this.state}/><Main /></React.Fragment>} />
        <Route path='/login/' element={<React.Fragment><Sidebar data={this.state}/><LoginForm onSubmitted={this.onSubmitted}/></React.Fragment>} />
      </Routes>
    )
  }
}