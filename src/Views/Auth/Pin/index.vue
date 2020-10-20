<template>
  <FormulateForm @submit="submitPin">

    <FormulateInput
      class="form:group"
      element-class="form:control"
      type="tel"
      name="pin"
      placeholder="* * * *"
      v-model="form.pin"
      label="Insira o código que enviamos para você"
      validation="bail|required|pin|min:4,length|max:4,length"
      :validation-rules="{
        pin: ({value}) => this.form.pin = Masks.pin(value),
      }"
      :validation-messages="{
        required: 'Campo obrigatório',
        pin: 'Preencha o campo corretamente',
        min: 'Preencha o campo corretamente',
        max: 'Preencha o campo corretamente'
      }"
      error-behavior="submit"
    />

    <btn
     type="submit"
      class="button:orange text:yellow mt:15 form:button"
      :class="this.loading ? 'form:button:disabled' :''"
      text="CONTINUAR"
      :state="this.loading"
    />

    <a href="/auth" @click.prevent.stop="resendPin()" class="form:link">
      <v-icon name="refresh-cw" width="15px" height="15px" class="mr:5"></v-icon>
      <strong class="font:900 mr:5">Não recebeu?</strong> Enviar novo código
    </a>
    <router-link
      to="/auth/msisdn"
      class="form:link"
    >Trocar número</router-link>
  </FormulateForm>
</template>

<script src="./index.js"></script>
