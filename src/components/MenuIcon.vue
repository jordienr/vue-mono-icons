<template>
    <div class="mono-icon" ref="monoIcon">
        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z" fill="#0D0D0D"/></svg>
    </div>
</template>

<script>
export default {
  name: 'MenuIcon',
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
      this.$refs.monoIcon.children[0].children.forEach(child => child.removeAttribute('fill'))
      this.$refs.monoIcon.children[0].setAttribute('fill', this.color)
      this.$refs.monoIcon.children[0].setAttribute('height', this.size)
      this.$refs.monoIcon.children[0].setAttribute('width', this.size)
      this.$refs.monoIcon.children[0].setAttribute('viewBox', '0 0 24 24')
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