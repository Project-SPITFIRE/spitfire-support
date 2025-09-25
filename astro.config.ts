import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import starlightThemeRapide from "starlight-theme-rapide";
import starlightThemeObsidian from "starlight-theme-obsidian";
import starlightSidebarTopics from "starlight-sidebar-topics";
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import starlightContextualMenu from 'starlight-contextual-menu';
import starlightSidebarSwipe from 'starlight-sidebar-swipe'

//https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightThemeRapide(), // change theme here..
        starlightSidebarSwipe(),
        starlightContextualMenu({
          actions: ["copy", "view", "claude","chatgpt"]
        }),
        starlightSidebarTopics([
          {
            label: "Welcome",
            link: "/welcome/getting-started",
            icon: "open-book",
            items: [
              {
                label: "Start Here",
                slug: "welcome/getting-started",
              },
            ],
          },
          {
            label: "Roles",
            link: "/roles/admin/create-user-accounts",
            icon: "open-book",
            items: [
              {
                label: "Admin",
                badge: {text: "In-Progress", variant: 'caution'},
                items: [
                  {
                    label: "What is Admin",
                    slug: "roles/admin/role-overview",
                  },
                  {
                    label: "Create User Accounts",
                    slug: "roles/admin/create-user-accounts",
                  },
                  {
                    label: "Create Teams",
                    slug: "roles/admin/create-teams",
                  },
                  {
                    label: "View Teams",
                    slug: "roles/admin/team-management",
                  },
                  {
                    label: "Delete Teams",
                    slug: "roles/admin/delete-teams",
                  },
                  {
                    label: "Using the Configuration Centre",
                    slug: "roles/admin/configuration-centre",
                  },
                ],
              },
              {
                label: "COO",
                badge: {text: "In-Progress", variant: "caution"},
                items: [
                  {
                    label: "What is COO",
                    slug: "roles/coo/role-overview",
                  },
                  {
                    label: "Submit Request",
                    slug: "roles/coo/submit-request",
                  },
                  {
                    label: "Update Request",
                    slug: "roles/coo/update-request",
                  },
                ],
              },
              {
                label: "Deputies",
                badge: {text: "To-Do", variant: "note"},
                items: [
                  {
                    label: "What are Deputies",
                    slug: "roles/deputies/role-overview",
                  },
                  {
                    label: "Submit Request",
                    slug: "roles/deputies/submit-request",
                  },
                  {
                    label: "Update Request",
                    slug: "roles/deputies/update-request",
                  },
                ],
              },
              {
                label: "HOO",
                badge: {text: "To-Do", variant: "note"},
                items: [
                  {
                    label: "HOO Overview",
                    slug: "roles/hoo/role-overview",
                  },
                  {
                    label: "Submit Request",
                    slug: "roles/hoo/submit-request",
                  },
                  {
                    label: "Update Request",
                    slug: "roles/hoo/update-request", 
                  },
                ],
              },
              {
                label: "Logistics",
                badge: {text: "To-Do", variant: "note"},
                items: [
                  {
                    label: "Logistics Overview",
                    slug: "roles/logistics/role-overview",
                  },
                ],
              },
              {
                label: "Ops Support",
                badge: {text: "To-Do", variant: "note"},
                items: [
                  {
                    label: "What is Ops Support",
                    slug: "roles/ops-support/ops-support",
                  },
                ],
              },
            ],
          },
          {
            label: "Workflows",
            link: "/workflows/what-are-workflows",
            icon: "open-book",
            items: [
              {
                label: "Workflows",
                items: [
                  {
                    label: "What are Workflows",
                    slug: "workflows/what-are-workflows",
                  },
                ],
              },
            ],
          },
        ]),
      ],
      title: "Spitfire Docs",
      logo: {
        src: "@/assets/csp-logo.svg",
        alt: "Spitfire Logo",
      },

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
