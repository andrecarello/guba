<template>
  <figure v-if="container">
    <img :src="source" :alt="alt" />
  </figure>

  <img v-else :src="source" :alt="alt" />
</template>
<script src="./index.js"></script>
