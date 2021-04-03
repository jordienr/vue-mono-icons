<template>
    <div class="mono-icon" ref="monoIcon">
    <svg xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      aria-labelledby="ArrowLeftDownIcon"
      role="presentation"
      :fill="color"
    >
      <path d="M17.707 6.293a1 1 0 0 1 0 1.414L9.414 16H15a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1V9a1 1 0 1 1 2 0v5.586l8.293-8.293a1 1 0 0 1 1.414 0z"></path>
    </svg>
    </div>
</template>

<script>
export default {
  name: 'ArrowLeftDownIcon',
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