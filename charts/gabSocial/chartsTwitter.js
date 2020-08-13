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
                    { x: new Date(2020, 0), y: 164.08 },
                    { x: new Date(2020, 1), y: 154.13 },
                    { x: new Date(2020, 2), y: 110.69 },
                    { x: new Date(2020, 3), y: 170.03 },
                    { x: new Date(2020, 4), y: 53.80 },
                    { x: new Date(2020, 5), y: 60.59 },
                    { x: new Date(2020, 6), y: 59.85 },
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
                    { x: new Date(2020, 0), y: 1.84 },
                    { x: new Date(2020, 1), y: 1.21 },
                    { x: new Date(2020, 2), y: 1.87 },
                    { x: new Date(2020, 3), y: 1.04 },
                    { x: new Date(2020, 4), y: 1.33 },
                    { x: new Date(2020, 5), y: 1.48 },
                    { x: new Date(2020, 6), y: 1.61 },
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
                { x: new Date(2020, 0), y: 52900 },
                { x: new Date(2020, 1), y: 83200 },
                { x: new Date(2020, 2), y: 51500 },
                { x: new Date(2020, 3), y: 178000 },
                { x: new Date(2020, 4), y: 44200 },
                { x: new Date(2020, 5), y: 46900 },
                { x: new Date(2020, 6), y: 40500 },
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
                    { x: new Date(2020, 0), y: 63 },
                    { x: new Date(2020, 1), y: 61 },
                    { x: new Date(2020, 2), y: 216 },
                    { x: new Date(2020, 3), y: 221 },
                    { x: new Date(2020, 4), y: 0 },
                    { x: new Date(2020, 5), y: 56 },
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
                    { x: new Date(2020, 0), y: 593 },
                    { x: new Date(2020, 1), y: 654 },
                    { x: new Date(2020, 2), y: 870 },
                    { x: new Date(2020, 3), y: 1091 },
                    { x: new Date(2020, 4), y: 1091 },
                    { x: new Date(2020, 5), y: 1147 },
                    { x: new Date(2020, 6), y: 1091 },
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
                    { x: new Date(2020, 0), y: 973 },
                    { x: new Date(2020, 1), y: 1008 },
                    { x: new Date(2020, 2), y: 963 },
                    { x: new Date(2020, 3), y: 1855 },
                    { x: new Date(2020, 4), y: 587 },
                    { x: new Date(2020, 5), y: 695 },
                    { x: new Date(2020, 6), y: 653 },
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
                    { x: new Date(2020, 0), y: 84 },
                    { x: new Date(2020, 1), y: 108 },
                    { x: new Date(2020, 2), y: 81 },
                    { x: new Date(2020, 3), y: 129 },
                    { x: new Date(2020, 4), y: 76 },
                    { x: new Date(2020, 5), y: 72 },
                    { x: new Date(2020, 6), y: 89 },
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
                { y: 59, label: "Clicks" },
                { y: 321, label: "Me gusta" },
                { y: 79, label: "Retuits" },
                { y: 19, label: "Respuestas" }


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
                name: "Menciones a la cuenta",
                markerBorderColor: "white",
                color: "#728ca3",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2020, 0), y: 189 },
                    { x: new Date(2020, 1), y: 53 },
                    { x: new Date(2020, 2), y: 248 },
                    { x: new Date(2020, 3), y: 268 },
                    { x: new Date(2020, 4), y: 57 },
                    { x: new Date(2020, 5), y: 184 },
                    { x: new Date(2020, 6), y: 86 },
                    { x: new Date(2020, 7), y: 0 },
                    { x: new Date(2020, 8), y: 0 },
                    { x: new Date(2020, 9), y: 0 },
                    { x: new Date(2020, 10), y: 0 },
                    { x: new Date(2020, 11), y: 0 }
                ]
            },

            {
                type: "area",
                name: "Visitas al perfil",
                color: "#73c0f4",
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2020, 0), y: 653 },
                    { x: new Date(2020, 1), y: 1484 },
                    { x: new Date(2020, 2), y: 1550 },
                    { x: new Date(2020, 3), y: 4247 },
                    { x: new Date(2020, 4), y: 1038 },
                    { x: new Date(2020, 5), y: 824 },
                    { x: new Date(2020, 6), y: 888 },
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
                    { label: "Ene", y: 185 },
                    { label: "Feb", y: 223 },
                    { label: "Mar", y: 129 },
                    { label: "Apr", y: 129 },
                    { label: "May", y: 57 },
                    { label: "Jun", y: 66 },
                    { label: "Jul", y: 79 },
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
                    { label: "Ene", y: 441 },
                    { label: "Feb", y: 537 },
                    { label: "Mar", y: 443 },
                    { label: "Apr", y: 289 },
                    { label: "May", y: 293 },
                    { label: "Jun", y: 324 },
                    { label: "Jul", y: 321 },
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
                    { label: "Ene", y: 18 },
                    { label: "Feb", y: 8 },
                    { label: "Mar", y: 14 },
                    { label: "Apr", y: 868 },
                    { label: "May", y: 65 },
                    { label: "Jun", y: 24 },
                    { label: "Jul", y: 59 },
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
                    { label: "Ene", y: 56 },
                    { label: "Feb", y: 77 },
                    { label: "Mar", y: 48 },
                    { label: "Apr", y: 172 },
                    { label: "May", y: 39 },
                    { label: "Jun", y: 25 },
                    { label: "Jul", y: 19 },
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