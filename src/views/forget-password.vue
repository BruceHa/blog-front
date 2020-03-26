<template>
  <div>{{ title }}</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class ForgetPassword extends Vue {
  title = '忘记密码'
}
</script>

<style lang="scss" scoped>

</style>
