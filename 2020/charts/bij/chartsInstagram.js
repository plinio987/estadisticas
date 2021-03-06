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
                name: "Engagement ",
                markerBorderColor: "white",
                color: "#F1931b",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "###0.00'%'",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2020, 0), y: 11.45 },
                    { x: new Date(2020, 1), y: 15.89 },
                    { x: new Date(2020, 2), y: 8.99 },
                    { x: new Date(2020, 3), y: 12.23 },
                    { x: new Date(2020, 4), y: 56.01 },
                    { x: new Date(2020, 5), y: 112.94 },
                    { x: new Date(2020, 6), y: 39.66 },
                    { x: new Date(2020, 7), y: 5.30 },
                    { x: new Date(2020, 8), y: 52.01 },
                    { x: new Date(2020, 9), y: 42.01 },
                    { x: new Date(2020, 10), y: 36.05 },
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
                    { x: new Date(2020, 0), y: 4.23 },
                    { x: new Date(2020, 1), y: 6.27 },
                    { x: new Date(2020, 2), y: 3.65 },
                    { x: new Date(2020, 3), y: 3.28 },
                    { x: new Date(2020, 4), y: 8.20 },
                    { x: new Date(2020, 5), y: 7.12 },
                    { x: new Date(2020, 6), y: 5.55 },
                    { x: new Date(2020, 7), y: 6.02 },
                    { x: new Date(2020, 8), y: 5.82 },
                    { x: new Date(2020, 9), y: 5.88 },
                    { x: new Date(2020, 10), y: 5.88 },
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
                    { x: new Date(2020, 0), y: 10.93 },
                    { x: new Date(2020, 1), y: 15.52 },
                    { x: new Date(2020, 2), y: 8.62 },
                    { x: new Date(2020, 3), y: 11.41 },
                    { x: new Date(2020, 4), y: 53.75 },
                    { x: new Date(2020, 5), y: 107.38 },
                    { x: new Date(2020, 6), y: 38.65 },
                    { x: new Date(2020, 7), y: 5.05 },
                    { x: new Date(2020, 8), y: 51.00 },
                    { x: new Date(2020, 9), y: 39.98 },
                    { x: new Date(2020, 10), y: 34.34 },
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
                    { x: new Date(2020, 0), y: 0.52 },
                    { x: new Date(2020, 1), y: 0.38 },
                    { x: new Date(2020, 2), y: 0.37 },
                    { x: new Date(2020, 3), y: 0.82 },
                    { x: new Date(2020, 4), y: 2.26 },
                    { x: new Date(2020, 5), y: 5.56 },
                    { x: new Date(2020, 6), y: 1.00 },
                    { x: new Date(2020, 7), y: 0.01 },
                    { x: new Date(2020, 8), y: 0.01 },
                    { x: new Date(2020, 9), y: 0.02 },
                    { x: new Date(2020, 10), y: 0.02 },
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
                    { x: new Date(2020, 0), y: 29998 },
                    { x: new Date(2020, 1), y: 31681 },
                    { x: new Date(2020, 2), y: 31553 },
                    { x: new Date(2020, 3), y: 47982 },
                    { x: new Date(2020, 4), y: 89681 },
                    { x: new Date(2020, 5), y: 224711 },
                    { x: new Date(2020, 6), y: 101940 },
                    { x: new Date(2020, 7), y: 12767 },
                    { x: new Date(2020, 8), y: 131764 },
                    { x: new Date(2020, 9), y: 106582 },
                    { x: new Date(2020, 10), y: 90754 },
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
                    { x: new Date(2020, 0), y: 1327 },
                    { x: new Date(2020, 1), y: 1938 },
                    { x: new Date(2020, 2), y: 1105 },
                    { x: new Date(2020, 3), y: 1467 },
                    { x: new Date(2020, 4), y: 7060 },
                    { x: new Date(2020, 5), y: 15207 },
                    { x: new Date(2020, 6), y: 5510 },
                    { x: new Date(2020, 7), y: 731 },
                    { x: new Date(2020, 8), y: 7521 },
                    { x: new Date(2020, 9), y: 6026 },
                    { x: new Date(2020, 10), y: 5278 },
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
                    { x: new Date(2020, 1), y: 36910 },
                    { x: new Date(2020, 2), y: 36255 },
                    { x: new Date(2020, 3), y: 51745 },
                    { x: new Date(2020, 4), y: 108456 },
                    { x: new Date(2020, 5), y: 253022 },
                    { x: new Date(2020, 6), y: 110646 },
                    { x: new Date(2020, 7), y: 110547 },
                    { x: new Date(2020, 8), y: 141724 },
                    { x: new Date(2020, 9), y: 115019 },
                    { x: new Date(2020, 10), y: 99796 },
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
                    { x: new Date(2020, 0), y: 12139 },
                    { x: new Date(2020, 1), y: 12489 },
                    { x: new Date(2020, 2), y: 12824 },
                    { x: new Date(2020, 3), y: 12856 },
                    { x: new Date(2020, 4), y: 13134 },
                    { x: new Date(2020, 5), y: 14162 },
                    { x: new Date(2020, 6), y: 14255 },
                    { x: new Date(2020, 7), y: 14489 },
                    { x: new Date(2020, 8), y: 14748 },
                    { x: new Date(2020, 9), y: 15074 },
                    { x: new Date(2020, 10), y: 15372 },
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
                    { x: new Date(2020, 0), y: 279 },
                    { x: new Date(2020, 1), y: 350 },
                    { x: new Date(2020, 2), y: 335 },
                    { x: new Date(2020, 3), y: 32 },
                    { x: new Date(2020, 4), y: 278 },
                    { x: new Date(2020, 5), y: 1028 },
                    { x: new Date(2020, 6), y: 93 },
                    { x: new Date(2020, 7), y: 234 },
                    { x: new Date(2020, 8), y: 259 },
                    { x: new Date(2020, 9), y: 259 },
                    { x: new Date(2020, 10), y: 298 },
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
                    { x: new Date(2020, 0), y: 63 },
                    { x: new Date(2020, 1), y: 47 },
                    { x: new Date(2020, 2), y: 48 },
                    { x: new Date(2020, 3), y: 105 },
                    { x: new Date(2020, 4), y: 297 },
                    { x: new Date(2020, 5), y: 787 },
                    { x: new Date(2020, 6), y: 143 },
                    { x: new Date(2020, 7), y: 37 },
                    { x: new Date(2020, 8), y: 150 },
                    { x: new Date(2020, 9), y: 306 },
                    { x: new Date(2020, 10), y: 262 },
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
                    { x: new Date(2020, 0), y: 22 },
                    { x: new Date(2020, 1), y: 24 },
                    { x: new Date(2020, 2), y: 27 },
                    { x: new Date(2020, 3), y: 51 },
                    { x: new Date(2020, 4), y: 85 },
                    { x: new Date(2020, 5), y: 163 },
                    { x: new Date(2020, 6), y: 75 },
                    { x: new Date(2020, 7), y: 6 },
                    { x: new Date(2020, 8), y: 102 },
                    { x: new Date(2020, 9), y: 93 },
                    { x: new Date(2020, 10), y: 72 },
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
                { x: new Date(2020, 0), y: 1390 },
                { x: new Date(2020, 1), y: 1985 },
                { x: new Date(2020, 2), y: 1153 },
                { x: new Date(2020, 3), y: 1572 },
                { x: new Date(2020, 4), y: 7357 },
                { x: new Date(2020, 5), y: 15994 },
                { x: new Date(2020, 6), y: 5653 },
                { x: new Date(2020, 7), y: 768 },
                { x: new Date(2020, 8), y: 7671 },
                { x: new Date(2020, 9), y: 6332 },
                { x: new Date(2020, 10), y: 5540 },
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
                    { x: new Date(2020, 0), y: 52159 },
                    { x: new Date(2020, 1), y: 94801 },
                    { x: new Date(2020, 2), y: 18300 },
                    { x: new Date(2020, 3), y: 18142 },
                    { x: new Date(2020, 4), y: 27729 },
                    { x: new Date(2020, 5), y: 57143 },
                    { x: new Date(2020, 6), y: 9968 },
                    { x: new Date(2020, 7), y: 2787 },
                    { x: new Date(2020, 8), y: 18496 },
                    { x: new Date(2020, 9), y: 22511 },
                    { x: new Date(2020, 10), y: 23021 },
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
                    { x: new Date(2020, 0), y: 200 },
                    { x: new Date(2020, 1), y: 323 },
                    { x: new Date(2020, 2), y: 120 },
                    { x: new Date(2020, 3), y: 91 },
                    { x: new Date(2020, 4), y: 119 },
                    { x: new Date(2020, 5), y: 160 },
                    { x: new Date(2020, 6), y: 49 },
                    { x: new Date(2020, 7), y: 10 },
                    { x: new Date(2020, 8), y: 83 },
                    { x: new Date(2020, 9), y: 110 },
                    { x: new Date(2020, 10), y: 75 },
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
                { x: new Date(2020, 0), y: 20 },
                { x: new Date(2020, 1), y: 61 },
                { x: new Date(2020, 2), y: 71 },
                { x: new Date(2020, 3), y: 184 },
                { x: new Date(2020, 4), y: 188 },
                { x: new Date(2020, 5), y: 929 },
                { x: new Date(2020, 6), y: 749 },
                { x: new Date(2020, 7), y: 17 },
                { x: new Date(2020, 8), y: 267 },
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