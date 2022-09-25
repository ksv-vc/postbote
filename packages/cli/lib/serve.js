import { createServer } from "vite";
import { fileURLToPath } from "url";
import express from "express";
import path from "path";
import fs from "fs";
import react from "@vitejs/plugin-react";
import boxen from "boxen";
import previewsModulePlugin from "./vite/plugin.js";
import { log } from "./logger.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const serve = async () => {
  log("Trying to start server now.");
  const app = express();
  const { middlewares, ...vite } = await createServer({
    appType: "custom",
    mode: "development",
    base: undefined,
    root: path.join(__dirname, "..", "app"),
    cacheDir: path.join(process.cwd(), "node_modules", ".pb-cache"),
    envDir: process.cwd(),
    configFile: false,
    server: {
      middlewareMode: true,
    },
    define: {
      "process.platform": "{}",
    },
    build: {
      manifest: true,
    },
    optimizeDeps: {
      include: ["react", "react-dom", "react-frame-component"],
    },
    plugins: [previewsModulePlugin(), react()],
  });

  app.use(middlewares);
  app.post("/api/transform", (req, res) => {
    res
      .status(201)
      .set({ "Content-Type": "application/json" })
      .send({
        mjml: req.params.mjml,
        html: mjml2html(req.params.mjml),
      });
  });
  app.get("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template = fs.readFileSync(
        path.resolve(__dirname, "..", "app", "index.html"),
        "utf-8",
      );

      template = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(template);
    } catch (e) {
      next(e);
    }
  });

  app.listen(5173, () => {
    // eslint-disable-next-line no-console
    console.log(
      boxen(`Server started on port 5173:\nhttp://localhost:5173/`, {
        padding: 1,
      }),
    );
  });
};

export default serve;
