import { FirebaseNamespace } from '@firebase/app-types';
import './register-module';
import './src/platform_node/node_init';
/**
 * Registers the main Firestore Node build with the components framework.
 * Persistence can be enabled via `firebase.firestore().enablePersistence()`.
 */
export declare function registerFirestore(instance: FirebaseNamespace): void;
