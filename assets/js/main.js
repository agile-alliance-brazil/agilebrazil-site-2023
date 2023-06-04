/*
	Venue by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function($) {

	var	$window		= $(window),
		$header		= $('#header'),
		$banner		= $('#banner'),
		$body		= $('body');

	/**
	 * Applies parallax scrolling to an element's background image.
	 * @return {jQuery} jQuery object.
	 */
	$.fn._parallax = (browser.name == 'ie' | browser.name == 'edge' || browser.mobile) ? function() { return $(this) } : function(intensity) {

		var	$window = $(window),
			$this = $(this);

		if (this.length == 0 || intensity === 0)
			return $this;

		if (this.length > 1) {

			for (var i=0; i < this.length; i++)
				$(this[i])._parallax(intensity);

			return $this;

		}

		if (!intensity)
			intensity = 0.25;

		$this.each(function() {

			var $t = $(this),
				on, off;

			on = function() {

				$t.css('background-position', 'center 0px');

				$window
					.on('scroll._parallax', function() {

						var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);

						$t.css('background-position', 'center ' + (pos * (-1 * intensity)) + 'px');

					});

			};

			off = function() {

				$t
					.css('background-position', '');

				$window
					.off('scroll._parallax');

			};

			breakpoints.on('<=large', off);
			breakpoints.on('>large', on);

		});

		$window
			.off('load._parallax resize._parallax')
			.on('load._parallax resize._parallax', function() {
				$window.trigger('scroll');
			});

		return $(this);

	};

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Banner.
		if ($banner.length > 0)
			$banner._parallax(0.25);

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				target: $body,
				visibleClass: 'is-menu-visible',
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right'
			});

	
	$.ajax({
		type: 'GET',
		url: "https://www.even3.com.br/api/v1/session/getschedule",
		/*beforeSend: function(request) {
			request.setRequestHeader("Authority", 'ASAS');
		},*/
		headers: {
			"Authorization-Token": "ASASA"
		},
		success: function(result){
			console.log('Successo', result);
		},
		error: function(result){
			console.log('Error', result);
			window.program = JSON.parse(`{
				"data": [
				  {
					"id_schedule": "01012020",
					"date": "2020-01-01T00:00:00.0000000",
					"day": "quarta-feira",
					"sessions": [
					  {
						"id_session": 155553,
						"title": "Accessibility Management In Large Companies",
						"title_schedule": "Atividades",
						"venue": "AUDITORIUM 1",
						"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat blandit lectus. In placerat purus tellus. Proin eros dui, condimentum at imperdiet vel, pretium vel ipsum. Nunc varius lectus eu mi tempor, ut luctus est ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin imperdiet nisi et risus gravida pharetra sit amet a odio. Nam laoreet sem vitae finibus laoreet. Nulla eget lectus at sem consectetur volutpat. Duis scelerisque tellus id vestibulum aliquam.",
						"tags": "Accessibility, Enterprise",
						"date": "01/01/2020",
						"date_UTC": "2020-01-01T00:00:00.0000000",
						"start_time": "10:00",
						"end_time": "11:00",
						"speakers": [
						  {
							"id_speaker": 117452,
							"name": "Katherine Martin",
							"photo": "https://images.even3.com.br/4Ru_0labb33RLwLB8BABoTSc38k=/150x150/smart/even3.blob.core.windows.net/geral/1.f8ee65f357fe420ead67.jpeg",
							"resume": "Sed convallis quam vel mi porta rutrum. Sed non egestas ipsum",
							"facebook": "",
							"linkedin": "https://www.google.com.br/",
							"email": "",
							"lattes": "https://www.google.com.br/",
							"twitter": "",
							"site": ""
						  },
						  {
							"id_speaker": 117453,
							"name": "José Antonio",
							"photo": "https://images.even3.com.br/pfHDCxbvC3rxTpEmlhwYtEh5ess=/150x150/smart/even3.blob.core.windows.net/geral/image.e75181cc624d4cd49b6b.jpeg",
							"resume": "Sed convallis quam vel mi porta rutrum. Sed non egestas ipsum",
							"facebook": "https://www.google.com.br/",
							"linkedin": "https://www.google.com.br/",
							"email": "",
							"lattes": "https://www.google.com.br/",
							"twitter": "https://www.google.com.br/",
							"site": ""
						  }
						],
						"all_dates": [
						  {
							"date": "2020-01-01T00:00:00",
							"day": "quarta-feira",
							"start_time": "10:00",
							"end_time": "11:00"
						  }
						]
					  },
					  {
						"id_session": 155554,
						"title": "Inaugural Speech",
						"title_schedule": "Atividades",
						"venue": "AUDITORIUM 1",
						"description": " ",
						"tags": null,
						"date": "01/01/2020",
						"date_UTC": "2020-01-01T00:00:00.0000000",
						"start_time": "11:00",
						"end_time": "12:00",
						"speakers": [
						  {
							"id_speaker": 117452,
							"name": "Katherine Martin",
							"photo": "https://images.even3.com.br/4Ru_0labb33RLwLB8BABoTSc38k=/150x150/smart/even3.blob.core.windows.net/geral/1.f8ee65f357fe420ead67.jpeg",
							"resume": "Sed convallis quam vel mi porta rutrum. Sed non egestas ipsum",
							"facebook": "",
							"linkedin": "https://www.google.com.br/",
							"email": "",
							"lattes": "https://www.google.com.br/",
							"twitter": "",
							"site": ""
						  },
						  {
							"id_speaker": 117453,
							"name": "José Antonio",
							"photo": "https://images.even3.com.br/pfHDCxbvC3rxTpEmlhwYtEh5ess=/150x150/smart/even3.blob.core.windows.net/geral/image.e75181cc624d4cd49b6b.jpeg",
							"resume": "Sed convallis quam vel mi porta rutrum. Sed non egestas ipsum",
							"facebook": "https://www.google.com.br/",
							"linkedin": "https://www.google.com.br/",
							"email": "",
							"lattes": "https://www.google.com.br/",
							"twitter": "https://www.google.com.br/",
							"site": ""
						  }
						],
						"all_dates": [
						  {
							"date": "2020-01-01T00:00:00",
							"day": "quarta-feira",
							"start_time": "11:00",
							"end_time": "12:00"
						  }
						]
					  },
					  {
						"id_session": 155555,
						"title": "Coffee Break",
						"title_schedule": "Atividades",
						"venue": null,
						"description": " ",
						"tags": null,
						"date": "01/01/2020",
						"date_UTC": "2020-01-01T00:00:00.0000000",
						"start_time": "12:00",
						"end_time": "13:00",
						"speakers": [],
						"all_dates": [
						  {
							"date": "2020-01-01T00:00:00",
							"day": "quarta-feira",
							"start_time": "12:00",
							"end_time": "13:00"
						  }
						]
					  },
					  {
						"id_session": 155560,
						"title": "Accessibility In Mice (Meetings, Incentives, Conferencing And Exhibitions)",
						"title_schedule": "Atividades",
						"venue": "AUDITORIUM 1",
						"description": " ",
						"tags": null,
						"date": "01/01/2020",
						"date_UTC": "2020-01-01T00:00:00.0000000",
						"start_time": "13:00",
						"end_time": "15:00",
						"speakers": [
						  {
							"id_speaker": 117452,
							"name": "Katherine Martin",
							"photo": "https://images.even3.com.br/4Ru_0labb33RLwLB8BABoTSc38k=/150x150/smart/even3.blob.core.windows.net/geral/1.f8ee65f357fe420ead67.jpeg",
							"resume": "Sed convallis quam vel mi porta rutrum. Sed non egestas ipsum",
							"facebook": "",
							"linkedin": "https://www.google.com.br/",
							"email": "",
							"lattes": "https://www.google.com.br/",
							"twitter": "",
							"site": ""
						  },
						  {
							"id_speaker": 117462,
							"name": "Philip Lang",
							"photo": "https://images.even3.com.br/xxZs9DB481SVpgo3bcKu_9AHRKo=/150x150/smart/even3.blob.core.windows.net/geral/image3.df2be705053d42149231.jpeg",
							"resume": null,
							"facebook": "",
							"linkedin": "",
							"email": "",
							"lattes": "",
							"twitter": "",
							"site": ""
						  }
						],
						"all_dates": [
						  {
							"date": "2020-01-01T00:00:00",
							"day": "quarta-feira",
							"start_time": "13:00",
							"end_time": "15:00"
						  }
						]
					  },
					  {
						"id_session": 155561,
						"title": "Accessibility in International",
						"title_schedule": "Atividades",
						"venue": "AUDITORIUM 1",
						"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat blandit lectus. In placerat purus tellus. Proin eros dui, condimentum at imperdiet vel, pretium vel ipsum. Nunc varius lectus eu mi tempor, ut luctus est ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin imperdiet nisi et risus gravida pharetra sit amet a odio. Nam laoreet sem vitae finibus laoreet. Nulla eget lectus at sem consectetur volutpat. Duis scelerisque tellus id vestibulum aliquam.",
						"tags": null,
						"date": "01/01/2020",
						"date_UTC": "2020-01-01T00:00:00.0000000",
						"start_time": "15:00",
						"end_time": "17:00",
						"speakers": [
						  {
							"id_speaker": 117452,
							"name": "Katherine Martin",
							"photo": "https://images.even3.com.br/4Ru_0labb33RLwLB8BABoTSc38k=/150x150/smart/even3.blob.core.windows.net/geral/1.f8ee65f357fe420ead67.jpeg",
							"resume": "Sed convallis quam vel mi porta rutrum. Sed non egestas ipsum",
							"facebook": "",
							"linkedin": "https://www.google.com.br/",
							"email": "",
							"lattes": "https://www.google.com.br/",
							"twitter": "",
							"site": ""
						  }
						],
						"all_dates": [
						  {
							"date": "2020-01-01T00:00:00",
							"day": "quarta-feira",
							"start_time": "15:00",
							"end_time": "17:00"
						  }
						]
					  },
					  {
						"id_session": 155571,
						"title": "Current Training Model: University and Professional",
						"title_schedule": "Atividades",
						"venue": null,
						"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat blandit lectus. In placerat purus tellus. Proin eros dui, condimentum at imperdiet vel, pretium vel ipsum. Nunc varius lectus eu mi tempor, ut luctus est ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin imperdiet nisi et risus gravida pharetra sit amet a odio. Nam laoreet sem vitae finibus laoreet. Nulla eget lectus at sem consectetur volutpat. Duis scelerisque tellus id vestibulum aliquam",
						"tags": null,
						"date": "01/01/2020",
						"date_UTC": "2020-01-01T00:00:00.0000000",
						"start_time": "17:00",
						"end_time": "18:00",
						"speakers": [
						  {
							"id_speaker": 117464,
							"name": "Joana Johnson",
							"photo": "https://images.even3.com.br/c7-XGsFsPdMcL-HgZiSRraiBaCM=/150x150/smart/even3.blob.core.windows.net/geral/image2.565b9a549e4544ccb27c.jpeg",
							"resume": "Sed accumsan lacus vitae dictum malesuada. Praesent varius massa tristique elementum bibendum",
							"facebook": "",
							"linkedin": "https://www.google.com.br/",
							"email": "",
							"lattes": "",
							"twitter": "https://www.google.com.br/",
							"site": ""
						  }
						],
						"all_dates": [
						  {
							"date": "2020-01-01T00:00:00",
							"day": "quarta-feira",
							"start_time": "17:00",
							"end_time": "18:00"
						  },
						  {
							"date": "2020-01-02T00:00:00",
							"day": "quinta-feira",
							"start_time": "17:00",
							"end_time": "18:00"
						  }
						]
					  }
					]
				  },
				  {
					"id_schedule": "02012020",
					"date": "2020-01-02T00:00:00.0000000",
					"day": "quinta-feira",
					"sessions": [
					  {
						"id_session": 155567,
						"title": "Inclusion in Emergency Management",
						"title_schedule": "Atividades",
						"venue": null,
						"description": " ",
						"tags": null,
						"date": "02/01/2020",
						"date_UTC": "2020-01-02T00:00:00.0000000",
						"start_time": "10:00",
						"end_time": "11:00",
						"speakers": [
						  {
							"id_speaker": 117462,
							"name": "Philip Lang",
							"photo": "https://images.even3.com.br/xxZs9DB481SVpgo3bcKu_9AHRKo=/150x150/smart/even3.blob.core.windows.net/geral/image3.df2be705053d42149231.jpeg",
							"resume": null,
							"facebook": "",
							"linkedin": "",
							"email": "",
							"lattes": "",
							"twitter": "",
							"site": ""
						  }
						],
						"all_dates": [
						  {
							"date": "2020-01-02T00:00:00",
							"day": "quinta-feira",
							"start_time": "10:00",
							"end_time": "11:00"
						  }
						]
					  },
					  {
						"id_session": 155568,
						"title": "Accessibility in Smart Cities",
						"title_schedule": "Atividades",
						"venue": null,
						"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat blandit lectus. In placerat purus tellus. Proin eros dui, condimentum at imperdiet vel, pretium vel ipsum. Nunc varius lectus eu mi tempor, ut luctus est ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin imperdiet nisi et risus gravida pharetra sit amet a odio. Nam laoreet sem vitae finibus laoreet. Nulla eget lectus at sem consectetur volutpat. Duis scelerisque tellus id vestibulum aliquam",
						"tags": null,
						"date": "02/01/2020",
						"date_UTC": "2020-01-02T00:00:00.0000000",
						"start_time": "11:00",
						"end_time": "12:00",
						"speakers": [
						  {
							"id_speaker": 117453,
							"name": "José Antonio",
							"photo": "https://images.even3.com.br/pfHDCxbvC3rxTpEmlhwYtEh5ess=/150x150/smart/even3.blob.core.windows.net/geral/image.e75181cc624d4cd49b6b.jpeg",
							"resume": "Sed convallis quam vel mi porta rutrum. Sed non egestas ipsum",
							"facebook": "https://www.google.com.br/",
							"linkedin": "https://www.google.com.br/",
							"email": "",
							"lattes": "https://www.google.com.br/",
							"twitter": "https://www.google.com.br/",
							"site": ""
						  }
						],
						"all_dates": [
						  {
							"date": "2020-01-02T00:00:00",
							"day": "quinta-feira",
							"start_time": "11:00",
							"end_time": "12:00"
						  }
						]
					  },
					  {
						"id_session": 155569,
						"title": "Coffee Break",
						"title_schedule": "Atividades",
						"venue": null,
						"description": " ",
						"tags": null,
						"date": "02/01/2020",
						"date_UTC": "2020-01-02T00:00:00.0000000",
						"start_time": "12:00",
						"end_time": "13:00",
						"speakers": [],
						"all_dates": [
						  {
							"date": "2020-01-02T00:00:00",
							"day": "quinta-feira",
							"start_time": "12:00",
							"end_time": "13:00"
						  }
						]
					  },
					  {
						"id_session": 155570,
						"title": "Access to Cultural Contents",
						"title_schedule": "Atividades",
						"venue": null,
						"description": " ",
						"tags": null,
						"date": "02/01/2020",
						"date_UTC": "2020-01-02T00:00:00.0000000",
						"start_time": "13:00",
						"end_time": "17:00",
						"speakers": [
						  {
							"id_speaker": 117452,
							"name": "Katherine Martin",
							"photo": "https://images.even3.com.br/4Ru_0labb33RLwLB8BABoTSc38k=/150x150/smart/even3.blob.core.windows.net/geral/1.f8ee65f357fe420ead67.jpeg",
							"resume": "Sed convallis quam vel mi porta rutrum. Sed non egestas ipsum",
							"facebook": "",
							"linkedin": "https://www.google.com.br/",
							"email": "",
							"lattes": "https://www.google.com.br/",
							"twitter": "",
							"site": ""
						  }
						],
						"all_dates": [
						  {
							"date": "2020-01-02T00:00:00",
							"day": "quinta-feira",
							"start_time": "13:00",
							"end_time": "17:00"
						  }
						]
					  },
					  {
						"id_session": 155571,
						"title": "Current Training Model: University and Professional",
						"title_schedule": "Atividades",
						"venue": null,
						"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat blandit lectus. In placerat purus tellus. Proin eros dui, condimentum at imperdiet vel, pretium vel ipsum. Nunc varius lectus eu mi tempor, ut luctus est ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin imperdiet nisi et risus gravida pharetra sit amet a odio. Nam laoreet sem vitae finibus laoreet. Nulla eget lectus at sem consectetur volutpat. Duis scelerisque tellus id vestibulum aliquam",
						"tags": null,
						"date": "02/01/2020",
						"date_UTC": "2020-01-02T00:00:00.0000000",
						"start_time": "17:00",
						"end_time": "18:00",
						"speakers": [
						  {
							"id_speaker": 117464,
							"name": "Joana Johnson",
							"photo": "https://images.even3.com.br/c7-XGsFsPdMcL-HgZiSRraiBaCM=/150x150/smart/even3.blob.core.windows.net/geral/image2.565b9a549e4544ccb27c.jpeg",
							"resume": "Sed accumsan lacus vitae dictum malesuada. Praesent varius massa tristique elementum bibendum",
							"facebook": "",
							"linkedin": "https://www.google.com.br/",
							"email": "",
							"lattes": "",
							"twitter": "https://www.google.com.br/",
							"site": ""
						  }
						],
						"all_dates": [
						  {
							"date": "2020-01-01T00:00:00",
							"day": "quarta-feira",
							"start_time": "17:00",
							"end_time": "18:00"
						  },
						  {
							"date": "2020-01-02T00:00:00",
							"day": "quinta-feira",
							"start_time": "17:00",
							"end_time": "18:00"
						  }
						]
					  }
					]
				  }
				],
				"count": 2
			  }`);

			  var programacao = ' <ul class="workshops">';

			  window.program.data.forEach( function (item) {
				item.sessions.forEach( function (session) {
					programacao = programacao + `<li class="session" id="session`+session.id_session+`">
						<div class="row classifications">
						<p class="track"><strong>Trilha:</strong>`+session.title_schedule+`</p>
						<p class="level"><strong>Nível:</strong> `+session.venue+`</p>
						<p class="type"><strong>Tipo:</strong> `+session.venue+`</p>
						</div>
						<h3>`+session.title+`</h3>
						<p>
						`;
					var speakers = [];
					session.speakers.forEach( function (speaker) {
						speakers.push(speaker.name);
					});
					programacao = programacao + speakers.join(' & ') + `</p>
						<details>
						<summary>Saiba mais</summary>
						`+session.description+`
					
						<hr>
						<strong>Pré-requisitos: </strong> `+session.tags+`
						</details>
					</li>`
				});
			  });
			programacao += '</ul>';

			// $("#program-intregration").html(programacao);
		}
	});

})(jQuery);