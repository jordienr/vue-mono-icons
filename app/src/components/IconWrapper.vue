<template>
  <div
    class="icon-wrapper"
    :class="{ 'icon-wrapper-hover': hovering }"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div v-if="showSuccess">
      <CheckIcon color="green" />
      <p>Copied successfully</p>
    </div>
    <div class="icon-component" v-else-if="!hovering">
      <component :is="iconComponent"></component>
      <span>{{ iconName }}</span>
    </div>
    <div class="actions" v-else>
      <button @click="copyIconName">Copy icon name</button>
      <button @click="copyImport">Copy import</button>
    </div>
  </div>
</template>

<script>
import { CheckIcon } from "vue-mono-icons";

export default {
  props: {
    iconName: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    success: false,
    showActions: false,
    hovering: false,
    showSuccess: false,
  }),
  components: {
    CheckIcon,
  },
  methods: {
    copyIconName() {
      this.$copyText(this.iconName).then(() => {
        this.showSuccessMsg();
      });
    },
    copyImport() {
      this.$copyText(`import { ${this.iconName} }  from 'vue-mono-icons'`).then(
        () => {
          this.showSuccessMsg();
        }
      );
    },
    showSuccessMsg() {
      this.showSuccess = true;
      setTimeout(() => {
        this.showSuccess = false;
      }, 1000);
    },
  },
  computed: {
    iconComponent() {
      return require("vue-mono-icons")[this.iconName];
    },
  },
};
</script>

<style scoped>
.icon-wrapper {
  border: 1px solid var(--gray);
  padding: 1rem;
  margin: 1rem;
  font-size: 12px;
  text-align: center;
  height: 144px;
  width: 144px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-wrapper-hover {
  border: 1px solid var(--black);
}

.icon-component .mono-icon {
  margin-bottom: 1rem;
  /* display: flex;
  flex-direction: column; */
}
.actions {
  display: flex;
  flex-direction: column;
}
button {
  background-color: var(--black);
  margin-bottom: 4px;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
}
button:hover {
  background-color: var(--black-lighten-1);
  cursor: pointer;
}
</style>
