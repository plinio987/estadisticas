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
                name: "IPorcentaje de engagement",
                markerBorderColor: "white",
                color: "#F49F05",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "##0.00'%'",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [

                    { x: new Date(2018, 9), y: 0.18 },
                    { x: new Date(2018, 10), y: 0.20 },
                    { x: new Date(2018, 11), y: 0.07 }
                ]
            },
            {
                type: "column",
                name: "Post engagement rate",
                color: "#f05837",
                showInLegend: true,
                yValueFormatString: "##0.00'%'",
                dataPoints: [

                    { x: new Date(2018, 9), y: 5.10 },
                    { x: new Date(2018, 10), y: 8.09 },
                    { x: new Date(2018, 11), y: 02.93 }
                ]
            },

            {
                type: "line",
                name: "Reach engagement rate",
                color: "#000",
                showInLegend: true,
                yValueFormatString: "####0.0000'%'",
                dataPoints: [

                    { x: new Date(2018, 9), y: 0.0005 },
                    { x: new Date(2018, 10), y: 0.0003 },
                    { x: new Date(2018, 11), y: 0.0007 }
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

                { x: new Date(2018, 9), y: 294246 },
                { x: new Date(2018, 10), y: 630596 },
                { x: new Date(2018, 11), y: 9050 }

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

                { x: new Date(2018, 9), y: 0.18 },
                { x: new Date(2018, 10), y: 0.20 },
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

                { x: new Date(2018, 9), y: 861 },
                { x: new Date(2018, 10), y: 870 },
                { x: new Date(2018, 11), y: 868 }

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

                { x: new Date(2018, 9), y: 861 },
                { x: new Date(2018, 10), y: 870 },
                { x: new Date(2018, 11), y: 1 }

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

                { x: new Date(2018, 9), y: 30 },
                { x: new Date(2018, 10), y: 22 },
                { x: new Date(2018, 11), y: 18 }
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

                { x: new Date(2018, 9), y: 9 },
                { x: new Date(2018, 10), y: 52 },
                { x: new Date(2018, 11), y: 19 }

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

                { x: new Date(2018, 9), y: 130 },
                { x: new Date(2018, 10), y: 119 },
                { x: new Date(2018, 11), y: 34 }

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

                { x: new Date(2018, 9), y: 14 },
                { x: new Date(2018, 10), y: 7 },
                { x: new Date(2018, 11), y: 4 }
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

                { x: new Date(2018, 9), y: 24 },
                { x: new Date(2018, 10), y: 1 },
                { x: new Date(2018, 11), y: 2 }

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