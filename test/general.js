const { expect } = require("chai");

describe("General testing", () => {
    xit("Version", () => {
        let version = parseFloat(jspreadsheet.version().version);
        expect(version).to.equal(11.10);
    });
});
