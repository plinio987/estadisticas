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
                    { x: new Date(2020, 0), y: 86 },
                    { x: new Date(2020, 1), y: 54 },
                    { x: new Date(2020, 2), y: 0 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 0 },
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
                    { x: new Date(2020, 0), y: 72 },
                    { x: new Date(2020, 1), y: 50 },
                    { x: new Date(2020, 2), y: 0 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 0 },
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
                type: "line",
                name: "Usuarios unicos",
                color: "#F22F08",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2020, 0), y: 60 },
                    { x: new Date(2020, 1), y: 48 },
                    { x: new Date(2020, 2), y: 0 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 0 },
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
                { y: 100.00, label: "Windows" },
                { y: 0.00, label: "Android" },
                { y: 0.00, label: "iOS" },
                { y: 0.00, label: "Linux" },
                { y: 0.00, label: "Not Set" }
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
                { y: 50.00, label: "Chrome" },
                { y: 50.00, label: "Firefox" }


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
                { y: 0.00, label: "iPhone" },
                { y: 0.00, label: "iPad" },
                { y: 0.00, label: "Samsung" },
                { y: 0.00, label: "Huawei JKM-LX3 Y9 2020" },
                { y: 0.00, label: "Huawei ANE-LX3 P20 Lite" },
                { y: 0.00, label: "Not Set" }
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
                { y: 0.00, label: "Busqueda organica" },
                { y: 100.00, label: "Directo" },
                { y: 0.00, label: "Referido" },
                { y: 0.00, label: "Paid search" },
                { y: 0.00, label: "Social media" }
            ]
        }]
    });
    chart5.render();

    var chart6 = new CanvasJS.Chart("porcentajeRebote", {
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
                { x: new Date(2020, 0), y: 72.30 },
                { x: new Date(2020, 1), y: 78.20 },
                { x: new Date(2020, 2), y: 0 },
                { x: new Date(2020, 3), y: 0 },
                { x: new Date(2020, 4), y: 0 },
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

    chart6.render();

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
                { y: 100.00, label: "Desktop" }

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
                { x: new Date(2020, 0), y: 109 },
                { x: new Date(2020, 1), y: 102 },
                { x: new Date(2020, 2), y: 0 },
                { x: new Date(2020, 3), y: 0 },
                { x: new Date(2020, 4), y: 0 },
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


    var chart9 = new CanvasJS.Chart("tiempoPermanencia", {
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
                { label: "181-600", y: 5.65 }



            ]
        }]
    });
    chart9.render();

    var chart10 = new CanvasJS.Chart("usersSplinePortal", {
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
                    { x: new Date(2020, 0), y: 64.78 },
                    { x: new Date(2020, 1), y: 66.70 },
                    { x: new Date(2020, 2), y: 0 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 0 },
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
                    { x: new Date(2020, 0), y: 35.22 },
                    { x: new Date(2020, 1), y: 33.33 },
                    { x: new Date(2020, 2), y: 0 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 0 },
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
    chart10.render();

    // ****************GENERO USUARIOS************** //

    var chart11 = new CanvasJS.Chart("generoPortal", {
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
                { y: 71.30, label: "Femenino" },
                { y: 28.70, label: "Masculino" }
            ]
        }]
    });
    chart11.render();

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
                { y: 0.00, label: "Facebook" },
                { y: 0.00, label: "Twitter" },
                { y: 0.00, label: "Instagram Stories" },
                { y: 0.00, label: "Instagram" }
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
                { label: "18-24", y: 0.00 },
                { label: "25-34", y: 0.00 },
                { label: "35-44", y: 100.00 },
                { label: "45-54", y: 0.00 },
                { label: "55-64", y: 0.00 }

            ]
        }]
    });
    chart14.render();

    // ****************PAGINAS DE DESTINO************** //


    var chart15 = new CanvasJS.Chart("paginasDestino", {
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
                { label: "Landin Page", y: 66.67 },
                { label: "/Quiero progresar", y: 3.33 }

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
                { label: "Landing page", y: 33.34 },
                { label: "/Sobre Nosotros", y: 33.33 },
                { label: "Jovenes lideres", y: 33.33 }




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