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
                    { x: new Date(2019, 0), y: 5691 },
                    { x: new Date(2019, 1), y: 8720 },
                    { x: new Date(2019, 2), y: 9938 },
                    { x: new Date(2019, 3), y: 7084 },
                    { x: new Date(2019, 4), y: 5875 },
                    { x: new Date(2019, 5), y: 5653 },
                    { x: new Date(2019, 6), y: 6323 },
                    { x: new Date(2019, 7), y: 4677 },
                    { x: new Date(2019, 8), y: 5387 },
                    { x: new Date(2019, 9), y: 6483 },
                    { x: new Date(2019, 10), y: 5453 },
                    { x: new Date(2019, 11), y: 3069 }
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
                    { x: new Date(2019, 0), y: 1843 },
                    { x: new Date(2019, 1), y: 3120 },
                    { x: new Date(2019, 2), y: 3831 },
                    { x: new Date(2019, 3), y: 3116 },
                    { x: new Date(2019, 4), y: 2490 },
                    { x: new Date(2019, 5), y: 2076 },
                    { x: new Date(2019, 6), y: 2804 },
                    { x: new Date(2019, 7), y: 2137 },
                    { x: new Date(2019, 8), y: 2410 },
                    { x: new Date(2019, 9), y: 3121 },
                    { x: new Date(2019, 10), y: 2559 },
                    { x: new Date(2019, 11), y: 1421 }
                ]
            },
            {
                type: "line",
                name: "Usuarios unicos",
                color: "#000",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2019, 0), y: 1391 },
                    { x: new Date(2019, 1), y: 2193 },
                    { x: new Date(2019, 2), y: 2928 },
                    { x: new Date(2019, 3), y: 2475 },
                    { x: new Date(2019, 4), y: 2042 },
                    { x: new Date(2019, 5), y: 1653 },
                    { x: new Date(2019, 6), y: 2233 },
                    { x: new Date(2019, 7), y: 1817 },
                    { x: new Date(2019, 8), y: 2096 },
                    { x: new Date(2019, 9), y: 2681 },
                    { x: new Date(2019, 10), y: 2211 },
                    { x: new Date(2019, 11), y: 1259 }
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
                { y: 42.65, label: "Windows" },
                { y: 43.73, label: "Android" },
                { y: 12.68, label: "iOS" },
                { y: 0.73, label: "Linux" },
                { y: 0.05, label: "Not Set" }
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
                { y: 79.19, label: "Chrome" },
                { y: 8.77, label: "Safari" },
                { y: 5.29, label: "Android" },
                { y: 2.10, label: "Edge/Explores" },
                { y: 0.54, label: "Opera" },
                { y: 2.40, label: "Firefox" }

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
                { y: 16.89, label: "iPhone" },
                { y: 7.84, label: "Samsung" },
                { y: 1.00, label: "Huawei" },
                { y: 1.64, label: "Not Set" }
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
                { y: 43.94, label: "Desktop" },
                { y: 53.71, label: "Movile" },
                { y: 2.35, label: "Tablet" }

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
                { x: new Date(2019, 0), y: 59.52 },
                { x: new Date(2019, 1), y: 63.49 },
                { x: new Date(2019, 2), y: 62.83 },
                { x: new Date(2019, 3), y: 63.58 },
                { x: new Date(2019, 4), y: 63.55 },
                { x: new Date(2019, 5), y: 61.56 },
                { x: new Date(2019, 6), y: 66.69 },
                { x: new Date(2019, 7), y: 67.24 },
                { x: new Date(2019, 8), y: 67.63 },
                { x: new Date(2019, 9), y: 70.23 },
                { x: new Date(2019, 10), y: 69.05 },
                { x: new Date(2019, 11), y: 70.87 }

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
                { y: 85.80, label: "Busqueda organica" },
                { y: 10.00, label: "Directo" },
                { y: 3.30, label: "Redes Sociales" },
                { y: 0.90, label: "Referido" }
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
                { y: 73.00, label: "Femenino" },
                { y: 27.00, label: "Masculino" }


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
                { label: "18-24", y: 17.86 },
                { label: "25-34", y: 34.35 },
                { label: "35-44", y: 25.42 },
                { label: "45-54", y: 13.25 },
                { label: "55-64", y: 6.87 },
                { label: "65+", y: 2.26 }

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
                { x: new Date(2019, 0), y: 256 },
                { x: new Date(2019, 1), y: 279 },
                { x: new Date(2019, 2), y: 221 },
                { x: new Date(2019, 3), y: 206 },
                { x: new Date(2019, 4), y: 154 },
                { x: new Date(2019, 5), y: 227 },
                { x: new Date(2019, 6), y: 208 },
                { x: new Date(2019, 7), y: 149 },
                { x: new Date(2019, 8), y: 153 },
                { x: new Date(2019, 9), y: 145 },
                { x: new Date(2019, 10), y: 159 },
                { x: new Date(2019, 11), y: 139 }
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
                { x: new Date(2019, 0), y: 86.70 },
                { x: new Date(2019, 1), y: 84.30 },
                { x: new Date(2019, 2), y: 83.80 },
                { x: new Date(2019, 3), y: 84.50 },
                { x: new Date(2019, 4), y: 85.60 },
                { x: new Date(2019, 5), y: 85.60 },
                { x: new Date(2019, 6), y: 86.10 },
                { x: new Date(2019, 7), y: 88.70 },
                { x: new Date(2019, 8), y: 88.20 },
                { x: new Date(2019, 9), y: 88.90 },
                { x: new Date(2019, 10), y: 89.30 },
                { x: new Date(2019, 11), y: 90.40 }
            ]
        }, {
            type: "line",
            axisYType: "secondary",
            name: "Retornos",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2019, 0), y: 13.30 },
                { x: new Date(2019, 1), y: 15.70 },
                { x: new Date(2019, 2), y: 16.20 },
                { x: new Date(2019, 3), y: 15.50 },
                { x: new Date(2019, 4), y: 14.40 },
                { x: new Date(2019, 5), y: 14.40 },
                { x: new Date(2019, 6), y: 13.90 },
                { x: new Date(2019, 7), y: 11.30 },
                { x: new Date(2019, 8), y: 11.80 },
                { x: new Date(2019, 9), y: 11.10 },
                { x: new Date(2019, 10), y: 10.70 },
                { x: new Date(2019, 11), y: 9.60 }
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
                { y: 52.38, label: "Facebook" },
                { y: 2.38, label: "Twitter" },
                { y: 2.38, label: "YouTube" },
                { y: 38.10, label: "Instagram Stories" }

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
                { label: "18-24", y: 17.03 },
                { label: "25-34", y: 34.61 },
                { label: "35-44", y: 24.66 },
                { label: "45-54", y: 15.07 },
                { label: "55-64", y: 5.84 },
                { label: "65+", y: 2.28 }
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
                { label: "Landing page", y: 20.50 },
                { label: "/catalogo/la-bicicleta-verde-limon/", y: 7.72 },
                { label: "Yo y mi hermana clara", y: 7.55 },
                { label: "/Amor otras materias", y: 4.56 },
                { label: "/Fantasma tras la pared", y: 2.49 }

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
                { label: "Landing page", y: 17.90 },
                { label: "/catalogo/amor-otras-materias/", y: 5.55 },
                { label: "/catalogo/Cuento-navidad-Juan-Bosch", y: 5.55 },
                { label: "/catalogo/Bicicleta verde limon", y: 4.88 },
                { label: "/catalogo/yo -y-mi-hermana-clara", y: 3.52 }


            ]
        }]
    });
    chart18.render();






};