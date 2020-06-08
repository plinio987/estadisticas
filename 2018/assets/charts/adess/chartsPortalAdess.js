window.onload = function() {


    // ****************VISITAS, USUARIOS Y SECCIONES************** //


    var chart1 = new CanvasJS.Chart("visitasPortalVice", {
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
                    { x: new Date(2019, 0), y: 46158 },
                    { x: new Date(2019, 1), y: 32121 },
                    { x: new Date(2019, 2), y: 74575 },
                    { x: new Date(2019, 3), y: 47459 },
                    { x: new Date(2019, 4), y: 58416 },
                    { x: new Date(2019, 5), y: 44427 },
                    { x: new Date(2019, 6), y: 94991 },
                    { x: new Date(2019, 7), y: 37071 },
                    { x: new Date(2019, 8), y: 28525 },
                    { x: new Date(2019, 9), y: 29125 },
                    { x: new Date(2019, 10), y: 20356 },
                    { x: new Date(2019, 11), y: 14896 }
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
                    { x: new Date(2019, 0), y: 16071 },
                    { x: new Date(2019, 1), y: 11067 },
                    { x: new Date(2019, 2), y: 21765 },
                    { x: new Date(2019, 3), y: 14603 },
                    { x: new Date(2019, 4), y: 16748 },
                    { x: new Date(2019, 5), y: 12899 },
                    { x: new Date(2019, 6), y: 26371 },
                    { x: new Date(2019, 7), y: 9054 },
                    { x: new Date(2019, 8), y: 8316 },
                    { x: new Date(2019, 9), y: 8974 },
                    { x: new Date(2019, 10), y: 6739 },
                    { x: new Date(2019, 11), y: 4666 }
                ]
            },
            {
                type: "line",
                name: "Usuarios unicos",
                color: "#000",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2019, 0), y: 12184 },
                    { x: new Date(2019, 1), y: 8442 },
                    { x: new Date(2019, 2), y: 15473 },
                    { x: new Date(2019, 3), y: 10847 },
                    { x: new Date(2019, 4), y: 11635 },
                    { x: new Date(2019, 5), y: 9094 },
                    { x: new Date(2019, 6), y: 19736 },
                    { x: new Date(2019, 7), y: 6483 },
                    { x: new Date(2019, 8), y: 6154 },
                    { x: new Date(2019, 9), y: 6456 },
                    { x: new Date(2019, 10), y: 4813 },
                    { x: new Date(2019, 11), y: 3360 }
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


    // ****************SISTEMAS OPERATIVOS UTILIZADOS************** //

    var chart2 = new CanvasJS.Chart("sistemasOperativosVice", {
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
                { y: 26.92, label: "Windows" },
                { y: 63.97, label: "Android" },
                { y: 8.53, label: "iOS" },
                { y: 0.38, label: "Linux" },
                { y: 0.03, label: "Not set" }
            ]
        }]
    });

    chart2.render();

    function explodePie(e) {
        for (var i = 0; i < e.dataSeries.dataPoints.length; i++) {
            if (i !== e.dataPointIndex)
                e.dataSeries.dataPoints[i].exploded = false;
        }
    }



    // ****************NAVEGADORES USUARIOS************** //

    var chart3 = new CanvasJS.Chart("navegadoresVice", {
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
                { y: 85.221, label: "Chrome" },
                { y: 6.59, label: "Safari" },
                { y: 4.57, label: "Android" },
                { y: 1.47, label: "Edge/Explores" },
                { y: 0.42, label: "Opera" },
                { y: 1.32, label: "Firefox" }

            ]
        }]
    });
    chart3.render();


    var chart4 = new CanvasJS.Chart("mobilesVice", {
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
                { y: 8.89, label: "iPhone" },
                { y: 7.73, label: "Samsung" },
                { y: 1.24, label: "Alcatel" },
                { y: 2.81, label: "LG" },
                { y: 1.52, label: "ZTE" },
                { y: 2.56, label: "Not Set" }
            ]
        }]
    });
    chart4.render();



    // ****************TIPOS DE DISPOSITIVOS************** //

    var chart5 = new CanvasJS.Chart("dispositivosVice", {
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
                { y: 28.99, label: "Desktop" },
                { y: 69.82, label: "Movile" },
                { y: 1.94, label: "Tablet" }

            ]
        }]
    });
    chart5.render();

    // ***PORCENTAJE DE REBOTE**** //
    // 
    var chart6 = new CanvasJS.Chart("porcentajeReboteVice", {
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
                { x: new Date(2019, 0), y: 47.47 },
                { x: new Date(2019, 1), y: 49.49 },
                { x: new Date(2019, 2), y: 42.38 },
                { x: new Date(2019, 3), y: 44.53 },
                { x: new Date(2019, 4), y: 42.76 },
                { x: new Date(2019, 5), y: 43.24 },
                { x: new Date(2019, 6), y: 42.36 },
                { x: new Date(2019, 7), y: 40.56 },
                { x: new Date(2019, 8), y: 45.92 },
                { x: new Date(2019, 9), y: 47.23 },
                { x: new Date(2019, 10), y: 49.64 },
                { x: new Date(2019, 11), y: 47.62 }

            ]
        }]
    });

    chart6.render();


    // ****************CANALES AL PORTAL************** //

    var chart7 = new CanvasJS.Chart("canalesInboundVice", {
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
                { y: 52.90, label: "Busqueda organica" },
                { y: 39.00, label: "Directo" },
                { y: 3.80, label: "Redes Sociales" },
                { y: 4.30, label: "Referido" }
            ]
        }]
    });
    chart7.render();

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
                { y: 68.48, label: "Femenino" },
                { y: 31.52, label: "Masculino" }


            ]
        }]
    });
    chart8.render();



    // ****************TIEMPO DE PERMANENCIA EN EL PORTAL************** //

    var chart9 = new CanvasJS.Chart("tiempoPermanenciaVice", {
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
                { label: "0-10", y: 46.79 },
                { label: "11-30", y: 7.63 },
                { label: "31-60", y: 8.80 },
                { label: "61-180", y: 15.69 },
                { label: "181-600", y: 13.88 },
                { label: "601-1800", y: 6.36 },
                { label: "1800+", y: 0.85 }

            ]
        }]
    });
    chart9.render();

    // ****TIEMPO DE DURACION PORTAL****//      


    var chart10 = new CanvasJS.Chart("tiempoDuracionVice", {
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
                { x: new Date(2019, 0), y: 214 },
                { x: new Date(2019, 1), y: 216 },
                { x: new Date(2019, 2), y: 246 },
                { x: new Date(2019, 3), y: 244 },
                { x: new Date(2019, 4), y: 255 },
                { x: new Date(2019, 5), y: 254 },
                { x: new Date(2019, 6), y: 302 },
                { x: new Date(2019, 7), y: 335 },
                { x: new Date(2019, 8), y: 301 },
                { x: new Date(2019, 9), y: 259 },
                { x: new Date(2019, 10), y: 251 },
                { x: new Date(2019, 11), y: 257 }
            ]
        }]
    });
    chart10.render();

    // ****************USUARIOS NUEVOS Y RECURENTES************** //

    var chart11 = new CanvasJS.Chart("usersSplinePortalVice", {
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
                { x: new Date(2019, 0), y: 77.00 },
                { x: new Date(2019, 1), y: 76.90 },
                { x: new Date(2019, 2), y: 74.60 },
                { x: new Date(2019, 3), y: 74.50 },
                { x: new Date(2019, 4), y: 72.90 },
                { x: new Date(2019, 5), y: 73.40 },
                { x: new Date(2019, 6), y: 77.20 },
                { x: new Date(2019, 7), y: 71.50 },
                { x: new Date(2019, 8), y: 74.80 },
                { x: new Date(2019, 9), y: 73.60 },
                { x: new Date(2019, 10), y: 74.70 },
                { x: new Date(2019, 11), y: 71.70 }
            ]
        }, {
            type: "line",
            axisYType: "secondary",
            name: "Retornos",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2019, 0), y: 33.00 },
                { x: new Date(2019, 1), y: 23.10 },
                { x: new Date(2019, 2), y: 25.40 },
                { x: new Date(2019, 3), y: 25.50 },
                { x: new Date(2019, 4), y: 27.10 },
                { x: new Date(2019, 5), y: 26.60 },
                { x: new Date(2019, 6), y: 22.80 },
                { x: new Date(2019, 7), y: 28.50 },
                { x: new Date(2019, 8), y: 25.20 },
                { x: new Date(2019, 9), y: 26.40 },
                { x: new Date(2019, 10), y: 25.30 },
                { x: new Date(2019, 11), y: 28.30 }
            ]
        }]
    });
    chart11.render();
    // ****************CANALES REFERIDOS RRSS************** //

    var chart12 = new CanvasJS.Chart("referidosRRSSVice", {
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
                { y: 54.01, label: "YouTube" },
                { y: 35.77, label: "Facebook" },
                { y: 5.84, label: "Twitter" },
                { y: 1.46, label: "Instagram" },
                { y: 2.92, label: "Blogger" }

            ]
        }]
    });
    chart12.render();


    // ****************CANALES AL RANGO DE EDAD************** //

    var chart13 = new CanvasJS.Chart("rangoEdadPortalVice", {
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
                { label: "18-24", y: 13.55 },
                { label: "25-34", y: 40.10 },
                { label: "35-44", y: 22.98 },
                { label: "45-54", y: 13.95 },
                { label: "55-64", y: 6.12 },
                { label: "65+", y: 3.30 },
            ]
        }]
    });
    chart13.render();


    // ****************PAGINAS DE DESTINO************** //


    var chart14 = new CanvasJS.Chart("paginasDestinoPortalVice", {
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
                { label: "servicios/consultar-beneficiario", y: 34.44 },
                { label: "Landing page", y: 17.23 },
                { label: "Consulta Beneficiarios", y: 7.12 },
                { label: "Subsidios ministrados", y: 6.57 },
                { label: "Busqueda de tarjetas", y: 6.19 }
            ]
        }]
    });
    chart14.render();

    // ****************PAGINAS DE SALIDA************** //


    var chart15 = new CanvasJS.Chart("paginasSalidaPortalVice", {
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
                { label: "servicios/consultar-beneficiario", y: 23.32 },
                { label: "Landing page", y: 12.50 },
                { label: "Consulta participantes", y: 7.89 },
                { label: "Consultar beneficiario", y: 6.35 },
                { label: "Subsidios ministrados", y: 5.90 }


            ]
        }]
    });
    chart15.render();





};