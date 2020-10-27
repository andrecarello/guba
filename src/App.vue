<template>
  <div id="app">
    <keep-alive include="Home">
      <router-view :key="$route.fullPath" />
    </keep-alive>
  </div>
</template>
<style lang="scss" src="./app.scss"></style>
