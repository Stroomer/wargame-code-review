<template>
  <form>
    <label>Username:</label>
    <input type="text" required v-model="username" />
    <label>Password:</label>
    <input type="password" required v-model="password" />
    <button>Submit</button>
  </form>

  <p>Username: {{ username }}</p>
  <p>Password: {{ password }}</p>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>
<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

button {
  display: block;
  padding: 10px 6px;
  margin-top: 20px;
  min-width: 140px;
}
</style>
