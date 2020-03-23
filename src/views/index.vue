<template>
  <div>
    <top-nav></top-nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import topNav from '@/components/top-nav.vue'

@Component({
  components: {
    topNav
  }
})
export default class Index extends Vue {

}
</script>
