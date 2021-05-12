(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Seleccione la fecha ...",
		        "buttonLabel": "Haga clic o presione la tecla Intro o la barra espaciadora para abrir el calendario",
		        "prevButtonLabel": "Ir al mes anterior",
		        "nextButtonLabel": "Ir al siguiente mes",
		        "closeButtonTitle": "Cerca",
		        "closeButtonLabel": "Cierre el calendario",
		        "prevMonthButtonLabel": "Ir al año anterior",
		        "prevYearButtonLabel": "Ir a los veinte años anteriores",
		        "nextMonthButtonLabel": "Ir al siguiente año",
		        "nextYearButtonLabel": "Ir a los próximos veinte años",
		        "changeMonthButtonLabel": "Haga clic o presione la tecla Intro o la barra espaciadora para cambiar el mes",
		        "changeYearButtonLabel": "Haga clic o presione la tecla Intro o la barra espaciadora para cambiar el año",
		        "changeRangeButtonLabel": "Haga clic o pulse la tecla Intro o la barra espaciadora para ir a los próximos veinte años",
		        "calendarHelp": "- Flecha arriba y Flecha abajo - va para el mismo día de la semana en la semana anterior o siguiente, respectivamente. Si se llega al final del mes, continúa en el mes siguiente o anterior, según corresponda.\r\n- Flecha izquierda y Flecha derecha - avanza un día al siguiente, también en un continuo. Enfoque Visualmente se mueve día a día y se envuelve de fila en fila en la grilla de días.\r\n- Control + Re Pág - Se mueve a la misma fecha del año anterior.\r\n- Control + Page Down - Se mueve a la misma fecha en el próximo año.\r\n- Inicio - Se desplaza al primer día del mes en curso.\r\n- End - Se desplaza al último día del mes en curso.\r\n- Page Up - Se mueve a la misma fecha en el mes anterior.\r\n- Page Down - Se mueve a la misma fecha en el próximo mes.\r\n- Introducir o Espace - cierra el calendario y la fecha seleccionada se muestra en el cuadro de texto asociado.\r\n- Escape - cierra el calendario sin ninguna acción."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "enero",
		        "febrero",
		        "marzo",
		        "abril",
		        "mayo",
		        "junio",
		        "julio",
		        "agosto",
		        "setiembre",
		        "octubre",
		        "noviembre",
		        "diciembre"
		    ],
		    "month_names_abbreviated": [
		        "ene.",
		        "feb.",
		        "mar.",
		        "abr.",
		        "may.",
		        "jun.",
		        "jul.",
		        "ago.",
		        "set.",
		        "oct.",
		        "nov.",
		        "dic."
		    ],
		    "month_names_narrow": [
		        "E",
		        "F",
		        "M",
		        "A",
		        "M",
		        "J",
		        "J",
		        "A",
		        "S",
		        "O",
		        "N",
		        "D"
		    ],
		    "day_names": [
		        "domingo",
		        "lunes",
		        "martes",
		        "miércoles",
		        "jueves",
		        "viernes",
		        "sábado"
		    ],
		    "day_names_abbreviated": [
		        "dom.",
		        "lun.",
		        "mar.",
		        "mié.",
		        "jue.",
		        "vie.",
		        "sáb."
		    ],
		    "day_names_short": [
		        "DO",
		        "LU",
		        "MA",
		        "MI",
		        "JU",
		        "VI",
		        "SA"
		    ],
		    "day_names_narrow": [
		        "d",
		        "l",
		        "m",
		        "m",
		        "j",
		        "v",
		        "s"
		    ],
		    "day_periods": {
		        "am": "a. m.",
		        "noon": "mediodía",
		        "pm": "p. m."
		    },
		    "day_periods_abbreviated": {
		        "am": "a. m.",
		        "noon": "mediodía",
		        "pm": "p. m."
		    },
		    "day_periods_narrow": {
		        "am": "a.m.",
		        "noon": "m.",
		        "pm": "p.m."
		    },
		    "quarter_names": [
		        "1.er trimestre",
		        "2.º trimestre",
		        "3.er trimestre",
		        "4.º trimestre"
		    ],
		    "quarter_names_abbreviated": [
		        "T1",
		        "T2",
		        "T3",
		        "T4"
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "antes de Cristo",
		        "después de Cristo"
		    ],
		    "era_names_abbreviated": [
		        "a. C.",
		        "d. C."
		    ],
		    "era_names_narrow": [
		        "a. C.",
		        "d. C."
		    ],
		    "full_format": "EEEE, d 'de' MMMM 'de' y",
		    "long_format": "d 'de' MMMM 'de' y",
		    "medium_format": "d MMM y",
		    "short_format": "d/MM/yy",
		    "firstday_of_week": 0
		};
	}
})();