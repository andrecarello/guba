<template>
  <FormulateForm @submit="submitMsisdn">

    <FormulateInput
      class="form:group"
      element-class="form:control"
      type="tel"
      placeholder="(ddd) + número Oi"
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
      class="form:button"
      :class="this.loading ? 'form:button:disabled' :''"
      text="CONTINUAR"
      :state="this.loading"
    />
  </FormulateForm>
</template>

<script src="./index.js"></script>
