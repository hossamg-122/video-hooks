import React, { useEffect} from 'react'
import { connect } from 'react-redux'
import {signIn,signOut} from '../actions'
const GoogleAuth = ({userStatues,signIn,signOut}) =>{
   
    useEffect(()=>{
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'190484275365-df7bh65pvl30lpu3do425ubo5tbid9a4.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                onAuthChange(window.gapi.auth2.getAuthInstance().isSignedIn.get())
                window.gapi.auth2.getAuthInstance().isSignedIn.listen(onAuthChange)
            })
        })
    },[])
    const onAuthChange = (isSignedIn) =>{
        if(isSignedIn){
            signIn(window.gapi.auth2.getAuthInstance().currentUser.get().getId())
        }else{
            signOut()
        }
    }
    const checkSigningIn = () => {
        if(userStatues === null){
            return null
        }else if(userStatues){
        return <button 
                    onClick={()=>{window.gapi.auth2.getAuthInstance().signOut()}} className='ui red google button'>
                <i className='google icon'></i>
                Sign Out</button>
        }else{
            return <button
            onClick={()=>{window.gapi.auth2.getAuthInstance().signIn()}} className='ui red google button'>
            <i className='google icon'></i>
            Sign In</button>
        }
    }
    
    return(
        <div style={{color:'white'}}>
            {checkSigningIn()}
        </div>
    )
}
const mapStateToProps=(state)=>{

    return {
        userStatues:state.userStatues.isSignedIn
    }
}
export default connect(mapStateToProps,{
    signIn,
    signOut
})(GoogleAuth)