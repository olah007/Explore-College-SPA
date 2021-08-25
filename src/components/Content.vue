<template>
  <div class="cont">
        <div v-for="college in collegeList" :key="college.id" class="college-card" :style="{ backgroundImage: 'url(' + college.photo_url + ')' }">
            <span class="fw-bold h4 d-flex align-items-end text-light">{{ college.name }}</span>
        </div>
  </div>
      
</template>

<script>
export default {
    name: 'Content',
    data: function() {
        return {
            display: false
        }
    },
    props: ['collegeList', 'alertMessage'],
    methods: {
        resetList(val) {
            if (val.length == 1){
                this.display = true
            }
        }
    }

}
</script>

<style>
.college-list {
    display: grid;
}
.image {
    width: 20em;
    height: auto;
}
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
    background-image: url('https://worldscholarshipforum.com/wp-content/uploads/2020/10/University-College-London-Denys-Holland-Scholarship.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 5px;
    margin: 10px;
}

</style>