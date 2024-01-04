import { addons } from '@storybook/manager-api';
import { create } from "@storybook/theming";

addons.setConfig({
    theme: create({
        base: "light",
        colorPrimary: "#FFFFFF",
        colorSecondary: "#0041E8",
        appBorderRadius: 8,
        // appBorderColor: '#0041E8',
        brandImage: "https://github.com/Roid-obi/logo-cvzn-ds/blob/main/Digi%20Dreams.png?raw=true",
        brandTitle: 'Gigi Dreams',
    }),
});