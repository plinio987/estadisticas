window.onload = function() {

    /*   *****************************************
                CHARTS TWITTER
      **************************************** */

    var chart11 = new CanvasJS.Chart("engagementTwitterBij", {
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
                { x: new Date(2018, 0), y: 1.04 },
                { x: new Date(2018, 1), y: 1.26 },
                { x: new Date(2018, 2), y: 1.28 },
                { x: new Date(2018, 3), y: 1.15 },
                { x: new Date(2018, 4), y: 1.24 },
                { x: new Date(2018, 5), y: 1.52 },
                { x: new Date(2018, 6), y: 1.32 },
                { x: new Date(2018, 7), y: 0.68 },
                { x: new Date(2018, 8), y: 1.01 },
                { x: new Date(2018, 9), y: 0.95 },
                { x: new Date(2018, 10), y: 0.93 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart11.render();

    var chart12 = new CanvasJS.Chart("twitterImpresionesBij", {
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
                { x: new Date(2018, 0), y: 59600 },
                { x: new Date(2018, 1), y: 67600 },
                { x: new Date(2018, 2), y: 40200 },
                { x: new Date(2018, 3), y: 83900 },
                { x: new Date(2018, 4), y: 55400 },
                { x: new Date(2018, 5), y: 64600 },
                { x: new Date(2018, 6), y: 69800 },
                { x: new Date(2018, 7), y: 54000 },
                { x: new Date(2018, 8), y: 27700 },
                { x: new Date(2018, 9), y: 57600 },
                { x: new Date(2018, 10), y: 51200 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart12.render();


    var chart13 = new CanvasJS.Chart("nuevosSeguidoresBij", {
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
                { x: new Date(2018, 0), y: 28 },
                { x: new Date(2018, 1), y: 45 },
                { x: new Date(2018, 2), y: 16 },
                { x: new Date(2018, 3), y: 24 },
                { x: new Date(2018, 4), y: 24 },
                { x: new Date(2018, 5), y: 36 },
                { x: new Date(2018, 6), y: 23 },
                { x: new Date(2018, 7), y: -65 },
                { x: new Date(2018, 8), y: 28 },
                { x: new Date(2018, 9), y: 44 },
                { x: new Date(2018, 10), y: -33 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart13.render();



    var chart15 = new CanvasJS.Chart("interaccionesTwitterBij", {
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
            titleFontColor: "#222",
            labelFontColor: "#222",
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
                { x: new Date(2018, 0), y: 622 },
                { x: new Date(2018, 1), y: 849 },
                { x: new Date(2018, 2), y: 514 },
                { x: new Date(2018, 3), y: 962 },
                { x: new Date(2018, 4), y: 686 },
                { x: new Date(2018, 5), y: 982 },
                { x: new Date(2018, 6), y: 923 },
                { x: new Date(2018, 7), y: 366 },
                { x: new Date(2018, 8), y: 280 },
                { x: new Date(2018, 9), y: 546 },
                { x: new Date(2018, 10), y: 478 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart15.render();

    var chart16 = new CanvasJS.Chart("meGustaTwitterBij", {
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
                { x: new Date(2018, 0), y: 407 },
                { x: new Date(2018, 1), y: 596 },
                { x: new Date(2018, 2), y: 327 },
                { x: new Date(2018, 3), y: 610 },
                { x: new Date(2018, 4), y: 397 },
                { x: new Date(2018, 5), y: 624 },
                { x: new Date(2018, 6), y: 572 },
                { x: new Date(2018, 7), y: 227 },
                { x: new Date(2018, 8), y: 201 },
                { x: new Date(2018, 9), y: 359 },
                { x: new Date(2018, 10), y: 301 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart16.render();

    var chart17 = new CanvasJS.Chart("respuestaTwitterBij", {
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
            title: "cantidad mensual"
        },
        data: [{
            type: "stepLine",
            color: "#51A2D9",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 12 },
                { x: new Date(2018, 1), y: 10 },
                { x: new Date(2018, 2), y: 11 },
                { x: new Date(2018, 3), y: 23 },
                { x: new Date(2018, 4), y: 15 },
                { x: new Date(2018, 5), y: 30 },
                { x: new Date(2018, 6), y: 67 },
                { x: new Date(2018, 7), y: 21 },
                { x: new Date(2018, 8), y: 14 },
                { x: new Date(2018, 9), y: 70 },
                { x: new Date(2018, 10), y: 75 },
                { x: new Date(2018, 11), y: 0 }
            ]
        }]
    });

    chart17.render();



    var chart18 = new CanvasJS.Chart("retuitsBij", {
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
            titleFontColor: "#222",
            labelFontColor: "#222",
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
                { x: new Date(2018, 0), y: 119 },
                { x: new Date(2018, 1), y: 212 },
                { x: new Date(2018, 2), y: 124 },
                { x: new Date(2018, 3), y: 223 },
                { x: new Date(2018, 4), y: 220 },
                { x: new Date(2018, 5), y: 236 },
                { x: new Date(2018, 6), y: 200 },
                { x: new Date(2018, 7), y: 94 },
                { x: new Date(2018, 8), y: 53 },
                { x: new Date(2018, 9), y: 100 },
                { x: new Date(2018, 10), y: 88 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart18.render();

    var chart19 = new CanvasJS.Chart("clicsTwitterBij", {
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
            title: "cantidad mensual"
        },
        data: [{
            type: "line",
            xValueFormatString: "MMM, YYYY",
            color: "#51A2D9",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 94 },
                { x: new Date(2018, 1), y: 35 },
                { x: new Date(2018, 2), y: 52 },
                { x: new Date(2018, 3), y: 101 },
                { x: new Date(2018, 4), y: 54 },
                { x: new Date(2018, 5), y: 92 },
                { x: new Date(2018, 6), y: 84 },
                { x: new Date(2018, 7), y: 24 },
                { x: new Date(2018, 8), y: 12 },
                { x: new Date(2018, 9), y: 17 },
                { x: new Date(2018, 10), y: 14 },
                { x: new Date(2018, 11), y: 0 }
            ]
        }]
    });

    chart19.render();

    var chart20 = new CanvasJS.Chart("VisitasPerfilTwitterBij", {
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
                { x: new Date(2018, 0), y: 3307 },
                { x: new Date(2018, 1), y: 3632 },
                { x: new Date(2018, 2), y: 2840 },
                { x: new Date(2018, 3), y: 4244 },
                { x: new Date(2018, 4), y: 2416 },
                { x: new Date(2018, 5), y: 3086 },
                { x: new Date(2018, 6), y: 3571 },
                { x: new Date(2018, 7), y: 2067 },
                { x: new Date(2018, 8), y: 1074 },
                { x: new Date(2018, 9), y: 1801 },
                { x: new Date(2018, 10), y: 2341 },
                { x: new Date(2018, 11), y: 0 }
            ]
        }]
    });

    chart20.render();

    var chart21 = new CanvasJS.Chart("tweetsRealizadosBij", {
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
                { x: new Date(2018, 0), y: 80 },
                { x: new Date(2018, 1), y: 95 },
                { x: new Date(2018, 2), y: 90 },
                { x: new Date(2018, 3), y: 177 },
                { x: new Date(2018, 4), y: 96 },
                { x: new Date(2018, 5), y: 36 },
                { x: new Date(2018, 6), y: 23 },
                { x: new Date(2018, 7), y: 78 },
                { x: new Date(2018, 8), y: 58 },
                { x: new Date(2018, 9), y: 125 },
                { x: new Date(2018, 10), y: 131 },
                { x: new Date(2018, 11), y: 0 }
            ]
        }]
    });

    chart21.render();


    var chart22 = new CanvasJS.Chart("mencionesTweetsBij", {
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
            type: "column",
            xValueFormatString: "MMM, YYYY",
            color: "#583e2e",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 68 },
                { x: new Date(2018, 1), y: 125 },
                { x: new Date(2018, 2), y: 38 },
                { x: new Date(2018, 3), y: 92 },
                { x: new Date(2018, 4), y: 66 },
                { x: new Date(2018, 5), y: 98 },
                { x: new Date(2018, 6), y: 116 },
                { x: new Date(2018, 7), y: 27 },
                { x: new Date(2018, 8), y: 52 },
                { x: new Date(2018, 9), y: 41 },
                { x: new Date(2018, 10), y: 21 },
                { x: new Date(2018, 11), y: 0 }
            ]
        }]
    });

    chart22.render();


    //total de seguidores

    var chart23 = new CanvasJS.Chart("twitterTotalSeguidores", {
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
                { x: new Date(2018, 0), y: 4531 },
                { x: new Date(2018, 1), y: 4576 },
                { x: new Date(2018, 2), y: 4592 },
                { x: new Date(2018, 3), y: 4616 },
                { x: new Date(2018, 4), y: 4640 },
                { x: new Date(2018, 5), y: 4676 },
                { x: new Date(2018, 6), y: 4508 },
                { x: new Date(2018, 7), y: 4444 },
                { x: new Date(2018, 8), y: 4473 },
                { x: new Date(2018, 9), y: 4515 },
                { x: new Date(2018, 10), y: 4480 },
                { x: new Date(2018, 11), y: 0 }
            ]
        }]
    });

    chart23.render();



    /*PORCENTAJE DE PARTICIPACION ADESS*/


    var chart24 = new CanvasJS.Chart("twitterPorcentajeParticipacion", {
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
                { x: new Date(2018, 10), y: 0.11 },
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
                    { x: new Date(2018, 9), y: 4.25 },
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
                    { x: new Date(2018, 9), y: 4.75 },
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
                    { x: new Date(2018, 9), y: 4.00 },
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