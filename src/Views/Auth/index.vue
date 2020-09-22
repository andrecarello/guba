<template>
  <container view="auth">
    <HeadersAuth />

    <div class="partners">
      <img src="@/assets/images/simbolo-marisa.svg" alt="Marisa" />
      <img src="@/assets/images/burger-king.svg" alt="BK" />
      <img src="@/assets/images/tok-e-stock.svg" alt="Tok&amp;Stock" />
      <img src="@/assets/images/compra-certa.svg" alt="Compra Certa" />
      <img src="@/assets/images/netshoes.svg" alt="Netshoes" />
    </div>

		<router-view></router-view>

  </container>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
