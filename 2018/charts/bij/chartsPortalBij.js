window.onload = function() {

    // ****************TIPOS DE DISPOSITIVOS************** //

    var chart1 = new CanvasJS.Chart("dispositivosBIJ", {
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
                { y: 47.41, label: "Desktop" },
                { y: 48.19, label: "Movile" },
                { y: 4.40, label: "Tablet" }
            ]
        }]
    });
    chart1.render();

    // ****************CANALES AL PORTAL************** //

    var chart2 = new CanvasJS.Chart("canalesInboundBIJ", {
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
                { y: 74.90, label: "Busqueda organica" },
                { y: 10.70, label: "Directo" },
                { y: 6.70, label: "Redes Sociales" },
                { y: 7.70, label: "Referido" }

            ]
        }]
    });
    chart2.render();

    // ****************SISTEMAS OPERATIVOS UTILIZADOS************** //

    var chart3 = new CanvasJS.Chart("sistemasOperativosBIJ", {
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
                { y: 41.58, label: "Windows" },
                { y: 38.86, label: "Android" },
                { y: 18.52, label: "iOS" },
                { y: 0.65, label: "Linux" },
                { y: 0.13, label: "Not Set" }
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


    var chart4 = new CanvasJS.Chart("visitasPortalBIJ", {
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

                    { x: new Date(2018, 0), y: 1947 },
                    { x: new Date(2018, 1), y: 3174 },
                    { x: new Date(2018, 2), y: 6787 },
                    { x: new Date(2018, 3), y: 9508 },
                    { x: new Date(2018, 4), y: 5702 },
                    { x: new Date(2018, 5), y: 5190 },
                    { x: new Date(2018, 6), y: 4952 },
                    { x: new Date(2018, 7), y: 4585 },
                    { x: new Date(2018, 8), y: 4387 },
                    { x: new Date(2018, 9), y: 4883 },
                    { x: new Date(2018, 10), y: 3912 },
                    { x: new Date(2018, 11), y: 2437 }
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

                    { x: new Date(2018, 0), y: 544 },
                    { x: new Date(2018, 1), y: 732 },
                    { x: new Date(2018, 2), y: 2252 },
                    { x: new Date(2018, 3), y: 2699 },
                    { x: new Date(2018, 4), y: 2114 },
                    { x: new Date(2018, 5), y: 1694 },
                    { x: new Date(2018, 6), y: 1770 },
                    { x: new Date(2018, 7), y: 1855 },
                    { x: new Date(2018, 8), y: 1805 },
                    { x: new Date(2018, 9), y: 2065 },
                    { x: new Date(2018, 10), y: 1666 },
                    { x: new Date(2018, 11), y: 964 }
                ]
            },
            {
                type: "line",
                name: "Usuarios unicos",
                color: "#000",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [

                    { x: new Date(2018, 0), y: 417 },
                    { x: new Date(2018, 1), y: 543 },
                    { x: new Date(2018, 2), y: 1403 },
                    { x: new Date(2018, 3), y: 1926 },
                    { x: new Date(2018, 4), y: 1549 },
                    { x: new Date(2018, 5), y: 1296 },
                    { x: new Date(2018, 6), y: 1368 },
                    { x: new Date(2018, 7), y: 1515 },
                    { x: new Date(2018, 8), y: 1520 },
                    { x: new Date(2018, 9), y: 1733 },
                    { x: new Date(2018, 10), y: 1422 },
                    { x: new Date(2018, 11), y: 772 }
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

    var chart5 = new CanvasJS.Chart("navegadoresBIJ", {
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
                { y: 73.45, label: "Chrome" },
                { y: 14.51, label: "Safari" },
                { y: 8.94, label: "Android" },
                { y: 1.43, label: "Edge/Explores" },
                { y: 0.65, label: "Opera" },
                { y: 2.59, label: "Firefox" }
            ]
        }]
    });
    chart5.render();


    var chart6 = new CanvasJS.Chart("mobilesBIJ", {
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
                { y: 16.69, label: "iPhone" },
                { y: 82.80, label: "Samsung" },
                { y: 0.51, label: "Not Set" }
            ]
        }]
    });
    chart6.render();



    // ****************GENERO USUARIOS************** //

    var chart8 = new CanvasJS.Chart("generoPortalBIJ", {
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
                { y: 78.40, label: "Femenino" },
                { y: 21.60, label: "Masculino" }


            ]
        }]
    });
    chart8.render();

    // ****************RANGO DE EDAD************** //

    var chart9 = new CanvasJS.Chart("rangoEdadPortalBIJ", {
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
                { label: "18-24", y: 23.18 },
                { label: "25-34", y: 37.37 },
                { label: "35-44", y: 23.31 },
                { label: "45-54", y: 10.81 },
                { label: "55-64", y: 3.91 },
                { label: "65+", y: 1.43 }

            ]
        }]
    });
    chart9.render();

    // ****************TIEMPO DE PERMANENCIA EN EL PORTAL************** //

    var chart10 = new CanvasJS.Chart("tiempoPermanenciaBIJ", {
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
                { label: "0-10", y: 68.14 },
                { label: "11-30", y: 3.55 },
                { label: "31-60", y: 5.48 },
                { label: "61-180", y: 8.53 },
                { label: "181-600", y: 8.64 },
                { label: "601-1800", y: 4.71 },
                { label: "1800+", y: 0.94 }

            ]
        }]
    });
    chart10.render();


    // ****TIEMPO DE DURACION PORTAL****//      


    var chart11 = new CanvasJS.Chart("tiempoDuracionBIJ", {
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
                { x: new Date(2018, 0), y: 213 },
                { x: new Date(2018, 1), y: 329 },
                { x: new Date(2018, 2), y: 311 },
                { x: new Date(2018, 3), y: 543 },
                { x: new Date(2018, 4), y: 236 },
                { x: new Date(2018, 5), y: 224 },
                { x: new Date(2018, 6), y: 237 },
                { x: new Date(2018, 7), y: 158 },
                { x: new Date(2018, 8), y: 155 },
                { x: new Date(2018, 9), y: 154 },
                { x: new Date(2018, 10), y: 149 },
                { x: new Date(2018, 11), y: 210 }
            ]
        }]
    });
    chart11.render();

    // ****************USUARIOS NUEVOS Y RECURENTES************** //

    var chart12 = new CanvasJS.Chart("usersSplinePortalBIJ", {
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
                { x: new Date(2018, 0), y: 79.8 },
                { x: new Date(2018, 1), y: 84.30 },
                { x: new Date(2018, 2), y: 81.30 },
                { x: new Date(2018, 3), y: 83.10 },
                { x: new Date(2018, 4), y: 81.40 },
                { x: new Date(2018, 5), y: 83.00 },
                { x: new Date(2018, 6), y: 83.60 },
                { x: new Date(2018, 7), y: 85.40 },
                { x: new Date(2018, 8), y: 87.30 },
                { x: new Date(2018, 9), y: 87.20 },
                { x: new Date(2018, 10), y: 87.80 },
                { x: new Date(2018, 11), y: 87.30 }
            ]
        }, {
            type: "line",
            axisYType: "secondary",
            name: "Retornos",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2018, 0), y: 20.2 },
                { x: new Date(2018, 1), y: 15.70 },
                { x: new Date(2018, 2), y: 18.7 },
                { x: new Date(2018, 3), y: 16.90 },
                { x: new Date(2018, 4), y: 18.60 },
                { x: new Date(2018, 5), y: 17.00 },
                { x: new Date(2018, 6), y: 16.40 },
                { x: new Date(2018, 7), y: 14.60 },
                { x: new Date(2018, 8), y: 12.70 },
                { x: new Date(2018, 9), y: 12.80 },
                { x: new Date(2018, 10), y: 12.20 },
                { x: new Date(2018, 11), y: 12.70 }
            ]
        }]
    });
    chart12.render();


    var chart13 = new CanvasJS.Chart("nuevoRetornoBIJ", {
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
                { y: 87.30, label: "Nuevas visitas" },
                { y: 12.70, label: "Retornos" }


            ]
        }]
    });
    chart13.render();


    // ***PORCENTAJE DE REBOTE**** //
    // 
    var chart14 = new CanvasJS.Chart("porcentajeReboteBIJ", {
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

                { x: new Date(2018, 0, 1), y: 59.38 },
                { x: new Date(2018, 1, 1), y: 50.41 },
                { x: new Date(2018, 2, 1), y: 56.93 },
                { x: new Date(2018, 3, 1), y: 58.35 },
                { x: new Date(2018, 4, 1), y: 58.75 },
                { x: new Date(2018, 5, 1), y: 57.56 },
                { x: new Date(2018, 6, 1), y: 56.21, },
                { x: new Date(2018, 7, 1), y: 63.56 },
                { x: new Date(2018, 8, 1), y: 66.37 },
                { x: new Date(2018, 9, 1), y: 66.97 },
                { x: new Date(2018, 10, 1), y: 67.05 },
                { x: new Date(2018, 11, 1), y: 64.42 }

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
    var chart15 = new CanvasJS.Chart("referidosRRSSBIJ", {
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
                { y: 88.46, label: "Facebook" },
                { y: 9.62, label: "Instagram" }
            ]
        }]
    });
    chart15.render();

    // ****************PAGINAS DE DESTINO************** //


    var chart17 = new CanvasJS.Chart("paginasDestinoPortalBIJ", {
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
                { label: "Landing page", y: 31.74 },
                { label: "/catalogo/cuento-navidad-juan-bosch/", y: 9.85 },
                { label: "/catalogo/la-bicicleta-verde-limon/", y: 2.80 },
                { label: "/Servicios", y: 2.59 },
                { label: "/Contacto", y: 1.97 }


            ]
        }]
    });
    chart17.render();

    // ****************PAGINAS DE SALIDA************** //

    var chart18 = new CanvasJS.Chart("paginasSalidaPortalBIJ", {
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
                { label: "Landing page", y: 20.756 },
                { label: "/catalogo/cuento-navidad-juan-bosch/", y: 9.44 },
                { label: "Servicios ", y: 2.90 },
                { label: "/catalogo/la-bicicleta-verde-limon/", y: 2.70 },
                { label: "/conocenos/biblio-voluntarios/", y: 2.49 }

            ]
        }]
    });
    chart18.render();
};