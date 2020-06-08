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
                type: "line",
                name: "Porcentaje de engagement",
                markerBorderColor: "white",
                color: "#F49F05",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "##0.00'%'",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2018, 0), y: 0.14 },
                    { x: new Date(2018, 1), y: 0.20 },
                    { x: new Date(2018, 2), y: 0.17 },
                    { x: new Date(2018, 3), y: 0.22 },
                    { x: new Date(2018, 4), y: 0.25 },
                    { x: new Date(2018, 5), y: 0.29 },
                    { x: new Date(2018, 6), y: 0.21 },
                    { x: new Date(2018, 7), y: 0.54 },
                    { x: new Date(2018, 8), y: 0.12 },
                    { x: new Date(2018, 9), y: 0.18 },
                    { x: new Date(2018, 10), y: 0.03 },
                    { x: new Date(2018, 11), y: 0.01 }
                ]
            },

            {
                type: "column",
                name: "Post Engagement Rate",
                color: "#36688d",
                showInLegend: true,
                yValueFormatString: "##00.00'%'",
                dataPoints: [
                    { x: new Date(2018, 0), y: 41.62 },
                    { x: new Date(2018, 1), y: 31.61 },
                    { x: new Date(2018, 2), y: 24.00 },
                    { x: new Date(2018, 3), y: 30.90 },
                    { x: new Date(2018, 4), y: 21.43 },
                    { x: new Date(2018, 5), y: 15.96 },
                    { x: new Date(2018, 6), y: 31.25 },
                    { x: new Date(2018, 7), y: 53.63 },
                    { x: new Date(2018, 8), y: 25.09 },
                    { x: new Date(2018, 9), y: 25.17 },
                    { x: new Date(2018, 10), y: 17.79 },
                    { x: new Date(2018, 11), y: 28.21 }
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
                { x: new Date(2018, 0), y: 19.29 },
                { x: new Date(2018, 1), y: 25.41 },
                { x: new Date(2018, 2), y: 31.84 },
                { x: new Date(2018, 3), y: 46.43 },
                { x: new Date(2018, 4), y: 31.53 },
                { x: new Date(2018, 5), y: 13.46 },
                { x: new Date(2018, 6), y: 18.25 },
                { x: new Date(2018, 7), y: 0 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 17.30 },
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
                    { x: new Date(2018, 0), y: 30.65 },
                    { x: new Date(2018, 1), y: 5.92 },
                    { x: new Date(2018, 2), y: 16.18 },
                    { x: new Date(2018, 3), y: 40.25 },
                    { x: new Date(2018, 4), y: 7.50 },
                    { x: new Date(2018, 5), y: 5.36 },
                    { x: new Date(2018, 6), y: 7.45 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 23.86 },
                    { x: new Date(2018, 10), y: 4.42 },
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
                    { x: new Date(2018, 0), y: 19.29 },
                    { x: new Date(2018, 1), y: 25.41 },
                    { x: new Date(2018, 2), y: 31.84 },
                    { x: new Date(2018, 3), y: 46.43 },
                    { x: new Date(2018, 4), y: 31.53 },
                    { x: new Date(2018, 5), y: 13.46 },
                    { x: new Date(2018, 6), y: 18.25 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 25.10 },
                    { x: new Date(2018, 10), y: 28.42 },
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
                    { x: new Date(2018, 0), y: 4.70 },
                    { x: new Date(2018, 1), y: 14.44 },
                    { x: new Date(2018, 2), y: 5.14 },
                    { x: new Date(2018, 3), y: 3.29 },
                    { x: new Date(2018, 4), y: 2.95 },
                    { x: new Date(2018, 5), y: 18.73 },
                    { x: new Date(2018, 6), y: 30.22 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 4.52 },
                    { x: new Date(2018, 10), y: 5.82 },
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
                { x: new Date(2018, 0), y: 2950246 },
                { x: new Date(2018, 1), y: 1505202 },
                { x: new Date(2018, 2), y: 1057017 },
                { x: new Date(2018, 3), y: 1134320 },
                { x: new Date(2018, 4), y: 690501 },
                { x: new Date(2018, 5), y: 475388 },
                { x: new Date(2018, 6), y: 795958 },
                { x: new Date(2018, 7), y: 556392 },
                { x: new Date(2018, 8), y: 1149163 },
                { x: new Date(2018, 9), y: 1266603 },
                { x: new Date(2018, 10), y: 5397570 },
                { x: new Date(2018, 11), y: 23931081 }

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
                { x: new Date(2018, 0), y: 0.20 },
                { x: new Date(2018, 1), y: 0.14 },
                { x: new Date(2018, 2), y: 0.08 },
                { x: new Date(2018, 3), y: 0.12 },
                { x: new Date(2018, 4), y: 0.08 },
                { x: new Date(2018, 5), y: 0.06 },
                { x: new Date(2018, 6), y: 0.08 },
                { x: new Date(2018, 7), y: 0.14 },
                { x: new Date(2018, 8), y: 0.06 },
                { x: new Date(2018, 9), y: 0.10 },
                { x: new Date(2018, 10), y: 0.06 },
                { x: new Date(2018, 11), y: 0.10 }

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
                { x: new Date(2018, 0), y: 20768 },
                { x: new Date(2018, 1), y: 20925 },
                { x: new Date(2018, 2), y: 21127 },
                { x: new Date(2018, 3), y: 21289 },
                { x: new Date(2018, 4), y: 21409 },
                { x: new Date(2018, 5), y: 21549 },
                { x: new Date(2018, 6), y: 21706 },
                { x: new Date(2018, 7), y: 21918 },
                { x: new Date(2018, 8), y: 22155 },
                { x: new Date(2018, 9), y: 22500 },
                { x: new Date(2018, 10), y: 22738 },
                { x: new Date(2018, 11), y: 22917 }

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
                { x: new Date(2018, 0), y: 258 },
                { x: new Date(2018, 1), y: 243 },
                { x: new Date(2018, 2), y: 269 },
                { x: new Date(2018, 3), y: 231 },
                { x: new Date(2018, 4), y: 194 },
                { x: new Date(2018, 5), y: 202 },
                { x: new Date(2018, 6), y: 228 },
                { x: new Date(2018, 7), y: 261 },
                { x: new Date(2018, 8), y: 292 },
                { x: new Date(2018, 9), y: 395 },
                { x: new Date(2018, 10), y: 277 },
                { x: new Date(2018, 11), y: 256 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart7.render();


    /*GENERO FANS FACEBOOK */
    var chart8 = new CanvasJS.Chart("generoFans", {
        animationEnabled: true,
        exportEnabled: true,
        backgroundColor: "#f4d9c1",
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        exportFileName: "Doughnut Chart",
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
    chart8.render();

    //RANGO DE EDAD
    var chart9 = new CanvasJS.Chart("rangoEdadFans", {
        theme: "light1", // "light1", "ligh2", "dark1", "dark2"
        animationEnabled: true,
        backgroundColor: "#f4d9c1",
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
                { x: new Date(2018, 0), y: 100 },
                { x: new Date(2018, 1), y: 94 },
                { x: new Date(2018, 2), y: 73 },
                { x: new Date(2018, 3), y: 81 },
                { x: new Date(2018, 4), y: 82 },
                { x: new Date(2018, 5), y: 85 },
                { x: new Date(2018, 6), y: 53 },
                { x: new Date(2018, 7), y: 56 },
                { x: new Date(2018, 8), y: 57 },
                { x: new Date(2018, 9), y: 89 },
                { x: new Date(2018, 10), y: 81 },
                { x: new Date(2018, 11), y: 76 }
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
                { x: new Date(2018, 0), y: 502 },
                { x: new Date(2018, 1), y: 251 },
                { x: new Date(2018, 2), y: 238 },
                { x: new Date(2018, 3), y: 357 },
                { x: new Date(2018, 4), y: 239 },
                { x: new Date(2018, 5), y: 177 },
                { x: new Date(2018, 6), y: 168 },
                { x: new Date(2018, 7), y: 214 },
                { x: new Date(2018, 8), y: 191 },
                { x: new Date(2018, 9), y: 307 },
                { x: new Date(2018, 10), y: 105 },
                { x: new Date(2018, 11), y: 238 }

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
                { x: new Date(2018, 0), y: 3443 },
                { x: new Date(2018, 1), y: 2193 },
                { x: new Date(2018, 2), y: 1468 },
                { x: new Date(2018, 3), y: 2054 },
                { x: new Date(2018, 4), y: 1468 },
                { x: new Date(2018, 5), y: 1149 },
                { x: new Date(2018, 6), y: 1281 },
                { x: new Date(2018, 7), y: 2558 },
                { x: new Date(2018, 8), y: 1193 },
                { x: new Date(2018, 9), y: 1864 },
                { x: new Date(2018, 10), y: 1284 },
                { x: new Date(2018, 11), y: 1751 }

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
                { x: new Date(2018, 0), y: 217 },
                { x: new Date(2018, 1), y: 527 },
                { x: new Date(2018, 2), y: 46 },
                { x: new Date(2018, 3), y: 92 },
                { x: new Date(2018, 4), y: 50 },
                { x: new Date(2018, 5), y: 31 },
                { x: new Date(2018, 6), y: 207 },
                { x: new Date(2018, 7), y: 231 },
                { x: new Date(2018, 8), y: 96 },
                { x: new Date(2018, 9), y: 69 },
                { x: new Date(2018, 10), y: 53 },
                { x: new Date(2018, 11), y: 135 }
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
                { x: new Date(2018, 0), y: 52 },
                { x: new Date(2018, 1), y: 71 },
                { x: new Date(2018, 2), y: 64 },
                { x: new Date(2018, 3), y: 61 },
                { x: new Date(2018, 4), y: 61 },
                { x: new Date(2018, 5), y: 45 },
                { x: new Date(2018, 6), y: 50 },
                { x: new Date(2018, 7), y: 38 },
                { x: new Date(2018, 8), y: 39 },
                { x: new Date(2018, 9), y: 37 },
                { x: new Date(2018, 10), y: 31 },
                { x: new Date(2018, 11), y: 49 }

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
                    { x: new Date(2018, 0), y: 52 },
                    { x: new Date(2018, 1), y: 44 },
                    { x: new Date(2018, 2), y: 38 },
                    { x: new Date(2018, 3), y: 42 },
                    { x: new Date(2018, 4), y: 47 },
                    { x: new Date(2018, 5), y: 46 },
                    { x: new Date(2018, 6), y: 33 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 41 },
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
                    { x: new Date(2018, 0), y: 1103 },
                    { x: new Date(2018, 1), y: 1118 },
                    { x: new Date(2018, 2), y: 1210 },
                    { x: new Date(2018, 3), y: 1950 },
                    { x: new Date(2018, 4), y: 1482 },
                    { x: new Date(2018, 5), y: 619 },
                    { x: new Date(2018, 6), y: 710 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 1029 },
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
                    { x: new Date(2018, 0), y: 27 },
                    { x: new Date(2018, 1), y: 25 },
                    { x: new Date(2018, 2), y: 14 },
                    { x: new Date(2018, 3), y: 21 },
                    { x: new Date(2018, 4), y: 21 },
                    { x: new Date(2018, 5), y: 21 },
                    { x: new Date(2018, 6), y: 22 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 25 },
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
                    { x: new Date(2018, 0), y: 127 },
                    { x: new Date(2018, 1), y: 361 },
                    { x: new Date(2018, 2), y: 72 },
                    { x: new Date(2018, 3), y: 69 },
                    { x: new Date(2018, 4), y: 62 },
                    { x: new Date(2018, 5), y: 412 },
                    { x: new Date(2018, 6), y: 272 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 113 },
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
                { x: new Date(2018, 0), y: 1130 },
                { x: new Date(2018, 1), y: 1479 },
                { x: new Date(2018, 2), y: 1282 },
                { x: new Date(2018, 3), y: 2019 },
                { x: new Date(2018, 4), y: 1544 },
                { x: new Date(2018, 5), y: 1031 },
                { x: new Date(2018, 6), y: 710 },
                { x: new Date(2018, 7), y: 0 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 2352 },
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
                    { x: new Date(2018, 0), y: 17 },
                    { x: new Date(2018, 1), y: 13 },
                    { x: new Date(2018, 2), y: 11 },
                    { x: new Date(2018, 3), y: 8 },
                    { x: new Date(2018, 4), y: 6 },
                    { x: new Date(2018, 5), y: 11 },
                    { x: new Date(2018, 6), y: 11 },
                    { x: new Date(2018, 7), y: 12 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 22 },
                    { x: new Date(2018, 10), y: 12 },
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
                    { x: new Date(2018, 0), y: 521 },
                    { x: new Date(2018, 1), y: 77 },
                    { x: new Date(2018, 2), y: 178 },
                    { x: new Date(2018, 3), y: 322 },
                    { x: new Date(2018, 4), y: 45 },
                    { x: new Date(2018, 5), y: 59 },
                    { x: new Date(2018, 6), y: 82 },
                    { x: new Date(2018, 7), y: 97 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 501 },
                    { x: new Date(2018, 10), y: 53 },
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
                    { x: new Date(2018, 0), y: 1827 },
                    { x: new Date(2018, 1), y: 338 },
                    { x: new Date(2018, 2), y: 153 },
                    { x: new Date(2018, 3), y: 568 },
                    { x: new Date(2018, 4), y: 97 },
                    { x: new Date(2018, 5), y: 150 },
                    { x: new Date(2018, 6), y: 135 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 538 },
                    { x: new Date(2018, 10), y: 114 },
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
                    { x: new Date(2018, 0), y: 1 },
                    { x: new Date(2018, 1), y: 12 },
                    { x: new Date(2018, 2), y: 7 },
                    { x: new Date(2018, 3), y: 6 },
                    { x: new Date(2018, 4), y: 7 },
                    { x: new Date(2018, 5), y: 6 },
                    { x: new Date(2018, 6), y: 9 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 0 },
                    { x: new Date(2018, 10), y: 1 },
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
                    { x: new Date(2018, 0), y: 3 },
                    { x: new Date(2018, 1), y: 1 },
                    { x: new Date(2018, 2), y: 1 },
                    { x: new Date(2018, 3), y: 2 },
                    { x: new Date(2018, 4), y: 1 },
                    { x: new Date(2018, 5), y: 0 },
                    { x: new Date(2018, 6), y: 0 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 1 },
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
                    { x: new Date(2018, 0), y: 70 },
                    { x: new Date(2018, 1), y: 437 },
                    { x: new Date(2018, 2), y: 136 },
                    { x: new Date(2018, 3), y: 205 },
                    { x: new Date(2018, 4), y: 232 },
                    { x: new Date(2018, 5), y: 110 },
                    { x: new Date(2018, 6), y: 178 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 6 },
                    { x: new Date(2018, 10), y: 4 },
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
                    { x: new Date(2018, 0), y: 30 },
                    { x: new Date(2018, 1), y: 3 },
                    { x: new Date(2018, 2), y: 5 },
                    { x: new Date(2018, 3), y: 16 },
                    { x: new Date(2018, 4), y: 4 },
                    { x: new Date(2018, 5), y: 0 },
                    { x: new Date(2018, 6), y: 0 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 8 },
                    { x: new Date(2018, 10), y: 0 },
                    { x: new Date(2018, 11), y: 0 }
                ]
            }

        ]
    });
    chart20.render();



    /*VIEWS GENERAL*/


    var chart21 = new CanvasJS.Chart("postEngagementRate", {
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
            type: "area",
            name: "Post engagement rate",
            color: "#f05837",
            showInLegend: true,
            yValueFormatString: "##00.00'%'",
            dataPoints: [
                { x: new Date(2018, 0), y: 41.62 },
                { x: new Date(2018, 1), y: 31.61 },
                { x: new Date(2018, 2), y: 24.00 },
                { x: new Date(2018, 3), y: 30.90 },
                { x: new Date(2018, 4), y: 21.43 },
                { x: new Date(2018, 5), y: 15.96 },
                { x: new Date(2018, 6), y: 31.25 },
                { x: new Date(2018, 7), y: 53.63 },
                { x: new Date(2018, 8), y: 25.09 },
                { x: new Date(2018, 9), y: 25.17 },
                { x: new Date(2018, 10), y: 17.79 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart21.render();

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