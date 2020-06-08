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
                    { x: new Date(2019, 0), y: 39034 },
                    { x: new Date(2019, 1), y: 42203 },
                    { x: new Date(2019, 2), y: 43827 },
                    { x: new Date(2019, 3), y: 30632 },
                    { x: new Date(2019, 4), y: 35922 },
                    { x: new Date(2019, 5), y: 17658 },
                    { x: new Date(2019, 6), y: 14165 },
                    { x: new Date(2019, 7), y: 10337 },
                    { x: new Date(2019, 8), y: 10310 },
                    { x: new Date(2019, 9), y: 10921 },
                    { x: new Date(2019, 10), y: 9806 },
                    { x: new Date(2019, 11), y: 10624 }
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
                    { x: new Date(2019, 0), y: 14660 },
                    { x: new Date(2019, 1), y: 16236 },
                    { x: new Date(2019, 2), y: 16439 },
                    { x: new Date(2019, 3), y: 11986 },
                    { x: new Date(2019, 4), y: 15653 },
                    { x: new Date(2019, 5), y: 7960 },
                    { x: new Date(2019, 6), y: 6740 },
                    { x: new Date(2019, 7), y: 5134 },
                    { x: new Date(2019, 8), y: 4973 },
                    { x: new Date(2019, 9), y: 5067 },
                    { x: new Date(2019, 10), y: 4694 },
                    { x: new Date(2019, 11), y: 4374 }
                ]
            },
            {
                type: "line",
                name: "Usuarios unicos",
                color: "#000",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2019, 0), y: 7010 },
                    { x: new Date(2019, 1), y: 7415 },
                    { x: new Date(2019, 2), y: 7443 },
                    { x: new Date(2019, 3), y: 5367 },
                    { x: new Date(2019, 4), y: 7215 },
                    { x: new Date(2019, 5), y: 3978 },
                    { x: new Date(2019, 6), y: 3633 },
                    { x: new Date(2019, 7), y: 3030 },
                    { x: new Date(2019, 8), y: 2974 },
                    { x: new Date(2019, 9), y: 3133 },
                    { x: new Date(2019, 10), y: 2842 },
                    { x: new Date(2019, 11), y: 2014 }
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
                { y: 85.33, label: "Windows" },
                { y: 10.96, label: "Android" },
                { y: 2.66, label: "iOS" },
                { y: 0.28, label: "Linux" },
                { y: 0.01, label: "Not set" }
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
                { y: 90.38, label: "Chrome" },
                { y: 2.22, label: "Safari" },
                { y: 1.54, label: "Android" },
                { y: 4.72, label: "Edge/Explorer" },
                { y: 0.50, label: "Firefox" },
                { y: 0.33, label: "Opera" }

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
                { y: 16.78, label: "Apple iPhone" },
                { y: 8.65, label: "Samsung" },
                { y: 2.78, label: "LG" },
                { y: 1.44, label: "Not Set" }
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
                { y: 84.46, label: "Desktop" },
                { y: 15.20, label: "Mobile" },
                { y: 0.34, label: "Tablet" }

            ]
        }]
    });
    chart1.render();

    // ***PORCENTAJE DE REBOTE**** //

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
                { x: new Date(2019, 0), y: 65.80 },
                { x: new Date(2019, 1), y: 66.58 },
                { x: new Date(2019, 2), y: 67.63 },
                { x: new Date(2019, 3), y: 69.32 },
                { x: new Date(2019, 4), y: 69.17 },
                { x: new Date(2019, 5), y: 66.49 },
                { x: new Date(2019, 6), y: 65.36 },
                { x: new Date(2019, 7), y: 64.69 },
                { x: new Date(2019, 8), y: 63.76 },
                { x: new Date(2019, 9), y: 65.03 },
                { x: new Date(2019, 10), y: 65.25 },
                { x: new Date(2019, 11), y: 57.77 }

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
                { y: 48.90, label: "Busqueda organica" },
                { y: 48.70, label: "Directo" },
                { y: 1.90, label: "Referido" },
                { y: 0.60, label: "Social media" }
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
                { y: 63.50, label: "Femenino" },
                { y: 37.40, label: "Masculino" }


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
                { label: "0-10", y: 27.59 },
                { label: "11-30", y: 1.41 },
                { label: "31-60", y: 2.10 },
                { label: "61-180", y: 5.59 },
                { label: "181-600", y: 9.74 },
                { label: "601-1800", y: 13.96 },
                { label: "1800+", y: 39.60 }

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
                { x: new Date(2019, 0), y: 555 },
                { x: new Date(2019, 1), y: 601 },
                { x: new Date(2019, 2), y: 535 },
                { x: new Date(2019, 3), y: 513 },
                { x: new Date(2019, 4), y: 513 },
                { x: new Date(2019, 5), y: 515 },
                { x: new Date(2019, 6), y: 421 },
                { x: new Date(2019, 7), y: 320 },
                { x: new Date(2019, 8), y: 333 },
                { x: new Date(2019, 9), y: 336 },
                { x: new Date(2019, 10), y: 351 },
                { x: new Date(2019, 11), y: 549 }
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
                { x: new Date(2019, 0), y: 72.40 },
                { x: new Date(2019, 1), y: 71.00 },
                { x: new Date(2019, 2), y: 71.90 },
                { x: new Date(2019, 3), y: 70.90 },
                { x: new Date(2019, 4), y: 73.00 },
                { x: new Date(2019, 5), y: 74.40 },
                { x: new Date(2019, 6), y: 76.20 },
                { x: new Date(2019, 7), y: 75.70 },
                { x: new Date(2019, 8), y: 76.60 },
                { x: new Date(2019, 9), y: 76.90 },
                { x: new Date(2019, 10), y: 73.70 },
                { x: new Date(2019, 11), y: 69.70 }
            ]
        }, {
            type: "line",
            axisYType: "secondary",
            name: "Retornos",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2019, 0), y: 27.60 },
                { x: new Date(2019, 1), y: 29.00 },
                { x: new Date(2019, 2), y: 28.10 },
                { x: new Date(2019, 3), y: 29.10 },
                { x: new Date(2019, 4), y: 27.00 },
                { x: new Date(2019, 5), y: 25.60 },
                { x: new Date(2019, 6), y: 23.80 },
                { x: new Date(2019, 7), y: 24.30 },
                { x: new Date(2019, 8), y: 23.40 },
                { x: new Date(2019, 9), y: 23.10 },
                { x: new Date(2019, 10), y: 26.30 },
                { x: new Date(2019, 11), y: 30.30 }
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
                { y: 51.28, label: "Facebook" },
                { y: 12.82, label: "Twitter" },
                { y: 2.56, label: "LinkedIn" },
                { y: 33.33, label: "Instagram" }


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
                { label: "18-24", y: 24.59 },
                { label: "25-34", y: 39.39 },
                { label: "35-44", y: 16.81 },
                { label: "45-54", y: 10.37 },
                { label: "55-64", y: 5.86 },
                { label: "65+", y: 2.98 }
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
                { label: "Landin Page", y: 87.39 },
                { label: "/Oferta Formativa", y: 1.52 },
                { label: "/historias/", y: 1.11 },
                { label: "/Compumetros/", y: 1.06 },
                { label: "/sobre-nosotros/historia/", y: 0.98 }
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
                { label: "Landing page", y: 82.31 },
                { label: "/Oferta Formativa", y: 2.49 },
                { label: "/Sobre nosotros/quienes somos", y: 1.43 },
                { label: "Historia", y: 1.26 },
                { label: "Compumentros", y: 1.07 }


            ]
        }]
    });
    chart18.render();






};