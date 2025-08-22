title: Jspreadsheet Demo Supply Chain
keywords: Jspreadsheet, JavaScript data grid, spreadsheet controls, interactive data grid, web-based applications, lightweight, responsive controls, agnostic platform, Angular, React, Vue, spreadsheet-like plugin, documentation, examples, license
description: Example of collaborative JavaScript spreadsheet behaviour in the browser: Real-time editing and multi-user updates. 

# Collaboration

Collaboration demo that showcases multi-user editing with real-time sync using the JavaScript spreadsheet component. Changes made by one user are instantly reflected across sessions, enabling teams to work together on the same spreadsheet, similar to Google Sheets, but embedded within your application.
<br><br>

<div class="demo-code">

{.ignore-blitz}
````html
<!DOCTYPE html>
<html lang="pt-BR">
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lemonadejs/dist/lemonade.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@lemonadejs/studio/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/client/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/socket.io@4.7.5/client-dist/socket.io.min.js"></script>

<div class="row middle" 
     style="justify-content:center; max-width:1300px; margin:0 auto;">
  <div class="column p10">
    <div id="sheetA" 
         style="max-width:1300px; height:500px; box-sizing:border-box; margin-bottom: 10px;"></div>
  </div>
  <div class="column p10">
    <div id="sheetB" 
         style="max-width:1300px; height:500px; box-sizing:border-box;"></div>
  </div>
</div>

<p align="center">
  Click here to find more information about the
  <a href="/products/server">Jspreadsheet Server</a> extension
</p>

<script>
  (function () {
    const GUID = '08d29049-e951-6722-dff0-d6149e62c0e1';
    const SERVER_URL = 'https://jspreadsheet.com';
    const SERVER_PATH = 's/';

    let remote;
    let instances = [];

    function removeImageButton(toolbarOptions) {
      for (let i = 0; i < toolbarOptions.items.length; i++) {
        if (toolbarOptions.items[i].content === 'add_photo_alternate') {
          toolbarOptions.items.splice(i, 1);
          i--;
        }
      }
      return toolbarOptions;
    }

    function init() {
      if (window.jspreadsheet && typeof jspreadsheet.destroyAll === 'function') {
        jspreadsheet.destroyAll();
      }

      jspreadsheet.setExtensions({ formula, client });

      remote = client.connect({
        url: SERVER_URL,
        path: SERVER_PATH,
      });

      remote.create(GUID, {
        tabs: false,
        toolbar: true,
        worksheets: [{
          minDimensions: [4, 6],
          worksheetName: 'Sheet 1',
        }],
      });

      const commonOptions = {
        guid: GUID,
        toolbar: removeImageButton,
        onbeforeloadimage: function () {
          return '/templates/default/img/blocked.png';
        },
      };

      const elA = document.getElementById('sheetA');
      const elB = document.getElementById('sheetB');

      instances.push(jspreadsheet(elA, commonOptions));
      instances.push(jspreadsheet(elB, commonOptions));
    }

    function cleanup() {
      if (window.jspreadsheet && typeof jspreadsheet.destroyAll === 'function') {
        jspreadsheet.destroyAll();
      }
      instances = [];
    }

    init();
    window.addEventListener('beforeunload', cleanup);
  })();
</script>
</html>
````
````jsx
import React, {useRef} from 'react';
import { Spreadsheet, jspreadsheet } from '@jspreadsheet/react';
import formula from '@jspreadsheet/formula-pro';
import client from '@jspreadsheet/client';

