module.exports = {

  preset: "ts-jest",
  testEnvironment: "node",

  reporters: [
      "default",
      ["./node_modules/jest-html-reporter", {
        pageTitle: "Test Report",
        outputPath: "./reports/test-report.html",
        includeFailureMsg: true,
      }],
  ],

  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts",
  ],
  coverageDirectory: "reports/coverage"
}