/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Path } from '../Path';
import { RepoInfo } from '../../RepoInfo';
/**
 *
 * @param {!string} dataURL
 * @return {{repoInfo: !RepoInfo, path: !Path}}
 */
export declare const parseRepoInfo: (dataURL: string) => {
    repoInfo: RepoInfo;
    path: Path;
};
/**
 *
 * @param {!string} dataURL
 * @return {{host: string, port: number, domain: string, subdomain: string, secure: boolean, scheme: string, pathString: string, namespace: string}}
 */
export declare const parseDatabaseURL: (dataURL: string) => {
    host: string;
    port: number;
    domain: string;
    subdomain: string;
    secure: boolean;
    scheme: string;
    pathString: string;
    namespace: string;
};
