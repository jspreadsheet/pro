title: ACOS Function - Calculate Inverse Cosine in Jspreadsheet
keywords: ACOS function, inverse cosine, arccosine, trigonometry calculations, Jspreadsheet, JavaScript spreadsheet, mathematical functions, angle calculation, radians conversion, spreadsheet formulas, trigonometric functions
description: Learn how to use the ACOS function in Jspreadsheet to calculate inverse cosine (arccosine) values, convert cosine values to angles in radians, and perform advanced trigonometric calculations in your spreadsheet applications.

# ACOS function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `ACOS` function in Jspreadsheet Formulas Pro is a sophisticated trigonometric tool that calculates the inverse cosine (arccosine) of a number. This essential function has wide-ranging applications in:

Engineering and Physics:
- Angular measurements in mechanical systems
- Structural analysis and stress calculations
- Wave motion analysis
- Force vector decomposition
- Optical system design

Computer Graphics and Gaming:
- 3D rotation calculations
- Camera angle computations
- Character movement physics
- Collision detection
- Animation path calculations

Navigation and Positioning:
- GPS coordinate calculations
- Satellite positioning
- Maritime navigation
- Flight path computation
- Robotics movement control

Scientific Research:
- Wave function analysis
- Crystal structure calculations
- Quantum mechanical computations
- Statistical analysis
- Signal processing

The function accepts values between -1 and 1, representing the natural range of cosine values, and returns angles in radians. This mathematical foundation makes it indispensable for precise calculations in scientific and engineering applications.

## Documentation

Returns the arccosine of a number, in radians.

### Category

Math and trigonometry

### Syntax

