// import path from 'path';
// import glob from 'glob';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const styles = require('./styleguide/styles');

module.exports = {
    title: 'Hope Components Style Guide',
    // components: function() {
    //     return glob.sync(path.resolve(__dirname, 'components/**/*.tsx')).filter(function(module) {
    //         return /\/[A-Z]\w*\.tsx$/.test(module);
    //     });
    // },
    resolver: require('react-docgen').resolver.findAllComponentDefinitions,
    propsParser: require('react-docgen-typescript').withDefaultConfig({ propFilter: { skipPropsWithoutDoc: true } })
        .parse,
    require: ['material-design-lite/material.js'],
    // ignore: ['**/components/layout/**/*'],
    skipComponentsWithoutExample: true,
    template: {
        head: {
            links: [
                {
                    rel: 'stylesheet',
                    href: 'http://fonts.googleapis.com/css?family=Roboto:300,400,500,700',
                    type: 'text/css',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
                },
            ],
        },
        theme: {
            fontFamily: {
                base: 'Roboto',
            },
        },
    },
    styles,
};
