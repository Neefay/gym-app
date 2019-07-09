<template>
    <v-form>
        <v-text-field
            v-model="username"
            :prepend-icon="'mdi-account'"
            :counter="35"
            :error-messages="formErrors.username"
            label="Username"
            v-validate-input="username"
            v-filter-input="['username', ['lowercase','noSpace']]"
        ></v-text-field>

        <v-text-field
            v-model="password"
            :type="(showPass ? 'text' : 'password')"
            :prepend-icon="'mdi-lock-question'"
            :append-icon="(showPass ? 'mdi-eye' : 'mdi-eye-off')"
            :counter="32"
            :error-messages="formErrors.password"
            label="Password"
            v-validate-input="password"
            v-filter-input="['password', ['noSpace']]"
            @click:append="showPass = !showPass"
        ></v-text-field>

        <v-text-field
            v-model="name"
            :prepend-icon="'mdi-account-card-details'"
            :counter="35"
            :error-messages="formErrors.name"
            label="Name"
            v-validate-input="name"
        ></v-text-field>

        <v-text-field
            v-model="email"
            :prepend-icon="'mdi-email'"
            :error-messages="formErrors.email"
            label="E-mail"
            v-validate-input="email"
        ></v-text-field>

        <section class="mt-4">
            <v-btn
                :loading="isLoading"
                :disabled="canSubmit"
                color="success ml-0"
                @click="submitForm"
            >
                Submit
                <v-icon class="ml-1">{{ `mdi-checkbox-${( canSubmit ? 'blank' : 'marked' )}-outline` }}</v-icon>
            </v-btn>
        </section>
    </v-form>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped></style>
