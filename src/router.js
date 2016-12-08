import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Redirect } from 'react-router'
import createHistory from 'history/lib/createHashHistory'
const history = createHistory()

// 引入单个页面（包括嵌套的子页面）
import Template from './components/Template/template.js'
import Home from './components/Home/home.js'
import SubPage from './components/SubPage/subpage.js'
import Contact from './components/contact/contact.js'
import Properties from './components/Properties/properties.js'
import MoreProperties from './components/Properties/more.js'

// 配置路由，并将路由注入到id为init的DOM元素中
ReactDOM.render(
    <Router history={history} >        
        <Route path="/" component={Template} >
           <IndexRoute component={Home} />
           <Router path="/subpage/:title" component={SubPage} />
           <Router path="/contact" component={Contact} />
           <Router path="/properties" component={Properties} />
           <Router path="/properties/:name" component={MoreProperties} />
        </Route>
    </Router>
    , document.querySelector('#app')
)