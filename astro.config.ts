// Starlight Default Imports:
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import UnoCSS from "unocss/astro";
import Icons from "starlight-plugin-icons";

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
import starlightThemeNova from "starlight-theme-nova";
import { ion } from "starlight-ion-theme";
import starlightLinksValidator from "starlight-links-validator";

const baseURL = process.env.PUBLIC_BASE_PATH || "/learning-materials";

//https://astro.build/config
export default defineConfig({
  base: baseURL,
  integrations: [
    UnoCSS(),
    icon(),
    Icons({
      sidebar: true,
      extractSafelist: true,
      starlight: {
        plugins: [
          //ion(),
          starlightThemeRapide(), // change theme here..
          // viewTransitions(),
          starlightImageZoom(),
          starlightSidebarSwipe(),
          //starlightLinksValidator(),
          starlightContextualMenu({
            actions: ["copy", "view"],
          }),
        ],
        title: "CSP Rota - Learning Materials",
        logo: {
          src: "@/assets/csp-logo.svg",
          alt: "Spitfire Logo",
        },
        sidebar: [
          {
            label: "Getting Started",
            items: [
              {
                icon: "i-ph:hand-waving",
                label: "Introduction",
                slug: "getting-started/introduction",
              },

              {
                icon: "i-ph:cube",
                label: "System Overview",
                slug: "getting-started/system-overview",
              },
              {
                icon: "i-ph:lock-key-open-thin",
                label: "Authentication",
                slug: "getting-started/authentication",
              },
              {
                icon: "i-ph:lightbulb-light",
                label: "First Steps",
                slug: "getting-started/first-steps",
              },
            ],
          },
          {
            label: "Roles",
            items: [
              { label: "Role Overview", slug: "roles/overview" },
              { label: "Admin", slug: "roles/admin" },
              { label: "Operations Manager", slug: "roles/ops-manager" },
              { label: "Operations Support", slug: "roles/ops-support" },
            ],
          },
          {
            label: "Features",
            items: [
              {
                label: "Overview",
                slug: "features/overview",
              },
              {
                label: "Tracking",
                items: [
                  { label: "Dashboard", slug: "features/tracking/dashboard" },
                  {
                    label: "Operational Tracker",
                    slug: "features/tracking/ciphr-integration",
                  },
                  {
                    label: "CIPHR Integration",
                    slug: "features/tracking/operational-tracker",
                  },
                  {
                    label: "Lieu & Holidays",
                    slug: "features/tracking/lieu-holidays",
                  },
                ],
              },
              {
                label: "Scheduling",
                items: [
                  {
                    label: "Rota Management",
                    items: [
                      {
                        label: "Overview",
                        slug: "features/scheduling/rota-management",
                      },
                      {
                        label: "Event Mapping",
                        slug: "features/scheduling/rota-management/event-mapping",
                      },
                      {
                        label: "Contract Allocation",
                        slug: "features/scheduling/rota-management/contract-allocation",
                      },
                      {
                        label: "Succession Planning",
                        slug: "features/scheduling/rota-management/succession-planning",
                      },
                    ],
                  },

                  { label: "Schedules", slug: "features/scheduling/schedules" },
                ],
              },
              {
                label: "Management",
                items: [
                  {
                    label: "Allocated Contracts",
                    slug: "features/management/allocated-contracts",
                  },
                  {
                    label: "Assigned Events",
                    slug: "features/management/assigned-events",
                  },
                  {
                    label: "EOS Actions",
                    slug: "features/management/eos-actions",
                  },
                  {
                    label: "Request Management",
                    slug: "features/management/request-management",
                  },
                  {
                    label: "Create User Accounts",
                    slug: "features/management/create-user",
                  },
                  {
                    label: "User & Team Management",
                    slug: "features/management/user-team-management",
                  },
                  {
                    label: "Configuration Centre",
                    slug: "features/management/configuration-centre",
                  },
                ],
              },
            ],
          },
          {
            label: "References",
            items: [
              { label: "Glossary", slug: "references/glossary" },
              {
                label: "Status Definitions",
                slug: "references/status-definitions",
              },
              { label: "Troubleshooting", slug: "references/troubleshooting" },
            ],
          },
        ],
        customCss: [
          "./src/styles/global.css",
          "@fontsource-variable/atkinson-hyperlegible-next",
          "@fontsource-variable/fira-code",
        ],
      },
    }),
  ],
  vite: {
    // @ts-expect-error
    plugins: [tailwindcss()],
  },
});
