import { Trees, Construction, Tractor, MapPin, Shield, Axe, Leaf, Brush, Trash2, CloudRain, LucideIcon } from "lucide-react";
import beforeLot from "@/assets/before-1.jpg";
import afterLot from "@/assets/after-1.jpg";
import beforeFence from "@/assets/before-2.jpg";
import afterFence from "@/assets/after-2.jpg";

export interface ServiceDetail {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  benefits: string[];
  process: string[];
  beforeAfter?: { before: string; after: string; caption: string };
}

export const services: ServiceDetail[] = [
  {
    slug: "forestry-mulching",
    icon: Construction,
    title: "Forestry Mulching",
    shortDescription: "Reclaim land in a single pass. No burning, no hauling.",
    metaTitle: "Forestry Mulching in Alexander City, AL | H & L Solutions",
    metaDescription:
      "Professional forestry mulching in Alexander City and Tallapoosa County. One machine clears brush and trees up to 6\" and leaves nutrient-rich mulch. Free quotes.",
    headline: "Reclaim Your Land in a Single Pass",
    intro:
      "Our Kubota SVL75-3 with a drum mulcher grinds standing brush, saplings, and trees up to 6 inches into a clean layer of mulch, right where they stand. No burn piles, no hauling fees, no bare dirt left behind. The mulch layer holds moisture, prevents erosion, and breaks down into topsoil.",
    benefits: [
      "One machine, one pass, no dozers, burn permits, or dump fees",
      "Mulch layer prevents erosion and returns nutrients to the soil",
      "Selective clearing: keep the trees you want, remove the rest",
      "Handles vegetation up to 6 inches in diameter",
      "Eco-friendly alternative to burning or landfills",
    ],
    process: [
      "Walk the property together and mark what stays and what goes",
      "Mulch overgrowth into a clean, park-like finish",
      "Review the finished work with you before we leave",
    ],
    beforeAfter: {
      before: beforeLot,
      after: afterLot,
      caption: "Overgrown lot reclaimed in Alexander City",
    },
  },
  {
    slug: "underbrush-clearing",
    icon: Trees,
    title: "Underbrush Clearing",
    shortDescription: "Dense brush, saplings, and vegetation up to 6\", cleared clean.",
    metaTitle: "Underbrush Clearing in Tallapoosa County | H & L Solutions",
    metaDescription:
      "Clear dense underbrush, saplings, and thick vegetation from your property. Serving Alexander City and 10+ Alabama counties. Get a free quote today.",
    headline: "Turn Impenetrable Thicket Into Usable Land",
    intro:
      "Years of unchecked growth can swallow a property. We mulch dense underbrush, saplings, and thick vegetation up to 6 inches, opening up your land for building, recreation, or simply enjoying it again, without disturbing the soil or mature trees you want to keep.",
    benefits: [
      "Clears dense brush and saplings up to 6 inches",
      "Preserves mature trees and topsoil",
      "Instantly improves access, sightlines, and property value",
      "Prepares land for building, fencing, or planting",
    ],
    process: [
      "Assess density and terrain on a free walkthrough",
      "Mulch the undergrowth in passes until the ground is clean",
      "Finish with a walkthrough to confirm every area is cleared",
    ],
  },
  {
    slug: "brush-hogging",
    icon: Tractor,
    title: "Brush Hogging",
    shortDescription: "Mow down tall grass, weeds, and overgrown fields efficiently.",
    metaTitle: "Brush Hogging & Field Mowing in Alexander City | H & L Solutions",
    metaDescription:
      "Brush hogging and field mowing for overgrown pastures and lots in Alexander City, AL and surrounding counties. Fast, affordable, free quotes.",
    headline: "Bring Overgrown Fields Back Under Control",
    intro:
      "Tall grass, weeds, and overgrown pastures get knocked down fast with professional brush hogging. It's the quickest, most affordable way to maintain acreage, prep a lot for sale, or keep a field from turning back into woods.",
    benefits: [
      "Fast mowing for tall grass, weeds, and light brush",
      "Ideal for pasture maintenance and lot upkeep",
      "Affordable recurring service available",
      "Keeps land compliant and presentable",
    ],
    process: [
      "Walk the field and note obstacles, fences, and wet areas",
      "Mow in efficient passes until the field is level",
      "Schedule follow-up maintenance if you want it kept short",
    ],
  },
  {
    slug: "property-line-clearing",
    icon: MapPin,
    title: "Property Line Clearing",
    shortDescription: "Precise boundary and fence row maintenance.",
    metaTitle: "Property Line & Fence Row Clearing | H & L Solutions",
    metaDescription:
      "Precise property line and fence row clearing in Alexander City and surrounding Alabama counties. See your boundaries again. Free quotes.",
    headline: "See Your Boundaries Again",
    intro:
      "Overgrown fence rows hide your boundary lines, strain fences, and invite disputes. We clear fence lines and property boundaries precisely, opening them up for surveyors, fence repairs, and peace of mind, while leaving a clean mulched path you can actually walk.",
    benefits: [
      "Reopens survey lines and boundary markers",
      "Extends the life of existing fencing",
      "Creates walkable access along your property edge",
      "Resolves encroachment and visibility issues",
    ],
    process: [
      "Walk the line with you to confirm the boundary",
      "Mulch the fence row on one or both sides as needed",
      "Leave a clean path for fencing, surveying, or inspection",
    ],
    beforeAfter: {
      before: beforeFence,
      after: afterFence,
      caption: "Fence line cleanup, boundary reopened",
    },
  },
  {
    slug: "fire-prevention",
    icon: Shield,
    title: "Fire Prevention",
    shortDescription: "Create defensible space and firebreaks around structures.",
    metaTitle: "Firebreaks & Defensible Space in Alabama | H & L Solutions",
    metaDescription:
      "Forestry mulching firebreaks and defensible space around homes and structures in Tallapoosa County, AL. Reduce wildfire fuel. Free quotes.",
    headline: "Defensible Space That Protects What Matters",
    intro:
      "Dry brush and ladder fuel around a home or barn is a wildfire's path in. We mulch that fuel into the ground, creating firebreaks and defensible space around structures, reducing risk without stripping the land bare.",
    benefits: [
      "Removes ladder fuels and dry brush near structures",
      "Creates clean firebreaks along property edges",
      "Mulch layer stays moist longer than cleared dirt",
      "Protects homes, barns, and outbuildings",
    ],
    process: [
      "Identify fuel hazards around each structure",
      "Mulch a defensible perimeter to the width you need",
      "Recommend ongoing maintenance to keep fuels low",
    ],
  },
  {
    slug: "trail-cutting",
    icon: Axe,
    title: "Trail Cutting",
    shortDescription: "Clean access paths through woods and fields.",
    metaTitle: "Trail Cutting & Access Paths in Alabama | H & L Solutions",
    metaDescription:
      "Custom trail cutting for hunting, ATV, and property access in Alexander City, AL and surrounding counties. Clean mulched paths. Free quotes.",
    headline: "Clean Trails Through Woods and Fields",
    intro:
      "Whether it's hunting access, ATV trails, or a path to the back forty, we cut clean, mulched trails through woods and fields with no ruts, no piles, just a path you can use the same day.",
    benefits: [
      "Hunting, ATV, and walking trails cut to your layout",
      "Mulched surface, usable immediately, no mud holes",
      "Selective cutting keeps the woods' character",
      "Shooting lanes and food plot access available",
    ],
    process: [
      "Flag the trail route together on a walkthrough",
      "Cut and mulch the path to your preferred width",
      "Open connecting routes for full property access",
    ],
  },
  {
    slug: "invasive-growth-removal",
    icon: Leaf,
    title: "Invasive Growth Removal",
    shortDescription: "Eliminate honeysuckle, briars, and invasive species.",
    metaTitle: "Invasive Species Removal in Alabama | H & L Solutions",
    metaDescription:
      "Remove honeysuckle, privet, briars, and invasive growth from your Alabama property. Forestry mulching stops regrowth. Free quotes.",
    headline: "Take Your Property Back From Invasive Growth",
    intro:
      "Honeysuckle, privet, briars, and kudzu choke out native plants and spread every year they're left alone. Forestry mulching grinds invasive growth below the surface and covers it in mulch, slowing regrowth and giving native vegetation room to come back.",
    benefits: [
      "Eliminates honeysuckle, privet, briars, and kudzu",
      "Mulch cover slows invasive regrowth",
      "Restores native habitat and healthy timber",
      "Reclaims fence rows, creek banks, and timber stands",
    ],
    process: [
      "Identify invasive species and how far they've spread",
      "Mulch infested areas thoroughly",
      "Plan follow-up treatment where regrowth is likely",
    ],
  },
  {
    slug: "debris-removal",
    icon: Trash2,
    title: "Debris Removal",
    shortDescription: "Clear fallen limbs, brush piles, and land debris from your property.",
    metaTitle: "Debris & Fallen Timber Removal in Alabama | H & L Solutions",
    metaDescription:
      "Grapple services, brush pile clearing, and fallen timber removal in Alexander City, AL. Larger trees piled or coordinated with tree services. Free quotes.",
    headline: "Clear the Piles, Limbs, and Fallen Timber",
    intro:
      "Brush piles, fallen limbs, and downed timber make land unusable and attract pests. Using grapple-equipped equipment, we pile, mulch, or remove debris efficiently. For larger trees, we handle piling or coordinate with specialized tree services to get the job done right.",
    benefits: [
      "Grapple service for fallen timber and heavy debris",
      "Brush piles mulched on site, no hauling costs",
      "Larger trees piled or coordinated with tree services",
      "Restores usable, clean ground fast",
    ],
    process: [
      "Walk the property and identify every pile and hazard",
      "Mulch, pile, or remove debris as appropriate",
      "Leave the ground clean and ready to use",
    ],
  },
  {
    slug: "storm-cleanup",
    icon: CloudRain,
    title: "Storm Clean Up",
    shortDescription: "Fast response to storm damage: downed trees, debris, and restoration.",
    metaTitle: "Storm Damage Cleanup in Alexander City, AL | H & L Solutions",
    metaDescription:
      "Fast storm cleanup in Alexander City and surrounding Alabama counties. Downed trees, debris removal, and land restoration. Call 256-749-5191.",
    headline: "Fast Response When Storms Hit",
    intro:
      "Alabama storms leave downed trees, scattered limbs, and blocked access behind. We respond quickly to clear storm debris, open driveways and roads, and restore your property, mulching what we can on site so you're not left with piles.",
    benefits: [
      "Fast response after storm damage",
      "Reopens driveways, roads, and access points",
      "On-site mulching, no waiting on haul-off",
      "Full debris removal and land restoration",
    ],
    process: [
      "Call us; we prioritize storm-damage jobs",
      "Clear access points first, then the rest of the property",
      "Mulch or remove debris and restore the ground",
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
