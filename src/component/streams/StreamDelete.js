import React, { useEffect } from 'react'
import Modal from '../Modal'
import { Link } from 'react-router-dom'
import history from '../../history'
import { deleteStream, getStream } from '../../actions'
import { connect } from 'react-redux'

const StreamDelete = ({stream,match,getStream,deleteStream}) =>{
    useEffect(()=>{
        getStream(match.params.id)
    },[])
    const action =()=>{
        return (<React.Fragment>
            <button className= 'ui button negative' onClick={()=>{deleteStream(match.params.id)}}>Delete</button>
            <Link className='ui button' to='/'>Cancel</Link>
        </React.Fragment>)
    }
    return(
        <div>
            StreamDelete
            <Modal header='Delete Stream' content={`Are You Sure You Want To Delete ${stream?stream.title:''}?`} action={action()} onDismiss={()=>history.push('/')}/>
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    return{
        stream:state.streams[props.match.params.id]
    }
}
export default connect(mapStateToProps,{
    getStream,
    deleteStream
})(StreamDelete);