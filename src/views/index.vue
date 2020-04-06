<template>
  <div class="wrap">
    <top-nav></top-nav>
    <div class="main">
      <router-view class="content"></router-view>
      <side-nav class="side"></side-nav>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import topNav from '@/components/top-nav.vue'
import sideNav from '@/components/side-nav.vue'

@Component({
  components: {
    topNav,
    sideNav
  }
})
export default class Index extends Vue {

}
</script>

<style lang="scss" scoped>
.wrap {

  .main {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 960px;
    margin: 20px auto;

    .content {
      width: 700px;
      margin-right: 10px;
      background-color: #fff;
    }
  }
}
</style>
