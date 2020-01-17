$(document).ready(function () {
	$.ajax({
		url: "http://localhost:5000/articles", success: function (result) {
			$.each(result, function (i) {
				var templateString = `
					<article class="card">
						<h2 class="title">` + result[i].title + `</h2>
						<p class="body">` + result[i].body + `</p>
					</article>`;
				$('#card').append(templateString);
			})
		}
	});
})