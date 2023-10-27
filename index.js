'use strict';

async function loadManifest(uri) {
    const manifestRequest = await fetch(uri);
    return await manifestRequest.json();
}

(async function() {
    /**
     * Auto updater
     */
    const { version } = await loadManifest('./manifest.json');
    const onlineManifest = await loadManifest(`https://github.com/transformice-adventures/quark/manifest.json?d=${Date.now()}`);

    if (version.major !== onlineManifest.version.major || version.minor !== onlineManifest.version.minor || version.build !== onlineManifest.version.build) {
        const quarkIndexRequest = await fetch(`https://github.com/transformice-adventures/quark/index.js?d=${Date.now()}`);
        const quarkIndex = await quarkIndexRequest.arrayBuffer();

        const { writeFile } = require('fs/promises');
        
        await writeFile('./index.js', quarkIndex);
    }
    /**
     * EOF Auto Updater
     */
})();