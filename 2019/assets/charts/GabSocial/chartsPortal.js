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
                    { x: new Date(2019, 0), y: 2914 },
                    { x: new Date(2019, 1), y: 4124 },
                    { x: new Date(2019, 2), y: 5351 },
                    { x: new Date(2019, 3), y: 4744 },
                    { x: new Date(2019, 4), y: 5181 },
                    { x: new Date(2019, 5), y: 4590 },
                    { x: new Date(2019, 6), y: 4450 },
                    { x: new Date(2019, 7), y: 4109 },
                    { x: new Date(2019, 8), y: 4891 },
                    { x: new Date(2019, 9), y: 5714 },
                    { x: new Date(2019, 10), y: 4658 },
                    { x: new Date(2019, 11), y: 2966 }
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
                    { x: new Date(2019, 0), y: 1640 },
                    { x: new Date(2019, 1), y: 2052 },
                    { x: new Date(2019, 2), y: 2581 },
                    { x: new Date(2019, 3), y: 2519 },
                    { x: new Date(2019, 4), y: 2738 },
                    { x: new Date(2019, 5), y: 2439 },
                    { x: new Date(2019, 6), y: 2390 },
                    { x: new Date(2019, 7), y: 2204 },
                    { x: new Date(2019, 8), y: 2806 },
                    { x: new Date(2019, 9), y: 3244 },
                    { x: new Date(2019, 10), y: 2600 },
                    { x: new Date(2019, 11), y: 1753 }
                ]
            },
            {
                type: "line",
                name: "Usuarios unicos",
                color: "#000",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2019, 0), y: 1147 },
                    { x: new Date(2019, 1), y: 1333 },
                    { x: new Date(2019, 2), y: 1907 },
                    { x: new Date(2019, 3), y: 1952 },
                    { x: new Date(2019, 4), y: 2116 },
                    { x: new Date(2019, 5), y: 1806 },
                    { x: new Date(2019, 6), y: 1872 },
                    { x: new Date(2019, 7), y: 1781 },
                    { x: new Date(2019, 8), y: 2387 },
                    { x: new Date(2019, 9), y: 2684 },
                    { x: new Date(2019, 10), y: 2158 },
                    { x: new Date(2019, 11), y: 1437 }
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
                { y: 55.55, label: "Windows" },
                { y: 33.05, label: "Android" },
                { y: 10.52, label: "iOS" },
                { y: 0.66, label: "Linux" },
                { y: 0.04, label: "Not Set" }
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
                { y: 79.18, label: "Chrome" },
                { y: 7.74, label: "Safari" },
                { y: 4.24, label: "Android" },
                { y: 5.15, label: "Edge/Explorer" },
                { y: 2.52, label: "Firefox" },
                { y: 0.69, label: "Opera" }

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
                { y: 16.17, label: "iPhone" },
                { y: 3.81, label: "iPad" },
                { y: 5.74, label: "Samsung" },
                { y: 0.96, label: "ZTE" },
                { y: 0.92, label: "Huawei" },
                { y: 0.87, label: "LG" },
                { y: 1.88, label: "Not Set" }
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
                { y: 55.82, label: "Desktop" },
                { y: 42.60, label: "Mobile" },
                { y: 1.59, label: "Tablet" }

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
                { x: new Date(2019, 0), y: 70.06 },
                { x: new Date(2019, 1), y: 56.77 },
                { x: new Date(2019, 2), y: 64.16 },
                { x: new Date(2019, 3), y: 68.16 },
                { x: new Date(2019, 4), y: 69.98 },
                { x: new Date(2019, 5), y: 64.70 },
                { x: new Date(2019, 6), y: 70.96 },
                { x: new Date(2019, 7), y: 66.74 },
                { x: new Date(2019, 8), y: 78.94 },
                { x: new Date(2019, 9), y: 76.66 },
                { x: new Date(2019, 10), y: 71.08 },
                { x: new Date(2019, 11), y: 74.56 }

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
                { y: 62.00, label: "Busqueda organica" },
                { y: 15.70, label: "Directo" },
                { y: 5.20, label: "Referido" },
                { y: 16.70, label: "Paid Search" },
                { y: 0.05, label: "Social media" }
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
                { y: 64.30, label: "Femenino" },
                { y: 36.70, label: "Masculino" }


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
                { label: "0-10", y: 16.61 },
                { label: "11-30", y: 6.37 },
                { label: "31-60", y: 6.03 },
                { label: "61-180", y: 11.70 },
                { label: "181-600", y: 12.67 },
                { label: "601-1800", y: 10.71 },
                { label: "1800+", y: 10.16 }

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
                { x: new Date(2019, 0), y: 117 },
                { x: new Date(2019, 1), y: 152 },
                { x: new Date(2019, 2), y: 154 },
                { x: new Date(2019, 3), y: 151 },
                { x: new Date(2019, 4), y: 135 },
                { x: new Date(2019, 5), y: 129 },
                { x: new Date(2019, 6), y: 138 },
                { x: new Date(2019, 7), y: 136 },
                { x: new Date(2019, 8), y: 125 },
                { x: new Date(2019, 10), y: 123 },
                { x: new Date(2019, 11), y: 115 }
            ]
        }]
    });
    chart11.render();



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
                { y: 33.33, label: "Facebook" },
                { y: 33.33, label: "LinkedIn" },
                { y: 33.33, label: "Twitter" }


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
                { label: "18-24", y: 16.61 },
                { label: "25-34", y: 31.09 },
                { label: "35-44", y: 20.09 },
                { label: "45-54", y: 14.76 },
                { label: "55-64", y: 10.93 },
                { label: "65+", y: 6.53 }
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
                { label: "Landin Page", y: 54.57 },
                { label: "/transparencia/", y: 10.59 },
                { label: "/el-gabinete-social/quienes-somos/", y: 2.45 },
                { label: "/el-gabinete-social/direccion-tecnica/politicas-publicas-e-innovacion/", y: 2.34 },
                { label: "Contacto/", y: 1.83 }
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
                { label: "Landin Page", y: 36.78 },
                { label: "/transparencia/", y: 17.97 },
                { label: "/el-gabinete-social/quienes-somos/", y: 2.85 },
                { label: "/el-gabinete-social/direccion-tecnica/politicas-publicas-e-innovacion/", y: 2.15 },
                { label: "Contacto/", y: 3.62 }

            ]
        }]
    });
    chart18.render();






};