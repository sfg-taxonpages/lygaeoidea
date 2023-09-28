---
# See project.yml for variables.
layout: blank
---

<div class="bg-base-foreground">
  <ImageCarrousel>
    <div class="flex flex-col justify-center sm:items-center w-full h-full bg-black bg-opacity-25 gap-4">
      <span class="text-3xl sm:text-4xl px-4 font-medium text-white">{{ app:project_name }}</span>
      <span class="text-lg sm:text-xl px-4 text-white">Taxonomic database of the world’s seed bugs, stilt bugs, chinch bugs, big-eyed bugs and relatives</span>
      <div class="p-4 bg-black bg-opacity-25 w-full max-w-lg box-border">
        <AutocompleteOtu
          autofocus
          class="w-full"
          placeholder="Search by taxon name..."
        />
      </div>
    </div>
  </ImageCarrousel>
  <div class="container mx-auto">
    <SectionData/>
    </div>
<hr class="border-base-muted mt-0">
<div class="container mx-auto pb-10 px-4 md:px-0 box-border">
The {{ app:project_name }} (LSF) is a taxonomic database of the world’s seed bugs, stilt bugs, chinch bugs, big-eyed bugs and relatives, both living and fossil. It has full taxonomic and synonymic information for all taxa, with complete taxonomic references, and images, specimen records and other useful resources are constantly being added.

The core purpose of the LSF is to provide a resource that makes research on the group more efficient as well as to cover the needs of policy-makers, environmental managers and the wider public for a consistent and up-to-date classification of the world’s Lygaeoidea species.

## Authors

Pablo M. Dellapé, División Entomología, Museo de La Plata, Argentina [ORCID](https://orcid.org/0000-0002-6914-1026)

Thomas J. Henry, Systematic Entomology Laboratory, ARS, USDA c/o National Museum of Natural History, Smithsonian Institution, Washington, DC [ORCID](https://orcid.org/0000-0002-0653-7728)

David C. Eades\*, (Historical) Principal Database Developer Illinois Natural History Survey

An \* after someone’s name denotes a past contributor, now inactive.

## Discover more

Find out more on this new public version of LSF. Learn how to collaborate with the project. Contact information, technical details, and more are available at [About](about)

## Announcements

August 2023 - Welcome to Our New Lygaeoidea Species File Website. Please enjoy these new ways to access our Lygaeoidea data. We look forward to your insights, participation, use of our data, and your contributions.

  </div>
</div>

<script setup>
import ImageCarrousel from './components/ImageCarrousel.vue'
import SectionData from './components/Section/SectionData.vue'
</script>
