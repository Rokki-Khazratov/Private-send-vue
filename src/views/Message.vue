<template>
    <div>
      <div v-if="isLoading">
        <!-- Show loading message or spinner while data is being fetched -->
        Loading...
      </div>
      <div v-else>
        <!-- Display the message data once it's loaded -->
        <h1>{{ message.title }}</h1>
        <p>{{ message.content }}</p>
        <!-- Add other message data fields as needed -->
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'MessageComponent',
    data() {
      return {
        message: {},
        isLoading: true,
      };
    },
    created() {
      // Fetch the message data when the component is created
      this.fetchMessage();
    },
    methods: {
      async fetchMessage() {
        const slug = this.$route.params.slug;
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/message/${slug}`);
          this.message = response.data;
          this.isLoading = false;
        } catch (error) {
          console.error(error);
          // Handle error if the request fails, e.g., show an error message to the user
        }
      },
    },
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  