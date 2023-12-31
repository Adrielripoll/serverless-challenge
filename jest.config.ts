import type { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest =  {
  moduleFileExtensions: ["js", "json", "ts"],
  testRegex: ".*\\.spec\\.ts$",
  transform: {
      "^.+\\.(t|j)s$": "ts-jest"
  },
  collectCoverageFrom: ["**/*.(t|j)s"],
  coverageDirectory: "../coverage",
  testEnvironment: "node"
}

export default config