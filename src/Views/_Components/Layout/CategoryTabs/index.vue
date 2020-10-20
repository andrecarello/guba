<template>
  <section class="tabs">
    <div class="tabs:header" ref="tabs">
      <a href="/" class="tabs:tab selected" name="category" @click.prevent.stop="selectTab">Categorias</a>
      <a href="/" class="tabs:tab" name="brand" @click.prevent.stop="selectTab">Marcas</a>
    </div>

    <div class="tabs:content active" ref="category">
      <router-link
        to=""
        v-for="(category, index) in categories"
        :key="index"
        class="tabs:link"
      >
        <loadImage
          :container="true"
          :source="`categories/${slugify(category.name)}.svg`"
          :alt="category.name"
          class="tabs:image"
        />
        <span class="tabs:text">{{ category.name }}</span>
      </router-link>
    </div>

    <div class="tabs:content" ref="brand">brand</div>
  </section>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
