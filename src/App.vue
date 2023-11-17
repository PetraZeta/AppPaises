<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import PageHeader from "./components/PageHeader.vue";
import ListaPaises from "./components/ListaPaises.vue";
import axiosClient from "./utils/axios";
import { Pais } from "./models/pais.model";
import CambiarTema from './components/CambiarTema.vue';

const paises = ref<Pais[]>([]);
const search = ref("");
const paisesFiltrados = ref<Pais[]>([]);
const pagina = ref(1);
const paisxPag = ref(6);
const paisesPag = ref<Pais[]>([]);
const totalPag = ref(0);

const fetchPaises = async () => {
  try {
    const { data } = await axiosClient.get("/all");
    paises.value = data;
    totalPag.value = paises.value.length;

  } catch (error) {
    console.log(error);
  }
};
const filterPaises = () => {
  paisesFiltrados.value = paises.value.filter((pais) =>
    pais.name.nativeName?.spa?.common.toLowerCase().includes(search.value.toLowerCase())
    || pais.name.common.toLowerCase().includes(search.value.toLowerCase())
  )
  totalPag.value = Math.ceil(paisesFiltrados.value.length / paisxPag.value); // Actualiza el número total de páginas
  console.log(totalPag.value)
  console.log(paisesFiltrados.value.length)

}

const slicePaises = (currentPaises: Pais[]) => {
  const start = (pagina.value - 1) * paisxPag.value;
  const end = pagina.value * paisxPag.value;
  paisesPag.value = currentPaises.slice(start, end);
};

const cambiaPag = (newPage: number) => {
  pagina.value = newPage;
}

onMounted(() => {
  fetchPaises();
});
watch([paises, pagina, paisesFiltrados], () => {

  slicePaises(
    paisesFiltrados.value.length <= 0 && search.value === ""
      ? paises.value
      : paisesFiltrados.value
  );

});
</script>

<template>
  <!-- INPUTS PARA CAMBIAR THEME-->
  <CambiarTema />
  <!-- CABECERA TITULO-->
  <PageHeader />
  <!-- INPUT BUSCADOR-->
  <!-- TODO-- SACAR A UN COMPONENTS -->
  <section class="container max-w-screen-lg mx-auto px-6">
    <div class="mx-12 mb-8">
      <input type="text" class="border border-primary rounded w-full p-1 px-4" placeholder="Busca un país"
        v-model="search" @input="filterPaises" />
    </div>
  </section>
  <!-- LISTA DE PAISES-->
  <ListaPaises :paises="paisesPag" />
  <!-- PAGINACION -->
  <!-- TODO-- SACAR A UN COMPONENTS -->
  <section class="py-10">
    <div :class="{ 'invisible': totalPag === 0 }">
      <div class="mb-8 flex justify-evenly space-x-6">
        <button :disabled="pagina <= 1" :class="{ 'opacity-50': pagina <= 1 }" @click="cambiaPag(pagina - 1)"
          class="border text-3xl font-bold border-primary w-[50px] h-[50px] rounded-full px-3 hover:bg-primary hover:text-neutral">
          -
        </button>
        <p class="pt-3">
          página {{ pagina }} de {{ Math.ceil(totalPag / paisxPag) }}
        </p>
        <button :disabled="pagina >= totalPag / paisxPag" :class="{ 'opacity-50': pagina >= totalPag / paisxPag }"
          @click="cambiaPag(pagina + 1)"
          class="border text-3xl font-bold border-primary w-[50px] h-[50px] text-center rounded-full px-3  hover:bg-primary hover:text-neutral">
          +
        </button>
      </div>
    </div>
  </section>
  
</template>


