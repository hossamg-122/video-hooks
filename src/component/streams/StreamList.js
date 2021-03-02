import React, { useEffect } from 'react'
import{connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {getStreams} from '../../actions'
import history from '../../history'
const StreamList = ({streams,getStreams,currentUserId}) =>{
    useEffect(()=>{
        getStreams()
    },[])

    const renderAdmin=(stream)=>{
        if(stream.userId===currentUserId){
            return(
                <div className='right floated content'>
                    <Link className='ui button primary' to={`/streams/edit/${stream.id}`}>
                        Edit
                    </Link>
                    <Link className='ui button negative' to={`/streams/delete/${stream.id}`}>
                        Delete
                    </Link>
                </div>
            )
        }
    }
    const renderedStreams = streams.map((stream)=>{
        
        return(
            <div className='item' key ={stream.id}>
                {renderAdmin(stream)}
                <i className='large middle aligned icon camera'/>
                <div className='content'>
                    <Link to={`/streams/show/${stream.id}`} className='header'>{stream.title}</Link>
                    <div className='description'>
                        {stream.description}
                    </div>
                </div>
            </div>
        )
    })

    const renderCreateStream=()=>{
        if(currentUserId){
            return(
                <Link className='ui button primary' to='/streams/new'>
                Create a Stream
            </Link>
            )
        }
    }
    return(
        <div>
            <h2>Streams</h2>
            <div className='ui celled list'>
                {renderedStreams}
            </div>
            <div  style={{textAlign:'right'}}>
               {renderCreateStream()}
            </div>
        </div>
        
    )
}
const mapStateToProps=(state)=>{
    console.log(state)
    return{
        streams:Object.values(state.streams),
        currentUserId:state.userStatues.userId
    }
}
export default connect(mapStateToProps,{
    getStreams
})(StreamList);