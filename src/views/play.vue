<template>
  <div>
    <Header />
    <div class="turn">
      <p class="font">Turn :</p>
      <p class="font" style="margin-left: 10px" v-show="statusWinner == false">
        {{ player }}
      </p>
    </div>
    <div class="column">
      <table align="center" disabled>
        <tr>
          <td @click="setValue('A')" class="item">{{ a }}</td>
          <td @click="setValue('B')" class="item">{{ b }}</td>
          <td @click="setValue('C')" class="item">{{ c }}</td>
          <td @click="setValue('D')" class="item">{{ d }}</td>
        </tr>
        <tr>
          <td @click="setValue('E')" class="item">{{ e }}</td>
          <td @click="setValue('F')" class="item">{{ f }}</td>
          <td @click="setValue('G')" class="item">{{ g }}</td>
          <td @click="setValue('H')" class="item">{{ h }}</td>
        </tr>
        <tr>
          <td @click="setValue('I')" class="item">{{ i }}</td>
          <td @click="setValue('J')" class="item">{{ j }}</td>
          <td @click="setValue('K')" class="item">{{ k }}</td>
          <td @click="setValue('L')" class="item">{{ l }}</td>
        </tr>
        <tr>
          <td @click="setValue('M')" class="item">{{ m }}</td>
          <td @click="setValue('N')" class="item">{{ n }}</td>
          <td @click="setValue('O')" class="item">{{ o }}</td>
          <td @click="setValue('P')" class="item">{{ p }}</td>
        </tr>
      </table>
    </div>
    <div class="footer">
      <h2 class="font">{{ statusBattle }}</h2>
      <input
        type="text"
        placeholder="Name"
        v-model="winName"
        class="textinput"
      />
      <button
        @click="getPoint"
        style="margin-left: 10px"
        v-if="statusWinner == true"
        class="btn"
      >
        Done
      </button>
      <button style="margin-left: 10px" class="btn" @click="reset">
        Restart
      </button>
      <router-link to="/History"
        ><button class="btn">History</button></router-link
      >
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "play",
  data() {
    return {
      statusBattle: "Who are champion?",
      winName: "",
      Point: 0,
      playable: true,
      player: "x",
      statusWinner: false,
      a: "",
      b: "",
      c: "",
      d: "",
      e: "",
      f: "",
      g: "",
      h: "",
      i: "",
      j: "",
      k: "",
      l: "",
      m: "",
      n: "",
      o: "",
      p: "",
    };
  },
  components: {
    Header,
  },
  mounted() {
    this.reset();
  },
  methods: {
    getPoint() {
      if (this.a == ":)") {
        this.Point++;
      }
      if (this.b == ":)") {
        this.Point++;
      }
      if (this.c == ":)") {
        this.Point++;
      }
      if (this.d == ":)") {
        this.Point++;
      }
      if (this.e == ":)") {
        this.Point++;
      }
      if (this.f == ":)") {
        this.Point++;
      }
      if (this.g == ":)") {
        this.Point++;
      }
      if (this.h == ":)") {
        this.Point++;
      }
      if (this.i == ":)") {
        this.Point++;
      }
      if (this.j == ":)") {
        this.Point++;
      }
      if (this.k == ":)") {
        this.Point++;
      }
      if (this.l == ":)") {
        this.Point++;
      }
      if (this.m == ":)") {
        this.Point++;
      }
      if (this.n == ":)") {
        this.Point++;
      }
      if (this.o == ":)") {
        this.Point++;
      }
      if (this.p == ":)") {
        this.Point++;
      }
      if (this.winName == "") {
        alert("please fill your name in the blank.");
      } else {
        this.statusWinner = false;
        let payload = this.winName;
        this.$store.dispatch("addName", payload);
        this.$store.dispatch("addPoint", this.Point);
        this.reset();
        this.winName = "";
        this.statusBattle = "Who are champion?";
      }
    },
    reset() {
      this.player = "x";
      this.a = "";
      this.b = "";
      this.c = "";
      this.d = "";
      this.e = "";
      this.f = "";
      this.g = "";
      this.h = "";
      this.i = "";
      this.j = "";
      this.l = "";
      this.k = "";
      this.m = "";
      this.n = "";
      this.o = "";
      this.p = "";
      this.Point = 0;

      let myArray = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
      ];

      let randomItem = myArray[Math.floor(Math.random() * myArray.length)];

      console.log("Random :", randomItem);
      if (randomItem == "a") {
        this.a = "!";
      }
      if (randomItem == "b") {
        this.b = "!";
      }
      if (randomItem == "c") {
        this.c = "!";
      }
      if (randomItem == "d") {
        this.d = "!";
      }
      if (randomItem == "e") {
        this.e = "!";
      }
      if (randomItem == "f") {
        this.f = "!";
      }
      if (randomItem == "g") {
        this.g = "!";
      }
      if (randomItem == "h") {
        this.h = "!";
      }
      if (randomItem == "i") {
        this.i = "!";
      }
      if (randomItem == "j") {
        this.j = "!";
      }
      if (randomItem == "k") {
        this.k = "!";
      }
      if (randomItem == "l") {
        this.l = "!";
      }
      if (randomItem == "m") {
        this.m = "!";
      }
      if (randomItem == "n") {
        this.n = "!";
      }
      if (randomItem == "o") {
        this.o = "!";
      }
      if (randomItem == "p") {
        this.p = "!";
      }
    },
    setValue(value) {
      if (value === "A" && this.a == "") {
        this.a = this.player;
        this.checkWinner();
      } else if (value == "B" && this.b == "") {
        this.b = this.player;
        this.checkWinner();
      } else if (value == "C" && this.c == "") {
        this.c = this.player;
        this.checkWinner();
      } else if (value == "D" && this.d == "") {
        this.d = this.player;
        this.checkWinner();
      } else if (value == "E" && this.e == "") {
        this.e = this.player;
        this.checkWinner();
      } else if (value == "F" && this.f == "") {
        this.f = this.player;
        this.checkWinner();
      } else if (value == "G" && this.g == "") {
        this.g = this.player;
        this.checkWinner();
      } else if (value == "H" && this.h == "") {
        this.h = this.player;
        this.checkWinner();
      } else if (value == "I" && this.i == "") {
        this.i = this.player;
        this.checkWinner();
      } else if (value == "J" && this.j == "") {
        this.j = this.player;
        this.checkWinner();
      } else if (value == "K" && this.k == "") {
        this.k = this.player;
        this.checkWinner();
      } else if (value == "L" && this.l == "") {
        this.l = this.player;
        this.checkWinner();
      } else if (value == "M" && this.m == "") {
        this.m = this.player;
        this.checkWinner();
      } else if (value == "N" && this.n == "") {
        this.n = this.player;
        this.checkWinner();
      } else if (value == "O" && this.o == "") {
        this.o = this.player;
        this.checkWinner();
      } else if (value == "P" && this.p == "") {
        this.p = this.player;
        this.checkWinner();
      }
    },
    checkWinner() {
      this.swap();
      // x
      this.checkWinn(this.a, this.b, this.c, this.d);
      this.checkWinn(this.e, this.f, this.g, this.h);
      this.checkWinn(this.i, this.j, this.k, this.l);
      this.checkWinn(this.m, this.n, this.o, this.p);
      // y
      this.checkWinn(this.a, this.e, this.i, this.m);
      this.checkWinn(this.b, this.f, this.j, this.n);
      this.checkWinn(this.c, this.g, this.k, this.o);
      this.checkWinn(this.d, this.h, this.l, this.p);

      // 45 c
      this.checkWinn(this.a, this.f, this.k, this.p);
      this.checkWinn(this.m, this.j, this.g, this.d);
    },
    checkWinn(w, x, y, z) {
      if (
        w == x &&
        x == y &&
        y == z &&
        w != "" &&
        x != "" &&
        y != "" &&
        z != ""
      ) {
        this.statusWinner = true;
        this.endgame();
      }
    },
    swap() {
      if (this.player == "x") {
        this.player = "o";
      } else if (this.player == "o") {
        this.player = "x";
      }
    },
    endgame() {
      if (this.a == "") {
        this.a = ":)";
      }
      if (this.b == "") {
        this.b = ":)";
      }
      if (this.c == "") {
        this.c = ":)";
      }
      if (this.d == "") {
        this.d = ":)";
      }
      if (this.e == "") {
        this.e = ":)";
      }
      if (this.f == "") {
        this.f = ":)";
      }
      if (this.g == "") {
        this.g = ":)";
      }
      if (this.h == "") {
        this.h = ":)";
      }
      if (this.i == "") {
        this.i = ":)";
      }
      if (this.j == "") {
        this.j = ":)";
      }
      if (this.k == "") {
        this.k = ":)";
      }
      if (this.l == "") {
        this.l = ":)";
      }
      if (this.m == "") {
        this.m = ":)";
      }
      if (this.n == "") {
        this.n = ":)";
      }
      if (this.o == "") {
        this.o = ":)";
      }
      if (this.p == "") {
        this.p = ":)";
      }
      if (this.statusWinner == true) {
        this.statusBattle = "Winner";
      }
    },
  },
};
</script>

