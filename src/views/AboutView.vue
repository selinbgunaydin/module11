<template>
  <div class="about">
    <h1>About Me</h1>

    <p>
      Hi! My name is Selin Gunaydin. I am currently studying
      Web & UX Design at Wake Technical Community College.
      I enjoy learning how to create websites that are both
      visually appealing and easy to use.
    </p>

    <p>
      Through my classes, I have been learning HTML, CSS,
      JavaScript, and Vue.js. I am excited to continue
      improving my web development skills.
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about {
  max-width: 650px;
  margin: 60px auto;
  padding: 20px;
  text-align: center;
}

h1 {
  color: #2c3e50;
}

p {
  font-size: 18px;
  line-height: 1.8;
}
</style>