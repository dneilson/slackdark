let f = document.createElement('script');
f.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
f.type = "text/javascript";
f.addEventListener('load', function () {
	$('head').append(`
		<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
		<link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.4/css/mdb.min.css" rel="stylesheet">
	`);
	let g = document.createElement('script');
	g.src = "https://raw.githubusercontent.com/uzairfarooq/arrive/master/src/arrive.js";
	g.type = "text/javascript";
	g.addEventListener('load', function() {
		function modifymessages () {
			$('div#messages_container').arrive('span.c-message__body', {existing:true}, function () {
				$(this).not($(this).has('.dn')).html(function (i, html) {
					return html.replace(/(?:(?:UID\:|UID|@sofee)(?:\D{0,3})([0-9]+))/gmi, "<div class=\"dn\"><a target=\"_blank\" style='padding: 1px 10px;margin: 2px 4px !important;' class='btn btn-primary btn-sm font-weight-bold uidthing waves-effect waves-light' extpages='https://internal.sofi.com/c/customer/summary/$1'>UID: $1</a></div>").replace(/(?:(?:^|)(?:app|app\:)(?:\D{0,1})([0-9]+))/gmi, "<div class=\"dn\"><a target=\"_blank\" style='padding: 1px 10px;margin: 2px 4px !important;' class='btn btn-primary btn-sm font-weight-bold uidthing waves-effect waves-light' extpages='https://internal.sofi.com/c/product/loan-info/$1'>app:$1</a></div>").replace(/(?:^| )((?:PS\-|DBCR\-|SOFI\-|PD\-|TECH\-|ITSD\-)[0-9]{4,6})/gmi, "<div class=\"dn\"><a target=\"_blank\" style='padding: 1px 10px;margin: 2px 4px !important;' class='btn btn-primary btn-sm font-weight-bold uidthing waves-effect waves-light' extpages='https://sofiinc.atlassian.net/browse/$1'>$1</a></div>")
				})
			})
		}
	})
})
