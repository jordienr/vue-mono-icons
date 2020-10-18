# Vue Mono Icons

Library of Vue Components based on the open source Mono Icons.

Find all the icons here https://icons.mono.company/

Thanks to Mono for designing them and making them Open Source.

## Installation 
```
npm i --save-dev vue-mono-icons
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

## Global styles

If you want to set the styles once and forget for all icons write this CSS somewhere in your global scope
```vue
<style lang="css">
  .mono-icon svg {
    fill: indigo;
    width: 44px;
    height: 44px;
  }
</style>
```

⚠ Don't set this css as "scoped" or it will not work.

You can also add it to a separate file and import it.

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