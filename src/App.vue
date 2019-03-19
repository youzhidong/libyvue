<template>
  <div id="app">
      <Nav-top />
      <div class="line"></div>
      <Row class="container">
        <Col span="4">
          <Nav-left />
        </Col>
        <Col span="20" class="rigth-content">
          <router-view/>
        </Col>
      </Row>
  </div>
</template>

<script>
import NavTop from '@/components/navTop.vue'
import NavLeft from '@/components/navLeft.vue'
export default {
  name: 'home',
  components: {
    NavTop,
    NavLeft
  }
}
</script>
<style lang="less">
  .rigth-content{
    padding-left: 20px;
  }
</style>
