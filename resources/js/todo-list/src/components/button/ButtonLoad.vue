<template>
    <v-btn>
        {{ text }}
    </v-btn>
</template>
<script setup>
    import { defineProps } from 'vue';
    defineProps({
        text:String,
    });
</script>
