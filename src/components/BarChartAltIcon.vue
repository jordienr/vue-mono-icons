<template>
    <div class="mono-icon" ref="monoIcon">
    <svg xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      aria-labelledby="BarChartAltIcon"
      role="presentation"
      :fill="color"
    >
      <path d="M12 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1zm5 4a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zM7 12a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1z"></path>
    </svg>
    </div>
</template>

<script>
export default {
  name: 'BarChartAltIcon',
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