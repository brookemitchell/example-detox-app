const detox = require("detox");
const config = require("../package.json").detox;

before(async () => {
	await detox.init(config);
});

after(async () => {
	await detox.cleanup();
});

let testSummary;

beforeEach(async function() {
	testSummary = {
		title: this.currentTest.title,
		fullName: this.currentTest.fullTitle(),
		status: "running"
	};
	await detox.beforeEach(testSummary);
});

afterEach(async function() {
	testSummary.status = this.currentTest.state || "failed";
	await detox.afterEach(testSummary);
});
