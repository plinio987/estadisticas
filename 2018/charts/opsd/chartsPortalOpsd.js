window.onload = function() {

    // ****************TIPOS DE DISPOSITIVOS************** //

    var chart1 = new CanvasJS.Chart("dispositivosVice", {
        theme: "light2",
        exportEnabled: true,
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
            indexLabelFontSize: 13,
            radius: 80,
            indexLabel: "{label} - {y}",
            yValueFormatString: "###0.0'%'",
            click: explodePie,
            dataPoints: [
                { y: 73.543, label: "Desktop" },
                { y: 26.18, label: "Mobile" },
                { y: 0.29, label: "Tablet" }
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
            indexLabelFontSize: 13,
            indexLabel: "{label} - #percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: [
                { y: 44.20, label: "Busqueda organica" },
                { y: 32.50, label: "Directo" },
                { y: 12.00, label: "Referido" },
                { y: 11.30, label: "Redes Social" }

            ]
        }]
    });
    chart2.render();

    // ****************SISTEMAS OPERATIVOS UTILIZADOS************** //

    var chart3 = new CanvasJS.Chart("sistemasOperativosVice", {
        //theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        title: {
            text: ""
        },
        subtitles: [{
            text: "",
            fontSize: 16
        }],
        data: [{
            type: "pie",
            animationDuration: 800,
            animationEnabled: true,
            backgroundColor: "transparent",
            colorSet: "customColorSet",
            indexLabelFontSize: 13,
            radius: 80,
            indexLabel: "{label} - {y}",
            yValueFormatString: "###0.0'%'",
            click: explodePie,
            dataPoints: [
                { y: 62.35, label: "Windows" },
                { y: 15.88, label: "Android" },
                { y: 19.41, label: "iOS" },
                { y: 2.34, label: "Linux" }

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
        exportEnabled: true,
        //theme: "light2",
        title: {
            text: ""
        },
        axisX: {
            valueFormatString: "MMM",
            labelFontColor: "#222",
            labelFontSize: 14,
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

                    { x: new Date(2018, 5), y: 3177 },
                    { x: new Date(2018, 6), y: 2272 },
                    { x: new Date(2018, 7), y: 2026 },
                    { x: new Date(2018, 8), y: 1165 },
                    { x: new Date(2018, 9), y: 1397 },
                    { x: new Date(2018, 10), y: 999 },
                    { x: new Date(2018, 11), y: 1082 }
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

                    { x: new Date(2018, 5), y: 1245 },
                    { x: new Date(2018, 6), y: 1158 },
                    { x: new Date(2018, 7), y: 743 },
                    { x: new Date(2018, 8), y: 585 },
                    { x: new Date(2018, 9), y: 605 },
                    { x: new Date(2018, 11), y: 482 },
                    { x: new Date(2018, 11), y: 484 }
                ]
            },
            {
                type: "line",
                name: "Usuarios unicos",
                color: "#000",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [

                    { x: new Date(2018, 5), y: 704 },
                    { x: new Date(2018, 6), y: 688 },
                    { x: new Date(2018, 7), y: 426 },
                    { x: new Date(2018, 8), y: 414 },
                    { x: new Date(2018, 9), y: 300 },
                    { x: new Date(2018, 10), y: 281 },
                    { x: new Date(2018, 11), y: 340 }
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
        exportEnabled: true,
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
            indexLabelFontSize: 13,
            radius: 80,
            indexLabel: "{label} - {y}",
            yValueFormatString: "###0.0'%'",
            click: explodePie,
            dataPoints: [
                { y: 70.88, label: "Chrome" },
                { y: 7.06, label: "Safari" },
                { y: 5.88, label: "Android" },
                { y: 5.00, label: "Edge/Explores" },
                { y: 2.06, label: "Opera" },
                { y: 2.06, label: "Firefox" }
            ]
        }]
    });
    chart5.render();


    var chart6 = new CanvasJS.Chart("mobilesVice", {
        theme: "light2",
        exportEnabled: true,
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
            indexLabelFontSize: 13,
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



    // ****************GENERO USUARIOS************** //

    var chart8 = new CanvasJS.Chart("generoPortalVice", {
        animationEnabled: true,
        theme: "light2",
        exportEnabled: true,
        title: {
            text: "",

        },
        data: [{
            type: "doughnut",
            startAngle: 60,
            //innerRadius: 60,
            indexLabelFontSize: 13,
            innerRadius: "65%",
            indexLabel: "{label} - #percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: [
                { y: 69.80, label: "Femenino" },
                { y: 30.20, label: "Masculino" }


            ]
        }]
    });
    chart8.render();

    // ****************RANGO DE EDAD************** //

    var chart9 = new CanvasJS.Chart("rangoEdadPortalVice", {
        theme: "light1", // "light1", "ligh2", "dark1", "dark2"
        animationEnabled: true,
        exportEnabled: true,
        title: {
            text: ""
        },
        axisY: {
            title: "Porcentaje",
            prefix: "%",
            lineThickness: 1,

        },
        axisX: {
            title: "Rango",

        },
        data: [{
            type: "bar",
            indexLabel: "{y}",
            indexLabelFontColor: "#fff",
            indexLabelFontSize: 14,
            indexLabelPlacement: "inside",
            yValueFormatString: "#0.00'%'",
            dataPoints: [
                { label: "18-24", y: 20.67 },
                { label: "25-34", y: 36.06 },
                { label: "35-44", y: 19.23 },
                { label: "45-54", y: 13.94 },
                { label: "55-64", y: 10.10 }


            ]
        }]
    });
    chart9.render();

    // ****************TIEMPO DE PERMANENCIA EN EL PORTAL************** //

    var chart10 = new CanvasJS.Chart("tiempoPermanenciaVice", {
        theme: "light1", // "light1", "ligh2", "dark1", "dark2"
        animationEnabled: true,
        exportEnabled: true,
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
                { label: "0-10", y: 66.84 },
                { label: "11-30", y: 7.528 },
                { label: "31-60", y: 5.30 },
                { label: "61-180", y: 7.86 },
                { label: "181-600", y: 7.01 },
                { label: "601-1800", y: 4.62 },
                { label: "1800+", y: 0.85 }

            ]
        }]
    });
    chart10.render();


    // ****TIEMPO DE DURACION PORTAL****//      


    var chart11 = new CanvasJS.Chart("tiempoDuracionVice", {
        animationEnabled: true,
        exportEnabled: true,
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

                { x: new Date(2018, 5), y: 323 },
                { x: new Date(2018, 6), y: 219 },
                { x: new Date(2018, 7), y: 403 },
                { x: new Date(2018, 8), y: 149 },
                { x: new Date(2018, 9), y: 254 },
                { x: new Date(2018, 10), y: 150 },
                { x: new Date(2018, 11), y: 224 }
            ]
        }]
    });
    chart11.render();

    // ****************USUARIOS NUEVOS Y RECURENTES************** //

    var chart12 = new CanvasJS.Chart("usersSplinePortalVice", {
        animationEnabled: true,
        exportEnabled: true,
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

                { x: new Date(2018, 5), y: 78.70 },
                { x: new Date(2018, 6), y: 76.60 },
                { x: new Date(2018, 7), y: 72.30 },
                { x: new Date(2018, 8), y: 77.00 },
                { x: new Date(2018, 9), y: 76.30 },
                { x: new Date(2018, 10), y: 81.00 },
                { x: new Date(2018, 11), y: 82.40 }
            ]
        }, {
            type: "line",
            axisYType: "secondary",
            name: "Retornos",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2018, 5), y: 21.30 },
                { x: new Date(2018, 6), y: 23.40 },
                { x: new Date(2018, 7), y: 27.70 },
                { x: new Date(2018, 8), y: 33.00 },
                { x: new Date(2018, 9), y: 23.70 },
                { x: new Date(2018, 10), y: 19.00 },
                { x: new Date(2018, 11), y: 17.60 }
            ]
        }]
    });
    chart12.render();


    var chart13 = new CanvasJS.Chart("nuevoRetornoVice", {
        animationEnabled: true,
        theme: "light2",
        exportEnabled: true,
        title: {
            text: "",

        },
        data: [{
            type: "doughnut",
            startAngle: 60,
            //innerRadius: 60,
            indexLabelFontSize: 13,
            indexLabel: "{label} - #percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: [
                { y: 82.40, label: "Nuevas visitas" },
                { y: 17.60, label: "Retornos" }


            ]
        }]
    });
    chart13.render();


    // ***PORCENTAJE DE REBOTE**** //
    // 
    var chart14 = new CanvasJS.Chart("porcentajeReboteVice", {
        animationEnabled: true,
        exportEnabled: true,
        backgroundColor: "rgba(241, 149, 30, 0.28)",
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
            type: "spline",
            color: "#C1403D",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2018, 5, 1), y: 58.47 },
                { x: new Date(2018, 6, 1), y: 63.99, },
                { x: new Date(2018, 7, 1), y: 51.68 },
                { x: new Date(2018, 8, 1), y: 60.68 },
                { x: new Date(2018, 9, 1), y: 53.72 },
                { x: new Date(2018, 10, 1), y: 60.58 },
                { x: new Date(2018, 11, 1), y: 63.43 }

            ]
        }]
    });

    chart14.render();

    CanvasJS.addColorSet("customColorSet", [
        "#393f63",
        "#e5d8B0",
        "#ffb367",
        "#f98461",
        "#d9695f",
        "#e05850",
    ]);

    var chart15 = new CanvasJS.Chart("referidosRRSSVice", {
        animationEnabled: true,
        title: {
            text: "",

        },
        data: [{
            type: "doughnut",
            startAngle: 60,
            //innerRadius: 60,
            indexLabelFontSize: 13,
            indexLabel: "{label} - #percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: [
                { y: 82.05, label: "Facebook" },
                { y: 7.69, label: "Twitter" },
                { y: 10.26, label: "Instagram" }

            ]
        }]
    });
    chart15.render();


    // ****************PAGINAS DE DESTINO************** //


    var chart17 = new CanvasJS.Chart("paginasDestinoPortalOPSD", {
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
                { label: "Landing page", y: 51.51 },
                { label: "Únete al equipo", y: 6.61 },
                { label: "/investigaciones/ganadores-1er-concurso-de-investigación-social/", y: 5.99 },
                { label: "Q/boletines/", y: 5.58 },
                { label: "/seguimientos/infografías-ods", y: 3.72 }


            ]
        }]
    });
    chart17.render();

    // ****************PAGINAS DE SALIDA************** //


    var chart18 = new CanvasJS.Chart("paginasSalidaPortalOPSD", {
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
                { label: "Landing page", y: 38.02 },
                { label: "Únete al equipo", y: 7.64 },
                { label: "Boletines", y: 14.05 },
                { label: "Investigaciones/investigaciones/ganadores-1er-concurso-de-investigación-social/", y: 7.02 },
                { label: "/seguimientos/infografías-ods/", y: 3.51 }


            ]
        }]
    });
    chart18.render();





};