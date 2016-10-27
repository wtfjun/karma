import React, { Component } from 'react'
import $ from 'jquery'
import './Menu.less'

import List from '../List/List'

export default class Bar extends Component{
	constructor(props) {
		super(props)
		this.state = {
      menuPosition: 'center',
      menuName: ''
		}
	}

  //监听memu点击
  onClickMenuAction() {
    let that = this
    $('#menu span').click(function(event) {
      /* Act on the event */
      let mp = that.state.menuPosition
      //获得menu名字
      let mn = $(this).html()
      //点击的不是首页时
      if(mn != '首页') {
        if(mp == 'center') {
          $('#menu').removeClass('center-menu').addClass('left-top-menu')
          $(this).addClass('black-menu')
          that.setState({ 
            menuPosition: 'leftTop',
            menuName: mn
          })
        }
      }
      else {
        $('#menu').removeClass('left-top-menu').addClass('center-menu')
        $(this).siblings('span').removeClass('black-menu')
        that.setState({ 
          menuPosition: 'center',
          menuName: ''
        })
      }
    })
  }

  //组件渲染后触发
  componentDidMount() {
    this.onClickMenuAction()
  }

  //组件的props或者state即将发生更新时触发
  //1、当点击的不是首页菜单时触发，组件即将更新
  componentWillUpdate(nextProps, nextState) {
    //判断当前的menuName是否改变
    //由 '' 到 个人技术 nextState.menuName 为 个人技术
    console.log('Menu组件的componentWillUpdate方法的this.state.menuName：'+ this.state.menuName)
    console.log('Menu组件的componentWillUpdate方法的nextState.menuName：'+ nextState.menuName)
  }

  render() {
    return (
      <div>
        <div id="menu" className="center-menu">
          <span>首页</span>
          <span>个人介绍</span>
          <span>技术文章</span>
          <span>生活感想</span>
        </div>
        <List listTitle={ this.state.menuName } />
      </div>     
    )
  }
}