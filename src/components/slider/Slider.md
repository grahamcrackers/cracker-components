## Configuration options

The MDL CSS classes apply various predefined visual and behavioral enhancements to the slider. The table below lists the available classes and their effects.

| MDL class       | Effect                                      | Remarks  |
| --------------- | ------------------------------------------- | -------- |
| `mdl-slider`    | Defines input element as an MDL component   | Required |
| `mdl-js-slider` | Assigns basic MDL behavior to input element | Required |

> **Note:** A disabled version of the slider is provided, and is invoked with the standard HTML boolean attribute `disabled`. `<input class="mdl-slider mdl-js-slider" type="range" id="s1" min="0" max="10" value="4" step="2" disabled>`
> This attribute may be added or removed programmatically via scripting.

> **Note:** Although the _value_ attribute is used to set a slider's initial value, it should not be used
> to modify the value programmatically; instead, use the MDL `change()` method. For example, assuming
> that _slider1_ is a slider object and _newvalue_ is a variable containing the desired value, do not
> use `slider1.value = newvalue`; instead, use `slider1.MaterialSlider.change(newvalue)`.
