window.onload = function() {

    var chart1 = new CanvasJS.Chart("alcanceGeneral", {
        animationEnabled: true,
        backgroundColor: "#fff",
        //theme: "light2",
        title: {
            text: "",
            fontSize: 20,
            fontFamily: "arial",

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
                name: "Promedio Engagement general",
                markerBorderColor: "white",
                color: "#de8cf0",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "###0.00'%'",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2020, 0), y: 12.03 },
                    { x: new Date(2020, 1), y: 7.65 },
                    { x: new Date(2020, 2), y: 10.57 },
                    { x: new Date(2020, 3), y: 17.44 },
                    { x: new Date(2020, 4), y: 10.62 },
                    { x: new Date(2020, 5), y: 11.25 },
                    { x: new Date(2020, 6), y: 8.59 },
                    { x: new Date(2020, 7), y: 17.81 },
                    { x: new Date(2020, 8), y: 10.95 },
                    { x: new Date(2020, 9), y: 52.33 },
                    { x: new Date(2020, 10), y: 8.00 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            },

            {
                type: "splineArea",
                name: "Alcance general",
                color: "#bed905",
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2020, 0), y: 6200 },
                    { x: new Date(2020, 1), y: 8873 },
                    { x: new Date(2020, 2), y: 9869 },
                    { x: new Date(2020, 3), y: 2575 },
                    { x: new Date(2020, 4), y: 12787 },
                    { x: new Date(2020, 5), y: 8756 },
                    { x: new Date(2020, 6), y: 5272 },
                    { x: new Date(2020, 7), y: 5203 },
                    { x: new Date(2020, 8), y: 48464 },
                    { x: new Date(2020, 9), y: 11289 },
                    { x: new Date(2020, 10), y: 28032 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            }
        ]
    });
    chart1.render();

    var chart2 = new CanvasJS.Chart("totalSeguidores", {
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
            type: "column",
            name: "Total seguidores",
            showInLegend: true,
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2020, 0), y: 599 },
                { x: new Date(2020, 1), y: 639 },
                { x: new Date(2020, 2), y: 823 },
                { x: new Date(2020, 3), y: 1083 },
                { x: new Date(2020, 4), y: 1156 },
                { x: new Date(2020, 5), y: 1197 },
                { x: new Date(2020, 6), y: 1234 },
                { x: new Date(2020, 7), y: 1434 },
                { x: new Date(2020, 8), y: 3061 },
                { x: new Date(2020, 9), y: 3237 },
                { x: new Date(2020, 10), y: 3660 },
                { x: new Date(2020, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart2.render();


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