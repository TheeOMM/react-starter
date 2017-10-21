/*
 * Author: Douglas Harrington Muhone
 *
 * Email: doug@theeomm.io
 *
 * Website: http://www.theeomm.io
 *
*/

import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import App from './components/App'
import NotFound from './components/NotFound'

const routes  = (
    <Router>
        <Switch>
            <Route exact path='/'  component={App}/>
            <Route component={NotFound} />
        </Switch>
    </Router>
)

export default routes