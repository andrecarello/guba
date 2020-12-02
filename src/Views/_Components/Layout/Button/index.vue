<template>
  <button v-if="type === 'submit'">
    <slot v-if="state">
      <LoadingIcon :fill="fill" :stroke="stroke" />
      {{ loadingText ? loadingText : "Aguarde" }}
    </slot>
    <slot v-else>
      {{ text }}
    </slot>
  </button>

  <a v-else-if="type === 'link'" :href="href">
    <slot v-if="state">
      <LoadingIcon :fill="fill" :stroke="stroke" />
      {{ loadingText ? loadingText : "Aguarde" }}
    </slot>
    <slot v-else>
      {{ text }}
    </slot>
  </a>
</template>
<script src="./index.js"></script>
