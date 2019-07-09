<template>
    <nav id="header-component">
        <v-navigation-drawer floating fixed temporary v-model="showDrawer" width="320" app>
            <v-toolbar prominent dense dark color="secondary">
                <v-toolbar-side-icon @click.stop="showDrawer = !showDrawer" class="mr-0">
                </v-toolbar-side-icon>
            </v-toolbar>
            <v-list class="pt-0" dense>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>mdi-account-plus</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>This is the worst.</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <v-divider></v-divider>
            <v-list class="pt-0" dense>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>mdi-account-plus</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>This is the worst.</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <v-divider></v-divider>
            <v-list class="pt-0" dense>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>mdi-account-plus</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>This is the worst.</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar prominent dense dark :color="headerMain.color" app>
            <v-toolbar-side-icon
                @click.stop="showDrawer = !showDrawer"
                class="hidden-sm-and-up"
            ></v-toolbar-side-icon>
            <router-link to="/">
                <v-toolbar-title class="text-uppercase mr-2">
                    <v-icon class="mr-2">{{ headerMain.icon }}</v-icon>
                    <span class="white--text">{{ headerMain.title }}</span>
                </v-toolbar-title>
            </router-link>
            <ButtonsList :list=navigationBarButtons.about></ButtonsList>
            <v-divider></v-divider>
            <ButtonsList :list=navigationBarButtons.account class="hidden-xs-only"></ButtonsList>
        </v-toolbar>
    </nav>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./index.scss" scoped></style>
