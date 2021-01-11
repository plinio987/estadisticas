var chart3 = new CanvasJS.Chart("alcanceGeneral", {
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
            type: "splineArea",
            name: "Alcance total",
            color: "#0aaff1",
            showInLegend: true,
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2020, 0), y: 1859060 },
                { x: new Date(2020, 1), y: 1678192 },
                { x: new Date(2020, 2), y: 2208004 },
                { x: new Date(2020, 3), y: 8097451 },
                { x: new Date(2020, 4), y: 3983755 },
                { x: new Date(2020, 5), y: 3163131 },
                { x: new Date(2020, 6), y: 3826593 },
                { x: new Date(2020, 7), y: 4883976 },
                { x: new Date(2020, 8), y: 16971595 },
                { x: new Date(2020, 9), y: 15692545 },
                { x: new Date(2020, 10), y: 0 },
                { x: new Date(2020, 11), y: 0 }
            ]
        },
        {
            type: "column",
            name: "Total de seguidores",
            markerBorderColor: "white",
            color: "#ff662a",
            markerBorderThickness: 2,
            showInLegend: true,
            yValueFormatString: "#,###",
            xValueFormatString: "MMMM YYYY",
            dataPoints: [
                { x: new Date(2020, 0), y: 136666 },
                { x: new Date(2020, 1), y: 137522 },
                { x: new Date(2020, 2), y: 141040 },
                { x: new Date(2020, 3), y: 149061 },
                { x: new Date(2020, 4), y: 150395 },
                { x: new Date(2020, 5), y: 152770 },
                { x: new Date(2020, 6), y: 154343 },
                { x: new Date(2020, 7), y: 163402 },
                { x: new Date(2020, 8), y: 195910 },
                { x: new Date(2020, 9), y: 214349 },
                { x: new Date(2020, 10), y: 0 },
                { x: new Date(2020, 11), y: 0 }
            ]
        }

    ]
});
chart3.render();


var chart7 = new CanvasJS.Chart("engagement", {
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
        title: "% Engagement",
        labelFontColor: "#000",
        titleFontColor: "#4F81BC",
        gridColor: "#fff"
    },
    data: [{
        type: "splineArea",
        xValueFormatString: "MMM, YYYY",
        yValueFormatString: "###0.00'%'",
        color: "#0aaff1",
        dataPoints: [
            { x: new Date(2020, 0), y: 22.15 },
            { x: new Date(2020, 1), y: 22.20 },
            { x: new Date(2020, 2), y: 19.90 },
            { x: new Date(2020, 3), y: 23.13 },
            { x: new Date(2020, 4), y: 83.82 },
            { x: new Date(2020, 5), y: 26.22 },
            { x: new Date(2020, 6), y: 21.50 },
            { x: new Date(2020, 7), y: 35.28 },
            { x: new Date(2020, 8), y: 30.03 },
            { x: new Date(2020, 9), y: 102.25 },
            { x: new Date(2020, 10), y: 0 },
            { x: new Date(2020, 11), y: 0 }
        ]
    }]
});

chart7.render();

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