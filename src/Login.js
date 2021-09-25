class Login extends Component {
    constructor() {
        super()
        this.state={ clq: 'gizay', isLoggedIn: (localStorage.getItem("userToken") !== "") }
        //if u use mapstatetoprops, and u use constructor, apparently u need to initate the state object. otherwise error
    }

    handleLogin = (data) => {
        //call up dispatch and action creator to end data
        const formData = {email: data.email, password: data.password}

        const configObject = {  
    
            method: "POST",  
        
            headers: {    
                "Content-Type": "application/json",    
                "Accept": "application/json"  },  
        
            body: JSON.stringify(formData)/* Your data goes here */
        
        }

        fetch("http://localhost:3000/api/auth_user", configObject).
        then(function(response) {  return response.json();}).
        then(function(json) {  
            localStorage.setItem("userToken", json.auth_token)
            localStorage.setItem("userid", json.user.id)


            console.log(localStorage.getItem("userToken"))

        })

        // this.props.addToken(data)
    
    }

    testmethod = () => {
        console.log('testing with test method in Login component')
    }


    renderRedirect = () => {
        if ( this.state.isLoggedIn === true )  {
            return <p>You are logged in. Go to <a href="/">homepage</a></p>
        } else {
            return (<div>
                <p>Please log in</p>
                <LoginForm login={this.handleLogin} />

                </div>)
        }
    }

    updateLoginStatus = () => {
        this.setState({ isLoggedIn: (localStorage.getItem("userToken") !== "")})
    }

    componentDidMount() {
        this.interval = setInterval(this.updateLoginStatus, 1000)
      }
    
      componentWillUnmount() {
        clearInterval(this.interval)
      }
    

    render() {
        // if ( localStorage.getItem("userToken") === "") {
            return (
                <div>
                  <h3>Login component</h3>
                  <small>current user token: {localStorage.getItem("userToken")}</small>
                  {this.renderRedirect()}
      
              </div>
              );
        // } else {
        //     return (<Redirect to="/" ></Redirect>)
        // }
    }


    
}
