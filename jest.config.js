module.exports = {
  preset: "ts-jest",

  testEnvironment: "node",

  roots: ["<rootDir>"],

  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  testRegex: "((\\.|/)(test|spec))\\.tsx?$",

  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
