<template>
    <div class="mono-icon" ref="monoIcon">
        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm2 9v5h14v-5h-2.28l-.771 2.316A1 1 0 0 1 15 17H9a1 1 0 0 1-.949-.684L7.28 14H5zm14-2V5H5v7h2.28a2 2 0 0 1 1.897 1.367L9.72 15h4.558l.544-1.633A2 2 0 0 1 16.721 12H19z" fill="#0D0D0D"/></svg>
    </div>
</template>

<script>
export default {
  name: 'InboxIcon',
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