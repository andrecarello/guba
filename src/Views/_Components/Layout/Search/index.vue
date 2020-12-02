<template>
  <form action="" class="_search" @submit.prevent="">
    <div class="_search:group">
      <input
        type="text"
        name="search"
        class="_search:input"
        ref="search"
        id="search"
        v-model="text"
        :class="!!text ? 'has-value' : ''"
      />
      <label for="search" class="_search:label">O que deseja procurar</label>
    </div>

    <button type="submit" class="_search:button" @click="searchSubmit">
      <loadImage source="icons/search.svg" alt="Pesquisa" />
    </button>
  </form>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