export default function JSServerMirror() {
  const GUID = "08d29049-e951-6722-dff0-d6149e62c0e1";
  const SERVER_URL = "https://jspreadsheet.com";
  const SERVER_PATH = "s/";

  const maxParentWidth = 1300;
  const sheetMaxWidth = 600; 
  const sheetHeight = 300; 

  const sheetARef = useRef(null);
  const sheetBRef = useRef(null);

  useEffect(() => {
    if (!window.jspreadsheet) {
      console.error("jspreadsheet is not available on window.");
      return;
    }

    const { jspreadsheet } = window;
    const { formula, client } = window;

    if (typeof jspreadsheet.destroyAll === "function") {
      jspreadsheet.destroyAll();
    }

    if (typeof jspreadsheet.setExtensions === "function") {
      jspreadsheet.setExtensions({ formula, client });
    }

    const remote = client.connect({ url: SERVER_URL, path: SERVER_PATH });

    remote.create(GUID, {
      tabs: false,
      toolbar: true,
      worksheets: [
        {
          minDimensions: [4, 6],
          worksheetName: "Sheet 1",
        },
      ],
    });

    function stripImageButton(toolbarOptions) {
      for (let i = 0; i < toolbarOptions.items.length; i++) {
        if (toolbarOptions.items[i].content === "add_photo_alternate") {
          toolbarOptions.items.splice(i, 1);
          i--;
        }
      }
      return toolbarOptions;
    }

    const commonOptions = {
      guid: GUID,
      toolbar: stripImageButton,
      onbeforeloadimage: function () {
        return "/templates/default/img/blocked.png";
      },
    };

    const instA = jspreadsheet(sheetARef.current, commonOptions);
    const instB = jspreadsheet(sheetBRef.current, commonOptions);

    return () => {
      try {
        if (instA && typeof instA.destroy === "function") instA.destroy();
        if (instB && typeof instB.destroy === "function") instB.destroy();
      } catch (e) {
        if (typeof jspreadsheet.destroyAll === "function") {
          jspreadsheet.destroyAll();
        }
      }
    };
  }, []);

  return (
    <div>
      <div
        className="row middle"
        style={{
          justifyContent: "center",
          maxWidth: `${maxParentWidth}px`,
          margin: "0 auto",
        }}
      >
        <div className="column p10">
          <div
            id="sheetA"
            ref={sheetARef}
            style={{
              maxWidth: `${sheetMaxWidth}px`,
              height: `${sheetHeight}px`,
              boxSizing: "border-box",
            }}
          />
        </div>
        <div className="column p10">
          <div
            id="sheetB"
            ref={sheetBRef}
            style={{
              maxWidth: `${sheetMaxWidth}px`,
              height: `${sheetHeight}px`,
              boxSizing: "border-box",
            }}
          />
        </div>
      </div>

      <p style={{ textAlign: "center" }}>
        Click here to find more information about the{" "}
        <a href="/products/server">Jspreadsheet Server</a> extension
      </p>
    </div>
  );
}
````
````vue
<template>
  <div class="row middle" style="justify-content:center; max-width:1300px; margin:0 auto;">
    <div class="column p10">
      <Spreadsheet
        ref="sheetA"
        :license="license"
        :guid="GUID"
        :toolbar="stripImageButton"
        :onbeforeloadimage="onBeforeLoadImage"
        :tableOverflow="true"
        :tableWidth="1300"
        :tableHeight="500"
      />
    </div>

    <div class="column p10" style="margin-top:10px;">
      <Spreadsheet
        ref="sheetB"
        :license="license"
        :guid="GUID"
        :toolbar="stripImageButton"
        :onbeforeloadimage="onBeforeLoadImage"
        :tableOverflow="true"
        :tableWidth="1300"
        :tableHeight="500"
      />
    </div>

    <p style="text-align:center; width:100%; margin-top:10px;">
      Click here to find more information about the
      <a href="/products/server">Jspreadsheet Server</a> extension
    </p>
  </div>
</template>

<script>
import { Spreadsheet } from "@jspreadsheet/vue";
import formula from '@jspreadsheet/formula-pro';
import client from '@jspreadsheet/client';
import "jspreadsheet/dist/jspreadsheet.css";
import "jsuites/dist/jsuites.css";

