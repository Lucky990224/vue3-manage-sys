# Axios 跨域的解决方法
## 1. CORS
CORS 需要服务器设置 Access-Control-Allow-Origin 响应头，表示该资源可以被指定的域进行跨域访问。

// 服务端代码  
res.setHeader('Access-Control-Allow-Origin', '*'); 
## 2. 服务端启用 CORS
比如 Node.js  Express 启用 CORS:

    const express = require('express')
    const app = express()
    
    app.use(function (req, res, next) {
    
    // 启用 CORS
    res.header('Access-Control-Allow-Origin', '*');
    
    next();  
    })
## 3. JSONP
    JSONP 的原理是动态插入

        import axios from 'axios';
    
    axios.get('/api/user?callback=fetchUser');
    
    function fetchUser(user) {
    console.log(user); 
    }
    服务端返回 JSON 数据并带上函数调用:

    fetchUser({
    name: 'jack'
    })
## 4. 代理服务器
在开发环境下，可以在本地启动一个代理服务器，实现跨域访问。在下面的例子中，客户端可以通过访问代理服务器的 /api/data 路由来获取目标服务器上的数据。

    // Node.js 代理服务器
    const express = require('express');
    const axios = require('axios');
    const app = express();
    const port = 3000;
    
    app.use(express.json());
    
    app.get('/api/data', async (req, res) => {
    try {
        const response = await axios.get('https://目标服务器的URL/data');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from the target server' });
    }
    });
    
    app.listen(port, () => {
    console.log(`Proxy server is running on http://localhost:${port}`);
    });
