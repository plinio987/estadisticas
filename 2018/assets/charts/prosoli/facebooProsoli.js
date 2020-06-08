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
                { x: new Date(2019, 0), y: 0.30 },
                { x: new Date(2019, 1), y: 0.21 },
                { x: new Date(2019, 2), y: 0.48 },
                { x: new Date(2019, 3), y: 0.35 },
                { x: new Date(2019, 4), y: 0.28 },
                { x: new Date(2019, 5), y: 1.79 },
                { x: new Date(2019, 6), y: 0.38 },
                { x: new Date(2019, 7), y: 1.70 },
                { x: new Date(2019, 8), y: 1.64 },
                { x: new Date(2019, 9), y: 1.51 },
                { x: new Date(2019, 10), y: 1.98 },
                { x: new Date(2019, 11), y: 2.38 }

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
                { x: new Date(2019, 0), y: 18.65 },
                { x: new Date(2019, 1), y: 12.43 },
                { x: new Date(2019, 2), y: 23.44 },
                { x: new Date(2019, 3), y: 29.43 },
                { x: new Date(2019, 4), y: 25.32 },
                { x: new Date(2019, 5), y: 35.54 },
                { x: new Date(2019, 6), y: 47.61 },
                { x: new Date(2019, 7), y: 34.12 },
                { x: new Date(2019, 8), y: 24.10 },
                { x: new Date(2019, 9), y: 28.52 },
                { x: new Date(2019, 10), y: 39.39 },
                { x: new Date(2019, 11), y: 42.40 }

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
                { x: new Date(2019, 0), y: 333591 },
                { x: new Date(2019, 1), y: 326414 },
                { x: new Date(2019, 2), y: 344805 },
                { x: new Date(2019, 3), y: 551580 },
                { x: new Date(2019, 4), y: 527946 },
                { x: new Date(2019, 5), y: 679562 },
                { x: new Date(2019, 6), y: 601317 },
                { x: new Date(2019, 7), y: 651914 },
                { x: new Date(2019, 8), y: 508512 },
                { x: new Date(2019, 9), y: 518673 },
                { x: new Date(2019, 10), y: 662474 },
                { x: new Date(2019, 11), y: 867636 }

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
                { x: new Date(2019, 0), y: 110 },
                { x: new Date(2019, 1), y: 79 },
                { x: new Date(2019, 2), y: 124 },
                { x: new Date(2019, 3), y: 153 },
                { x: new Date(2019, 4), y: 184 },
                { x: new Date(2019, 5), y: 182 },
                { x: new Date(2019, 6), y: 353 },
                { x: new Date(2019, 7), y: 400 },
                { x: new Date(2019, 8), y: 206 },
                { x: new Date(2019, 9), y: 211 },
                { x: new Date(2019, 10), y: 197 },
                { x: new Date(2019, 11), y: 137 }

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
                { x: new Date(2019, 0), y: 15123 },
                { x: new Date(2019, 1), y: 15176 },
                { x: new Date(2019, 2), y: 15276 },
                { x: new Date(2019, 3), y: 15390 },
                { x: new Date(2019, 4), y: 15548 },
                { x: new Date(2019, 5), y: 15703 },
                { x: new Date(2019, 6), y: 16017 },
                { x: new Date(2019, 7), y: 16388 },
                { x: new Date(2019, 8), y: 16554 },
                { x: new Date(2019, 9), y: 16733 },
                { x: new Date(2019, 10), y: 16895 },
                { x: new Date(2019, 11), y: 16992 }

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
                { x: new Date(2019, 0), y: 701 },
                { x: new Date(2019, 1), y: 486 },
                { x: new Date(2019, 2), y: 1262 },
                { x: new Date(2019, 3), y: 1453 },
                { x: new Date(2019, 4), y: 1089 },
                { x: new Date(2019, 5), y: 1585 },
                { x: new Date(2019, 6), y: 1575 },
                { x: new Date(2019, 7), y: 1280 },
                { x: new Date(2019, 8), y: 1085 },
                { x: new Date(2019, 9), y: 1303 },
                { x: new Date(2019, 10), y: 2089 },
                { x: new Date(2019, 11), y: 2046 }

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
                { x: new Date(2019, 0), y: 53 },
                { x: new Date(2019, 1), y: 56 },
                { x: new Date(2019, 2), y: 70 },
                { x: new Date(2019, 3), y: 65 },
                { x: new Date(2019, 4), y: 59 },
                { x: new Date(2019, 5), y: 65 },
                { x: new Date(2019, 6), y: 49 },
                { x: new Date(2019, 7), y: 59 },
                { x: new Date(2019, 8), y: 67 },
                { x: new Date(2019, 9), y: 66 },
                { x: new Date(2019, 10), y: 70 },
                { x: new Date(2019, 11), y: 60 }
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
                { x: new Date(2019, 0), y: 153 },
                { x: new Date(2019, 1), y: 108 },
                { x: new Date(2019, 2), y: 205 },
                { x: new Date(2019, 3), y: 231 },
                { x: new Date(2019, 4), y: 155 },
                { x: new Date(2019, 5), y: 391 },
                { x: new Date(2019, 6), y: 301 },
                { x: new Date(2019, 7), y: 264 },
                { x: new Date(2019, 8), y: 226 },
                { x: new Date(2019, 9), y: 305 },
                { x: new Date(2019, 10), y: 371 },
                { x: new Date(2019, 11), y: 243 }

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
                { x: new Date(2019, 0), y: 35 },
                { x: new Date(2019, 1), y: 23 },
                { x: new Date(2019, 2), y: 50 },
                { x: new Date(2019, 3), y: 76 },
                { x: new Date(2019, 4), y: 66 },
                { x: new Date(2019, 5), y: 152 },
                { x: new Date(2019, 6), y: 104 },
                { x: new Date(2019, 7), y: 69 },
                { x: new Date(2019, 8), y: 98 },
                { x: new Date(2019, 9), y: 63 },
                { x: new Date(2019, 10), y: 100 },
                { x: new Date(2019, 11), y: 118 }
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
                { x: new Date(2019, 0), y: 0.07 },
                { x: new Date(2019, 1), y: 0.05 },
                { x: new Date(2019, 2), y: 0.11 },
                { x: new Date(2019, 3), y: 0.12 },
                { x: new Date(2019, 4), y: 0.10 },
                { x: new Date(2019, 5), y: 0.15 },
                { x: new Date(2019, 6), y: 0.15 },
                { x: new Date(2019, 7), y: 0.12 },
                { x: new Date(2019, 8), y: 0.10 },
                { x: new Date(2019, 9), y: 0.11 },
                { x: new Date(2019, 10), y: 0.16 },
                { x: new Date(2019, 11), y: 0.15 }

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
                { x: new Date(2019, 0), y: 22 },
                { x: new Date(2019, 1), y: 17 },
                { x: new Date(2019, 2), y: 13 },
                { x: new Date(2019, 3), y: 33 },
                { x: new Date(2019, 4), y: 23 },
                { x: new Date(2019, 5), y: 34 },
                { x: new Date(2019, 6), y: 34 },
                { x: new Date(2019, 7), y: 27 },
                { x: new Date(2019, 8), y: 32 },
                { x: new Date(2019, 9), y: 38 },
                { x: new Date(2019, 10), y: 22 },
                { x: new Date(2019, 11), y: 34 }

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