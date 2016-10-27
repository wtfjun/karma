//webpack 入口文件
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Menu from './components/Menu/Menu'
import '../css/init.less'

const render = () => ReactDom.render(
	<Menu />, document.getElementById('init')
)

render()
