<template>
  <container view="auth">
    <HeadersAuth />

    <div class="partners">
      <loadImage
        v-for="(partner, index) in partners"
        :key="index"
        :source="`${partner.icon}.svg`"
        :alt="partner.text"
      />
    </div>

    <router-view></router-view>
  </container>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
