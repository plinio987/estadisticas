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
                    { x: new Date(2019, 0), y: 14439 },
                    { x: new Date(2019, 1), y: 13377 },
                    { x: new Date(2019, 2), y: 19359 },
                    { x: new Date(2019, 3), y: 14013 },
                    { x: new Date(2019, 4), y: 16368 },
                    { x: new Date(2019, 5), y: 8715 },
                    { x: new Date(2019, 6), y: 19834 },
                    { x: new Date(2019, 7), y: 16713 },
                    { x: new Date(2019, 8), y: 19852 },
                    { x: new Date(2019, 9), y: 19773 },
                    { x: new Date(2019, 10), y: 18180 },
                    { x: new Date(2019, 11), y: 11717 }
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
                    { x: new Date(2019, 0), y: 7329 },
                    { x: new Date(2019, 1), y: 6765 },
                    { x: new Date(2019, 2), y: 9476 },
                    { x: new Date(2019, 3), y: 6841 },
                    { x: new Date(2019, 4), y: 8138 },
                    { x: new Date(2019, 5), y: 5542 },
                    { x: new Date(2019, 6), y: 9657 },
                    { x: new Date(2019, 7), y: 8521 },
                    { x: new Date(2019, 8), y: 10220 },
                    { x: new Date(2019, 9), y: 11214 },
                    { x: new Date(2019, 10), y: 9864 },
                    { x: new Date(2019, 11), y: 5504 }
                ]
            },
            {
                type: "line",
                name: "Usuarios unicos",
                color: "#000",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2019, 0), y: 6177 },
                    { x: new Date(2019, 1), y: 5645 },
                    { x: new Date(2019, 2), y: 7861 },
                    { x: new Date(2019, 3), y: 5625 },
                    { x: new Date(2019, 4), y: 6565 },
                    { x: new Date(2019, 5), y: 4516 },
                    { x: new Date(2019, 6), y: 7998 },
                    { x: new Date(2019, 7), y: 7071 },
                    { x: new Date(2019, 8), y: 8400 },
                    { x: new Date(2019, 9), y: 9182 },
                    { x: new Date(2019, 10), y: 8387 },
                    { x: new Date(2019, 11), y: 4516 }
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
                { y: 41.47, label: "Windows" },
                { y: 45.90, label: "Android" },
                { y: 11.51, label: "iOS" },
                { y: 0.39, label: "Linux" },
                { y: 0.52, label: "Not Set" }
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
                { y: 79.26, label: "Chrome" },
                { y: 8.27, label: "Safari" },
                { y: 4.40, label: "Android" },
                { y: 3.62, label: "Edge/Explores" },
                { y: 1.99, label: "Firefox" },
                { y: 0.59, label: "Opera" }

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
                { y: 10.42, label: "iPhone" },
                { y: 9.81, label: "Samsung" },
                { y: 1.10, label: "Alcatel" },
                { y: 1.84, label: "LG" },
                { y: 3.11, label: "Not Set" }
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
                { y: 40.34, label: "Desktop" },
                { y: 58.03, label: "Mobile" },
                { y: 1.63, label: "Tablet" }

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
                { x: new Date(2019, 0), y: 67.70 },
                { x: new Date(2019, 1), y: 67.45 },
                { x: new Date(2019, 2), y: 67.09 },
                { x: new Date(2019, 3), y: 65.69 },
                { x: new Date(2019, 4), y: 65.50 },
                { x: new Date(2019, 5), y: 77.34 },
                { x: new Date(2019, 6), y: 64.54 },
                { x: new Date(2019, 7), y: 68.11 },
                { x: new Date(2019, 8), y: 69.42 },
                { x: new Date(2019, 9), y: 72.03 },
                { x: new Date(2019, 10), y: 71.19 },
                { x: new Date(2019, 11), y: 65.37 }

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
                { y: 81.50, label: "Busqueda organica" },
                { y: 11.50, label: "Directo" },
                { y: 2.00, label: "Redes Sociales" },
                { y: 5.00, label: "Referido" }

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
                { y: 71.50, label: "Femenino" },
                { y: 28.50, label: "Masculino" }


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
                { label: "0-10", y: 35.05 },
                { label: "11-30", y: 4.94 },
                { label: "31-60", y: 6.17 },
                { label: "61-180", y: 14.59 },
                { label: "181-600", y: 18.03 },
                { label: "601-1800", y: 14.42 },
                { label: "1800+", y: 6.81 }

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
                { x: new Date(2019, 0), y: 147 },
                { x: new Date(2019, 1), y: 148 },
                { x: new Date(2019, 2), y: 156 },
                { x: new Date(2019, 3), y: 203 },
                { x: new Date(2019, 4), y: 153 },
                { x: new Date(2019, 5), y: 136 },
                { x: new Date(2019, 6), y: 148 },
                { x: new Date(2019, 7), y: 145 },
                { x: new Date(2019, 8), y: 146 },
                { x: new Date(2019, 9), y: 103 },
                { x: new Date(2019, 10), y: 148 },
                { x: new Date(2019, 11), y: 240 }
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
                { x: new Date(2019, 0), y: 82.90 },
                { x: new Date(2019, 1), y: 82.50 },
                { x: new Date(2019, 2), y: 82.80 },
                { x: new Date(2019, 3), y: 83.00 },
                { x: new Date(2019, 4), y: 82.40 },
                { x: new Date(2019, 5), y: 85.00 },
                { x: new Date(2019, 6), y: 83.90 },
                { x: new Date(2019, 7), y: 83.60 },
                { x: new Date(2019, 8), y: 83.70 },
                { x: new Date(2019, 9), y: 84.10 },
                { x: new Date(2019, 10), y: 84.90 },
                { x: new Date(2019, 11), y: 81.80 }
            ]
        }, {
            type: "line",
            axisYType: "secondary",
            name: "Retornos",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2019, 0), y: 17.10 },
                { x: new Date(2019, 1), y: 17.50 },
                { x: new Date(2019, 2), y: 17.20 },
                { x: new Date(2019, 3), y: 17.00 },
                { x: new Date(2019, 4), y: 17.80 },
                { x: new Date(2019, 5), y: 15.00 },
                { x: new Date(2019, 6), y: 16.10 },
                { x: new Date(2019, 7), y: 16.40 },
                { x: new Date(2019, 8), y: 16.30 },
                { x: new Date(2019, 9), y: 15.90 },
                { x: new Date(2019, 10), y: 15.10 },
                { x: new Date(2019, 11), y: 18.20 }
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
                { y: 69.57, label: "Facebook" },
                { y: 13.04, label: "Twitter" },
                { y: 17.39, label: "Instagram" }

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
                { label: "18-24", y: 17.56 },
                { label: "25-34", y: 32.86 },
                { label: "35-44", y: 19.64 },
                { label: "45-54", y: 16.38 },
                { label: "55-64", y: 9.67 },
                { label: "65+", y: 3.89 }
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
                { label: "Landing page", y: 37.39 },
                { label: "/Tarjeta-solidaridad", y: 4.96 },
                { label: "Contacto", y: 4.84 },
                { label: "Voluntario Solidario", y: 3.77 },
                { label: "comer es primero", y: 2.97 }

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
                { label: "Landing page", y: 24.70 },
                { label: "contacto", y: 5.83 },
                { label: "Tarjeta-solidaridad", y: 4.13 },
                { label: "Voluntario Solidario", y: 4.07 },
                { label: "Quienes somos", y: 1.91 }



            ]
        }]
    });
    chart18.render();






};