<template>
    <div class="mono-icon" ref="monoIcon">
    <svg xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      aria-labelledby="SunriseIcon"
      role="presentation"
      :fill="color"
    >
      <path d="M13 5a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0V5zM9.028 19H3a1 1 0 1 1 0-2h3.803a6 6 0 1 1 10.394 0H21a1 1 0 1 1 0 2H9.028zM12 10a4 4 0 0 0-2.646 7h5.292A4 4 0 0 0 12 10zm7.071-1.657l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 1 1 1.414 1.414z"></path>
    </svg>
    </div>
</template>

<script>
export default {
  name: 'SunriseIcon',
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