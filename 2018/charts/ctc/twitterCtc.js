/*   *****************************************
            CHARTS TWITTER
  **************************************** */


window.onload = function() {

    var chart11 = new CanvasJS.Chart("engagementTwitterCTC", {
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
                { x: new Date(2018, 0), y: 1.34 },
                { x: new Date(2018, 1), y: 1.50 },
                { x: new Date(2018, 2), y: 1.47 },
                { x: new Date(2018, 3), y: 1.08 },
                { x: new Date(2018, 4), y: 1.06 },
                { x: new Date(2018, 5), y: 0.96 },
                { x: new Date(2018, 6), y: 0.95 },
                { x: new Date(2018, 7), y: 0.82 },
                { x: new Date(2018, 8), y: 0.79 },
                { x: new Date(2018, 9), y: 0.98 },
                { x: new Date(2018, 10), y: 0.99 },
                { x: new Date(2018, 11), y: 0.88 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart11.render();

    var chart12 = new CanvasJS.Chart("twitterImpresionesCTC", {
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
                { x: new Date(2018, 0), y: 119900 },
                { x: new Date(2018, 1), y: 97000 },
                { x: new Date(2018, 2), y: 106300 },
                { x: new Date(2018, 3), y: 88200 },
                { x: new Date(2018, 4), y: 82800 },
                { x: new Date(2018, 5), y: 57200 },
                { x: new Date(2018, 6), y: 40900 },
                { x: new Date(2018, 7), y: 55400 },
                { x: new Date(2018, 8), y: 41100 },
                { x: new Date(2018, 9), y: 52100 },
                { x: new Date(2018, 10), y: 46200 },
                { x: new Date(2018, 11), y: 31300 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart12.render();


    var chart13 = new CanvasJS.Chart("nuevosSeguidoresCTC", {
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
                { x: new Date(2018, 0), y: 56 },
                { x: new Date(2018, 1), y: 39 },
                { x: new Date(2018, 2), y: 23 },
                { x: new Date(2018, 3), y: 21 },
                { x: new Date(2018, 4), y: 49 },
                { x: new Date(2018, 5), y: 22 },
                { x: new Date(2018, 6), y: -105 },
                { x: new Date(2018, 7), y: 06 },
                { x: new Date(2018, 8), y: 03 },
                { x: new Date(2018, 9), y: 53 },
                { x: new Date(2018, 10), y: -26 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart13.render();



    var chart15 = new CanvasJS.Chart("interaccionesTwitterCTC", {
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
                { x: new Date(2018, 0), y: 1605 },
                { x: new Date(2018, 1), y: 1451 },
                { x: new Date(2018, 2), y: 1562 },
                { x: new Date(2018, 3), y: 955 },
                { x: new Date(2018, 4), y: 879 },
                { x: new Date(2018, 5), y: 551 },
                { x: new Date(2018, 6), y: 389 },
                { x: new Date(2018, 7), y: 456 },
                { x: new Date(2018, 8), y: 324 },
                { x: new Date(2018, 9), y: 508 },
                { x: new Date(2018, 10), y: 458 },
                { x: new Date(2018, 11), y: 277 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart15.render();

    var chart16 = new CanvasJS.Chart("meGustaTwitterCTC", {
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
                { x: new Date(2018, 0), y: 1000 },
                { x: new Date(2018, 1), y: 1000 },
                { x: new Date(2018, 2), y: 852 },
                { x: new Date(2018, 3), y: 527 },
                { x: new Date(2018, 4), y: 479 },
                { x: new Date(2018, 5), y: 300 },
                { x: new Date(2018, 6), y: 213 },
                { x: new Date(2018, 7), y: 227 },
                { x: new Date(2018, 8), y: 169 },
                { x: new Date(2018, 9), y: 263 },
                { x: new Date(2018, 10), y: 208 },
                { x: new Date(2018, 11), y: 152 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart16.render();

    var chart17 = new CanvasJS.Chart("respuestaTwitterCTC", {
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
                { x: new Date(2018, 0), y: 23 },
                { x: new Date(2018, 1), y: 13 },
                { x: new Date(2018, 2), y: 44 },
                { x: new Date(2018, 3), y: 45 },
                { x: new Date(2018, 4), y: 14 },
                { x: new Date(2018, 5), y: 12 },
                { x: new Date(2018, 6), y: 26 },
                { x: new Date(2018, 7), y: 39 },
                { x: new Date(2018, 8), y: 14 },
                { x: new Date(2018, 9), y: 42 },
                { x: new Date(2018, 10), y: 67 },
                { x: new Date(2018, 11), y: 30 }
            ]
        }]
    });

    chart17.render();



    var chart18 = new CanvasJS.Chart("retuitsCTC", {
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
            title: "Retweets mensuales",
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
                { x: new Date(2018, 0), y: 417 },
                { x: new Date(2018, 1), y: 344 },
                { x: new Date(2018, 2), y: 512 },
                { x: new Date(2018, 3), y: 262 },
                { x: new Date(2018, 4), y: 216 },
                { x: new Date(2018, 5), y: 144 },
                { x: new Date(2018, 6), y: 105 },
                { x: new Date(2018, 7), y: 128 },
                { x: new Date(2018, 8), y: 169 },
                { x: new Date(2018, 9), y: 121 },
                { x: new Date(2018, 10), y: 78 },
                { x: new Date(2018, 11), y: 48 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart18.render();

    var chart19 = new CanvasJS.Chart("clicsTwitterCTC", {
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
            color: "#51A2D9",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 165 },
                { x: new Date(2018, 1), y: 94 },
                { x: new Date(2018, 2), y: 154 },
                { x: new Date(2018, 3), y: 121 },
                { x: new Date(2018, 4), y: 170 },
                { x: new Date(2018, 5), y: 95 },
                { x: new Date(2018, 6), y: 45 },
                { x: new Date(2018, 7), y: 62 },
                { x: new Date(2018, 8), y: 42 },
                { x: new Date(2018, 9), y: 82 },
                { x: new Date(2018, 10), y: 105 },
                { x: new Date(2018, 11), y: 47 }
            ]
        }]
    });

    chart19.render();

    var chart20 = new CanvasJS.Chart("VisitasPerfilTwitterCTC", {
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
                { x: new Date(2018, 0), y: 3843 },
                { x: new Date(2018, 1), y: 2993 },
                { x: new Date(2018, 2), y: 3179 },
                { x: new Date(2018, 3), y: 3156 },
                { x: new Date(2018, 4), y: 3215 },
                { x: new Date(2018, 5), y: 1864 },
                { x: new Date(2018, 6), y: 2028 },
                { x: new Date(2018, 7), y: 2155 },
                { x: new Date(2018, 8), y: 1270 },
                { x: new Date(2018, 9), y: 1839 },
                { x: new Date(2018, 10), y: 1934 },
                { x: new Date(2018, 11), y: 1346 }
            ]
        }]
    });

    chart20.render();

    var chart21 = new CanvasJS.Chart("tweetsRealizadosCTC", {
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
                { x: new Date(2018, 0), y: 56 },
                { x: new Date(2018, 1), y: 40 },
                { x: new Date(2018, 2), y: 93 },
                { x: new Date(2018, 3), y: 98 },
                { x: new Date(2018, 4), y: 66 },
                { x: new Date(2018, 5), y: 50 },
                { x: new Date(2018, 6), y: 43 },
                { x: new Date(2018, 7), y: 50 },
                { x: new Date(2018, 8), y: 39 },
                { x: new Date(2018, 9), y: 61 },
                { x: new Date(2018, 10), y: 85 },
                { x: new Date(2018, 11), y: 54 }
            ]
        }]
    });

    chart21.render();


    var chart22 = new CanvasJS.Chart("mencionesTweetsCTC", {
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
            xValueFormatString: "MMM, YYYY",
            color: "#583e2e",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 161 },
                { x: new Date(2018, 1), y: 84 },
                { x: new Date(2018, 2), y: 150 },
                { x: new Date(2018, 3), y: 108 },
                { x: new Date(2018, 4), y: 95 },
                { x: new Date(2018, 5), y: 71 },
                { x: new Date(2018, 6), y: 37 },
                { x: new Date(2018, 7), y: 63 },
                { x: new Date(2018, 8), y: 17 },
                { x: new Date(2018, 9), y: 50 },
                { x: new Date(2018, 10), y: 46 },
                { x: new Date(2018, 11), y: 33 }
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
                { x: new Date(2018, 0), y: 7274 },
                { x: new Date(2018, 1), y: 7313 },
                { x: new Date(2018, 2), y: 7336 },
                { x: new Date(2018, 3), y: 7357 },
                { x: new Date(2018, 4), y: 7406 },
                { x: new Date(2018, 5), y: 7428 },
                { x: new Date(2018, 6), y: 7425 },
                { x: new Date(2018, 7), y: 7433 },
                { x: new Date(2018, 8), y: 7438 },
                { x: new Date(2018, 9), y: 7489 },
                { x: new Date(2018, 10), y: 7464 },
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
                { x: new Date(2018, 0), y: 0.22 },
                { x: new Date(2018, 1), y: 0.20 },
                { x: new Date(2018, 2), y: 0.21 },
                { x: new Date(2018, 3), y: 0.13 },
                { x: new Date(2018, 4), y: 0.12 },
                { x: new Date(2018, 5), y: 0.07 },
                { x: new Date(2018, 6), y: 0.05 },
                { x: new Date(2018, 7), y: 0.06 },
                { x: new Date(2018, 8), y: 0.04 },
                { x: new Date(2018, 9), y: 0.07 },
                { x: new Date(2018, 10), y: 0.06 },
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
                    { x: new Date(2018, 9), y: 10.00 },
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
                    { x: new Date(2018, 9), y: 9.75 },
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
                    { x: new Date(2018, 9), y: 3.67 },
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