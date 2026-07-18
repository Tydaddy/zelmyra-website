import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Zelmyra Skyblock — No Spawners, Free Ranks, Custom Minions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "72px", color: "white", background: "linear-gradient(135deg, #022c22 0%, #050607 52%, #3b0764 100%)", fontFamily: "Arial, sans-serif" }}>
      <div style={{ fontSize: 30, letterSpacing: 8, textTransform: "uppercase", color: "#6ee7b7", fontWeight: 800 }}>Java + Bedrock Minecraft</div>
      <div style={{ marginTop: 24, fontSize: 92, fontWeight: 900 }}>Zelmyra Skyblock</div>
      <div style={{ marginTop: 22, fontSize: 40, fontWeight: 800 }}>No Spawners • Free Ranks • Custom Minions</div>
      <div style={{ marginTop: 38, fontSize: 30, color: "#d4d4d8" }}>Custom fruits, events, auctions, island teams, and seasonal leaderboards</div>
      <div style={{ marginTop: 50, fontSize: 34, fontWeight: 900, color: "#c4b5fd" }}>Zelmyra.net</div>
    </div>,
    size,
  );
}
