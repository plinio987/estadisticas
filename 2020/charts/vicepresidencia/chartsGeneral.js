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
                name: "Alcance general",
                showInLegend: true,
                color: "#de8cf0",
                xValueFormatString: "MMM, YYYY",
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2020, 0), y: 1845616 },
                    { x: new Date(2020, 1), y: 2121926 },
                    { x: new Date(2020, 2), y: 1390181 },
                    { x: new Date(2020, 3), y: 13232084 },
                    { x: new Date(2020, 4), y: 7734120 },
                    { x: new Date(2020, 5), y: 3347772 },
                    { x: new Date(2020, 6), y: 2619969 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 0 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            },
            {
                type: "splineArea",
                name: "Total seguidores",
                color: "#bed905",
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2020, 0), y: 213759 },
                    { x: new Date(2020, 1), y: 215391 },
                    { x: new Date(2020, 2), y: 221664 },
                    { x: new Date(2020, 3), y: 244263 },
                    { x: new Date(2020, 4), y: 250701 },
                    { x: new Date(2020, 5), y: 254176 },
                    { x: new Date(2020, 6), y: 259873 },
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
                { x: new Date(2020, 0), y: 12.80 },
                { x: new Date(2020, 1), y: 9.20 },
                { x: new Date(2020, 2), y: 18.22 },
                { x: new Date(2020, 3), y: 25.67 },
                { x: new Date(2020, 4), y: 11.99 },
                { x: new Date(2020, 5), y: 10.16 },
                { x: new Date(2020, 6), y: 9.42 },
                { x: new Date(2020, 7), y: 0 },
                { x: new Date(2020, 8), y: 0 },
                { x: new Date(2020, 9), y: 0 },
                { x: new Date(2020, 10), y: 0 },
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