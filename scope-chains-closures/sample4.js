function foo(){
	var bar;
	quux = 'global';
	function zip(){
		var quux = 'asf';
		bar=true;
		return;
	}
	return zip;
}