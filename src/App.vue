<template>
  <div id="app" class="app_main">
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-white rounded">
      <div class="app_header">
        <a class="navbar-brand" href="#">
          <img src="./assets/8{97P7HW]){DK2P220FY2~D.png" width="250" height="50" />
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/home" class="nav-link">首页</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/move" class="nav-link" href="#">电影</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/tv" class="nav-link" href="#">电视剧</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/varuety" class="nav-link" href="#">综艺</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/animation" class="nav-link" href="#">动漫</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/welfare" class="nav-link" href="#">福利</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/infomation" class="nav-link" href="#">咨询</router-link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

    <router-view />
    <footer>
      <p>XXX影视免费提供的完整版全集电影电视剧在线观看数据来自网络视频资源平台，本站未参与任何制作与下载，仅供WEB引用。</p>
      <p>Copyright © XXX影院XXX.COM</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang='scss' scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app_main{
  background: #f2f2f2;

}
.app_header {
  width: 1160px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
}
.navbar {
  padding: 10px 200px;
}
html,
body {
  width: 100%;
  height: 100%;
  color: #333;
}
* {
  padding: 0;
  margin: 0;
}
footer {
  padding: 20px 0;
  > p {
    padding: 10px 0;
  }
}
#cye-workaround-body{
  height: 0;
  
}
</style>

