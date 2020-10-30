<template>
  <section class="offer">
    <a
      href="/offer/goback"
      class="offer:close"
      @click.prevent.stop="$router.go(-1)"
    />

    <InterseptedImage
      :source="offer.image_secondary"
      :alt="offer.subtitle"
      class="offer:figure"
    />

    <InterseptedImage
      :source="offer.company_logo"
      :alt="offer.company_name"
      class="offer:brand"
    />

    <div class="offer:container">
      <h1 class="offer:title" v-text="offer.title" />
      <p class="offer:description" v-text="offer.subtitle" />

      <div class="offer:discount" v-text="offer.discount" />

      <a href="/oferta/resgatar" class="offer:redeem">Resgatar</a>
    </div>

    <a
      href="/oferta/detalhe"
      class="offer:button"
      @click.prevent.stop="isOpenDetailModal = !isOpenDetailModal"
    >
      Detalhes
    </a>

    <modal
      :content="offer"
      :class="isOpenDetailModal ? 'modal:offer:active' : ''"
    />
  </section>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
