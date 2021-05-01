const path = require("path");

module.exports = {
  webpack: {
    alias: {
      'components': path.resolve(__dirname, "src/components/"),
      'features': path.resolve(__dirname, "src/features/"),
      'lib': path.resolve(__dirname, "src/lib/"),
      'pages': path.resolve(__dirname, "src/pages/"),
      'resources': path.resolve(__dirname, "src/resources/"),
      'styles': path.resolve(__dirname, "src/styles/"),
    }
  }
}