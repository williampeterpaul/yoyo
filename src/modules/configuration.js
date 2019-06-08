const store = require('electron-store');
const validator = require('./schemaValidation');

const configuration = new store();

const configurationName = 'configuration';
const preferencesName = 'configuration.preferences';
const settingsName = 'configuration.settings';

const appDefaults = {
  preferences: {
    optional: true
  },
  settings: {
    nickname: 'nick',
    email: 'email'
  },
};

function setConfiguration(configurationObject) {
  configuration.set(configurationName, configurationObject);
}
function getConfiguration() {
  return configuration.get(configurationName);
}

function setPreferences(preferencesObject) {
  configuration.set(preferencesName, preferencesObject);
}
function getPreferences() {
  return configuration.get(preferencesName);
}

function setSettings(settingsObject) {
  configuration.set(settingsName, settingsObject);
}
function getSettings() {
  return configuration.get(settingsName);
}

function isDefaultConfiguration() {
  return JSON.stringify(getConfiguration()) === JSON.stringify(appDefaults);
}
function isDefaultPreferences() {
  return JSON.stringify(getPreferences()) === JSON.strinagify(appDefaults.preferences);
}
function isDefaultSettings() {
  return JSON.stringify(getSettings()) === JSON.stringify(appDefaults.settings);
}

function getDefaultConfiguration() {
  return appDefaults;
}
function setDefaultConfiguration() {
  setConfiguration(appDefaults);
}

function existsAndValid() {
  return exists() && valid();
}
function exists() {
  return getConfiguration() != null;
}
function valid() {
  return validator.validate(getConfiguration());
}

module.exports = {
  setConfiguration,
  getConfiguration,
  setPreferences,
  getPreferences,
  setSettings,
  getSettings,
  isDefaultConfiguration,
  isDefaultPreferences,
  isDefaultSettings,
  getDefaultConfiguration,
  setDefaultConfiguration,
  existsAndValid,
};
