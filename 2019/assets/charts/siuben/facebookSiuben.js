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
                { x: new Date(2019, 0), y: 0 },
                { x: new Date(2019, 1), y: 0 },
                { x: new Date(2019, 2), y: 0 },
                { x: new Date(2019, 3), y: 0 },
                { x: new Date(2019, 4), y: 0 },
                { x: new Date(2019, 5), y: 0 },
                { x: new Date(2019, 6), y: 2.62 },
                { x: new Date(2019, 7), y: 1.81 },
                { x: new Date(2019, 8), y: 3.73 },
                { x: new Date(2019, 9), y: 1.14 },
                { x: new Date(2019, 10), y: 0.82 },
                { x: new Date(2019, 11), y: 0.84 }

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
                { x: new Date(2019, 0), y: 0 },
                { x: new Date(2019, 1), y: 0 },
                { x: new Date(2019, 2), y: 0 },
                { x: new Date(2019, 3), y: 0 },
                { x: new Date(2019, 4), y: 0 },
                { x: new Date(2019, 5), y: 0 },
                { x: new Date(2019, 6), y: 0.11 },
                { x: new Date(2019, 7), y: 0.32 },
                { x: new Date(2019, 8), y: 0.31 },
                { x: new Date(2019, 9), y: 0.35 },
                { x: new Date(2019, 10), y: 0.41 },
                { x: new Date(2019, 11), y: 0.44 }

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
                    { x: new Date(2019, 0), y: 0 },
                    { x: new Date(2019, 1), y: 0 },
                    { x: new Date(2019, 2), y: 0 },
                    { x: new Date(2019, 3), y: 0 },
                    { x: new Date(2019, 4), y: 0 },
                    { x: new Date(2019, 5), y: 0 },
                    { x: new Date(2019, 6), y: 165549 },
                    { x: new Date(2019, 7), y: 11608 },
                    { x: new Date(2019, 8), y: 39551 },
                    { x: new Date(2019, 9), y: 11566 },
                    { x: new Date(2019, 10), y: 8870 },
                    { x: new Date(2019, 11), y: 11335 }
                ]
            },

            {
                type: "area",
                name: "Alcance Total",
                color: "#36688d",
                showInLegend: true,
                yValueFormatString: "#,###",
                dataPoints: [
                    { x: new Date(2019, 0), y: 0 },
                    { x: new Date(2019, 1), y: 0 },
                    { x: new Date(2019, 2), y: 0 },
                    { x: new Date(2019, 3), y: 0 },
                    { x: new Date(2019, 4), y: 0 },
                    { x: new Date(2019, 5), y: 0 },
                    { x: new Date(2019, 6), y: 460996 },
                    { x: new Date(2019, 7), y: 135431 },
                    { x: new Date(2019, 8), y: 400668 },
                    { x: new Date(2019, 9), y: 118824 },
                    { x: new Date(2019, 10), y: 83866 },
                    { x: new Date(2019, 11), y: 87345 }
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
                { x: new Date(2019, 0), y: 0 },
                { x: new Date(2019, 1), y: 0 },
                { x: new Date(2019, 2), y: 0 },
                { x: new Date(2019, 3), y: 0 },
                { x: new Date(2019, 4), y: 0 },
                { x: new Date(2019, 5), y: 0 },
                { x: new Date(2019, 6), y: 71 },
                { x: new Date(2019, 7), y: 39 },
                { x: new Date(2019, 8), y: 93 },
                { x: new Date(2019, 9), y: 32 },
                { x: new Date(2019, 10), y: 57 },
                { x: new Date(2019, 11), y: 40 }

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
                { x: new Date(2019, 0), y: 0 },
                { x: new Date(2019, 1), y: 0 },
                { x: new Date(2019, 2), y: 0 },
                { x: new Date(2019, 3), y: 0 },
                { x: new Date(2019, 4), y: 0 },
                { x: new Date(2019, 5), y: 0 },
                { x: new Date(2019, 6), y: 202 },
                { x: new Date(2019, 7), y: 241 },
                { x: new Date(2019, 8), y: 334 },
                { x: new Date(2019, 9), y: 366 },
                { x: new Date(2019, 10), y: 422 },
                { x: new Date(2019, 11), y: 461 }

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
                { x: new Date(2019, 0), y: 0 },
                { x: new Date(2019, 1), y: 0 },
                { x: new Date(2019, 2), y: 0 },
                { x: new Date(2019, 3), y: 0 },
                { x: new Date(2019, 4), y: 0 },
                { x: new Date(2019, 5), y: 0 },
                { x: new Date(2019, 6), y: 356 },
                { x: new Date(2019, 7), y: 305 },
                { x: new Date(2019, 8), y: 824 },
                { x: new Date(2019, 9), y: 302 },
                { x: new Date(2019, 10), y: 216 },
                { x: new Date(2019, 11), y: 269 }

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
                { x: new Date(2019, 0), y: 0 },
                { x: new Date(2019, 1), y: 0 },
                { x: new Date(2019, 2), y: 0 },
                { x: new Date(2019, 3), y: 0 },
                { x: new Date(2019, 4), y: 0 },
                { x: new Date(2019, 5), y: 0 },
                { x: new Date(2019, 6), y: 11 },
                { x: new Date(2019, 7), y: 17 },
                { x: new Date(2019, 8), y: 30 },
                { x: new Date(2019, 9), y: 16 },
                { x: new Date(2019, 10), y: 15 },
                { x: new Date(2019, 11), y: 14 }
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
                { x: new Date(2019, 0), y: 0 },
                { x: new Date(2019, 1), y: 0 },
                { x: new Date(2019, 2), y: 0 },
                { x: new Date(2019, 3), y: 0 },
                { x: new Date(2019, 4), y: 0 },
                { x: new Date(2019, 5), y: 0 },
                { x: new Date(2019, 6), y: 82 },
                { x: new Date(2019, 7), y: 77 },
                { x: new Date(2019, 8), y: 198 },
                { x: new Date(2019, 9), y: 67 },
                { x: new Date(2019, 10), y: 60 },
                { x: new Date(2019, 11), y: 59 }

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
                { x: new Date(2019, 0), y: 0 },
                { x: new Date(2019, 1), y: 0 },
                { x: new Date(2019, 2), y: 0 },
                { x: new Date(2019, 3), y: 0 },
                { x: new Date(2019, 4), y: 0 },
                { x: new Date(2019, 5), y: 0 },
                { x: new Date(2019, 6), y: 20 },
                { x: new Date(2019, 7), y: 15 },
                { x: new Date(2019, 8), y: 131 },
                { x: new Date(2019, 9), y: 17 },
                { x: new Date(2019, 10), y: 12 },
                { x: new Date(2019, 11), y: 19 }
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
                { x: new Date(2019, 0), y: 0 },
                { x: new Date(2019, 1), y: 0 },
                { x: new Date(2019, 2), y: 0 },
                { x: new Date(2019, 3), y: 0 },
                { x: new Date(2019, 4), y: 0 },
                { x: new Date(2019, 5), y: 0 },
                { x: new Date(2019, 6), y: 2.62 },
                { x: new Date(2019, 7), y: 1.81 },
                { x: new Date(2019, 8), y: 3.73 },
                { x: new Date(2019, 9), y: 1.14 },
                { x: new Date(2019, 10), y: 0.82 },
                { x: new Date(2019, 11), y: 0.84 }

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
                { x: new Date(2019, 0), y: 0 },
                { x: new Date(2019, 1), y: 0 },
                { x: new Date(2019, 2), y: 0 },
                { x: new Date(2019, 3), y: 0 },
                { x: new Date(2019, 4), y: 0 },
                { x: new Date(2019, 5), y: 0 },
                { x: new Date(2019, 6), y: 2 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 3 },
                { x: new Date(2019, 9), y: 2 },
                { x: new Date(2019, 10), y: 1 },
                { x: new Date(2019, 11), y: 1 }

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