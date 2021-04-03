<template>
    <div class="mono-icon" ref="monoIcon">
    <svg xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      aria-labelledby="ChevronRightIcon"
      role="presentation"
      :fill="color"
    >
      <path d="M9.293 18.707a1 1 0 0 1 0-1.414L14.586 12 9.293 6.707a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0z"></path>
    </svg>
    </div>
</template>

<script>
export default {
  name: 'ChevronRightIcon',
  props: {
    size: {
        type: [String, Number],
        default: '24'
    },
    width: {
      type: [String, Number]
    },
    color: {
        type: String,
        default: 'currentColor'
    }
  }
}
</script>