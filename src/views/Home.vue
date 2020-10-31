<template>
  <div>
    <div class="background">
      <div class="test">
        <h1 class="font">Welcome to tic tac toe</h1>
      </div>
      <div class="photo">
        <img
          src="https://image.winudf.com/v2/image1/Y29tLnRpY3RhY3RvZS5nbG93LmZyZWUuZ2FtZV9zY3JlZW5fMV8xNTkzMjcyMjA1XzAxMg/screen-1.jpg?fakeurl=1&type=.jpg"
          style="width: 30rem"
        />
      </div>
      <button @click="play" class="btn">Click to play</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      player1: "",
      player2: "",
    };
  },
  methods: {
    play() {
      this.$router.push("/Play");
    },
  },
};
</script>

<style  scoped>
.background {
  text-align: center;
}
.test {
  text-align: center;
  border: 3px solid transparent;
  height: 110px;
}
.font {
  font-family: cursive, sans-serif;
  font-size: 60px;
}
.photo {
  margin-top: 60px;
}
.btn {
  font-family: cursive, sans-serif;
  border-radius: 12px;
  background-color: #EE6CFF ;
  border: none;
  color: black;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  margin-top: 40px;
  width: 20rem;
  font-size: 30px;
}
.btn:hover {
  opacity: 1;
  background-color: #fff;
}
</style>