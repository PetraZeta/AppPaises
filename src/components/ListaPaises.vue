<script setup lang="ts">
import { defineProps } from 'vue';
import { Pais} from "../models/pais.model";
import PaisItem from "./PaisItem.vue";
interface Props {
    paises: Pais[];
}

defineProps<Props>();
</script>

<template>
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-3 lg:grid-cols-3 gap-5">
        <div v-for="pais in paises" class="">
            <PaisItem :pais="pais" />
        </div>

    </section>
</template>