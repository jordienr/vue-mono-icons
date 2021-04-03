<template>
    <div class="mono-icon" ref="monoIcon">
    <svg xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      aria-labelledby="ArrowRightDownIcon"
      role="presentation"
      :fill="color"
    >
      <path d="M6.293 6.293a1 1 0 0 1 1.414 0L16 14.586V9a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1H9a1 1 0 1 1 0-2h5.586L6.293 7.707a1 1 0 0 1 0-1.414z"></path>
    </svg>
    </div>
</template>

<script>
export default {
  name: 'ArrowRightDownIcon',
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