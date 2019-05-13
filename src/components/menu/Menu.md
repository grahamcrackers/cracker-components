## Configuration options

The MDL CSS classes apply various predefined visual and behavioral enhancements to the menu. The table below lists the available classes and their effects.

| MDL class                            | Effect                                                                           | Remarks                                  |
| ------------------------------------ | -------------------------------------------------------------------------------- | ---------------------------------------- |
| `mdl-button`                         | Defines button as an MDL component                                               | Required on button element               |
| `mdl-js-button`                      | Assigns basic MDL behavior to button                                             | Required on button element               |
| `mdl-button--icon`                   | Applies _icon_ (small plain circular) display effect to button                   | Required on button element               |
| `material-icons`                     | Defines span as a material icon                                                  | Required on an inline element            |
| `mdl-menu`                           | Defines an unordered list container as an MDL component                          | Required on ul element                   |
| `mdl-js-menu`                        | Assigns basic MDL behavior to menu                                               | Required on ul element                   |
| `mdl-menu__item`                     | Defines buttons as MDL menu options and assigns basic MDL behavior               | Required on list item elements           |
| `mdl-menu__item--full-bleed-divider` | Modifies an item to have a full bleed divider between it and the next list item. | Optional on list item elements           |
| `mdl-js-ripple-effect`               | Applies _ripple_ click effect to option links                                    | Optional; goes on unordered list element |
| `mdl-menu--top-left`                 | Positions menu above button, aligns left edge of menu with button                | Optional; goes on unordered list element |
| (none)                               | Positions menu below button, aligns left edge of menu with button                | Default                                  |
| `mdl-menu--top-right`                | Positions menu above button, aligns right edge of menu with button               | Optional; goes on unordered list element |
| `mdl-menu--bottom-right`             | Positions menu below button, aligns right edge of menu with button               | Optional; goes on unordered list element |

(1) The "more-vert" icon class is used here as an example. Other icons can be used by modifying the class name. For a list of available icons, see [this page](http://google.github.io/web-starter-kit/latest/styleguide/icons/demo.html); hover over an icon to see its class name.

(2) The `i` or `span` element in "button"" element can be used interchangeably.

> **Note:** Disabled versions of the menu options are provided, and are invoked with the standard HTML boolean attribute `disabled` or `data-mdl-disabled`. `<li class="mdl-menu__item" disabled>Medium</li>`
> This attribute may be added or removed programmatically via scripting.
