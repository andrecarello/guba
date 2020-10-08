<template>
  <container>
    <navbar />
    <search />
    <banner />

    <div v-if="loading">CARREGANDO...</div>
    <div v-else v-for="(collection, index) in collections" :key="index">
      {{ collection }}
    </div>
  </container>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
