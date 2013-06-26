var data = require( "sdk/self" ).data;
var pageMod = require( "sdk/page-mod" );

pageMod.PageMod({
	include: "*",
	contentStyleFile: data.url( "jquery.ime/css/jquery.ime.css" ),
	
	// contentStyle is built dynamically here to include absolute URLs
	// for the images referenced by jquery.ime.css.
	// This workaround is needed because we can't use relative URLs 
	// in contentStyleFile or contentStyle.
	contentStyle: [
		".imeselector { background-image: url(" + data.url( "jquery.ime/images/ime-active.png" ) + ")}",
		".imeselector-menu .checked { background-image: url(" + data.url( "jquery.ime/images/tick.png" ) + ")}"
	],

	// Inject the required scripts into the page
	contentScriptFile: [ data.url( "js/jquery.js" ),
							data.url( "jquery.ime/src/jquery.ime.js" ),
							data.url( "jquery.ime/src/jquery.ime.selector.js" ),
							data.url( "jquery.ime/src/jquery.ime.preferences.js" ),
							data.url( "jquery.ime/src/jquery.ime.inputmethods.js" ),
							data.url( "js/invoke.jquery.ime.js" )
	],

	onAttach: function(worker) {
		worker.port.on( "injectScript", function ( imeSource ) {
			if ( imeSource !== undefined ) {
				worker.port.emit( "injectSciptCallback", { "injected": true, "scriptToInject": data.load( "jquery.ime/rules/" + imeSource ) } );
			}
			else {
				worker.port.emit( "injectSciptCallback", { "injected": false, "errormessage": "No file specified" } );	
			}
		} );
	}
});