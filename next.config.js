const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const path = require("path");

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            /* development only config options here */
        };
    }

    return {
        /* config options for all phases except development here */
        sassOptions: {
            includePaths: [path.join(__dirname, "styles")],
        },
    };
};
