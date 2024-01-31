<template>
    <div class="auth-main-area">
        <div class="top-area">
            <div class="top-image-div">
            </div>
        </div>
        <div class="sys-info-area">
            <div style="height: 64%;font-size: 60px; font-weight: 550;">
                {{ 111 }}
            </div>
            <div style="height: 36%;text-align: right;">
                {{ 111 }}
            </div>
        </div>
        <div class="router-login-area">
            <RouterView></RouterView>
        </div>
    </div>
</template>
<style scoped>
* {
    box-sizing: border-box;
    position: relative;
}

.auth-main-area {
    background-color: rgb(201, 227, 233);
    width: 100%;
    height: 100%;
}

.top-area {
    width: 100%;
    height: 60px;
    background-color: #409eff;
}
.top-image-div {
    width: 50%;
    height: 100%;
    float: left;
    padding-top: 15px;
    padding-left: 50px;
    text-align: left;
}

.top-contact-div {
    position: absolute;
    width: 200px;
    height: 100%;
    float: left;
    text-align: right;
    color: aliceblue;
    padding-top: 10px;
    padding-right: 40px;
    font-size: 20px;
    right: 230px;
    --el-text-color-regular: white;
    --el-color-primary: rgb(165, 240, 243);
}

.top-image {
    width: 100px;
    height: auto;
}

.top-menu-item {
    position: relative;
    display: inline-block;
    color: rgb(139, 144, 147);
    width: 150px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    vertical-align: middle;
    border-radius: 3px;
}
a {
    text-decoration: none;
    transition: 0.4s;
}

.top-menu-item:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
}

.router-link-active {
    color: rgb(231, 240, 246);
}
/*********************************************************/
.logo-area {
    width: 100%;
    height: 150px;
    padding-top: 30px;
}
.logo-image {
    width: 300px;
    height: auto;
}
.sys-info-area {
    width: 950px;
    height: 150px;
    margin-left: calc(50% - 475px);
    margin-top: 80px;
    color: #409eff;
    font-size: 30px;
}
/*********************************************************/
.router-login-area {
    width: 100%;
    height: calc(100% - 260px);
}
</style>