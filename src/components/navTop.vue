<template>
    <div class="nav">
        <Row class="container">
            <Col span="4">
                <router-link to="/about">logo</router-link>
            </Col>
            <Col span="12">
                &nbsp;
            </Col>
            <Col span="6">
                <Menu  mode="horizontal" :theme="theme1" active-key="1">
                    <Menu-item v-for="(item, index) in 4" :key="index" :name="index">
                        <router-link to="/">首页</router-link>
                    </Menu-item>
                </Menu>
            </Col>
            <Col span="2">
                我的
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
  name: 'Nav',
  data () {
    return {
      theme1: 'light'
    }
  }
}
</script>
<style lang='less' scope>
    .nav{
        z-index: 901;
        font-size: 14px;
        line-height: 60px;
        box-shadow: 0 1px 1px rgba(0,0,0,.08);
        position: relative;
        .ivu-menu-horizontal.ivu-menu-light:after{
            display: none;
        }
        a{
            color: #515a6e;
        }
    }
</style>
