<template>
  <div class="home">
    <div class="bg"></div>
    <div class="center">
      <div class="avator">
        <img src="~assets/avatar.jpg" alt="">
      </div>
      <ul class="router">
        <router-link
          tag="a"
          to="/article"
          class="item"
        >文章</router-link>
        <router-link
          tag="a"
          to="/project"
          class="item"
        >项目</router-link>
        <router-link
          tag="a"
          to="/note"
          class="item"
        >随笔</router-link>
        <a
          target="_blank"
          href="https://github.com/"
          class="item"
        >Github</a>
        <a
          target="_blank"
          href="https://juejin.im/user/5ce55f8ee51d4555fc1acc05"
          class="item"
        >掘金</a>
      </ul>
      <p class="title">No pain, no gain !</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Home extends Vue {
  list: [] = []
}
</script>

<style lang="scss" scoped>
.home {

  .bg {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

  .center {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -20%);
    text-align: center;
    user-select: none;

    .avator {
      overflow: hidden;
      width: 100px;
      height: 100px;
      margin: 0 auto;
      border-radius: 50%;
      box-shadow: 0 0 1px 1px #fff;
      transition: all .5s;

      img {
        width: 100%;
        height: 100%;
      }

      &:hover {
        width: 150px;
        height: 150px;
      }
    }

    .router {

      .item {
        display: block;
        padding: 20px 0;
        transition: all .5s;
        font-size: 26px;
        cursor: pointer;

        &:hover {
          font-size: 36px;
        }
      }
    }

    .title {
      font-weight: bold;
      font-size: 36px;
    }
  }
}
</style>
