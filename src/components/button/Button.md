Colored Fab:

```jsx
import Icon from '../icon/Icon';
<>
    <Button type="fab" colored>
        <Icon type="add" />
    </Button>
    <Button type="fab" colored hasRipple>
        <Icon type="add" />
    </Button>
</>;
```

## Configuration options

The MDL CSS classes apply various predefined visual and behavioral enhancements to the button. The table below lists the available classes and their effects.

| MDL class              | Effect                                                                                      | Remarks                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `mdl-button`           | Defines button as an MDL component                                                          | Required                                                 |
| `mdl-js-button`        | Assigns basic MDL behavior to button                                                        | Required                                                 |
| (none)                 | Applies _flat_ display effect to button (default)                                           |                                                          |
| `mdl-button--raised`   | Applies _raised_ display effect                                                             | Mutually exclusive with _fab_, _mini-fab_, and _icon_    |
| `mdl-button--fab`      | Applies _fab_ (circular) display effect                                                     | Mutually exclusive with _raised_, _mini-fab_, and _icon_ |
| `mdl-button--mini-fab` | Applies _mini-fab_ (small fab circular) display effect                                      | Mutually exclusive with _raised_, _fab_, and _icon_      |
| `mdl-button--icon`     | Applies _icon_ (small plain circular) display effect                                        | Mutually exclusive with _raised_, _fab_, and _mini-fab_  |
| `mdl-button--colored`  | Applies _colored_ display effect (primary or accent color, depending on the type of button) | Colors are defined in `material.min.css`                 |
| `mdl-button--primary`  | Applies _primary_ color display effect                                                      | Colors are defined in `material.min.css`                 |
| `mdl-button--accent`   | Applies _accent_ color display effect                                                       | Colors are defined in `material.min.css`                 |
| `mdl-js-ripple-effect` | Applies _ripple_ click effect                                                               | May be used in combination with any other classes        |

> **Note:** Disabled versions of all the available button types are provided, and are invoked with the standard HTML boolean attribute `disabled`. `<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" disabled>Raised Ripples Disabled</button>`. Alternatively, the `mdl-button--disabled` class can be used to achieve the same style but it does not disable the functionality of the element.
> This attribute may be added or removed programmatically via scripting.
