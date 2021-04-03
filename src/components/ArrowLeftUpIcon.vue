<template>
    <div class="mono-icon" ref="monoIcon">
    <svg xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      aria-labelledby="ArrowLeftUpIcon"
      role="presentation"
      :fill="color"
    >
      <path d="M8 9.414V15a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H9.414l8.293 8.293a1 1 0 0 1-1.414 1.414L8 9.414z"></path>
    </svg>
    </div>
</template>

<script>
export default {
  name: 'ArrowLeftUpIcon',
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