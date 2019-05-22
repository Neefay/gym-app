<template>
    <div>
        <v-btn
            class="py-4 px-3 mx-0"
            v-for="(button, index) in list"
            :key=index
            :to=button.route
            small flat exact
        >
            <v-icon left>{{ `mdi-${button.icon}` }}</v-icon>
            <span>{{ button.text }}</span>
        </v-btn>
    </div>
</template>

<script>
export default {
    props: ["list"]
}
</script>
