<template>
    <div class="container">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
div.container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100dvh;
    .content {
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        padding: 10px;
    }
}
</style>
