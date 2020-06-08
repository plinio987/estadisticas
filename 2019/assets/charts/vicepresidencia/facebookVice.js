window.onload = function() {

    /*ENGAGEMENT FACEBOOK */

    var chart1 = new CanvasJS.Chart("TasaInteraccion", {
        animationEnabled: true,
        colorset: "#bf988f",
        backgroundColor: "#ebf2ea",
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        title: {
            text: "",
            fontColor: "#222",
            fontSize: 20,
            fontFamily: "tahoma",
            fontStyle: "italic"
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            labelFontColor: "#222",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "",
            labelFontColor: "#222",
            titleFontColor: "fff",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#bb1924",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "###0.00'%'",
            dataPoints: [
                { x: new Date(2019, 0), y: 0.31 },
                { x: new Date(2019, 1), y: 0.07 },
                { x: new Date(2019, 2), y: 0.30 },
                { x: new Date(2019, 3), y: 0.51 },
                { x: new Date(2019, 4), y: 0.30 },
                { x: new Date(2019, 5), y: 0.33 },
                { x: new Date(2019, 6), y: 0.16 },
                { x: new Date(2019, 7), y: 0.45 },
                { x: new Date(2019, 8), y: 0.32 },
                { x: new Date(2019, 9), y: 0.22 },
                { x: new Date(2019, 10), y: 0.03 },
                { x: new Date(2019, 11), y: 0.05 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart1.render();

    var chart2 = new CanvasJS.Chart("EngagementRate", {
        animationEnabled: true,
        colorset: "#bf988f",
        backgroundColor: "#ebf2ea",
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        title: {
            text: "",
            fontColor: "#222",
            fontSize: 20,
            fontFamily: "tahoma",
            fontStyle: "italic"
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            labelFontColor: "#222",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Post Engagement Rate",
            labelFontColor: "#222",
            titleFontColor: "fff",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#bb1924",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "###0.00'%'",
            dataPoints: [
                { x: new Date(2019, 0), y: 90.97 },
                { x: new Date(2019, 1), y: 18.65 },
                { x: new Date(2019, 2), y: 17.91 },
                { x: new Date(2019, 3), y: 27.88 },
                { x: new Date(2019, 4), y: 32.59 },
                { x: new Date(2019, 5), y: 22.17 },
                { x: new Date(2019, 6), y: 29.65 },
                { x: new Date(2019, 7), y: 28.66 },
                { x: new Date(2019, 8), y: 29.13 },
                { x: new Date(2019, 9), y: 62.95 },
                { x: new Date(2019, 10), y: 49.83 },
                { x: new Date(2019, 11), y: 102.29 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart2.render();


    /*ALCANCE FACEBOOK VICE*/
    var chart3 = new CanvasJS.Chart("alcancePublicaciones", {
        animationEnabled: true,
        backgroundColor: "#ebf2ea",
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
                yValueFormatString: "#,###",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2019, 0), y: 228993 },
                    { x: new Date(2019, 1), y: 165449 },
                    { x: new Date(2019, 2), y: 57417 },
                    { x: new Date(2019, 3), y: 53202 },
                    { x: new Date(2019, 4), y: 103381 },
                    { x: new Date(2019, 5), y: 53938 },
                    { x: new Date(2019, 6), y: 50224 },
                    { x: new Date(2019, 7), y: 52522 },
                    { x: new Date(2019, 8), y: 79732 },
                    { x: new Date(2019, 9), y: 120257 },
                    { x: new Date(2019, 10), y: 466615 },
                    { x: new Date(2019, 11), y: 536360 }
                ]
            },

            {
                type: "area",
                name: "Alcance Total",
                color: "#36688d",
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2019, 0), y: 2350388 },
                    { x: new Date(2019, 1), y: 1717160 },
                    { x: new Date(2019, 2), y: 405070 },
                    { x: new Date(2019, 3), y: 373653 },
                    { x: new Date(2019, 4), y: 866690 },
                    { x: new Date(2019, 5), y: 550860 },
                    { x: new Date(2019, 6), y: 863123 },
                    { x: new Date(2019, 7), y: 491100 },
                    { x: new Date(2019, 8), y: 663487 },
                    { x: new Date(2019, 9), y: 1818890 },
                    { x: new Date(2019, 10), y: 15911750 },
                    { x: new Date(2019, 11), y: 12969640 }
                ]
            }
        ]
    });
    chart3.render();


    /*NUEVOS FANS FACEBOOK */

    var chart4 = new CanvasJS.Chart("nuevosFans", {
        animationEnabled: true,
        colorset: "#bf988f",
        backgroundColor: "#ebf2ea",
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        exportEnabled: true,
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
            labelFontColor: "#000",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "fans",
            titleFontColor: "#4F81BC",
            labelFontColor: "#000",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#bb1924",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 434 },
                { x: new Date(2019, 1), y: 243 },
                { x: new Date(2019, 2), y: 152 },
                { x: new Date(2019, 3), y: 179 },
                { x: new Date(2019, 4), y: 312 },
                { x: new Date(2019, 5), y: 199 },
                { x: new Date(2019, 6), y: 206 },
                { x: new Date(2019, 7), y: 250 },
                { x: new Date(2019, 8), y: 173 },
                { x: new Date(2019, 9), y: 228 },
                { x: new Date(2019, 10), y: 194 },
                { x: new Date(2019, 11), y: 225 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart4.render();


    /*GENERAL FANS FACEBOOK */
    var chart5 = new CanvasJS.Chart("totalGeneralFans", {
        animationEnabled: true,
        colorset: "#bf988f",
        backgroundColor: "#ebf2ea",
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        exportEnabled: true,
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
            labelFontColor: "#000",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "fans",
            titleFontColor: "#4F81BC",
            labelFontColor: "#000",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            name: "fans",
            type: "column",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            color: "#bb1924",
            dataPoints: [
                { x: new Date(2019, 0), y: 23301 },
                { x: new Date(2019, 1), y: 23502 },
                { x: new Date(2019, 2), y: 23616 },
                { x: new Date(2019, 3), y: 23724 },
                { x: new Date(2019, 4), y: 23987 },
                { x: new Date(2019, 5), y: 24138 },
                { x: new Date(2019, 6), y: 24285 },
                { x: new Date(2019, 7), y: 24477 },
                { x: new Date(2019, 8), y: 24595 },
                { x: new Date(2019, 9), y: 24749 },
                { x: new Date(2019, 10), y: 24903 },
                { x: new Date(2019, 11), y: 25066 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart5.render();

    /*ME GUSTA EN PUBLICACIONES  */
    var chart6 = new CanvasJS.Chart("MeGustaPublicaciones", {
        animationEnabled: true,
        backgroundColor: "#ebf2ea",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
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
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Me gusta",
            titleFontColor: "#4F81BC",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#bb1924",
            name: "views",
            type: "line",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 5195 },
                { x: new Date(2019, 1), y: 808 },
                { x: new Date(2019, 2), y: 910 },
                { x: new Date(2019, 3), y: 1506 },
                { x: new Date(2019, 4), y: 1985 },
                { x: new Date(2019, 5), y: 1395 },
                { x: new Date(2019, 6), y: 1030 },
                { x: new Date(2019, 7), y: 1662 },
                { x: new Date(2019, 8), y: 1610 },
                { x: new Date(2019, 9), y: 3185 },
                { x: new Date(2019, 10), y: 3775 },
                { x: new Date(2019, 11), y: 5726 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart6.render();



    //RANGO DE EDAD
    var chart9 = new CanvasJS.Chart("rangoEdadFans", {
        theme: "light1", // "light1", "ligh2", "dark1", "dark2"
        animationEnabled: true,
        backgroundColor: "#ebf2ea",
        title: {
            text: "",
            fontColor: "#000",
            fontSize: 20,
            fontFamily: "tahoma",
            fontStyle: "italic"
        },
        axisY: {
            title: "Porcentaje",
            prefix: "%",
            lineThickness: 0,
            titleFontColor: "#000",
        },
        axisX: {
            title: "Rango",
            labelFontColor: "#000",
        },
        data: [{
            type: "bar",
            indexLabel: "{y}",
            indexLabelFontColor: "#000",
            indexLabelPlacement: "outside",
            labelFontColor: "#000",
            yValueFormatString: "#0.0'%'",
            dataPoints: [
                { label: "13-17", y: 1 },
                { label: "18-24", y: 21 },
                { label: "25-34", y: 38 },
                { label: "35-44", y: 23 },
                { label: "45-54", y: 11 },
                { label: "55-65", y: 4 },
                { label: "65+", y: 2 }

            ]
        }]
    });
    chart9.render();


    //PUBLICACIONES
    var chart10 = new CanvasJS.Chart("publicaciones", {
        animationEnabled: true,
        exportEnabled: true,
        backgroundColor: "#ebf2ea",
        theme: "light1", //"light1", "light2", "dark1", "dark2", light2
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
            valueFormatString: "MMM"
        },
        axisY: {
            title: "cantidad mensual",
            type: "wavy"
        },
        data: [{
            type: "bar",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 79 },
                { x: new Date(2019, 1), y: 65 },
                { x: new Date(2019, 2), y: 68 },
                { x: new Date(2019, 3), y: 68 },
                { x: new Date(2019, 4), y: 80 },
                { x: new Date(2019, 5), y: 81 },
                { x: new Date(2019, 6), y: 48 },
                { x: new Date(2019, 7), y: 77 },
                { x: new Date(2019, 8), y: 72 },
                { x: new Date(2019, 9), y: 65 },
                { x: new Date(2019, 10), y: 92 },
                { x: new Date(2019, 11), y: 69 }
            ]
        }]
    });

    chart10.render();

    /*Charts compartidos  */
    var chart11 = new CanvasJS.Chart("publicacionesCompartidas", {
        animationEnabled: true,
        backgroundColor: "#ebf2ea",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
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
            valueFormatString: "MMM"
        },
        axisY: {
            title: "No. compartidas",
            titleFontColor: "#4F81BC",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#bb1924",
            name: "views",
            type: "line",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 751 },
                { x: new Date(2019, 1), y: 135 },
                { x: new Date(2019, 2), y: 123 },
                { x: new Date(2019, 3), y: 150 },
                { x: new Date(2019, 4), y: 205 },
                { x: new Date(2019, 5), y: 175 },
                { x: new Date(2019, 6), y: 171 },
                { x: new Date(2019, 7), y: 249 },
                { x: new Date(2019, 8), y: 270 },
                { x: new Date(2019, 9), y: 500 },
                { x: new Date(2019, 10), y: 449 },
                { x: new Date(2019, 11), y: 613 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart11.render();

    /*GENERO FANS FACEBOOK */
    var chart12 = new CanvasJS.Chart("generoFans", {
        animationEnabled: true,
        colorset: "#bf988f",
        backgroundColor: "#ebf2ea",
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        title: {
            text: "",
            fontColor: "#000",
            fontSize: 20,
            fontFamily: "tahoma",
            fontStyle: "italic"
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00'%'",
            indexLabel: "{label} {y}",
            dataPoints: [
                { y: 38, label: "Masculino", indexLabelFontColor: "fff" },
                { y: 62, label: "Femenino", indexLabelFontColor: "fff" }

            ]
        }]
    });
    chart12.render();

    //MENSAJES
    var chart13 = new CanvasJS.Chart("mensajesPublicaciones", {
        animationEnabled: true,
        exportEnabled: true,
        backgroundColor: "#ebf2ea",
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
            title: "cantidad mensual",
            labelFontColor: "#000",
        },
        data: [{
            type: "column",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 807 },
                { x: new Date(2019, 1), y: 26 },
                { x: new Date(2019, 2), y: 33 },
                { x: new Date(2019, 3), y: 61 },
                { x: new Date(2019, 4), y: 105 },
                { x: new Date(2019, 5), y: 27 },
                { x: new Date(2019, 6), y: 16 },
                { x: new Date(2019, 7), y: 46 },
                { x: new Date(2019, 8), y: 44 },
                { x: new Date(2019, 9), y: 179 },
                { x: new Date(2019, 10), y: 166 },
                { x: new Date(2019, 11), y: 494 }
            ]
        }]
    });

    chart13.render();


    /*PORCENTAJE PARTICIPACION FACEBOOK*/
    var chart14 = new CanvasJS.Chart("facebookPorcentajeParticipacion", {
        animationEnabled: true,
        colorset: "#bf988f",
        backgroundColor: "#ebf2ea",
        //theme: "light1", "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        title: {
            text: "",
            fontColor: "#222",
            fontSize: 20,
            fontFamily: "tahoma",
            fontStyle: "italic"
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            labelFontColor: "#222",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Porcentaje",
            titleFontColor: "#4F81BC",
            suffix: "mn",
            labelFontColor: "#222",
            gridColor: "#edb5bf"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#bb1924",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2019, 0), y: 0.31 },
                { x: new Date(2019, 1), y: 0.05 },
                { x: new Date(2019, 2), y: 0.05 },
                { x: new Date(2019, 3), y: 0.08 },
                { x: new Date(2019, 4), y: 0.11 },
                { x: new Date(2019, 5), y: 0.07 },
                { x: new Date(2019, 6), y: 0.06 },
                { x: new Date(2019, 7), y: 0.09 },
                { x: new Date(2019, 8), y: 0.09 },
                { x: new Date(2019, 9), y: 0.17 },
                { x: new Date(2019, 10), y: 0.18 },
                { x: new Date(2019, 11), y: 0.28 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart14.render();

    //NO ME GUSTA
    var chart15 = new CanvasJS.Chart("NoMeGustaFanPage", {
        animationEnabled: true,
        exportEnabled: true,
        backgroundColor: "#ebf2ea",
        theme: "light1", //"light1", "light2", "dark1", "dark2"
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
            labelFontColor: "#000",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "No me gusta",
            labelFontColor: "#000",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#bb1924",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 39 },
                { x: new Date(2019, 1), y: 32 },
                { x: new Date(2019, 2), y: 27 },
                { x: new Date(2019, 3), y: 57 },
                { x: new Date(2019, 4), y: 37 },
                { x: new Date(2019, 5), y: 39 },
                { x: new Date(2019, 6), y: 47 },
                { x: new Date(2019, 7), y: 45 },
                { x: new Date(2019, 8), y: 51 },
                { x: new Date(2019, 9), y: 61 },
                { x: new Date(2019, 10), y: 33 },
                { x: new Date(2019, 11), y: 56 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart15.render();



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