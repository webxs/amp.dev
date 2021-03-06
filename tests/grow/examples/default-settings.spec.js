/**
 * Copyright 2019 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

require('module-alias/register');

const fs = require('fs');
const cheerio = require('cheerio');
const project = require('@lib/utils/project');
const filePath = project.paths.GROW_BUILD_DEST + '/tests/examples/default_settings.html';

describe('config', () => {
  const generatedContent = fs.readFileSync(filePath);
  const $ = cheerio.load(generatedContent);

  it('check headline', () => {
    expect($('h1').length).toBe(1,
        'Should only have headline from page and not from example');

    const divAfterHeadline = $('h1').nextAll('div');

    expect(divAfterHeadline.hasClass('ap-m-code-snippet')).toBe(true,
        'First div after headline should be the code snipped');
  });
});
