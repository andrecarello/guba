<template>
  <container>
    <skeleton v-if="loading" />
    <div class="collection" v-else>
      <div class="collection:header">
        <div class="collection:title">
          {{ collection.name }}
        </div>
        <router-link to="/" class="collection:link">Voltar</router-link>
      </div>

      <div class="collection:items">
        <router-link
          :to="'/oferta/' + offer.id + '/' + slugify(offer.title)"
          class="collection:item"
          v-for="(offer, index) in collection.offers"
          :key="index"
          data-ga-name="Oferta"
          :data-ga="JSON.stringify({
            'nome': offer.title,
            'id': offer.id,
            'coleção': collection.name,
            'cliente': offer.company_name,
            'cluster usuário': cluster,
            'ddd': ddd
          })"
        >
          <InterseptedImage
            :source="offer.image_tertiary"
            :alt="offer.company_name + ' - ' + offer.discount"
            class="collection:image"
          />

          <div class="collection:body">
            <h2 class="collection:subtitle">
              {{ !!offer.subtitle ? offer.subtitle : offer.title }}
            </h2>
            <h3 class="collection:company">{{ offer.company_name }}</h3>
            <discount
              class="collection:discount"
              :content="offer.discount"
              :tenths="
                !!offer.broke_discount ? offer.broke_discount.tenths : ''
              "
              :unity="!!offer.broke_discount ? offer.broke_discount.unity : ''"
            />
            <div class="collection:button">Resgatar</div>
          </div>
        </router-link>
      </div>
    </div>
  </container>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
