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
                { y: 87.33, label: "Desktop" },
                { y: 12.42, label: "Mobile" },
                { y: 0.25, label: "Tablet" }
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
                { y: 19.50, label: "Busqueda organica" },
                { y: 77.30, label: "Directo" },
                { y: 1.60, label: "Referido" },
                { y: 1.60, label: "Redes Social" }

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
                { y: 93.46, label: "Windows" },
                { y: 4.93, label: "Android" },
                { y: 1.41, label: "iOS" },
                { y: 0.17, label: "Linux" }

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

                    { x: new Date(2018, 3), y: 26127 },
                    { x: new Date(2018, 4), y: 54394 },
                    { x: new Date(2018, 5), y: 58807 },
                    { x: new Date(2018, 6), y: 60441 },
                    { x: new Date(2018, 7), y: 54383 },
                    { x: new Date(2018, 8), y: 54493 },
                    { x: new Date(2018, 9), y: 69866 },
                    { x: new Date(2018, 10), y: 52500 },
                    { x: new Date(2018, 11), y: 18778 }
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


                    { x: new Date(2018, 3), y: 9295 },
                    { x: new Date(2018, 4), y: 19227 },
                    { x: new Date(2018, 5), y: 20255 },
                    { x: new Date(2018, 6), y: 20540 },
                    { x: new Date(2018, 7), y: 19246 },
                    { x: new Date(2018, 8), y: 19003 },
                    { x: new Date(2018, 9), y: 25175 },
                    { x: new Date(2018, 11), y: 20070 },
                    { x: new Date(2018, 11), y: 7468 }
                ]
            },
            {
                type: "line",
                name: "Usuarios unicos",
                color: "#000",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [

                    { x: new Date(2018, 3), y: 4235 },
                    { x: new Date(2018, 4), y: 8843 },
                    { x: new Date(2018, 5), y: 8818 },
                    { x: new Date(2018, 6), y: 9276 },
                    { x: new Date(2018, 7), y: 8749 },
                    { x: new Date(2018, 8), y: 7721 },
                    { x: new Date(2018, 9), y: 11359 },
                    { x: new Date(2018, 10), y: 9246 },
                    { x: new Date(2018, 11), y: 3567 }
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
                { y: 93.05, label: "Chrome" },
                { y: 0.64, label: "Safari" },
                { y: 0.38, label: "Android" },
                { y: 1.93, label: "Edge/Explores" },
                { y: 0.22, label: "Opera" },
                { y: 0.87, label: "Firefox" }
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
                { y: 12.02, label: "Apple" },
                { y: 12.03, label: "Samsung" },
                { y: 1.34, label: "LG" },
                { y: 1.67, label: "Not Set" }
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
                { y: 63.80, label: "Femenino" },
                { y: 36.20, label: "Masculino" }


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
                { label: "18-24", y: 34.08 },
                { label: "25-34", y: 35.12 },
                { label: "35-44", y: 17.28 },
                { label: "45-54", y: 8.56 },
                { label: "55-64", y: 3.76 },
                { label: "65+", y: 1.20 }


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
                { label: "0-10", y: 65.78 },
                { label: "11-30", y: 1.55 },
                { label: "31-60", y: 1.80 },
                { label: "61-180", y: 4.18 },
                { label: "181-600", y: 7.89 },
                { label: "601-1800", y: 12.16 },
                { label: "1800+", y: 6.94 }

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

                { x: new Date(2018, 3), y: 654 },
                { x: new Date(2018, 4), y: 650 },
                { x: new Date(2018, 5), y: 724 },
                { x: new Date(2018, 6), y: 635 },
                { x: new Date(2018, 7), y: 618 },
                { x: new Date(2018, 8), y: 707 },
                { x: new Date(2018, 9), y: 638 },
                { x: new Date(2018, 10), y: 606 },
                { x: new Date(2018, 11), y: 525 }
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

                { x: new Date(2018, 3), y: 72.8 },
                { x: new Date(2018, 4), y: 72.3 },
                { x: new Date(2018, 5), y: 70.9 },
                { x: new Date(2018, 6), y: 71.10 },
                { x: new Date(2018, 7), y: 71.90 },
                { x: new Date(2018, 8), y: 70.40 },
                { x: new Date(2018, 9), y: 70.80 },
                { x: new Date(2018, 10), y: 70.80 },
                { x: new Date(2018, 11), y: 70.00 }
            ]
        }, {
            type: "line",
            axisYType: "secondary",
            name: "Retornos",
            yValueFormatString: "##0.00'%'",
            dataPoints: [

                { x: new Date(2018, 3), y: 27.2 },
                { x: new Date(2018, 4), y: 27.7 },
                { x: new Date(2018, 5), y: 29.1 },
                { x: new Date(2018, 6), y: 28.90 },
                { x: new Date(2018, 7), y: 28.10 },
                { x: new Date(2018, 8), y: 29.60 },
                { x: new Date(2018, 9), y: 29.20 },
                { x: new Date(2018, 10), y: 29.20 },
                { x: new Date(2018, 11), y: 30.00 }
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
                { y: 70.00, label: "Nuevas visitas" },
                { y: 30.00, label: "Retornos" }


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


                { x: new Date(2018, 3, 1), y: 65.38 },
                { x: new Date(2018, 4, 1), y: 64.91 },
                { x: new Date(2018, 5, 1), y: 64.02 },
                { x: new Date(2018, 6, 1), y: 65.80, },
                { x: new Date(2018, 7, 1), y: 67.83 },
                { x: new Date(2018, 8, 1), y: 65.32 },
                { x: new Date(2018, 9, 1), y: 64.67 },
                { x: new Date(2018, 10, 1), y: 67.99 },
                { x: new Date(2018, 11, 1), y: 68.77 }

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
                { y: 72.88, label: "Facebook" },
                { y: 3.39, label: "Twitter" },
                { y: 23.43, label: "Instagram" }

            ]
        }]
    });
    chart15.render();


    // ****************PAGINAS DE DESTINO************** //


    var chart17 = new CanvasJS.Chart("paginasDestinoPortalCTC", {
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
                { label: "Landing page", y: 91.52 },
                { label: "/cortos-2018/", y: 2.36 },
                { label: "/sobre-nosotros/margarita-cedeno-lizardo/", y: 0.64 },
                { label: "/oferta-formativa/", y: 0.59 },
                { label: "/proyectos/innovapp/", y: 0.43 }

            ]
        }]
    });
    chart17.render();

    // ****************PAGINAS DE SALIDA************** //


    var chart18 = new CanvasJS.Chart("paginasSalidaPortalCTC", {
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
                { label: "Landing page", y: 87.24 },
                { label: "/cortos-2018/", y: 2.62 },
                { label: "/sobre-nosotros/margarita-cedeno-lizardo/", y: 0.59 },
                { label: "/oferta-formativa/", y: 1.51 },
                { label: "/sobre-nosotros/", y: 0.56 }

            ]
        }]
    });
    chart18.render();


};