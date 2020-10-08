<template>
  <carousel
    class="banner:home"
    :arrows="false"
    :dots="true"
    :centerMode="true"
    centerPadding="15px"
    :draggable="true"
    lazyLoad="true"
    :autoplay="true"
    :autoplaySpeed="5000"
  >
    <div class="item">
      <img
        src="https://images.unsplash.com/photo-1509549649946-f1b6276d4f35?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        alt=""
      />
    </div>

    <div class="item" @click.prevent="e => select(e)">
      <img
        src="https://images.unsplash.com/photo-1511469054436-c7dedf24c66b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
        alt=""
      />
    </div>

    <div class="item">
      <img
        src="https://images.unsplash.com/photo-1511135232973-c3ee80040060?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
        alt=""
      />
    </div>
  </carousel>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
