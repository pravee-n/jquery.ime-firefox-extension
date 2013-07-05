var data = require( "sdk/self" ).data;
var pageMod = require( "sdk/page-mod" );

pageMod.PageMod({
	include: "*",
	contentStyleFile: [
		data.url( "jquery.ime/css/jquery.ime.css" ),
		
		data.url( "jquery.uls/css/jquery.uls.css" ),
		data.url( "jquery.uls/css/jquery.uls.grid.css" ),
		data.url( "jquery.uls/css/jquery.uls.lcd.css" )
	],
	
	// contentStyle is built dynamically here to include absolute URLs
	// for the images referenced by jquery.ime.css.
	// This workaround is needed because we can't use relative URLs 
	// in contentStyleFile or contentStyle.
	contentStyle: [
		".imeselector { background-image: url(" + data.url( "jquery.ime/images/ime-active.png" ) + ") }",
		".imeselector-menu .checked { background-image: url( " + data.url( "jquery.ime/images/tick.png" ) + " ) }",
		".uls-trigger { background-image: url( " + data.url( "jquery.uls/images/icon-language.png") + " ) }",
		".uls-worldmap { background-image: url( " + data.url( "jquery.uls/images/world_map.png" ) + " ) }",
		".icon-close { background-image: url( " + data.url( "jquery.uls/images/close.png" ) + " ) }",
		".uls-menu .search-label { background-image: url( " + data.url( "jquery.uls/images/search.png" ) + " ) }",
		".uls-menu .languagefilter-clear { background-image: url( " + data.url( "jquery.uls/images/clear.png" ) + " ) }",
	],

	// Inject the required scripts into the page
	contentScriptFile: [ data.url( "js/jquery.js" ),
							data.url( "jquery.ime/src/jquery.ime.js" ),
							data.url( "jquery.ime/src/jquery.ime.selector.js" ),
							data.url( "jquery.ime/src/jquery.ime.preferences.js" ),
							data.url( "jquery.ime/src/jquery.ime.inputmethods.js" ),
							
							data.url( "jquery.uls/src/jquery.uls.data.js" ),
							data.url( "jquery.uls/src/jquery.uls.data.utils.js" ),
							data.url( "jquery.uls/src/jquery.uls.lcd.js" ),
							data.url( "jquery.uls/src/jquery.uls.languagefilter.js" ),
							data.url( "jquery.uls/src/jquery.uls.regionfilter.js" ),
							data.url( "jquery.uls/src/jquery.uls.core.js" ),

							data.url( "js/jquery.ime.init.js" )
	],

	onAttach: function( worker ) {
		worker.port.on( "injectScript", function ( imeSource ) {
			if ( imeSource !== undefined ) {
				worker.port.emit( "injectSciptCallback", { "injected": true, "scriptToInject": data.load( "jquery.ime/" + imeSource ) } );
			}
			else {
				worker.port.emit( "injectSciptCallback", { "injected": false, "errormessage": "No file specified" } );	
			}
		} );
	}
});