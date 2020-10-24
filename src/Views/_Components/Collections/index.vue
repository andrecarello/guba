<template>
  <section class="collection">
    <div class="collection:header">
      <div class="collection:title">{{ content.name }}</div>
      <router-link to="" class="collection:link">Ver tudo</router-link>
    </div>

    <div class="collection:items">
      <article
        class="collection:item"
        v-for="(offer, index) in content.offers"
        :key="index"
      >
        <router-link :to="'/oferta/' + offer.id + '/' + slugify(offer.title)">
          <InterseptedImage
            :source="offer.image_tertiary"
            :alt="offer.company_name + ' - ' + offer.discount"
            class="collection:image"
          />

          <InterseptedImage
            :source="offer.company_logo"
            :alt="offer.company_name"
            class="collection:brand"
          />

          <h2 class="collection:subtitle">{{ offer.subtitle }}</h2>
          <h3 class="collection:company">{{ offer.company_name }}</h3>

          <footer>
            <discount
              class="collection:discount"
              :content="offer.discount"
              :tenths="
                !!offer.broke_discount ? offer.broke_discount.tenths : ''
              "
              :unity="!!offer.broke_discount ? offer.broke_discount.unity : ''"
            />
            <div class="collection:button">Resgatar</div>
          </footer>
        </router-link>
      </article>
      <div class="collection:spacer" />
    </div>
    <div class="collection:next"><ChevronRightIcon size="15" /></div>
  </section>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
