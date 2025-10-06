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
                slug: "learning-materials/getting-started/introduction",
              },

              {
                icon: "i-ph:cube",
                label: "System Overview",
                slug: "learning-materials/getting-started/system-overview",
              },
              {
                icon: "i-ph:lock-key-open-thin",
                label: "Authentication",
                slug: "learning-materials/getting-started/authentication",
              },
              {
                icon: "i-ph:lightbulb-light",
                label: "First Steps",
                slug: "learning-materials/getting-started/first-steps",
              },
            ],
          },
          {
            label: "Roles",
            items: [
              {
                label: "Role Overview",
                slug: "learning-materials/roles/overview",
              },
              { label: "Admin", slug: "learning-materials/roles/admin" },
              {
                label: "Operations Manager",
                slug: "learning-materials/roles/ops-manager",
              },
              {
                label: "Operations Support",
                slug: "learning-materials/roles/ops-support",
              },
            ],
          },
          {
            label: "Features",
            items: [
              {
                label: "Overview",
                slug: "learning-materials/features/overview",
              },
              {
                label: "Tracking",
                items: [
                  {
                    label: "Dashboard",
                    slug: "learning-materials/features/tracking/dashboard",
                  },
                  {
                    label: "Operational Tracker",
                    slug: "learning-materials/features/tracking/ciphr-integration",
                  },
                  {
                    label: "CIPHR Integration",
                    slug: "learning-materials/features/tracking/operational-tracker",
                  },
                  {
                    label: "Lieu & Holidays",
                    slug: "learning-materials/features/tracking/lieu-holidays",
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
                        slug: "learning-materials/features/scheduling/rota-management",
                      },
                      {
                        label: "Event Mapping",
                        slug: "learning-materials/features/scheduling/rota-management/event-mapping",
                      },
                      {
                        label: "Contract Allocation",
                        slug: "learning-materials/features/scheduling/rota-management/contract-allocation",
                      },
                      {
                        label: "Succession Planning",
                        slug: "learning-materials/features/scheduling/rota-management/succession-planning",
                      },
                    ],
                  },

                  {
                    label: "Schedules",
                    slug: "learning-materials/features/scheduling/schedules",
                  },
                ],
              },
              {
                label: "Management",
                items: [
                  {
                    label: "Allocated Contracts",
                    slug: "learning-materials/features/management/allocated-contracts",
                  },
                  {
                    label: "Assigned Events",
                    slug: "learning-materials/features/management/assigned-events",
                  },
                  {
                    label: "EOS Actions",
                    slug: "learning-materials/features/management/eos-actions",
                  },
                  {
                    label: "Request Management",
                    slug: "learning-materials/features/management/request-management",
                  },
                  {
                    label: "Create User Accounts",
                    slug: "learning-materials/features/management/create-user",
                  },
                  {
                    label: "User & Team Management",
                    slug: "learning-materials/features/management/user-team-management",
                  },
                  {
                    label: "Configuration Centre",
                    slug: "learning-materials/features/management/configuration-centre",
                  },
                ],
              },
            ],
          },
          {
            label: "References",
            items: [
              {
                label: "Glossary",
                slug: "learning-materials/references/glossary",
              },
              {
                label: "Status Definitions",
                slug: "learning-materials/references/status-definitions",
              },
              {
                label: "Troubleshooting",
                slug: "learning-materials/references/troubleshooting",
              },
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
