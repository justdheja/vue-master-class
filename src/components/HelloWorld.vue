<template>
  <div class="hello">
    <h1>Welcome to the Forum!</h1>
    <div v-for="thread in threads">
      {{ thread.title }}
    </div>
  </div>
</template>

<script>
import sourceData from '@/data'
console.log(sourceData)
export default {
  name: 'HelloWorld',
  data () {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users
    }
  }
}
</script>
