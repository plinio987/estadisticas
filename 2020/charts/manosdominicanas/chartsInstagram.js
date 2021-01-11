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
                    { x: new Date(2020, 0), y: 3.98 },
                    { x: new Date(2020, 1), y: 6.64 },
                    { x: new Date(2020, 2), y: 3.95 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 5.57 },
                    { x: new Date(2020, 5), y: 5.46 },
                    { x: new Date(2020, 6), y: 5.00 },
                    { x: new Date(2020, 7), y: 4.04 },
                    { x: new Date(2020, 8), y: 5.04 },
                    { x: new Date(2020, 9), y: 5.88 },
                    { x: new Date(2020, 10), y: 5.88 },
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
                    { x: new Date(2020, 0), y: 6.74 },
                    { x: new Date(2020, 1), y: 12.32 },
                    { x: new Date(2020, 2), y: 4.50 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 11.81 },
                    { x: new Date(2020, 5), y: 15.53 },
                    { x: new Date(2020, 6), y: 16.44 },
                    { x: new Date(2020, 7), y: 0.52 },
                    { x: new Date(2020, 8), y: 27.64 },
                    { x: new Date(2020, 9), y: 27.27 },
                    { x: new Date(2020, 10), y: 17.14 },
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
                    { x: new Date(2020, 0), y: 6.58 },
                    { x: new Date(2020, 1), y: 12.13 },
                    { x: new Date(2020, 2), y: 4.40 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 11.47 },
                    { x: new Date(2020, 5), y: 15.09 },
                    { x: new Date(2020, 6), y: 16.00 },
                    { x: new Date(2020, 7), y: 0.50 },
                    { x: new Date(2020, 8), y: 26.84 },
                    { x: new Date(2020, 9), y: 27.01 },
                    { x: new Date(2020, 10), y: 16.41 },
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
                    { x: new Date(2020, 0), y: 0.16 },
                    { x: new Date(2020, 1), y: 0.19 },
                    { x: new Date(2020, 2), y: 0.10 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 0.34 },
                    { x: new Date(2020, 5), y: 0.44 },
                    { x: new Date(2020, 6), y: 0.44 },
                    { x: new Date(2020, 7), y: 0.03 },
                    { x: new Date(2020, 8), y: 0.80 },
                    { x: new Date(2020, 9), y: 0.76 },
                    { x: new Date(2020, 10), y: 0.73 },
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
                    { x: new Date(2020, 0), y: 24147 },
                    { x: new Date(2020, 1), y: 26832 },
                    { x: new Date(2020, 2), y: 16463 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 30651 },
                    { x: new Date(2020, 5), y: 40976 },
                    { x: new Date(2020, 6), y: 47397 },
                    { x: new Date(2020, 7), y: 1880 },
                    { x: new Date(2020, 8), y: 80606 },
                    { x: new Date(2020, 9), y: 71249 },
                    { x: new Date(2020, 10), y: 45468 },
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
                    { x: new Date(2020, 0), y: 939 },
                    { x: new Date(2020, 1), y: 1753 },
                    { x: new Date(2020, 2), y: 636 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 1659 },
                    { x: new Date(2020, 5), y: 2175 },
                    { x: new Date(2020, 6), y: 2305 },
                    { x: new Date(2020, 7), y: 72 },
                    { x: new Date(2020, 8), y: 3949 },
                    { x: new Date(2020, 9), y: 4073 },
                    { x: new Date(2020, 10), y: 2561 },
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
                    { x: new Date(2020, 1), y: 30994 },
                    { x: new Date(2020, 2), y: 17768 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 32604 },
                    { x: new Date(2020, 5), y: 45279 },
                    { x: new Date(2020, 6), y: 51619 },
                    { x: new Date(2020, 7), y: 1932 },
                    { x: new Date(2020, 8), y: 88679 },
                    { x: new Date(2020, 9), y: 76014 },
                    { x: new Date(2020, 10), y: 53119 },
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
                    { x: new Date(2020, 0), y: 14267 },
                    { x: new Date(2020, 1), y: 14455 },
                    { x: new Date(2020, 2), y: 14465 },
                    { x: new Date(2020, 3), y: 14451 },
                    { x: new Date(2020, 4), y: 14459 },
                    { x: new Date(2020, 5), y: 14414 },
                    { x: new Date(2020, 6), y: 14402 },
                    { x: new Date(2020, 7), y: 14511 },
                    { x: new Date(2020, 8), y: 14709 },
                    { x: new Date(2020, 9), y: 15079 },
                    { x: new Date(2020, 10), y: 15606 },
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
                    { x: new Date(2020, 0), y: 370 },
                    { x: new Date(2020, 1), y: 188 },
                    { x: new Date(2020, 2), y: 10 },
                    { x: new Date(2020, 3), y: 14 },
                    { x: new Date(2020, 4), y: 8 },
                    { x: new Date(2020, 5), y: -45 },
                    { x: new Date(2020, 6), y: -12 },
                    { x: new Date(2020, 7), y: 109 },
                    { x: new Date(2020, 8), y: 198 },
                    { x: new Date(2020, 9), y: 370 },
                    { x: new Date(2020, 10), y: 527 },
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
                name: "Comentarios",
                markerBorderColor: "white",
                color: "#F1931b",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2020, 0), y: 23 },
                    { x: new Date(2020, 1), y: 4 },
                    { x: new Date(2020, 2), y: 15 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 49 },
                    { x: new Date(2020, 5), y: 63 },
                    { x: new Date(2020, 6), y: 63 },
                    { x: new Date(2020, 7), y: 4 },
                    { x: new Date(2020, 8), y: 118 },
                    { x: new Date(2020, 9), y: 114 },
                    { x: new Date(2020, 10), y: 114 },
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
                    { x: new Date(2020, 0), y: 11 },
                    { x: new Date(2020, 1), y: 12 },
                    { x: new Date(2020, 2), y: 11 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 16 },
                    { x: new Date(2020, 5), y: 26 },
                    { x: new Date(2020, 6), y: 32 },
                    { x: new Date(2020, 7), y: 1 },
                    { x: new Date(2020, 8), y: 40 },
                    { x: new Date(2020, 9), y: 28 },
                    { x: new Date(2020, 10), y: 18 },
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
                { x: new Date(2020, 0), y: 982 },
                { x: new Date(2020, 1), y: 1822 },
                { x: new Date(2020, 2), y: 668 },
                { x: new Date(2020, 3), y: 0 },
                { x: new Date(2020, 4), y: 1758 },
                { x: new Date(2020, 5), y: 2238 },
                { x: new Date(2020, 6), y: 2368 },
                { x: new Date(2020, 7), y: 76 },
                { x: new Date(2020, 8), y: 4066 },
                { x: new Date(2020, 9), y: 4187 },
                { x: new Date(2020, 10), y: 2675 },
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
                    { x: new Date(2020, 0), y: 3265 },
                    { x: new Date(2020, 1), y: 22677 },
                    { x: new Date(2020, 2), y: 1308 },
                    { x: new Date(2020, 3), y: 638 },
                    { x: new Date(2020, 4), y: 122 },
                    { x: new Date(2020, 5), y: 164 },
                    { x: new Date(2020, 6), y: 1744 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 992 },
                    { x: new Date(2020, 9), y: 684 },
                    { x: new Date(2020, 10), y: 27849 },
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
                    { x: new Date(2020, 0), y: 10 },
                    { x: new Date(2020, 1), y: 60 },
                    { x: new Date(2020, 2), y: 25 },
                    { x: new Date(2020, 3), y: 11 },
                    { x: new Date(2020, 4), y: 29 },
                    { x: new Date(2020, 5), y: 12 },
                    { x: new Date(2020, 6), y: 13 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 104 },
                    { x: new Date(2020, 9), y: 39 },
                    { x: new Date(2020, 10), y: 100 },
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
                { x: new Date(2020, 4), y: 42 },
                { x: new Date(2020, 5), y: 65 },
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