ACOS(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The cosine for which to return the arccosine. Must be between -1 and 1 inclusive. |


### Behavior

The `ACOS` function in spreadsheets returns the arccosine, or inverse cosine, of a number. The arccosine of a number is an angle, measured in radians, whose cosine is that number. Here's how it behaves with different types of inputs:

- **Numbers**: The `ACOS` function expects a numeric input value between -1 and 1, both inclusive. For any number in this range, the function will return the arccosine of the number, measured in radians.
- **Empty Cells**: If an empty cell is provided as the value, `ACOS` treats it as a zero and returns the arccosine of zero, which is π/2 or 1.570796327 (approx).
- **Text**: If a text value is provided, `ACOS` will return a `#VALUE!` error.
- **Booleans**: If a Boolean value is provided, `ACOS` will treat `TRUE` as 1 and `FALSE` as 0 and returns their respective arccosines.
- **Errors**: If the input value is not between -1 and 1, `ACOS` will return a `#NUM!` error.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | This error occurs if the input value is not between -1 and 1. |
| #VALUE! | This error occurs if the input is not a number, such as a text string. |

### Best practices

> - Always ensure that the input to the `ACOS` function is a number between -1 and 1. If the input data might not meet this criteria, consider using error handling functions to manage potential errors.
> - Remember that the `ACOS` function returns the result in radians. If you need the result in degrees, you need to convert the result from radians to degrees using the `DEGREES` function. 
> - Avoid using text or boolean values as the input for the `ACOS` function to prevent the `#VALUE!` error. 
> - Be aware that the `ACOS` function treats empty cells as zero. If an empty cell as input can cause incorrect results in your calculations, you should handle this in your formula.

### Usage Examples

Here are comprehensive examples demonstrating the ACOS function in various professional applications:

**1. Engineering Calculations:**
```
// Structural Analysis
=ACOS(force_parallel/force_total)
// Calculates angle of force application

// Mechanical Systems
=ACOS(adjacent_length/hypotenuse)
// Determines component angles in linkages

// Optical Systems
=ACOS(n1/n2)
// Calculates critical angle in refraction
```

**2. Computer Graphics:**
```
// 3D Rotation
=ACOS((x1*x2 + y1*y2 + z1*z2)/(magnitude1*magnitude2))
// Calculates angle between vectors

// Camera Positioning
=ACOS(dot_product/vector_length)
// Determines view angle

// Animation
=ACOS((end_x - start_x)/distance)
// Computes rotation angle for smooth movement
```

**3. Navigation Systems:**
```
// GPS Calculations
=ACOS(SIN(lat1)*SIN(lat2) + COS(lat1)*COS(lat2)*COS(lon2-lon1))
// Great circle distance calculation

// Maritime Navigation
=ACOS((height_difference)/distance)
// Calculates elevation angle

// Flight Path
=ACOS(vertical_distance/total_distance)
// Determines climb/descent angle
```

**4. Scientific Applications:**
```
// Wave Analysis
=ACOS(amplitude/max_amplitude)
// Phase angle calculation

// Crystal Structure
=ACOS(plane_spacing/lattice_constant)
// Determines interplanar angles

// Quantum Mechanics
=ACOS(wave_function_overlap)
// Calculates quantum state angles
```

**5. Robotics and Automation:**
```
// Arm Positioning
=ACOS((x^2 + y^2 - l1^2 - l2^2)/(2*l1*l2))
// Inverse kinematics calculation

// Motion Planning
=ACOS(target_distance/max_reach)
// Determines feasible movement angles

// Sensor Alignment
=ACOS(sensor_reading/reference_value)
// Calculates alignment angles
```

**6. Advanced Calculations:**
```
// Vector Analysis
=ACOS(SUMPRODUCT(vector1, vector2)/
      (SQRT(SUMSQ(vector1))*SQRT(SUMSQ(vector2))))
// Calculates angle between vectors

// Statistical Analysis
=ACOS(correlation_coefficient)
// Converts correlation to angle

// Signal Processing
=ACOS(signal_value/reference_amplitude)
// Phase angle determination
```

**7. Real-world Examples:**

1. **Structural Engineering:**
```
=ACOS(10/15)  // Returns ~0.8471
// Angle of support beam (in radians)
// 10 = vertical height
// 15 = beam length
```

2. **Optical Design:**
```
=ACOS(1/1.5)  // Returns ~0.8411
// Critical angle calculation
// 1.5 = refractive index
```

3. **Robotics Control:**
```
=ACOS(8/10)  // Returns ~0.6435
// Joint angle calculation
// 8 = projected length
// 10 = arm segment length
```

### Interactive Spreadsheet Demo

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
  worksheets: [{
    data: [
    [
        "Cosine Value",
        "Arccosine (radians)",
        "Arccosine (degrees)"
    ],
    [
        -1,
        "=ACOS(A2)",
        "=ACOS(A2)*180/PI()"
    ],
    [
        0,
        "=ACOS(A3)",
        "=ACOS(A3)*180/PI()"
    ],
    [
        0.5,
        "=ACOS(A4)",
        "=ACOS(A4)*180/PI()"
    ],
    [
        1,
        "=ACOS(A5)",
        "=ACOS(A5)*180/PI()"
    ]
]
  }]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import formula from "@jspreadsheet/formula-pro";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set license
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Worksheet data
    const data = [
    [
        "Cosine Value",
        "Arccosine (radians)",
        "Arccosine (degrees)"
    ],
    [
        -1,
        "=ACOS(A2)",
        "=ACOS(A2)*180/PI()"
    ],
    [
        0,
        "=ACOS(A3)",
        "=ACOS(A3)*180/PI()"
    ],
    [
        0.5,
        "=ACOS(A4)",
        "=ACOS(A4)*180/PI()"
    ],
    [
        1,
        "=ACOS(A5)",
        "=ACOS(A5)*180/PI()"
    ]
];

    // Render component
    return (
        <Spreadsheet ref={spreadsheet}>
            <Worksheet data={data} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet">
        <Worksheet :data="data" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";
import formula from "@jspreadsheet/formula-pro";

// Set license
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Worksheet data
        const data = [
    [
        "Cosine Value",
        "Arccosine (radians)",
        "Arccosine (degrees)"
    ],
    [
        -1,
        "=ACOS(A2)",
        "=ACOS(A2)*180/PI()"
    ],
    [
        0,
        "=ACOS(A3)",
        "=ACOS(A3)*180/PI()"
    ],
    [
        0.5,
        "=ACOS(A4)",
        "=ACOS(A4)*180/PI()"
    ],
    [
        1,
        "=ACOS(A5)",
        "=ACOS(A5)*180/PI()"
    ]
]

        return {
            data
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import * as formula from "@jspreadsheet/formula-pro";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];

    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                data: [
    [
        "Cosine Value",
        "Arccosine (radians)",
        "Arccosine (degrees)"
    ],
    [
        -1,
        "=ACOS(A2)",
        "=ACOS(A2)*180/PI()"
    ],
    [
        0,
        "=ACOS(A3)",
        "=ACOS(A3)*180/PI()"
    ],
    [
        0.5,
        "=ACOS(A4)",
        "=ACOS(A4)*180/PI()"
    ],
    [
        1,
        "=ACOS(A5)",
        "=ACOS(A5)*180/PI()"
    ]
]
            }]
        });
    }
}
```

