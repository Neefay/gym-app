import Vue from 'vue';
import Vuex from 'vuex';
import { dev } from '../../API/Client'

Vue.use(Vuex);

import state from "./state"
import mutations from "./mutations"
import actions from "./actions"

export default new Vuex.Store({ state, mutations, actions, strict: dev() });
