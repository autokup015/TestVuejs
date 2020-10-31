<template>
  <div>
    <div style="text-align: center;overflow: hidden;">
      <h1 class="font">History page</h1>
      <hr />
      <div style="display: flex; justify-content: center">
        <li class="fontdetail" style="margin-right: 4rem">
          {{ $store.state.name }}
        </li>
        <p class="fontdetail">{{ $store.state.point }}</p>
        <p class="fontdetail" style="margin-left: 50px">Point</p>
      </div>
    <router-link to="/Play"><button class="btn">Back</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hisroty",
};
</script>

<style scoped>
.font {
  font-family: cursive, sans-serif;
  font-size: 60px;
  margin-top: 0;
}
.fontdetail {
  font-family: cursive, sans-serif;
  font-size: 40px;
  margin-top: 0;
}
.btn {
  font-family: cursive, sans-serif;
  border-radius: 12px;
  background-color: #ee6cff;
  border: none;
  color: black;
  padding: 16px;
  text-align: center;
  margin: 4px 2px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  width: 15%;
  font-size: 20px;
  overflow: hidden;
}
.btn:hover {
  opacity: 1;
  background-color: #fff;
}
</style>