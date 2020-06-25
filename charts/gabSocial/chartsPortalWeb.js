window.onload = function() {


    // ****************VISITAS, USUARIOS Y SECCIONES************** //


    var chart1 = new CanvasJS.Chart("visitasPortalVice", {
        animationEnabled: true,
        backgroundColor: "#fff",
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
            gridColor: "#fff"

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
                type: "splineArea",
                name: "Visitas al portal",
                color: "#73C0F4",
                showInLegend: true,
                xValueFormatString: "MMMM",
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2020, 0), y: 3366 },
                    { x: new Date(2020, 1), y: 3996 },
                    { x: new Date(2020, 2), y: 9697 },
                    { x: new Date(2020, 3), y: 111176 },
                    { x: new Date(2020, 4), y: 44445 },
                    { x: new Date(2020, 5), y: 0 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 0 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            },
            {
                type: "column",
                name: "Secciones abiertas",
                markerBorderColor: "white",
                color: "#bed905",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2020, 0), y: 1923 },
                    { x: new Date(2020, 1), y: 2263 },
                    { x: new Date(2020, 2), y: 5970 },
                    { x: new Date(2020, 3), y: 76340 },
                    { x: new Date(2020, 4), y: 30579 },
                    { x: new Date(2020, 5), y: 0 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 0 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            },
            {
                type: "area",
                name: "Usuarios unicos",
                color: "#D3AEE8",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2020, 0), y: 1622 },
                    { x: new Date(2020, 1), y: 1924 },
                    { x: new Date(2020, 2), y: 5250 },
                    { x: new Date(2020, 3), y: 56716 },
                    { x: new Date(2020, 4), y: 21245 },
                    { x: new Date(2020, 5), y: 0 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 0 },
                    { x: new Date(2020, 11), y: 0 }
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



    var chart30 = new CanvasJS.Chart("notasPrensa", {
        animationEnabled: true,
        backgroundColor: "#FFF",
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
            title: "Porcentaje",
            gridColor: "#fff"
        },

        data: [{
            indexLabelFontColor: "green",
            name: "views",
            type: "area",
            color: "#bed905",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2020, 0), y: 1 },
                { x: new Date(2020, 1), y: 9 },
                { x: new Date(2020, 2), y: 3 },
                { x: new Date(2020, 3), y: 0 },
                { x: new Date(2020, 4), y: 2 },
                { x: new Date(2020, 5), y: 0 },
                { x: new Date(2020, 6), y: 0 },
                { x: new Date(2020, 7), y: 0 },
                { x: new Date(2020, 8), y: 0 },
                { x: new Date(2020, 9), y: 0 },
                { x: new Date(2020, 10), y: 0 },
                { x: new Date(2020, 11), y: 0 }

            ]
        }]
    });
    chart30.render();




    // ****************SISTEMAS OPERATIVOS UTILIZADOS************** //

    var chart2 = new CanvasJS.Chart("sistemasOperativos", {
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
            radius: 120,
            indexLabel: "{label} - {y}",
            yValueFormatString: "###0.0'%'",
            click: explodePie,
            dataPoints: [
                { y: 49.00, label: "Windows" },
                { y: 34.82, label: "Android" },
                { y: 15.40, label: "iOS" },
                { y: 0.41, label: "Linux" },
                { y: 0.18, label: "Not Set" }
            ]
        }]
    });

    chart2.render();

    var chart3 = new CanvasJS.Chart("navegadores", {
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
            type: "doughnut",
            indexLabelFontSize: 11,
            radius: 120,
            indexLabel: "{label} - {y}",
            yValueFormatString: "###0.0'%'",
            click: explodePie,
            dataPoints: [
                { y: 72.93, label: "Chrome" },
                { y: 11.63, label: "Safari" },
                { y: 4.01, label: "Android" },
                { y: 4.16, label: "Edge/Explorer" },
                { y: 2.50, label: "Firefox" },
                { y: 0.61, label: "Opera" }

            ]
        }]
    });
    chart3.render();

    var chart4 = new CanvasJS.Chart("moviles", {
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
            radius: 120,
            indexLabel: "{label} - {y}",
            yValueFormatString: "###0.0'%'",
            click: explodePie,
            dataPoints: [
                { y: 19.42, label: "iPhone" },
                { y: 1.89, label: "iPad" },
                { y: 6.54, label: "Samsung" },
                { y: 1.46, label: "Huawei JKM-LX3 Y9 2020" },
                { y: 1.08, label: "Huawei ANE-LX3 P20 Lite" },
                { y: 1.73, label: "Not Set" }
            ]
        }]
    });
    chart4.render();


    // ****************CANALES AL PORTAL************** //

    var chart5 = new CanvasJS.Chart("canalesInbound", {
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
            radius: 120,
            indexLabel: "{label} - {y}",
            yValueFormatString: "###0.0'%'",
            click: explodePie,
            dataPoints: [
                { y: 85.70, label: "Referido" },
                { y: 6.70, label: "Directo" },
                { y: 6.02, label: "Busqueda organica" },
                { y: 1.20, label: "Paid search" },
                { y: 0.38, label: "Social media" }
            ]
        }]
    });
    chart5.render();

    var chart16 = new CanvasJS.Chart("porcentajeRebote", {
        animationEnabled: true,
        backgroundColor: "#FFF",
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
            title: "Porcentaje",
            gridColor: "#fff"
        },

        data: [{
            indexLabelFontColor: "green",
            name: "views",
            type: "area",
            color: "#bed905",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2020, 0), y: 68.28 },
                { x: new Date(2020, 1), y: 69.33 },
                { x: new Date(2020, 2), y: 72.50 },
                { x: new Date(2020, 3), y: 77.34 },
                { x: new Date(2020, 4), y: 76.90 },
                { x: new Date(2020, 5), y: 0 },
                { x: new Date(2020, 6), y: 0 },
                { x: new Date(2020, 7), y: 0 },
                { x: new Date(2020, 8), y: 0 },
                { x: new Date(2020, 9), y: 0 },
                { x: new Date(2020, 10), y: 0 },
                { x: new Date(2020, 11), y: 0 }

            ]
        }]
    });

    chart16.render();

    var chart7 = new CanvasJS.Chart("dispositivos", {
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
            radius: 120,
            indexLabel: "{label} - {y}",
            yValueFormatString: "###0.0'%'",
            click: explodePie,
            dataPoints: [
                { y: 51.59, label: "Desktop" },
                { y: 47.17, label: "Mobile" },
                { y: 1.73, label: "Tablet" }
            ]
        }]
    });
    chart7.render();

    var chart8 = new CanvasJS.Chart("tiempoDuracion", {
        animationEnabled: true,
        backgroundColor: "#FFF",
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            text: ""
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Timeline",
            gridColor: "#fff"
        },
        data: [{
            type: "splineArea",
            indexLabel: "{y}",
            color: "#bed905",
            indexLabelFontColor: "#000",
            indexLabelFontSize: 14,
            indexLabelPlacement: "inside",
            yValueFormatString: "#m:##s",
            dataPoints: [
                { x: new Date(2020, 0), y: 121 },
                { x: new Date(2020, 1), y: 123 },
                { x: new Date(2020, 2), y: 133 },
                { x: new Date(2020, 3), y: 102 },
                { x: new Date(2020, 4), y: 054 },
                { x: new Date(2020, 5), y: 0 },
                { x: new Date(2020, 6), y: 0 },
                { x: new Date(2020, 7), y: 0 },
                { x: new Date(2020, 8), y: 0 },
                { x: new Date(2020, 9), y: 0 },
                { x: new Date(2020, 10), y: 0 },
                { x: new Date(2020, 11), y: 0 }
            ]
        }]
    });
    chart8.render();


    var chart29 = new CanvasJS.Chart("tiempoPermanencia", {
        theme: "light1", // "light1", "ligh2", "dark1", "dark2"
        animationEnabled: true,
        title: {
            text: ""
        },
        axisY: {
            title: "Porcentaje",
            prefix: "%",
            lineThickness: 0,
            gridColor: "#fff",

        },
        axisX: {
            title: "Timeline",
            gridColor: "#fff",

        },
        data: [{
            type: "bar",
            indexLabel: "{y}",
            indexLabelFontColor: "#000",
            indexLabelFontSize: 14,
            indexLabelPlacement: "outside",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { label: "0-10", y: 76.53 },
                { label: "11-30", y: 2.36 },
                { label: "31-60", y: 2.55 },
                { label: "61-180", y: 5.11 },
                { label: "181-600", y: 5.65 },
                { label: "601-1800", y: 4.07 },
                { label: "1800+", y: 0.74 }

            ]
        }]
    });
    chart29.render();

    var chart20 = new CanvasJS.Chart("usersSplinePortal", {
        animationEnabled: true,
        title: {
            text: ""
        },
        axisY: {
            includeZero: false,
            prefix: "%",
            gridColor: "#fff",
        },
        toolTip: {
            shared: true
        },
        legend: {
            fontSize: 14
        },
        data: [{
                type: "splineArea",
                showInLegend: true,
                name: "Nuevas visitas",
                color: "#de8cf0",
                yValueFormatString: "##0.00'%'",
                xValueFormatString: "MMM",
                dataPoints: [
                    { x: new Date(2020, 0), y: 77.00 },
                    { x: new Date(2020, 1), y: 79.50 },
                    { x: new Date(2020, 2), y: 14.00 },
                    { x: new Date(2020, 3), y: 74.00 },
                    { x: new Date(2020, 4), y: 60.70 },
                    { x: new Date(2020, 5), y: 0 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 0 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            },

            {
                type: "splineArea",
                showInLegend: true,
                color: "#bed905",
                yValueFormatString: "##0.00'%'",
                name: "Recurrentes",
                dataPoints: [
                    { x: new Date(2020, 0), y: 23.00 },
                    { x: new Date(2020, 1), y: 20.50 },
                    { x: new Date(2020, 2), y: 86.00 },
                    { x: new Date(2020, 3), y: 26.00 },
                    { x: new Date(2020, 4), y: 39.30 },
                    { x: new Date(2020, 5), y: 0 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 0 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            }
        ]
    });
    chart20.render();

    // ****************GENERO USUARIOS************** //

    var chart21 = new CanvasJS.Chart("generoPortal", {
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
            radius: 120,
            indexLabel: "{label} - {y}",
            yValueFormatString: "###0.0'%'",
            click: explodePie,
            dataPoints: [
                { y: 70.70, label: "Femenino" },
                { y: 29.30, label: "Masculino" }
            ]
        }]
    });
    chart21.render();

    // ****************CANALES REFERIDOS RRSS************** //

    var chart12 = new CanvasJS.Chart("redesSociales", {
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
                { y: 34.21, label: "Facebook" },
                { y: 52.63, label: "Twitter" },
                { y: 7.89, label: "LinkedIn" },
                { y: 5.26, label: "YouTube" }
            ]
        }]
    });
    chart12.render();


    // ****************CANALES AL RANGO DE EDAD************** //

    var chart14 = new CanvasJS.Chart("rangoEdadPortal", {
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
                { label: "18-24", y: 20.53 },
                { label: "25-34", y: 31.38 },
                { label: "35-44", y: 18.75 },
                { label: "45-54", y: 12.13 },
                { label: "55-64", y: 11.90 },
                { label: "65+", y: 4.61 }
            ]
        }]
    });
    chart14.render();

    // ****************PAGINAS DE DESTINO************** //


    var chart15 = new CanvasJS.Chart("paginasEntrada", {
        theme: "ligh2", // "light1", "ligh2", "dark1", "dark2"
        animationEnabled: true,
        title: {
            text: ""
        },
        axisY: {
            title: "Porcentaje",
            prefix: "%",
            lineThickness: 0,
            gridColor: "#fff",

        },
        data: [{
            type: "bar",
            indexLabel: "{y}",
            indexLabelFontColor: "#FFF",
            indexLabelPlacement: "inside",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { label: "Landin Page", y: 92.28 },
                { label: "/entidades-coordina-margarita-cedeno-toman-medidas-contra-el-coronavirus-suspende-actividades-y-servicios/", y: 1.01 },
                { label: "/punto-solidario/", y: 0.65 },
                { label: "/vicepresidenta-garantiza-proteccion-y-servicios-de-salud-a-mujeres-vulnerables-durante-pandemia/", y: 0.55 },
                { label: "/vicepresidencia-alerta-estafadores-ofrecen-tarjetas-progresando-con-solidaridad-y-subsidios-especiales/gab1-5/", y: 0.52 }
            ]
        }]
    });
    chart15.render();

    // ****************PAGINAS DE SALIDA************** //


    var chart16 = new CanvasJS.Chart("paginasSalida", {
        theme: "ligh2", // "light1", "ligh2", "dark1", "dark2"
        animationEnabled: true,
        title: {
            text: ""
        },
        axisY: {
            title: "Porcentaje",
            prefix: "%",
            lineThickness: 0,
            gridColor: "#fff",

        },
        data: [{
            type: "bar",
            indexLabel: "{y}",
            indexLabelFontColor: "#FFF",
            indexLabelPlacement: "inside",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { label: "Landing page", y: 87.97 },
                { label: "/entidades-coordina-margarita-cedeno-toman-medidas-contra-el-coronavirus-suspende-actividades-y-servicios/", y: 1.80 },
                { label: "/vicepresidenta-garantiza-proteccion-y-servicios-de-salud-a-mujeres-vulnerables-durante-pandemia/", y: 1.18 },
                { label: "/punto-solidario/", y: 0.58 },
                { label: "/hacia-un-piso-de-proteccion-social-y-genero-en-republica-dominicana-escenarios-y-costos/", y: 0.55 }



            ]
        }]
    });
    chart16.render();






    function explodePie(e) {
        for (var i = 0; i < e.dataSeries.dataPoints.length; i++) {
            if (i !== e.dataPointIndex)
                e.dataSeries.dataPoints[i].exploded = false;
        }
    }

};