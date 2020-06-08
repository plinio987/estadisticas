window.onload = function() {


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
                    { x: new Date(2019, 0), y: 0 },
                    { x: new Date(2019, 1), y: 349 },
                    { x: new Date(2019, 2), y: 1264 },
                    { x: new Date(2019, 3), y: 1063 },
                    { x: new Date(2019, 4), y: 1061 },
                    { x: new Date(2019, 5), y: 947 },
                    { x: new Date(2019, 6), y: 590 },
                    { x: new Date(2019, 7), y: 0 },
                    { x: new Date(2019, 8), y: 0 },
                    { x: new Date(2019, 9), y: 990 },
                    { x: new Date(2019, 10), y: 1370 },
                    { x: new Date(2019, 11), y: 833 }
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
                    { x: new Date(2019, 0), y: 0 },
                    { x: new Date(2019, 1), y: 156 },
                    { x: new Date(2019, 2), y: 472 },
                    { x: new Date(2019, 3), y: 538 },
                    { x: new Date(2019, 4), y: 497 },
                    { x: new Date(2019, 5), y: 481 },
                    { x: new Date(2019, 6), y: 304 },
                    { x: new Date(2019, 7), y: 0 },
                    { x: new Date(2019, 8), y: 0 },
                    { x: new Date(2019, 9), y: 488 },
                    { x: new Date(2019, 10), y: 634 },
                    { x: new Date(2019, 11), y: 367 }
                ]
            },
            {
                type: "line",
                name: "Usuarios unicos",
                color: "#000",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2019, 0), y: 0 },
                    { x: new Date(2019, 1), y: 139 },
                    { x: new Date(2019, 2), y: 366 },
                    { x: new Date(2019, 3), y: 434 },
                    { x: new Date(2019, 4), y: 435 },
                    { x: new Date(2019, 5), y: 398 },
                    { x: new Date(2019, 6), y: 258 },
                    { x: new Date(2019, 7), y: 0 },
                    { x: new Date(2019, 8), y: 0 },
                    { x: new Date(2019, 9), y: 411 },
                    { x: new Date(2019, 10), y: 535 },
                    { x: new Date(2019, 11), y: 278 }
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
                { y: 40.46, label: "Windows" },
                { y: 42.07, label: "Android" },
                { y: 17.01, label: "iOS" },
                { y: 0.46, label: "Chrome OS" }
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
                { y: 75.86, label: "Chrome" },
                { y: 11.95, label: "Safari" },
                { y: 4.14, label: "Android" },
                { y: 1.61, label: "Edge/Explores" },
                { y: 2.30, label: "Firefox" }

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
                { y: 28.39, label: "Apple" },
                { y: 5.82, label: "Samsung" },
                { y: 2.58, label: "Huawei" },
                { y: 3.23, label: "Not set" }
            ]
        }]
    });
    chart6.render();

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
                { y: 45.29, label: "Desktop" },
                { y: 52.41, label: "Tablet" },
                { y: 2.30, label: "Movile" }

            ]
        }]
    });
    chart1.render();

    // ***PORCENTAJE DE REBOTE**** //
    // 
    var chart14 = new CanvasJS.Chart("porcentajeReboteVice", {
        animationEnabled: true,
        backgroundColor: "#E6EFF3",
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
            color: "#F49F05",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2019, 0), y: 0 },
                { x: new Date(2019, 1), y: 60.26 },
                { x: new Date(2019, 2), y: 63.77 },
                { x: new Date(2019, 3), y: 75.28 },
                { x: new Date(2019, 4), y: 75.25 },
                { x: new Date(2019, 5), y: 71.31 },
                { x: new Date(2019, 6), y: 74.34 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 75.41 },
                { x: new Date(2019, 10), y: 70.50 },
                { x: new Date(2019, 11), y: 65.94 }

            ]
        }]
    });

    chart14.render();


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
                { y: 78.90, label: "Busqueda organica" },
                { y: 11.60, label: "Directo" },
                { y: 6.10, label: "Referido" },
                { y: 2.40, label: "Redes sociales" }
            ]
        }]
    });
    chart2.render();







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
                { y: 79.20, label: "Femenino" },
                { y: 20.80, label: "Masculino" }


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
                { label: "0-10", y: 41.67 },
                { label: "61-180", y: 4.99 },
                { label: "181-600", y: 4.89 },
                { label: "601-1800", y: 10.07 },
                { label: "11-30", y: 13.64 },
                { label: "31.60", y: 18.53 }

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
                { x: new Date(2019, 0), y: 0 },
                { x: new Date(2019, 1), y: 137 },
                { x: new Date(2019, 2), y: 244 },
                { x: new Date(2019, 3), y: 122 },
                { x: new Date(2019, 4), y: 141 },
                { x: new Date(2019, 5), y: 144 },
                { x: new Date(2019, 6), y: 150 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 135 },
                { x: new Date(2019, 10), y: 134 },
                { x: new Date(2019, 11), y: 232 }
            ]
        }]
    });
    chart11.render();

    // ****************USUARIOS NUEVOS Y RECURENTES************** //

    var chart12 = new CanvasJS.Chart("usersSplinePortalVice", {
        animationEnabled: true,
        backgroundColor: "#E6EFF3",
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
            color: "#F49F05",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2019, 0), y: 0 },
                { x: new Date(2019, 1), y: 90.70 },
                { x: new Date(2019, 2), y: 86.20 },
                { x: new Date(2019, 3), y: 85.80 },
                { x: new Date(2019, 4), y: 90.10 },
                { x: new Date(2019, 5), y: 80.30 },
                { x: new Date(2019, 6), y: 80.30 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 87.60 },
                { x: new Date(2019, 10), y: 86.90 },
                { x: new Date(2019, 11), y: 84.40 }
            ]
        }, {
            type: "line",
            axisYType: "secondary",
            name: "Retornos",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2019, 0), y: 0 },
                { x: new Date(2019, 1), y: 9.30 },
                { x: new Date(2019, 2), y: 13.80 },
                { x: new Date(2019, 3), y: 14.20 },
                { x: new Date(2019, 4), y: 9.90 },
                { x: new Date(2019, 5), y: 13.70 },
                { x: new Date(2019, 6), y: 13.70 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 12.40 },
                { x: new Date(2019, 10), y: 13.10 },
                { x: new Date(2019, 11), y: 15.60 }
            ]
        }]
    });
    chart12.render();


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
                { y: 6.67, label: "Facebook" },
                { y: 13.33, label: "Blogger" },
                { y: 80.00, label: "Instagram" }
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
                { label: "18-24", y: 16.16 },
                { label: "25-34", y: 34.34 },
                { label: "35-44", y: 26.26 },
                { label: "45-54", y: 13.13 },
                { label: "55-64", y: 10.10 }

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
                { label: "/guias-y-articulos", y: 33.23 },
                { label: "Landing page", y: 20.20 },
                { label: "el-real-carino/termometro-de-la-violencia", y: 15.76 },
                { label: "/Unete", y: 11.52 },
                { label: "/Novedades", y: 4.75 }
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
                { label: "/guias-y-articulos/item/importancia-de-la-confianza-en-las-relaciones-de-pareja", y: 33.40 },
                { label: "/Landing page", y: 14.34 },
                { label: "/guias-y-articulos/item/son-los-celos-una-muestra-de-amor", y: 12.70 },
                { label: "/termometro-de-la-violencia", y: 5.33 },
                { label: "/el-real-carino/que-es-el-real-carino", y: 5.12 }
            ]
        }]
    });
    chart18.render();






};