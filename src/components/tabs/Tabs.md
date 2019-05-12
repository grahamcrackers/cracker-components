## Configuration options

The MDL CSS classes apply various predefined visual and behavioral enhancements to the tabs. The table below lists the available classes and their effects.

| MDL class              | Effect                                           | Remarks                                                          |
| ---------------------- | ------------------------------------------------ | ---------------------------------------------------------------- |
| `mdl-tabs`             | Defines a tabs container as an MDL component     | Required on "outer" div element                                  |
| `mdl-js-tabs`          | Assigns basic MDL behavior to tabs container     | Required on "outer" div element                                  |
| `mdl-js-ripple-effect` | Applies _ripple_ click effect to tab links       | Optional; goes on "outer" div element                            |
| `mdl-tabs__tab-bar`    | Defines a container as an MDL tabs link bar      | Required on first "inner" div element                            |
| `mdl-tabs__tab`        | Defines an anchor (link) as an MDL tab activator | Required on all links in first "inner" div element               |
| `is-active`            | Defines a tab as the default display tab         | Required on one (and only one) of the "inner" div (tab) elements |
| `mdl-tabs__panel`      | Defines a container as tab content               | Required on each of the "inner" div (tab) elements               |
