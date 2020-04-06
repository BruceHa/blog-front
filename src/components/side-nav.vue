<template>
  <div class="wrap">
    <div class="avatar">
      <img src="~assets/avatar.jpg" alt="">
    </div>
    <h3 class="title">标签云</h3>
    <ul class="tags">
      <li class="item">
        <span class="item-text">
        vue-router
        </span>
      </li>
      <li class="item">
        <span class="item-text">
        performance
        </span>
      </li>
      <li class="item">
        <span class="item-text">
        关于博主
        </span>
        </li>
      <li class="item">
        <span class="item-text">
        javaScript
        </span>
      </li>
      <li class="item">
        <span class="item-text">
        vue.js
        </span>
      </li>
       <li class="item">
        <span class="item-text">
        vue-router
        </span>
      </li>
      <li class="item">
        <span class="item-text">
        performance
        </span>
      </li>
      <li class="item">
        <span class="item-text">
        关于博主
        </span>
        </li>
      <li class="item">
        <span class="item-text">
        javaScript
        </span>
      </li>
      <li class="item">
        <span class="item-text">
        vue.js
        </span>
      </li>
       <li class="item">
        <span class="item-text">
        vue-router
        </span>
      </li>
      <li class="item">
        <span class="item-text">
        performance
        </span>
      </li>
      <li class="item">
        <span class="item-text">
        关于博主
        </span>
        </li>
      <li class="item">
        <span class="item-text">
        javaScript
        </span>
      </li>
      <li class="item">
        <span class="item-text">
        vue.js
        </span>
      </li>
       <li class="item">
        <span class="item-text">
        vue-router
        </span>
      </li>
      <li class="item">
        <span class="item-text">
        performance
        </span>
      </li>
      <li class="item">
        <span class="item-text">
        关于博主
        </span>
        </li>
      <li class="item">
        <span class="item-text">
        javaScript
        </span>
      </li>
      <li class="item">
        <span class="item-text">
        vue.js
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { sendRequest } from 'common/service'

@Component
export default class SideNav extends Vue {
  count = 0
  tagList = []

  created () {
    // this.getTagList()
  }

  getTagList () {
    sendRequest({
      url: 'https://biaochenxuying.cn/api/getTagList',
      params: {
        keyword: '',
        pageNum: 1,
        pageSize: 100
      }
    }).then((data) => {
      this.tagList = data.list
    })
  }
}
</script>

<style lang="scss" scoped>
// @import '~scss/variable.scss';
.wrap {
  width: 250px;
  min-height: 500px;
  padding-bottom: 20px;
  background-color: #fff;
  user-select: none;

  .avatar {
    overflow: hidden;
    width: 100px;
    height: 100px;
    margin: 20px auto;
    border-radius: 50%;
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

  .title {
    margin: 20px auto;
    color: $grey-color;
    text-align: center;
    font-size: 15px;
  }

  .tags {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .item {
      padding: 10px 5px;
      cursor: pointer;

      .item-text {
        padding: 4px 10px;
        border-radius: 5px;
        color: $text-color;
        background-color: #eee;

        &:hover {
          color: $active-color;
        }
      }
    }
  }
}
</style>
