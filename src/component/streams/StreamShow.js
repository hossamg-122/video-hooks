import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getStream } from '../../actions'
const StreamShow = ({stream,getStream,match}) =>{
    useEffect(()=>{
        getStream(match.params.id)
    },[])
    return(
        <div>
            <h1>{stream?stream.title:''}</h1>
            <h5>{stream?stream.description:''}</h5>
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    return{
        stream:state.streams[props.match.params.id]
    }
}
export default connect(mapStateToProps,{
    getStream
})(StreamShow);