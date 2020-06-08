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
                    { x: new Date(2019, 0), y: 10974 },
                    { x: new Date(2019, 1), y: 14354 },
                    { x: new Date(2019, 2), y: 13597 },
                    { x: new Date(2019, 3), y: 9994 },
                    { x: new Date(2019, 4), y: 10527 },
                    { x: new Date(2019, 5), y: 8715 },
                    { x: new Date(2019, 6), y: 8210 },
                    { x: new Date(2019, 7), y: 7810 },
                    { x: new Date(2019, 8), y: 8794 },
                    { x: new Date(2019, 9), y: 12465 },
                    { x: new Date(2019, 10), y: 17047 },
                    { x: new Date(2019, 11), y: 6007 }
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
                    { x: new Date(2019, 0), y: 5853 },
                    { x: new Date(2019, 1), y: 8004 },
                    { x: new Date(2019, 2), y: 7316 },
                    { x: new Date(2019, 3), y: 6169 },
                    { x: new Date(2019, 4), y: 6464 },
                    { x: new Date(2019, 5), y: 5542 },
                    { x: new Date(2019, 6), y: 4785 },
                    { x: new Date(2019, 7), y: 4883 },
                    { x: new Date(2019, 8), y: 5432 },
                    { x: new Date(2019, 9), y: 8876 },
                    { x: new Date(2019, 10), y: 12059 },
                    { x: new Date(2019, 11), y: 3819 }
                ]
            },
            {
                type: "line",
                name: "Usuarios unicos",
                color: "#000",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2019, 0), y: 4493 },
                    { x: new Date(2019, 1), y: 6045 },
                    { x: new Date(2019, 2), y: 5566 },
                    { x: new Date(2019, 3), y: 4906 },
                    { x: new Date(2019, 4), y: 5233 },
                    { x: new Date(2019, 5), y: 4516 },
                    { x: new Date(2019, 6), y: 3926 },
                    { x: new Date(2019, 7), y: 3935 },
                    { x: new Date(2019, 8), y: 4566 },
                    { x: new Date(2019, 9), y: 7638 },
                    { x: new Date(2019, 10), y: 9386 },
                    { x: new Date(2019, 11), y: 2957 }
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
                { y: 49.00, label: "Windows" },
                { y: 34.82, label: "Android" },
                { y: 15.40, label: "iOS" },
                { y: 0.41, label: "Linux" },
                { y: 0.18, label: "Not Set" }
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
                { y: 72.93, label: "Chrome" },
                { y: 11.63, label: "Safari" },
                { y: 4.01, label: "Android" },
                { y: 4.16, label: "Edge/Explorer" },
                { y: 2.50, label: "Firefox" },
                { y: 0.61, label: "Opera" }

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
                { y: 19.42, label: "iPhone" },
                { y: 1.89, label: "iPad" },
                { y: 6.54, label: "Samsung" },
                { y: 1.46, label: "Huawei JKM-LX3 Y9 2019" },
                { y: 1.08, label: "Huawei ANE-LX3 P20 Lite" },
                { y: 1.73, label: "Not Set" }
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
                { y: 51.59, label: "Desktop" },
                { y: 47.17, label: "Mobile" },
                { y: 1.73, label: "Tablet" }

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
                { x: new Date(2019, 0), y: 71.30 },
                { x: new Date(2019, 1), y: 71.69 },
                { x: new Date(2019, 2), y: 74.08 },
                { x: new Date(2019, 3), y: 79.09 },
                { x: new Date(2019, 4), y: 74.68 },
                { x: new Date(2019, 5), y: 77.34 },
                { x: new Date(2019, 6), y: 75.51 },
                { x: new Date(2019, 7), y: 78.27 },
                { x: new Date(2019, 8), y: 77.34 },
                { x: new Date(2019, 9), y: 82.09 },
                { x: new Date(2019, 10), y: 83.32 },
                { x: new Date(2019, 11), y: 76.93 }

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
                { y: 73.80, label: "Busqueda organica" },
                { y: 12.70, label: "Directo" },
                { y: 1.60, label: "Referido" },
                { y: 2.20, label: "Paid search" },
                { y: 9.70, label: "Social media" }
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
                { y: 71.30, label: "Femenino" },
                { y: 28.70, label: "Masculino" }


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
                { x: new Date(2019, 0), y: 203 },
                { x: new Date(2019, 1), y: 158 },
                { x: new Date(2019, 2), y: 228 },
                { x: new Date(2019, 3), y: 141 },
                { x: new Date(2019, 4), y: 133 },
                { x: new Date(2019, 5), y: 136 },
                { x: new Date(2019, 6), y: 134 },
                { x: new Date(2019, 7), y: 137 },
                { x: new Date(2019, 8), y: 126 },
                { x: new Date(2019, 9), y: 107 },
                { x: new Date(2019, 10), y: 108 },
                { x: new Date(2019, 11), y: 129 }
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
                { x: new Date(2019, 0), y: 83.90 },
                { x: new Date(2019, 1), y: 82.30 },
                { x: new Date(2019, 2), y: 82.80 },
                { x: new Date(2019, 3), y: 84.00 },
                { x: new Date(2019, 4), y: 84.90 },
                { x: new Date(2019, 5), y: 85.00 },
                { x: new Date(2019, 6), y: 84.90 },
                { x: new Date(2019, 7), y: 84.70 },
                { x: new Date(2019, 8), y: 85.80 },
                { x: new Date(2019, 9), y: 88.50 },
                { x: new Date(2019, 10), y: 84.70 },
                { x: new Date(2019, 11), y: 82.20 }
            ]
        }, {
            type: "line",
            axisYType: "secondary",
            name: "Retornos",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2019, 0), y: 16.10 },
                { x: new Date(2019, 1), y: 17.70 },
                { x: new Date(2019, 2), y: 17.20 },
                { x: new Date(2019, 3), y: 16.00 },
                { x: new Date(2019, 4), y: 15.10 },
                { x: new Date(2019, 5), y: 15.00 },
                { x: new Date(2019, 6), y: 15.10 },
                { x: new Date(2019, 7), y: 15.30 },
                { x: new Date(2019, 8), y: 14.20 },
                { x: new Date(2019, 9), y: 11.40 },
                { x: new Date(2019, 10), y: 15.30 },
                { x: new Date(2019, 11), y: 17.80 }
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
                { y: 44.33, label: "Facebook" },
                { y: 20.96, label: "Twitter" },
                { y: 27.84, label: "Instagram Stories" },
                { y: 6.87, label: "Instagram" }
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
                { label: "18-24", y: 19.26 },
                { label: "25-34", y: 31.23 },
                { label: "35-44", y: 18.97 },
                { label: "45-54", y: 16.08 },
                { label: "55-64", y: 8.79 },
                { label: "65+", y: 5.67 }
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
                { label: "Landin Page", y: 28.93 },
                { label: "/Embarazo adolescentes una maquina reproduccion la pobreza", y: 8.20 },
                { label: "/Desigualdad social", y: 4.48 },
                { label: "/Margarita Cedeño", y: 2.67 },
                { label: "/Urgencia Climatica", y: 2.38 }
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
                { label: "Landing page", y: 13.07 },
                { label: "/Embarazo adolescentes una maquina de reproduccion de pobreza", y: 8.43 },
                { label: "Que paso en Chile", y: 9.70 },
                { label: "Cayo el muro", y: 3.26 },
                { label: "/vicerdo/vicepresidenta/margarita-cedeno-lizardo/", y: 3.40 }



            ]
        }]
    });
    chart18.render();






};