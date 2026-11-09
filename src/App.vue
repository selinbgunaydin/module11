<template>
  <div id="app">
    <header>
      <h1>Selin's Vue Website</h1>

      <nav>
        <router-link to="/about">About</router-link>
        <router-link to="/quotes">Random Quotes</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </header>

    <main>
      <router-view />
      <GoBack />
    </main>
  </div>
</template>

<script>
import GoBack from './components/GoBack.vue'

export default {
  name: 'App',
  components: {
    GoBack
  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #2c3e50;
}

header {
  padding: 25px;
  background-color: #f4f8f7;
}

header h1 {
  margin-bottom: 20px;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: center;
  gap: 30px;
}

nav a {
  font-size: 18px;
  font-weight: bold;
  color: #336699;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

nav a.router-link-active {
  color: #42b983;
}

main {
  padding: 20px;
}
</style>