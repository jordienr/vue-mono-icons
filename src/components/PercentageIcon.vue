<template>
    <div class="mono-icon" ref="monoIcon">
    <svg xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      aria-labelledby="PercentageIcon"
      role="presentation"
      :fill="color"
    >
      <path d="M18.707 5.293a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414-1.414l12-12a1 1 0 0 1 1.414 0zM17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM7 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
    </svg>
    </div>
</template>

<script>
export default {
  name: 'PercentageIcon',
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