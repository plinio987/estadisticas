window.onload = function() {
    var chart1 = new CanvasJS.Chart("visualizacionesMeGustaCompartidos", {
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
                type: "line",
                name: "Vídeos compartidos",
                color: "#F22F08",
                showInLegend: true,
                xValueFormatString: "MMMM",
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2020, 0), y: 88 },
                    { x: new Date(2020, 1), y: 60 },
                    { x: new Date(2020, 2), y: 199 },
                    { x: new Date(2020, 3), y: 428 },
                    { x: new Date(2020, 4), y: 217 },
                    { x: new Date(2020, 5), y: 112 },
                    { x: new Date(2020, 6), y: 55 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 0 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            },
            {
                type: "splineArea",
                name: "Me gusta",
                markerBorderColor: "white",
                color: "#F49f05",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2020, 0), y: 65 },
                    { x: new Date(2020, 1), y: 57 },
                    { x: new Date(2020, 2), y: 246 },
                    { x: new Date(2020, 3), y: 754 },
                    { x: new Date(2020, 4), y: 534 },
                    { x: new Date(2020, 5), y: 233 },
                    { x: new Date(2020, 6), y: 201 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 0 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            },
            {
                type: "area",
                name: "Visualizaciones",
                color: "#73C0F4",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2020, 0), y: 3866 },
                    { x: new Date(2020, 1), y: 4694 },
                    { x: new Date(2020, 2), y: 16242 },
                    { x: new Date(2020, 3), y: 62262 },
                    { x: new Date(2020, 4), y: 23717 },
                    { x: new Date(2020, 5), y: 15362 },
                    { x: new Date(2020, 6), y: 10055 },
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


    chart1.render();
    var chart2 = new CanvasJS.Chart("suscriptores", {
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
                name: "Nuevos suscriptores",
                markerBorderColor: "white",
                color: "#73c0f4",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2020, 0), y: 39 },
                    { x: new Date(2020, 1), y: 25 },
                    { x: new Date(2020, 2), y: 245 },
                    { x: new Date(2020, 3), y: 1689 },
                    { x: new Date(2020, 4), y: 576 },
                    { x: new Date(2020, 5), y: 170 },
                    { x: new Date(2020, 6), y: 136 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 0 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            },

            {
                type: "column",
                name: "Total suscritos",
                color: "#F22F08",
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2020, 0), y: 1505 },
                    { x: new Date(2020, 1), y: 1530 },
                    { x: new Date(2020, 2), y: 1775 },
                    { x: new Date(2020, 3), y: 3464 },
                    { x: new Date(2020, 4), y: 4040 },
                    { x: new Date(2020, 5), y: 4100 },
                    { x: new Date(2020, 6), y: 4250 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 0 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            }
        ]
    });
    chart2.render();

    var chart4 = new CanvasJS.Chart("interacciones", {
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
            color: "#F22F08",
            dataPoints: [
                { x: new Date(2020, 0), y: 159 },
                { x: new Date(2020, 1), y: 120 },
                { x: new Date(2020, 2), y: 474 },
                { x: new Date(2020, 3), y: 1289 },
                { x: new Date(2020, 4), y: 929 },
                { x: new Date(2020, 5), y: 387 },
                { x: new Date(2020, 6), y: 284 },
                { x: new Date(2020, 7), y: 0 },
                { x: new Date(2020, 8), y: 0 },
                { x: new Date(2020, 9), y: 0 },
                { x: new Date(2020, 10), y: 0 },
                { x: new Date(2020, 11), y: 0 }
            ]
        }]
    });

    chart4.render();


    var chart5 = new CanvasJS.Chart("meGusta", {
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
                name: "Me gusta",
                markerBorderColor: "white",
                color: "#73c0f4",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2020, 0), y: 65 },
                    { x: new Date(2020, 1), y: 57 },
                    { x: new Date(2020, 2), y: 246 },
                    { x: new Date(2020, 3), y: 754 },
                    { x: new Date(2020, 4), y: 534 },
                    { x: new Date(2020, 5), y: 233 },
                    { x: new Date(2020, 6), y: 201 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 0 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            },

            {
                type: "splineArea",
                name: "No me gusta",
                color: "#F22F08",
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2020, 0), y: 4 },
                    { x: new Date(2020, 1), y: 2 },
                    { x: new Date(2020, 2), y: 13 },
                    { x: new Date(2020, 3), y: 37 },
                    { x: new Date(2020, 4), y: 58 },
                    { x: new Date(2020, 5), y: 14 },
                    { x: new Date(2020, 6), y: 6 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 0 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            }
        ]
    });
    chart5.render();

    var chart6 = new CanvasJS.Chart("subidos", {
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
            color: "#73c0f4",
            dataPoints: [
                { x: new Date(2020, 0), y: 8 },
                { x: new Date(2020, 1), y: 17 },
                { x: new Date(2020, 2), y: 5 },
                { x: new Date(2020, 3), y: 22 },
                { x: new Date(2020, 4), y: 19 },
                { x: new Date(2020, 5), y: 15 },
                { x: new Date(2020, 6), y: 4 },
                { x: new Date(2020, 7), y: 0 },
                { x: new Date(2020, 8), y: 0 },
                { x: new Date(2020, 9), y: 0 },
                { x: new Date(2020, 10), y: 0 },
                { x: new Date(2020, 11), y: 0 }
            ]
        }]
    });

    chart6.render();

    var chart7 = new CanvasJS.Chart("mensajes", {
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
            type: "column",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            color: "#F22F08",
            dataPoints: [
                { x: new Date(2020, 0), y: 6 },
                { x: new Date(2020, 1), y: 3 },
                { x: new Date(2020, 2), y: 29 },
                { x: new Date(2020, 3), y: 107 },
                { x: new Date(2020, 4), y: 178 },
                { x: new Date(2020, 5), y: 42 },
                { x: new Date(2020, 6), y: 28 },
                { x: new Date(2020, 7), y: 0 },
                { x: new Date(2020, 8), y: 0 },
                { x: new Date(2020, 9), y: 0 },
                { x: new Date(2020, 10), y: 0 },
                { x: new Date(2020, 11), y: 0 }
            ]
        }]
    });

    chart7.render();

    var chart8 = new CanvasJS.Chart("participacion", {
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
            title: "Porcentaje mensual",
            labelFontColor: "#000",
            titleFontColor: "#4F81BC",
            gridColor: "#fff"
        },
        data: [{
            type: "splineArea",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "###0.00'%'",
            color: "#F22F08",
            dataPoints: [
                { x: new Date(2020, 0), y: 2.57 },
                { x: new Date(2020, 1), y: 3.07 },
                { x: new Date(2020, 2), y: 9.15 },
                { x: new Date(2020, 3), y: 17.97 },
                { x: new Date(2020, 4), y: 5.87 },
                { x: new Date(2020, 5), y: 3.75 },
                { x: new Date(2020, 6), y: 2.37 },
                { x: new Date(2020, 7), y: 0 },
                { x: new Date(2020, 8), y: 0 },
                { x: new Date(2020, 9), y: 0 },
                { x: new Date(2020, 10), y: 0 },
                { x: new Date(2020, 11), y: 0 }
            ]
        }]
    });

    chart8.render();




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