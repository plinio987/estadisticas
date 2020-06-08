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
                { x: new Date(2019, 0), y: 0.46 },
                { x: new Date(2019, 1), y: 0.58 },
                { x: new Date(2019, 2), y: 0.56 },
                { x: new Date(2019, 3), y: 0.18 },
                { x: new Date(2019, 4), y: 0.34 },
                { x: new Date(2019, 5), y: 0.40 },
                { x: new Date(2019, 6), y: 0.08 },
                { x: new Date(2019, 7), y: 0.27 },
                { x: new Date(2019, 8), y: 0.37 },
                { x: new Date(2019, 9), y: 0.27 },
                { x: new Date(2019, 10), y: 0.49 },
                { x: new Date(2019, 11), y: 0.18 }

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
                { x: new Date(2019, 0), y: 24.06 },
                { x: new Date(2019, 1), y: 58.83 },
                { x: new Date(2019, 2), y: 125.48 },
                { x: new Date(2019, 3), y: 29.97 },
                { x: new Date(2019, 4), y: 41.39 },
                { x: new Date(2019, 5), y: 28.50 },
                { x: new Date(2019, 6), y: 29.56 },
                { x: new Date(2019, 7), y: 27.97 },
                { x: new Date(2019, 8), y: 35.86 },
                { x: new Date(2019, 9), y: 20.78 },
                { x: new Date(2019, 10), y: 25.66 },
                { x: new Date(2019, 11), y: 17.18 }

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
                { x: new Date(2019, 0), y: 173120 },
                { x: new Date(2019, 1), y: 296136 },
                { x: new Date(2019, 2), y: 466999 },
                { x: new Date(2019, 3), y: 603350 },
                { x: new Date(2019, 4), y: 399474 },
                { x: new Date(2019, 5), y: 254936 },
                { x: new Date(2019, 6), y: 1227309 },
                { x: new Date(2019, 7), y: 321115 },
                { x: new Date(2019, 8), y: 278793 },
                { x: new Date(2019, 9), y: 208089 },
                { x: new Date(2019, 10), y: 167803 },
                { x: new Date(2019, 11), y: 210463 }

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
                { x: new Date(2019, 0), y: 73 },
                { x: new Date(2019, 1), y: 180 },
                { x: new Date(2019, 2), y: 241 },
                { x: new Date(2019, 3), y: 88 },
                { x: new Date(2019, 4), y: 122 },
                { x: new Date(2019, 5), y: 53 },
                { x: new Date(2019, 6), y: 62 },
                { x: new Date(2019, 7), y: 65 },
                { x: new Date(2019, 8), y: 62 },
                { x: new Date(2019, 9), y: 47 },
                { x: new Date(2019, 10), y: 51 },
                { x: new Date(2019, 11), y: 26 }

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
                { x: new Date(2019, 0), y: 6067 },
                { x: new Date(2019, 1), y: 6230 },
                { x: new Date(2019, 2), y: 6451 },
                { x: new Date(2019, 3), y: 6522 },
                { x: new Date(2019, 4), y: 6632 },
                { x: new Date(2019, 5), y: 6669 },
                { x: new Date(2019, 6), y: 6707 },
                { x: new Date(2019, 7), y: 6761 },
                { x: new Date(2019, 8), y: 6812 },
                { x: new Date(2019, 9), y: 6840 },
                { x: new Date(2019, 10), y: 6878 },
                { x: new Date(2019, 11), y: 6889 }

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
                { x: new Date(2019, 0), y: 612 },
                { x: new Date(2019, 1), y: 1045 },
                { x: new Date(2019, 2), y: 1287 },
                { x: new Date(2019, 3), y: 903 },
                { x: new Date(2019, 4), y: 948 },
                { x: new Date(2019, 5), y: 890 },
                { x: new Date(2019, 6), y: 719 },
                { x: new Date(2019, 7), y: 718 },
                { x: new Date(2019, 8), y: 838 },
                { x: new Date(2019, 9), y: 450 },
                { x: new Date(2019, 10), y: 697 },
                { x: new Date(2019, 11), y: 324 }

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
                { x: new Date(2019, 0), y: 33 },
                { x: new Date(2019, 1), y: 29 },
                { x: new Date(2019, 2), y: 21 },
                { x: new Date(2019, 3), y: 37 },
                { x: new Date(2019, 4), y: 33 },
                { x: new Date(2019, 5), y: 36 },
                { x: new Date(2019, 6), y: 32 },
                { x: new Date(2019, 7), y: 31 },
                { x: new Date(2019, 8), y: 29 },
                { x: new Date(2019, 9), y: 27 },
                { x: new Date(2019, 10), y: 32 },
                { x: new Date(2019, 11), y: 22 }
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
                { x: new Date(2019, 0), y: 99 },
                { x: new Date(2019, 1), y: 134 },
                { x: new Date(2019, 2), y: 249 },
                { x: new Date(2019, 3), y: 93 },
                { x: new Date(2019, 4), y: 87 },
                { x: new Date(2019, 5), y: 70 },
                { x: new Date(2019, 6), y: 84 },
                { x: new Date(2019, 7), y: 69 },
                { x: new Date(2019, 8), y: 112 },
                { x: new Date(2019, 9), y: 32 },
                { x: new Date(2019, 10), y: 53 },
                { x: new Date(2019, 11), y: 25 }

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
                { x: new Date(2019, 0), y: 10 },
                { x: new Date(2019, 1), y: 347 },
                { x: new Date(2019, 2), y: 858 },
                { x: new Date(2019, 3), y: 25 },
                { x: new Date(2019, 4), y: 209 },
                { x: new Date(2019, 5), y: 13 },
                { x: new Date(2019, 6), y: 81 },
                { x: new Date(2019, 7), y: 15 },
                { x: new Date(2019, 8), y: 28 },
                { x: new Date(2019, 9), y: 32 },
                { x: new Date(2019, 10), y: 20 },
                { x: new Date(2019, 11), y: 3 }
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
                { x: new Date(2019, 0), y: 0.13 },
                { x: new Date(2019, 1), y: 0.27 },
                { x: new Date(2019, 2), y: 0.41 },
                { x: new Date(2019, 3), y: 0.17 },
                { x: new Date(2019, 4), y: 0.21 },
                { x: new Date(2019, 5), y: 0.15 },
                { x: new Date(2019, 6), y: 0.14 },
                { x: new Date(2019, 7), y: 0.13 },
                { x: new Date(2019, 8), y: 0.15 },
                { x: new Date(2019, 9), y: 0.08 },
                { x: new Date(2019, 10), y: 0.12 },
                { x: new Date(2019, 11), y: 0.05 }

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
                { x: new Date(2019, 0), y: 9 },
                { x: new Date(2019, 1), y: 15 },
                { x: new Date(2019, 2), y: 14 },
                { x: new Date(2019, 3), y: 15 },
                { x: new Date(2019, 4), y: 11 },
                { x: new Date(2019, 5), y: 11 },
                { x: new Date(2019, 6), y: 22 },
                { x: new Date(2019, 7), y: 6 },
                { x: new Date(2019, 8), y: 7 },
                { x: new Date(2019, 9), y: 13 },
                { x: new Date(2019, 10), y: 14 },
                { x: new Date(2019, 11), y: 9 }

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