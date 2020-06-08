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
                    { x: new Date(2019, 0), y: 1831 },
                    { x: new Date(2019, 1), y: 2081 },
                    { x: new Date(2019, 2), y: 2634 },
                    { x: new Date(2019, 3), y: 3994 },
                    { x: new Date(2019, 4), y: 2891 },
                    { x: new Date(2019, 5), y: 2408 },
                    { x: new Date(2019, 6), y: 2680 },
                    { x: new Date(2019, 7), y: 1554 },
                    { x: new Date(2019, 8), y: 2405 },
                    { x: new Date(2019, 9), y: 1806 },
                    { x: new Date(2019, 10), y: 1752 },
                    { x: new Date(2019, 11), y: 1396 }
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
                    { x: new Date(2019, 0), y: 655 },
                    { x: new Date(2019, 1), y: 975 },
                    { x: new Date(2019, 2), y: 1196 },
                    { x: new Date(2019, 3), y: 2218 },
                    { x: new Date(2019, 4), y: 1512 },
                    { x: new Date(2019, 5), y: 1097 },
                    { x: new Date(2019, 6), y: 1153 },
                    { x: new Date(2019, 7), y: 811 },
                    { x: new Date(2019, 8), y: 1074 },
                    { x: new Date(2019, 9), y: 922 },
                    { x: new Date(2019, 10), y: 965 },
                    { x: new Date(2019, 11), y: 769 }
                ]
            },
            {
                type: "line",
                name: "Usuarios unicos",
                color: "#000",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2019, 0), y: 410 },
                    { x: new Date(2019, 1), y: 743 },
                    { x: new Date(2019, 2), y: 805 },
                    { x: new Date(2019, 3), y: 1597 },
                    { x: new Date(2019, 4), y: 1046 },
                    { x: new Date(2019, 5), y: 769 },
                    { x: new Date(2019, 6), y: 733 },
                    { x: new Date(2019, 7), y: 567 },
                    { x: new Date(2019, 8), y: 775 },
                    { x: new Date(2019, 9), y: 657 },
                    { x: new Date(2019, 10), y: 721 },
                    { x: new Date(2019, 11), y: 519 }
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
                { y: 42.74, label: "Windows" },
                { y: 36.36, label: "Android" },
                { y: 20.34, label: "iOS" },
                { y: 0.44, label: "Linux" }
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
                { y: 67.52, label: "Chrome" },
                { y: 13.02, label: "Safari" },
                { y: 13.58, label: "Android" },
                { y: 2.88, label: "Edge/Explores" },
                { y: 0.63, label: "Opera" },
                { y: 2.07, label: "Firefox" }

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
                { y: 30.01, label: "Apple" },
                { y: 10.92, label: "Samsung" },
                { y: 3.64, label: "Not Set" },
                { y: 2.73, label: "LG" },
                { y: 1.82, label: "Motorola" }
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
                { y: 71.32, label: "Desktop" },
                { y: 26.46, label: "Mobile" },
                { y: 1.23, label: "Tablet" }

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
                { x: new Date(2019, 0), y: 54.20 },
                { x: new Date(2019, 1), y: 67.69 },
                { x: new Date(2019, 2), y: 62.88 },
                { x: new Date(2019, 3), y: 70.11 },
                { x: new Date(2019, 4), y: 66.40 },
                { x: new Date(2019, 5), y: 65.82 },
                { x: new Date(2019, 6), y: 66.09 },
                { x: new Date(2019, 7), y: 66.95 },
                { x: new Date(2019, 8), y: 67.13 },
                { x: new Date(2019, 9), y: 67.14 },
                { x: new Date(2019, 10), y: 66.01 },
                { x: new Date(2019, 11), y: 66.84 }

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
                { y: 50.50, label: "Busqueda organica" },
                { y: 45.30, label: "Directo" },
                { y: 3.30, label: "Referido" },
                { y: 1.00, label: "Redes Social" }
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
                { y: 69.97, label: "Femenino" },
                { y: 30.03, label: "Masculino" }


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
                { label: "0-10", y: 43.06 },
                { label: "11-30", y: 5.91 },
                { label: "31-60", y: 5.53 },
                { label: "61-180", y: 10.17 },
                { label: "181-600", y: 15.70 },
                { label: "601-1800", y: 13.29 },
                { label: "1800+", y: 6.33 }

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
                { x: new Date(2019, 0), y: 322 },
                { x: new Date(2019, 1), y: 228 },
                { x: new Date(2019, 2), y: 226 },
                { x: new Date(2019, 3), y: 153 },
                { x: new Date(2019, 4), y: 158 },
                { x: new Date(2019, 5), y: 163 },
                { x: new Date(2019, 6), y: 242 },
                { x: new Date(2019, 7), y: 156 },
                { x: new Date(2019, 8), y: 234 },
                { x: new Date(2019, 9), y: 216 },
                { x: new Date(2019, 10), y: 159 },
                { x: new Date(2019, 11), y: 206 }
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
                { x: new Date(2019, 0), y: 76.10 },
                { x: new Date(2019, 1), y: 86.70 },
                { x: new Date(2019, 2), y: 79.00 },
                { x: new Date(2019, 3), y: 80.20 },
                { x: new Date(2019, 4), y: 77.70 },
                { x: new Date(2019, 5), y: 78.00 },
                { x: new Date(2019, 6), y: 76.50 },
                { x: new Date(2019, 7), y: 81.10 },
                { x: new Date(2019, 8), y: 81.10 },
                { x: new Date(2019, 9), y: 82.90 },
                { x: new Date(2019, 10), y: 80.20 },
                { x: new Date(2019, 11), y: 78.80 }
            ]
        }, {
            type: "line",
            axisYType: "secondary",
            name: "Retornos",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2019, 0), y: 23.90 },
                { x: new Date(2019, 1), y: 13.30 },
                { x: new Date(2019, 2), y: 21.00 },
                { x: new Date(2019, 3), y: 19.80 },
                { x: new Date(2019, 4), y: 22.30 },
                { x: new Date(2019, 5), y: 22.00 },
                { x: new Date(2019, 6), y: 23.50 },
                { x: new Date(2019, 7), y: 18.90 },
                { x: new Date(2019, 8), y: 18.90 },
                { x: new Date(2019, 9), y: 17.10 },
                { x: new Date(2019, 10), y: 19.80 },
                { x: new Date(2019, 11), y: 21.20 }
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
                { y: 60.00, label: "Facebook" },

                { y: 40.00, label: "Twitter" }
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
                { label: "18-24", y: 14.18 },
                { label: "25-34", y: 34.28 },
                { label: "35-44", y: 19.24 },
                { label: "45-54", y: 16.52 },
                { label: "55-64", y: 11.71 },
                { label: "65+", y: 4.07 }
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
                { label: "Landing page", y: 43.71 },
                { label: "/noticias/la-seguridad-ciudadana-en-república-dominicana-la-otra-cara-de-la-moneda/", y: 4.45 },
                { label: "Boletines", y: 23.86 },
                { label: "Quienes somos", y: 3.90 },
                { label: "/infografías-ods/", y: 2.82 }
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
                { label: "Boletines", y: 30.59 },
                { label: "Landing page", y: 30.26 },
                { label: "/noticias/la-seguridad-ciudadana-en-república-dominicana-la-otra-cara-de-la-moneda/", y: 4.45 },
                { label: "Infografias", y: 17.32 },
                { label: "Quienes somos", y: 3.58 }
            ]
        }]
    });
    chart18.render();






};