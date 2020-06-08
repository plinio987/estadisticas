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
                { x: new Date(2019, 0), y: 0.37 },
                { x: new Date(2019, 1), y: 0.14 },
                { x: new Date(2019, 2), y: 0.52 },
                { x: new Date(2019, 3), y: 0.03 },
                { x: new Date(2019, 4), y: 0.01 },
                { x: new Date(2019, 5), y: 0.29 },
                { x: new Date(2019, 6), y: 0.03 },
                { x: new Date(2019, 7), y: 0.26 },
                { x: new Date(2019, 8), y: 0.51 },
                { x: new Date(2019, 9), y: 0.30 },
                { x: new Date(2019, 10), y: 0.38 },
                { x: new Date(2019, 11), y: 0.43 }

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
                { x: new Date(2019, 0), y: 5.40 },
                { x: new Date(2019, 1), y: 4.80 },
                { x: new Date(2019, 2), y: 8.22 },
                { x: new Date(2019, 3), y: 21.73 },
                { x: new Date(2019, 4), y: 5.86 },
                { x: new Date(2019, 5), y: 15.20 },
                { x: new Date(2019, 6), y: 7.50 },
                { x: new Date(2019, 7), y: 4.15 },
                { x: new Date(2019, 8), y: 6.75 },
                { x: new Date(2019, 9), y: 4.38 },
                { x: new Date(2019, 10), y: 4.82 },
                { x: new Date(2019, 11), y: 3.13 }

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
                { x: new Date(2019, 0), y: 22091 },
                { x: new Date(2019, 1), y: 17663 },
                { x: new Date(2019, 2), y: 14128 },
                { x: new Date(2019, 3), y: 818981 },
                { x: new Date(2019, 4), y: 1277553 },
                { x: new Date(2019, 5), y: 51926 },
                { x: new Date(2019, 6), y: 189135 },
                { x: new Date(2019, 7), y: 20409 },
                { x: new Date(2019, 8), y: 16003 },
                { x: new Date(2019, 9), y: 19157 },
                { x: new Date(2019, 10), y: 13974 },
                { x: new Date(2019, 11), y: 11026 }

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
                { x: new Date(2019, 0), y: 4 },
                { x: new Date(2019, 1), y: 5 },
                { x: new Date(2019, 2), y: 8 },
                { x: new Date(2019, 3), y: 82 },
                { x: new Date(2019, 4), y: 21 },
                { x: new Date(2019, 5), y: 21 },
                { x: new Date(2019, 6), y: 12 },
                { x: new Date(2019, 7), y: 4 },
                { x: new Date(2019, 8), y: 8 },
                { x: new Date(2019, 9), y: 9 },
                { x: new Date(2019, 10), y: 13 },
                { x: new Date(2019, 11), y: 3 }

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
                { x: new Date(2019, 0), y: 796 },
                { x: new Date(2019, 1), y: 800 },
                { x: new Date(2019, 2), y: 807 },
                { x: new Date(2019, 3), y: 885 },
                { x: new Date(2019, 4), y: 904 },
                { x: new Date(2019, 5), y: 920 },
                { x: new Date(2019, 6), y: 930 },
                { x: new Date(2019, 7), y: 933 },
                { x: new Date(2019, 8), y: 937 },
                { x: new Date(2019, 9), y: 944 },
                { x: new Date(2019, 10), y: 954 },
                { x: new Date(2019, 11), y: 951 }

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
                { x: new Date(2019, 0), y: 64 },
                { x: new Date(2019, 1), y: 19 },
                { x: new Date(2019, 2), y: 55 },
                { x: new Date(2019, 3), y: 126 },
                { x: new Date(2019, 4), y: 19 },
                { x: new Date(2019, 5), y: 106 },
                { x: new Date(2019, 6), y: 51 },
                { x: new Date(2019, 7), y: 45 },
                { x: new Date(2019, 8), y: 57 },
                { x: new Date(2019, 9), y: 44 },
                { x: new Date(2019, 10), y: 40 },
                { x: new Date(2019, 11), y: 41 }

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
                { x: new Date(2019, 0), y: 15 },
                { x: new Date(2019, 1), y: 5 },
                { x: new Date(2019, 2), y: 9 },
                { x: new Date(2019, 3), y: 11 },
                { x: new Date(2019, 4), y: 7 },
                { x: new Date(2019, 5), y: 10 },
                { x: new Date(2019, 6), y: 10 },
                { x: new Date(2019, 7), y: 13 },
                { x: new Date(2019, 8), y: 12 },
                { x: new Date(2019, 9), y: 13 },
                { x: new Date(2019, 10), y: 11 },
                { x: new Date(2019, 11), y: 15 }
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
                { x: new Date(2019, 0), y: 13 },
                { x: new Date(2019, 1), y: 0 },
                { x: new Date(2019, 2), y: 7 },
                { x: new Date(2019, 3), y: 25 },
                { x: new Date(2019, 4), y: 1 },
                { x: new Date(2019, 5), y: 23 },
                { x: new Date(2019, 6), y: 12 },
                { x: new Date(2019, 7), y: 5 },
                { x: new Date(2019, 8), y: 16 },
                { x: new Date(2019, 9), y: 4 },
                { x: new Date(2019, 10), y: 2 },
                { x: new Date(2019, 11), y: 3 }

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
                { x: new Date(2019, 2), y: 4 },
                { x: new Date(2019, 3), y: 6 },
                { x: new Date(2019, 4), y: 0 },
                { x: new Date(2019, 5), y: 2 },
                { x: new Date(2019, 6), y: 0 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 0 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }
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
                { x: new Date(2019, 0), y: 0.10 },
                { x: new Date(2019, 1), y: 0.03 },
                { x: new Date(2019, 2), y: 0.09 },
                { x: new Date(2019, 3), y: 0.27 },
                { x: new Date(2019, 4), y: 0.05 },
                { x: new Date(2019, 5), y: 0.17 },
                { x: new Date(2019, 6), y: 0.08 },
                { x: new Date(2019, 7), y: 0.06 },
                { x: new Date(2019, 8), y: 0.09 },
                { x: new Date(2019, 9), y: 0.06 },
                { x: new Date(2019, 10), y: 0.06 },
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
                { x: new Date(2019, 0), y: 0 },
                { x: new Date(2019, 1), y: 0 },
                { x: new Date(2019, 2), y: 1 },
                { x: new Date(2019, 3), y: 4 },
                { x: new Date(2019, 4), y: 1 },
                { x: new Date(2019, 5), y: 5 },
                { x: new Date(2019, 6), y: 1 },
                { x: new Date(2019, 7), y: 1 },
                { x: new Date(2019, 8), y: 4 },
                { x: new Date(2019, 9), y: 1 },
                { x: new Date(2019, 10), y: 3 },
                { x: new Date(2019, 11), y: 4 }

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