<template>
  <div class="hello">
    我是子，现在接收到父级的模块是:{{ selfMol }}<br />

    看看父级的store count: {{ $store.state.count }}; count计算属性的值:{{
      parentCount
    }}
    <button @click="parentCountIncrease2">在子级增加count,每次加2</button><br />

    <button @click="changeLoginName">改父级parentGlobalState的登录名</button>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      selfMol: null,
    };
  },
  computed: {
    parentCount() {
      return this.$store.state.count;
    },
  },
  mounted() {
    console.log("子mounted", this, this.$store);
    this.selfMol = Vue.prototype.molName;
  },
  methods: {
    parentCountIncrease2() {
      this.$store.commit("INCREMENT", 2);
    },
    changeLoginName() {
      this.$setGlobalState({
        loginName: "小叮当" + Math.random().toFixed(2),
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
