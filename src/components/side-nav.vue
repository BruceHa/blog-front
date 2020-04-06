<template>
  <div class="wrap">
    <div class="avatar">
      <img src="~assets/avatar.jpg" alt="">
    </div>
    <h3 class="title">标签云</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SideNav extends Vue {

}
</script>

<style lang="scss" scoped>
// @import '~scss/variable.scss';
.wrap {
  width: 250px;
  min-height: 500px;
  background-color: #fff;

  .avatar {
    overflow: hidden;
    width: 100px;
    height: 100px;
    margin: 20px auto;
    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .title {
    color: $grey-color;
    text-align: center;
    font-size: 15px;
  }
}
</style>
