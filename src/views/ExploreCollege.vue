<template>
  <div class="layout">
    <div class="explore college">
      <div class="header">
        <Header title="Explore Colleges and  Universities" :method="fetchData" />
      </div>
      <div class="content">
        <Content :collegeList="collegeList" :alertMessage="alertMessage"/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Content from '@/components/Content'

export default {
  name: 'ExploreCollege',
  data: function() {
    return {
      collegeList: [],
      store: [],
      alertMessage: ''
    }
  },
  components: {
    Header,
    Content
  },

  async created() {
    await this.fetchColleges()
  },

  methods: {
    async fetchColleges() {
      try {
            let data = await fetch(`https://explore-college-api.herokuapp.com/institutes`)
            data = await data.json()
            if(data == null || data == '' || data.length == 0){
              return this.alertMessage = "No available record"
        } else {
            this.collegeList = data
            this.store = data
            this.alertMessage = ''
        }        
      } catch (error) {
        console.log(error)
      }
    },
    async fetchData(value) {
      try {
            const filterData = this.store.filter((item) => item.name === value.toLowerCase())
            if (filterData.length > 0) {
              this.collegeList = filterData
            } else {
              this.collegeList = this.store
            }
      } catch (error) {
          console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.layout {
  background-color: #f4fafa;
  min-height: 100vh;
}
.explore {
  margin: 0 2em;
}

</style>