<style scoped>
.column {
  text-align: center;
  height: auto;
  width: auto;
}
.item {
  height: 100px;
  width: 100px;
  border-style: double;
  border-width: 1px;
  border-color: black;
  font-size: 50px;
  font-family: cursive, sans-serif;
  /* border-right: transparent;
  border-top: transparent; */
}
.item:hover {
  background-color: rgb(236, 146, 229);
  width: 10px;
  height: 10px;
}
.footer {
  text-align: center;
  /* background-color: pink; */
  height: auto;
}
.turn {
  justify-content: center;
  display: flex;
}
.btn {
  font-family: cursive, sans-serif;
  border-radius: 12px;
  background-color: #ee6cff;
  border: none;
  color: black;
  padding: 16px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  width: 7rem;
  font-size: 20px;
}
.btn:hover {
  opacity: 1;
  background-color: #fff;
}
.font {
  font-family: cursive, sans-serif;
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.textinput {
  border-top: none;
  border-right: none;
  border-bottom: 2px solid black;
  border-left: none;
  border-image: initial;
  background-color: transparent;
  width: 10%;
  padding: 12px 20px;
  margin: 8px 0;
  margin-right: 10px;
  font-size: 15px;
}
::-webkit-input-placeholder {
  color: black;
  font-size: 15px;
}
</style>