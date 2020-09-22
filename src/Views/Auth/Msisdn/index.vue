<template>
  <FormulateForm @submit="submitMsisdn">
    <h1 class="auth-title mb:55">
      Migre para Oi Controle e tenha
      <br />acesso a descontos exclusivos.
    </h1>

    <FormulateInput
      class="group"
      type="tel"
      label="(ddd) + número Oi"
      name="msisdn"
      v-model="form.msisdn"
      validation="bail|required|msisdn|min:15|max:15"
      :validation-rules="{
				msisdn: ({value}) => this.form.msisdn = Masks.msisdn(value),
			}"
      :validation-messages="{
				required: 'Campo obrigatório',
				msisdn: 'Preencha o campo corretamente',
				min: 'Preencha o campo corretamente',
				max: 'Preencha o campo corretamente'
			}"
      error-behavior="submit"
    />

    <btn
      type="submit"
      class="button:orange text:yellow mt:15"
      :class="this.loading ? 'disabled' :''"
      text="CONTINUAR"
      :state="this.loading"
    />
  </FormulateForm>
</template>

<script src="./index.js"></script>
