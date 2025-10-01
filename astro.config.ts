import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import starlightThemeRapide from "starlight-theme-rapide";
import starlightThemeObsidian from "starlight-theme-obsidian";
import starlightThemeGalaxy from "starlight-theme-galaxy";
import starlightSidebarTopics from "starlight-sidebar-topics";
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import starlightContextualMenu from "starlight-contextual-menu";
import starlightSidebarSwipe from "starlight-sidebar-swipe";
import { viewTransitions } from "astro-vtbot/starlight-view-transitions";
import starlightImageZoom from "starlight-image-zoom";

import astroD2 from "astro-d2";

//https://astro.build/config
export default defineConfig({

  integrations: [
    starlight({
      plugins: [
        starlightThemeRapide(), // change theme here..
        viewTransitions(),
        starlightImageZoom(),
        starlightSidebarSwipe(),

        starlightContextualMenu({
          actions: ["copy", "view"],
        }),
        starlightSidebarTopics(
        [
          {
            label: "Welcome",
            link: "/welcome/getting-started",
            icon: "rocket",
            items: [
              { label: "Start Here", slug: "welcome/getting-started" },
            ],
          },
          {
            label: "Roles",
            link: "/roles/admin/create-user-accounts",
            icon: "open-book",
            items: [
              {
                label: "Admin",
                items: [
                  { label: "Admin Overview", slug: "roles/admin/role-overview" },
                  { label: "Create User Accounts", slug: "roles/admin/create-user-accounts" },
                  { label: "User Management", slug: "roles/admin/user-management" },
                  { label: "Using the Configuration Centre", slug: "roles/admin/configuration-centre" },
                  { label: "Team Management",
                    items: [
                      { label: "Create Teams", slug: "roles/admin/team-management/create-teams" },
                      { label: "Delete Teams", slug: "roles/admin/team-management/delete-teams",},
                    ],
                  },
                ],
              },
             {
                label: "Ops-Manager",
                items: [
                  { label: "Ops-Manager Overview", slug: "roles/ops-manager/role-overview" },
                  { label: "Submit Request", slug: "roles/ops-manager/submit-request" },
                  { label: "Update Request", slug: "roles/ops-manager/update-request" },
                  { label: "View EOS Tasks", slug: "roles/ops-manager/view-eos-tasks" },
                  { label: "Update EOS Tasks", slug: "roles/ops-manager/update-eos-tasks" },
                ],
              },
              {
                label: "Ops Support",
                badge: { text: "To-Do", variant: "note" },
                items: [
                  {
                    label: "What is Ops Support",
                    slug: "roles/ops-support/role-overview",
                  },
                ],
              },
            ],
            
          },
        ],
      ),

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
