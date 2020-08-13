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
                name: "Alcance general",
                color: "#bed905",
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2020, 0), y: 4214005 },
                    { x: new Date(2020, 1), y: 4372873 },
                    { x: new Date(2020, 2), y: 4223235 },
                    { x: new Date(2020, 3), y: 34431707 },
                    { x: new Date(2020, 4), y: 17773996 },
                    { x: new Date(2020, 5), y: 12808802 },
                    { x: new Date(2020, 6), y: 19248168 },
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
                markerBorderColor: "white",
                color: "#de8cf0",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2020, 0), y: 393519 },
                    { x: new Date(2020, 1), y: 392375 },
                    { x: new Date(2020, 2), y: 408603 },
                    { x: new Date(2020, 3), y: 453255 },
                    { x: new Date(2020, 4), y: 463489 },
                    { x: new Date(2020, 6), y: 474168 },
                    { x: new Date(2020, 7), y: 484415 },
                    { x: new Date(2020, 8), y: 0 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 0 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            }


        ]
    });
    chart1.render();

    var chart2 = new CanvasJS.Chart("engagement", {
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
            type: "splineArea",
            name: "Engagement general",
            showInLegend: true,
            color: "#bed905",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "###0.00'%'",
            dataPoints: [
                { x: new Date(2020, 0), y: 149.90 },
                { x: new Date(2020, 1), y: 178.90 },
                { x: new Date(2020, 2), y: 530.83 },
                { x: new Date(2020, 3), y: 263.56 },
                { x: new Date(2020, 4), y: 348.81 },
                { x: new Date(2020, 5), y: 245.43 },
                { x: new Date(2020, 5), y: 237.62 },
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