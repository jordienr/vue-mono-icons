
<template>
    <div class="mono-icon" ref="monoIcon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 6C9.55228 6 10 6.44772 10 7V17C10 17.5523 9.55228 18 9 18C8.44772 18 8 17.5523 8 17V7C8 6.44772 8.44772 6 9 6ZM15 6C15.5523 6 16 6.44772 16 7V17C16 17.5523 15.5523 18 15 18C14.4477 18 14 17.5523 14 17V7C14 6.44772 14.4477 6 15 6Z" fill="#0D0D0D"/>
</svg>

    </div>
</template>

<script>
export default {
  name: 'PauseIcon',
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