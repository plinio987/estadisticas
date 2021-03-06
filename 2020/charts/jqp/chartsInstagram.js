window.onload = function() {

    var chart = new CanvasJS.Chart("engagement", {
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
                name: "Engagement adsoluto ",
                markerBorderColor: "white",
                color: "#F1931b",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "###0.00'%'",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2020, 0), y: 124.54 },
                    { x: new Date(2020, 1), y: 106.26 },
                    { x: new Date(2020, 2), y: 83.55 },
                    { x: new Date(2020, 3), y: 29.74 },
                    { x: new Date(2020, 4), y: 64.12 },
                    { x: new Date(2020, 5), y: 46.64 },
                    { x: new Date(2020, 6), y: 21.25 },
                    { x: new Date(2020, 7), y: 44.16 },
                    { x: new Date(2020, 8), y: 105.38 },
                    { x: new Date(2020, 9), y: 47.28 },
                    { x: new Date(2020, 10), y: 35.74 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            },

            {
                type: "column",
                name: "Engagement rate",
                color: "#D6618F",
                showInLegend: true,
                yValueFormatString: "###0.00'%'",
                dataPoints: [
                    { x: new Date(2020, 0), y: 12.03 },
                    { x: new Date(2020, 1), y: 7.65 },
                    { x: new Date(2020, 2), y: 8.18 },
                    { x: new Date(2020, 3), y: 12.86 },
                    { x: new Date(2020, 4), y: 7.65 },
                    { x: new Date(2020, 5), y: 6.57 },
                    { x: new Date(2020, 6), y: 5.38 },
                    { x: new Date(2020, 7), y: 12.07 },
                    { x: new Date(2020, 8), y: 7.27 },
                    { x: new Date(2020, 9), y: 48.62 },
                    { x: new Date(2020, 10), y: 5.29 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            }
        ]
    });
    chart.render();

    var chart20 = new CanvasJS.Chart("averagelikes", {
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
                name: "Promedio me gusta  ",
                markerBorderColor: "white",
                color: "#F1931b",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "###0.00'%'",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2020, 0), y: 122.54 },
                    { x: new Date(2020, 1), y: 100.78 },
                    { x: new Date(2020, 2), y: 78.79 },
                    { x: new Date(2020, 3), y: 28.85 },
                    { x: new Date(2020, 4), y: 60.81 },
                    { x: new Date(2020, 5), y: 44.25 },
                    { x: new Date(2020, 6), y: 20.43 },
                    { x: new Date(2020, 7), y: 42.12 },
                    { x: new Date(2020, 8), y: 101.53 },
                    { x: new Date(2020, 9), y: 44.86 },
                    { x: new Date(2020, 10), y: 34.16 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            },

            {
                type: "column",
                name: "Promedio comentarios",
                color: "#D6618F",
                showInLegend: true,
                yValueFormatString: "###0.00'%'",
                dataPoints: [
                    { x: new Date(2020, 0), y: 2.00 },
                    { x: new Date(2020, 1), y: 5.48 },
                    { x: new Date(2020, 2), y: 4.76 },
                    { x: new Date(2020, 3), y: 0.88 },
                    { x: new Date(2020, 4), y: 3.31 },
                    { x: new Date(2020, 5), y: 2.19 },
                    { x: new Date(2020, 6), y: 0.81 },
                    { x: new Date(2020, 7), y: 2.04 },
                    { x: new Date(2020, 8), y: 3.85 },
                    { x: new Date(2020, 9), y: 2.41 },
                    { x: new Date(2020, 10), y: 1.58 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            }
        ]
    });
    chart20.render();


    /*ALCANCE FACEBOOK VICE*/
    var chart1 = new CanvasJS.Chart("alcanceMegusta", {
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
                name: "Alcance",
                color: "#F1931b",
                showInLegend: true,
                xValueFormatString: "MMMM",
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2020, 0), y: 6200 },
                    { x: new Date(2020, 1), y: 8873 },
                    { x: new Date(2020, 2), y: 7951 },
                    { x: new Date(2020, 3), y: 2357 },
                    { x: new Date(2020, 4), y: 8873 },
                    { x: new Date(2020, 5), y: 7753 },
                    { x: new Date(2020, 6), y: 4369 },
                    { x: new Date(2020, 7), y: 4663 },
                    { x: new Date(2020, 8), y: 35024 },
                    { x: new Date(2020, 9), y: 2499 },
                    { x: new Date(2020, 10), y: 20150 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            },
            {
                type: "area",
                name: "Me gusta",
                markerBorderColor: "white",
                color: "#D6618F",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2020, 0), y: 734 },
                    { x: new Date(2020, 1), y: 644 },
                    { x: new Date(2020, 2), y: 613 },
                    { x: new Date(2020, 3), y: 294 },
                    { x: new Date(2020, 4), y: 644 },
                    { x: new Date(2020, 5), y: 485 },
                    { x: new Date(2020, 6), y: 226 },
                    { x: new Date(2020, 7), y: 537 },
                    { x: new Date(2020, 8), y: 2453 },
                    { x: new Date(2020, 9), y: 1153 },
                    { x: new Date(2020, 10), y: 1018 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            },
            {
                type: "column",
                name: "Impresiones",
                color: "#00743f",
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2020, 0), y: 0 },
                    { x: new Date(2020, 1), y: 10184 },
                    { x: new Date(2020, 2), y: 9716 },
                    { x: new Date(2020, 3), y: 2628 },
                    { x: new Date(2020, 4), y: 10184 },
                    { x: new Date(2020, 5), y: 7753 },
                    { x: new Date(2020, 6), y: 4369 },
                    { x: new Date(2020, 7), y: 5865 },
                    { x: new Date(2020, 8), y: 37143 },
                    { x: new Date(2020, 9), y: 25868 },
                    { x: new Date(2020, 10), y: 22062 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            }
        ]
    });
    chart1.render();

    var chart2 = new CanvasJS.Chart("seguidores", {
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
                type: "column",
                name: "Total seguidores",
                markerBorderColor: "white",
                color: "#D6618F",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2020, 0), y: 599 },
                    { x: new Date(2020, 1), y: 639 },
                    { x: new Date(2020, 2), y: 778 },
                    { x: new Date(2020, 3), y: 1019 },
                    { x: new Date(2020, 4), y: 1059 },
                    { x: new Date(2020, 5), y: 1096 },
                    { x: new Date(2020, 6), y: 1106 },
                    { x: new Date(2020, 7), y: 1275 },
                    { x: new Date(2020, 8), y: 2416 },
                    { x: new Date(2020, 9), y: 2570 },
                    { x: new Date(2020, 10), y: 2980 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            },

            {
                type: "splineArea",
                name: "Nuevos seguidores",
                color: "#F1931b",
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2020, 0), y: 599 },
                    { x: new Date(2020, 1), y: 40 },
                    { x: new Date(2020, 2), y: 139 },
                    { x: new Date(2020, 3), y: 241 },
                    { x: new Date(2020, 4), y: 40 },
                    { x: new Date(2020, 5), y: 37 },
                    { x: new Date(2020, 6), y: 10 },
                    { x: new Date(2020, 7), y: 169 },
                    { x: new Date(2020, 8), y: 1141 },
                    { x: new Date(2020, 9), y: 154 },
                    { x: new Date(2020, 10), y: 410 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            }
        ]
    });
    chart2.render();

    var chart3 = new CanvasJS.Chart("mensajesPublicaciones", {
        animationEnabled: true,
        backgroundColor: "#fff",
        //theme: "light2",
        title: {
            text: ""
        },
        axisX: {
            valueFormatString: "M",
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
                name: "Mensajes pulicaciones",
                markerBorderColor: "white",
                color: "#F1931b",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2020, 0), y: 12 },
                    { x: new Date(2020, 1), y: 35 },
                    { x: new Date(2020, 2), y: 37 },
                    { x: new Date(2020, 3), y: 9 },
                    { x: new Date(2020, 4), y: 35 },
                    { x: new Date(2020, 5), y: 24 },
                    { x: new Date(2020, 6), y: 9 },
                    { x: new Date(2020, 7), y: 26 },
                    { x: new Date(2020, 8), y: 93 },
                    { x: new Date(2020, 9), y: 62 },
                    { x: new Date(2020, 10), y: 47 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            },

            {
                type: "column",
                name: "Publicaciones mensuales",
                color: "#D6618F",
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2020, 0), y: 15 },
                    { x: new Date(2020, 1), y: 27 },
                    { x: new Date(2020, 2), y: 16 },
                    { x: new Date(2020, 3), y: 9 },
                    { x: new Date(2020, 4), y: 27 },
                    { x: new Date(2020, 5), y: 30 },
                    { x: new Date(2020, 6), y: 15 },
                    { x: new Date(2020, 7), y: 11 },
                    { x: new Date(2020, 8), y: 53 },
                    { x: new Date(2020, 9), y: 43 },
                    { x: new Date(2020, 10), y: 29 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            }
        ]
    });
    chart3.render();

    //MENSAJES
    var chart4 = new CanvasJS.Chart("interaccionesPublicaciones", {
        animationEnabled: true,
        exportEnabled: false,
        backgroundColor: "#fff",
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "",
            fontColor: "#000",
            fontSize: 20,
            fontFamily: "tahoma",
            fontStyle: "italic"
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM",
            labelFontColor: "#000",
        },
        axisY: {
            title: "Cantidad mensual",
            labelFontColor: "#000",
            titleFontColor: "#4F81BC",
            gridColor: "#fff"
        },
        data: [{
            type: "splineArea",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            color: "#D6618F",
            dataPoints: [
                { x: new Date(2020, 0), y: 811 },
                { x: new Date(2020, 1), y: 691 },
                { x: new Date(2020, 2), y: 673 },
                { x: new Date(2020, 3), y: 303 },
                { x: new Date(2020, 4), y: 691 },
                { x: new Date(2020, 5), y: 509 },
                { x: new Date(2020, 6), y: 235 },
                { x: new Date(2020, 7), y: 563 },
                { x: new Date(2020, 8), y: 2546 },
                { x: new Date(2020, 9), y: 1215 },
                { x: new Date(2020, 10), y: 1065 },
                { x: new Date(2020, 11), y: 0 }
            ]
        }]
    });

    chart4.render();

    var chart5 = new CanvasJS.Chart("instaStories", {
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
                type: "column",
                name: "Vistos Insta Stories",
                markerBorderColor: "white",
                color: "#F1931b",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2020, 0), y: 9990 },
                    { x: new Date(2020, 1), y: 61 },
                    { x: new Date(2020, 2), y: 0 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 61 },
                    { x: new Date(2020, 5), y: 0 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 61 },
                    { x: new Date(2020, 8), y: 990 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 2771 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            },

            {
                type: "splineArea",
                name: "Insta Stories ",
                color: "#D6618F",
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2020, 0), y: 81 },
                    { x: new Date(2020, 1), y: 25 },
                    { x: new Date(2020, 2), y: 67 },
                    { x: new Date(2020, 3), y: 15 },
                    { x: new Date(2020, 4), y: 25 },
                    { x: new Date(2020, 5), y: 23 },
                    { x: new Date(2020, 6), y: 5 },
                    { x: new Date(2020, 7), y: 5 },
                    { x: new Date(2020, 8), y: 61 },
                    { x: new Date(2020, 9), y: 1273 },
                    { x: new Date(2020, 10), y: 60 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            }
        ]
    });
    chart5.render();


    var chart6 = new CanvasJS.Chart("compartidas", {
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
            title: "Publicaciones compartidas",
            gridColor: "#fff"
        },

        data: [{
            indexLabelFontColor: "green",
            name: "views",
            type: "column",
            color: "#D6618F",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2020, 0), y: 0 },
                { x: new Date(2020, 1), y: 0 },
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
};