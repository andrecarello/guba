<template>
  <p v-if="/R\$[0-9]{1,4},[0-9]{1,2} OFF/.exec(content)" class="discount">
    <small>R$</small>{{ tenths }}<small>,{{ unity }} OFF</small>
  </p>

  <p v-else-if="/Por\sR\$[0-9]{1,4},[0-9]{2}/.exec(content)" class="discount">
    <small>POR R$</small>{{ tenths }}<small>,{{ unity }}</small>
  </p>

  <p
    v-else-if="/(?:...)\s[0-9]{1,2}%\s(OFF|off|Off)/.exec(content)"
    class="discount"
  >
    <small>Até</small> {{ strOnlyNumber(content) }}<small>% OFF</small>
  </p>

  <p v-else-if="/[0-9]{1,2}%\s(OFF)/.exec(content)" class="discount">
    {{ strOnlyNumber(content) }}<small>% OFF</small>
  </p>

  <p v-else-if="/(Grátis)|(GRÁTIS)/.exec(content)" class="discount">
    <strong>Grátis</strong>
  </p>
  <p
    v-else-if="/^.*?\bcompre\b.*?\bganhe\b.*?$/gim.exec(content)"
    class="discount:buy"
  >
    Compre&<strong>Ganhe</strong>
  </p>
  <p v-else>
    {{ content }}
  </p>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped src="./index.scss"></style>
