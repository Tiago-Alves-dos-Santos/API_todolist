<template>
    <v-text-field  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show ? 'text' : 'password'" name="input-10-1" label="Senha" @click:append="show = !show"></v-text-field>
</template>
<script>
export default {
    data() {
        return {
            show: false,
        }
    }
}
</script>
