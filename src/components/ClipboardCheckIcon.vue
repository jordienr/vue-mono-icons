<template>
    <div class="mono-icon" ref="monoIcon">
    <svg xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      aria-labelledby="ClipboardCheckIcon"
      role="presentation"
      :fill="color"
    >
      <path d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2zm0 2H6v15h12V5h-2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V5zm6-1h-4v1h4V4zm1.707 6.793a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L11 14.086l3.293-3.293a1 1 0 0 1 1.414 0z"></path>
    </svg>
    </div>
</template>

<script>
export default {
  name: 'ClipboardCheckIcon',
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