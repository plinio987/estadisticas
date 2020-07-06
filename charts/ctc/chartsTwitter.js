/*   *****************************************
            CHARTS TWITTER
  **************************************** */


window.onload = function() {

    var chart1 = new CanvasJS.Chart("engagement", {
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
                name: "Engagement absoluto",
                markerBorderColor: "white",
                color: "#728ca3",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "##0.00'%'",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2020, 0), y: 2.11 },
                    { x: new Date(2020, 1), y: 3.47 },
                    { x: new Date(2020, 2), y: 3.71 },
                    { x: new Date(2020, 3), y: 7.55 },
                    { x: new Date(2020, 4), y: 6.14 },
                    { x: new Date(2020, 5), y: 4.50 },
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
                name: "Engagement rate",
                color: "#73c0f4",
                showInLegend: true,
                yValueFormatString: "##0.00'%'",
                dataPoints: [
                    { x: new Date(2020, 0), y: 0.73 },
                    { x: new Date(2020, 1), y: 0.99 },
                    { x: new Date(2020, 2), y: 1.14 },
                    { x: new Date(2020, 3), y: 1.51 },
                    { x: new Date(2020, 4), y: 1.29 },
                    { x: new Date(2020, 5), y: 1.95 },
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

    var chart22 = new CanvasJS.Chart("alcance", {
        colorset: "#3CB371",
        backgroundColor: "#fff",
        //exportEnabled: true,
        animationEnabled: true,
        //theme: "light1",  "light1", "light2", "dark1", "dark2"
        title: {
            text: "",
            fontColor: "#222",
            fontSize: 20,
            fontFamily: "arial",
            fontStyle: "",
        },

        axisX: {
            interval: 1,
            intervalType: "month",
            labelFontColor: "#222",
            labelFontStyle: "italic",
            valueFormatString: "MMM"

        },
        axisY: {
            title: "Totales",
            titleFontColor: "#222",
            suffix: "M",
            labelFontColor: "#222",
            labelFontStyle: "italic",
            gridColor: "#fff"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            type: "area",
            color: "#73c0f4",
            name: "Impresiones",
            showInLegend: true,
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2020, 0), y: 27700 },
                { x: new Date(2020, 1), y: 26400 },
                { x: new Date(2020, 2), y: 24200 },
                { x: new Date(2020, 3), y: 37581 },
                { x: new Date(2020, 4), y: 35836 },
                { x: new Date(2020, 5), y: 17315 },
                { x: new Date(2020, 6), y: 0 },
                { x: new Date(2020, 7), y: 0 },
                { x: new Date(2020, 8), y: 0 },
                { x: new Date(2020, 9), y: 0 },
                { x: new Date(2020, 10), y: 0 },
                { x: new Date(2020, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart22.render();

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
                name: "Nuevos seguidores",
                markerBorderColor: "white",
                color: "#728ca3",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2020, 0), y: 2 },
                    { x: new Date(2020, 1), y: -17 },
                    { x: new Date(2020, 2), y: -42 },
                    { x: new Date(2020, 3), y: 34 },
                    { x: new Date(2020, 4), y: 8 },
                    { x: new Date(2020, 5), y: -1 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 0 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            },

            {
                indexLabelFontColor: "darkSlateGray",
                type: "area",
                color: "#73c0f4",
                name: "Total de seguidores",
                showInLegend: true,
                xValueFormatString: "MMM, YYYY",
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2020, 0), y: 7531 },
                    { x: new Date(2020, 1), y: 7514 },
                    { x: new Date(2020, 2), y: 7472 },
                    { x: new Date(2020, 3), y: 7506 },
                    { x: new Date(2020, 4), y: 7514 },
                    { x: new Date(2020, 5), y: 7513 },
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
    chart2.render();

    var chart3 = new CanvasJS.Chart("interacciones", {
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
                type: "area",
                name: "Total interacciones",
                markerBorderColor: "white",
                color: "#728ca3",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2020, 0), y: 159 },
                    { x: new Date(2020, 1), y: 261 },
                    { x: new Date(2020, 2), y: 277 },
                    { x: new Date(2020, 3), y: 567 },
                    { x: new Date(2020, 4), y: 461 },
                    { x: new Date(2020, 5), y: 338 },
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
                name: "Tuits mensuales",
                color: "#73c0f4",
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2020, 0), y: 29 },
                    { x: new Date(2020, 1), y: 64 },
                    { x: new Date(2020, 2), y: 43 },
                    { x: new Date(2020, 3), y: 33 },
                    { x: new Date(2020, 4), y: 40 },
                    { x: new Date(2020, 5), y: 52 },
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
    chart3.render();


    var chart4 = new CanvasJS.Chart("crrm", {
        animationEnabled: true,
        exportEnabled: false,
        theme: "light2",
        title: {
            text: ""
        },
        data: [{
            type: "pyramid",
            yValueFormatString: "#,###",
            indexLabelFontColor: "black",
            gridColor: "#fff",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}",
            //reversed: true, // Reverses the pyramid
            dataPoints: [
                { y: 35, label: "Clicks" },
                { y: 819, label: "Me gusta" },
                { y: 41, label: "Retuits" },
                { y: 4, label: "Respuestas" }


            ]
        }]
    });
    chart4.render();

    var chart5 = new CanvasJS.Chart("visitasMenciones", {
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
                name: "Visitas al perfil",
                markerBorderColor: "white",
                color: "#728ca3",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2020, 0), y: 272 },
                    { x: new Date(2020, 1), y: 299 },
                    { x: new Date(2020, 2), y: 346 },
                    { x: new Date(2020, 3), y: 834 },
                    { x: new Date(2020, 4), y: 740 },
                    { x: new Date(2020, 5), y: 701 },
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
                name: "Menciones a la cuenta",
                color: "#73c0f4",
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2020, 0), y: 33 },
                    { x: new Date(2020, 1), y: 21 },
                    { x: new Date(2020, 2), y: 17 },
                    { x: new Date(2020, 3), y: 37 },
                    { x: new Date(2020, 4), y: 33 },
                    { x: new Date(2020, 5), y: 209 },
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
    chart5.render();

    var chart6 = new CanvasJS.Chart("acomuladocrrm", {
        //theme:"light2",
        animationEnabled: true,
        title: {
            text: ""
        },
        axisY: {
            includeZero: false,
            title: "",
            suffix: "m",
            labelFontColor: "#222",
            gridColor: "#fff"

        },
        toolTip: {
            shared: "true"
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
                type: "spline",
                visible: true,
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                color: "#73c0f4",
                name: "Retuits",
                dataPoints: [
                    { label: "Ene", y: 26 },
                    { label: "Feb", y: 36 },
                    { label: "Mar", y: 52 },
                    { label: "Apr", y: 116 },
                    { label: "May", y: 87 },
                    { label: "Jun", y: 41 },
                    { label: "Jul", y: 0 },
                    { label: "Agt", y: 0 },
                    { label: "Oct", y: 0 },
                    { label: "Nov", y: 0 },
                    { label: "Dic", y: 0 }
                ]
            },
            {
                type: "spline",
                visible: true,
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                color: "#F28a30",
                name: "Me gusta",
                dataPoints: [
                    { label: "Ene", y: 65 },
                    { label: "Feb", y: 119 },
                    { label: "Mar", y: 107 },
                    { label: "Apr", y: 214 },
                    { label: "May", y: 191 },
                    { label: "Jun", y: 819 },
                    { label: "Jul", y: 0 },
                    { label: "Agt", y: 0 },
                    { label: "Oct", y: 0 },
                    { label: "Nov", y: 0 },
                    { label: "Dic", y: 0 }
                ]
            },
            {
                type: "spline",
                visible: true,
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                color: "#728ca3",
                name: "Clicks",
                dataPoints: [
                    { label: "Ene", y: 6 },
                    { label: "Feb", y: 3 },
                    { label: "Mar", y: 46 },
                    { label: "Apr", y: 82 },
                    { label: "May", y: 59 },
                    { label: "Jun", y: 35 },
                    { label: "Jul", y: 0 },
                    { label: "Agt", y: 0 },
                    { label: "Oct", y: 0 },
                    { label: "Nov", y: 0 },
                    { label: "Dic", y: 0 }
                ]
            },

            {
                type: "spline",
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                color: "#bb1924",
                name: "Respuestas",
                dataPoints: [
                    { label: "Ene", y: 7 },
                    { label: "Feb", y: 40 },
                    { label: "Mar", y: 13 },
                    { label: "Apr", y: 22 },
                    { label: "May", y: 8 },
                    { label: "Jun", y: 4 },
                    { label: "Jul", y: 0 },
                    { label: "Agt", y: 0 },
                    { label: "Oct", y: 0 },
                    { label: "Nov", y: 0 },
                    { label: "Dic", y: 0 }
                ]
            }
        ]
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