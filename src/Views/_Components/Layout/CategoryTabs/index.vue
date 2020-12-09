<template>
  <section class="tabs">
    <div class="tabs:header" ref="tabs">
      <a
        href="/home/tabs/category"
        class="tabs:tab selected"
        name="category"
        @click.prevent.stop="selectTab"
        >Categorias</a
      >
      <a
        href="/home/tabs/brands"
        class="tabs:tab"
        name="brand"
        @click.prevent.stop="selectTab"
        >Marcas</a
      >
    </div>

    <div class="tabs:content active" ref="category">
      <router-link
        :to="'categoria/'+ category.id +'/'+ slugify(category.name)"
        v-for="(category, index) in categories"
        :key="index"
        class="tabs:link"
      >
        <loadImage
          :container="true"
          :source="'categories/' + slugify(category.name) +'.svg'"
          :alt="category.name"
          class="tabs:image"
        />
        <span class="tabs:text">{{ category.name }}</span>
      </router-link>
    </div>

    <div class="tabs:content" ref="brand">
      <div class="tabs:content-brands brands">
        <router-link :to="'/pesquisa/' + brand.name" class="brands:item" v-for="(brand, index) in brands" :key="index">
          <loadImage
            :source="brand.logo"
            :alt="brand.name"
            class="brands:image"
          />
          <p class="brands:name" v-text="brand.name" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
