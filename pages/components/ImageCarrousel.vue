<template>
  <div class="overflow-hidden h-[550px] w-full relative">
    <img
      class="object-cover overflow-hidden h-[550px] w-full absolute my-0"
      :key="currentImage.src"
      :src="currentImage.src"
      alt="Dichroplus maculipennis"
    />
    <div class="bg-black bg-opacity-25 absolute h-full w-full top-0">
      <slot />
    </div>
    <div class="absolute bottom-2 right-4">
      <span class="z-10 text-white text-sm drop-shadow">
        <RouterLink
          v-if="currentImage.otuId"
          class="text-white decoration-transparent"
          :to="{ name: 'otus-id', params: { id: currentImage.otuId } }"
        >
          <i>{{ currentImage.label }}</i> © {{ currentImage.copyright }}
        </RouterLink>
      </span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'

import Artemidorus from './images/Artemidorus sp.(Heterogastridae) (c) luluchouette.jpeg'
import beosusQuadripunctatus from './images/Beosus quadripunctatus (c) Dimitǎr Boevski.jpeg'
import horridipameraRobusta from './images/Horridipamera robusta (c) Tom.jpeg'
import oxycarenusLavaterae from './images/Oxycarenus lavaterae (c) Juraj Ahel.jpg'
import oxycarenusLavateraeJens from './images/Oxycarenus lavaterae (c) Jens Oldenburg.jpg'
import ragliusConfusus from './images/Raglius confusus (c) Raglius confusus.jpeg'
import lygaeusTurcicus from './images/Lygaeus turcicus (c) Lygaeus turcicus.jpeg'
import oedancalaDorsalis from './images/Oedancala Dorsalis (c) Steven Lamonde.jpeg'
import jalysus from './images/Jalysus (c) Adrienne van den Beemt.jpg'
import oncopeltusFasciatus from './images/Oncopeltus fasciatus (c) Jay Brasher.jpg'
import rhyparochromusPini from './images/Rhyparochromus pini (c) Paweł Ryszawa.jpg'
import oedancalaCrassimana from './images/Oedancala crassimana (c) Joshua Soileau.jpeg'
import oncopeltus from './images/Oncopeltus sp (c) DiegoH.jpg'

const props = defineProps({
  duration: {
    type: Number,
    default: 5000
  }
})

const images = [
  {
    label: 'Artemidorus sp.(Heterogastridae)',
    copyright: 'luluchouette',
    src: Artemidorus,
    otuId: 819322
  },
  {
    label: 'Beosus quadripunctatus',
    copyright: 'Dimitǎr Boevski',
    src: beosusQuadripunctatus,
    otuId: 921125
  },
  {
    label: 'Horridipamera robusta',
    copyright: 'Tom',
    src: horridipameraRobusta,
    otuId: 922353
  },
  {
    label: 'Oxycarenus lavaterae',
    copyright: 'Juraj Ahel',
    src: oxycarenusLavaterae,
    otuId: 917827
  },
  {
    label: 'Oxycarenus lavaterae',
    copyright: 'Jens Oldenburg',
    src: oxycarenusLavateraeJens,
    otuId: 917827
  },
  {
    label: 'Raglius confusus',
    copyright: 'carnifex',
    src: ragliusConfusus,
    otuId: 921359
  },
  {
    label: 'Lygaeus turcicus',
    copyright: 'averagewalrus',
    src: lygaeusTurcicus,
    otuId: 918387
  },
  {
    label: 'Oedancala dorsalis',
    src: oedancalaDorsalis,
    copyright: 'Steven Lamonde',
    otuId: 919636
  },
  {
    label: 'Jalysus',
    src: jalysus,
    copyright: 'Adrienne van den Beemt',
    otuId: 923432
  },
  {
    label: 'Oncopeltus fasciatus',
    src: oncopeltusFasciatus,
    copyright: 'Jay Brasher',
    otuId: 919296
  },
  {
    label: 'Rhyparochromus pini',
    copyright: 'Paweł Ryszawa',
    src: rhyparochromusPini,
    otuId: 921112
  },
  {
    label: 'Oedancala crassimana',
    copyright: 'Joshua Soileau',
    src: oedancalaCrassimana,
    otuId: 919628
  },
  {
    label: 'Oncopeltus sp (c)',
    copyright: 'DiegoH',
    src: oncopeltus,
    otuId: 919234
  }
]

const currentIndex = ref(null)
const currentImage = computed(() => images[currentIndex.value] || {})

onMounted(() => {
  currentIndex.value = Math.floor(Math.random() * images.length)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
