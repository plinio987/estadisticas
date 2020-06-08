window.onload = function() {

    // ****************TIPOS DE DISPOSITIVOS************** //

    var chart1 = new CanvasJS.Chart("dispositivosVice", {
        animationEnabled: true,
        exportEnabled: true,

        title: {
            text: "",

        },

        data: [{
            type: "doughnut",
            startAngle: 60,
            animationDuration: 800,
            animationEnabled: true,
            backgroundColor: "transparent",
            colorSet: "customColorSet",
            //innerRadius: 60,
            indexLabelFontSize: 13,
            indexLabelfontFamily: "arial",
            innerRadius: "65%",
            indexLabel: "{label} - #percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: [
                { y: 70.13, label: "Desktop" },
                { y: 28.20, label: "Movile" },
                { y: 1.68, label: "Tablet" }

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
                { y: 57.30, label: "Busqueda organica" },
                { y: 12.40, label: "Directo" },
                { y: 1.40, label: "Redes Sociales" },
                { y: 28.90, label: "Referido" }

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
                { y: 27.45, label: "Windows" },
                { y: 65.44, label: "Android" },
                { y: 6.52, label: "iOS" },
                { y: 0.32, label: "Linux" },
                { y: 0.08, label: "Not Set" }
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


                    { x: new Date(2018, 4), y: 2034, indexLabel: "Datos desde el 17 de mayo", indexLabelFontColor: "black", markerColor: "red", markerType: "triangle" },
                    { x: new Date(2018, 5), y: 3091 },
                    { x: new Date(2018, 6), y: 3139 },
                    { x: new Date(2018, 7), y: 30044 },
                    { x: new Date(2018, 8), y: 11616 },
                    { x: new Date(2018, 9), y: 11216 },
                    { x: new Date(2018, 10), y: 62209 },
                    { x: new Date(2018, 11), y: 0 }
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


                    { x: new Date(2018, 4), y: 595 },
                    { x: new Date(2018, 5), y: 1075 },
                    { x: new Date(2018, 6), y: 1051 },
                    { x: new Date(2018, 7), y: 9797 },
                    { x: new Date(2018, 8), y: 4294 },
                    { x: new Date(2018, 9), y: 3981 },
                    { x: new Date(2018, 10), y: 21172 },
                    { x: new Date(2018, 11), y: 0 }
                ]
            },

            {
                type: "line",
                name: "Usuarios unicos",
                color: "#000",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [


                    { x: new Date(2018, 4), y: 385 },
                    { x: new Date(2018, 5), y: 752 },
                    { x: new Date(2018, 6), y: 754 },
                    { x: new Date(2018, 7), y: 7084 },
                    { x: new Date(2018, 8), y: 3300 },
                    { x: new Date(2018, 9), y: 3112 },
                    { x: new Date(2018, 10), y: 14925 },
                    { x: new Date(2018, 11), y: 0 }
                ]
            },
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
                { y: 85.20, label: "Chrome" },
                { y: 5.35, label: "Safari" },
                { y: 5.33, label: "Android" },
                { y: 1.73, label: "Edge/Explores" },
                { y: 0.37, label: "Opera" },
                { y: 1.48, label: "Firefox" }
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
                { y: 8.28, label: "iPhone" },
                { y: 8.69, label: "Samsung" },
                { y: 1.24, label: "Alcatel" },
                { y: 1.84, label: "LG" },
                { y: 1.51, label: "ZTE" },
                { y: 2.36, label: "Not Set" }
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
                { y: 73.76, label: "Femenino" },
                { y: 26.24, label: "Masculino" }


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
                { label: "18-24", y: 18.19 },
                { label: "25-34", y: 41.47 },
                { label: "35-44", y: 21.01 },
                { label: "45-54", y: 12.36 },
                { label: "55-64", y: 5.31 },
                { label: "65+", y: 1.66 }

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
            indexLabelFontColor: "darkSlateGray",
            color: "#242051",
            name: "views",
            type: "column",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#m:##s",
            dataPoints: [

                { x: new Date(2018, 4), y: 313 },
                { x: new Date(2018, 5), y: 288 },
                { x: new Date(2018, 6), y: 209 },
                { x: new Date(2018, 7), y: 229 },
                { x: new Date(2018, 8), y: 156 },
                { x: new Date(2018, 9), y: 156 },
                { x: new Date(2018, 10), y: 233 },
                { x: new Date(2018, 11), y: 0 }
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

                { x: new Date(2018, 4), y: 78.70 },
                { x: new Date(2018, 5), y: 85.00 },
                { x: new Date(2018, 6), y: 80.50 },
                { x: new Date(2018, 7), y: 80.90 },
                { x: new Date(2018, 8), y: 79.70 },
                { x: new Date(2018, 9), y: 80.40 },
                { x: new Date(2018, 10), y: 78.90 },
                { x: new Date(2018, 11), y: 0 }
            ]
        }, {
            type: "line",
            axisYType: "secondary",
            name: "Retornos",
            yValueFormatString: "##0.00'%'",
            dataPoints: [

                { x: new Date(2018, 4), y: 21.3 },
                { x: new Date(2018, 5), y: 15.00 },
                { x: new Date(2018, 6), y: 19.50 },
                { x: new Date(2018, 7), y: 19.01 },
                { x: new Date(2018, 8), y: 20.30 },
                { x: new Date(2018, 9), y: 19.60 },
                { x: new Date(2018, 10), y: 21.10 },
                { x: new Date(2018, 11), y: 0 }
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
                { y: 78.90, label: "Nuevas visitas" },
                { y: 21.10, label: "Retornos" }


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
            type: "area",
            color: "#C1403D",
            yValueFormatString: "##0.00'%'",
            dataPoints: [


                { x: new Date(2012, 4, 1), y: 45.71 },
                { x: new Date(2012, 5, 1), y: 56.28 },
                { x: new Date(2012, 6, 1), y: 55.28, },
                { x: new Date(2012, 7, 1), y: 44.49 },
                { x: new Date(2012, 8, 1), y: 52.72 },
                { x: new Date(2012, 9, 1), y: 51.52 },
                { x: new Date(2012, 10, 1), y: 44.40 },
                { x: new Date(2012, 11, 1), y: 0 }

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
                { y: 13.60, label: "Facebook" },
                { y: 81.58, label: "YouTube" },
                { y: 0.44, label: "Blogger" },
                { y: 4.39, label: "Twitter" }

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
                { label: "Landing page", y: 19.82 },
                { label: "/V2/Reportes/Busqueda.aspx", y: 15.87 },
                { label: "/v2/Formularios/Solicitud_informacion.aspx", y: 12.02 },
                { label: "/v2/reportes/consulta_tarjeta_entrega.aspx", y: 7.08 },
                { label: "/servicios/consultar-beneficiario/", y: 5.62 }


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
                { label: "Landing page", y: 14.33 },
                { label: "/v2/Formularios/Solicitud_informacion.aspx", y: 12.28 },
                { label: "/V2/Reportes/Busqueda.aspx", y: 11.84 },
                { label: "/v2/reportes/consulta_tarjeta_entrega.aspx", y: 7.41 },
                { label: "/servicios/consultar-beneficiario/", y: 6.24 }

            ]
        }]
    });
    chart18.render();



};