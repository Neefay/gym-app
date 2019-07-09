<template>
    <div>
        <v-app>
            <HeaderLayout></HeaderLayout>
            <v-content>
                <v-container fluid>
                    <router-view></router-view>
                </v-container>
            </v-content>
            <FooterLayout></FooterLayout>
        </v-app>
    </div>
</template>

<script>

import HeaderLayout from "./Layout/Header"
import FooterLayout from "./Layout/Footer"

export default {
    components: {
        HeaderLayout,
        FooterLayout
    }
}
</script>

