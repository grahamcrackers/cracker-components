Layout Example:

```jsx
import { LayoutDrawer } from './LayoutDrawer';
import { LayoutHeader } from './LayoutHeader';
import { LayoutHeaderRow } from './LayoutHeaderRow';
import { LayoutSpacer } from './LayoutSpacer';
import { LayoutTitle } from './LayoutTitle';
import { Nav } from './Nav';
import { NavLink } from './NavLink';
import { LayoutContent } from './LayoutContent';

<Layout className="demo-layout-transparent">
    <LayoutHeader isTransparent>
        <LayoutHeaderRow>
            {/* <!-- Title --> */}
            <LayoutTitle text="Title" />
            {/* <!-- Add spacer, to align navigation to the right --> */}
            <LayoutSpacer />
            {/* <!-- Navigation --> */}
            <Nav>
                <NavLink to="#!" text="Link" />
                <NavLink to="#!" text="Link" />
                <NavLink to="#!" text="Link" />
                <NavLink to="#!" text="Link" />
            </Nav>
        </LayoutHeaderRow>
    </LayoutHeader>
    <LayoutDrawer>
        <LayoutTitle text="Title" />
        <Nav>
            <NavLink to="#!" text="Link" />
            <NavLink to="#!" text="Link" />
            <NavLink to="#!" text="Link" />
            <NavLink to="#!" text="Link" />
        </Nav>
    </LayoutDrawer>
    <LayoutContent />
</Layout>;
```

## Configuration options

The MDL CSS classes apply various predefined visual and behavioral enhancements to the layout. The table below lists the available classes and their effects.

| MDL class                                | Effect                                                                                                                                  | Remarks                                                                     |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `mdl-layout`                             | Defines container as an MDL component                                                                                                   | Required on outer div element                                               |
| `mdl-js-layout`                          | Assigns basic MDL behavior to layout                                                                                                    | Required on outer div element                                               |
| `mdl-layout__header`                     | Defines container as an MDL component                                                                                                   | Required on header element                                                  |
| `mdl-layout-icon`                        | Used for adding an application icon. Gets concealed by menu icon if both are visible.                                                   | Goes on optional icon element                                               |
| `mdl-layout__header-row`                 | Defines container as MDL header row                                                                                                     | Required on header content div                                              |
| `mdl-layout__title`                      | Defines layout title text                                                                                                               | Required on layout title span                                               |
| `mdl-layout-spacer`                      | Used to align elements inside a header or drawer, by growing to fill remaining space. Commonly used for aligning elements to the right. | Goes on optional div following layout title                                 |
| `mdl-navigation`                         | Defines container as MDL navigation group                                                                                               | Required on nav element                                                     |
| `mdl-navigation__link`                   | Defines anchor as MDL navigation link                                                                                                   | Required on header and/or drawer anchor elements                            |
| `mdl-layout__drawer`                     | Defines container as MDL layout drawer                                                                                                  | Required on drawer div element                                              |
| `mdl-layout__content`                    | Defines container as MDL layout content                                                                                                 | Required on main element                                                    |
| `mdl-layout__header--scroll`             | Makes the header scroll with the content                                                                                                | Optional; goes on header element                                            |
| `mdl-layout--fixed-drawer`               | Makes the drawer always visible and open in larger screens                                                                              | Optional; goes on outer div element (not drawer div element)                |
| `mdl-layout--fixed-header`               | Makes the header always visible, even in small screens                                                                                  | Optional; goes on outer div element                                         |
| `mdl-layout--no-drawer-button`           | Does not display a drawer button                                                                                                        | Optional; goes on `mdl-layout` element                                      |
| `mdl-layout--no-desktop-drawer-button`   | Does not display a drawer button in desktop mode                                                                                        | Optional; goes on `mdl-layout` element                                      |
| `mdl-layout--large-screen-only`          | Hides an element on smaller screens                                                                                                     | Optional; goes on any descendant of `mdl-layout`                            |
| `mdl-layout--small-screen-only`          | Hides an element on larger screens                                                                                                      | Optional; goes on any descendant of `mdl-layout`                            |
| `mdl-layout__header--waterfall`          | Allows a "waterfall" effect with multiple header lines                                                                                  | Optional; goes on header element                                            |
| `mdl-layout__header--waterfall-hide-top` | Hides the top rather than the bottom rows on a waterfall header                                                                         | Optional; goes on header element. Requires `mdl-layout__header--waterfall`  |
| `mdl-layout__header--transparent`        | Makes header transparent (draws on top of layout background)                                                                            | Optional; goes on header element                                            |
| `mdl-layout__header--seamed`             | Uses a header without a shadow                                                                                                          | Optional; goes on header element                                            |
| `mdl-layout__tab-bar`                    | Defines container as an MDL tab bar                                                                                                     | Required on div element inside header (tabbed layout)                       |
| `mdl-layout__tab`                        | Defines anchor as MDL tab link                                                                                                          | Required on tab bar anchor elements                                         |
| `is-active`                              | Defines tab as default active tab                                                                                                       | Optional; goes on tab bar anchor element and associated tab section element |
| `mdl-layout__tab-panel`                  | Defines container as tab content panel                                                                                                  | Required on tab section elements                                            |
| `mdl-layout__tab-manual-switch`          | Disables tab switching when clicking on tab separators. Useful for disabling default behavior and setting up your own event listeners.  | Optional; goes on tab bar element                                           |
| `mdl-layout--fixed-tabs`                 | Uses fixed tabs instead of the default scrollable tabs                                                                                  | Optional; goes on outer div element (not div inside header)                 |
