// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-example-relations
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

module.exports = function(EmailAddress) {

  EmailAddress.observe('before save', function test(ctx, next) {
    console.log('-------- before save hook called on EmailAddress model. ------------ ')
    next();
  });

};
