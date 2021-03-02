import {SIGN_IN,SIGN_OUT,CREATE_STREAM,GET_STREAMS, GET_STREAM, UPDATE_STREAM, DELETE_STREAM} from './types'
import streams from '../api/streams'
import history from '../history'
export const signIn = (userId) =>{
    return {
        type:SIGN_IN,
        payload:userId
    }
}
export const signOut = () =>{
    return {
        type:SIGN_OUT
    }
}
export const createStream = (formValues)=>{
    return async (dispatch,getState)=>{
        const {userId}=getState().userStatues
           const response = await streams.post('/streams',{...formValues,userId})
           dispatch({
               type:CREATE_STREAM,
               payload:response.data
           })  
           history.push('/')  
    }
}
export const getStreams = () =>{
    return async(dispatch)=>{
        const response = await streams.get('/streams')
        dispatch({
            type:GET_STREAMS,
            payload:response.data
        })
    }
}
export const getStream = (id) =>{
    return async(dispatch)=>{
        const response = await streams.get(`/streams/${id}`)
        dispatch({
            type:GET_STREAM,
            payload:response.data
        })
    }
}
export const updateStream=(formValues,id)=>{
    return async (dispatch)=>{
        const response = await streams.patch(`/streams/${id}`,formValues)
        dispatch({
            type:UPDATE_STREAM,
            payload:response.data
        })
        history.push('/')
    }
}
export const deleteStream=(id)=>{
    return async (dispatch)=>{
         await streams.delete(`/streams/${id}`)
        dispatch({
            type:DELETE_STREAM,
            payload:id
        })
        history.push('/')
    }
}