# Vue3与后端通信方式
* 注意：代理服务器转发的请求不会显示在F12抓包的请求上
## Axios 【常用】
一个流行的 Promise 驱动的 HTTP 库，用于发送和接收 HTTP 请求。
提供了一个简洁且可扩展的 API，用于处理各种 HTTP 操作。

### Axios请求、响应、错误处理

#### 请求结构/API
* 请求类型：method【get、post、update、put等】
* 请求路径：url
* 请求体数据：data【】
* 请求的查询参数： params【放在url后面的以key：value形式】
* 请求头：headers

#### Axios响应对象  .then(reponse)
* 响应头： headers
* 响应数据： response.data
* 状态码： response。status
* 状态文本： statusText
* 响应设置： config


#### Axios错误处理  .catch(error)
* catch(error) 异常中的字段:
    * error.response
        * 当 axios 获得的响应 status code 超出了 2xx 的范围时, axios 将会抛出异常.
        * 实际获取到的响应数据会被赋值给 异常对象的 response 字段
    * error.request
        * 当 axios 请求得不到响应的时候, 异常中会有 request 字段
* 通过在 .catch(error) 的回调中对 error.response 和 error.request 进行条件判断, 就可以区分以下两种请求异常:
    * 1. 请求所得到的响应的状态码超出了 2xx
    * 2. 请求完全得不到响应.

### Axios使用实例
* 安装 Axios    
` npm install axios `

* 1、使用 Axios 实例  ---------- 独立性强
    ```
        import axios from 'axios';

        // 创建一个具有自定义 baseURL 和超时时间的 axios 实例
        const myAxiosInstance = axios.create({
            baseURL: 'https://example.com/api/',
            timeout: 10000,
        });

        // 使用实例发送请求
        myAxiosInstance.get('/users').then((response) => {
            console.log(response.data);
        });

    ```
* 2、在组件中使用 Axios 【使用 Composition API】
    ```
        import { ref } from 'vue';
        import axios from 'axios';

        export default {
            setup() {
                const data = ref(null);

                const fetchData = async () => {
                const response = await axios.get('/api/data');
                data.value = response.data;
                };

                return {
                data,
                fetchData
                };
            }
        };

    ```
* 使用插件，就是将axios跟vue3绑定
    ```
        import Vue from 'vue';
        import axios from 'axios';

        Vue.use({
            install(app) {
                app.config.globalProperties.$axios = axios;
            }
        });

    ```
    然后通过 this.$axios访问 Axios 实例：
    ```
        export default {
        methods: {
            async fetchData() {
                const response = await this.$axios.get('/api/data');
                // ...
                }
            }
        };

    ```







## Fetch API 【常用】
一个原生 JavaScript API，用于发送和接收 HTTP 请求。
提供了一个更低级的 API，允许对请求和响应进行更精细的控制。

## XMLHttpRequests (XHR)
一个较旧的 JavaScript API，用于发送和接收 HTTP 请求。
仍然被一些浏览器和应用程序支持，但已不再是首选方法。

## WebSocket  
一个双向通信协议，允许客户端和服务器在建立连接后实时交换数据。
适用于需要实时更新或持续通信的应用程序。

## Server-Sent Events (SSE)

一种单向通信机制，允许服务器向客户端推送事件。
适用于需要将数据从服务器异步推送到客户端的应用程序。  

## GraphQL
一种查询语言，用于从后端获取数据。
提供了一种灵活且高效的方式来获取所需的确切数据，并减少不必要的网络请求。  

## Socket.IO

一个用于实时通信的库，它封装了 WebSocket 和其他底层协议。
提供了一个易于使用的 API，用于建立和管理实时连接。