<template>
  <div class="wrap">
    <article-list></article-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import articleList from '@/components/article-list.vue'

@Component({
  components: {
    articleList
  }
})
export default class Article extends Vue {
}
</script>

<style lang="scss" scoped>
.wrap {
  box-sizing: border-box;
}
</style>
