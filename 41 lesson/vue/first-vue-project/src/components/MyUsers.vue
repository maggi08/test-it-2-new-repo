<template>
  <h2>My Users</h2>

  <div id="usersContainer" class="users">
    <h3>Users</h3>

    <h4 style="text-align: center">CEOs of company</h4>

    <div class="ceos-container">
      <MyUser
        v-if="selectedCEO"
        :num="777"
        :img="selectedCEO.avatar"
        :name="selectedCEO.first_name + ' ' + selectedCEO.last_name"
        isCEO
        style="width: 30%"
      />
      <MyUser
        v-if="selectedCTO"
        :num="777"
        :img="selectedCTO.avatar"
        :name="selectedCTO.first_name + ' ' + selectedCTO.last_name"
        isCTO
        style="width: 30%"
      />
    </div>

    <div class="users-cont">
      <MyUser
        v-for="(user, index) in users"
        :key="index"
        :num="index + 1"
        :img="user.avatar"
        :name="user.first_name + ' ' + user.last_name"
        :isCEO="selectedCEO && user.first_name === selectedCEO.first_name"
        :isCTO="selectedCTO && user.first_name === selectedCTO.first_name"
        prop-f="successs"
        @onTriggerUser="onTriggerUser"
        @onSelectCEO="onSelectCEO(index, user)"
        @onSelectCTO="selectedCTO = user"
      />
      <!-- :isCEO="user.first_name === 'Janet'" -->
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
      loading: true,
      selectedCEO: null,
      selectedCTO: null,
      nurs: {
        number: 777,
        img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRcjAdfSOeqLTW4OZLYqBTCuPABsa49PxNFUg3Nofrz8WpUxXwq',
        name: 'Nursultan Nazarbayev'
      }
    }
  },
  mounted() {
    this.fetchUsers()
  },
  methods: {
    onSelectCEO(idx, user) {
      console.log('onSelectCEO', idx, user)
      this.selectedCEO = { ...user, index: 'selectedCEO' }
    },
    onTriggerUser(userName) {
      console.log('onTriggerUser', userName)
      this.selectedCEO = userName
    },
    async fetchUser(id) {
      let response = await fetch(`${this.BASE_URL}users/${id}`)
      let results = await response.text()
      alert(results)
    },
    async fetchUsers() {
      this.loading = true

      let params = {
        per_page: 12,
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
.ceos-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.users-cont {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.photo {
  width: 100%;
}
</style>
