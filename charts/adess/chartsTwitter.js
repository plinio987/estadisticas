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
                    { x: new Date(2020, 0), y: 16.64 },
                    { x: new Date(2020, 1), y: 14.31 },
                    { x: new Date(2020, 2), y: 48.17 },
                    { x: new Date(2020, 3), y: 117.99 },
                    { x: new Date(2020, 4), y: 66.95 },
                    { x: new Date(2020, 5), y: 0 },
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
                    { x: new Date(2020, 0), y: 1.43 },
                    { x: new Date(2020, 1), y: 1.59 },
                    { x: new Date(2020, 2), y: 2.87 },
                    { x: new Date(2020, 3), y: 0.52 },
                    { x: new Date(2020, 4), y: 0.80 },
                    { x: new Date(2020, 5), y: 0 },
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
            name: "Alcance",
            showInLegend: true,
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2020, 0), y: 21300 },
                { x: new Date(2020, 1), y: 17000 },
                { x: new Date(2020, 2), y: 31600 },
                { x: new Date(2020, 3), y: 642000 },
                { x: new Date(2020, 4), y: 24400 },
                { x: new Date(2020, 5), y: 0 },
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
                    { x: new Date(2020, 0), y: 30 },
                    { x: new Date(2020, 1), y: 24 },
                    { x: new Date(2020, 2), y: 52 },
                    { x: new Date(2020, 3), y: 961 },
                    { x: new Date(2020, 4), y: 83 },
                    { x: new Date(2020, 5), y: 0 },
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
                name: "Total seguidores",
                showInLegend: true,
                xValueFormatString: "MMM, YYYY",
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2020, 0), y: 1833 },
                    { x: new Date(2020, 1), y: 1887 },
                    { x: new Date(2020, 2), y: 1895 },
                    { x: new Date(2020, 3), y: 2846 },
                    { x: new Date(2020, 4), y: 2929 },
                    { x: new Date(2020, 5), y: 0 },
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
                    { x: new Date(2020, 0), y: 305 },
                    { x: new Date(2020, 1), y: 270 },
                    { x: new Date(2020, 2), y: 908 },
                    { x: new Date(2020, 3), y: 3358 },
                    { x: new Date(2020, 4), y: 1961 },
                    { x: new Date(2020, 5), y: 0 },
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
                    { x: new Date(2020, 0), y: 22 },
                    { x: new Date(2020, 1), y: 42 },
                    { x: new Date(2020, 2), y: 42 },
                    { x: new Date(2020, 3), y: 96 },
                    { x: new Date(2020, 4), y: 86 },
                    { x: new Date(2020, 5), y: 0 },
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
                { y: 242, label: "Clicks" },
                { y: 976, label: "Me gusta" },
                { y: 303, label: "Retuits" },
                { y: 242, label: "Respuestas" }


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
                    { x: new Date(2020, 0), y: 679 },
                    { x: new Date(2020, 1), y: 360 },
                    { x: new Date(2020, 2), y: 2404 },
                    { x: new Date(2020, 3), y: 15800 },
                    { x: new Date(2020, 4), y: 4461 },
                    { x: new Date(2020, 5), y: 0 },
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
                    { x: new Date(2020, 0), y: 34 },
                    { x: new Date(2020, 1), y: 14 },
                    { x: new Date(2020, 2), y: 341 },
                    { x: new Date(2020, 3), y: 983 },
                    { x: new Date(2020, 4), y: 221 },
                    { x: new Date(2020, 5), y: 0 },
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
                    { label: "Ene", y: 41 },
                    { label: "Feb", y: 42 },
                    { label: "Mar", y: 62 },
                    { label: "Apr", y: 408 },
                    { label: "May", y: 303 },
                    { label: "Jun", y: 0 },
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
                    { label: "Ene", y: 142 },
                    { label: "Feb", y: 152 },
                    { label: "Mar", y: 171 },
                    { label: "Apr", y: 289 },
                    { label: "May", y: 976 },
                    { label: "Jun", y: 0 },
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
                    { label: "Ene", y: 70 },
                    { label: "Feb", y: 12 },
                    { label: "Mar", y: 264 },
                    { label: "Apr", y: 1300 },
                    { label: "May", y: 242 },
                    { label: "Jun", y: 0 },
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
                    { label: "Ene", y: 0 },
                    { label: "Feb", y: 20 },
                    { label: "Mar", y: 25 },
                    { label: "Apr", y: 295 },
                    { label: "May", y: 138 },
                    { label: "Jun", y: 0 },
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