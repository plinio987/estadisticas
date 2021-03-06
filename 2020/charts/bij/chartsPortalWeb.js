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
                    { x: new Date(2020, 0), y: 5202 },
                    { x: new Date(2020, 1), y: 7571 },
                    { x: new Date(2020, 2), y: 5430 },
                    { x: new Date(2020, 3), y: 4617 },
                    { x: new Date(2020, 4), y: 3947 },
                    { x: new Date(2020, 5), y: 18530 },
                    { x: new Date(2020, 6), y: 3926 },
                    { x: new Date(2020, 7), y: 4743 },
                    { x: new Date(2020, 8), y: 4650 },
                    { x: new Date(2020, 9), y: 6544 },
                    { x: new Date(2020, 10), y: 4315 },
                    { x: new Date(2020, 11), y: 0 }
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
                    { x: new Date(2020, 0), y: 2174 },
                    { x: new Date(2020, 1), y: 3309 },
                    { x: new Date(2020, 2), y: 2298 },
                    { x: new Date(2020, 3), y: 2037 },
                    { x: new Date(2020, 4), y: 2064 },
                    { x: new Date(2020, 5), y: 8602 },
                    { x: new Date(2020, 6), y: 2260 },
                    { x: new Date(2020, 7), y: 2029 },
                    { x: new Date(2020, 8), y: 1965 },
                    { x: new Date(2020, 9), y: 2417 },
                    { x: new Date(2020, 10), y: 1867 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            },
            {
                type: "area",
                name: "Usuarios unicos",
                color: "#D3AEE8",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2020, 0), y: 1844 },
                    { x: new Date(2020, 1), y: 2744 },
                    { x: new Date(2020, 2), y: 1997 },
                    { x: new Date(2020, 3), y: 1830 },
                    { x: new Date(2020, 4), y: 1837 },
                    { x: new Date(2020, 5), y: 5858 },
                    { x: new Date(2020, 6), y: 1893 },
                    { x: new Date(2020, 7), y: 1762 },
                    { x: new Date(2020, 8), y: 1697 },
                    { x: new Date(2020, 9), y: 1902 },
                    { x: new Date(2020, 10), y: 1557 },
                    { x: new Date(2020, 11), y: 0 }
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
                { x: new Date(2020, 0), y: 3 },
                { x: new Date(2020, 1), y: 9 },
                { x: new Date(2020, 2), y: 2 },
                { x: new Date(2020, 3), y: 0 },
                { x: new Date(2020, 4), y: 2 },
                { x: new Date(2020, 5), y: 0 },
                { x: new Date(2020, 6), y: 0 },
                { x: new Date(2020, 7), y: 0 },
                { x: new Date(2020, 8), y: 1 },
                { x: new Date(2020, 9), y: 1 },
                { x: new Date(2020, 10), y: 0 },
                { x: new Date(2020, 11), y: 0 }

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
                { y: 19.92, label: "Windows" },
                { y: 59.00, label: "Android" },
                { y: 20.76, label: "iOS" },
                { y: 0.27, label: "Linux" },
                { y: 0.19, label: "Not Set" }
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
                { y: 58.54, label: "Chrome" },
                { y: 15.04, label: "Safari" },
                { y: 11.73, label: "Android" },
                { y: 1.32, label: "Edge/Explorer" },
                { y: 1.12, label: "Firefox" },
                { y: 0.22, label: "Opera" }

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
                { y: 19.43, label: "iPhone" },
                { y: 6.75, label: "Huawei" },
                { y: 2.66, label: "Samsung" },
                { y: 1.73, label: "Not Set" }
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
                { y: 83.00, label: "Busqueda organica" },
                { y: 11.60, label: "Directo" },
                { y: 1.20, label: "Referido" },
                { y: 4.20, label: "Social media" }
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
                { x: new Date(2020, 0), y: 66.47 },
                { x: new Date(2020, 1), y: 64.40 },
                { x: new Date(2020, 2), y: 64.88 },
                { x: new Date(2020, 3), y: 64.26 },
                { x: new Date(2020, 4), y: 71.12 },
                { x: new Date(2020, 5), y: 61.18 },
                { x: new Date(2020, 6), y: 75.75 },
                { x: new Date(2020, 7), y: 56.43 },
                { x: new Date(2020, 8), y: 65.90 },
                { x: new Date(2020, 9), y: 63.18 },
                { x: new Date(2020, 10), y: 67.54 },
                { x: new Date(2020, 11), y: 0 }

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
                { y: 47.27, label: "Desktop" },
                { y: 50.87, label: "Mobile" },
                { y: 1.86, label: "Tablet" }
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
                { x: new Date(2020, 0), y: 150 },
                { x: new Date(2020, 1), y: 215 },
                { x: new Date(2020, 2), y: 145 },
                { x: new Date(2020, 3), y: 137 },
                { x: new Date(2020, 4), y: 127 },
                { x: new Date(2020, 5), y: 156 },
                { x: new Date(2020, 6), y: 107 },
                { x: new Date(2020, 7), y: 139 },
                { x: new Date(2020, 8), y: 147 },
                { x: new Date(2020, 9), y: 236 },
                { x: new Date(2020, 10), y: 148 },
                { x: new Date(2020, 11), y: 0 }
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
                    { x: new Date(2020, 0), y: 88.90 },
                    { x: new Date(2020, 1), y: 87.90 },
                    { x: new Date(2020, 2), y: 88.20 },
                    { x: new Date(2020, 3), y: 90.90 },
                    { x: new Date(2020, 4), y: 91.00 },
                    { x: new Date(2020, 5), y: 80.70 },
                    { x: new Date(2020, 6), y: 86.80 },
                    { x: new Date(2020, 7), y: 90.40 },
                    { x: new Date(2020, 8), y: 88.40 },
                    { x: new Date(2020, 9), y: 86.20 },
                    { x: new Date(2020, 10), y: 88.90 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            },

            {
                type: "splineArea",
                showInLegend: true,
                color: "#bed905",
                yValueFormatString: "##0.00'%'",
                name: "Recurrentes",
                dataPoints: [
                    { x: new Date(2020, 0), y: 11.10 },
                    { x: new Date(2020, 1), y: 12.10 },
                    { x: new Date(2020, 2), y: 11.80 },
                    { x: new Date(2020, 3), y: 9.10 },
                    { x: new Date(2020, 4), y: 9.00 },
                    { x: new Date(2020, 5), y: 19.30 },
                    { x: new Date(2020, 6), y: 13.20 },
                    { x: new Date(2020, 7), y: 9.60 },
                    { x: new Date(2020, 8), y: 11.60 },
                    { x: new Date(2020, 9), y: 13.80 },
                    { x: new Date(2020, 10), y: 13.10 },
                    { x: new Date(2020, 11), y: 0 }
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
                { y: 62.80, label: "Femenino" },
                { y: 37.20, label: "Masculino" }
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
                { y: 8.96, label: "Facebook" },
                { y: 4.48, label: "Twitter" },
                { y: 80.60, label: "Instagram" },
                { y: 5.97, label: "YouTube" }
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
                { label: "18-24", y: 23.26 },
                { label: "25-34", y: 28.59 },
                { label: "35-44", y: 18.58 },
                { label: "45-54", y: 15.83 },
                { label: "55-64", y: 9.05 },
                { label: "65+", y: 4.68 }
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
                { label: "/Landin Page", y: 23.30 },
                { label: "/catalogo/lagrimas-de-cocodrilo/", y: 5.57 },
                { label: "/catalogo/cuentos-para-ninos-de-seis-anos/", y: 4.66 },
                { label: "/conocenos/sobre-la-bijrd/", y: 4.45 },
                { label: "/catalogo/la-bicicleta-verde-limon/", y: 4.02 }
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
                { label: "Landin Page", y: 18.17 },
                { label: "/catalogo/lagrimas-de-cocodrilo/", y: 6.54 },
                { label: "/conocenos/sobre-la-bijrd/", y: 4.51 },
                { label: "/catalogo/la-vaca-esta-historia/", y: 3.27 },
                { label: "/catalogo/la-bicicleta-verde-limon/", y: 3.23 }
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