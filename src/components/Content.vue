<template>
  <div class="cont">
    <div
      v-for="college in collegeList"
      :key="college.id"
      class="college-card"
      :style="{ backgroundImage: 'url(' + college.photo_url + ')' }"
    >
      <span class="fw-bold h4 d-flex align-items-end text-light">
        {{ college.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: ['collegeList']
}
</script>

<style scoped>
.cont {
  flex-wrap: wrap;
  display: flex;
  width: 100%;
  align-content: center;
}
.college-card {
  height: 300px;
  max-width: 300px;
  display: flex;
  flex: 1 0 23%;
  flex-direction: row;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
  margin: 10px;
}
</style>
