import { defineMcp } from "@lovable.dev/mcp-js";
import getCompanyInfoTool from "./tools/get-company-info";
import listServicesTool from "./tools/list-services";
import searchFaqTool from "./tools/search-faq";

export default defineMcp({
  name: "h-l-solutions",
  title: "H & L Solutions LLC",
  version: "0.1.0",
  instructions:
    "Public tools for H & L Solutions LLC, a forestry mulching and land reclamation company. Use `get_company_info` for contact details and estimates, `list_services` for the service catalog, and `search_faq` for common questions about pricing, timelines, and equipment.",
  tools: [getCompanyInfoTool, listServicesTool, searchFaqTool],
});
