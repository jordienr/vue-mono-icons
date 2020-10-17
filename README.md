# Vue Mono Icons

Library of Vue Components based on the open source Mono Icons.

Find all the icons here https://icons.mono.company/

Thanks to Mono for designing them and making them Open Source.

## Installation 
```
npm i vue-mono-icons
```

## Usage

```vue
<template>
  <div class="home">
      <h1>Vue Mono icons</h1>
      <TagIcon color="indigo" />
      <DeleteIcon size="18" color="red" />
  </div>
</template>

<script>
import { TagIcon, DeleteIcon } from 'vue-mono-icons'

export default {
  name: 'Home',
  components: {
    TagIcon,
    DeleteIcon
  }
}
</script>

```

## Icon names

You can find the full list here  
https://icons.mono.company/

All icon names are PascalCase with "Icon" at the end.

delete = DeleteIcon
chevron-double-right = ChevronDoubleRightIcon

## Acknowledgements

- Mono Icons
- This library is based on svelte-mono-icons and vue-feather-icons


### Thank you for reading 😁