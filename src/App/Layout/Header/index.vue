<template>
    <div id="header-component">
        <v-navigation-drawer temporary v-model="showDrawer">
            <v-list>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>mdi-account-plus</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>Sign up</v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar prominent dense dark color="primary" app>
            <v-toolbar-side-icon
                @click.stop="showDrawer = !showDrawer"
                class="hidden-sm-and-up"
            ></v-toolbar-side-icon>
            <router-link to="/">
                <v-toolbar-title class="text-uppercase mr-2">
                    <v-icon class="mr-2">mdi-karate</v-icon>
                    <span class="white--text">Aitakigu </span>
                </v-toolbar-title>
            </router-link>
            <ButtonsList :list=navigationBarButtons.left></ButtonsList>
            <v-spacer></v-spacer>
            <ButtonsList :list=navigationBarButtons.right class="hidden-xs-only"></ButtonsList>
        </v-toolbar>
    </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./index.scss" scoped></style>
