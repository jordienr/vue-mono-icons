
<template>
    <div class="mono-icon" ref="monoIcon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4C10.3523 4 9 5.35228 9 7V10H18C19.1046 10 20 10.8954 20 12V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V12C4 10.8954 4.89543 10 6 10H7V7C7 4.24772 9.24771 2 12 2C14.7523 2 17 4.24772 17 7C17 7.55228 16.5523 8 16 8C15.4477 8 15 7.55228 15 7C15 5.35228 13.6477 4 12 4ZM6 12V20H18V12H6Z" fill="#0D0D0D"/>
</svg>

    </div>
</template>

<script>
export default {
  name: 'UnlockIcon',
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