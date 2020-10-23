<template>
  <container>
    <navbar />
    <search />
    <banner />

    <CategoryTabs class="mb:40" />

    <div v-if="loading"><SkeletonCollections v-for="i in 2" :key="i" /></div>
    <Collections
      v-else
      v-for="(collection, index) in collections"
      :content="collection"
      :key="index"
    />
  </container>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
