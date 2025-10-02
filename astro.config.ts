// Starlight Default Imports:
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

// Utilities:
import starlightContextualMenu from "starlight-contextual-menu";
import starlightSidebarSwipe from "starlight-sidebar-swipe";
import starlightImageZoom from "starlight-image-zoom";
import icon from "astro-icon";

import { viewTransitions } from "astro-vtbot/starlight-view-transitions";
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import astroD2 from "astro-d2";


// Themes:
import starlightThemeRapide from "starlight-theme-rapide";
import starlightThemeObsidian from "starlight-theme-obsidian";
import starlightThemeGalaxy from "starlight-theme-galaxy";
import { ion } from "starlight-ion-theme";


//https://astro.build/config
export default defineConfig({
  integrations: [
    icon(),
    starlight({
      plugins: [
        starlightThemeRapide(), // change theme here..
        // viewTransitions(),
        starlightImageZoom(),
        starlightSidebarSwipe(),
        starlightContextualMenu({
          actions: ["copy", "view"],
        }),
      ],
      title: "Spitfire Docs",
      logo: {
        src: "@/assets/csp-logo.svg",
        alt: "Spitfire Logo",
      },
      sidebar: [
        {
          label: "Getting Started",
          items: [
            {label: "Introduction", slug: "getting-started/introduction" },
            {label: "System Overview" , slug: "getting-started/system-overview" },
            {label: "Authentication", slug: "getting-started/authentication" },
            {label: "First Steps", slug: "getting-started/first-steps" },
          ],
        },
        {
          label: "Roles",
          items: [
            { label: "Admin", slug: "roles/admin" },
            { label: "Operations Manager", slug: "roles/ops-manager" },
            { label: "Operations Support", slug: "roles/ops-support" },
          ],
        },
        {
          label: "Features",
          items: [
            { label: "Request Management", slug: "features/request-management" },
            { label: "EOS Tasks", slug: "features/eos-tasks" },
            { label: "Schedules", slug: "features/schedules" },
            { label: "Rota Management", slug: "features/rota-management" },
            { label: "User & Team Management", slug: "features/user-team-management" },
          ],
        },
        {
          label: "References",
          items: [
            { label: "Glossary", slug: "references/glossary" },
            { label: "Status Definitions", slug: "references/status-definitions" },
            { label: "Troubleshooting", slug: "references/troubleshooting" },
          ]
        }
      ],
      customCss: [
        "./src/styles/global.css",
        "@fontsource-variable/atkinson-hyperlegible-next",
        "@fontsource-variable/fira-code",
      ],
    }),
  ],
  vite: {
    // @ts-expect-error
    plugins: [tailwindcss()],
  },
});