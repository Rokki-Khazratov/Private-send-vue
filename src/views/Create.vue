
<template>
    <div>

        <form @submit.prevent="handleSubmit">
            <input type="text" v-model="message" placeholder="Maximum 4000 symbols" />
            <button type="submit">Submit</button>
        </form>


    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'CreatePage',
    data() {
        return {
            message: '',
        };
    },
    methods: {
        async handleSubmit() {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/messages/', {
                    message: this.message,
                });
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>
  
<style></style>
  