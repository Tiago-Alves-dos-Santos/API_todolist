<template>
    <v-card class="card-row" variant="elevated" :color="color">
        <div class="content">
            <h3>
                {{ title }}
            </h3>
            <div>
                <slot></slot>
            </div>
        </div>
    </v-card>
</template>
<style lang="scss" setup>
div.card-row {
    width: 100%;

    div.content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 5px;

        h3 {
            position: relative;
            line-height: 50px;
        }
    }
}
</style>
<script setup>
    import { defineProps } from 'vue';

    defineProps({
        title:String,
        color:String,
    });
</script>

