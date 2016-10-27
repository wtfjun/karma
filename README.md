创建好src，在src里创建html、js、css、img，这些将成为我们的开发目录

在src/js 创建index.js文件，项目入口文件，也就是webpack入口文件

安装webpack，安转webpack-dev-server，这是webpack基于8080端口的本地服务器，利用socket.
io实现热加载，实时更新入口文件index.js的内容，不用重新执行webpack命令

package.json中加入这个"start": "NODE_ENV=development webpack-dev-server --hot  
--inline"，表示在终端输入命令npm start就设置环境变量，并执行webpack-dev-server --hot --inline命令

    "babel": "^6.5.2",
    "babel-core": "^6.17.0",
    "babel-loader": "^6.2.5",
    "babel-preset-es2015": "^6.16.0",
    "babel-preset-react": "^6.16.0"
    babel依赖，react以及一些库需要

主要探讨
		componentDidMount
		componentWillUpdate
		componentWillReceiveProps
的使用