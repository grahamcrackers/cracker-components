## Configuration options

The MDL CSS classes apply various predefined visual enhancements and behavioral effects to the grid. The table below lists the available classes and their effects.

| MDL class                    | Effect                                                       | Remarks                                                              |
| ---------------------------- | ------------------------------------------------------------ | -------------------------------------------------------------------- |
| `mdl-grid`                   | Defines a container as an MDL grid component                 | Required on "outer" div element                                      |
| `mdl-cell`                   | Defines a container as an MDL cell                           | Required on "inner" div elements                                     |
| `mdl-grid--no-spacing`       | Modifies the grid cells to have no margin between them.      | Optional on grid container.                                          |
| `mdl-cell--N-col`            | Sets the column size for the cell to N                       | N is 1-12 inclusive, defaults to 4; optional on "inner" div elements |
| `mdl-cell--N-col-desktop`    | Sets the column size for the cell to N in desktop mode only  | N is 1-12 inclusive; optional on "inner" div elements                |
| `mdl-cell--N-col-tablet`     | Sets the column size for the cell to N in tablet mode only   | N is 1-8 inclusive; optional on "inner" div elements                 |
| `mdl-cell--N-col-phone`      | Sets the column size for the cell to N in phone mode only    | N is 1-4 inclusive; optional on "inner" div elements                 |
| `mdl-cell--N-offset`         | Adds N columns of whitespace before the cell                 | N is 1-11 inclusive; optional on "inner" div elements                |
| `mdl-cell--N-offset-desktop` | Adds N columns of whitespace before the cell in desktop mode | N is 1-11 inclusive; optional on "inner" div elements                |
| `mdl-cell--N-offset-tablet`  | Adds N columns of whitespace before the cell in tablet mode  | N is 1-7 inclusive; optional on "inner" div elements                 |
| `mdl-cell--N-offset-phone`   | Adds N columns of whitespace before the cell in phone mode   | N is 1-3 inclusive; optional on "inner" div elements                 |
| `mdl-cell--order-N`          | Reorders cell to position N                                  | N is 1-12 inclusive; optional on "inner" div elements                |
| `mdl-cell--order-N-desktop`  | Reorders cell to position N when in desktop mode             | N is 1-12 inclusive; optional on "inner" div elements                |
| `mdl-cell--order-N-tablet`   | Reorders cell to position N when in tablet mode              | N is 1-12 inclusive; optional on "inner" div elements                |
| `mdl-cell--order-N-phone`    | Reorders cell to position N when in phone mode               | N is 1-12 inclusive; optional on "inner" div elements                |
| `mdl-cell--hide-desktop`     | Hides the cell when in desktop mode                          | Optional on "inner" div elements                                     |
| `mdl-cell--hide-tablet`      | Hides the cell when in tablet mode                           | Optional on "inner" div elements                                     |
| `mdl-cell--hide-phone`       | Hides the cell when in phone mode                            | Optional on "inner" div elements                                     |
| `mdl-cell--stretch`          | Stretches the cell vertically to fill the parent             | Default; optional on "inner" div elements                            |
| `mdl-cell--top`              | Aligns the cell to the top of the parent                     | Optional on "inner" div elements                                     |
| `mdl-cell--middle`           | Aligns the cell to the middle of the parent                  | Optional on "inner" div elements                                     |
| `mdl-cell--bottom`           | Aligns the cell to the bottom of the parent                  | Optional on "inner" div elements                                     |
