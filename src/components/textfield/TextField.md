## Configuration options

The MDL CSS classes apply various predefined visual and behavioral enhancements to the text field. The table below lists the available classes and their effects.

| MDL class                       | Effect                                                  | Remarks                                                              |
| ------------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------- |
| `mdl-textfield`                 | Defines container as an MDL component                   | Required on "outer" div element                                      |
| `mdl-js-textfield`              | Assigns basic MDL behavior to input                     | Required on "outer" div element                                      |
| `mdl-textfield__input`          | Defines element as textfield input                      | Required on input or textarea element                                |
| `mdl-textfield__label`          | Defines element as textfield label                      | Required on label element for input or textarea elements             |
| `mdl-textfield--floating-label` | Applies _floating label_ effect                         | Optional; goes on "outer" div element                                |
| `mdl-textfield__error`          | Defines span as an MDL error message                    | Optional; goes on span element for MDL input element with _pattern_  |
| `mdl-textfield--expandable`     | Defines a div as an MDL expandable text field container | For expandable input fields, required on "outer" div element         |
| `mdl-button`                    | Defines label as an MDL icon button                     | For expandable input fields, required on "outer" div's label element |
| `mdl-js-button`                 | Assigns basic behavior to icon container                | For expandable input fields, required on "outer" div's label element |
| `mdl-button--icon`              | Defines label as an MDL icon container                  | For expandable input fields, required on "outer" div's label element |
| `mdl-input__expandable-holder`  | Defines a container as an MDL component                 | For expandable input fields, required on "inner" div element         |
| `is-invalid`                    | Defines the textfield as invalid on initial load.       | Optional on `mdl-textfield` element                                  |

(1) The "search" icon is used here as an example. Other icons can be used by modifying the text. For a list of available icons, see [this page](https://www.google.com/design/icons).

> **Note:** Disabled versions of each text field type are provided, and are invoked with the standard HTML boolean attribute `disabled`. `<input class="mdl-textfield mdl-js-textfield" type="text" disabled>`
> This attribute may be added or removed programmatically via scripting.
