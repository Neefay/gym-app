<template>
    <div>
        <v-container fill-height>
            <v-layout row wrap align-center justify-center>
                <v-flex xs12>
                    <v-flex offset-sm2 offset-md3>
                        <section class="mb-4">
                            <div class="h2 display-3 font-weight-medium primary--text mb-3">
                                <v-icon size="60" class="mr-3" left color="primary">mdi-account-plus</v-icon>
                                <span>Sign Up</span>
                            </div>
                            <div class="h3 headline font-weight-light">
                                Register as a new user within the system.
                            </div>
                        </section>
                    </v-flex>
                </v-flex>
                <v-flex xs12 sm8 md6>
                    <SignupForm></SignupForm>
                </v-flex>
                <v-flex xs12>
                    <v-btn href="http://localhost:8080/auth/google" color="orange" dark>
                        Google
                    </v-btn>
                    <v-btn @click="getSession()" color="white">
                        Current Session
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./index.scss" scoped></style>
