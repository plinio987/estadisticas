window.onload = function() {


    // ****************VISITAS, USUARIOS Y SECCIONES************** //


    var chart1 = new CanvasJS.Chart("visitasPortalVice", {
        animationEnabled: true,
        backgroundColor: "#fff",
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
            gridColor: "#fff"

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
                type: "splineArea",
                name: "Visitas al portal",
                color: "#73C0F4",
                showInLegend: true,
                xValueFormatString: "MMMM",
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2020, 0), y: 22995 },
                    { x: new Date(2020, 1), y: 14561 },
                    { x: new Date(2020, 2), y: 38049 },
                    { x: new Date(2020, 3), y: 283476 },
                    { x: new Date(2020, 4), y: 115145 },
                    { x: new Date(2020, 5), y: 57844 },
                    { x: new Date(2020, 6), y: 56379 },
                    { x: new Date(2020, 7), y: 59078 },
                    { x: new Date(2020, 8), y: 74117 },
                    { x: new Date(2020, 9), y: 57533 },
                    { x: new Date(2020, 10), y: 60143 },
                    { x: new Date(2020, 11), y: 1082100 }
                ]
            },
            {
                type: "column",
                name: "Secciones abiertas",
                markerBorderColor: "white",
                color: "#bed905",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2020, 0), y: 11128 },
                    { x: new Date(2020, 1), y: 8066 },
                    { x: new Date(2020, 2), y: 22490 },
                    { x: new Date(2020, 3), y: 171084 },
                    { x: new Date(2020, 4), y: 72265 },
                    { x: new Date(2020, 5), y: 38181 },
                    { x: new Date(2020, 6), y: 36338 },
                    { x: new Date(2020, 7), y: 35274 },
                    { x: new Date(2020, 8), y: 46156 },
                    { x: new Date(2020, 9), y: 33689 },
                    { x: new Date(2020, 10), y: 28815 },
                    { x: new Date(2020, 11), y: 337146 }
                ]
            },
            {
                type: "area",
                name: "Usuarios unicos",
                color: "#D3AEE8",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2020, 0), y: 9425 },
                    { x: new Date(2020, 1), y: 6837 },
                    { x: new Date(2020, 2), y: 18664 },
                    { x: new Date(2020, 3), y: 124827 },
                    { x: new Date(2020, 4), y: 52289 },
                    { x: new Date(2020, 5), y: 29260 },
                    { x: new Date(2020, 6), y: 28225 },
                    { x: new Date(2020, 7), y: 28485 },
                    { x: new Date(2020, 8), y: 37876 },
                    { x: new Date(2020, 9), y: 26991 },
                    { x: new Date(2020, 10), y: 28902 },
                    { x: new Date(2020, 11), y: 257596 }
                ]
            }
        ]
    });
    chart1.render();

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



    var chart30 = new CanvasJS.Chart("notasPrensa", {
        animationEnabled: true,
        backgroundColor: "#FFF",
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
            title: "Porcentaje",
            gridColor: "#fff"
        },

        data: [{
            indexLabelFontColor: "green",
            name: "views",
            type: "area",
            color: "#bed905",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2020, 0), y: 1 },
                { x: new Date(2020, 1), y: 12 },
                { x: new Date(2020, 2), y: 5 },
                { x: new Date(2020, 3), y: 11 },
                { x: new Date(2020, 4), y: 5 },
                { x: new Date(2020, 5), y: 4 },
                { x: new Date(2020, 6), y: 2 },
                { x: new Date(2020, 7), y: 1 },
                { x: new Date(2020, 8), y: 12 },
                { x: new Date(2020, 9), y: 24 },
                { x: new Date(2020, 10), y: 18 },
                { x: new Date(2020, 11), y: 16 }

            ]
        }]
    });
    chart30.render();




    // ****************SISTEMAS OPERATIVOS UTILIZADOS************** //

    var chart2 = new CanvasJS.Chart("sistemasOperativos", {
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
            radius: 120,
            indexLabel: "{label} - {y}",
            yValueFormatString: "###0.0'%'",
            click: explodePie,
            dataPoints: [
                { y: 11.39, label: "Windows" },
                { y: 76.90, label: "Android" },
                { y: 11.16, label: "iOS" },
                { y: 0.14, label: "Linux" },
                { y: 0.31, label: "Not Set" }
            ]
        }]
    });

    chart2.render();

    var chart3 = new CanvasJS.Chart("navegadores", {
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
            type: "doughnut",
            indexLabelFontSize: 11,
            radius: 120,
            indexLabel: "{label} - {y}",
            yValueFormatString: "###0.0'%'",
            click: explodePie,
            dataPoints: [
                { y: 78.59, label: "Chrome" },
                { y: 9.02, label: "Safari" },
                { y: 9.54, label: "Android" },
                { y: 0.60, label: "Edge/Explorer" },
                { y: 0.64, label: "Firefox" },
                { y: 0.34, label: "Amazon Silk" }

            ]
        }]
    });
    chart3.render();

    var chart4 = new CanvasJS.Chart("moviles", {
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
            radius: 120,
            indexLabel: "{label} - {y}",
            yValueFormatString: "###0.0'%'",
            click: explodePie,
            dataPoints: [
                { y: 11.45, label: "iPhone" },
                { y: 3.00, label: "ZTE" },
                { y: 2.43, label: "Samsung" },
                { y: 1.25, label: "Huawei JKM-LX3 Y9 2020" },
                { y: 1.87, label: "T-Movile" },
                { y: 1.05, label: "LG" }
            ]
        }]
    });
    chart4.render();


    // ****************CANALES AL PORTAL************** //

    var chart5 = new CanvasJS.Chart("canalesInbound", {
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
            radius: 120,
            indexLabel: "{label} - {y}",
            yValueFormatString: "###0.0'%'",
            click: explodePie,
            dataPoints: [
                { y: 177.50, label: "Busqueda organica" },
                { y: 15.30, label: "Directo" },
                { y: 5.60, label: "Referido" },
                { y: 1.60, label: "Social media" }
            ]
        }]
    });
    chart5.render();

    var chart16 = new CanvasJS.Chart("porcentajeRebote", {
        animationEnabled: true,
        backgroundColor: "#FFF",
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
            title: "Porcentaje",
            gridColor: "#fff"
        },

        data: [{
            indexLabelFontColor: "green",
            name: "views",
            type: "area",
            color: "#bed905",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2020, 0), y: 63.66 },
                { x: new Date(2020, 1), y: 70.90 },
                { x: new Date(2020, 2), y: 69.75 },
                { x: new Date(2020, 3), y: 68.85 },
                { x: new Date(2020, 4), y: 68.99 },
                { x: new Date(2020, 5), y: 75.48 },
                { x: new Date(2020, 6), y: 74.45 },
                { x: new Date(2020, 7), y: 71.34 },
                { x: new Date(2020, 8), y: 73.78 },
                { x: new Date(2020, 9), y: 71.08 },
                { x: new Date(2020, 10), y: 88.17 },
                { x: new Date(2020, 11), y: 47.80 }

            ]
        }]
    });

    chart16.render();

    var chart7 = new CanvasJS.Chart("dispositivos", {
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
            radius: 120,
            indexLabel: "{label} - {y}",
            yValueFormatString: "###0.0'%'",
            click: explodePie,
            dataPoints: [
                { y: 19.81, label: "Desktop" },
                { y: 78.90, label: "Mobile" },
                { y: 1.30, label: "Tablet" }
            ]
        }]
    });
    chart7.render();

    var chart8 = new CanvasJS.Chart("tiempoDuracion", {
        animationEnabled: true,
        backgroundColor: "#FFF",
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            text: ""
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Timeline",
            gridColor: "#fff"
        },
        data: [{
            type: "splineArea",
            indexLabel: "{y}",
            color: "#bed905",
            indexLabelFontColor: "#000",
            indexLabelFontSize: 14,
            indexLabelPlacement: "inside",
            yValueFormatString: "#m:##s",
            dataPoints: [
                { x: new Date(2020, 0), y: 310 },
                { x: new Date(2020, 1), y: 143 },
                { x: new Date(2020, 2), y: 153 },
                { x: new Date(2020, 3), y: 130 },
                { x: new Date(2020, 4), y: 166 },
                { x: new Date(2020, 5), y: 107 },
                { x: new Date(2020, 6), y: 107 },
                { x: new Date(2020, 7), y: 117 },
                { x: new Date(2020, 8), y: 109 },
                { x: new Date(2020, 9), y: 124 },
                { x: new Date(2020, 10), y: 0.54 },
                { x: new Date(2020, 11), y: 219 }
            ]
        }]
    });
    chart8.render();


    var chart29 = new CanvasJS.Chart("tiempoPermanencia", {
        theme: "light1", // "light1", "ligh2", "dark1", "dark2"
        animationEnabled: true,
        title: {
            text: ""
        },
        axisY: {
            title: "Porcentaje",
            prefix: "%",
            lineThickness: 0,
            gridColor: "#fff",

        },
        axisX: {
            title: "Timeline",
            gridColor: "#fff",

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
    chart29.render();

    var chart20 = new CanvasJS.Chart("usersSplinePortal", {
        animationEnabled: true,
        title: {
            text: ""
        },
        axisY: {
            includeZero: false,
            prefix: "%",
            gridColor: "#fff",
        },
        toolTip: {
            shared: true
        },
        legend: {
            fontSize: 14
        },
        data: [{
                type: "splineArea",
                showInLegend: true,
                name: "Nuevas visitas",
                color: "#de8cf0",
                yValueFormatString: "##0.00'%'",
                xValueFormatString: "MMM",
                dataPoints: [
                    { x: new Date(2020, 0), y: 84.60 },
                    { x: new Date(2020, 1), y: 84.60 },
                    { x: new Date(2020, 2), y: 85.40 },
                    { x: new Date(2020, 3), y: 81.70 },
                    { x: new Date(2020, 4), y: 75.00 },
                    { x: new Date(2020, 5), y: 76.00 },
                    { x: new Date(2020, 6), y: 77.70 },
                    { x: new Date(2020, 7), y: 78.50 },
                    { x: new Date(2020, 8), y: 80.40 },
                    { x: new Date(2020, 9), y: 79.00 },
                    { x: new Date(2020, 10), y: 77.00 },
                    { x: new Date(2020, 11), y: 81.50 }
                ]
            },

            {
                type: "splineArea",
                showInLegend: true,
                color: "#bed905",
                yValueFormatString: "##0.00'%'",
                name: "Recurrentes",
                dataPoints: [
                    { x: new Date(2020, 0), y: 15.40 },
                    { x: new Date(2020, 1), y: 15.40 },
                    { x: new Date(2020, 2), y: 14.60 },
                    { x: new Date(2020, 3), y: 18.30 },
                    { x: new Date(2020, 4), y: 25.00 },
                    { x: new Date(2020, 5), y: 24.00 },
                    { x: new Date(2020, 6), y: 23.30 },
                    { x: new Date(2020, 7), y: 21.50 },
                    { x: new Date(2020, 8), y: 19.60 },
                    { x: new Date(2020, 9), y: 21.00 },
                    { x: new Date(2020, 10), y: 23.00 },
                    { x: new Date(2020, 11), y: 18.50 }
                ]
            }
        ]
    });
    chart20.render();

    // ****************GENERO USUARIOS************** //

    var chart21 = new CanvasJS.Chart("generoPortal", {
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
            radius: 120,
            indexLabel: "{label} - {y}",
            yValueFormatString: "###0.0'%'",
            click: explodePie,
            dataPoints: [
                { y: 67.80, label: "Femenino" },
                { y: 32.20, label: "Masculino" }
            ]
        }]
    });
    chart21.render();

    // ****************CANALES REFERIDOS RRSS************** //

    var chart12 = new CanvasJS.Chart("redesSociales", {
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
                { y: 90.10, label: "Facebook" },
                { y: 3.54, label: "Twitter" },
                { y: 2.56, label: "Instagram" },
                { y: 1.03, label: "Instagram Stories" },
                { y: 0.02, label: "LinkedIn" }

            ]
        }]
    });
    chart12.render();


    // ****************CANALES AL RANGO DE EDAD************** //

    var chart14 = new CanvasJS.Chart("rangoEdadPortal", {
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
                { label: "18-24", y: 19.86 },
                { label: "25-34", y: 25.38 },
                { label: "35-44", y: 17.27 },
                { label: "45-54", y: 19.00 },
                { label: "55-64", y: 10.58 },
                { label: "65+", y: 7.91 }
            ]
        }]
    });
    chart14.render();

    // ****************PAGINAS DE DESTINO************** //


    var chart15 = new CanvasJS.Chart("paginasEntrada", {
        theme: "ligh2", // "light1", "ligh2", "dark1", "dark2"
        animationEnabled: true,
        title: {
            text: ""
        },
        axisY: {
            title: "Porcentaje",
            prefix: "%",
            lineThickness: 0,
            gridColor: "#fff",

        },
        data: [{
            type: "bar",
            indexLabel: "{y}",
            indexLabelFontColor: "#FFF",
            indexLabelPlacement: "inside",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { label: "/noticias/el-bono-navideno-que-cambio-la-navidad/", y: 55.39 },
                { label: "/noticias/prosoli-y-adess-inician-entrega-de-tarjeta-bono-navideno/", y: 16.20 },
                { label: "/Landing page", y: 9.31 },
                { label: "/tag/bono-navideno/", y: 8.88 },
                { label: "/contacto", y: 0.88 }
            ]
        }]
    });
    chart15.render();

    // ****************PAGINAS DE SALIDA************** //


    var chart16 = new CanvasJS.Chart("paginasSalida", {
        theme: "ligh2", // "light1", "ligh2", "dark1", "dark2"
        animationEnabled: true,
        title: {
            text: ""
        },
        axisY: {
            title: "Porcentaje",
            prefix: "%",
            lineThickness: 0,
            gridColor: "#fff",

        },
        data: [{
            type: "bar",
            indexLabel: "{y}",
            indexLabelFontColor: "#FFF",
            indexLabelPlacement: "inside",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { label: "/noticias/el-bono-navideno-que-cambio-la-navidad/", y: 43.94 },
                { label: "/noticias/prosoli-y-adess-inician-entrega-de-tarjeta-bono-navideno/", y: 13.53 },
                { label: "/Landing page", y: 10.60 },
                { label: "/tag/bono-navideno/", y: 7.67 },
                { label: "/Contacto", y: 1.49 }
            ]
        }]
    });
    chart16.render();






    function explodePie(e) {
        for (var i = 0; i < e.dataSeries.dataPoints.length; i++) {
            if (i !== e.dataPointIndex)
                e.dataSeries.dataPoints[i].exploded = false;
        }
    }

};