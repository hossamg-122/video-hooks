import React from 'react'
import {Router,Route} from 'react-router-dom'
import history from '../history'

import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import Header from './Header'


const App =()=>{

    return(
        <div className='ui container'>
            
            <Router history={history}>
            <Header/>
                <div>
                    <Route path='/' exact component={StreamList}/>
                    <Route path='/streams/show/:id' exact component={StreamShow}/>
                    <Route path='/streams/delete/:id' exact component={StreamDelete}/>
                    <Route path='/streams/new' exact component={StreamCreate}/>
                    <Route path='/streams/edit/:id' exact component={StreamEdit}/>
                </div>
            </Router>
        </div>
    )
}
export default App