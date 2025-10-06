import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import type { Request, Response, NextFunction } from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from dist directory with correct MIME types
app.use(
  "/learning-materials",
  express.static(join(__dirname, "dist"), {
    setHeaders: (res: Response, path: string) => {
      if (path.endsWith(".css")) {
        res.setHeader("Content-Type", "text/css");
      }
      if (path.endsWith(".js")) {
        res.setHeader("Content-Type", "application/javascript");
      }
      if (path.endsWith(".svg")) {
        res.setHeader("Content-Type", "image/svg+xml");
      }
      if (path.endsWith(".woff") || path.endsWith(".woff2")) {
        res.setHeader("Content-Type", "font/woff2");
      }
    },
  }),
);

// Handle SPA routing - serve index.html for HTML routes only
// Use regex pattern for wildcard matching
app.get(
  /^\/learning-materials\/.*/,
  (req: Request, res: Response, next: NextFunction) => {
    const requestPath = req.path;

    // Skip serving index.html for asset requests
    if (
      requestPath.includes("/_astro/") ||
      requestPath.includes(".css") ||
      requestPath.includes(".js") ||
      requestPath.includes(".svg") ||
      requestPath.includes(".png") ||
      requestPath.includes(".jpg") ||
      requestPath.includes(".ico") ||
      requestPath.includes(".woff")
    ) {
      return next(); // Let express.static handle it
    }

    res.sendFile(join(__dirname, "dist", "index.html"));
  },
);

// Redirect root to /learning-materials
app.get("/", (req: Request, res: Response) => {
  res.redirect("/learning-materials");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
