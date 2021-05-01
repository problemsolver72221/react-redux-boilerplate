const path = require('path')

// Inject craco config:
const { createWebpackDevConfig } = require('@craco/craco')
const cracoConfig = require('../craco.config.js')
const webpackConfig = createWebpackDevConfig(cracoConfig)

module.exports = {
    /**
     * Include all the (almost) pure component examples here:
     */
    sections: [
        {
            name: 'Example',
            components: ['components/__Example/Example.jsx'],
        },
        {
            name: 'Components',
            description: 'Application level pure components',
            components: [
                'components/Flaticon/Flaticon.jsx',
                'components/Image/Image.jsx',
                // 'components/Modal/Modal.jsx',
            ],
        },
        // {
        //     name: 'Features',
        //     description: 'Produce examples for each feature',
        //     sections: [
        //         {
        //             name: 'features/locale',
        //             components: [
        //                 'features/locale/LocaleSelectorUI.js',
        //             ],
        //         },
        //     ],
        // },
    ],

    /**
     * Customize the styleguide appearance.
     */
    styles: {
        Section: {
            root: {
                marginBottom: '15vh',
            },
        },
    },

    /**
     * Inject utility components into the Styleguide context
     * this is really useful for providing a component with
     * some sort of state or routing capabilities
     */
    context: {
        ContextProvider: path.join(__dirname, './lib/ContextProvider'),
    },

    /**
     * Inject the default CSS.
     * You may need to add more of those, but it's likely that you will
     * prefer to go the `styled-components` way.
     */
    require: [path.join(__dirname, './styles')],

    /**
     * CRA provides a fully functioning webpack config that is good for
     * the `/components` folder but doesn't work in any other context
     * out of the box!
     *
     * The trick is to simply provide this configuration back to Styleguidist.
     *
     * NOTE: extending the "devServer" will enable access from any host.
     * This is required if you plan to run the devServer on NGROK or simial tools.
     */
    // webpackConfig: {
    //     ...require('react-scripts-rewired/config/webpack.config.dev.extend'),
    //     // devServer: { disableHostCheck: true },
    // },
    webpackConfig,
}
