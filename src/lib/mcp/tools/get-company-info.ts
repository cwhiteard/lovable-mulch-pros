import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_company_info",
  title: "Get company info",
  description:
    "Get H & L Solutions LLC company overview: what they do, contact details, and how to request a free estimate.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: "H & L Solutions LLC",
      focus: "Forestry mulching and land reclamation",
      phone: "256-749-5191",
      email: "hlsolutionsal@gmail.com",
      website: "https://hlsolutions.net",
      equipment: "Kubota SVL75-3 track loader with an Arthesis drum mulcher",
      estimates: "Free estimates. Call, text, or email with acreage, vegetation type, and site access.",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
