/**
 * @author <code@tythos.net>
 */

import Trippy from "../Trippy/index.js";

class TrippyHeader extends Trippy {
    constructor() {
        super(import.meta.url);
    }
}

export default Object.assign(TrippyHeader, {
    "__url__": "https://github.com/Tythos/TrippyHeader.git",
    "__license__": "MIT",
    "__semver__": "v0.1.0",
    "__deps__": {
        "Trippy": "https://github.com/Tythos/Trippy.git"
    },
    "__tests__": []
});
