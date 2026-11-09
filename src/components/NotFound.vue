<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>

    <p>
      Sorry, the page you are looking for does not exist.
    </p>

    <router-link to="/about" class="home-link">
      Go to About
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found {
  max-width: 600px;
  margin: 60px auto;
  padding: 30px;
  text-align: center;
}

h1 {
  color: #336699;
}

p {
  font-size: 18px;
  margin: 25px 0;
}

.home-link {
  display: inline-block;
  padding: 12px 24px;
  background-color: #336699;
  color: white;
  text-decoration: none;
  border-radius: 6px;
}

.home-link:hover {
  background-color: #254d73;
}
</style>