export default {
  name: "JSServerMirrorVue",
  components: { Spreadsheet },
  data() {
    return {
      license:
        "set-your-license",
      GUID: "08d29049-e951-6722-dff0-d6149e62c0e1",
      SERVER_URL: "https://jspreadsheet.com",
      SERVER_PATH: "s/",
    };
  },
  created() {
    const { jspreadsheet, formula, client } = window;

    if (!jspreadsheet) {
      console.error("jspreadsheet not found.");
      return;
    }

    if (typeof jspreadsheet.setExtensions === "function") {
      jspreadsheet.setExtensions({ formula, client });
    }

    if (client && typeof client.connect === "function") {
      const remote = client.connect({
        url: this.SERVER_URL,
        path: this.SERVER_PATH,
      });

      remote.create(this.GUID, {
        tabs: false,
        toolbar: true,
        worksheets: [
          {
            minDimensions: [4, 6],
            worksheetName: "Sheet 1",
          },
        ],
      });
    }
  },
  methods: {
    stripImageButton(toolbarOptions) {
      if (!toolbarOptions || !Array.isArray(toolbarOptions.items)) return toolbarOptions;
      for (let i = 0; i < toolbarOptions.items.length; i++) {
        if (toolbarOptions.items[i].content === "add_photo_alternate") {
          toolbarOptions.items.splice(i, 1);
          i--;
        }
      }
      return toolbarOptions;
    },
    onBeforeLoadImage() {
      return "/templates/default/img/blocked.png";
    },
  },
  beforeUnmount() {
    const { jspreadsheet } = window;
    if (jspreadsheet && typeof jspreadsheet.destroyAll === "function") {
      jspreadsheet.destroyAll();
    }
  },
};
</script>
````
````angularjs
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Spreadsheet } from '@jspreadsheet/angular';
import formula from '@jspreadsheet/formula-pro';
import client from '@jspreadsheet/client';

declare global {
  interface Window {
    jspreadsheet: any;
    formula: any;
    client: any;
  }
}

@Component({
  selector: 'app-jss-server-mirror',
  standalone: true,
  imports: [Spreadsheet],
  template: `
    <div class="row middle"
         style="justify-content:center; max-width:1300px; margin:0 auto;">
      <div class="column p10">
        <Spreadsheet
          [license]="license"
          [guid]="GUID"
          [toolbar]="stripImageButton"
          [onbeforeloadimage]="onBeforeLoadImage"
          [tableOverflow]="true"
          [tableWidth]="1300"
          [tableHeight]="500">
        </Spreadsheet>
      </div>

      <div class="column p10" style="margin-top:10px;">
        <Spreadsheet
          [license]="license"
          [guid]="GUID"
          [toolbar]="stripImageButton"
          [onbeforeloadimage]="onBeforeLoadImage"
          [tableOverflow]="true"
          [tableWidth]="1300"
          [tableHeight]="500">
        </Spreadsheet>
      </div>

      <p style="text-align:center; width:100%; margin-top:10px;">
        Click here to find more information about the
        <a href="/products/server">Jspreadsheet Server</a> extension
      </p>
    </div>
  `
})
export class JssServerMirrorComponent implements OnInit, OnDestroy {
  license = 'set-your-license';

  GUID = '08d29049-e951-6722-dff0-d6149e62c0e1';
  SERVER_URL = 'https://jspreadsheet.com';
  SERVER_PATH = 's/';

  ngOnInit(): void {
    const { jspreadsheet, formula, client } = window;

    if (!jspreadsheet) {
      console.error('jspreadsheet not found.');
      return;
    }

    if (typeof jspreadsheet.destroyAll === 'function') {
      jspreadsheet.destroyAll();
    }

    if (typeof jspreadsheet.setExtensions === 'function') {
      jspreadsheet.setExtensions({ formula, client });
    }

    if (client && typeof client.connect === 'function') {
      const remote = client.connect({
        url: this.SERVER_URL,
        path: this.SERVER_PATH,
      });

      remote.create(this.GUID, {
        tabs: false,
        toolbar: true,
        worksheets: [
          {
            minDimensions: [4, 6],
            worksheetName: 'Sheet 1',
          },
        ],
      });
    }
  }

  ngOnDestroy(): void {
    const { jspreadsheet } = window;
    if (jspreadsheet && typeof jspreadsheet.destroyAll === 'function') {
      jspreadsheet.destroyAll();
    }
  }

  stripImageButton = (toolbarOptions: any) => {
    if (!toolbarOptions || !Array.isArray(toolbarOptions.items)) return toolbarOptions;
    for (let i = 0; i < toolbarOptions.items.length; i++) {
      if (toolbarOptions.items[i].content === 'add_photo_alternate') {
        toolbarOptions.items.splice(i, 1);
        i--;
      }
    }
    return toolbarOptions;
  };

  onBeforeLoadImage = () => {
    return '/templates/default/img/blocked.png';
  };
}
````

</div>