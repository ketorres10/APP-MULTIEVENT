/**
 * @license
 * Copyright 2019 Google Inc.
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
export declare function getConfig(iid: string): Promise<void>;
/**
 * True if event should be sent to Fl transport endpoint rather than CC transport endpoint.
 * rolloutPercent is in range [0.0, 100.0].
 * @param iid Installation ID which identifies a web app installed on client.
 * @param rolloutPercent the possibility of this app sending events to Fl endpoint.
 * @return true if this installation should send events to Fl endpoint.
 */
export declare function isDestFl(iid: string, rolloutPercent: number): boolean;
