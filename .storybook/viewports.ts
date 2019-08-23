export const Viewports = {
    DefaultViewport: {
        /**
         * name to display in the dropdown
         * @type {String}
         */
        name: 'Responsive',

        /**
         * Inline styles to be applied to the story (iframe).
         * styles is an object whose key is the camelCased version of the style name, and whose
         * value is the style’s value, usually a string
         * @type {Object}
         */
        styles: {
            width: '100%',
            height: '100%',
        },

        /**
         * type of the device (e.g. desktop, mobile, or tablet)
         * @type {String}
         */
        type: 'desktop',
    },
    MobileLarge: {
        name: 'Generic Mobile',
        styles: {
            height: '1280px',
            width: '480px',
        },
        type: 'mobile',
    },
};
