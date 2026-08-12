import { defineTool } from "@lovable.dev/mcp-js";

const services = [
  { name: "Forestry Mulching", description: "Reclaim land in a single pass. No burning, no hauling." },
  { name: "Underbrush Clearing", description: 'Dense brush, saplings, and vegetation up to 6" — cleared clean.' },
  { name: "Brush Hogging", description: "Mow down tall grass, weeds, and overgrown fields efficiently." },
  { name: "Property Line Clearing", description: "Precise boundary and fence row maintenance." },
  { name: "Fire Prevention", description: "Create defensible space and firebreaks around structures." },
  { name: "Trail Cutting", description: "Clean access paths through woods and fields." },
  { name: "Invasive Growth Removal", description: "Eliminate honeysuckle, briars, and invasive species." },
  { name: "Debris Removal", description: "Clear fallen limbs, brush piles, and land debris from your property." },
  { name: "Storm Clean Up", description: "Fast response to storm damage — downed trees, debris, and restoration." },
];

export default defineTool({
  name: "list_services",
  title: "List services",
  description: "List the land clearing and forestry mulching services H & L Solutions LLC offers.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
    structuredContent: { services },
  }),
});
