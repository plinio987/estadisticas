window.onload = function() {

    // ****************TIPOS DE DISPOSITIVOS************** //

    var chart1 = new CanvasJS.Chart("dispositivosVice", {
        theme: "light2",
        animationEnabled: true,
        title: {
            text: ""
        },
        subtitles: [{
            text: "",
            fontSize: 16
        }],
        data: [{
            type: "pie",
            indexLabelFontSize: 11,
            radius: 80,
            indexLabel: "{label} - {y}",
            yValueFormatString: "###0.0'%'",
            click: explodePie,
            dataPoints: [
                { y: 52.50, label: "Desktop" },
                { y: 45.40, label: "Movile" },
                { y: 2.10, label: "Tablet" }

            ]
        }]
    });
    chart1.render();

    // ****************CANALES AL PORTAL************** //

    var chart2 = new CanvasJS.Chart("canalesInboundVice", {
        animationEnabled: true,
        title: {
            text: "",

        },
        data: [{
            type: "doughnut",
            startAngle: 60,
            //innerRadius: 60,
            indexLabelFontSize: 11,
            indexLabel: "{label} - #percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: [
                { y: 65.60, label: "Busqueda organica" },
                { y: 15.30, label: "Directo" },
                { y: 6.90, label: "Referido" },
                { y: 12.20, label: "Social media" }

            ]
        }]
    });
    chart2.render();

    // ****************SISTEMAS OPERATIVOS UTILIZADOS************** //

    var chart3 = new CanvasJS.Chart("sistemasOperativosVice", {
        theme: "light2",
        animationEnabled: true,
        title: {
            text: ""
        },
        subtitles: [{
            text: "",
            fontSize: 16
        }],
        data: [{
            type: "pie",
            indexLabelFontSize: 11,
            radius: 80,
            indexLabel: "{label} - {y}",
            yValueFormatString: "###0.0'%'",
            click: explodePie,
            dataPoints: [
                { y: 47.47, label: "Windows" },
                { y: 34.43, label: "Android" },
                { y: 17.27, label: "iOS" },
                { y: 0.50, label: "Linux" },
                { y: 0.17, label: "Not Set" }
            ]
        }]
    });
    chart3.render();

    function explodePie(e) {
        for (var i = 0; i < e.dataSeries.dataPoints.length; i++) {
            if (i !== e.dataPointIndex)
                e.dataSeries.dataPoints[i].exploded = false;
        }
    }

    // ****************VISITAS, USUARIOS Y SECCIONES************** //


    var chart4 = new CanvasJS.Chart("visitasPortalVice", {
        animationEnabled: true,
        backgroundColor: "#E6EFF3",
        //theme: "light2",
        title: {
            text: ""
        },
        axisX: {
            valueFormatString: "MMM",
            labelFontColor: "#222",
        },
        axisY: {

            labelFormatter: addSymbols,
            labelFontColor: "#222",

        },
        toolTip: {
            shared: true,
            labelFontColor: "#fff",
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries,
            fontColor: "#222",
            fontSize: 14,

        },
        data: [{
                type: "column",
                name: "Visitas al portal",
                color: "#73C0F4",
                showInLegend: true,
                xValueFormatString: "MMMM YYYY",
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2018, 0), y: 7769 },
                    { x: new Date(2018, 1), y: 8580 },
                    { x: new Date(2018, 2), y: 11361 },
                    { x: new Date(2018, 3), y: 11807 },
                    { x: new Date(2018, 4), y: 9429 },
                    { x: new Date(2018, 5), y: 9395 },
                    { x: new Date(2018, 6), y: 10596 },
                    { x: new Date(2018, 7), y: 8572 },
                    { x: new Date(2018, 8), y: 10040 },
                    { x: new Date(2018, 9), y: 14363 },
                    { x: new Date(2018, 10), y: 12654 },
                    { x: new Date(2018, 11), y: 6981 }
                ]
            },
            {
                type: "area",
                name: "Secciones abiertas",
                markerBorderColor: "white",
                color: "#F49F05",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2018, 0), y: 3273 },
                    { x: new Date(2018, 1), y: 4348 },
                    { x: new Date(2018, 2), y: 5850 },
                    { x: new Date(2018, 3), y: 6468 },
                    { x: new Date(2018, 4), y: 5560 },
                    { x: new Date(2018, 5), y: 5345 },
                    { x: new Date(2018, 6), y: 6444 },
                    { x: new Date(2018, 7), y: 4802 },
                    { x: new Date(2018, 8), y: 5681 },
                    { x: new Date(2018, 9), y: 8250 },
                    { x: new Date(2018, 10), y: 7253 },
                    { x: new Date(2018, 11), y: 3893 }
                ]
            },
            {
                type: "line",
                name: "Usuarios unicos",
                color: "#000",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2018, 0), y: 2365 },
                    { x: new Date(2018, 1), y: 3262 },
                    { x: new Date(2018, 2), y: 4438 },
                    { x: new Date(2018, 3), y: 5468 },
                    { x: new Date(2018, 4), y: 4374 },
                    { x: new Date(2018, 5), y: 4148 },
                    { x: new Date(2018, 6), y: 5277 },
                    { x: new Date(2018, 7), y: 3720 },
                    { x: new Date(2018, 8), y: 4330 },
                    { x: new Date(2018, 9), y: 5846 },
                    { x: new Date(2018, 10), y: 5403 },
                    { x: new Date(2018, 11), y: 3000 }
                ]
            }
        ]
    });
    chart4.render();

    function addSymbols(e) {
        var suffixes = ["", "K", "M", "B"];
        var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);

        if (order > suffixes.length - 1)
            order = suffixes.length - 1;

        var suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }

    function toggleDataSeries(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }


    // ****************NAVEGADORES USUARIOS************** //

    var chart5 = new CanvasJS.Chart("navegadoresVice", {
        theme: "light2",
        animationEnabled: true,
        title: {
            text: ""
        },
        subtitles: [{
            text: "",
            fontSize: 16
        }],
        data: [{
            type: "pie",
            indexLabelFontSize: 11,
            radius: 80,
            indexLabel: "{label} - {y}",
            yValueFormatString: "###0.0'%'",
            click: explodePie,
            dataPoints: [
                { y: 72.07, label: "Chrome" },
                { y: 13.33, label: "Safari" },
                { y: 6.97, label: "Android" },
                { y: 4.13, label: "Edge/Explorer" },
                { y: 2.70, label: "Firefox" },
                { y: 0.50, label: "Opera" }

            ]
        }]
    });
    chart5.render();


    var chart6 = new CanvasJS.Chart("mobilesVice", {
        theme: "light2",
        animationEnabled: true,
        title: {
            text: ""
        },
        subtitles: [{
            text: "",
            fontSize: 16
        }],
        data: [{
            type: "pie",
            indexLabelFontSize: 11,
            radius: 80,
            indexLabel: "{label} - {y}",
            yValueFormatString: "###0.0'%'",
            click: explodePie,
            dataPoints: [
                { y: 17.40, label: "iPhone" },
                { y: 21.31, label: "Samsung" },
                { y: 1.27, label: "Not Set" }
            ]
        }]
    });
    chart6.render();



    // ****************GENERO USUARIOS************** //

    var chart8 = new CanvasJS.Chart("generoPortalVice", {
        animationEnabled: true,
        title: {
            text: "",

        },
        data: [{
            type: "doughnut",
            startAngle: 60,
            //innerRadius: 60,
            indexLabelFontSize: 11,
            indexLabel: "{label} - #percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: [
                { y: 66.30, label: "Femenino" },
                { y: 33.70, label: "Masculino" }


            ]
        }]
    });
    chart8.render();



    // ****************TIEMPO DE PERMANENCIA EN EL PORTAL************** //

    var chart10 = new CanvasJS.Chart("tiempoPermanenciaVice", {
        theme: "light1", // "light1", "ligh2", "dark1", "dark2"
        animationEnabled: true,
        title: {
            text: ""
        },
        axisY: {
            title: "Porcentaje",
            prefix: "%",
            lineThickness: 0,

        },
        axisX: {
            title: "Timeline",

        },
        data: [{
            type: "bar",
            indexLabel: "{y}",
            indexLabelFontColor: "#000",
            indexLabelFontSize: 14,
            indexLabelPlacement: "outside",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { label: "0-10", y: 76.53 },
                { label: "11-30", y: 2.36 },
                { label: "31-60", y: 2.55 },
                { label: "61-180", y: 5.11 },
                { label: "181-600", y: 5.65 },
                { label: "601-1800", y: 4.07 },
                { label: "1800+", y: 0.74 }

            ]
        }]
    });
    chart10.render();


    // ****TIEMPO DE DURACION PORTAL****//      


    var chart11 = new CanvasJS.Chart("tiempoDuracionVice", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: ""
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Timeline"
        },
        data: [{
            type: "column",
            indexLabel: "{y}",
            indexLabelFontColor: "#000",
            indexLabelFontSize: 14,
            indexLabelPlacement: "outside",
            yValueFormatString: "#m:##s",
            dataPoints: [
                { x: new Date(2018, 0), y: 300 },
                { x: new Date(2018, 1), y: 216 },
                { x: new Date(2018, 2), y: 206 },
                { x: new Date(2018, 3), y: 140 },
                { x: new Date(2018, 4), y: 135 },
                { x: new Date(2018, 5), y: 145 },
                { x: new Date(2018, 6), y: 134 },
                { x: new Date(2018, 7), y: 150 },
                { x: new Date(2018, 8), y: 156 },
                { x: new Date(2018, 9), y: 157 },
                { x: new Date(2018, 10), y: 208 },
                { x: new Date(2018, 11), y: 158 }
            ]
        }]
    });
    chart11.render();

    // ****************USUARIOS NUEVOS Y RECURENTES************** //

    var chart12 = new CanvasJS.Chart("usersSplinePortalVice", {
        animationEnabled: true,
        backgroundColor: "#F3EFCA",
        title: {
            text: ""
        },
        toolTip: {
            shared: true
        },
        axisX: {
            title: "Mes",
            suffix: ""
        },
        axisY: {
            title: "Totales",
            titleFontColor: "#222",
            lineColor: "#222",
            tickColor: "#222"
        },

        data: [{
            type: "line",
            name: "Nuevas visitas",
            color: "1C2C58",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2018, 0), y: 63.50 },
                { x: new Date(2018, 1), y: 67.20 },
                { x: new Date(2018, 2), y: 69.09 },
                { x: new Date(2018, 3), y: 73.60 },
                { x: new Date(2018, 4), y: 72.10 },
                { x: new Date(2018, 5), y: 70.70 },
                { x: new Date(2018, 6), y: 86.55 },
                { x: new Date(2018, 7), y: 82.30 },
                { x: new Date(2018, 8), y: 82.60 },
                { x: new Date(2018, 9), y: 84.90 },
                { x: new Date(2018, 10), y: 82.30 },
                { x: new Date(2018, 11), y: 81.80 }
            ]
        }, {
            type: "line",
            axisYType: "secondary",
            name: "Retornos",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2018, 0), y: 38.50 },
                { x: new Date(2018, 1), y: 32.80 },
                { x: new Date(2018, 2), y: 33.81 },
                { x: new Date(2018, 3), y: 26.40 },
                { x: new Date(2018, 4), y: 27.90 },
                { x: new Date(2018, 5), y: 29.30 },
                { x: new Date(2018, 6), y: 13.45 },
                { x: new Date(2018, 7), y: 17.70 },
                { x: new Date(2018, 8), y: 17.40 },
                { x: new Date(2018, 9), y: 15.10 },
                { x: new Date(2018, 10), y: 17.70 },
                { x: new Date(2018, 11), y: 18.20 }
            ]
        }]
    });
    chart12.render();


    var chart13 = new CanvasJS.Chart("nuevoRetornoVice", {
        animationEnabled: true,
        title: {
            text: "",

        },
        data: [{
            type: "doughnut",
            startAngle: 60,
            //innerRadius: 60,
            indexLabelFontSize: 11,
            indexLabel: "{label} - #percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: [
                { y: 82.80, label: "Nuevas visitas" },
                { y: 18.20, label: "Retornos" }


            ]
        }]
    });
    chart13.render();


    // ***PORCENTAJE DE REBOTE**** //
    // 
    var chart14 = new CanvasJS.Chart("porcentajeReboteVice", {
        animationEnabled: true,
        backgroundColor: "#A79C93",
        title: {
            text: "",
            fontSize: 25
        },
        axisX: {
            valueFormatString: "MMM",
            interval: 1,
            intervalType: "month"

        },
        axisY: {
            title: "Porcentaje"
        },

        data: [{
            indexLabelFontColor: "green",
            name: "views",
            type: "area",
            color: "#C1403D",
            yValueFormatString: "##0.00'%'",
            dataPoints: [

                { x: new Date(2012, 0, 1), y: 66.27 },
                { x: new Date(2012, 1, 1), y: 67.20 },
                { x: new Date(2012, 2, 1), y: 69.09 },
                { x: new Date(2012, 3, 1), y: 75.16 },
                { x: new Date(2012, 4, 1), y: 73.24 },
                { x: new Date(2012, 5, 1), y: 72.31 },
                { x: new Date(2012, 6, 1), y: 77.95, },
                { x: new Date(2012, 7, 1), y: 72.93 },
                { x: new Date(2012, 8, 1), y: 71.89 },
                { x: new Date(2012, 9, 1), y: 76.08 },
                { x: new Date(2012, 10, 1), y: 76.66 },
                { x: new Date(2012, 11, 1), y: 73.54 }

            ]
        }]
    });

    chart14.render();

    // ****************CANALES REFERIDOS RRSS************** //

    var chart15 = new CanvasJS.Chart("referidosRRSSVice", {
        animationEnabled: true,
        title: {
            text: "",

        },
        data: [{
            type: "doughnut",
            startAngle: 60,
            //innerRadius: 60,
            indexLabelFontSize: 11,
            indexLabel: "{label} - #percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: [
                { y: 47.04, label: "Facebook" },
                { y: 38.10, label: "Twitter" },
                { y: 6.69, label: "Instagram Stories" },
                { y: 6.88, label: "Instagram" },
                { y: 0.57, label: "Scribd" }

            ]
        }]
    });
    chart15.render();


    // ****************CANALES AL RANGO DE EDAD************** //

    var chart16 = new CanvasJS.Chart("rangoEdadPortalVice", {
        animationEnabled: true,
        title: {
            text: "",

        },
        data: [{
            type: "doughnut",
            startAngle: 60,
            //innerRadius: 60,
            indexLabelFontSize: 11,
            indexLabel: "{label} - #percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: [
                { label: "18-24", y: 15.07 },
                { label: "25-34", y: 34.93 },
                { label: "35-44", y: 19.92 },
                { label: "45-54", y: 16.02 },
                { label: "55-64", y: 9.22 },
                { label: "65+", y: 4.85 }

            ]
        }]
    });
    chart16.render();


    // ****************PAGINAS DE DESTINO************** //


    var chart17 = new CanvasJS.Chart("paginasDestinoPortalVice", {
        theme: "light1", // "light1", "ligh2", "dark1", "dark2"
        animationEnabled: true,
        title: {
            text: ""
        },
        axisY: {
            title: "Porcentaje",
            prefix: "%",
            lineThickness: 0,

        },
        data: [{
            type: "bar",
            indexLabel: "{y}",
            indexLabelFontColor: "#FFF",
            indexLabelPlacement: "inside",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { label: "/vicerdo/articulos_vp/el-riesgo-demografico/", y: 2.88 },
                { label: "Landin Page", y: 23.27 },
                { label: "/vicerdo/proteccion-social-rd/", y: 2.57 },
                { label: "/vicerdo/discursos/embarazo-adolescentes-una-maquina-reproduccion-la-pobreza/", y: 3.08 },
                { label: "/vicerdo/concurso-de-fotografia-bien-por-ti/", y: 2.49 }

            ]
        }]
    });
    chart17.render();

    // ****************PAGINAS DE SALIDA************** //


    var chart18 = new CanvasJS.Chart("paginasSalidaPortalVice", {
        theme: "light1", // "light1", "ligh2", "dark1", "dark2"
        animationEnabled: true,
        title: {
            text: ""
        },
        axisY: {
            title: "Porcentaje",
            prefix: "%",
            lineThickness: 0,

        },
        data: [{
            type: "bar",
            indexLabel: "{y}",
            indexLabelFontColor: "#FFF",
            indexLabelPlacement: "inside",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { label: "Landing page", y: 15.98 },
                { label: "/vicerdo/discursos/embarazo-adolescentes-una-maquina-reproduccion-la-pobreza/", y: 3.06 },
                { label: "/vicerdo/concurso-de-fotografia-bien-por-ti/", y: 3.01 },
                { label: "/vicerdo/articulos_vp/el-riesgo-demografico/", y: 2.88 },
                { label: "/vicerdo/2017/03/01/presentan-mapa-situacion-embarazo-adolescentes/", y: 2.62 }


            ]
        }]
    });
    chart18.render();






};