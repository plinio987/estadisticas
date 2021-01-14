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
                indexLabelFontColor: "darkSlateGray",
                type: "column",
                name: "Total seguidores",
                showInLegend: true,
                color: "#de8cf0",
                xValueFormatString: "MMM, YYYY",
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2020, 0), y: 50030 },
                    { x: new Date(2020, 1), y: 50368 },
                    { x: new Date(2020, 2), y: 53477 },
                    { x: new Date(2020, 3), y: 61253 },
                    { x: new Date(2020, 4), y: 62275 },
                    { x: new Date(2020, 5), y: 63405 },
                    { x: new Date(2020, 6), y: 64866 },
                    { x: new Date(2020, 7), y: 73436 },
                    { x: new Date(2020, 8), y: 99002 },
                    { x: new Date(2020, 9), y: 116617 },
                    { x: new Date(2020, 10), y: 131300 },
                    { x: new Date(2020, 11), y: 149269 }
                ]
            },
            {
                type: "splineArea",
                name: "Alcance general",
                color: "#bed905",
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2020, 0), y: 736117 },
                    { x: new Date(2020, 1), y: 650214 },
                    { x: new Date(2020, 2), y: 1229718 },
                    { x: new Date(2020, 3), y: 7202417 },
                    { x: new Date(2020, 4), y: 2968566 },
                    { x: new Date(2020, 5), y: 1819292 },
                    { x: new Date(2020, 6), y: 2550944 },
                    { x: new Date(2020, 7), y: 3940938 },
                    { x: new Date(2020, 8), y: 15732467 },
                    { x: new Date(2020, 9), y: 14583460 },
                    { x: new Date(2020, 10), y: 13470478 },
                    { x: new Date(2020, 11), y: 16224273 }
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
            type: "splineArea",
            name: "Promedio Engagement general",
            markerBorderColor: "white",
            color: "#de8cf0",
            markerBorderThickness: 2,
            showInLegend: true,
            yValueFormatString: "###0.00'%'",
            xValueFormatString: "MMMM YYYY",
            dataPoints: [
                { x: new Date(2020, 0), y: 1.39 },
                { x: new Date(2020, 1), y: 1.55 },
                { x: new Date(2020, 2), y: 1.65 },
                { x: new Date(2020, 3), y: 2.26 },
                { x: new Date(2020, 4), y: 1.38 },
                { x: new Date(2020, 5), y: 1.67 },
                { x: new Date(2020, 6), y: 2.06 },
                { x: new Date(2020, 7), y: 4.18 },
                { x: new Date(2020, 8), y: 4.34 },
                { x: new Date(2020, 9), y: 3.45 },
                { x: new Date(2020, 10), y: 3.27 },
                { x: new Date(2020, 11), y: 3.33 }

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