<template>
    <v-alert v-if="hasErrors" color="error" icon="$error" title="Erros">
        <ul>
            <li v-for="(fieldErrors, fieldName) in errors" :key="fieldName">
                <ul>
                    <li v-for="(message, index) in fieldErrors" :key="index">{{ message }}</li>
                </ul>
            </li>
        </ul>
    </v-alert>
</template>
<script>
export default {
    props: {
        errors:{
            type: [Array, Object],
            default:null
        }
    },
    computed: {
        hasErrors() {
            return Object.keys(this.errors).length > 0;
        }
    },
}
</script>
