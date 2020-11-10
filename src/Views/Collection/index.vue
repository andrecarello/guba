<template>
  <div class="collection">
    <div class="collection:title">
      {{ collection.name }}
    </div>

    <div class="collection:items" direction="vertical">
      <div
        class="collection:item"
        v-for="(offer, index) in collection.offers"
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
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
