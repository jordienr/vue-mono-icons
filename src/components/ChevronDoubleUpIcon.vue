<template>
    <div class="mono-icon" ref="monoIcon">
        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.293 4.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 6.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6zM12 12.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 12.414z" fill="#0D0D0D"/></svg>
    </div>
</template>

<script>
export default {
  name: 'ChevronDoubleUpIcon',
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