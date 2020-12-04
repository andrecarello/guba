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
      class="form:button"
      :class="this.loading ? 'form:button:disabled' :''"
      text="CONTINUAR"
      loadingText="AGUARDE..."
      :state="this.loading"
    />

    <a href="/auth" @click.prevent.stop="resendPin()" class="form:link">
      <RefreshCwIcon size="15" :class="sendingPin ? 'mr:5 key:rotate' : 'mr:5'" />
      <span v-if="!sendingPin"><strong class="font:900 mr:5">Não recebeu?</strong> Enviar novo código</span>
      <span v-else>Estamos enviando um novo código.</span>
    </a>
    <router-link
      to="/auth/msisdn"
      class="form:link"
    >Trocar número</router-link>
  </FormulateForm>
</template>

<script src="./index.js"></script>
