---
# See project.yml for variables.
---
# About

## Overview
Data found here come from a collaboratively compiled database originating in an instance of [TaxonWorks](https://taxonworks.org) managed by the [Species File Group](https://speciesfilegroup.org). See Community participation below for how you can participate. This site is built using TaxonPages, [learn more and get help](https://github.com/SpeciesFileGroup/taxonpages). For more on how this site is built please see the [Software](#software) section.

## History
_Our old website is now a read-only resource available at [http://{{app:focal_taxon}}.archive.speciesfile.org](http://{{app:focal_taxon}}.archive.speciesfile.org)._

The Lygaeoidea Species File data are based on the world catalogues of Slater (1964) and Slater & O´Donnell (1995) and the Catalog of the Berytidae of the World of Henry & Froeschner (1998):
- Slater, J. A. 1964. A Catalogue of the Lygaeidae of the World. Vol. I & II. University of Connecticut, Storrs.
- Slater, J. A. & J. E. O’Donnell. 1995. A Catalogue of the Lygaeidae of the World (1960-1994). New York Entomological Society, New York.
- Henry, T. J. & R. C. Froeschner. 1998. Catalog of the Stilt bugs, or Berytidae, of the World (Insecta: Hemiptera: Heteroptera). Contributions of the American Entomological Institute 30(4): 1-72.

The first two catalogues were digitalized through a [GBIF](https://www.gbif.org/) award received by Randall Schuh (AMNH) in 2003. 

Since 2018, the database is online, with more the 780 papers added at date (2023), mainly from the last 30 years, and it is being constantly updated.

As of August 2023 all data in the former Species File Websites were frozen and shortly thereafter migrated to TaxonWorks. As with all migrations of this nature the process is both lossy (e.g. some data could not be mapped with certainty) and improved (e.g. semantics of the new models have more precision and clarity). The old website remains an excellent resource for fact-checking this migration. If you spot something that needs attention, please see community participation below.

### Governance
Editorial board/Authors
Their main task is adding published taxa, citations, and data to LSF, correcting errors. The Editorial board is based at the Museo de La Plata, Universidad Nacional de La Plata, Argentina and in the National Museum of Natural History, Smithsonian Institution, Washington, DC.

### Editorial policy
The classification and nomenclature used for the database should reflect the most recent published information. If a change in classification reflects a subjective judgment, and the matter is of sufficient interest that conflicting opinions are likely to be published; then the editor may delay entering the change until a predominant opinion emerges from multiple authors. However, each conflicting citation should be entered with a note giving the opinion of that author.

### Community participation
Members of the Heteropterist’ community doing serious work with Lygaeoidea are invited to participate in making this website and database better. In most cases this will mean correcting or adding information fitting the individual’s specific research interest. Participation can be at various levels.

- **<a href="mailto:{{app:contact_email}}">Email</a>** is the primary way to contact us, including enquiries about **joining** the researchers building this Species File.
- **Submit images for inclusion in the database** The source will be acknowledged when users view images.
- **Provide new data or identify a problem with existing data** by contacting us (see above).
- **Develop new information such as interactive keys** There are many useful ways the project could be expanded. This final level of participation requires some knowledge of computer programming and a serious time commitment. 
- **Cite** this website via the citation at the bottom of the page. See also [Terms of use](#terms-of-use).
- **Something is broken** (i.e. with TaxonPages the software)? See [Software](#software), or use the [TaxonPages Issue Tracker](https://github.com/SpeciesFileGroup/taxonpages/issues).

### Software
These pages are built with completely open-source software. [Read more](http://speciesfilegroup.org/docs/taxonworks_in_production_at_sfg.html) about what drives them, how they supported by the Species File Group and their many collaborators, or [join weekly support meetings](https://speciesfilegroup.org/events.html) and see how it all fits together, includes links to issue trackers.

### Extended data access
_A goal of these pages is to ensure that the underlying data behind them are accessible in their digital format. By diversifying the ways the data are accessible (e.g. on the web page, in JSON, in Darwin Core standard), we increase the opportunities to both spot errors and provide new services and portals._

- Researchers working on this project use their rich, multi-faceted access to the data via TaxonWorks' interfaces (e.g. filters, reporting, downloads). Access requires a project account.
- Data behind individual panels per page can be seen via the _Sitemap_ functionality.
- Each page offers an option to download a _DarwinCore formatted table_ containing all data for this taxon and its children.
- Panel data (each section on a page) and other information not available on these pages are accessible via a [TaxonWorks API](https://api.taxonworks.org) at [https://sfg.taxonworks.org/api/v1](https://sfg.taxonworks.org/api/v1).
- Core taxonomic data are exported to and available at the [Catalogue of Life]({https://link_to_root_taxon_page}) and its [associated API]({https://link_to_api_for_pertinent_dataset}).
  
### Terms of use (Copyright guidance)

<div class="flex items-center gap-2">
  <a
    class="min-w-fit"
    href="{{ app:copyright_image_link }}"
  >
    <img 
      src="{{ app:copyright_image }}" 
      alt="copyright" 
      class="m-0"
    >
  </a>
  <span>{{ app:copyright_text }}</span>
</div>

