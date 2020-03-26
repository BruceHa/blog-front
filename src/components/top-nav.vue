<template>
  <div class="wrap">
    <div class="container">
      <ul class="list">
        <li class="item" :class="path === '/article' ? 'item--active' : ''" @click="handleSwitch('/article')">文章</li>
        <li class="item" :class="path === '/project' ? 'item--active' : ''" @click="handleSwitch('/project')">项目</li>
        <li class="item" :class="path === '/note' ? 'item--active' : ''" @click="handleSwitch('/note')">随笔</li>
        <li class="item" :class="path === '/course' ? 'item--active' : ''" @click="handleSwitch('/course')">历程</li>
        <li class="item" :class="path === '/leave-msg' ? 'item--active' : ''" @click="handleSwitch('/leave-msg')">留言</li>
        <li class="item" :class="path === '/summary' ? 'item--active' : ''" @click="handleSwitch('/summary')">年度总结</li>
      </ul>
      <div class="operate">
        <div class="search" :class="active ? 'active' : ''">
          <input
            @focus="handleFocus"
            @blur="handleBlur"
            type="text"
            v-model="keyword"
            placeholder="搜索博客"
            @keyup.enter="search"
          >
        </div>
        <div class="btn-wrap">
          <div class="btn login" @click="openLoginModal">登录</div>
          <div class="btn register" @click="openRegisterModal">注册</div>
        </div>
      </div>
    </div>
    <div class="modal" v-if="model">
      <div class="mark"></div>
      <form class="content login" v-show="login">
        <div class="title-wrap">
          <div class="title" @click="submitLogin">登录</div>
          <div @click="closeModal">
            <i class="iconfont icon-close"></i>
          </div>
        </div>
        <div class="input">
          <input type="text" placeholder="请输入您的邮箱">
        </div>
        <div class="input">
          <input autocomplete="new-password" type="password" placeholder="请输入您的密码">
        </div>
        <div class="submit">登录</div>
        <div class="model-flex">
          <div class="register">没有账号?<span @click="showRegister" class="go-register">注册</span></div>
          <router-link tag="div" to="/forget-password" class="forget-password">忘记密码</router-link>
        </div>
      </form>
      <form class="content register" v-show="!login">
        <div class="title-wrap">
          <div class="title">注册</div>
          <div @click="closeModal">
            <i class="iconfont icon-close"></i>
          </div>
        </div>
        <div class="input">
          <input type="text" placeholder="请输入您的邮箱">
        </div>
        <div class="input">
          <input autocomplete="new-password" type="password" placeholder="请输入您的密码">
        </div>
        <div class="submit">注册</div>
        <div class="go-login" @click="openLoginModal">已有账号登录</div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { login, register } from '@/common/types'
import { sendRequest } from '@/common/service'

@Component
export default class TopNav extends Vue {
  path = ''
  active = false
  model = false
  login = false
  loginForm: login = {
    userName: '',
    password: ''
  }

  registerForm: register = {
    email: '',
    password: ''
  }

  keyword = ''

  created () {
    this.path = this.$route.path
  }

  handleSwitch (path: string) {
    if (this.$route.path === path) {
      return
    }
    this.path = path
    this.$router.push(path)
  }

  handleFocus () {
    this.active = true
  }

  handleBlur () {
    this.active = false
  }

  search () {
    if (!this.keyword) {
      return
    }

    sendRequest({
      url: '',
      method: 'get',
      params: {
        keyword: this.keyword
      }
    }).then((data) => {
      console.log(data)
    })
  }

  openLoginModal () {
    this.model = true
    this.login = true
  }

  openRegisterModal () {
    this.model = true
    this.login = false
  }

  showRegister () {
    this.login = false
  }

  closeModal () {
    this.model = false
    this.login = false
  }

  submitLogin () {
    if (!this.loginForm.userName) {
      return
    }

    if (!this.loginForm.password) {
      return
    }

    sendRequest({
      url: '',
      method: 'post',
      data: {
        username: this.loginForm.userName,
        password: this.loginForm.password
      }
    }).then((data) => {
      console.log(data)
    })
  }

  submitRegister () {
    if (!this.registerForm.email) {
      return
    }

    if (!this.registerForm.password) {
      return
    }

    sendRequest({
      url: '',
      method: 'post',
      data: {
        email: this.registerForm.email,
        password: this.registerForm.password
      }
    }).then((data) => {
      console.log(data)
    })
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  background-color: #fff;
  user-select: none;
  border-bottom: 1px solid #eee;
  height: 60px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .list {
      display: flex;
      height: 100%;

      .item {
        line-height: 60px;
        padding: 0 20px;
        color: #71777c;
        cursor: pointer;
        transition: all .5s;

        &:hover {
          color: #007fff;
        }
      }

      .item--active {
        color: #007fff;
      }
    }

    .operate {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .search {
        width: 150px;
        overflow: hidden;
        padding: 7px 12px;
        margin-right: 40px;
        border: 1px solid #eee;
        border-radius: 5px;
        font-size: 14px;
        transition: all .5s;

        input {
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          outline: none;
          border: none;
        }
      }

      .active {
        width: 200px;
        border-color: #007fff;
      }

      .btn-wrap {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: #007fff;

        .btn {
          cursor: pointer;

          &:hover {
            opacity: .7;
          }
        }

        .login {
          position: relative;

          &::after {
            content: '·';
            margin: 0 5px
          }
        }
      }
    }
  }

  .modal {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .mark {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, .2);
    }

    .content {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 360px;
      min-height: 360px;
      box-sizing: border-box;
      padding: 20px;
      transform: translate(-50%, -50%);
      background-color: #fff;

      .iconfont {
        font-size: 18px;
      }

      .title-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title {
          font-size: 18px;
          font-weight: bold;
        }
      }

      .input {
        overflow: hidden;
        width: 100%;
        margin: 20px 0;

        input {
          width: 100%;
          box-sizing: border-box;
          padding: 10px;
          font-size: 14px;
          border: 1px solid #eee;
          border-radius: 3px;
          transition: all .5s;

          &:focus {
            border: 1px solid #007fff;
          }
        }
      }

      .submit {
        width: 100%;
        padding: 10px 0;
        margin-bottom: 20px;
        color: #fff;
        border-radius: 3px;
        background-color: #007fff;
        font-size: 14px;
        text-align: center;
        cursor: pointer;

        &:active {
          opacity: .7;
        }
      }

      .model-flex {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .register {

          .go-register {
            margin-left: 10px;
            color: #007fff;
            cursor: pointer;
          }
        }

        .forget-password {
          color: #007fff;
        }
      }

      .go-login {
        color: #007fff;
        text-align: center;
        cursor: pointer;
      }
    }
  }
}
</style>
