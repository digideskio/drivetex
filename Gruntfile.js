// Copyright 2015 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bowercopy: {
      options: {
        destPrefix: 'public/third_party'
      },
      html: {
        src: '**/*\.html'
      },
      css: {
        src: '**/*\.css'
      },
      js: {
        src: '**/*\.js'
      },
      texlivejs: {
        src: 'texlivejs'
      }
    },
    clean: {
      node: ['node_modules'],
      bower: ['bower_components'],
      third_party: ['public/third_party']
    }
  });

  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['bowercopy']);
  grunt.registerTask('cleanDeps', ['clean:bower', 'clean:third_party']);

};
