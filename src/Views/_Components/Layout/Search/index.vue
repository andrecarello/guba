<template>
  <form action="" class="search" @submit.prevent="">
    <div class="search:group">
      <input
        type="text"
        name="search"
        class="search:input"
        id="search"
        v-model="text"
        :class="!!text ? 'has-value' : ''"
      />
      <label for="search" class="search:label">O que deseja procurar</label>
    </div>

    <button type="submit" class="search:button" :class="!text ? 'disabled' : ''" @click="searchSubmit">
      <loadImage source="icons/search.svg" alt="Pesquisa" />
    </button>
  </form>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
