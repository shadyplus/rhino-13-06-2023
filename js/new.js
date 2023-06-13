
setTimeout("$('.body').css('transform','translateY(0)');", 1e3);
const OFFER = '«RHINO»';
let now = new Date(),
	mm = now.getMonth() + 1,
	day = now.getDate(),
	year = now.getFullYear();
day < 10 && (day = '0' + day), mm < 10 && (mm = '0' + mm);
let date = day + '.' + mm + '.' + year;

const massange = [
	{
		m: 'مرحباً بك في موقع الإستشارات المجانية . الأن سوف يجري لك الطبيب دينيس بوتوف الطبيب الروسي الشهير إستشارة مجانية .',
	},

	{
		m: 'الطبيب دينيس بوتوف هو طبيب روسي شهير بانه يحب مساعدة مرضاه و الناس عموماً بغير مقابل و هو طبيب عام ',
	},
	{
		m: 'من اجل تحديد مشكلتك و معرفة كيفية التخلص منها يجب عليك الإجابة على بعض الأسئلة التي سأطرحها عليك الأن .',
	},
	{ m: 'ما هو عمرك ؟ ' },
	{ m: 'ما هي الأعراض الواضحة التي لديك ؟' },
	{ m: 'كم من المدة انت  تعاني بالفعل من هذه الأعراض ؟ ' },
	{
		m: 'أعتقد انك لم تحاول التخلص من هذه المشكلة من قبل ؟ ',
	},
	{
		m: 'لن أقوم بتزيين الحقائق لك  - حالتك تظهر عواقب نظامية  ، وهي نذير بوجود مشاكل بالبروستات .',
	},
	{
		m: '«RHINO» هو أفضل مكمل غذائي طبيعي 100% للتخلص من مشاكل البروستات ',
	},

	{
		m:
			'يمكنك الحصول على هذا المنتج بتخفيض يصل إلى 50% حتى تاريخ :  ' +
			date +
			' . (ضمناً)  لديك فرصة للحصول على المكمل الغذائي  «RHINO» بسعر : ' + newPrice + '.',
	},
	{
		m: 'العبوات بالتخفيض محدودة للغاية !',
	},
	{
		m: 'لذلك انصحك إذا كنت تريد التخلص من مشاكل البروستات بأقرب وقت و بأمان تام  ان تطلب هذا المكمل الغذائي الأن قبل إنتهاء التخفيض .',
	},
		{
		m: 'لا يجب عليك القلق بشأن هذا المنتج ببساطة لأنه منتج طبيعي 100% . لذلك أنصح به جميع مرضاي .',
	},
];
var mass_id = 0,
	length_mass = 0,
	lengt_num_mas = 0,
	text = '',
	speedtext = 55, //55
	process = !0;
