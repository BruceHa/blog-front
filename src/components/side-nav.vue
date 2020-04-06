<template>
  <div class="wrap">
    <div class="avatar">
      <img src="~assets/avatar.jpg" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SideNav extends Vue {

}
</script>

<style lang="scss" scoped>
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
}
</style>
