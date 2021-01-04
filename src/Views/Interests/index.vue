<template>
  <section class="interests">
    <div class="interests:header">
      <OiIcon class="interests:brand" />
      <h1 class="interests:title">
        MEUS INTERESSES
        <strong>OI VANTAGENS</strong>
      </h1>
      <a
        href="/offer/goback"
        class="interests:close"
        @click.prevent.stop="$router.go(-1)"
      />
    </div>
    <div class="interests:content">
      <p class="interests:text">
        Queremos te conhecer melhor!<br />Selecione os interesses que mais
        combinam com você!
      </p>

      <skeleton v-if="loading" />
      <slot v-else>
        <div class="interests:items">
          <div
            v-for="(area, index) in areas"
            :key="index"
            class="interests:item"
            :class="check(area.id) ? 'interests:item-selected' : ''"
            v-text="area.name"
          />
        </div>

        <btn
          type="link"
          href="/interests/save"
          class="form:button"
          :class="this.saving ? 'form:button:disabled' : ''"
          text="FINALIZAR"
          loadingText="AGUARDE ..."
          :state="this.saving"
        />
      </slot>
    </div>
  </section>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
