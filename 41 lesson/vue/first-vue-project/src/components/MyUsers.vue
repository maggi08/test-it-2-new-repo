<template>
  <h2>My Users</h2>

  <div id="usersContainer" class="users">
    <h3>Users</h3>

    <div class="users-cont">
      <MyUser
        v-for="(user, index) in users"
        :key="index"
        :num="index + 1"
        :img="user.avatar"
        :name="user.first_name + ' ' + user.last_name"
      />
    </div>

    <UiSpinner v-if="loading" />

    <button v-else-if="totalPage !== currentPage" @click="loadMore">Load more</button>
  </div>
</template>

<script>
import UiSpinner from '@/components/UiSpinner.vue'
import MyUser from '@/components/MyUser.vue'
export default {
  components: {
    UiSpinner,
    MyUser
  },
  data() {
    return {
      BASE_URL: 'https://reqres.in/api/',
      currentPage: 1,
      totalPage: 0,
      users: [],
      loading: true
    }
  },
  mounted() {
    this.fetchUsers()
  },
  methods: {
    async fetchUser(id) {
      let response = await fetch(`${this.BASE_URL}users/${id}`)
      let results = await response.text()
      alert(results)
    },
    async fetchUsers() {
      this.loading = true

      let params = {
        per_page: 2,
        page: this.currentPage
      }

      const response = await fetch(`${this.BASE_URL}users?${new URLSearchParams(params)}`, {
        method: 'GET'
      })
      const results = await response.json()

      let delay = new Promise((resolve) => {
        setTimeout(() => resolve(), 1000)
      })
      await delay

      this.loading = false

      this.totalPage = results.total_pages
      this.users = [...this.users, ...results.data]
    },
    loadMore() {
      this.currentPage++
      this.fetchUsers()
    }
  }
}
</script>

<style scoped>
.users-cont {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.photo {
  width: 100%;
}
</style>
