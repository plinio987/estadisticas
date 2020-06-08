var chart1 = new CanvasJS.Chart("alcancePublicaciones", {
    animationEnabled: true,
    backgroundColor: "#F1e0d6",
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
            name: "Engaged users",
            markerBorderColor: "white",
            color: "#bb1924",
            markerBorderThickness: 2,
            showInLegend: true,
            yValueFormatString: "##0.00'%'",
            xValueFormatString: "MMMM YYYY",
            dataPoints: [
                { x: new Date(2019, 0), y: 0 },
                { x: new Date(2019, 1), y: 0 },
                { x: new Date(2019, 2), y: 0 },
                { x: new Date(2019, 3), y: 0 },
                { x: new Date(2019, 4), y: 0 },
                { x: new Date(2019, 5), y: 0 },
                { x: new Date(2019, 6), y: 0 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 0 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }
            ]
        },

        {
            type: "area",
            name: "Alcance Total",
            color: "#36688d",
            showInLegend: true,
            yValueFormatString: "##00.00'%'",
            dataPoints: [
                { x: new Date(2019, 0), y: 0 },
                { x: new Date(2019, 1), y: 0 },
                { x: new Date(2019, 2), y: 0 },
                { x: new Date(2019, 3), y: 0 },
                { x: new Date(2019, 4), y: 0 },
                { x: new Date(2019, 5), y: 0 },
                { x: new Date(2019, 6), y: 0 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 0 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }
            ]
        }
    ]
});
chart1.render();