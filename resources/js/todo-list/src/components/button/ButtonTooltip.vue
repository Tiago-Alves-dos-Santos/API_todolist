<template>
    <v-tooltip :text="text" :location="location">
        <template v-slot:activator="{ props }">
            <v-btn :color="color" v-bind="props" :icon="icon" class="mr-2" @click="$emit('click')" :loading="loading" :disabled="loading"></v-btn>
        </template>
    </v-tooltip>
</template>

<style>
</style>

<script setup>
    import { defineProps, defineEmits } from 'vue';
    defineEmits(['click']);
    defineProps({
        text:String,
        icon:String,
        color:String,
        location:String,
        loading: {
            type:Boolean,
            default:false
        }
    });
</script>
