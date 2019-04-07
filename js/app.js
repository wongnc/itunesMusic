function search(){
	var input = document.getElementById('input').value

	$.ajax({url: "https://itunes.apple.com/search?term=" + input,
		dataType: "jsonp",
		success: function(data){

			// console.log(data)

			for(var i = 0; i < data.results.length; i++){
				var div = document.createElement('div')
				div.className = "col-lg-4"
				div.innerHTML = "<h3>" + data.results[i].artistName + "<h3>"
				div.innerHTML += "<img src=" + data.results[i].artworkUrl100 + "/>"
				div.innerHTML += "<h4>" + data.results[i].trackName + "</h4>"
				div.innerHTML += "<audio controls>" + "<source src=" + data.results[i].previewUrl + " type='audio/ogg'>" + "</audio><br>"
				document.getElementById('results').appendChild(div)
			}
		}
	});
	document.getElementById('input').value = ""
}