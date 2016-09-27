function handleShortcut(shortcut) {
	let selector;
	if (shortcut.sticker) {
		selector = document.querySelector('[title="Choose a sticker"]');
		selector.click();
	}
	else if (shortcut.gif) {
		selector = document.querySelector('[title="Choose a gif or sticker"]');
		selector.click();
	}
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		handleShortcut(request);
	}
);