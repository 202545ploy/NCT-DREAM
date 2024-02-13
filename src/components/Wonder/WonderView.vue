<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-md-3 mb-5 justify-content-md-start" v-for="item in allNCTDREAM" :key="item.id">
                <div class="card shadow p-0">
                    <img :src="item.imageUrl" class="card-img-top" height="300px" alt="NCTDREAM">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.name }}</h5>
                        <p class="card-text">NCT DREAM {{ item.location }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted,ref } from 'vue';

const allNCTDREAM = ref([]);

onMounted(() => {
    axios.get(`https://yo-dream.onrender.com/NCTDREAM`)
        .then((response) => {
            // console.log(response.data)
            allNCTDREAM.value = response.data
        })
})

</script>

<style lang="scss" scoped></style>