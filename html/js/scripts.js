// Makes html tables actually usable on mobile phones
jQuery('table').each(function () {
	var thetable = jQuery(this);
	jQuery(this).find('td').each(function () {
		jQuery(this).attr('data-heading', thetable.find('th:nth-child(' + (jQuery(this).index() + 1) + ')').text());
	});
});


// Hack to fix jumping via anchors when header is static, doesn't require any classes
function offsetAnchor() {
	window.scrollTo(window.scrollX, window.scrollY - 70);

}

var tmp = true;
window.addEventListener("hashchange", function (event) {
	console.log(tmp);
	if (tmp) {
		offsetAnchor();
		window.location.hash = "_";
		tmp = false;
	} else {
		tmp = true;
	}
});

offsetAnchor();
