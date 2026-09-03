export interface LocationDetail {
  slug: string;
  city: string;
  county: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  localDetails: string[];
}

export const locations: LocationDetail[] = [
  {
    slug: "alexander-city",
    city: "Alexander City",
    county: "Tallapoosa County",
    metaTitle: "Forestry Mulching in Alexander City, AL | H & L Solutions",
    metaDescription:
      "Forestry mulching and land clearing in Alexander City, AL. Our home base. One machine, no burning or hauling, free walkthrough quotes. Call 256-749-5191.",
    headline: "Land Clearing From Your Local Crew",
    intro:
      "Alexander City is our home base, so we know the land, the growth, and the terrain here firsthand. From overgrown lots in town to acreage near Lake Martin, we mulch brush and small trees right where they stand and leave a clean, park-like finish behind.",
    localDetails: [
      "Our home base, fastest scheduling and response times",
      "Lot clearing and underbrush removal throughout Alexander City",
      "Acreage and lake-area properties near Lake Martin",
      "Fence line and property boundary clearing for rural parcels",
    ],
  },
  {
    slug: "dadeville",
    city: "Dadeville",
    county: "Tallapoosa County",
    metaTitle: "Forestry Mulching in Dadeville & Lake Martin, AL | H & L Solutions",
    metaDescription:
      "Forestry mulching, brush clearing, and trail cutting in Dadeville and the Lake Martin area of Tallapoosa County. Eco-friendly, no burning. Free quotes.",
    headline: "Clearing Land Around Lake Martin",
    intro:
      "Dadeville and the Lake Martin shoreline are full of wooded lots and acreage that grow up fast. We reclaim overgrown property, open up views, and cut trails with forestry mulching, an eco-friendly process with no burn piles and no hauling, just clean ground and a layer of mulch.",
    localDetails: [
      "Lakefront and near-lake lot clearing around Lake Martin",
      "View and access improvements for wooded acreage",
      "Trail cutting for hunting, ATV, and property access",
      "Brush hogging for field and pasture maintenance",
    ],
  },
  {
    slug: "sylacauga",
    city: "Sylacauga",
    county: "Talladega County",
    metaTitle: "Forestry Mulching in Sylacauga, AL | H & L Solutions",
    metaDescription:
      "Forestry mulching and land clearing services in Sylacauga and Talladega County, AL. Clear brush, reclaim acreage, no burning or hauling. Free quotes.",
    headline: "Professional Mulching for Talladega County Land",
    intro:
      "We bring our Kubota mulching setup west into Sylacauga and Talladega County for land clearing jobs of all sizes. Dense underbrush, overgrown fence rows, and neglected acreage get mulched in place, leaving your property clean, usable, and protected from erosion.",
    localDetails: [
      "Full-service land clearing throughout Sylacauga",
      "Underbrush and invasive growth removal on rural acreage",
      "Fence row and property line clearing",
      "Storm debris cleanup and site restoration",
    ],
  },
  {
    slug: "ashland",
    city: "Ashland",
    county: "Clay County",
    metaTitle: "Forestry Mulching in Ashland & Clay County, AL | H & L Solutions",
    metaDescription:
      "Forestry mulching and land reclamation in Ashland and Clay County, AL. Clear hunting land, timber stands, and overgrown acreage. Free quotes.",
    headline: "Land Reclamation for Clay County",
    intro:
      "Clay County's timberland and hunting properties need regular clearing to stay productive. We serve Ashland and the surrounding area with forestry mulching that reclaims overgrown stands, cuts shooting lanes and trails, and restores habitat, all without disturbing the soil.",
    localDetails: [
      "Hunting land management: trails, lanes, and food plot access",
      "Timber stand improvement and underbrush removal",
      "Reclaiming overgrown and neglected acreage",
      "Firebreaks and defensible space around structures",
    ],
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
