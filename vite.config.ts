import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

function cssMapBuildPlugin() {
  return {
    name: "vite:css-map-build",
    generateBundle(_, bundle) {
      for (const [fileName, output] of Object.entries(bundle)) {
        if (output.type === "asset" && fileName.endsWith(".css")) {
          const cssSource = typeof output.source === "string" ? output.source : output.source.toString();
          const mapFileName = `${fileName}.map`;
          const hasMapComment = /sourceMappingURL=/.test(cssSource);
          output.source = hasMapComment ? cssSource : `${cssSource}\n/*# sourceMappingURL=${mapFileName} */`;
          this.emitFile({
            type: "asset",
            fileName: mapFileName,
            source: JSON.stringify({
              version: 3,
              file: fileName,
              sources: [],
              sourcesContent: [],
              names: [],
              mappings: "",
            }),
          });
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), cssMapBuildPlugin()],
  css: {
    devSourcemap: true,
    postcss: {
      map: {
        inline: false,
        annotation: true,
      },
    },
    preprocessorOptions: {
      scss: {
        sourceMap: true,
      } as any,
    },
  },
  build: {
    sourcemap: true,
  },
});