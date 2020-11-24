<template>
  <section class="collections">
    <div class="collections:header">
      <div class="collections:title">{{ content.name }}</div>
      <router-link
        :to="'/colecao/' + content.id + '/' + slugify(content.name)"
        class="collections:link"
        >Ver tudo</router-link
      >
    </div>

    <div class="collections:items">
      <article
        class="collections:item"
        v-for="(offer, index) in content.offers"
        :key="index"
      >
        <router-link :to="'/oferta/' + offer.id + '/' + slugify(offer.title)">
          <InterseptedImage
            :source="offer.image_tertiary"
            :alt="offer.company_name + ' - ' + offer.discount"
            class="collections:image"
          />

          <InterseptedImage
            :source="offer.company_logo"
            :alt="offer.company_name"
            class="collections:brand"
          />

          <h2 class="collections:subtitle">{{ offer.subtitle }}</h2>
          <h3 class="collections:company">{{ offer.company_name }}</h3>

          <footer>
            <discount
              class="collections:discount"
              :content="offer.discount"
              :tenths="
                !!offer.broke_discount ? offer.broke_discount.tenths : ''
              "
              :unity="!!offer.broke_discount ? offer.broke_discount.unity : ''"
            />
            <div class="collections:button">Resgatar</div>
          </footer>
        </router-link>
      </article>
      <div class="collections:spacer" />
    </div>
    <div class="collections:next"><ChevronRightIcon size="15" /></div>
  </section>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
