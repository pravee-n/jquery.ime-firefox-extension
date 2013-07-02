jquery.ime-firefox-extension
============================

Mozilla Firefox browser extension for jquery.ime input method library

[jQuery.IME](https://github.com/wikimedia/jquery.ime) is an input method editor library that currently supports more than 150 input methods. It is the jQuery 
version of the input method tool used in Wikimedia projects, a.k.a. Narayam.

Get the source code
-------------------
Clone the repository:

    https://github.com/pravee-n/jquery.ime-firefox-extension.git

After cloning the repository, you need to run the following commmands
    
	git submodule init
	git submodule update

It would include the [jQuery.IME](https://github.com/wikimedia/jquery.ime) and 
[jQuery.ULS](https://github.com/wikimedia/jquery.uls) libraries in the extension.


Installation on Firefox
-----------------------
1. Launch Firefox.
2. Goto Tools > Addons or you can use the shortcut Ctrl+Shift+A.
3. Click on settings icon near the search bar on top right and select "Install Addon from file".
4. Navigate to the directory where you cloned the source code and open jquery-ime-firefox-extension.xpi to install the extension.

jQuery.IME for firefox is now installed.<br>
Try refreshing the page once if jQuery.IME extension is not loaded on a input field or a textarea on a webpage.
