import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    /* server: {
        host: true,
        port: 3000,
    }, */
    server: {
        https: {
            key: "./https/localhost.key",
            cert: "./https/localhost.pem",
            passphrase: "bubble",
        },
        public: "https://localhost:8080/",
    },
});
