const {
  override,
  addBabelPreset,
  addBabelPlugin
} = require("customize-cra");
const path = require("path");

module.exports = override(
  addBabelPreset("@babel/preset-env"),
  addBabelPreset([
            "@babel/preset-react",
            {
                "runtime": "automatic",
                "importSource": "@emotion/react"
            }
        ]),
    addBabelPlugin([
            "@emotion/babel-plugin",
            {
                "cssPropOptimization": true
            }
        ])    
);

