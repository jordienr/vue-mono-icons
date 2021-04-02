<template>
  <div id="app">
    <header>
      <div class="container">
        <h1><span class="text-green">Vue</span> Mono Icons</h1>
        <ul>
          <li>
            <a target="blank" href="https://icons.mono.company"
              >Official website</a
            >
          </li>
          <li>
            <a target="_blank" href="https://github.com/mono-company/mono-icons"
              >Official library github</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.npmjs.com/package/vue-mono-icons"
              >Vue mono icons docs</a
            >
          </li>
        </ul>
      </div>
    </header>
    <div class="container">
      <div class="search-input input">
        <SearchIcon></SearchIcon>
        <div>
          <input
            type="text"
            :placeholder="randomIcon"
            name="search"
            id="search"
            v-model="search"
          />
        </div>
      </div>
      <div class="icon-list">
        <div
          class="icon-wrapper"
          v-for="component in filteredIcons"
          :key="component"
        >
          <IconWrapper :iconName="component"></IconWrapper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconWrapper from "./components/IconWrapper";
import { iconList } from "vue-mono-icons/src/iconList";
import { SearchIcon } from "vue-mono-icons";
console.log(iconList);

export default {
  name: "App",
  data: () => ({
    iconList,
    randomIcon: "",
    search: "",
  }),
  computed: {
    filteredIcons() {
      return this.iconList.filter((item) =>
        item.toLowerCase().includes(this.search)
      );
    },
  },
  components: {
    // ...VueMonoIcons,
    IconWrapper,
    SearchIcon,
  },
  methods: {
    getRandomIcon() {
      this.randomIcon = this.iconList[
        Math.floor(Math.random() * this.iconList.length)
      ];
    },
  },
  mounted() {
    this.getRandomIcon();
    setInterval(this.getRandomIcon, 2000);
  },
};
</script>

<style>
:root {
  --gray: rgb(207, 209, 214);
  --black: #0d0d0d;
  --black-lighten-1: #282828;
  --green: #42b883;
}
.text-green {
  color: var(--green);
}
body {
  margin: 0;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
header {
  background-color: #0d0d0d;
  color: white;
  padding: 120px 1rem;
}
header a {
  color: white;
}
header ul {
  padding: 0;
  list-style: none;
}
header li {
  padding: 0.5rem;
}
.input {
  margin: 2rem 1rem;
  padding: 0 1rem;
  margin-top: 3rem;
  border: 1px solid var(--gray);
  display: flex;
  align-items: center;
  height: 44px;
}
.input .mono-icon {
  margin-right: 1rem;
}
.input label {
  display: block;
}
.input input {
  padding: 0.5rem;
  display: block;
  border: none;
  flex-basis: 100%;
}
.container {
  max-width: 1260px;
  margin: auto;
}
.icon-list {
  display: flex;
  flex-wrap: wrap;
}
.icon-wrapper {
  flex-basis: 20%;
  min-width: 20%;
}
</style>
