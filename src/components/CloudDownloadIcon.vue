<template>
    <div class="mono-icon" ref="monoIcon">
        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 4a4 4 0 0 0-3.999 4.102 1 1 0 0 1-.75.992A3.002 3.002 0 0 0 7 15h1a1 1 0 1 1 0 2H7a5 5 0 0 1-1.97-9.596 6 6 0 0 1 11.169-2.4A6 6 0 0 1 16 17a1 1 0 1 1 0-2 4 4 0 1 0-.328-7.987 1 1 0 0 1-.999-.6A4.001 4.001 0 0 0 11 4zm1 6a1 1 0 0 1 1 1v7.586l.293-.293a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414l.293.293V11a1 1 0 0 1 1-1z" fill="#0D0D0D"/></svg>
    </div>
</template>

<script>
export default {
  name: 'CloudDownloadIcon',
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