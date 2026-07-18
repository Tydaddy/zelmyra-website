import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zelmyra Minecraft Network",
    short_name: "Zelmyra",
    description: "Classic no-spawner Skyblock and medieval Forever SMP for Java and Bedrock.",
    start_url: "/",
    display: "standalone",
    background_color: "#050607",
    theme_color: "#059669",
  };
}
