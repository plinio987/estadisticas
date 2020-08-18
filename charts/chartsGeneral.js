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
                { x: new Date(2020, 0), y: 2057177 },
                { x: new Date(2020, 1), y: 1925422 },
                { x: new Date(2020, 2), y: 2479275 },
                { x: new Date(2020, 3), y: 8592452 },
                { x: new Date(2020, 4), y: 4684777 },
                { x: new Date(2020, 5), y: 4417027 },
                { x: new Date(2020, 6), y: 4653913 },
                { x: new Date(2020, 7), y: 0 },
                { x: new Date(2020, 8), y: 0 },
                { x: new Date(2020, 9), y: 0 },
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
                { x: new Date(2020, 0), y: 155494 },
                { x: new Date(2020, 1), y: 152411 },
                { x: new Date(2020, 2), y: 159959 },
                { x: new Date(2020, 3), y: 169222 },
                { x: new Date(2020, 4), y: 170982 },
                { x: new Date(2020, 5), y: 173522 },
                { x: new Date(2020, 6), y: 175203 },
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
            { x: new Date(2020, 0), y: 43.50 },
            { x: new Date(2020, 1), y: 35.37 },
            { x: new Date(2020, 2), y: 86.20 },
            { x: new Date(2020, 3), y: 108.77 },
            { x: new Date(2020, 4), y: 213.60 },
            { x: new Date(2020, 5), y: 149.33 },
            { x: new Date(2020, 6), y: 166.95 },
            { x: new Date(2020, 7), y: 0 },
            { x: new Date(2020, 8), y: 0 },
            { x: new Date(2020, 9), y: 0 },
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