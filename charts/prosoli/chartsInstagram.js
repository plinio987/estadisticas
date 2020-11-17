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
                name: "Engagement",
                markerBorderColor: "white",
                color: "#F1931b",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "###0.00'%'",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2020, 0), y: 0 },
                    { x: new Date(2020, 1), y: 0 },
                    { x: new Date(2020, 2), y: 0 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 0 },
                    { x: new Date(2020, 5), y: 0 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0.05 },
                    { x: new Date(2020, 9), y: 0.04 },
                    { x: new Date(2020, 10), y: 0 },
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
                    { x: new Date(2020, 0), y: 0 },
                    { x: new Date(2020, 1), y: 0 },
                    { x: new Date(2020, 2), y: 0 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 0 },
                    { x: new Date(2020, 5), y: 0 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 48.41 },
                    { x: new Date(2020, 9), y: 106.01 },
                    { x: new Date(2020, 10), y: 0 },
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
                    { x: new Date(2020, 0), y: 0 },
                    { x: new Date(2020, 1), y: 0 },
                    { x: new Date(2020, 2), y: 0 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 0 },
                    { x: new Date(2020, 5), y: 0 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 1.44 },
                    { x: new Date(2020, 9), y: 0.95 },
                    { x: new Date(2020, 10), y: 0 },
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
                    { x: new Date(2020, 0), y: 0 },
                    { x: new Date(2020, 1), y: 0 },
                    { x: new Date(2020, 2), y: 0 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 0 },
                    { x: new Date(2020, 5), y: 0 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0.00 },
                    { x: new Date(2020, 9), y: 0.01 },
                    { x: new Date(2020, 10), y: 0 },
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
                    { x: new Date(2020, 0), y: 0 },
                    { x: new Date(2020, 1), y: 0 },
                    { x: new Date(2020, 2), y: 0 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 0 },
                    { x: new Date(2020, 5), y: 0 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 483651 },
                    { x: new Date(2020, 9), y: 616820 },
                    { x: new Date(2020, 10), y: 0 },
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
                    { x: new Date(2020, 0), y: 0 },
                    { x: new Date(2020, 1), y: 0 },
                    { x: new Date(2020, 2), y: 0 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 0 },
                    { x: new Date(2020, 5), y: 0 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 22762 },
                    { x: new Date(2020, 9), y: 24574 },
                    { x: new Date(2020, 10), y: 0 },
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
                    { x: new Date(2020, 1), y: 0 },
                    { x: new Date(2020, 2), y: 0 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 0 },
                    { x: new Date(2020, 5), y: 0 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 120724 },
                    { x: new Date(2020, 9), y: 131852 },
                    { x: new Date(2020, 10), y: 0 },
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
                    { x: new Date(2020, 0), y: 0 },
                    { x: new Date(2020, 1), y: 0 },
                    { x: new Date(2020, 2), y: 0 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 0 },
                    { x: new Date(2020, 5), y: 0 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 15846 },
                    { x: new Date(2020, 9), y: 25873 },
                    { x: new Date(2020, 10), y: 0 },
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
                    { x: new Date(2020, 0), y: 0 },
                    { x: new Date(2020, 1), y: 0 },
                    { x: new Date(2020, 2), y: 0 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 0 },
                    { x: new Date(2020, 5), y: 0 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 15846 },
                    { x: new Date(2020, 9), y: 10027 },
                    { x: new Date(2020, 10), y: 0 },
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
                name: "Mensajes pulicaciones",
                markerBorderColor: "white",
                color: "#F1931b",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2020, 0), y: 0 },
                    { x: new Date(2020, 1), y: 0 },
                    { x: new Date(2020, 2), y: 0 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 0 },
                    { x: new Date(2020, 5), y: 0 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 1338 },
                    { x: new Date(2020, 9), y: 2853 },
                    { x: new Date(2020, 10), y: 0 },
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
                    { x: new Date(2020, 0), y: 0 },
                    { x: new Date(2020, 1), y: 0 },
                    { x: new Date(2020, 2), y: 0 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 0 },
                    { x: new Date(2020, 5), y: 0 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 123 },
                    { x: new Date(2020, 9), y: 113 },
                    { x: new Date(2020, 10), y: 0 },
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
                { x: new Date(2020, 0), y: 0 },
                { x: new Date(2020, 1), y: 0 },
                { x: new Date(2020, 2), y: 0 },
                { x: new Date(2020, 3), y: 0 },
                { x: new Date(2020, 4), y: 0 },
                { x: new Date(2020, 5), y: 0 },
                { x: new Date(2020, 6), y: 0 },
                { x: new Date(2020, 7), y: 0 },
                { x: new Date(2020, 8), y: 24100 },
                { x: new Date(2020, 9), y: 27427 },
                { x: new Date(2020, 10), y: 0 },
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
                    { x: new Date(2020, 0), y: 0 },
                    { x: new Date(2020, 1), y: 0 },
                    { x: new Date(2020, 2), y: 0 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 0 },
                    { x: new Date(2020, 5), y: 0 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 115 },
                    { x: new Date(2020, 9), y: 300 },
                    { x: new Date(2020, 10), y: 0 },
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
                    { x: new Date(2020, 0), y: 0 },
                    { x: new Date(2020, 1), y: 0 },
                    { x: new Date(2020, 2), y: 0 },
                    { x: new Date(2020, 3), y: 0 },
                    { x: new Date(2020, 4), y: 0 },
                    { x: new Date(2020, 5), y: 0 },
                    { x: new Date(2020, 6), y: 0 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 322963 },
                    { x: new Date(2020, 9), y: 448996 },
                    { x: new Date(2020, 10), y: 0 },
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
                { x: new Date(2020, 4), y: 0 },
                { x: new Date(2020, 5), y: 0 },
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