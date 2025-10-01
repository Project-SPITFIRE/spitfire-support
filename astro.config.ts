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
        //starlightThemeRapide(), // change theme here..
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
                    label: "Ops Support Overview",
                    slug: "roles/ops-support/role-overview",
                  },
                  {
                    label: "Ops Support Dashboard",
                    slug: "roles/ops-support/ops-support-dashboard",
                  },
                  {
                    label: "Ops Support Operational Tracker",
                    slug: "roles/ops-support/ops-support-operational-tracker"
                  },
                  {
                    label: "Ops Support CIPHR Integration",
                    slug: "roles/ops-support/ops-support-ciphr-integration"
                  },
                  {
                    label: "Ops Suport Lieu & Holidays",
                    slug: "roles/ops-support/ops-support-holidays-lieu"
                  },
                  {
                    label: "Ops Support Rota Management",
                    // slug removed
                    items: [
                      { label: "Events Mapping", slug: "roles/ops-support/ops-support-events-mapping" },
                      { label: "Contract Allocation", slug: "roles/ops-support/ops-support-contract-allocation" },
                      { label: "Succession Planning", slug: "roles/ops-support/ops-support-succession-planning" },
                    ],
                  },
                  {
                    label: "Ops Support Submit Requests",
                    slug: "roles/ops-support/ops-support-submit-requests"
                  },
                  {
                    label: "Ops Support Submitted Schedules",
                    slug: "roles/ops-support/ops-support-submitted-schedules"
                  },
                  {
                    label: "Ops Support Schedules",
                    slug: "roles/ops-support/ops-support-schedules"
                  },
                  {
                    label: "Ops Support Allocated Contracts",
                    slug: "roles/ops-support/ops-support-allocated-contracts"
                  },
                  {
                    label: "Ops Support Assigned Events",
                    slug: "roles/ops-support/ops-support-assigned-events"
                  },
                  {
                    label: "Ops Support EOS Actions",
                    slug: "roles/ops-support/ops-support-eos-action"
                  },
                  {
                    label: "Ops Support Manage Request",
                    slug: "roles/ops-support/ops-support-manage-request"
                  },
                  {
                    label: "Ops Support Account Management",
                    slug: "roles/ops-support/ops-support-account-management"
                  },
                  {
                    label: "Ops Support Create User Accounts",
                    slug: "roles/ops-support/ops-support-create-account"
                  },
                  {
                    label: "Ops Support Team Management",
                    slug: "roles/ops-support/ops-support-team-management"
                  },
                  {
                    label: "Ops Support Configuration Centre",
                    slug: "roles/ops-support/ops-support-configuration-centre"
                  }
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
