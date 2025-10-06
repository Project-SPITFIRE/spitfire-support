import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// Starlight plugins:
import starlightContextualMenu from "starlight-contextual-menu";
import starlightSidebarSwipe from "starlight-sidebar-swipe";
import starlightImageZoom from "starlight-image-zoom";
import starlightThemeRapide from "starlight-theme-rapide";

export default defineConfig({
  base: "/learning-materials/",
  trailingSlash: "never",
  integrations: [
    icon(),
    starlight({
      plugins: [
        starlightThemeRapide(),
        starlightImageZoom(),
        starlightSidebarSwipe(),
        starlightContextualMenu({
          actions: ["copy", "view"],
        }),
      ],
      title: "CSP Rota - Learning Materials",
      logo: {
        src: "./src/assets/csp-logo.svg",
        alt: "CSP Logo",
      },
      sidebar: [
        {
          label: "Getting Started",
          items: [
            {
              label: "Introduction",
              slug: "getting-started/introduction",
            },
            {
              label: "System Overview",
              slug: "getting-started/system-overview",
            },
            {
              label: "Authentication",
              slug: "getting-started/authentication",
            },
            {
              label: "First Steps",
              slug: "getting-started/first-steps",
            },
          ],
        },
        {
          label: "Roles",
          items: [
            {
              label: "Role Overview",
              slug: "roles/overview",
            },
            { label: "Admin", slug: "roles/admin" },
            {
              label: "Operations Manager",
              slug: "roles/ops-manager",
            },
            {
              label: "Operations Support",
              slug: "roles/ops-support",
            },
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
                {
                  label: "Dashboard",
                  slug: "features/tracking/dashboard",
                },
                {
                  label: "Operational Tracker",
                  slug: "features/tracking/operational-tracker",
                },
                {
                  label: "CIPHR Integration",
                  slug: "features/tracking/ciphr-integration",
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
                {
                  label: "Schedules",
                  slug: "features/scheduling/schedules",
                },
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
            {
              label: "Glossary",
              slug: "references/glossary",
            },
            {
              label: "Status Definitions",
              slug: "references/status-definitions",
            },
            {
              label: "Troubleshooting",
              slug: "references/troubleshooting",
            },
          ],
        },
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
