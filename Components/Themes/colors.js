const premiumEcommerceTheme = {
  bodybackground: "#F5F6FA",
  cardsbackground: "#FFFFFF",

  primary: "#111827",        // luxury black (brand identity)
  accent: "#6366F1",         // modern indigo (premium CTA color)
  secondary: "#E5E7EB",

  text: "#0F172A",           // strong readable dark
  mutedText: "#6B7280",

  border: "#E2E8F0",

  error: "#EF4444",
  warning: "#F59E0B",
  success: "#10B981",

  headerbg: "#0B1220",       // deep navy-black premium header
  formbg: "#FFFFFF",

  white: "#FFFFFF",

  gradients: {
    hero: ["#0B1220", "#1F2937"],           // luxury dark gradient
    primaryGlow: ["#6366F1", "#A5B4FC"],    // modern tech glow
    softBackground: ["#F8FAFC", "#EEF2FF"], // clean UI layers
    darkLuxury: ["#020617", "#0F172A"],     // high-end dark mode
    accentFlow: ["#6366F1", "#8B5CF6"],     // premium gradient CTA
  },
};

// Register themes
const themes = {
  premiumEcommerceTheme,
};

// Set active theme
const activeTheme = "premiumEcommerceTheme";

export const colors = themes[activeTheme];