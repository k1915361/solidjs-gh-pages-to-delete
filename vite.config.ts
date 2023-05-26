import solid from "solid-start/vite";
import staticAdapter from "solid-start-static";
import { defineConfig } from "vite";

export default defineConfig({
    base: "/solidjs-gh-pages/",
    plugins: [solid({ adapter: staticAdapter() })]
});
