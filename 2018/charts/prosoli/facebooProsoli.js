window.onload = function() {

    /*ENGAGEMENT FACEBOOK */

    var chart1 = new CanvasJS.Chart("TasaInteraccion", {
        animationEnabled: true,
        backgroundColor: "#F1e0d6",
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
                type: "area",
                name: "Porcentaje de engagement",
                markerBorderColor: "white",
                color: "#F49F05",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "##0.00'%'",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2018, 0), y: 0.37 },
                    { x: new Date(2018, 1), y: 0.21 },
                    { x: new Date(2018, 2), y: 0.26 },
                    { x: new Date(2018, 3), y: 0.27 },
                    { x: new Date(2018, 4), y: 0.35 },
                    { x: new Date(2018, 5), y: 0.20 },
                    { x: new Date(2018, 6), y: 0.22 },
                    { x: new Date(2018, 7), y: 0.28 },
                    { x: new Date(2018, 8), y: 0.29 },
                    { x: new Date(2018, 9), y: 0.18 },
                    { x: new Date(2018, 10), y: 0.08 },
                    { x: new Date(2018, 11), y: 0.29 }
                ]
            },
            {
                type: "column",
                name: "Post engagement rate",
                color: "#f05837",
                showInLegend: true,
                yValueFormatString: "##0.00'%'",
                dataPoints: [
                    { x: new Date(2018, 0), y: 19.08 },
                    { x: new Date(2018, 1), y: 14.37 },
                    { x: new Date(2018, 2), y: 14.48 },
                    { x: new Date(2018, 3), y: 12.47 },
                    { x: new Date(2018, 4), y: 20.22 },
                    { x: new Date(2018, 5), y: 12.04 },
                    { x: new Date(2018, 6), y: 17.11 },
                    { x: new Date(2018, 7), y: 23.71 },
                    { x: new Date(2018, 8), y: 30.59 },
                    { x: new Date(2018, 9), y: 16.35 },
                    { x: new Date(2018, 10), y: 10.38 },
                    { x: new Date(2018, 11), y: 22.30 }
                ]
            },

            {
                type: "line",
                name: "Reach engagement rate",
                color: "#000",
                showInLegend: true,
                yValueFormatString: "####0.0000'%'",
                dataPoints: [
                    { x: new Date(2018, 0), y: 0.0030 },
                    { x: new Date(2018, 1), y: 0.0017 },
                    { x: new Date(2018, 2), y: 0.0021 },
                    { x: new Date(2018, 3), y: 0.0024 },
                    { x: new Date(2018, 4), y: 0.0028 },
                    { x: new Date(2018, 5), y: 0.0016 },
                    { x: new Date(2018, 6), y: 0.0018 },
                    { x: new Date(2018, 7), y: 0.0022 },
                    { x: new Date(2018, 8), y: 0.0021 },
                    { x: new Date(2018, 9), y: 0.0014 },
                    { x: new Date(2018, 10), y: 0.0006 },
                    { x: new Date(2018, 11), y: 0.0029 }
                ]
            }
        ]
    });
    chart1.render();

    /*VIEWS GENERAL*/


    var chart2 = new CanvasJS.Chart("ViewsGeneral", {
        animationEnabled: true,
        colorset: "#bf988f",
        backgroundColor: "#a4978e",
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        title: {
            text: "",
            fontColor: "#fff",
            fontSize: 20,
            fontFamily: "tahoma",
            fontStyle: "italic"
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            labelFontColor: "#fff",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Views",
            labelFontColor: "#fff",
            titleFontColor: "fff",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#132226",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "##00.00'%'",
            dataPoints: [
                { x: new Date(2018, 0), y: 8.48 },
                { x: new Date(2018, 1), y: 11.20 },
                { x: new Date(2018, 2), y: 6.47 },
                { x: new Date(2018, 3), y: 8.16 },
                { x: new Date(2018, 4), y: 17.281 },
                { x: new Date(2018, 5), y: 5.17 },
                { x: new Date(2018, 6), y: 11.95 },
                { x: new Date(2018, 7), y: 0 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart2.render();


    /*Promedios interaccion*/

    var chart3 = new CanvasJS.Chart("promediosInteraccion", {
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
                name: "Promedio vídeo plays",
                color: "#720017",
                showInLegend: true,
                xValueFormatString: "MMMM YYYY",
                yValueFormatString: "##00.00'%'",
                dataPoints: [
                    { x: new Date(2018, 0), y: 3.17 },
                    { x: new Date(2018, 1), y: 7.83 },
                    { x: new Date(2018, 2), y: 2.43 },
                    { x: new Date(2018, 3), y: 4.33 },
                    { x: new Date(2018, 4), y: 7.13 },
                    { x: new Date(2018, 5), y: 5.50 },
                    { x: new Date(2018, 6), y: 4.20 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 0 },
                    { x: new Date(2018, 10), y: 0 },
                    { x: new Date(2018, 11), y: 0 }
                ]
            },
            {
                type: "area",
                name: "Promedio fotos views",
                markerBorderColor: "white",
                color: "#818a6f",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "##0.00'%'",
                dataPoints: [
                    { x: new Date(2018, 0), y: 9.80 },
                    { x: new Date(2018, 1), y: 15.44 },
                    { x: new Date(2018, 2), y: 9.21 },
                    { x: new Date(2018, 3), y: 11.61 },
                    { x: new Date(2018, 4), y: 22.54 },
                    { x: new Date(2018, 5), y: 5.60 },
                    { x: new Date(2018, 6), y: 20.25 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 0 },
                    { x: new Date(2018, 10), y: 0 },
                    { x: new Date(2018, 11), y: 0 }
                ]
            },
            {
                type: "line",
                name: "Promedio artes views",
                color: "#000",
                showInLegend: true,
                yValueFormatString: "#0.00'%'",
                dataPoints: [
                    { x: new Date(2018, 0), y: 8.48 },
                    { x: new Date(2018, 1), y: 11.20 },
                    { x: new Date(2018, 2), y: 6.47 },
                    { x: new Date(2018, 3), y: 8.16 },
                    { x: new Date(2018, 4), y: 17.28 },
                    { x: new Date(2018, 5), y: 5.17 },
                    { x: new Date(2018, 6), y: 11.95 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 0 },
                    { x: new Date(2018, 10), y: 0 },
                    { x: new Date(2018, 11), y: 0 }
                ]
            }
        ]
    });
    chart3.render();

    /*ALCANCE FACEBOOK VICE*/
    var chart4 = new CanvasJS.Chart("alcancePublicaciones", {
        animationEnabled: true,
        colorset: "#bf988f",
        backgroundColor: "#1d65a6",
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        title: {
            text: "",
            fontColor: "#fff",
            fontSize: 20,
            fontFamily: "tahoma",
            fontStyle: "italic"
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            labelFontColor: "#fff",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Alcance mensual",
            labelFontColor: "#fff",
            titleFontColor: "fff",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#f2a104",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 410928 },
                { x: new Date(2018, 1), y: 481256 },
                { x: new Date(2018, 2), y: 397209 },
                { x: new Date(2018, 3), y: 309314 },
                { x: new Date(2018, 4), y: 396919 },
                { x: new Date(2018, 5), y: 309825 },
                { x: new Date(2018, 6), y: 343191 },
                { x: new Date(2018, 7), y: 480646 },
                { x: new Date(2018, 8), y: 544077 },
                { x: new Date(2018, 9), y: 691277 },
                { x: new Date(2018, 10), y: 626914 },
                { x: new Date(2018, 11), y: 330976 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart4.render();

    /*PORCENTAJE PARTICIPACION FACEBOOK*/
    var chart5 = new CanvasJS.Chart("facebookPorcentajeParticipacion", {
        animationEnabled: true,
        colorset: "#bf988f",
        backgroundColor: "#1d65a6",
        //theme: "light1", "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        title: {
            text: "",
            fontColor: "#fff",
            fontSize: 20,
            fontFamily: "tahoma",
            fontStyle: "italic"
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            labelFontColor: "#fff",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Porcentaje",
            titleFontColor: "#4F81BC",
            suffix: "mn",
            labelFontColor: "#fff",
            gridColor: "#edb5bf"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#f2a104",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2018, 0), y: 0.11 },
                { x: new Date(2018, 1), y: 0.07 },
                { x: new Date(2018, 2), y: 0.07 },
                { x: new Date(2018, 3), y: 0.06 },
                { x: new Date(2018, 4), y: 0.10 },
                { x: new Date(2018, 5), y: 0.04 },
                { x: new Date(2018, 6), y: 0.05 },
                { x: new Date(2018, 7), y: 0.09 },
                { x: new Date(2018, 8), y: 0.11 },
                { x: new Date(2018, 9), y: 0.08 },
                { x: new Date(2018, 10), y: 0.03 },
                { x: new Date(2018, 11), y: 0.07 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart5.render();

    /*GENERAL FANS FACEBOOK */
    var chart6 = new CanvasJS.Chart("TotalGeneralFans", {
        animationEnabled: true,
        exportEnabled: true,
        backgroundColor: "#f4d9c1",
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
            dataPoints: [
                { x: new Date(2018, 0), y: 13823 },
                { x: new Date(2018, 1), y: 13942 },
                { x: new Date(2018, 2), y: 14043 },
                { x: new Date(2018, 3), y: 14205 },
                { x: new Date(2018, 4), y: 14318 },
                { x: new Date(2018, 5), y: 14393 },
                { x: new Date(2018, 6), y: 14474 },
                { x: new Date(2018, 7), y: 14624 },
                { x: new Date(2018, 8), y: 14788 },
                { x: new Date(2018, 9), y: 14927 },
                { x: new Date(2018, 10), y: 14982 },
                { x: new Date(2018, 11), y: 15046 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart6.render();


    /*NUEVOS FANS FACEBOOK */

    var chart7 = new CanvasJS.Chart("nuevosFans", {
        animationEnabled: true,
        exportEnabled: true,
        backgroundColor: "#f4d9c1",
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
            title: "fans",
            titleFontColor: "#4F81BC",
            labelFontColor: "#000",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#d72f01",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 176 },
                { x: new Date(2018, 1), y: 142 },
                { x: new Date(2018, 2), y: 134 },
                { x: new Date(2018, 3), y: 197 },
                { x: new Date(2018, 4), y: 151 },
                { x: new Date(2018, 5), y: 116 },
                { x: new Date(2018, 6), y: 130 },
                { x: new Date(2018, 7), y: 94 },
                { x: new Date(2018, 8), y: 196 },
                { x: new Date(2018, 9), y: 175 },
                { x: new Date(2018, 10), y: 84 },
                { x: new Date(2018, 11), y: 89 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart7.render();


    //PUBLICACIONES
    var chart10 = new CanvasJS.Chart("publicaciones", {
        animationEnabled: true,
        exportEnabled: true,
        backgroundColor: "#9199be",
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
                { x: new Date(2018, 0), y: 79 },
                { x: new Date(2018, 1), y: 71 },
                { x: new Date(2018, 2), y: 71 },
                { x: new Date(2018, 3), y: 68 },
                { x: new Date(2018, 4), y: 68 },
                { x: new Date(2018, 5), y: 52 },
                { x: new Date(2018, 6), y: 45 },
                { x: new Date(2018, 7), y: 56 },
                { x: new Date(2018, 8), y: 51 },
                { x: new Date(2018, 9), y: 74 },
                { x: new Date(2018, 10), y: 48 },
                { x: new Date(2018, 11), y: 43 }
            ]
        }]
    });

    chart10.render();

    /*Charts compartidos  */
    var chart11 = new CanvasJS.Chart("publicacionesCompartidas", {
        animationEnabled: true,
        backgroundColor: "#9199be",
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
            color: "#f22f08",
            name: "views",
            type: "line",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 211 },
                { x: new Date(2018, 1), y: 140 },
                { x: new Date(2018, 2), y: 157 },
                { x: new Date(2018, 3), y: 93 },
                { x: new Date(2018, 4), y: 196 },
                { x: new Date(2018, 5), y: 100 },
                { x: new Date(2018, 6), y: 80 },
                { x: new Date(2018, 7), y: 176 },
                { x: new Date(2018, 8), y: 276 },
                { x: new Date(2018, 9), y: 236 },
                { x: new Date(2018, 10), y: 67 },
                { x: new Date(2018, 11), y: 116 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart11.render();

    /*ME GUSTA EN PUBLICACIONES  */
    var chart12 = new CanvasJS.Chart("MeGustaPublicaciones", {
        animationEnabled: true,
        backgroundColor: "#9199be",
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
            title: "Alcance mensual",
            titleFontColor: "#4F81BC",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#f22f08",
            name: "views",
            type: "line",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 1247 },
                { x: new Date(2018, 1), y: 821 },
                { x: new Date(2018, 2), y: 840 },
                { x: new Date(2018, 3), y: 734 },
                { x: new Date(2018, 4), y: 1122 },
                { x: new Date(2018, 5), y: 511 },
                { x: new Date(2018, 6), y: 621 },
                { x: new Date(2018, 7), y: 1074 },
                { x: new Date(2018, 8), y: 1168 },
                { x: new Date(2018, 9), y: 944 },
                { x: new Date(2018, 10), y: 403 },
                { x: new Date(2018, 11), y: 814 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart12.render();


    //MENSAJES
    var chart13 = new CanvasJS.Chart("mensajesPublicaciones", {
        animationEnabled: true,
        exportEnabled: true,
        backgroundColor: "#9199be",
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
                { x: new Date(2018, 0), y: 49 },
                { x: new Date(2018, 1), y: 59 },
                { x: new Date(2018, 2), y: 31 },
                { x: new Date(2018, 3), y: 21 },
                { x: new Date(2018, 4), y: 57 },
                { x: new Date(2018, 5), y: 15 },
                { x: new Date(2018, 6), y: 69 },
                { x: new Date(2018, 7), y: 78 },
                { x: new Date(2018, 8), y: 116 },
                { x: new Date(2018, 9), y: 30 },
                { x: new Date(2018, 10), y: 28 },
                { x: new Date(2018, 11), y: 29 }
            ]
        }]
    });

    chart13.render();

    //NO ME GUSTA
    var chart14 = new CanvasJS.Chart("NoMeGustaFanPage", {
        animationEnabled: true,
        exportEnabled: true,
        backgroundColor: "#c8d6ca",
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
            type: "line",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 33 },
                { x: new Date(2018, 1), y: 22 },
                { x: new Date(2018, 2), y: 36 },
                { x: new Date(2018, 3), y: 34 },
                { x: new Date(2018, 4), y: 32 },
                { x: new Date(2018, 5), y: 27 },
                { x: new Date(2018, 6), y: 36 },
                { x: new Date(2018, 7), y: 21 },
                { x: new Date(2018, 8), y: 23 },
                { x: new Date(2018, 9), y: 28 },
                { x: new Date(2018, 10), y: 16 },
                { x: new Date(2018, 11), y: 27 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart14.render();

    /*FOTOS INTERACCIONES Y VIEWS */
    var chart15 = new CanvasJS.Chart("fotosInteraccionesViews", {
        animationEnabled: true,
        title: {
            text: ""
        },
        axisY: {
            title: "Totales",
            titleFontColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            fontSize: 10,
            tickColor: "#4F81BC"
        },
        axisY2: {
            title: "Totales",
            titleFontColor: "#C0504E",
            lineColor: "#C0504E",
            labelFontColor: "#C0504E",
            fontSize: 10,
            tickColor: "#C0504E"
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
                type: "column",
                name: "Total post con fotos",
                color: "#0584f2",
                showInLegend: true,
                fontSize: 12,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2018, 0), y: 50 },
                    { x: new Date(2018, 1), y: 39 },
                    { x: new Date(2018, 2), y: 39 },
                    { x: new Date(2018, 3), y: 41 },
                    { x: new Date(2018, 4), y: 35 },
                    { x: new Date(2018, 5), y: 30 },
                    { x: new Date(2018, 6), y: 20 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 0 },
                    { x: new Date(2018, 10), y: 0 },
                    { x: new Date(2018, 11), y: 0 }
                ]
            },

            {
                type: "column",
                name: "Total fotos views",
                color: "#F49f05",
                showInLegend: true,
                xValueFormatString: "MM YY",
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2018, 0), y: 490 },
                    { x: new Date(2018, 1), y: 602 },
                    { x: new Date(2018, 2), y: 359 },
                    { x: new Date(2018, 3), y: 476 },
                    { x: new Date(2018, 4), y: 789 },
                    { x: new Date(2018, 5), y: 168 },
                    { x: new Date(2018, 6), y: 405 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 0 },
                    { x: new Date(2018, 10), y: 0 },
                    { x: new Date(2018, 11), y: 0 }
                ]
            }
        ]
    });
    chart15.render();



    /*ARTES INTERACCIONES Y VIEWS */

    var chart16 = new CanvasJS.Chart("artesInteraccionesViews", {
        animationEnabled: true,
        title: {
            text: ""
        },
        axisY: {
            title: "Totales",
            titleFontColor: "#4F81BC",
            lineColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            tickColor: "#4F81BC"
        },
        axisY2: {
            title: "Totales",
            titleFontColor: "#C0504E",
            lineColor: "#C0504E",
            labelFontColor: "#C0504E",
            tickColor: "#C0504E"
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
                type: "column",
                name: "Total post con artes",
                color: "#583e2e",
                showInLegend: true,
                yValueFormatString: "##,##",
                dataPoints: [
                    { x: new Date(2018, 0), y: 21 },
                    { x: new Date(2018, 1), y: 25 },
                    { x: new Date(2018, 2), y: 25 },
                    { x: new Date(2018, 3), y: 22 },
                    { x: new Date(2018, 4), y: 23 },
                    { x: new Date(2018, 5), y: 16 },
                    { x: new Date(2018, 6), y: 20 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 0 },
                    { x: new Date(2018, 10), y: 0 },
                    { x: new Date(2018, 11), y: 0 }
                ]
            },
            /*
            {
                type: "bar",
                name: "Total post con links",
                color: "#F4874b",
                showInLegend: true,
                xValueFormatString: "MMMM YYYY",
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2018, 0), y: 30 },
                    { x: new Date(2018, 1), y: 40 },
                    { x: new Date(2018, 2), y: 52 },
                    { x: new Date(2018, 3), y: 0 },
                    { x: new Date(2018, 4), y: 0 },
                    { x: new Date(2018, 5), y: 0 },
                    { x: new Date(2018, 6), y: 0 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 0 },
                    { x: new Date(2018, 10), y: 0 },
                    { x: new Date(2018, 11), y: 0 }
                ]
            },*/

            {
                type: "column",
                name: "Total artes views",
                color: "#0abda0",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2018, 0), y: 112 },
                    { x: new Date(2018, 1), y: 115 },
                    { x: new Date(2018, 2), y: 55 },
                    { x: new Date(2018, 3), y: 38 },
                    { x: new Date(2018, 4), y: 213 },
                    { x: new Date(2018, 5), y: 70 },
                    { x: new Date(2018, 6), y: 73 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 0 },
                    { x: new Date(2018, 10), y: 0 },
                    { x: new Date(2018, 11), y: 0 }
                ]
            }

        ]
    });
    chart16.render();

    /*VIEWS GEENRAL */

    var chart17 = new CanvasJS.Chart("viewsGeneral", {
        colorset: "#3CB371",
        backgroundColor: "#a79c93",
        exportEnabled: true,
        animationEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "",
            fontColor: "#fff",
            fontSize: 20,
            fontFamily: "tahoma",
            fontStyle: "italic"
        },


        axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM",
            labelFontColor: "#fff",

        },
        axisY: {
            title: "No. views",
            titleFontColor: "#fff",
            suffix: "M",
            labelFontColor: "#fff",
            gridColor: "#edb5bf"
        },
        data: [{
            indexLabelFontColor: "rgba(11, 84, 157, 0.06)",
            color: "#0294a5",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 602 },
                { x: new Date(2018, 1), y: 717 },
                { x: new Date(2018, 2), y: 414 },
                { x: new Date(2018, 3), y: 514 },
                { x: new Date(2018, 4), y: 1002 },
                { x: new Date(2018, 5), y: 238 },
                { x: new Date(2018, 6), y: 478 },
                { x: new Date(2018, 7), y: 0 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart17.render();

    /*VIDEOS, VIEWS E INTERACCIONES */

    var chart18 = new CanvasJS.Chart("videosInteraccionesViews", {
        animationEnabled: true,
        title: {
            text: ""
        },
        axisY: {
            title: "Totales",
            titleFontColor: "#4F81BC",
            lineColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            tickColor: "#4F81BC"
        },
        axisY2: {
            title: "Totales",
            titleFontColor: "#C0504E",
            lineColor: "#C0504E",
            labelFontColor: "#C0504E",
            tickColor: "#C0504E"
        },
        toolTip: {
            shared: true
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM"
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
                type: "column",
                name: "Total vídeos",
                color: "#c2d3da",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2018, 0), y: 6 },
                    { x: new Date(2018, 1), y: 6 },
                    { x: new Date(2018, 2), y: 7 },
                    { x: new Date(2018, 3), y: 3 },
                    { x: new Date(2018, 4), y: 8 },
                    { x: new Date(2018, 5), y: 6 },
                    { x: new Date(2018, 6), y: 5 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 0 },
                    { x: new Date(2018, 10), y: 0 },
                    { x: new Date(2018, 11), y: 0 }
                ]
            },
            {
                type: "column",
                name: "Total vídeo plays",
                color: "#585a56",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2018, 0), y: 19 },
                    { x: new Date(2018, 1), y: 47 },
                    { x: new Date(2018, 2), y: 17 },
                    { x: new Date(2018, 3), y: 13 },
                    { x: new Date(2018, 4), y: 57 },
                    { x: new Date(2018, 5), y: 33 },
                    { x: new Date(2018, 6), y: 21 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 0 },
                    { x: new Date(2018, 10), y: 0 },
                    { x: new Date(2018, 11), y: 0 }
                ]
            },

            {
                type: "column",
                name: "Total interacciones vídeos",
                color: "#81a3a7",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2018, 0), y: 61 },
                    { x: new Date(2018, 1), y: 34 },
                    { x: new Date(2018, 2), y: 57 },
                    { x: new Date(2018, 3), y: 25 },
                    { x: new Date(2018, 4), y: 132 },
                    { x: new Date(2018, 5), y: 83 },
                    { x: new Date(2018, 6), y: 68 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 0 },
                    { x: new Date(2018, 10), y: 0 },
                    { x: new Date(2018, 11), y: 0 }
                ]
            }

        ]
    });
    chart18.render();

    /*LINKS, NOTAS DINAMICAS */

    var chart19 = new CanvasJS.Chart("linksNotasDinamicas", {
        animationEnabled: true,
        title: {
            text: ""
        },
        axisY: {
            title: "Totales",
            titleFontColor: "#4F81BC",
            lineColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            tickColor: "#4F81BC"
        },
        axisY2: {
            title: "Totales",
            titleFontColor: "#C0504E",
            lineColor: "#C0504E",
            labelFontColor: "#C0504E",
            tickColor: "#C0504E"
        },
        toolTip: {
            shared: true
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM"
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
                type: "column",
                name: "Total post link",
                color: "#52733b",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2018, 0), y: 2 },
                    { x: new Date(2018, 1), y: 0 },
                    { x: new Date(2018, 2), y: 0 },
                    { x: new Date(2018, 3), y: 1 },
                    { x: new Date(2018, 4), y: 2 },
                    { x: new Date(2018, 5), y: 0 },
                    { x: new Date(2018, 6), y: 1 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 0 },
                    { x: new Date(2018, 10), y: 0 },
                    { x: new Date(2018, 11), y: 0 }
                ]
            },
            {
                type: "column",
                name: "Total Notas Dinamicas",
                color: "#818a6f",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2018, 0), y: 1 },
                    { x: new Date(2018, 1), y: 0 },
                    { x: new Date(2018, 2), y: 0 },
                    { x: new Date(2018, 3), y: 1 },
                    { x: new Date(2018, 4), y: 0 },
                    { x: new Date(2018, 5), y: 0 },
                    { x: new Date(2018, 6), y: 0 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 0 },
                    { x: new Date(2018, 10), y: 0 },
                    { x: new Date(2018, 11), y: 0 }
                ]
            }

        ]
    });
    chart19.render();

    var chart20 = new CanvasJS.Chart("notasDinamicasinteraccionesYclicks", {
        animationEnabled: true,
        title: {
            text: ""
        },
        axisY: {
            title: "Totales",
            titleFontColor: "#4F81BC",
            lineColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            tickColor: "#4F81BC"
        },
        axisY2: {
            title: "Totales",
            titleFontColor: "#C0504E",
            lineColor: "#C0504E",
            labelFontColor: "#C0504E",
            tickColor: "#C0504E"
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
                type: "column",
                name: "Interacciones links",
                color: "#bca18d",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2018, 0), y: 19 },
                    { x: new Date(2018, 1), y: 0 },
                    { x: new Date(2018, 2), y: 0 },
                    { x: new Date(2018, 3), y: 13 },
                    { x: new Date(2018, 4), y: 6 },
                    { x: new Date(2018, 5), y: 0 },
                    { x: new Date(2018, 6), y: 14 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 0 },
                    { x: new Date(2018, 10), y: 0 },
                    { x: new Date(2018, 11), y: 0 }
                ]
            },
            {
                type: "column",
                name: "Intercciones Notas Dinamicas",
                color: "#f2746b",
                showInLegend: true,
                yValueFormatString: "##,##0",
                dataPoints: [
                    { x: new Date(2018, 0), y: 3 },
                    { x: new Date(2018, 1), y: 0 },
                    { x: new Date(2018, 2), y: 0 },
                    { x: new Date(2018, 3), y: 16 },
                    { x: new Date(2018, 4), y: 0 },
                    { x: new Date(2018, 5), y: 0 },
                    { x: new Date(2018, 6), y: 0 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 0 },
                    { x: new Date(2018, 10), y: 0 },
                    { x: new Date(2018, 11), y: 0 }
                ]
            }

        ]
    });
    chart20.render();

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