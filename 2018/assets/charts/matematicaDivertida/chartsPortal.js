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
                    { x: new Date(2019, 0), y: 1104 },
                    { x: new Date(2019, 1), y: 1267 },
                    { x: new Date(2019, 2), y: 824 },
                    { x: new Date(2019, 3), y: 1872 },
                    { x: new Date(2019, 4), y: 854 },
                    { x: new Date(2019, 5), y: 740 },
                    { x: new Date(2019, 6), y: 1355 },
                    { x: new Date(2019, 7), y: 1621 },
                    { x: new Date(2019, 8), y: 1611 },
                    { x: new Date(2019, 9), y: 1027 },
                    { x: new Date(2019, 10), y: 1286 },
                    { x: new Date(2019, 11), y: 233 }
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
                    { x: new Date(2019, 0), y: 324 },
                    { x: new Date(2019, 1), y: 382 },
                    { x: new Date(2019, 2), y: 317 },
                    { x: new Date(2019, 3), y: 407 },
                    { x: new Date(2019, 4), y: 262 },
                    { x: new Date(2019, 5), y: 221 },
                    { x: new Date(2019, 6), y: 890 },
                    { x: new Date(2019, 7), y: 961 },
                    { x: new Date(2019, 8), y: 851 },
                    { x: new Date(2019, 9), y: 605 },
                    { x: new Date(2019, 10), y: 405 },
                    { x: new Date(2019, 11), y: 108 }
                ]
            },
            {
                type: "line",
                name: "Usuarios unicos",
                color: "#000",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2019, 0), y: 237 },
                    { x: new Date(2019, 1), y: 306 },
                    { x: new Date(2019, 2), y: 250 },
                    { x: new Date(2019, 3), y: 267 },
                    { x: new Date(2019, 4), y: 198 },
                    { x: new Date(2019, 5), y: 154 },
                    { x: new Date(2019, 6), y: 788 },
                    { x: new Date(2019, 7), y: 791 },
                    { x: new Date(2019, 8), y: 710 },
                    { x: new Date(2019, 9), y: 566 },
                    { x: new Date(2019, 10), y: 409 },
                    { x: new Date(2019, 11), y: 99 }
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
                { y: 85.17, label: "Android" },
                { y: 14.83, label: "iOS/Machintosh" }


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
                { y: 76.28, label: "Chrome" },
                { y: 8.31, label: "Safari" },
                { y: 4.40, label: "Edge/Explorer" },
                { y: 4.65, label: "Firefox" },
                { y: 5.62, label: "Android web" },
                { y: 0.24, label: "Amazon silk" }

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
                { y: 51.28, label: "Apple varios modelos" },
                { y: 4.30, label: "Samsung varios modelos" },
                { y: 6.36, label: "Alcatel modelos" },
                { y: 2.56, label: "Fujitsu F-02L" },
                { y: 2.56, label: "LG" },
                { y: 6.40, label: "Huawei varios modelos" }
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
                { y: 60.61, label: "Desktop" },
                { y: 36.36, label: "Mobile" },
                { y: 3.03, label: "Tablet" }

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
                { x: new Date(2019, 0), y: 47.22 },
                { x: new Date(2019, 1), y: 54.97 },
                { x: new Date(2019, 2), y: 55.84 },
                { x: new Date(2019, 3), y: 42.51 },
                { x: new Date(2019, 4), y: 51.91 },
                { x: new Date(2019, 5), y: 53.39 },
                { x: new Date(2019, 6), y: 83.60 },
                { x: new Date(2019, 7), y: 79.08 },
                { x: new Date(2019, 8), y: 75.68 },
                { x: new Date(2019, 9), y: 80.83 },
                { x: new Date(2019, 10), y: 36.46 },
                { x: new Date(2019, 11), y: 75.00 }

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
                { y: 23.20, label: "Busqueda organica" },
                { y: 56.56, label: "Directo" },
                { y: 2.00, label: "Referido" },
                { y: 18.20, label: "Social media" }
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
                { y: 63.29, label: "Femenino" },
                { y: 36.71, label: "Masculino" }


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
                { label: "0-10", y: 14.26 },
                { label: "11-30", y: 3.96 },
                { label: "31-60", y: 4.27 },
                { label: "61-180", y: 10.09 },
                { label: "181-600", y: 16.22 },
                { label: "601-1800", y: 27.86 },
                { label: "1800+", y: 23.33 }

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
                { x: new Date(2019, 0), y: 328 },
                { x: new Date(2019, 1), y: 400 },
                { x: new Date(2019, 2), y: 232 },
                { x: new Date(2019, 3), y: 444 },
                { x: new Date(2019, 4), y: 327 },
                { x: new Date(2019, 5), y: 320 },
                { x: new Date(2019, 6), y: 109 },
                { x: new Date(2019, 7), y: 234 },
                { x: new Date(2019, 8), y: 219 },
                { x: new Date(2019, 9), y: 107 },
                { x: new Date(2019, 10), y: 804 },
                { x: new Date(2019, 11), y: 146 }
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
                { x: new Date(2019, 0), y: 75.40 },
                { x: new Date(2019, 1), y: 82.80 },
                { x: new Date(2019, 2), y: 84.40 },
                { x: new Date(2019, 3), y: 76.20 },
                { x: new Date(2019, 4), y: 79.40 },
                { x: new Date(2019, 5), y: 95.20 },
                { x: new Date(2019, 6), y: 95.20 },
                { x: new Date(2019, 7), y: 95.70 },
                { x: new Date(2019, 8), y: 95.00 },
                { x: new Date(2019, 9), y: 94.90 },
                { x: new Date(2019, 10), y: 92.90 },
                { x: new Date(2019, 11), y: 91.30 }
            ]
        }, {
            type: "line",
            axisYType: "secondary",
            name: "Retornos",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2019, 0), y: 24.60 },
                { x: new Date(2019, 1), y: 17.20 },
                { x: new Date(2019, 2), y: 15.60 },
                { x: new Date(2019, 3), y: 23.80 },
                { x: new Date(2019, 4), y: 20.60 },
                { x: new Date(2019, 5), y: 4.80 },
                { x: new Date(2019, 6), y: 4.80 },
                { x: new Date(2019, 7), y: 4.30 },
                { x: new Date(2019, 8), y: 5.00 },
                { x: new Date(2019, 9), y: 5.10 },
                { x: new Date(2019, 10), y: 7.10 },
                { x: new Date(2019, 11), y: 8.70 }
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
                { y: 100, label: "Facebook" }



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
                { label: "18-24", y: 16.00 },
                { label: "25-34", y: 29.71 },
                { label: "35-44", y: 26.29 },
                { label: "45-54", y: 19.43 },
                { label: "55-64", y: 8.57 }

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
                { label: "Landing page", y: 51.85 },
                { label: "Registro", y: 7.41 },
                { label: "Estudiantes/somos", y: 1.85 },
                { label: "Estudiantes/grado/3", y: 1.67 },
                { label: "Estudiantes/grado/1", y: 1.25 }
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
                { label: "Landing page", y: 38.89 },
                { label: "/Registro", y: 11.11 },
                { label: "/Estudiantes/grado/6", y: 1.85 },
                { label: "/Estudiantes/grado/5", y: 1.85 },
                { label: "/Estudiantes/grado/3", y: 2.78 }




            ]
        }]
    });
    chart18.render();






};