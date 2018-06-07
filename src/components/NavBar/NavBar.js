import React, {Component} from 'react';

class NavBar extends Component{
	constructor(props){
		super(props);
	}
	render(){
		if(this.props.isSignedIn){
			return(<nav style={{display: 'flex',justifyContent:'flex-end'}}>
				<p onClick={() => this.props.logIn('signout')} className ='f3 link dim black underline pa2 pointer gold'>Sign out</p>
				<p onClick={() => this.props.logIn('delete')} className ='f3 link dim black underline pa2 pointer gold'>Delete Account</p>
			</nav>);
		}else{
			return(<nav style={{display: 'flex',justifyContent:'flex-end'}}>
				<p onClick={() => this.props.logIn('signIn')} className ='f3 link dim black underline pa2 pointer gold'>Sign in</p>
				<p onClick={() => this.props.logIn('register')} className ='f3 link dim black underline pa2 pointer gold'>Register</p>
				<p onClick={() => this.props.logIn('delete')} className ='f3 link dim black underline pa2 pointer gold'>Delete Account</p>
			</nav>);
		}
	}
}

export default NavBar;