// @ts-expect-error
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import starlightThemeRapide from "starlight-theme-rapide";
import starlightSidebarTopics from "starlight-sidebar-topics";
import starlightUtils from "@lorenzo_lewis/starlight-utils";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightThemeRapide(),
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
            link: "/roles/admin/what-is-admin",
            icon: "open-book",
            items: [
              {
                label: "Admin",
                items: [
                  {
                    label: "What is Admin",
                    slug: "roles/admin/what-is-admin",
                  },
                ],
              },
              {
                label: "Ops Support",
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
    plugins: [tailwindcss()],
  },
});
