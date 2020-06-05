<template>
  <div class="flex-grid">
    <UserProfileCard
      v-if="!edit"
      :user="user"
    />
    <UserProfileCardEditor
      v-else
      :user="user"
    />

    <div class="col-7 push-top">
      <div class="profile-header">
        <span class="text-lead">
            {{user.username}}'s recent activity
        </span>
        <a href="#">See only started threads?</a>
      </div>

      <hr>
      <PostList :posts="userPosts"/>
      <template v-if="userPosts.length < 1">
        <div class="text-center">
          <img src="https://i.ebayimg.com/images/g/2Y0AAOSwXeJYJ1n8/s-l400.jpg" style="opacity: .5;width:100%;max-width:350px">
          <h1>{{user.name}} has no activity yet</h1>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import PostList from '@/components/PostList'
import UserProfileCard from '@/components/UserProfileCard'
import UserProfileCardEditor from '@/components/UserProfileCardEditor'
import {mapActions, mapGetters} from 'vuex'
import asyncDataStatus from '@/mixins/asyncDataStatus'

export default {
  mixins: [asyncDataStatus],
  components: {
    PostList,
    UserProfileCard,
    UserProfileCardEditor
  },
  props: {
    edit: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/authUser'
    }),
    userPosts () {
      return this.$store.getters['users/userPosts'](this.user['.key'])
    }
  },
  methods: {
    ...mapActions('posts', ['fetchPosts'])
  },
  created () {
    if (!this.user.posts) {
      this.asyncDataStatus_fetched()
      this.$emit('ready')
      return false
    }
    this.$store.dispatch('posts/fetchPosts', { ids: this.user.posts }).then(() => {
      this.asyncDataStatus_fetched()
      this.$emit('ready')
    })
  }
}
</script>