function app1() {
	var t = new Date(),
		e = ('0' + t.getMinutes()).slice(-2),
		s = ('0' + t.getHours()).slice(-2) + ':' + e;
	if ($('.chat').height() + 100 > $('.content').height()) {
		$('#scroll_id').removeClass('hide');
		var n = $('.inp').val();
		$('.inp').val(++n);
	}
	const c =
		'<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="message-time" id="time">' +
		s +
		'</p><p class="text" id="mass' +
		mass_id +
		'"></p></div></div></div>';
	$('.chat-content-list').append(c);
}
function myMassange(t) {
	var e = new Date(),
		s = ('0' + e.getMinutes()).slice(-2);
	let n =
		'<div class="chat-content-item user "><div class="chat-content-desc"><div class="chat-content-desc-item user"><p class="message-time" id="time">' +
		(('0' + e.getHours()).slice(-2) + ':' + s) +
		'</p><p class="text" class="users_mass">' +
		t +
		'</p></div></div></div>';
	$('.chat-content-list').append(n),
		$('.content').animate(
			{ scrollTop: $('.chat-content-list').height() },
			700
		),
		$('#scroll_id').addClass('hide');
}
function question1() {
	$('.chat-content-list').append(
		'<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question1M">  20 عاماً  </span></div><div class="chat-content-buttons-gender-block"><span class="question1W"> 20-30 عاماً </span></div><div class="chat-content-buttons-gender-block"><span class="question1P"> 31-40 عاماً </span></div><div class="chat-content-buttons-gender-block"><span class="question1T"> أكبر من 50 عاماً  </span></div></div>'
	);
}
function choise1() {
	$('.question1M').click(() => {
		(document.querySelector('.chat-content-buttons-gender').style.display =
			'none'),
			myMassange('  20 عاماً  '),
			setTimeout(() => {
				process = !0;
			}, 500);
	}),
		$('.question1W').click(() => {
			(document.querySelector(
				'.chat-content-buttons-gender'
			).style.display = 'none'),
				myMassange(' 20-30 عاماً '),
				setTimeout(() => {
					process = !0;
				}, 500);
		}),
		$('.question1P').click(() => {
			(document.querySelector(
				'.chat-content-buttons-gender'
			).style.display = 'none'),
				myMassange(' 31-40 عاماً '),
				setTimeout(() => {
					process = !0;
				}, 500);
		}),
		$('.question1T').click(() => {
			(document.querySelector(
				'.chat-content-buttons-gender'
			).style.display = 'none'),
				myMassange(' أكبر من 50 عاماً  '),
				setTimeout(() => {
					process = !0;
				}, 500);
		});
}
function question2() {
	$('.chat-content-list').append(
		'<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question2M"> ضعف الرغبة الجنسية  </span></div><div class="chat-content-buttons-gender-block"><span class="question2W"> ضعف الإنتصاب و مشاكل بالبروستات  </span></div><div class="chat-content-buttons-gender-block"><span class="question2P"> قصر مدة الجماع  </span></div><div class="chat-content-buttons-gender-block"><span class="question2T"> كثرة التبول </span></div></div>'
	);
}
function choise2() {
	$('.question2M').click(() => {
		(document.querySelector('.chat-content-buttons-gender').style.display =
			'none'),
			myMassange(' ضعف الرغبة الجنسية  '),
			$('.chat-content-buttons-gender').css('display', 'none'),
			setTimeout(() => {
				process = !0;
			}, 500);
	}),
		$('.question2W').click(() => {
			(document.querySelector(
				'.chat-content-buttons-gender'
			).style.display = 'none'),
				myMassange(' ضعف الإنتصاب و مشاكل بالبروستات  '),
				$('.chat-content-buttons-gender').css('display', 'none'),
				setTimeout(() => {
					process = !0;
				}, 500);
		}),
		$('.question2P').click(() => {
			(document.querySelector(
				'.chat-content-buttons-gender'
			).style.display = 'none'),
				myMassange(' قصر مدة الجماع  '),
				$('.chat-content-buttons-gender').css('display', 'none'),
				setTimeout(() => {
					process = !0;
				}, 500);
		}),
		$('.question2T').click(() => {
			(document.querySelector(
				'.chat-content-buttons-gender'
			).style.display = 'none'),
				myMassange('كثرة التبول  '),
				$('.chat-content-buttons-gender').css('display', 'none'),
				setTimeout(() => {
					process = !0;
				}, 500);
		});
}
function question3() {
	$('.chat-content-list').append(
		'<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question3M">سنة أول أقل </span></div><div class="chat-content-buttons-gender-block"><span class="question3W"> 1-3 سنة  </span></div><div class="chat-content-buttons-gender-block"><span class="question3P">أكثر من 3 سنوات </span></div></div>'
	);
}
function choise3() {
	$('.question3M').click(() => {
		(document.querySelector('.chat-content-buttons-gender').style.display =
			'none'),
			myMassange('سنة أول أقل '),
			$('.chat-content-buttons-gender').css('display', 'none'),
			setTimeout(() => {
				process = !0;
			}, 500);
	}),
		$('.question3W').click(() => {
			(document.querySelector(
				'.chat-content-buttons-gender'
			).style.display = 'none'),
				myMassange(' 1-3 سنة  '),
				$('.chat-content-buttons-gender').css('display', 'none'),
				setTimeout(() => {
					process = !0;
				}, 500);
		}),
		$('.question3P').click(() => {
			(document.querySelector(
				'.chat-content-buttons-gender'
			).style.display = 'none'),
				myMassange('أكثر من 3 سنوات '),
				$('.chat-content-buttons-gender').css('display', 'none'),
				setTimeout(() => {
					process = !0;
				}, 500);
		});
}
function question4() {
	$('.chat-content-list').append(
		'<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question4M">سنة أو أكثر</span></div><div class="chat-content-buttons-gender-block"><span class="question4W">1-3 سنوات </span></div><div class="chat-content-buttons-gender-block"><span class="question4P">أكثر من 3 سنوات </span></div></div>'
	);
}
function choise4() {
	$('.question4M').click(() => {
		(document.querySelector('.chat-content-buttons-gender').style.display =
			'none'),
			myMassange('سنة أو أكثر'),
			$('.chat-content-buttons-gender').css('display', 'none'),
			setTimeout(() => {
				process = !0;
			}, 500);
	}),
		$('.question4W').click(() => {
			(document.querySelector(
				'.chat-content-buttons-gender'
			).style.display = 'none'),
				myMassange('1-3 سنوات '),
				$('.chat-content-buttons-gender').css('display', 'none'),
				setTimeout(() => {
					process = !0;
				}, 500);
		}),
		$('.question4P').click(() => {
			(document.querySelector(
				'.chat-content-buttons-gender'
			).style.display = 'none'),
				myMassange('أكثر من 3 سنوات '),
				$('.chat-content-buttons-gender').css('display', 'none'),
				setTimeout(() => {
					process = !0;
				}, 500);
		});
}
function question5() {
	$('.chat-content-list').append(
		'<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question5M">نعم لا أقوم بأكل الطعام المقلي و المالح </span></div><div class="chat-content-buttons-gender-block"><span class="question5W"> نسبة 50% طعام صحي  </span></div><div class="chat-content-buttons-gender-block"><span class="question5P">احب الطعام المقلي و السريع </span></div><div class="chat-content-buttons-gender-block"><span class="question5K"> احاول الحصول على الطعام على حسب الظروف المادية  </span></div></div>'
	);
}
function choise5() {
	$('.question5M').click(() => {
		(document.querySelector('.chat-content-buttons-gender').style.display =
			'none'),
			myMassange('نعم لا أقوم بأكل الطعام المقلي و المالح '),
			$('.chat-content-buttons-gender').css('display', 'none'),
			setTimeout(() => {
				process = !0;
			}, 500);
	}),
		$('.question5W').click(() => {
			(document.querySelector(
				'.chat-content-buttons-gender'
			).style.display = 'none'),
				myMassange(' نسبة 50% طعام صحي  '),
				$('.chat-content-buttons-gender').css('display', 'none'),
				setTimeout(() => {
					process = !0;
				}, 500);
		}),
		$('.question5P').click(() => {
			(document.querySelector(
				'.chat-content-buttons-gender'
			).style.display = 'none'),
				myMassange('احب الطعام المقلي و السريع '),
				$('.chat-content-buttons-gender').css('display', 'none'),
				setTimeout(() => {
					process = !0;
				}, 500);
		}),
		$('.question5K').click(() => {
			(document.querySelector(
				'.chat-content-buttons-gender'
			).style.display = 'none'),
				myMassange(' احاول الحصول على الطعام على حسب الظروف المادية  '),
				$('.chat-content-buttons-gender').css('display', 'none'),
				setTimeout(() => {
					process = !0;
				}, 500);
		});
}
function question6() {
	$('.chat-content-list').append(
		'<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question6M">امارس الرياضة </span></div><div class="chat-content-buttons-gender-block"><span class="question6W">لا امارس الرياضة و لكن احاول الحركة كثيراً </span></div><div class="chat-content-buttons-gender-block"><span class="question6P">أعمل في مكتب جالساً طوال الوقت </span></div><div class="chat-content-buttons-gender-block"><span class="question6K">اجلس طوال الوقت بالبيت </span></div></div>'
	);
}
function choise6() {
	$('.question6M').click(() => {
		(document.querySelector('.chat-content-buttons-gender').style.display =
			'none'),
			myMassange('امارس الرياضة '),
			$('.chat-content-buttons-gender').css('display', 'none'),
			setTimeout(() => {
				process = !0;
			}, 500);
	}),
		$('.question6W').click(() => {
			(document.querySelector(
				'.chat-content-buttons-gender'
			).style.display = 'none'),
				myMassange('لا امارس الرياضة و لكن احاول الحركة كثيراً '),
				$('.chat-content-buttons-gender').css('display', 'none'),
				setTimeout(() => {
					process = !0;
				}, 500);
		}),
		$('.question6P').click(() => {
			(document.querySelector(
				'.chat-content-buttons-gender'
			).style.display = 'none'),
				myMassange('أعمل في مكتب جالساً طوال الوقت '),
				$('.chat-content-buttons-gender').css('display', 'none'),
				setTimeout(() => {
					process = !0;
				}, 500);
		}),
		$('.question6K').click(() => {
			(document.querySelector(
				'.chat-content-buttons-gender'
			).style.display = 'none'),
				myMassange('اجلس طوال الوقت بالبيت '),
				$('.chat-content-buttons-gender').css('display', 'none'),
				setTimeout(() => {
					process = !0;
				}, 500);
		});
}
setTimeout(() => {
	var t = new Date(),
		e = ('0' + t.getMinutes()).slice(-2);
	const s =
		'<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="message-time" id="time">' +
		(('0' + t.getHours()).slice(-2) + ':' + e) +
		'</p><p class="text" id="mass' +
		mass_id +
		'"></p></div></div></div>';
	$('.chat-content-list').append(s);
	const n = setInterval(function () {
		if (1 == process)
			if (lengt_num_mas != massange.length) {
				if (
					((text += massange[lengt_num_mas].m[length_mass]),
					length_mass++,
					$('#mass' + lengt_num_mas).html(text),
					3 === lengt_num_mas &&
						length_mass === massange[lengt_num_mas].m.length - 1 &&
						(question1(),
						(process = !1),
						choise1(),
						$('#scroll_id').addClass('hide-q'),
						$('.content').animate(
							{ scrollTop: $('.chat-content-list').height() },
							700
						),
						$('#scroll_id').removeClass('hide-q')),
					4 === lengt_num_mas &&
						length_mass === massange[lengt_num_mas].m.length - 1 &&
						(question2(),
						(process = !1),
						choise2(),
						$('#scroll_id').addClass('hide-q'),
						$('.content').animate(
							{ scrollTop: $('.chat-content-list').height() },
							700
						),
						$('#scroll_id').removeClass('hide-q')),
					5 === lengt_num_mas &&
						length_mass === massange[lengt_num_mas].m.length - 1 &&
						(question3(),
						(process = !1),
						choise3(),
						$('#scroll_id').addClass('hide-q'),
						$('.content').animate(
							{ scrollTop: $('.chat-content-list').height() },
							700
						),
						$('#scroll_id').removeClass('hide-q')),
					200 === lengt_num_mas &&
						length_mass === massange[lengt_num_mas].m.length - 1 &&
						(question4(),
						(process = !1),
						choise4(),
						$('#scroll_id').addClass('hide-q'),
						$('.content').animate(
							{ scrollTop: $('.chat-content-list').height() },
							700
						),
						$('#scroll_id').removeClass('hide-q')),
					200 === lengt_num_mas &&
						length_mass === massange[lengt_num_mas].m.length - 1 &&
						(question5(),
						(process = !1),
						choise5(),
						$('#scroll_id').addClass('hide-q'),
						$('.content').animate(
							{ scrollTop: $('.chat-content-list').height() },
							700
						),
						$('#scroll_id').removeClass('hide-q')),
					200 === lengt_num_mas &&
						length_mass === massange[lengt_num_mas].m.length - 1 &&
						(question6(),
						(process = !1),
						choise6(),
						$('#scroll_id').addClass('hide-q'),
						$('.content').animate(
							{ scrollTop: $('.chat-content-list').height() },
							700
						),
						$('#scroll_id').removeClass('hide-q')),
					length_mass == massange[lengt_num_mas].m.length)
				) {
					lengt_num_mas++,
						mass_id++,
						(length_mass = 0),
						(text = ''),
						app1();
					$('.content').animate(
						{ scrollTop: $('.chat-content-list').height() + 5e3 },
						700
					);
				}
			} else
				clearInterval(n),
					$('#mass' + lengt_num_mas)
						.parent()
						.parent()
						.css('display', 'none'),
					$('.iframe-form').addClass('show');
	}, speedtext);
}, 1e3),
	$('[data-scroll]').on('click', function (t) {
		$('.content').animate(
			{ scrollTop: $('.chat-content-list').height() },
			700
		),
			$('#scroll_id').addClass('hide');
	});
var $marker = $('#down-box');
$('.content').scroll(function () {
	$('.content').scrollTop() + $('.content').height() >=
	$('.chat-content-list').height() + 100
		? $('#scroll_id').addClass('hide')
		: $('#scroll_id').removeClass('hide');
}),
	document.addEventListener('click', (t) => {
		t.target.parentElement.classList.contains(
			'chat-content-buttons-gender-block'
		)
        //  &&
		// 	(document.querySelector('[name="comments"]').value +=
		// 		' | ' + t.target.innerText);
	});
let nitroScroll = setInterval(() => {
	document.querySelector('.show')
		? clearInterval(nitroScroll)
		: $('.content').animate(
				{ scrollTop: $('.chat-content-list').height() + 5e3 },
				700
		  );
}, 7e3);
