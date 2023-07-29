<template>
    <div>
        <Header /> <!-- Only include the Header component once -->
        <h1>Hello Home</h1>
        <!-- Your other content here -->
    </div>
</template>
  
<script>
import Header from '../components/Header.vue';

export default {
    name: 'HomeComponent',
    components: {
        Header,
    },
};
</script>
  
<style>
</style>
  