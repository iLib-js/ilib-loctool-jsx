/*
 * testJsxFileType.js - test the HTML template file type handler object.
 *
 * Copyright © 2019, Box, Inc.
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
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

if (!JsxFileType) {
    var JsxFileType = require("../JsxFileType.js");
    var CustomProject =  require("loctool/lib/CustomProject.js");
}

var p = new CustomProject({
    sourceLocale: "en-US",
    plugins: ["../."]
}, "./testfiles", {
    locales:["en-GB"]
});

module.exports.jsxfiletype = {
    testJsxFileTypeConstructor: function(test) {
        test.expect(1);

        var htf = new JsxFileType(p);

        test.ok(htf);

        test.done();
    },

    testJsxFileTypeHandlesJSTrue: function(test) {
        test.expect(2);

        var htf = new JsxFileType(p);
        test.ok(htf);

        test.ok(htf.handles("foo.js"));

        test.done();
    },

    testJsxFileTypeHandlesJSXTrue: function(test) {
        test.expect(2);

        var htf = new JsxFileType(p);
        test.ok(htf);

        test.ok(htf.handles("foo.jsx"));

        test.done();
    },

    testJsxFileTypeHandlesHamlFalse: function(test) {
        test.expect(2);

        var htf = new JsxFileType(p);
        test.ok(htf);

        test.ok(!htf.handles("foo.html.haml"));

        test.done();
    },

    testJsxFileTypeHandlesTemplatesFalse: function(test) {
        test.expect(2);

        var htf = new JsxFileType(p);
        test.ok(htf);

        test.ok(!htf.handles("foo.tmpl.html"));

        test.done();
    },

    testJsxFileTypeHandlesJSXFalseClose: function(test) {
        test.expect(2);

        var htf = new JsxFileType(p);
        test.ok(htf);

        test.ok(!htf.handles("foojsx"));

        test.done();
    },

    testJsxFileTypeHandlesJSTrueWithDir: function(test) {
        test.expect(2);

        var htf = new JsxFileType(p);
        test.ok(htf);

        test.ok(htf.handles("a/b/c/foo.js"));

        test.done();
    },

    testJsxFileTypeHandlesJSXTrueWithDir: function(test) {
        test.expect(2);

        var htf = new JsxFileType(p);
        test.ok(htf);

        test.ok(htf.handles("a/b/c/foo.jsx"));

        test.done();
    },

    testJsxFileTypeHandlesJSAlreadyLocalizedGB1: function(test) {
        test.expect(2);

        var htf = new JsxFileType(p);
        test.ok(htf);

        test.ok(htf.handles("a/b/c/strings.en-GB.js"));

        test.done();
    },

    testJsxFileTypeHandlesJSAlreadyLocalizedGBJustLang: function(test) {
        test.expect(2);

        var htf = new JsxFileType(p);
        test.ok(htf);

        test.ok(!htf.handles("a/b/c/en.js"));

        test.done();
    },

    testJsxFileTypeHandlesJSAlreadyLocalizedGBLangRegion: function(test) {
        test.expect(2);

        var htf = new JsxFileType(p);
        test.ok(htf);

        test.ok(!htf.handles("a/b/c/en-GB.js"));

        test.done();
    },

    testJsxFileTypeHandlesJSAlreadyLocalizedGBLangScriptRegion: function(test) {
        test.expect(2);

        var htf = new JsxFileType(p);
        test.ok(htf);

        test.ok(!htf.handles("a/b/c/zh-Hant-CN.js"));

        test.done();
    },

    testJsxFileTypeHandlesJSAlreadyLocalizedCN1: function(test) {
        test.expect(2);

        var htf = new JsxFileType(p);
        test.ok(htf);

        test.ok(htf.handles("a/b/c/strings.zh-Hans-CN.js"));

        test.done();
    },

    testJsxFileTypeHandlesJSAlreadyLocalizedCN2: function(test) {
        test.expect(2);

        var htf = new JsxFileType(p);
        test.ok(htf);

        test.ok(!htf.handles("a/b/c/zh-Hans-CN.js"));

        test.done();
    },

    testJsxFileTypeHandlesJSAlreadyLocalizedWithFlavor: function(test) {
        test.expect(2);

        var htf = new JsxFileType(p);
        test.ok(htf);

        test.ok(htf.handles("a/b/c/strings.en-ZA-ASDF.js"));

        test.done();
    },

    testJsxFileTypeHandlesJsxAlreadyLocalizedWithFlavor: function(test) {
        test.expect(2);

        var htf = new JsxFileType(p);
        test.ok(htf);

        test.ok(!htf.handles("a/b/c/en-ZA-ASDF.jsx"));

        test.done();
    }
};
