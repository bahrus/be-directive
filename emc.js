// @ts-check
import { BeHive, seed, MountObserver } from 'be-hive/be-hive.js';
/** @import {EMC} from './ts-refs/trans-render/be/types' */
/** @import {Actions, PAP, AllProps, AP} from './ts-refs/be-a-beacon/types' */;

/**
 * @type {EMC<any, AP>}
 */
export const emc = {
    base: 'be-directive',
    map:  {
        '0.0': {
            instanceOf: 'Object',
            mapsTo: '.'
        }
    },
    enhPropKey: 'beDirective',
    importEnh: async () => {
    const {BeDirective} = /** @type {{new(): IEnhancement<Element>}} */ 
        /** @type {any} */
        (await import('./be-directive.js'));
        return BeDirective;
    }
};
const mose = seed(emc);
MountObserver.synthesize(document, BeHive, mose);