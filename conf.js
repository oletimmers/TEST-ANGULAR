exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['protractor/tests/darkmode-spec.js', 'protractor/tests/draganddrop-spec.js']
};
