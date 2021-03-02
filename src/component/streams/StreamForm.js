import React from 'redux'
import {Field,reduxForm}from 'redux-form'
const StreamForm = (props) =>{

const formInput=({input,meta,label})=>{
    return(
        <div className={`field`}>
            <label>{label}</label>
            <input {...input} autoComplete='off'/>
            {handleErrors(meta)}
        </div>
    )
}
const handleErrors=({error,touched})=>{
    if(error&&touched){
        return (
            <div className='ui error message'>
                <div className='header'>{error}</div>
            </div>
        )
    }
}
const onSubmit=(formValues)=>{
    props.onSubmit(formValues)
}
    return(
        <form className='ui form error' onSubmit={props.handleSubmit(onSubmit)}>
            <Field name='title' label='Title' component={formInput}/>
            <Field name='description' label='Description' component={formInput}/>
            <button className='ui primary button'>{props.button}</button>
        </form>
    )
}
const validate = (formValues) =>{
   const error={}
    if(!formValues.title){
        error.title='You Must Enter a Title'
    }
    if(!formValues.description){
        error.description='You Must Enter a description'
    }
    return error
}
export default reduxForm({
    form:'Stream-Form',
    validate
})(StreamForm)