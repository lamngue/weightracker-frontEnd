import React, {Component} from 'react';

class NavBar extends Component{
	constructor(props){
		super(props);
	}
	render(){
		if(this.props.isSignedIn){
			return(<nav style={{display: 'flex',justifyContent:'flex-end'}}>
				<p onClick={() => this.props.logIn('signout')} className ='f2 link dim black underline pa2 pointer gold'>Sign out</p>
			</nav>);
		}else{
			return(<nav style={{display: 'flex',justifyContent:'flex-end'}}>
				<p onClick={() => this.props.logIn('signIn')} className ='f2 link dim black underline pa2 pointer gold'>Sign in</p>
				<p onClick={() => this.props.logIn('register')} className ='f2 link dim black underline pa2 pointer gold'>Register</p>
			</nav>);
		}
	}
}

export default NavBar;