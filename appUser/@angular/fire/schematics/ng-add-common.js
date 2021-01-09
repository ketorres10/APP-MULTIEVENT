"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
exports.stringifyFormatted = (obj) => JSON.stringify(obj, null, 2);
exports.overwriteIfExists = (tree, path, content) => {
    if (tree.exists(path)) {
        tree.overwrite(path, content);
    }
    else {
        tree.create(path, content);
    }
};
function emptyFirebaseRc() {
    return {
        targets: {}
    };
}
function generateFirebaseRcTarget(firebaseProject, project) {
    return {
        hosting: {
            [project]: [
                firebaseProject
            ]
        }
    };
}
function generateFirebaseRc(tree, path, firebaseProject, project) {
    const firebaseRc = tree.exists(path)
        ? safeReadJSON(path, tree)
        : emptyFirebaseRc();
    firebaseRc.targets = firebaseRc.targets || {};
    firebaseRc.targets[firebaseProject] = generateFirebaseRcTarget(firebaseProject, project);
    exports.overwriteIfExists(tree, path, exports.stringifyFormatted(firebaseRc));
}
exports.generateFirebaseRc = generateFirebaseRc;
function safeReadJSON(path, tree) {
    try {
        return JSON.parse(tree.read(path).toString());
    }
    catch (e) {
        throw new schematics_1.SchematicsException(`Error when parsing ${path}: ${e.message}`);
    }
}
exports.safeReadJSON = safeReadJSON;
exports.addDependencies = (host, deps) => {
    const packageJson = host.exists('package.json') && safeReadJSON('package.json', host);
    if (packageJson === undefined) {
        throw new schematics_1.SchematicsException('Could not locate package.json');
    }
    Object.keys(deps).forEach(depName => {
        const dep = deps[depName];
        if (dep.dev) {
            packageJson.devDependencies[depName] =
                packageJson.devDependencies[depName] || dep.version;
        }
        else {
            packageJson.dependencies[depName] =
                packageJson.dependencies[depName] || deps.version;
        }
    });
    exports.overwriteIfExists(host, 'package.json', exports.stringifyFormatted(packageJson));
};
