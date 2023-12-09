<template>
    <div class="home">
        <center-layout>
            <v-card title="Login" class="mx-auto" width="500" style="padding: 10px;">
                <v-text-field label="Email" hide-details="auto" variant="outlined"></v-text-field>
                <password-input variant="outlined" class="mt-1"></password-input>
                <div class="d-flex justify-end mt-2">
                    <v-btn color="primary" class="mr-2">
                        Login
                    </v-btn>
                </div>
            </v-card>
        </center-layout>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import CenterLayout from '@/layouts/CenterLayout.vue';
import PasswordInput from '@/components/Input/PasswordInput.vue';
export default {
    name: 'HomeView',
    components: {
        CenterLayout,
        PasswordInput

    }
}
</script>
