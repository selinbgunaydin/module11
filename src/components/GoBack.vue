<template>
  <button class="back-button" @click="goBack">
    ← Go Back
  </button>
</template>

<script>
export default {
  name: 'GoBack',
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.back-button {
  padding: 12px 24px;
  background-color: #336699;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 30px;
}

.back-button:hover {
  background-color: #254d73;
}
</style>