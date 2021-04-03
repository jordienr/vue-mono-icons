<template>
    <div class="mono-icon" ref="monoIcon">
    <svg xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      aria-labelledby="LinkIcon"
      role="presentation"
      :fill="color"
    >
      <path d="M8 8c-2.248 0-4 1.752-4 4s1.752 4 4 4h2a1 1 0 1 1 0 2H8c-3.352 0-6-2.648-6-6s2.648-6 6-6h2a1 1 0 1 1 0 2H8zm5-1a1 1 0 0 1 1-1h2c3.352 0 6 2.648 6 6s-2.648 6-6 6h-2a1 1 0 1 1 0-2h2c2.248 0 4-1.752 4-4s-1.752-4-4-4h-2a1 1 0 0 1-1-1zm-6 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1z"></path>
    </svg>
    </div>
</template>

<script>
export default {
  name: 'LinkIcon',
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