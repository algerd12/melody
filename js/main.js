$(document).ready(function () {
	var currentFloor = 2;   // переменная где хранится текущий этаж
	var floorPath = $(".home-image path");  // каждый отдельный этаж в SVG
	var counterUp = $(".counter-up");    /*увеличение этажа*/
	var counterDown = $(".counter-down");  /*уменьшение этажа*/
	var modal = $(".modal");
	var modalCloseButton = $(".modal-close-button");
	var viewFlatsButton = $(".view-flats");

	// функция при наведении мышью на этаж
	floorPath.on("mouseover", function () {
		floorPath.removeClass("current-floor");   // удаляем активный класс у этажей
		currentFloor = $(this).attr("data-floor");  // получаем значение текущего (активного) этажа
		$(".counter").text(currentFloor);  // записываем значение этажа в счетчик справа
	});

	floorPath.on("click", toggleModal);   //при клике на этаж, вызывает диологовое окно
	modalCloseButton.on("click", toggleModal);   //при клике на кнопку закрыть закрывает диологовое окно
	viewFlatsButton.on("click", toggleModal);

	counterUp.on("click", function () {  // отслеживаем клик по кнопке вверх
		if (currentFloor < 18) {  // проверяем условие этаж не больше 18
			currentFloor++;  // увеличиваем на 1 этаж
			usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2,
			useGrouping: false });  // форматируем переменную с этажом, чтобы было 01 а не 1
			$(".counter").text(usCurrentFloor);   // записываем значение этажа в счетчик справа
			floorPath.removeClass("current-floor");   // удаляем активный класс у этажей
			$(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");   // подсвечиваем текущий этаж
		}
	});

	counterDown.on("click", function () {  // отслеживаем клик по кнопке вниз
		if (currentFloor > 2) {   // проверяем условие этаж не меньше 2
			currentFloor--;  // уменьшаем на 1 этаж
			usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2,
			useGrouping: false });   // форматируем переменную с этажом, чтобы было 01 а не 1
			$(".counter").text(usCurrentFloor);   // записываем значение этажа в счетчик справа
			floorPath.removeClass("current-floor");   // удаляем активный класс у этажей
			$(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");   // подсвечиваем текущий этаж
		};
	});
	function toggleModal() {   //функция открыть-закрыть диологовое окно
		modal.toggleClass("is-open");
	}
})
