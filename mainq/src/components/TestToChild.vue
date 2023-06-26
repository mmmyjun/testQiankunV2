<template>
  <div class="testToChild">
    父级当前模块{{ parentMol
    }}<button @click="changeMol">改变传递给子的模块</button><br />

    store当前数量:{{ $store.state.count
    }}<button @click="$store.commit('INCREMENT', 1)">
      在父级增加count,每次加1</button
    ><br />

    父级parentGlobalState:{{ parentGlobalState }}

    <hr />
    <div id="container" style="background: aliceblue"></div>
  </div>
</template>

<script>
import { loadMicroApp, initGlobalState } from "qiankun";

export default {
  name: "testToChild",
  props: {
    msg: String,
  },
  data() {
    return {
      parentMol: "A模块",
      microApp: null,

      parentGlobalState: {
        loginName: "parent name",
      },
      actions: null,
    };
  },
  mounted() {
    console.log(this, "this", this.$store);
    this.microApp = loadMicroApp({
      entry: "http://localhost:8888",
      container: "#container",
      props: {
        molName: this.parentMol,
        parentStore: this.$store,
      },
    });

    this.parentGlobalState = { loginName: "父级设置的登录名" };
    this.actions = initGlobalState(this.parentGlobalState);
    this.actions.onGlobalStateChange((state, prev) => {
      // state: 变更后的状态; prev 变更前的状态
      console.log("欸嘿", state, prev);
      this.parentGlobalState = state;
    });
    this.actions.setGlobalState(this.parentGlobalState);
  },
  methods: {
    changeMol() {
      this.microApp.update({ molName: "模块" + Math.random().toFixed(1) });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
