<script setup lang="ts">
import { defineProps } from 'vue';
import { Pais } from '../models/pais.model';

interface Props {
    pais: Pais;
}
defineProps<Props>();


</script>

<template>

    <div  class=" bg-base-content card card-compact pt-5 shadow-xl">


        <figure>
            <div>
                <img class=" object-cover max-h-[180px]  h-full w-full" :src="pais.flags.png" :alt="pais.flags.alt || pais.name.common">
            </div>
        </figure>

        <div  class="card-body">
          
            <div  class="collapse collapse-plus card-actions gap-0 ">
                <label for="my-accordion-1" class="bg-primary"></label>
                <input type="radio" id="my-accordion-1" name="my-accordion-1"  checked="true" /> 
                <div class="collapse-title p-0 m-0 text-xl text-base-300 hover:text-base-100 font-medium">
                    <h2 class="mt-3 ps-3 mx-auto text-xl card-title drop-shadow-xl font-bold text-primary">
                        {{ pais.name.nativeName?.spa?.common || pais.name.common }}
                    </h2>
                </div>
                <div  class="collapse-content grid-2">
                    <p class="text-center text-2xl text-secondary py-3"> 
                        <span v-for="continente in pais.continents"
                            class="font-bold">
                            {{ continente }}
                        </span>
                    </p>
                    <p class="text-sm text-secondary flex justify-between items-start">Capital:
                        <span v-for="capital in pais.capital" class="font-extrabold text-end"> {{ capital }}
                            <template> </template>
                        </span>
                    </p>
                    <p class="flex justify-between text-sm  text-secondary">Población: 
                        <span class="font-bold">
                            {{ pais.population?.toLocaleString() }}
                        </span>
                    </p>
                    <p class="flex justify-between text-sm text-secondary">Región: 
                        <span class="font-bold"> 
                            {{ pais.region }}
                        </span>
                    </p>
                    <p class="flex justify-between text-sm text-secondary">Subregión: 
                        <span class="font-bold"> 
                            {{ pais.subregion }}
                        </span>
                    </p>
                    <p class="flex text-sm pt-3 justify-center ">
                        <span class="font-bold text-base-300 hover:text-base-100 ">
                            <a :href="pais.maps.googleMaps">Ver Mapa</a>
                        </span>
                    </p>
                </div>
               
            </div>
        </div>
    </div>
</template>