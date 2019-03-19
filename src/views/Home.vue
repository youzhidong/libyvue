<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Button />
    <Button>Default</Button>
    <pre v-highlight>
      <code class="css">
        .body{
          width:20px;
        }
      </code>

      <code class="javascript">
        var a = 20;
        alert(a)
      </code>

      <code class="html">
        {{temp}}
      </code>
    </pre>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from 'examples/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  data () {
    return {
      temp: `
        <template>
          <div class="about">
            <h1>This is an about page</h1>
          </div>
        </template>
      `
    }
  }
}
</script>
