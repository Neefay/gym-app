<template>
    <v-card class="elevation-12">
        <v-toolbar dark color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <v-form>
                <v-text-field prepend-icon="mdi-account" name="login" label="Login" type="text"></v-text-field>
                <v-text-field prepend-icon="mdi-lock" name="password" label="Password" id="password" type="password"></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary">Login</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script src="./script.js"></script>
