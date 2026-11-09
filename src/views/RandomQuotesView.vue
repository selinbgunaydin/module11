
<template>
  <div id="app" class="container">
    <h1>Random Quote Generator</h1>

    <p v-if="loading">Loading...</p>

    <div v-else class="quote-box">
      <p class="quote">"{{ quote }}"</p>
      <p class="author" v-if="author">— {{ author }}</p>
    </div>

    <button @click="getQuote" :disabled="loading">
      Get New Quote
    </button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RandomQuotesView',
  data() {
    return {
      quote: '',
      author: '',
      loading: false
    }
  },
  methods: {
    async getQuote() {
  this.loading = true

  try {
    const response = await axios.get(
      'https://dummyjson.com/quotes/random'
    )

    this.quote = response.data.quote
    this.author = response.data.author

  } catch (error) {
    console.error('Error fetching quote:', error)
    this.quote = 'Oops! Something went wrong.'
    this.author = ''
  } finally {
    this.loading = false
  }
},
  },
  mounted() {
    this.getQuote()
  }
}
</script>

<style>
.container {
  max-width: 650px;
  margin: 80px auto;
  padding: 40px;
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
  border-radius: 12px;
}

h1 {
  color: #263238;
  margin-bottom: 30px;
}

.quote-box {
  padding: 20px;
}

.quote {
  font-size: 22px;
  line-height: 1.6;
  color: #333;
}

.author {
  font-style: italic;
  color: #666;
  margin-top: 15px;
}

button {
  margin-top: 25px;
  padding: 12px 24px;
  font-size: 16px;
  background-color: #336699;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #254d73;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
