#! /usr/bin/env node

require('jsdom-global')(undefined, { url: 'https://localhost' });
const jspreadsheet = require("jspreadsheet");
const formula = require("@jspreadsheet/formula-pro");

jspreadsheet.setLicense('MWQ0MDZmMDM5ZTM4MzU1ZDZkMzg0Mzc2MDAwYTkxYmNkODdlNjE1ZGJhM2ViYjY3NjdlOTAzYjBjZjFlZTQ3MzE5Nzc2NjE0YmFmZjVkNWQ4MjQwYzM5YTdmOTQ1MDIwYzIxZjIwYTFlMGRiNzY1ZjA2ZjMxZTZkNzlkYzJkOWYsZXlKamJHbGxiblJKWkNJNklqTTFObUV4T1RKaU56a3hNMkl3TkdNMU5EVTNOR1F4T0dNeU9HUTBObVUyTXprMU5ESTRZV0lpTENKdVlXMWxJam9pVUdGMWJDQkliMlJsYkNJc0ltUmhkR1VpT2pFM09ETXhNVGsyTURBc0ltUnZiV0ZwYmlJNld5SnFjMmhsYkd3dWJtVjBJaXdpWTNOaUxtRndjQ0lzSW1wemNISmxZV1J6YUdWbGRDNWpiMjBpTENKalpIQnVMbWx2SWl3aWFXNTBjbUZ6YUdWbGRITXVZMjl0SWl3aWMzUmhZMnRpYkdsMGVpNWpiMjBpTENKM1pXSmpiMjUwWVdsdVpYSXVhVzhpTENKM1pXSmpiMjUwWVdsdVpYSXVhVzhpTENKM1pXSWlMQ0pzYjJOaGJHaHZjM1FpWFN3aWNHeGhiaUk2SWpNMElpd2ljMk52Y0dVaU9sc2lkamNpTENKMk9DSXNJblk1SWl3aWRqRXdJaXdpZGpFeElpd2labTl5YlhNaUxDSm1iM0p0ZFd4aElpd2ljbVZ1WkdWeUlpd2ljR0Z5YzJWeUlpd2lhVzF3YjNKMFpYSWlMQ0oyWVd4cFpHRjBhVzl1Y3lJc0ltTnZiVzFsYm5Seklpd2ljMlZoY21Ob0lpd2lZMmhoY25Seklpd2ljSEpwYm5RaUxDSmlZWElpTENKemFHVmxkSE1pTENKemFHRndaWE1pTENKelpYSjJaWElpTENKbWIzSnRZWFFpTENKbWIzSnRZWFFpTENKcGJuUnlZWE5vWldWMGN5SmRmUT09');

jspreadsheet.setExtensions({ formula });

global.jspreadsheet = jspreadsheet;

global.root =  document.createElement('div');
global.root.style.width = '100%';
global.root.style.height = '100%';
document.body.appendChild(global.root);

global.root2 =  document.createElement('div');
global.root2.style.width = '100%';
global.root2.style.height = '100%';
document.body.appendChild(global.root2);

exports.mochaHooks = {
    afterEach(done) {
        jspreadsheet.destroyAll();
        done();
    },
};