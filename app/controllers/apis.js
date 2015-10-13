var log = require('log');

var appShortcuts = Ti.UI.iOS.createApplicationShortcuts();

function listStaticShortcuts() {
	log.args('Ti.UI.iOS.ApplicationShortcuts.listStaticShortcuts', appShortcuts.listStaticShortcuts());
}

function listDynamicShortcuts() {
	var res = appShortcuts.listDynamicShortcuts();

	log.args('Ti.UI.iOS.ApplicationShortcuts.listDynamicShortcuts', res);

	if (res.length === 0) {
		Ti.UI.createAlertDialog({
			title: 'None',
			message: 'Open a picture to create a dynamic shortcut.'
		}).show();
	}
}

function dynamicShortcutExists() {
	var res = appShortcuts.dynamicShortcutExists('details');

	log.args('Ti.UI.iOS.ApplicationShortcuts.dynamicShortcutExists', 'details', res);

	if (!res) {
		Ti.UI.createAlertDialog({
			title: 'Does not exist',
			message: 'Open a picture to create a dynamic shortcut.'
		}).show();
	}
}

function getDynamicShortcut() {
	var res = appShortcuts.getDynamicShortcut('details');

	log.args('Ti.UI.iOS.ApplicationShortcuts.getDynamicShortcut', 'details', res);

	if (!res) {
		Ti.UI.createAlertDialog({
			title: 'Does not exist',
			message: 'Open a picture to create a dynamic shortcut.'
		}).show();
	}
}

function removeDynamicShortcut() {
	appShortcuts.removeDynamicShortcut('details');

	Ti.UI.createAlertDialog({
		title: 'Removed',
		message: 'Open a picture to create a new dynamic shortcut.'
	}).show();
}

function removeAllDynamicShortcuts() {
	appShortcuts.removeAllDynamicShortcuts();

	Ti.UI.createAlertDialog({
		title: 'Removed',
		message: 'Open a picture to create a new dynamic shortcut.'
	}).show();
}