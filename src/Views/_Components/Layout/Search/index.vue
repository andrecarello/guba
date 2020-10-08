<template>
  <form action="" class="search" @submit.prevent="">
    <div class="group">
      <input
        type="text"
        name="search"
        id="search"
        v-model="text"
        :class="!!text ? 'has-value' : ''"
      />
      <label for="search">O que deseja procurar</label>
    </div>

    <button type="submit" :class="!text ? 'disabled' : ''">
      <loadImage source="icons/search.svg" alt="Pesquisa" />
    </button>
  </form>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped src="./index.scss"></style>
