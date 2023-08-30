---
# See project.yml for variables.
---
# About
_Building community around and gathering knowledge about the world’s seed bugs, milkweed bugs, and ground bugs_

## Overview
The _{{ app:project_name }}_ file offers a community-curated collection of richly-cited and annotated information on the taxonomy of Earth’s {{app:focal_taxon_common_name}}. Data found here come from a collaboratively compiled database originating in an instance of [TaxonWorks](https://taxonworks.org) managed by the [Species File Group](https://speciesfilegroup.org). See [Contribute](#contribute-or-get-help) for how you can participate. This site is built using TaxonPages, [learn more and get help](https://github.com/SpeciesFileGroup/taxonpages). For more on how this site is built please see the [Software](#software) section.

## Gaps as opportunity
The Earth's biodiversity is vast, the data captured to describe it are minimal in comparison, but still immense. All projects of this nature contain gaps, i.e. opportunities for collaboration on future work, grants, and research. Known gaps in this project include {an incomplete catalog of type-material (important specimens that are linked to the names given to species}, {species names published after XXXX}, {biological associations}, {distributions from X} and more. [Contact us](#contribute-or-get-help) if you would like to help us address these, in particular we'd like to prioritize {choose from list above}.

## History
_Our old website is now a read-only resource available at [http://{{app:focal_taxon}}.archive.speciesfile.org](http://{{app:focal_taxon}}.archive.speciesfile.org)._

{How did this specific SF group come to be? When did we start our efforts? What are the historically important catalogs behind these data. Potentially linked to a shared history at sfg.org if we get that done.}

The Lygaeoidea Species File data are based on the world catalogues of Slater (1964) and Slater & O´Donnell (1995) and the Catalog of the Berytidae of the World of Henry & Froeschner (1998):
- Slater, J. A. 1964. A Catalogue of the Lygaeidae of the World. Vol. I & II. University of Connecticut, Storrs.
- Slater, J. A. & J. E. O’Donnell. 1995. A Catalogue of the Lygaeidae of the World (1960-1994). New York Entomological Society, New York.
- Henry, T. J. & R. C. Froeschner. 1998. Catalog of the Stilt bugs, or Berytidae, of the World (Insecta: Hemiptera: Heteroptera). Contributions of the American Entomological Institute 30(4): 1-72.

The first two catalogues were digitalized through a [GBIF](https://www.gbif.org/) award received by [Randall Schuh](https://orcid.org/0000-0002-0713-1367) (AMNH) in 2003. 

As of August 2023 all data in the former Species File Websites were frozen and shortly thereafter migrated to TaxonWorks. As with all migrations of this nature the process is both lossy (e.g. some data could not be mapped with certainty) and improved (e.g. semantics of the new models have more precision and clarity). The old website remains an excellent resource for fact-checking this migration. If you spot something that needs attention, please see [Contribute or get help](#contribute-or-get-help).

### Support and funding
_This Species File functionality and content is serviced in part by the Species File Group._

## Contributors

|name|role|affiliation|identifier|
|:----|:----|:----|:----|
| Pablo M. Dellapé| Author | División Entomología, Museo de La Plata, Argentina | [ORCiD](https://orcid.org/0000-0002-6914-1026)
| Thomas J. Henry | Author | Systematic Entomology Laboratory, ARS, USDA c/o National Museum of Natural History, Smithsonian Institution, Washington, DC |
| David C. Eades* | (Historical) Principal Database Developer | Illinois Natural History Survey |

_An \* after someone's name denotes a past contributor, now inactive._

## Contribute or get help
_Projects of this nature require expertise in many different areas, not only on the taxa being treated. If you can imagine a way to contribute we'd love to hear about it._

- **<a href="mailto:{{app:contact_email}}">Email</a>** is the primary way to contact us, including enquiries about **joining** the researchers building this Species File. { ... or join a regular support meeting. } { See also [Governance](#governance). }
- **Provide new data or identify a problem with existing data** by contacting us (see above). { Alternate data manager email}, {Issue tracker option}.
- **Cite** this website via the citation at the bottom of the page. See also [Terms of use](#terms-of-use).
- **Something is broken** (i.e. with TaxonPages the software)? See [Software](#software), or use the [TaxonPages Issue Tracker](https://github.com/SpeciesFileGroup/taxonpages/issues).

### Extended data access
_A goal of these pages is to ensure that the underlying data behind them are accessible in their digital format. By diversifying the ways the data are accessible (e.g. on the web page, in JSON, in Darwin Core standard), we increase the opportunities to both spot errors and provide new services and portals._

- Researchers working on this project use their rich, multi-faceted access to the data via TaxonWorks' interfaces (e.g. filters, reporting, downloads). Access requires a project account, see [Contribute or get help](#contribute-or-get-help).
- Data behind individual panels per page can be seen via the _Sitemap_ functionality.
- Each page offers an option to download a _DarwinCore formatted table_ containing all data for this taxon and its children.
- Panel data (each section on a page) and other information not available on these pages are accessible via a [TaxonWorks API](https://api.taxonworks.org) at [https://sfg.taxonworks.org/api/v1](https://sfg.taxonworks.org/api/v1).
- Core taxonomic data are exported to and available at the [Catalogue of Life]({https://link_to_root_taxon_page}) and its [associated API]({https://link_to_api_for_pertinent_dataset}).

### Software
These pages are built with completely open-source software. [Read more](http://speciesfilegroup.org/docs/taxonworks_in_production_at_sfg.html) about what drives them, how they supported by the Species File Group and their many collaborators, or [join weekly support meetings](https://speciesfilegroup.org/events.html) and see how it all fits together, includes links to issue trackers.

### Governance
About our group structure, how the rules behind joining and participating are set.

## Related resources

### References
- Slater, J. A. 1964. A Catalogue of the Lygaeidae of the World. Vol. I & II. University of Connecticut, Storrs.
- Slater, J. A. & J. E. O’Donnell. 1995. A Catalogue of the Lygaeidae of the World (1960-1994). New York Entomological Society, New York.
- Henry, T. J. & R. C. Froeschner. 1998. Catalog of the Stilt bugs, or Berytidae, of the World (Insecta: Hemiptera: Heteroptera). Contributions of the American Entomological Institute 30(4): 1-72.

### Websites

|Name|URL|Note|
|:----|:----|:----|
| Internet Archive has Slater 1964 Vol. II | Search [Internet Archive](https://archive.org/) | Other references cited in [History](#history) above may be there as well |

## Terms of use (Copyright guidance)

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

