
<template>
    <div class="mono-icon" ref="monoIcon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4C13.6477 4 15 5.35228 15 7V10H9V7C9 5.35228 10.3523 4 12 4ZM17 10V7C17 4.24772 14.7523 2 12 2C9.24771 2 7 4.24772 7 7V10H6C4.89543 10 4 10.8954 4 12V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V12C20 10.8954 19.1046 10 18 10H17ZM6 12H18V20H6V12Z" fill="#0D0D0D"/>
</svg>

    </div>
</template>

<script>
export default {
  name: 'LockIcon',
  props: {
    size: {
        type: String,
        default: '24'
    },
    color: {
        type: String,
        default: '#434343'
    }
  },
  methods: {
    update() {
      this.$refs.monoIcon.children[0].children.forEach(child => child.setAttribute('fill', ''))
      this.$refs.monoIcon.children[0].setAttribute('fill', this.color)
      this.$refs.monoIcon.children[0].setAttribute('height', this.size)
      this.$refs.monoIcon.children[0].setAttribute('width', this.size)
    }
  },
  watch: {
    size() {
      this.update()
    },
    color() {
      this.update()
    }
  },
  mounted() {
    this.update()
  }
}
</script>