import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import StreamForm from './StreamForm'
import {updateStream,getStream} from '../../actions'
const StreamEdit = ({stream,match,updateStream,getStream}) =>{
    useEffect(()=>{
             getStream(match.params.id)
    })
   const onSubmit = (formValues)=>{
       console.log(formValues)
       updateStream(formValues,match.params.id)
   }
   const renderInitialValues=()=>{
       if(stream){
        return{title:stream.title,description:stream.description}
       } 
   }
    return(
        <div>
            <h3>Edit Your Stream</h3>
            <StreamForm initialValues={renderInitialValues()} button='Edit' onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    return {
        stream:state.streams[props.match.params.id]
    }
}

export default connect(mapStateToProps,{
    updateStream,
    getStream,
})(StreamEdit);