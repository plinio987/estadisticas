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
                { x: new Date(2019, 0), y: 0.43 },
                { x: new Date(2019, 1), y: 0.87 },
                { x: new Date(2019, 2), y: 0.44 },
                { x: new Date(2019, 3), y: 0.30 },
                { x: new Date(2019, 4), y: 0.46 },
                { x: new Date(2019, 5), y: 0.48 },
                { x: new Date(2019, 6), y: 0.09 },
                { x: new Date(2019, 7), y: 0.50 },
                { x: new Date(2019, 8), y: 0.75 },
                { x: new Date(2019, 9), y: 0.35 },
                { x: new Date(2019, 10), y: 0.54 },
                { x: new Date(2019, 11), y: 0.66 }

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
                { x: new Date(2019, 0), y: 10.94 },
                { x: new Date(2019, 1), y: 13.64 },
                { x: new Date(2019, 2), y: 25.85 },
                { x: new Date(2019, 3), y: 22.39 },
                { x: new Date(2019, 4), y: 20.59 },
                { x: new Date(2019, 5), y: 28.27 },
                { x: new Date(2019, 6), y: 29.67 },
                { x: new Date(2019, 7), y: 22.69 },
                { x: new Date(2019, 8), y: 26.36 },
                { x: new Date(2019, 9), y: 21.95 },
                { x: new Date(2019, 10), y: 31.46 },
                { x: new Date(2019, 11), y: 22.61 }

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
                { x: new Date(2019, 0), y: 45492 },
                { x: new Date(2019, 1), y: 34472 },
                { x: new Date(2019, 2), y: 116871 },
                { x: new Date(2019, 3), y: 136275 },
                { x: new Date(2019, 4), y: 75290 },
                { x: new Date(2019, 5), y: 129307 },
                { x: new Date(2019, 6), y: 610853 },
                { x: new Date(2019, 7), y: 118439 },
                { x: new Date(2019, 8), y: 98263 },
                { x: new Date(2019, 9), y: 124342 },
                { x: new Date(2019, 10), y: 139467 },
                { x: new Date(2019, 11), y: 106811 }

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
                { x: new Date(2019, 0), y: 20 },
                { x: new Date(2019, 1), y: 36 },
                { x: new Date(2019, 2), y: 61 },
                { x: new Date(2019, 3), y: 33 },
                { x: new Date(2019, 4), y: 42 },
                { x: new Date(2019, 5), y: 82 },
                { x: new Date(2019, 6), y: 59 },
                { x: new Date(2019, 7), y: 37 },
                { x: new Date(2019, 8), y: 47 },
                { x: new Date(2019, 9), y: 41 },
                { x: new Date(2019, 10), y: 50 },
                { x: new Date(2019, 11), y: 31 }

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
                { x: new Date(2019, 0), y: 1252 },
                { x: new Date(2019, 1), y: 1286 },
                { x: new Date(2019, 2), y: 1342 },
                { x: new Date(2019, 3), y: 1371 },
                { x: new Date(2019, 4), y: 1410 },
                { x: new Date(2019, 5), y: 1486 },
                { x: new Date(2019, 6), y: 1540 },
                { x: new Date(2019, 7), y: 1573 },
                { x: new Date(2019, 8), y: 1613 },
                { x: new Date(2019, 9), y: 1644 },
                { x: new Date(2019, 10), y: 1685 },
                { x: new Date(2019, 11), y: 1711 }

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
                { x: new Date(2019, 0), y: 169 },
                { x: new Date(2019, 1), y: 243 },
                { x: new Date(2019, 2), y: 386 },
                { x: new Date(2019, 3), y: 333 },
                { x: new Date(2019, 4), y: 269 },
                { x: new Date(2019, 5), y: 484 },
                { x: new Date(2019, 6), y: 387 },
                { x: new Date(2019, 7), y: 505 },
                { x: new Date(2019, 8), y: 624 },
                { x: new Date(2019, 9), y: 356 },
                { x: new Date(2019, 10), y: 641 },
                { x: new Date(2019, 11), y: 631 }

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
                { x: new Date(2019, 0), y: 18 },
                { x: new Date(2019, 1), y: 22 },
                { x: new Date(2019, 2), y: 20 },
                { x: new Date(2019, 3), y: 18 },
                { x: new Date(2019, 4), y: 17 },
                { x: new Date(2019, 5), y: 22 },
                { x: new Date(2019, 6), y: 18 },
                { x: new Date(2019, 7), y: 26 },
                { x: new Date(2019, 8), y: 28 },
                { x: new Date(2019, 9), y: 20 },
                { x: new Date(2019, 10), y: 24 },
                { x: new Date(2019, 11), y: 31 }
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
                { x: new Date(2019, 0), y: 7 },
                { x: new Date(2019, 1), y: 18 },
                { x: new Date(2019, 2), y: 54 },
                { x: new Date(2019, 3), y: 32 },
                { x: new Date(2019, 4), y: 21 },
                { x: new Date(2019, 5), y: 28 },
                { x: new Date(2019, 6), y: 73 },
                { x: new Date(2019, 7), y: 28 },
                { x: new Date(2019, 8), y: 36 },
                { x: new Date(2019, 9), y: 17 },
                { x: new Date(2019, 10), y: 30 },
                { x: new Date(2019, 11), y: 17 }

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
                { x: new Date(2019, 0), y: 1 },
                { x: new Date(2019, 1), y: 3 },
                { x: new Date(2019, 2), y: 16 },
                { x: new Date(2019, 3), y: 5 },
                { x: new Date(2019, 4), y: 18 },
                { x: new Date(2019, 5), y: 28 },
                { x: new Date(2019, 6), y: 15 },
                { x: new Date(2019, 7), y: 20 },
                { x: new Date(2019, 8), y: 31 },
                { x: new Date(2019, 9), y: 25 },
                { x: new Date(2019, 10), y: 34 },
                { x: new Date(2019, 11), y: 22 }
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
                { x: new Date(2019, 0), y: 0.16 },
                { x: new Date(2019, 1), y: 0.23 },
                { x: new Date(2019, 2), y: 0.39 },
                { x: new Date(2019, 3), y: 0.29 },
                { x: new Date(2019, 4), y: 0.25 },
                { x: new Date(2019, 5), y: 0.42 },
                { x: new Date(2019, 6), y: 0.35 },
                { x: new Date(2019, 7), y: 0.38 },
                { x: new Date(2019, 8), y: 0.46 },
                { x: new Date(2019, 9), y: 0.27 },
                { x: new Date(2019, 10), y: 0.45 },
                { x: new Date(2019, 11), y: 0.41 }

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
                { x: new Date(2019, 1), y: 4 },
                { x: new Date(2019, 2), y: 4 },
                { x: new Date(2019, 3), y: 6 },
                { x: new Date(2019, 4), y: 2 },
                { x: new Date(2019, 5), y: 4 },
                { x: new Date(2019, 6), y: 4 },
                { x: new Date(2019, 7), y: 3 },
                { x: new Date(2019, 8), y: 8 },
                { x: new Date(2019, 9), y: 8 },
                { x: new Date(2019, 10), y: 7 },
                { x: new Date(2019, 11), y: 5 }

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