/*
 * Copyright 2022 Cortex Applications, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { cortexScorecardPageURL, cortexScorecardServicePageURL } from "./URLUtils";

describe('URLUtils', () => {
  describe('cortexScorecardPageURL', () => {
    it('should use default cortex url', () => {
      expect(cortexScorecardPageURL({scorecardId: '1'})).toEqual('https://app.getcortexapp.com/admin/scorecards/1');
    });

    it('should use the provided url', () => {
      expect(cortexScorecardPageURL({scorecardId: '1', cortexURL: 'https://test.domain'})).toEqual('https://test.domain/admin/scorecards/1');
    });
  });

  describe('cortexScorecardServicePageURL', () => {
    it('should use default url', () => {
      expect(cortexScorecardServicePageURL({scorecardId: '1', serviceId: '1'})).toEqual('https://app.getcortexapp.com/admin/scorecards/1?service=1');
    });

    it('should use custom domain url', () => {
      expect(cortexScorecardServicePageURL({scorecardId: '1', serviceId: '1', cortexURL: 'https://test.domain'})).toEqual('https://test.domain/admin/scorecards/1?service=1');
    });
  });
});
