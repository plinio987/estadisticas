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
                { y: 43.10, label: "Desktop" },
                { y: 1.72, label: "Tablet" },
                { y: 55.17, label: "Movile" }
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
                { y: 6.90, label: "Busqueda organica" },
                { y: 44.80, label: "Directo" },
                { y: 1.70, label: "Referido" },
                { y: 46.60, label: "Redes sociales" }


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
                { y: 34.48, label: "Windows" },
                { y: 32.76, label: "iOS" },
                { y: 1.72, label: "Linux" },
                { y: 1.72, label: "Not set" },
                { y: 24.14, label: "Android" }
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

                    { x: new Date(2018, 0), y: 64 },
                    { x: new Date(2018, 1), y: 91 },
                    { x: new Date(2018, 2), y: 52 },
                    { x: new Date(2018, 3), y: 67 },
                    { x: new Date(2018, 4), y: 238 },
                    { x: new Date(2018, 5), y: 69 },
                    { x: new Date(2018, 6), y: 58 },
                    { x: new Date(2018, 7), y: 275 },
                    { x: new Date(2018, 8), y: 224 },
                    { x: new Date(2018, 9), y: 362 },
                    { x: new Date(2018, 10), y: 340 },
                    { x: new Date(2018, 11), y: 71 }
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

                    { x: new Date(2018, 0), y: 31 },
                    { x: new Date(2018, 1), y: 29 },
                    { x: new Date(2018, 2), y: 30 },
                    { x: new Date(2018, 3), y: 38 },
                    { x: new Date(2018, 4), y: 94 },
                    { x: new Date(2018, 5), y: 29 },
                    { x: new Date(2018, 6), y: 31 },
                    { x: new Date(2018, 7), y: 86 },
                    { x: new Date(2018, 8), y: 78 },
                    { x: new Date(2018, 9), y: 180 },
                    { x: new Date(2018, 10), y: 173 },
                    { x: new Date(2018, 11), y: 43 }
                ]
            },

            {
                type: "line",
                name: "Usuarios unicos",
                color: "#000",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [

                    { x: new Date(2018, 0), y: 19 },
                    { x: new Date(2018, 1), y: 20 },
                    { x: new Date(2018, 2), y: 16 },
                    { x: new Date(2018, 3), y: 35 },
                    { x: new Date(2018, 4), y: 60 },
                    { x: new Date(2018, 5), y: 20 },
                    { x: new Date(2018, 6), y: 22 },
                    { x: new Date(2018, 7), y: 49 },
                    { x: new Date(2018, 8), y: 58 },
                    { x: new Date(2018, 9), y: 132 },
                    { x: new Date(2018, 10), y: 152 },
                    { x: new Date(2018, 11), y: 41 }
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
                { y: 37.93, label: "Chrome" },
                { y: 17.24, label: "Safari" },
                { y: 18.97, label: "Android" },
                { y: 3.44, label: "Edge/Explores" },
                { y: 1.72, label: "Not set" },
                { y: 3.45, label: "Firefox" }
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
                { y: 57.28, label: "iPhone" },
                { y: 6.06, label: "Samsung" },
                { y: 3.03, label: "Huawei" },
                { y: 3.03, label: "HTC" }
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
                { y: 100.00, label: "Femenino" },
                { y: 0.00, label: "Masculino" }


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
                { label: "18-24", y: 0.00 },
                { label: "25-34", y: 0.00 },
                { label: "35-44", y: 0.00 },
                { label: "45-54", y: 0.00 },
                { label: "55-64", y: 0.00 },
                { label: "65+", y: 0.00 }

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
                { label: "0-10", y: 64.52 },
                { label: "61.180", y: 6.45 },
                { label: "181-600", y: 12.90 },
                { label: "601-1800", y: 9.68 },
                { label: "11-30", y: 3.23 },
                { label: "31.60", y: 3.23 }


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
                { x: new Date(2018, 0), y: 115 },
                { x: new Date(2018, 1), y: 309 },
                { x: new Date(2018, 2), y: 208 },
                { x: new Date(2018, 3), y: 139 },
                { x: new Date(2018, 4), y: 339 },
                { x: new Date(2018, 5), y: 300 },
                { x: new Date(2018, 6), y: 356 },
                { x: new Date(2018, 7), y: 333 },
                { x: new Date(2018, 8), y: 423 },
                { x: new Date(2018, 9), y: 213 },
                { x: new Date(2018, 10), y: 115 },
                { x: new Date(2018, 11), y: 229 }
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
                { x: new Date(2018, 0), y: 58.30 },
                { x: new Date(2018, 1), y: 86.40 },
                { x: new Date(2018, 2), y: 64.71 },
                { x: new Date(2018, 3), y: 16.70 },
                { x: new Date(2018, 4), y: 78.80 },
                { x: new Date(2018, 5), y: 66.70 },
                { x: new Date(2018, 6), y: 65.20 },
                { x: new Date(2018, 7), y: 71.20 },
                { x: new Date(2018, 8), y: 76.90 },
                { x: new Date(2018, 9), y: 79.90 },
                { x: new Date(2018, 10), y: 85.20 },
                { x: new Date(2018, 11), y: 92.90 }
            ]
        }, {
            type: "line",
            axisYType: "secondary",
            name: "Retornos",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2018, 0), y: 41.70 },
                { x: new Date(2018, 1), y: 13.60 },
                { x: new Date(2018, 2), y: 35.29 },
                { x: new Date(2018, 3), y: 83.30 },
                { x: new Date(2018, 4), y: 21.20 },
                { x: new Date(2018, 5), y: 33.30 },
                { x: new Date(2018, 6), y: 34.80 },
                { x: new Date(2018, 7), y: 28.80 },
                { x: new Date(2018, 8), y: 23.10 },
                { x: new Date(2018, 9), y: 20.10 },
                { x: new Date(2018, 10), y: 14.80 },
                { x: new Date(2018, 11), y: 7.10 }
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
                { y: 92.90, label: "Nuevas visitas" },
                { y: 7.10, label: "Retornos" }


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

                { x: new Date(2018, 0, 1), y: 58.06 },
                { x: new Date(2018, 1, 1), y: 68.97 },
                { x: new Date(2018, 2, 1), y: 60.00 },
                { x: new Date(2018, 3, 1), y: 65.79 },
                { x: new Date(2018, 4, 1), y: 67.02 },
                { x: new Date(2018, 5, 1), y: 55.17 },
                { x: new Date(2018, 6, 1), y: 58.06, },
                { x: new Date(2018, 7, 1), y: 53.49 },
                { x: new Date(2018, 8, 1), y: 35.90 },
                { x: new Date(2018, 9, 1), y: 57.22 },
                { x: new Date(2018, 10, 1), y: 63.58 },
                { x: new Date(2018, 11, 1), y: 60.47 }

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
                { y: 11.11, label: "Facebook" },
                { y: 3.70, label: "Twitter" },
                { y: 3.70, label: "Blogger" },
                { y: 81.48, label: "Instagram" }

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
                { label: "Landing page", y: 87.18 },
                { label: "Sobre le proyecto", y: 5.13 },
                { label: "Noticias", y: 3.85 },
                { label: "antanas-mockus-defiende-la-instauracion-de-nueva-cultura-que-promueva-el-cambio-social", y: 1.28 },
                { label: "Contacto", y: 1.28 }



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
                { label: "Landing page", y: 50.00 },
                { label: "Sobre le proyecto", y: 20.51 },
                { label: "Noticias", y: 11.54 },
                { label: "Participa", y: 10.26 },
                { label: "Contacto", y: 5.13 }

            ]
        }]
    });
    chart18.render();
};