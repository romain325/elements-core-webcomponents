[![Elements - OpenAPI Powered API Documentation](docs/images/readme-header.svg)][elements_landing_page]

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://stoplight-elements.netlify.app)
[![CircleCI][circle_ci_image]][circle_ci]
[![NPM Downloads][circle_ci_image]][npm]
[![Stoplight Forest](https://img.shields.io/ecologi/trees/stoplightinc)][stoplight_forest]

# Fork

This is a fork of <https://github.com/stoplightio/elements> with the goal to provide "elements-core" as web-components
A big thanks to the creator and maintainor of the original project

## Installation

The npm package is available here: <https://www.npmjs.com/package/@romain325/elements-core-webcomponents>
You can install it with any manager:

```sh
npm i @romain325/elements-core-webcomponents
```

## Usage

In your project, add this script tag to your html file  
If you're using a framework like Vue, React, Angular, Svelte, ... add it to your index.html file

```html
<script src="node_modules/@romain325/elements-core-webcomponents/dist/web-components.min.js"></script>
```

And then use it as (for example with vue):

```vue
<script setup lang="ts">

const mdText = "# Bonsoir\n\nhello world\n\n## I'm h2";
const type = "article";
</script>

<template>
  <WithSidebar>
    <elements-docs
        :nodeType="type"
        :nodeData="mdText"
        nodeTitle="Wonderful Title"
    ></elements-docs>
  </WithSidebar>
</template
```
