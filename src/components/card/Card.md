```jsx
import CardTitle from './CardTitle';

<Card hasShadow="2" className="demo-card">
    <CardTitle>Title</CardTitle>
</Card>;
```

## Configuration options

The MDL CSS classes apply various predefined visual and behavioral enhancements to the card. The table below lists the available classes and their effects.

| MDL class                                  | Effect                                                                                               | Remarks                                                                                              |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `mdl-card`                                 | Defines div element as an MDL card container                                                         | Required on "outer" div                                                                              |
| `mdl-card--border`                         | Adds a border to the card section that it's applied to                                               | Used on the "inner" divs                                                                             |
| `mdl-shadow--2dp through mdl-shadow--16dp` | Assigns variable shadow depths (2, 3, 4, 6, 8, or 16) to card                                        | Optional, goes on "outer" div; if omitted, no shadow is present                                      |
| `mdl-card__title`                          | Defines div as a card title container                                                                | Required on "inner" title div                                                                        |
| `mdl-card__title-text`                     | Assigns appropriate text characteristics to card title                                               | Required on head tag (H1 - H6) inside title div                                                      |
| `mdl-card__subtitle-text`                  | Assigns text characteristics to a card subtitle                                                      | Optional. Should be a child of the title element.                                                    |
| `mdl-card__media`                          | Defines div as a card media container                                                                | Required on "inner" media div                                                                        |
| `mdl-card__supporting-text`                | Defines div as a card body text container and assigns appropriate text characteristics to body text  | Required on "inner" body text div; text goes directly inside the div with no intervening containers  |
| `mdl-card__actions`                        | Defines div as a card actions container and assigns appropriate text characteristics to actions text | Required on "inner" actions div; content goes directly inside the div with no intervening containers |
| `mdl-card__menu`                           | Defines element as top right menu button                                                             | Optional. Should be a child of the `mdl-card` element.                                               |
