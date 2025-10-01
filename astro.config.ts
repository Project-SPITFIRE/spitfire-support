import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import starlightThemeRapide from "starlight-theme-rapide";
import starlightThemeObsidian from "starlight-theme-obsidian";
import starlightThemeGalaxy from "starlight-theme-galaxy";
import { ion } from "starlight-ion-theme";
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
        starlightThemeGalaxy(), // change theme here..
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
                  { label: "Scheduling", 
                    items: [
                      { label: "Submit Request", slug: "roles/ops-manager/scheduling/submit-request" },
                      { label: "Update Request", slug: "roles/ops-manager/scheduling/update-request" },
                      { label: "Schedules", slug: "roles/ops-manager/scheduling/schedules"},
                      { label: "Rota Management",
                        items: [
                          {label: "Rota Management Overview", slug: "roles/ops-manager/scheduling/rota-management/rota-management-overview"},
                          {label: "Events Mapping", slug: "roles/ops-manager/scheduling/rota-management/events-mapping" },
                          {label: "Contract Allocation", slug: "roles/ops-manager/scheduling/rota-management/contract-allocation"},
                          {label: "Succession Planning", slug: "roles/ops-manager/scheduling/rota-management/succession-planning" },
                        ],
                      },
                    ],
                  },
                  {label: "Management", 
                    items: [
                      { label: "View EOS Tasks", slug: "roles/ops-manager/management/view-eos-tasks" },
                      { label: "Update EOS Tasks", slug: "roles/ops-manager/management/update-eos-tasks" },
                    ],
                  },
                ],
              },
              {
                label: "Ops Support",
                items: [
                  { label: "Ops Support Overview", slug: "roles/ops-support/role-overview"},
                  { label: "Dashboard", slug: "roles/ops-support/ops-support-dashboard"},
                  { label: "Operational Tracker", slug: "roles/ops-support/ops-support-operational-tracker" },
                  { label: "CIPHR Integration", slug: "roles/ops-support/ops-support-ciphr-integration" },
                  { label: "Lieu & Holidays", slug: "roles/ops-support/ops-support-holidays-lieu" },
                  { label: "Submit Requests", slug: "roles/ops-support/ops-support-submit-requests" },
                  { label: "Submitted Schedules", slug: "roles/ops-support/ops-support-submitted-schedules" },
                  { label: "Schedules", slug: "roles/ops-support/ops-support-schedules" },
                  { label: "Allocated Contracts", slug: "roles/ops-support/ops-support-allocated-contracts" },
                  { label: "Assigned Events", slug: "roles/ops-support/ops-support-assigned-events" },
                  { label: "EOS Actions", slug: "roles/ops-support/ops-support-eos-action"},
                  { label: "Manage Request", slug: "roles/ops-support/ops-support-manage-request" },
                  { label: "Account Management", slug: "roles/ops-support/ops-support-account-management" },
                  { label: "Create User Accounts", slug: "roles/ops-support/ops-support-create-account" },
                  { label: "Team Management", slug: "roles/ops-support/ops-support-team-management" },
                  { label: "Configuration Centre", slug: "roles/ops-support/ops-support-configuration-centre"},
                  { label: "Rota Management",
                    items: [
                      { label: "Events Mapping", slug: "roles/ops-support/ops-support-events-mapping" },
                      { label: "Contract Allocation", slug: "roles/ops-support/ops-support-contract-allocation" },
                      { label: "Succession Planning", slug: "roles/ops-support/ops-support-succession-planning" },
                    ],
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