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
                { x: new Date(2019, 0), y: 0.98 },
                { x: new Date(2019, 1), y: 0.81 },
                { x: new Date(2019, 2), y: 0.48 },
                { x: new Date(2019, 3), y: 0.48 },
                { x: new Date(2019, 4), y: 0.49 },
                { x: new Date(2019, 5), y: 0.38 },
                { x: new Date(2019, 6), y: 0.13 },
                { x: new Date(2019, 7), y: 0.04 },
                { x: new Date(2019, 8), y: 0.52 },
                { x: new Date(2019, 9), y: 0.64 },
                { x: new Date(2019, 10), y: 0.12 },
                { x: new Date(2019, 11), y: 0.32 }

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
                { x: new Date(2019, 0), y: 4.46 },
                { x: new Date(2019, 1), y: 2.80 },
                { x: new Date(2019, 2), y: 2.80 },
                { x: new Date(2019, 3), y: 2.77 },
                { x: new Date(2019, 4), y: 3.33 },
                { x: new Date(2019, 5), y: 2.36 },
                { x: new Date(2019, 6), y: 3.00 },
                { x: new Date(2019, 7), y: 2.04 },
                { x: new Date(2019, 8), y: 0.79 },
                { x: new Date(2019, 9), y: 1.15 },
                { x: new Date(2019, 10), y: 2.12 },
                { x: new Date(2019, 11), y: 0.36 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart2.render();


    /*ALCANCE FACEBOOK VICE*/
    var chart3 = new CanvasJS.Chart("alcancePublicaciones", {
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
            title: "Alcance mensual",
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
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 5924 },
                { x: new Date(2019, 1), y: 5466 },
                { x: new Date(2019, 2), y: 27339 },
                { x: new Date(2019, 3), y: 21945 },
                { x: new Date(2019, 4), y: 16289 },
                { x: new Date(2019, 5), y: 23415 },
                { x: new Date(2019, 6), y: 317610 },
                { x: new Date(2019, 7), y: 497994 },
                { x: new Date(2019, 8), y: 30910 },
                { x: new Date(2019, 9), y: 23045 },
                { x: new Date(2019, 10), y: 46996 },
                { x: new Date(2019, 11), y: 22257 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
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
                { x: new Date(2019, 0), y: 30 },
                { x: new Date(2019, 1), y: 11 },
                { x: new Date(2019, 2), y: 26 },
                { x: new Date(2019, 3), y: 17 },
                { x: new Date(2019, 4), y: 13 },
                { x: new Date(2019, 5), y: 27 },
                { x: new Date(2019, 6), y: 32 },
                { x: new Date(2019, 7), y: 17 },
                { x: new Date(2019, 8), y: 19 },
                { x: new Date(2019, 9), y: 6 },
                { x: new Date(2019, 10), y: 11 },
                { x: new Date(2019, 11), y: 9 }

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
                { x: new Date(2019, 0), y: 232 },
                { x: new Date(2019, 1), y: 243 },
                { x: new Date(2019, 2), y: 269 },
                { x: new Date(2019, 3), y: 285 },
                { x: new Date(2019, 4), y: 298 },
                { x: new Date(2019, 5), y: 325 },
                { x: new Date(2019, 6), y: 356 },
                { x: new Date(2019, 7), y: 372 },
                { x: new Date(2019, 8), y: 390 },
                { x: new Date(2019, 9), y: 394 },
                { x: new Date(2019, 10), y: 404 },
                { x: new Date(2019, 11), y: 411 }

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
                { x: new Date(2019, 0), y: 52 },
                { x: new Date(2019, 1), y: 43 },
                { x: new Date(2019, 2), y: 94 },
                { x: new Date(2019, 3), y: 80 },
                { x: new Date(2019, 4), y: 71 },
                { x: new Date(2019, 5), y: 76 },
                { x: new Date(2019, 6), y: 376 },
                { x: new Date(2019, 7), y: 148 },
                { x: new Date(2019, 8), y: 143 },
                { x: new Date(2019, 9), y: 121 },
                { x: new Date(2019, 10), y: 42 },
                { x: new Date(2019, 11), y: 61 }

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
                { x: new Date(2019, 0), y: 23 },
                { x: new Date(2019, 1), y: 22 },
                { x: new Date(2019, 2), y: 26 },
                { x: new Date(2019, 3), y: 22 },
                { x: new Date(2019, 4), y: 23 },
                { x: new Date(2019, 5), y: 29 },
                { x: new Date(2019, 6), y: 23 },
                { x: new Date(2019, 7), y: 21 },
                { x: new Date(2019, 8), y: 30 },
                { x: new Date(2019, 9), y: 21 },
                { x: new Date(2019, 10), y: 26 },
                { x: new Date(2019, 11), y: 26 }
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
                { x: new Date(2019, 0), y: 2 },
                { x: new Date(2019, 1), y: 0 },
                { x: new Date(2019, 2), y: 16 },
                { x: new Date(2019, 3), y: 4 },
                { x: new Date(2019, 4), y: 6 },
                { x: new Date(2019, 5), y: 6 },
                { x: new Date(2019, 6), y: 22 },
                { x: new Date(2019, 7), y: 9 },
                { x: new Date(2019, 8), y: 13 },
                { x: new Date(2019, 9), y: 13 },
                { x: new Date(2019, 10), y: 5 },
                { x: new Date(2019, 11), y: 4 }

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
                { x: new Date(2019, 0), y: 4 },
                { x: new Date(2019, 1), y: 1 },
                { x: new Date(2019, 2), y: 20 },
                { x: new Date(2019, 3), y: 22 },
                { x: new Date(2019, 4), y: 3 },
                { x: new Date(2019, 5), y: 6 },
                { x: new Date(2019, 6), y: 30 },
                { x: new Date(2019, 7), y: 20 },
                { x: new Date(2019, 8), y: 4 },
                { x: new Date(2019, 9), y: 13 },
                { x: new Date(2019, 10), y: 8 },
                { x: new Date(2019, 11), y: 6 }
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
                { x: new Date(2019, 0), y: 0.38 },
                { x: new Date(2019, 1), y: 0.23 },
                { x: new Date(2019, 2), y: 0.58 },
                { x: new Date(2019, 3), y: 0.37 },
                { x: new Date(2019, 4), y: 0.27 },
                { x: new Date(2019, 5), y: 0.27 },
                { x: new Date(2019, 6), y: 1.20 },
                { x: new Date(2019, 7), y: 0.48 },
                { x: new Date(2019, 8), y: 0.41 },
                { x: new Date(2019, 9), y: 0.37 },
                { x: new Date(2019, 10), y: 0.14 },
                { x: new Date(2019, 11), y: 0.17 }

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
                { x: new Date(2019, 0), y: 1 },
                { x: new Date(2019, 1), y: 0 },
                { x: new Date(2019, 2), y: 1 },
                { x: new Date(2019, 3), y: 0 },
                { x: new Date(2019, 4), y: 0 },
                { x: new Date(2019, 5), y: 0 },
                { x: new Date(2019, 6), y: 1 },
                { x: new Date(2019, 7), y: 1 },
                { x: new Date(2019, 8), y: 1 },
                { x: new Date(2019, 9), y: 2 },
                { x: new Date(2019, 10), y: 1 },
                { x: new Date(2019, 11), y: 2 }

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