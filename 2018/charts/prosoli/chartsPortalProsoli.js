window.onload = function() {

    // ****************TIPOS DE DISPOSITIVOS************** //



    // ****************CANALES AL PORTAL************** //

    var chart2 = new CanvasJS.Chart("canalesInboundVice", {
        animationEnabled: true,
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
                { y: 65.60, label: "Busqueda organica" },
                { y: 17.80, label: "Directo" },
                { y: 3.90, label: "Redes Sociales" },
                { y: 4.30, label: "Pagado" },
                { y: 8.30, label: "Referido" }

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
                { y: 40.03, label: "Windows" },
                { y: 46.94, label: "Android" },
                { y: 11.73, label: "iOS" },
                { y: 0.84, label: "Linux" },
                { y: 0.22, label: "Not Set" }
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

                    { x: new Date(2018, 0), y: 11906 },
                    { x: new Date(2018, 1), y: 10971 },
                    { x: new Date(2018, 2), y: 23808 },
                    { x: new Date(2018, 3), y: 30704 },
                    { x: new Date(2018, 4), y: 30743 },
                    { x: new Date(2018, 5), y: 29723 },
                    { x: new Date(2018, 6), y: 32130 },
                    { x: new Date(2018, 7), y: 29222 },
                    { x: new Date(2018, 8), y: 30188 },
                    { x: new Date(2018, 9), y: 37937 },
                    { x: new Date(2018, 10), y: 26088 },
                    { x: new Date(2018, 11), y: 9564 }
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

                    { x: new Date(2018, 0), y: 6022 },
                    { x: new Date(2018, 1), y: 4479 },
                    { x: new Date(2018, 2), y: 9278 },
                    { x: new Date(2018, 3), y: 13017 },
                    { x: new Date(2018, 4), y: 14293 },
                    { x: new Date(2018, 5), y: 13707 },
                    { x: new Date(2018, 6), y: 14709 },
                    { x: new Date(2018, 7), y: 13707 },
                    { x: new Date(2018, 8), y: 14746 },
                    { x: new Date(2018, 9), y: 20119 },
                    { x: new Date(2018, 10), y: 15137 },
                    { x: new Date(2018, 11), y: 4617 }
                ]
            },
            {
                type: "line",
                name: "Usuarios unicos",
                color: "#000",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [

                    { x: new Date(2018, 0), y: 5348 },
                    { x: new Date(2018, 1), y: 3361 },
                    { x: new Date(2018, 2), y: 6941 },
                    { x: new Date(2018, 3), y: 10562 },
                    { x: new Date(2018, 4), y: 11481 },
                    { x: new Date(2018, 5), y: 11093 },
                    { x: new Date(2018, 6), y: 11740 },
                    { x: new Date(2018, 7), y: 11114 },
                    { x: new Date(2018, 8), y: 11971 },
                    { x: new Date(2018, 9), y: 15185 },
                    { x: new Date(2018, 10), y: 11467 },
                    { x: new Date(2018, 11), y: 3691 }
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
                { y: 78.92, label: "Chrome" },
                { y: 9.07, label: "Safari" },
                { y: 6.31, label: "Android" },
                { y: 2.44, label: "Edge/Explores" },
                { y: 2.00, label: "Firefox" },
                { y: 0.79, label: "Opera" }
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
                { y: 10.42, label: "iPhone" },
                { y: 9.81, label: "Samsung" },
                { y: 1.10, label: "Alcatel" },
                { y: 1.84, label: "LG" },
                { y: 3.11, label: "Not Set" }
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
                { y: 74.60, label: "Femenino" },
                { y: 25.40, label: "Masculino" }


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
            indexLabelFontColor: "#000",
            indexLabelFontSize: 14,
            indexLabelPlacement: "outside",
            yValueFormatString: "#0.00'%'",
            dataPoints: [
                { label: "18-24", y: 18.21 },
                { label: "25-34", y: 35.79 },
                { label: "35-44", y: 22.52 },
                { label: "45-54", y: 14.45 },
                { label: "55-64", y: 6.65 },
                { label: "65+", y: 2.38 }

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
                { label: "0-10", y: 63.62 },
                { label: "11-30", y: 4.28 },
                { label: "31-60", y: 5.10 },
                { label: "61-180", y: 10.43 },
                { label: "181-600", y: 10.16 },
                { label: "601-1800", y: 5.73 },
                { label: "1800+", y: 0.66 }

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
                { x: new Date(2018, 0), y: 143 },
                { x: new Date(2018, 1), y: 231 },
                { x: new Date(2018, 2), y: 237 },
                { x: new Date(2018, 3), y: 219 },
                { x: new Date(2018, 4), y: 204 },
                { x: new Date(2018, 5), y: 205 },
                { x: new Date(2018, 6), y: 212 },
                { x: new Date(2018, 7), y: 211 },
                { x: new Date(2018, 8), y: 201 },
                { x: new Date(2018, 9), y: 132 },
                { x: new Date(2018, 10), y: 110 },
                { x: new Date(2018, 11), y: 147 }
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
                { x: new Date(2018, 0), y: 85.30 },
                { x: new Date(2018, 1), y: 83.60 },
                { x: new Date(2018, 2), y: 82.70 },
                { x: new Date(2018, 3), y: 82.00 },
                { x: new Date(2018, 4), y: 82.40 },
                { x: new Date(2018, 5), y: 80.10 },
                { x: new Date(2018, 6), y: 78.90 },
                { x: new Date(2018, 7), y: 80.10 },
                { x: new Date(2018, 8), y: 80.90 },
                { x: new Date(2018, 9), y: 77.60 },
                { x: new Date(2018, 10), y: 76.80 },
                { x: new Date(2018, 11), y: 77.40 }
            ]
        }, {
            type: "line",
            axisYType: "secondary",
            name: "Retornos",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2018, 0), y: 14.7 },
                { x: new Date(2018, 1), y: 16.40 },
                { x: new Date(2018, 2), y: 17.30 },
                { x: new Date(2018, 3), y: 18.00 },
                { x: new Date(2018, 4), y: 17.60 },
                { x: new Date(2018, 5), y: 19.90 },
                { x: new Date(2018, 6), y: 21.10 },
                { x: new Date(2018, 7), y: 19.90 },
                { x: new Date(2018, 8), y: 19.10 },
                { x: new Date(2018, 9), y: 22.40 },
                { x: new Date(2018, 10), y: 23.20 },
                { x: new Date(2018, 11), y: 22.60 }
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
                { y: 77.40, label: "Nuevas visitas" },
                { y: 22.60, label: "Retornos" }


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
            name: "views",
            type: "area",
            color: "#C1403D",
            yValueFormatString: "##0.00'%'",
            dataPoints: [

                { x: new Date(2018, 0, 1), y: 69.78 },
                { x: new Date(2018, 1, 1), y: 62.05 },
                { x: new Date(2018, 2, 1), y: 56.61 },
                { x: new Date(2018, 3, 1), y: 60.60 },
                { x: new Date(2018, 4, 1), y: 63.09 },
                { x: new Date(2018, 5, 1), y: 61.34 },
                { x: new Date(2018, 6, 1), y: 61.39, },
                { x: new Date(2018, 7, 1), y: 62.32 },
                { x: new Date(2018, 8, 1), y: 64.15 },
                { x: new Date(2018, 9, 1), y: 68.54 },
                { x: new Date(2018, 10, 1), y: 73.20 },
                { x: new Date(2018, 11, 1), y: 65.39 }

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
                { y: 43.74, label: "Desktop" },
                { y: 52.95, label: "Movile" },
                { y: 3.31, label: "Tablet" }
            ]
        }]
    });
    chart1.render();

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
                { y: 60.24, label: "Facebook" },
                { y: 30.12, label: "Twitter" },
                { y: 2.41, label: "YouTube" },
                { y: 3.61, label: "Instagram" }

            ]
        }]
    });
    chart15.render();


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
                { label: "Landing page", y: 27.01 },
                { label: "proyectos/incentivo-la-educacion-superior-ies/", y: 4.27 },
                { label: "/noticias/vicepresidencia-convoca-a-concurso-de-pintura-para-estimular-cumplimiento-agenda-2030/", y: 6.84 },
                { label: "Transparencia", y: 4.14 },
                { label: "/tag/prosoli", y: 4.07 }

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
                { label: "Landing page", y: 22.79 },
                { label: "/noticias/vicepresidencia-convoca-a-concurso-de-pintura-para-estimular-cumplimiento-agenda-2030/", y: 6.91 },
                { label: "/proyectos/incentivo-la-educacion-superior-ies/", y: 4.18 },
                { label: "Transparencia", y: 7.28 },
                { label: "contacto", y: 3.92 }

            ]
        }]
    });
    chart18.render();


};