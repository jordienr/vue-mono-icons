<template>
    <div class="mono-icon" ref="monoIcon">
    <svg xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      aria-labelledby="WebcamIcon"
      role="presentation"
      :fill="color"
    >
      <path d="M21.5 6.1c-.3-.2-.7-.2-1 0l-4.4 3V7c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-2.1l4.4 3c.2.1.4.2.6.2.2 0 .3 0 .5-.1.3-.2.5-.5.5-.9V7c0-.4-.2-.7-.5-.9zM14 17H4V7h10v10zm6-1.9l-4-2.7v-.9l4-2.7v6.3z"></path>
    </svg>
    </div>
</template>

<script>
export default {
  name: 'WebcamIcon',
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