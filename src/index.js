import jspreadsheet from 'jspreadsheet';

import 'jspreadsheet/dist/jspreadsheet.css';
import 'jsuites/dist/jsuites.css';

jspreadsheet.setLicense('MWQ0MDZmMDM5ZTM4MzU1ZDZkMzg0Mzc2MDAwYTkxYmNkODdlNjE1ZGJhM2ViYjY3NjdlOTAzYjBjZjFlZTQ3MzE5Nzc2NjE0YmFmZjVkNWQ4MjQwYzM5YTdmOTQ1MDIwYzIxZjIwYTFlMGRiNzY1ZjA2ZjMxZTZkNzlkYzJkOWYsZXlKamJHbGxiblJKWkNJNklqTTFObUV4T1RKaU56a3hNMkl3TkdNMU5EVTNOR1F4T0dNeU9HUTBObVUyTXprMU5ESTRZV0lpTENKdVlXMWxJam9pVUdGMWJDQkliMlJsYkNJc0ltUmhkR1VpT2pFM09ETXhNVGsyTURBc0ltUnZiV0ZwYmlJNld5SnFjMmhsYkd3dWJtVjBJaXdpWTNOaUxtRndjQ0lzSW1wemNISmxZV1J6YUdWbGRDNWpiMjBpTENKalpIQnVMbWx2SWl3aWFXNTBjbUZ6YUdWbGRITXVZMjl0SWl3aWMzUmhZMnRpYkdsMGVpNWpiMjBpTENKM1pXSmpiMjUwWVdsdVpYSXVhVzhpTENKM1pXSmpiMjUwWVdsdVpYSXVhVzhpTENKM1pXSWlMQ0pzYjJOaGJHaHZjM1FpWFN3aWNHeGhiaUk2SWpNMElpd2ljMk52Y0dVaU9sc2lkamNpTENKMk9DSXNJblk1SWl3aWRqRXdJaXdpZGpFeElpd2labTl5YlhNaUxDSm1iM0p0ZFd4aElpd2ljbVZ1WkdWeUlpd2ljR0Z5YzJWeUlpd2lhVzF3YjNKMFpYSWlMQ0oyWVd4cFpHRjBhVzl1Y3lJc0ltTnZiVzFsYm5Seklpd2ljMlZoY21Ob0lpd2lZMmhoY25Seklpd2ljSEpwYm5RaUxDSmlZWElpTENKemFHVmxkSE1pTENKemFHRndaWE1pTENKelpYSjJaWElpTENKbWIzSnRZWFFpTENKbWIzSnRZWFFpTENKcGJuUnlZWE5vWldWMGN5SmRmUT09');

jspreadsheet(document.getElementById('root'), {
    worksheets: [
        {
            worksheetName: "Sheet1",
            minDimensions: [100, 100],
            tableOverflow: true,
            tableWidth: 800,
            filters: true,
            pagination: 10,
        },
    ],
})