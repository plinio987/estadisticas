window.onload = function() {

    // ****************TIPOS DE DISPOSITIVOS************** //

    var chart1 = new CanvasJS.Chart("dispositivosVice", {
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
                { y: 50.39, label: "Desktop" },
                { y: 47.80, label: "Movile" },
                { y: 1.81, label: "Tablet" }
            ]
        }]
    });
    chart1.render();

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
                { y: 62.30, label: "Paid Search" },
                { y: 27.90, label: "Busqueda organica" },
                { y: 4.80, label: "Directo" },
                { y: 4.60, label: "Redes Sociales" },
                { y: 0.30, label: "Referido" }

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
                { y: 26.34, label: "Windows" },
                { y: 64.99, label: "Android" },
                { y: 7.92, label: "iOS" },
                { y: 0.50, label: "Linux" },
                { y: 0.07, label: "Not Set" }
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

                    { x: new Date(2018, 0), y: 9668 },
                    { x: new Date(2018, 1), y: 13536 },
                    { x: new Date(2018, 2), y: 12560 },
                    { x: new Date(2018, 3), y: 13048 },
                    { x: new Date(2018, 4), y: 13666 },
                    { x: new Date(2018, 5), y: 13005 },
                    { x: new Date(2018, 6), y: 9853 },
                    { x: new Date(2018, 7), y: 12036 },
                    { x: new Date(2018, 8), y: 9731 },
                    { x: new Date(2018, 9), y: 18676 },
                    { x: new Date(2018, 10), y: 20160 },
                    { x: new Date(2018, 11), y: 14399 }
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

                    { x: new Date(2018, 0), y: 6704 },
                    { x: new Date(2018, 1), y: 7190 },
                    { x: new Date(2018, 2), y: 4241 },
                    { x: new Date(2018, 3), y: 4346 },
                    { x: new Date(2018, 4), y: 4719 },
                    { x: new Date(2018, 5), y: 4500 },
                    { x: new Date(2018, 6), y: 3807 },
                    { x: new Date(2018, 7), y: 4220 },
                    { x: new Date(2018, 8), y: 3782 },
                    { x: new Date(2018, 9), y: 8546 },
                    { x: new Date(2018, 10), y: 10127 },
                    { x: new Date(2018, 11), y: 7129 }
                ]
            },
            {
                type: "line",
                name: "Usuarios unicos",
                color: "#000",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [

                    { x: new Date(2018, 0), y: 6401 },
                    { x: new Date(2018, 1), y: 6418 },
                    { x: new Date(2018, 2), y: 3109 },
                    { x: new Date(2018, 3), y: 3454 },
                    { x: new Date(2018, 4), y: 3691 },
                    { x: new Date(2018, 5), y: 3523 },
                    { x: new Date(2018, 6), y: 2674 },
                    { x: new Date(2018, 7), y: 2985 },
                    { x: new Date(2018, 8), y: 3042 },
                    { x: new Date(2018, 9), y: 6084 },
                    { x: new Date(2018, 10), y: 6725 },
                    { x: new Date(2018, 11), y: 4557 }
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
                { y: 84.02, label: "Chrome" },
                { y: 6.25, label: "Safari" },
                { y: 5.71, label: "Android" },
                { y: 1.33, label: "Edge/Explores" },
                { y: 0.46, label: "Opera" },
                { y: 1.67, label: "Firefox" }
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
                { y: 13.64, label: "iPhone" },
                { y: 11.85, label: "Samsung" },
                { y: 1.72, label: "LG" },
                { y: 2.05, label: "Not Set" }
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
                { y: 69.90, label: "Femenino" },
                { y: 30.10, label: "Masculino" }


            ]
        }]
    });
    chart8.render();

    // ****************RANGO DE EDAD************** //

    var chart9 = new CanvasJS.Chart("rangoEdadPortalVice", {
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
                { label: "18-24", y: 18.06 },
                { label: "25-34", y: 38.46 },
                { label: "35-44", y: 18.24 },
                { label: "45-54", y: 15.61 },
                { label: "55-64", y: 7.42 },
                { label: "65+", y: 2.21 }


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
                { label: "0-10", y: 60.66 },
                { label: "11-30", y: 4.81 },
                { label: "31-60", y: 5.31 },
                { label: "61-180", y: 11.45 },
                { label: "181-600", y: 11.18 },
                { label: "601-1800", y: 5.89 },
                { label: "1800+", y: 0.79 }

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
                { x: new Date(2018, 0), y: 036 },
                { x: new Date(2018, 1), y: 114 },
                { x: new Date(2018, 2), y: 246 },
                { x: new Date(2018, 3), y: 243 },
                { x: new Date(2018, 4), y: 230 },
                { x: new Date(2018, 5), y: 247 },
                { x: new Date(2018, 6), y: 219 },
                { x: new Date(2018, 7), y: 226 },
                { x: new Date(2018, 8), y: 214 },
                { x: new Date(2018, 9), y: 134 },
                { x: new Date(2018, 10), y: 111 },
                { x: new Date(2018, 11), y: 202 }
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
                { x: new Date(2018, 0), y: 5.50 },
                { x: new Date(2018, 1), y: 92.70 },
                { x: new Date(2018, 2), y: 81.00 },
                { x: new Date(2018, 3), y: 80.10 },
                { x: new Date(2018, 4), y: 80.10 },
                { x: new Date(2018, 5), y: 79.60 },
                { x: new Date(2018, 6), y: 78.10 },
                { x: new Date(2018, 7), y: 79.80 },
                { x: new Date(2018, 8), y: 80.30 },
                { x: new Date(2018, 9), y: 77.90 },
                { x: new Date(2018, 10), y: 73.40 },
                { x: new Date(2018, 11), y: 71.20 }
            ]
        }, {
            type: "line",
            axisYType: "secondary",
            name: "Retornos",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2018, 0), y: 94.50 },
                { x: new Date(2018, 1), y: 7.30 },
                { x: new Date(2018, 2), y: 19.00 },
                { x: new Date(2018, 3), y: 19.90 },
                { x: new Date(2018, 4), y: 19.90 },
                { x: new Date(2018, 5), y: 20.40 },
                { x: new Date(2018, 6), y: 21.90 },
                { x: new Date(2018, 7), y: 20.20 },
                { x: new Date(2018, 8), y: 19.70 },
                { x: new Date(2018, 9), y: 22.10 },
                { x: new Date(2018, 10), y: 26.60 },
                { x: new Date(2018, 11), y: 28.80 }
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
                { y: 71.20, label: "Nuevas visitas" },
                { y: 28.8, label: "Retornos" }


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

                { x: new Date(2018, 0, 1), y: 88.17 },
                { x: new Date(2018, 1, 1), y: 79.74 },
                { x: new Date(2018, 2, 1), y: 52.98 },
                { x: new Date(2018, 3, 1), y: 53.04 },
                { x: new Date(2018, 4, 1), y: 54.06 },
                { x: new Date(2018, 5, 1), y: 54.51 },
                { x: new Date(2018, 6, 1), y: 56.47, },
                { x: new Date(2018, 7, 1), y: 53.39 },
                { x: new Date(2018, 8, 1), y: 57.85 },
                { x: new Date(2018, 9, 1), y: 65.29 },
                { x: new Date(2018, 10, 1), y: 67.05 },
                { x: new Date(2018, 11, 1), y: 66.94 }

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
                { y: 41.18, label: "Facebook" },
                { y: 41.18, label: "Twitter" },
                { y: 17.65, label: "Instagram" }

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
                { label: "Landing page", y: 38.87 },
                { label: "Transparencia", y: 40.17 },
                { label: "IPM", y: 1.71 },
                { label: "Vacantes", y: 3.63 },
                { label: "Contacto", y: 1.94 }


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
                { label: "Landing page", y: 30.82 },
                { label: "Transparencia", y: 40.08 },
                { label: "IPM", y: 1.98 },
                { label: "Vacantes", y: 3.30 },
                { label: "Autoservicio", y: 2.44 }

            ]
        }]
    });
    chart18.render();
};