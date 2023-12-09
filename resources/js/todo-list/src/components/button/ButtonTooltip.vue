<template>
    <v-tooltip :text="text" :location="location">
        <template v-slot:activator="{ props }">
            <v-btn :color="color" v-bind="props" :icon="icon" class="mr-2"></v-btn>
        </template>
    </v-tooltip>
</template>
<script setup>
    defineProps({
        text:String,
        icon:String,
        color:String,
        location:String,
    });
</script>
