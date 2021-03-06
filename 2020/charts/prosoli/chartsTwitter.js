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
                name: "Engagement rate ",
                markerBorderColor: "white",
                color: "#728ca3",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "##0.00'%'",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2020, 0), y: 3.59 },
                    { x: new Date(2020, 1), y: 4.22 },
                    { x: new Date(2020, 2), y: 5.31 },
                    { x: new Date(2020, 3), y: 26.77 },
                    { x: new Date(2020, 4), y: 6.93 },
                    { x: new Date(2020, 5), y: 4.21 },
                    { x: new Date(2020, 6), y: 3.32 },
                    { x: new Date(2020, 7), y: 28.85 },
                    { x: new Date(2020, 8), y: 47.14 },
                    { x: new Date(2020, 9), y: 32.30 },
                    { x: new Date(2020, 10), y: 22.97 },
                    { x: new Date(2020, 11), y: 30.66 }
                ]
            },

            {
                type: "column",
                name: "Engagement absoluto",
                color: "#73c0f4",
                showInLegend: true,
                yValueFormatString: "##0.00'%'",
                dataPoints: [
                    { x: new Date(2020, 0), y: 1.12 },
                    { x: new Date(2020, 1), y: 1.13 },
                    { x: new Date(2020, 2), y: 1.02 },
                    { x: new Date(2020, 3), y: 1.93 },
                    { x: new Date(2020, 4), y: 1.06 },
                    { x: new Date(2020, 5), y: 1.08 },
                    { x: new Date(2020, 6), y: 1.70 },
                    { x: new Date(2020, 7), y: 3.50 },
                    { x: new Date(2020, 8), y: 4.00 },
                    { x: new Date(2020, 9), y: 3.05 },
                    { x: new Date(2020, 10), y: 3.00 },
                    { x: new Date(2020, 11), y: 2.90 }
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
                { x: new Date(2020, 0), y: 105000 },
                { x: new Date(2020, 1), y: 123000 },
                { x: new Date(2020, 2), y: 175600 },
                { x: new Date(2020, 3), y: 490000 },
                { x: new Date(2020, 4), y: 232000 },
                { x: new Date(2020, 5), y: 139000 },
                { x: new Date(2020, 6), y: 106000 },
                { x: new Date(2020, 7), y: 505000 },
                { x: new Date(2020, 8), y: 881300 },
                { x: new Date(2020, 9), y: 656500 },
                { x: new Date(2020, 10), y: 565000 },
                { x: new Date(2020, 11), y: 754000 }

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
                    { x: new Date(2020, 0), y: 133 },
                    { x: new Date(2020, 1), y: 231 },
                    { x: new Date(2020, 2), y: 756 },
                    { x: new Date(2020, 3), y: 1457 },
                    { x: new Date(2020, 4), y: 318 },
                    { x: new Date(2020, 5), y: 121 },
                    { x: new Date(2020, 6), y: 241 },
                    { x: new Date(2020, 7), y: 2711 },
                    { x: new Date(2020, 8), y: 1678 },
                    { x: new Date(2020, 9), y: 965 },
                    { x: new Date(2020, 10), y: 911 },
                    { x: new Date(2020, 11), y: 1119 }
                ]
            },

            {
                indexLabelFontColor: "darkSlateGray",
                type: "area",
                color: "#73c0f4",
                name: "Total de seguidores",
                showInLegend: true,
                xValueFormatString: "MMM, YYYY",
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2020, 0), y: 32862 },
                    { x: new Date(2020, 1), y: 33093 },
                    { x: new Date(2020, 2), y: 33849 },
                    { x: new Date(2020, 3), y: 35306 },
                    { x: new Date(2020, 4), y: 35624 },
                    { x: new Date(2020, 5), y: 35745 },
                    { x: new Date(2020, 6), y: 35986 },
                    { x: new Date(2020, 7), y: 38938 },
                    { x: new Date(2020, 8), y: 40615 },
                    { x: new Date(2020, 9), y: 41594 },
                    { x: new Date(2020, 10), y: 42505 },
                    { x: new Date(2020, 11), y: 43602 }
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
                    { x: new Date(2020, 0), y: 1179 },
                    { x: new Date(2020, 1), y: 1395 },
                    { x: new Date(2020, 2), y: 1796 },
                    { x: new Date(2020, 3), y: 9450 },
                    { x: new Date(2020, 4), y: 2468 },
                    { x: new Date(2020, 5), y: 1504 },
                    { x: new Date(2020, 6), y: 1195 },
                    { x: new Date(2020, 7), y: 11146 },
                    { x: new Date(2020, 8), y: 19146 },
                    { x: new Date(2020, 9), y: 13436 },
                    { x: new Date(2020, 10), y: 9764 },
                    { x: new Date(2020, 11), y: 13369 }
                ]
            },

            {
                type: "column",
                name: "Tuits mensuales",
                color: "#73c0f4",
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2020, 0), y: 129 },
                    { x: new Date(2020, 1), y: 126 },
                    { x: new Date(2020, 2), y: 118 },
                    { x: new Date(2020, 3), y: 156 },
                    { x: new Date(2020, 4), y: 134 },
                    { x: new Date(2020, 5), y: 123 },
                    { x: new Date(2020, 6), y: 136 },
                    { x: new Date(2020, 7), y: 107 },
                    { x: new Date(2020, 8), y: 313 },
                    { x: new Date(2020, 9), y: 416 },
                    { x: new Date(2020, 10), y: 320 },
                    { x: new Date(2020, 11), y: 464 }
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
                { y: 885, label: "Clicks" },
                { y: 8100, label: "Me gusta" },
                { y: 1300, label: "Retuits" },
                { y: 585, label: "Respuestas" }


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
                    { x: new Date(2020, 0), y: 1898 },
                    { x: new Date(2020, 1), y: 2155 },
                    { x: new Date(2020, 2), y: 3842 },
                    { x: new Date(2020, 3), y: 15148 },
                    { x: new Date(2020, 4), y: 6249 },
                    { x: new Date(2020, 5), y: 3528 },
                    { x: new Date(2020, 6), y: 2710 },
                    { x: new Date(2020, 7), y: 25500 },
                    { x: new Date(2020, 8), y: 24000 },
                    { x: new Date(2020, 9), y: 31200 },
                    { x: new Date(2020, 10), y: 26500 },
                    { x: new Date(2020, 11), y: 37500 }
                ]
            },

            {
                type: "area",
                name: "Menciones a la cuenta",
                color: "#73c0f4",
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2020, 0), y: 85 },
                    { x: new Date(2020, 1), y: 73 },
                    { x: new Date(2020, 2), y: 73 },
                    { x: new Date(2020, 3), y: 2607 },
                    { x: new Date(2020, 4), y: 1225 },
                    { x: new Date(2020, 5), y: 183 },
                    { x: new Date(2020, 6), y: 131 },
                    { x: new Date(2020, 7), y: 1212 },
                    { x: new Date(2020, 8), y: 1208 },
                    { x: new Date(2020, 9), y: 1483 },
                    { x: new Date(2020, 10), y: 1454 },
                    { x: new Date(2020, 11), y: 2035 }
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
                    { label: "Ene", y: 224 },
                    { label: "Feb", y: 330 },
                    { label: "Mar", y: 502 },
                    { label: "Apr", y: 1000 },
                    { label: "May", y: 538 },
                    { label: "Jun", y: 322 },
                    { label: "Jul", y: 168 },
                    { label: "Agt", y: 1600 },
                    { label: "Sept", y: 3500 },
                    { label: "Oct", y: 2600 },
                    { label: "Nov", y: 1100 },
                    { label: "Dic", y: 1300 }
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
                    { label: "Ene", y: 641 },
                    { label: "Feb", y: 781 },
                    { label: "Mar", y: 877 },
                    { label: "Apr", y: 1900 },
                    { label: "May", y: 1200 },
                    { label: "Jun", y: 749 },
                    { label: "Jul", y: 579 },
                    { label: "Agt", y: 7600 },
                    { label: "Sept", y: 13000 },
                    { label: "Oct", y: 8000 },
                    { label: "Nov", y: 6100 },
                    { label: "Dic", y: 8100 }
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
                    { label: "Ene", y: 31 },
                    { label: "Feb", y: 10 },
                    { label: "Mar", y: 93 },
                    { label: "Apr", y: 3300 },
                    { label: "May", y: 90 },
                    { label: "Jun", y: 82 },
                    { label: "Jul", y: 150 },
                    { label: "Agt", y: 313 },
                    { label: "Sept", y: 458 },
                    { label: "Oct", y: 373 },
                    { label: "Nov", y: 439 },
                    { label: "Dic", y: 885 }
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
                    { label: "Ene", y: 68 },
                    { label: "Feb", y: 75 },
                    { label: "Mar", y: 133 },
                    { label: "Apr", y: 487 },
                    { label: "May", y: 103 },
                    { label: "Jun", y: 45 },
                    { label: "Jul", y: 31 },
                    { label: "Agt", y: 401 },
                    { label: "Sept", y: 667 },
                    { label: "Oct", y: 564 },
                    { label: "Nov", y: 351 },
                    { label: "Dic", y: 585 }
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