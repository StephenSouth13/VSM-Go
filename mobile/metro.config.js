const { getDefaultConfig } = require("expo/metro-config");

let withNativeWind = (config) => config;
try {
  ({ withNativeWind } = require("nativewind/metro"));
} catch (e) {
  // nativewind/metro not available; proceed without it
}

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./app/global.css" });