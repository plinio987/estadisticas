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
                { x: new Date(2019, 0), y: 0.07 },
                { x: new Date(2019, 1), y: 0.09 },
                { x: new Date(2019, 2), y: 0.93 },
                { x: new Date(2019, 3), y: 0.06 },
                { x: new Date(2019, 4), y: 0.10 },
                { x: new Date(2019, 5), y: 0.13 },
                { x: new Date(2019, 6), y: 0.09 },
                { x: new Date(2019, 7), y: 0.12 },
                { x: new Date(2019, 9), y: 0.07 },
                { x: new Date(2019, 10), y: 0.04 },
                { x: new Date(2019, 11), y: 0.03 }
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
                { x: new Date(2019, 0), y: 11.29 },
                { x: new Date(2019, 1), y: 10.60 },
                { x: new Date(2019, 2), y: 195.97 },
                { x: new Date(2019, 3), y: 106.06 },
                { x: new Date(2019, 4), y: 27.83 },
                { x: new Date(2019, 5), y: 27.49 },
                { x: new Date(2019, 6), y: 14.26 },
                { x: new Date(2019, 7), y: 15.43 },
                { x: new Date(2019, 8), y: 18.54 },
                { x: new Date(2019, 9), y: 13.13 },
                { x: new Date(2019, 10), y: 15.05 },
                { x: new Date(2019, 11), y: 16.09 }

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
                { x: new Date(2019, 0), y: 823171 },
                { x: new Date(2019, 1), y: 650206 },
                { x: new Date(2019, 2), y: 1414202 },
                { x: new Date(2019, 3), y: 9469346 },
                { x: new Date(2019, 4), y: 1443626 },
                { x: new Date(2019, 5), y: 1156146 },
                { x: new Date(2019, 6), y: 920774 },
                { x: new Date(2019, 7), y: 793503 },
                { x: new Date(2019, 8), y: 691356 },
                { x: new Date(2019, 9), y: 949148 },
                { x: new Date(2019, 10), y: 1414000 },
                { x: new Date(2019, 11), y: 1894585 }

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
                { x: new Date(2019, 0), y: 83 },
                { x: new Date(2019, 1), y: 113 },
                { x: new Date(2019, 2), y: 3553 },
                { x: new Date(2019, 3), y: 2297 },
                { x: new Date(2019, 4), y: 124 },
                { x: new Date(2019, 5), y: 109 },
                { x: new Date(2019, 6), y: 83 },
                { x: new Date(2019, 7), y: 61 },
                { x: new Date(2019, 8), y: 95 },
                { x: new Date(2019, 9), y: 69 },
                { x: new Date(2019, 10), y: 67 },
                { x: new Date(2019, 11), y: 65 }

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
                { x: new Date(2019, 0), y: 54870 },
                { x: new Date(2019, 1), y: 54874 },
                { x: new Date(2019, 2), y: 58187 },
                { x: new Date(2019, 3), y: 60141 },
                { x: new Date(2019, 4), y: 60122 },
                { x: new Date(2019, 5), y: 60086 },
                { x: new Date(2019, 6), y: 60034 },
                { x: new Date(2019, 7), y: 59952 },
                { x: new Date(2019, 8), y: 59893 },
                { x: new Date(2019, 9), y: 59821 },
                { x: new Date(2019, 10), y: 59759 },
                { x: new Date(2019, 11), y: 59681 }

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
                { x: new Date(2019, 0), y: 399 },
                { x: new Date(2019, 1), y: 396 },
                { x: new Date(2019, 2), y: 6056 },
                { x: new Date(2019, 3), y: 2995 },
                { x: new Date(2019, 4), y: 1137 },
                { x: new Date(2019, 5), y: 1127 },
                { x: new Date(2019, 6), y: 593 },
                { x: new Date(2019, 7), y: 534 },
                { x: new Date(2019, 8), y: 659 },
                { x: new Date(2019, 9), y: 480 },
                { x: new Date(2019, 10), y: 449 },
                { x: new Date(2019, 11), y: 456 }

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
                { x: new Date(2019, 0), y: 49 },
                { x: new Date(2019, 1), y: 55 },
                { x: new Date(2019, 2), y: 67 },
                { x: new Date(2019, 3), y: 53 },
                { x: new Date(2019, 4), y: 52 },
                { x: new Date(2019, 5), y: 53 },
                { x: new Date(2019, 6), y: 54 },
                { x: new Date(2019, 7), y: 46 },
                { x: new Date(2019, 8), y: 46 },
                { x: new Date(2019, 9), y: 47 },
                { x: new Date(2019, 10), y: 38 },
                { x: new Date(2019, 11), y: 35 }
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
                { x: new Date(2019, 0), y: 50 },
                { x: new Date(2019, 1), y: 57 },
                { x: new Date(2019, 2), y: 3219 },
                { x: new Date(2019, 3), y: 276 },
                { x: new Date(2019, 4), y: 139 },
                { x: new Date(2019, 5), y: 140 },
                { x: new Date(2019, 6), y: 61 },
                { x: new Date(2019, 7), y: 84 },
                { x: new Date(2019, 8), y: 79 },
                { x: new Date(2019, 9), y: 60 },
                { x: new Date(2019, 10), y: 41 },
                { x: new Date(2019, 11), y: 26 }

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
                { x: new Date(2019, 0), y: 21 },
                { x: new Date(2019, 1), y: 17 },
                { x: new Date(2019, 2), y: 302 },
                { x: new Date(2019, 3), y: 53 },
                { x: new Date(2019, 4), y: 47 },
                { x: new Date(2019, 5), y: 81 },
                { x: new Date(2019, 6), y: 33 },
                { x: new Date(2019, 7), y: 31 },
                { x: new Date(2019, 8), y: 20 },
                { x: new Date(2019, 9), y: 8 },
                { x: new Date(2019, 10), y: 15 },
                { x: new Date(2019, 11), y: 16 }
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
                { x: new Date(2019, 0), y: 0.01 },
                { x: new Date(2019, 1), y: 0.01 },
                { x: new Date(2019, 2), y: 0.23 },
                { x: new Date(2019, 3), y: 0.09 },
                { x: new Date(2019, 4), y: 0.02 },
                { x: new Date(2019, 5), y: 0.02 },
                { x: new Date(2019, 6), y: 0.01 },
                { x: new Date(2019, 7), y: 0.01 },
                { x: new Date(2019, 8), y: 0.01 },
                { x: new Date(2019, 9), y: 0.01 },
                { x: new Date(2019, 10), y: 0.01 },
                { x: new Date(2019, 11), y: 0.01 }

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
                { x: new Date(2019, 0), y: 82 },
                { x: new Date(2019, 1), y: 90 },
                { x: new Date(2019, 2), y: 190 },
                { x: new Date(2019, 3), y: 371 },
                { x: new Date(2019, 4), y: 111 },
                { x: new Date(2019, 5), y: 103 },
                { x: new Date(2019, 6), y: 119 },
                { x: new Date(2019, 7), y: 119 },
                { x: new Date(2019, 8), y: 136 },
                { x: new Date(2019, 9), y: 120 },
                { x: new Date(2019, 10), y: 114 },
                { x: new Date(2019, 11), y: 133 }

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