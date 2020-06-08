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
                    { x: new Date(2019, 0), y: 21718 },
                    { x: new Date(2019, 1), y: 15483 },
                    { x: new Date(2019, 2), y: 10747 },
                    { x: new Date(2019, 3), y: 8122 },
                    { x: new Date(2019, 4), y: 8393 },
                    { x: new Date(2019, 5), y: 6687 },
                    { x: new Date(2019, 6), y: 11104 },
                    { x: new Date(2019, 7), y: 10745 },
                    { x: new Date(2019, 8), y: 18190 },
                    { x: new Date(2019, 9), y: 20790 },
                    { x: new Date(2019, 10), y: 17466 },
                    { x: new Date(2019, 11), y: 10962 }
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
                    { x: new Date(2019, 0), y: 10412 },
                    { x: new Date(2019, 1), y: 7305 },
                    { x: new Date(2019, 2), y: 3942 },
                    { x: new Date(2019, 3), y: 3184 },
                    { x: new Date(2019, 4), y: 3522 },
                    { x: new Date(2019, 5), y: 2619 },
                    { x: new Date(2019, 6), y: 4132 },
                    { x: new Date(2019, 7), y: 3770 },
                    { x: new Date(2019, 8), y: 5612 },
                    { x: new Date(2019, 9), y: 6227 },
                    { x: new Date(2019, 10), y: 5071 },
                    { x: new Date(2019, 11), y: 3321 }
                ]
            },
            {
                type: "line",
                name: "Usuarios unicos",
                color: "#000",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2019, 0), y: 6602 },
                    { x: new Date(2019, 1), y: 4929 },
                    { x: new Date(2019, 2), y: 3111 },
                    { x: new Date(2019, 3), y: 2489 },
                    { x: new Date(2019, 4), y: 2764 },
                    { x: new Date(2019, 5), y: 2064 },
                    { x: new Date(2019, 6), y: 3309 },
                    { x: new Date(2019, 7), y: 2933 },
                    { x: new Date(2019, 8), y: 4449 },
                    { x: new Date(2019, 9), y: 4625 },
                    { x: new Date(2019, 10), y: 4049 },
                    { x: new Date(2019, 11), y: 2671 }
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
                { y: 45.87, label: "Windows" },
                { y: 42.58, label: "Android" },
                { y: 10.23, label: "iOS" },
                { y: 0.60, label: "Linux" },
                { y: 0.64, label: "Not Set" }
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
                { y: 80.05, label: "Chrome" },
                { y: 6.95, label: "Safari" },
                { y: 3.86, label: "Android" },
                { y: 4.34, label: "Edge/Explores" },
                { y: 0.60, label: "Opera" },
                { y: 2.61, label: "Firefox" }

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
                { y: 12.78, label: "Apple" },
                { y: 11.85, label: "Samsung" },
                { y: 1.73, label: "ZTE" },
                { y: 2.63, label: "Not Set" }
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
                { y: 67.09, label: "Movile" },
                { y: 31.75, label: "Desktop" },
                { y: 1.16, label: "Tablet" }

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
                { x: new Date(2019, 0), y: 65.96 },
                { x: new Date(2019, 1), y: 64.33 },
                { x: new Date(2019, 2), y: 52.61 },
                { x: new Date(2019, 3), y: 55.75 },
                { x: new Date(2019, 4), y: 60.05 },
                { x: new Date(2019, 5), y: 57.08 },
                { x: new Date(2019, 6), y: 54.40 },
                { x: new Date(2019, 7), y: 66.95 },
                { x: new Date(2019, 8), y: 47.81 },
                { x: new Date(2019, 9), y: 48.13 },
                { x: new Date(2019, 10), y: 46.28 },
                { x: new Date(2019, 11), y: 48.09 }

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

                { y: 81.60, label: "Busqueda organica" },
                { y: 10.30, label: "Directo" },
                { y: 6.90, label: "Referido" },
                { y: 1.20, label: "Redes Sociales" }
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
                { y: 68.43, label: "Femenino" },
                { y: 31.57, label: "Masculino" }


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
                { label: "0-10", y: 32.61 },
                { label: "11-30", y: 5.88 },
                { label: "31-60", y: 8.13 },
                { label: "61-180", y: 19.96 },
                { label: "181-600", y: 20.56 },
                { label: "601-1800", y: 10.05 },
                { label: "1800+", y: 2.81 }
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
                { x: new Date(2019, 0), y: 114 },
                { x: new Date(2019, 1), y: 128 },
                { x: new Date(2019, 2), y: 228 },
                { x: new Date(2019, 3), y: 209 },
                { x: new Date(2019, 4), y: 201 },
                { x: new Date(2019, 5), y: 223 },
                { x: new Date(2019, 6), y: 218 },
                { x: new Date(2019, 7), y: 156 },
                { x: new Date(2019, 8), y: 226 },
                { x: new Date(2019, 9), y: 238 },
                { x: new Date(2019, 10), y: 244 },
                { x: new Date(2019, 11), y: 239 }
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
                { x: new Date(2019, 0), y: 71.50 },
                { x: new Date(2019, 1), y: 71.80 },
                { x: new Date(2019, 2), y: 81.20 },
                { x: new Date(2019, 3), y: 79.70 },
                { x: new Date(2019, 4), y: 80.40 },
                { x: new Date(2019, 5), y: 81.50 },
                { x: new Date(2019, 6), y: 81.90 },
                { x: new Date(2019, 7), y: 77.20 },
                { x: new Date(2019, 8), y: 81.30 },
                { x: new Date(2019, 9), y: 81.30 },
                { x: new Date(2019, 10), y: 80.70 },
                { x: new Date(2019, 11), y: 79.30 }
            ]
        }, {
            type: "line",
            axisYType: "secondary",
            name: "Retornos",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2019, 0), y: 28.50 },
                { x: new Date(2019, 1), y: 28.20 },
                { x: new Date(2019, 2), y: 18.80 },
                { x: new Date(2019, 3), y: 20.30 },
                { x: new Date(2019, 4), y: 19.60 },
                { x: new Date(2019, 5), y: 18.50 },
                { x: new Date(2019, 6), y: 18.10 },
                { x: new Date(2019, 7), y: 22.80 },
                { x: new Date(2019, 8), y: 18.70 },
                { x: new Date(2019, 9), y: 18.70 },
                { x: new Date(2019, 10), y: 19.30 },
                { x: new Date(2019, 11), y: 20.70 }
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
                { y: 75.00, label: "Facebook" },
                { y: 9.38, label: "Twitter" },
                { y: 9.38, label: "Instagram" }

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
                { label: "18-24", y: 15.70 },
                { label: "25-34", y: 38.33 },
                { label: "35-44", y: 21.50 },
                { label: "45-54", y: 12.96 },
                { label: "55-64", y: 8.70 },
                { label: "65+", y: 2.82 }
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
                { label: "Consulta de datos", y: 30.18 },
                { label: "Landing page", y: 20.39 },
                { label: "Consultas", y: 5.69 },
                { label: "/IPM", y: 4.19 },
                { label: "Autoservicio", y: 4.01 }
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
                { label: "Landing page", y: 31.39 },
                { label: "IPM", y: 7.67 },
                { label: "Contacto", y: 5.73 },
                { label: "Quienes somos", y: 5.00 },
                { label: "/servicios/autoservicio-de-datos/", y: 3.74 }



            ]
        }]
    });
    chart18.render();






};