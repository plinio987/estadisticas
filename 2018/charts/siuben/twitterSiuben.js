/*   *****************************************
            CHARTS TWITTER
  **************************************** */


window.onload = function() {

    CanvasJS.addColorSet("generoShades", [ //colorSet Array

        "#f50057",
        "#2962ff"
    ]);

    var chart1 = new CanvasJS.Chart("engagementTwitterSiuben", {
        backgroundColor: "#d9dcd8",
        exportEnabled: true,
        animationEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Tasa engagement mensual Twitter",
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
            title: "Engagement mensual",
            labelFontColor: "#222",
            titleFontColor: "#222",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#f29d4b",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2018, 0), y: 1.55 },
                { x: new Date(2018, 1), y: 1.02 },
                { x: new Date(2018, 2), y: 1.09 },
                { x: new Date(2018, 3), y: 0.89 },
                { x: new Date(2018, 4), y: 0.90 },
                { x: new Date(2018, 5), y: 2.45 },
                { x: new Date(2018, 6), y: 1.32 },
                { x: new Date(2018, 7), y: 0.92 },
                { x: new Date(2018, 8), y: 1.80 },
                { x: new Date(2018, 9), y: 1.17 },
                { x: new Date(2018, 10), y: 1.33 },
                { x: new Date(2018, 11), y: 0.51 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart1.render();

    var chart2 = new CanvasJS.Chart("twitterImpresionesSiuben", {
        animationEnabled: true,
        backgroundColor: "#d9dcd8",
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        title: {
            text: "Impresiones mensuales",
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
            titleFontColor: "#222",
            labelFontColor: "#222",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#f29d4b",
            name: "views",
            type: "line",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 40200 },
                { x: new Date(2018, 1), y: 32400 },
                { x: new Date(2018, 2), y: 13200 },
                { x: new Date(2018, 3), y: 11100 },
                { x: new Date(2018, 4), y: 14400 },
                { x: new Date(2018, 5), y: 9064 },
                { x: new Date(2018, 6), y: 14300 },
                { x: new Date(2018, 7), y: 10800 },
                { x: new Date(2018, 8), y: 17000 },
                { x: new Date(2018, 9), y: 14300 },
                { x: new Date(2018, 10), y: 10100 },
                { x: new Date(2018, 11), y: 15800 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart2.render();


    var chart3 = new CanvasJS.Chart("nuevosSeguidoresSiuben", {
        animationEnabled: true,
        backgroundColor: "#DFD0F1",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Nuevos seguidores",
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
            titleFontColor: "#222",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#F03625",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 59 },
                { x: new Date(2018, 1), y: 64 },
                { x: new Date(2018, 2), y: 17 },
                { x: new Date(2018, 3), y: 56 },
                { x: new Date(2018, 4), y: 56 },
                { x: new Date(2018, 5), y: 81 },
                { x: new Date(2018, 6), y: 48 },
                { x: new Date(2018, 7), y: 22 },
                { x: new Date(2018, 8), y: 91 },
                { x: new Date(2018, 9), y: 119 },
                { x: new Date(2018, 10), y: 64 },
                { x: new Date(2018, 11), y: 37 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart3.render();



    var chart4 = new CanvasJS.Chart("interaccionesTwitterSiuben", {
        animationEnabled: true,
        backgroundColor: "#DFD0F1",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Interacciones Mensuales",
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
            title: "No. interacciones",
            labelFontColor: "#222",
            titleFontColor: "#222",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#F03625",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 623 },
                { x: new Date(2018, 1), y: 330 },
                { x: new Date(2018, 2), y: 144 },
                { x: new Date(2018, 3), y: 99 },
                { x: new Date(2018, 4), y: 129 },
                { x: new Date(2018, 5), y: 76 },
                { x: new Date(2018, 6), y: 165 },
                { x: new Date(2018, 7), y: 99 },
                { x: new Date(2018, 8), y: 306 },
                { x: new Date(2018, 9), y: 168 },
                { x: new Date(2018, 10), y: 134 },
                { x: new Date(2018, 11), y: 80 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart4.render();

    var chart5 = new CanvasJS.Chart("meGustaTwitterSiuben", {
        animationEnabled: true,
        backgroundColor: "#DFD0F1",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Me gusta en publicaciones",
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
            titleFontColor: "#222",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#F03625",
            name: "views",
            type: "line",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 395 },
                { x: new Date(2018, 1), y: 187 },
                { x: new Date(2018, 2), y: 69 },
                { x: new Date(2018, 3), y: 41 },
                { x: new Date(2018, 4), y: 79 },
                { x: new Date(2018, 5), y: 43 },
                { x: new Date(2018, 6), y: 88 },
                { x: new Date(2018, 7), y: 59 },
                { x: new Date(2018, 8), y: 187 },
                { x: new Date(2018, 9), y: 106 },
                { x: new Date(2018, 10), y: 77 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart5.render();

    var chart6 = new CanvasJS.Chart("respuestaTwitterSiuben", {
        animationEnabled: true,
        backgroundColor: "#B8E4F3",
        exportEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Repuestas en publicaciones",
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
            title: "cantidad mensual",
        },
        data: [{
            type: "stepLine",
            color: "#51A2D9",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 7 },
                { x: new Date(2018, 1), y: 9 },
                { x: new Date(2018, 2), y: 4 },
                { x: new Date(2018, 3), y: 2 },
                { x: new Date(2018, 4), y: 8 },
                { x: new Date(2018, 5), y: 1 },
                { x: new Date(2018, 6), y: 5 },
                { x: new Date(2018, 7), y: 5 },
                { x: new Date(2018, 8), y: 2 },
                { x: new Date(2018, 9), y: 3 },
                { x: new Date(2018, 10), y: 11 },
                { x: new Date(2018, 11), y: 0 }
            ]
        }]
    });

    chart6.render();



    var chart7 = new CanvasJS.Chart("retuitsSiuben", {
        animationEnabled: true,
        backgroundColor: "#B8E4F3",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Retweets mensuales",
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
            titleFontColor: "#222",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#51A2D9",
            name: "views",
            type: "line",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 192 },
                { x: new Date(2018, 1), y: 111 },
                { x: new Date(2018, 2), y: 41 },
                { x: new Date(2018, 3), y: 20 },
                { x: new Date(2018, 4), y: 32 },
                { x: new Date(2018, 5), y: 28 },
                { x: new Date(2018, 6), y: 39 },
                { x: new Date(2018, 7), y: 27 },
                { x: new Date(2018, 8), y: 102 },
                { x: new Date(2018, 9), y: 52 },
                { x: new Date(2018, 10), y: 35 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart7.render();

    var chart8 = new CanvasJS.Chart("clicsTwitterSiuben", {
        animationEnabled: true,
        backgroundColor: "#B8E4F3",
        exportEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Clics en publicaciones",
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
            title: "cantidad mensual",
            labelFontColor: "#222",

        },
        data: [{
            type: "line",
            xValueFormatString: "MMM, YYYY",
            color: "#51A2D9",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 29 },
                { x: new Date(2018, 1), y: 23 },
                { x: new Date(2018, 2), y: 30 },
                { x: new Date(2018, 3), y: 38 },
                { x: new Date(2018, 4), y: 22 },
                { x: new Date(2018, 5), y: 4 },
                { x: new Date(2018, 6), y: 8 },
                { x: new Date(2018, 7), y: 8 },
                { x: new Date(2018, 8), y: 15 },
                { x: new Date(2018, 9), y: 7 },
                { x: new Date(2018, 10), y: 11 },
                { x: new Date(2018, 11), y: 0 }
            ]
        }]
    });

    chart8.render();

    //VISITAS LA PERFIL

    var chart9 = new CanvasJS.Chart("VisitasPerfilTwitterSiuben", {
        animationEnabled: true,
        backgroundColor: "#f1e0d6",
        exportEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Visitas al perfil",
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
            title: "cantidad mensual"
        },
        data: [{
            type: "stepLine",
            color: "#583e2e",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 1102 },
                { x: new Date(2018, 1), y: 901 },
                { x: new Date(2018, 2), y: 665 },
                { x: new Date(2018, 3), y: 1000 },
                { x: new Date(2018, 4), y: 1075 },
                { x: new Date(2018, 5), y: 485 },
                { x: new Date(2018, 6), y: 511 },
                { x: new Date(2018, 7), y: 512 },
                { x: new Date(2018, 8), y: 754 },
                { x: new Date(2018, 9), y: 621 },
                { x: new Date(2018, 10), y: 586 },
                { x: new Date(2018, 11), y: 515 }
            ]
        }]
    });

    chart9.render();

    //TWEETS REALIZADOS
    var chart10 = new CanvasJS.Chart("tweetsRealizadosSiuben", {
        animationEnabled: true,
        backgroundColor: "#f1e0d6",
        exportEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Tweets realizados per mes",
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
            title: "cantidad mensual"
        },
        data: [{
            type: "stepLine",
            color: "#583e2e",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 55 },
                { x: new Date(2018, 1), y: 50 },
                { x: new Date(2018, 2), y: 17 },
                { x: new Date(2018, 3), y: 15 },
                { x: new Date(2018, 4), y: 27 },
                { x: new Date(2018, 5), y: 9 },
                { x: new Date(2018, 6), y: 16 },
                { x: new Date(2018, 7), y: 10 },
                { x: new Date(2018, 8), y: 39 },
                { x: new Date(2018, 9), y: 25 },
                { x: new Date(2018, 10), y: 25 },
                { x: new Date(2018, 11), y: 19 }
            ]
        }]
    });

    chart10.render();

    //MENCIONES
    var chart11 = new CanvasJS.Chart("mencionesTweetsSiuben", {
        animationEnabled: true,
        backgroundColor: "#f1e0d6",
        exportEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Menciones a la cuenta",
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
            title: "cantidad mensual"
        },
        data: [{
            type: "bar",
            color: "#583e2e",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 29 },
                { x: new Date(2018, 1), y: 18 },
                { x: new Date(2018, 2), y: 16 },
                { x: new Date(2018, 3), y: 66 },
                { x: new Date(2018, 4), y: 18 },
                { x: new Date(2018, 5), y: 06 },
                { x: new Date(2018, 6), y: 21 },
                { x: new Date(2018, 7), y: 28 },
                { x: new Date(2018, 8), y: 44 },
                { x: new Date(2018, 9), y: 89 },
                { x: new Date(2018, 10), y: 24 },
                { x: new Date(2018, 11), y: 18 }
            ]
        }]
    });

    chart11.render();


    //total de seguidores

    var chart12 = new CanvasJS.Chart("twitterTotalSeguidoresSiuben", {
        animationEnabled: true,
        exportEnabled: true,
        backgroundColor: "#f3d4a0",
        theme: "light1", //"light1", "light2", "dark1", "dark2", light2
        title: {
            text: "Total de seguidores",
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
            title: "Seguidores",
            type: "wavy"

        },
        data: [{
            type: "bar",
            indexLabelFontColor: "#000",
            indexLabelPlacement: "outside",
            labelFontColor: "#000",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 3292 },
                { x: new Date(2018, 1), y: 3356 },
                { x: new Date(2018, 2), y: 3373 },
                { x: new Date(2018, 3), y: 3409 },
                { x: new Date(2018, 4), y: 3485 },
                { x: new Date(2018, 5), y: 3566 },
                { x: new Date(2018, 6), y: 3592 },
                { x: new Date(2018, 7), y: 3612 },
                { x: new Date(2018, 8), y: 3707 },
                { x: new Date(2018, 9), y: 3844 },
                { x: new Date(2018, 10), y: 3889 },
                { x: new Date(2018, 11), y: 0 }
            ]
        }]
    });

    chart12.render();



    /*PORCENTAJE DE PARTICIPACION ADESS*/


    var chart13 = new CanvasJS.Chart("twitterPorcentajeParticipacionSiuben", {
        animationEnabled: true,
        backgroundColor: "#4d6d9a",
        //theme: "light1", "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        title: {
            text: "Porcentaje de participación",
            fontColor: "#fff",
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
            color: "#86b3d1",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2018, 0), y: 0.19 },
                { x: new Date(2018, 1), y: 0.10 },
                { x: new Date(2018, 2), y: 0.04 },
                { x: new Date(2018, 3), y: 0.04 },
                { x: new Date(2018, 4), y: 0.04 },
                { x: new Date(2018, 5), y: 0.02 },
                { x: new Date(2018, 6), y: 0.04 },
                { x: new Date(2018, 7), y: 0.03 },
                { x: new Date(2018, 8), y: 0.08 },
                { x: new Date(2018, 9), y: 0.04 },
                { x: new Date(2018, 10), y: 0.03 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart13.render();

    /*PORCENTAJE DE PARTICIPACION ADESS*/


    var chart24 = new CanvasJS.Chart("twitterPorcentajeParticipacionSiuben", {
        animationEnabled: true,
        backgroundColor: "#4d6d9a",
        //theme: "light1", "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        title: {
            text: "Porcentaje de participación",
            fontColor: "#fff",
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
            color: "#86b3d1",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2018, 0), y: 0.14 },
                { x: new Date(2018, 1), y: 0.19 },
                { x: new Date(2018, 2), y: 0.11 },
                { x: new Date(2018, 3), y: 0.21 },
                { x: new Date(2018, 4), y: 0.15 },
                { x: new Date(2018, 5), y: 0.21 },
                { x: new Date(2018, 6), y: 0.20 },
                { x: new Date(2018, 7), y: 0.08 },
                { x: new Date(2018, 8), y: 0.06 },
                { x: new Date(2018, 9), y: 0.12 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart24.render();

    var chart25 = new CanvasJS.Chart("twitterPromedioInteracciones", {
        animationEnabled: true,
        backgroundColor: "#dcd9c6",
        //theme: "light2",
        title: {
            text: "Promedio interacciones"
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
                name: "Promedio interaccion fotos",
                markerBorderColor: "white",
                color: "#F49F05",
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: "##0.00'%'",
                xValueFormatString: "MMMM YYYY",
                dataPoints: [
                    { x: new Date(2018, 0), y: 0 },
                    { x: new Date(2018, 1), y: 0 },
                    { x: new Date(2018, 2), y: 0 },
                    { x: new Date(2018, 3), y: 0 },
                    { x: new Date(2018, 4), y: 0 },
                    { x: new Date(2018, 5), y: 0 },
                    { x: new Date(2018, 6), y: 0 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 6.41 },
                    { x: new Date(2018, 10), y: 0 },
                    { x: new Date(2018, 11), y: 0 }
                ]
            },
            {
                type: "column",
                name: "Promedio interaccion artes",
                color: "#f05837",
                showInLegend: true,
                yValueFormatString: "##0.00'%'",
                dataPoints: [
                    { x: new Date(2018, 0), y: 0 },
                    { x: new Date(2018, 1), y: 0 },
                    { x: new Date(2018, 2), y: 0 },
                    { x: new Date(2018, 3), y: 0 },
                    { x: new Date(2018, 4), y: 0 },
                    { x: new Date(2018, 5), y: 0 },
                    { x: new Date(2018, 6), y: 0 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 4.83 },
                    { x: new Date(2018, 10), y: 0 },
                    { x: new Date(2018, 11), y: 0 }
                ]
            },

            {
                type: "line",
                name: "Promedio interaccion videos",
                color: "#000",
                showInLegend: true,
                yValueFormatString: "##0.00'%'",
                dataPoints: [
                    { x: new Date(2018, 0), y: 0 },
                    { x: new Date(2018, 1), y: 0 },
                    { x: new Date(2018, 2), y: 0 },
                    { x: new Date(2018, 3), y: 0 },
                    { x: new Date(2018, 4), y: 0 },
                    { x: new Date(2018, 5), y: 0 },
                    { x: new Date(2018, 6), y: 0 },
                    { x: new Date(2018, 7), y: 0 },
                    { x: new Date(2018, 8), y: 0 },
                    { x: new Date(2018, 9), y: 10.50 },
                    { x: new Date(2018, 10), y: 0 },
                    { x: new Date(2018, 11), y: 0 }
                ]
            }
        ]
    });
    chart25.render();


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