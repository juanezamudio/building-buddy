// windsail.config.js (example placeholder, update as needed)
module.exports = {
  siteName: "BuildingBuddy",
  framework: "vite",
  deploy: {
    provider: "netlify",
    buildCommand: "npm run build",
    publishDirectory: "dist",
  },
};
