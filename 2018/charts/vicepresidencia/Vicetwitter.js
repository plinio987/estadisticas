/*   *****************************************
            CHARTS TWITTER
  **************************************** */


window.onload = function() {

    //ENGAGEMENT

    var chart11 = new CanvasJS.Chart("engagementTwitterVice", {
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
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Engagement mensual",
            titleFontColor: "#000",
            suffix: "%"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#f29d4b",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2018, 0), y: 1.21 },
                { x: new Date(2018, 1), y: 1.30 },
                { x: new Date(2018, 2), y: 1.29 },
                { x: new Date(2018, 3), y: 1.22 },
                { x: new Date(2018, 4), y: 1.27 },
                { x: new Date(2018, 5), y: 1.09 },
                { x: new Date(2018, 6), y: 0.88 },
                { x: new Date(2018, 7), y: 0.92 },
                { x: new Date(2018, 8), y: 0.80 },
                { x: new Date(2018, 9), y: 0.78 },
                { x: new Date(2018, 10), y: 0.60 },
                { x: new Date(2018, 11), y: 0.81 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart11.render();

    //IMPRESIONES

    var chart12 = new CanvasJS.Chart("twitterImpresionesVice", {
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
            labelFontColor: "#000",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Alcance mensual",
            titleFontColor: "#000",
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
                { x: new Date(2018, 0), y: 498000 },
                { x: new Date(2018, 1), y: 434600 },
                { x: new Date(2018, 2), y: 478500 },
                { x: new Date(2018, 3), y: 548600 },
                { x: new Date(2018, 4), y: 336000 },
                { x: new Date(2018, 5), y: 434300 },
                { x: new Date(2018, 6), y: 245500 },
                { x: new Date(2018, 7), y: 266000 },
                { x: new Date(2018, 8), y: 404300 },
                { x: new Date(2018, 9), y: 432700 },
                { x: new Date(2018, 10), y: 526700 },
                { x: new Date(2018, 11), y: 271300 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart12.render();

    //NUEVOS SEGUIDORES


    var chart13 = new CanvasJS.Chart("nuevosSeguidoresVice", {
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
            labelFontColor: "#000",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Seguidores",
            labelFontColor: "#000",
            titleFontColor: "#000",
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
                { x: new Date(2018, 0), y: 2272 },
                { x: new Date(2018, 1), y: 1334 },
                { x: new Date(2018, 2), y: 1892 },
                { x: new Date(2018, 3), y: 1814 },
                { x: new Date(2018, 4), y: 532 },
                { x: new Date(2018, 5), y: 467 },
                { x: new Date(2018, 6), y: -797 },
                { x: new Date(2018, 7), y: 758 },
                { x: new Date(2018, 8), y: 503 },
                { x: new Date(2018, 9), y: 922 },
                { x: new Date(2018, 10), y: -110 },
                { x: new Date(2018, 11), y: 410 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart13.render();



    var chart15 = new CanvasJS.Chart("interaccionesTwitterVice", {
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
                { x: new Date(2018, 0), y: 6002 },
                { x: new Date(2018, 1), y: 5672 },
                { x: new Date(2018, 2), y: 6169 },
                { x: new Date(2018, 3), y: 6711 },
                { x: new Date(2018, 4), y: 4277 },
                { x: new Date(2018, 5), y: 4741 },
                { x: new Date(2018, 6), y: 2167 },
                { x: new Date(2018, 7), y: 2455 },
                { x: new Date(2018, 8), y: 3226 },
                { x: new Date(2018, 9), y: 3361 },
                { x: new Date(2018, 10), y: 3176 },
                { x: new Date(2018, 11), y: 2192 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart15.render();

    var chart16 = new CanvasJS.Chart("meGustaTwitterVice", {
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
            title: "Me gusta",
            titleFontColor: "#222",
            labelFontColor: "#222",
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
                { x: new Date(2018, 0), y: 3700 },
                { x: new Date(2018, 1), y: 3500 },
                { x: new Date(2018, 2), y: 3500 },
                { x: new Date(2018, 3), y: 3341 },
                { x: new Date(2018, 4), y: 2500 },
                { x: new Date(2018, 5), y: 3000 },
                { x: new Date(2018, 6), y: 1300 },
                { x: new Date(2018, 7), y: 1600 },
                { x: new Date(2018, 8), y: 2000 },
                { x: new Date(2018, 9), y: 2100 },
                { x: new Date(2018, 10), y: 1800 },
                { x: new Date(2018, 11), y: 1300 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart16.render();

    var chart17 = new CanvasJS.Chart("respuestaTwitterVice", {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Repuestas en publicaciones"
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "cantidad mensual"
        },
        data: [{
            type: "stepLine",
            color: "rgba(254, 126, 24, 1)",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 178 },
                { x: new Date(2018, 1), y: 173 },
                { x: new Date(2018, 2), y: 172 },
                { x: new Date(2018, 3), y: 177 },
                { x: new Date(2018, 4), y: 118 },
                { x: new Date(2018, 5), y: 131 },
                { x: new Date(2018, 6), y: 113 },
                { x: new Date(2018, 7), y: 96 },
                { x: new Date(2018, 8), y: 192 },
                { x: new Date(2018, 9), y: 244 },
                { x: new Date(2018, 10), y: 274 },
                { x: new Date(2018, 11), y: 153 }
            ]
        }]
    });

    chart17.render();



    var chart18 = new CanvasJS.Chart("retuitsVice", {
        animationEnabled: true,
        backgroundColor: "#ebf2ea",
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
            labelFontColor: "#fff",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Alcance mensual",
            labelFontColor: "#fff",
            titleFontColor: "#fff",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#80add7",
            name: "views",
            type: "line",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 1600 },
                { x: new Date(2018, 1), y: 1400 },
                { x: new Date(2018, 2), y: 1900 },
                { x: new Date(2018, 3), y: 2400 },
                { x: new Date(2018, 4), y: 1200 },
                { x: new Date(2018, 5), y: 1100 },
                { x: new Date(2018, 6), y: 537 },
                { x: new Date(2018, 7), y: 558 },
                { x: new Date(2018, 8), y: 808 },
                { x: new Date(2018, 9), y: 741 },
                { x: new Date(2018, 10), y: 717 },
                { x: new Date(2018, 11), y: 486 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart18.render();

    var chart19 = new CanvasJS.Chart("clicsTwitterVice", {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Clics en publicaciones"
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "cantidad mensual"
        },
        data: [{
            type: "line",
            xValueFormatString: "MMM, YYYY",
            color: "rgba(101, 13, 111, 1)",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 527 },
                { x: new Date(2018, 1), y: 588 },
                { x: new Date(2018, 2), y: 597 },
                { x: new Date(2018, 3), y: 634 },
                { x: new Date(2018, 4), y: 459 },
                { x: new Date(2018, 5), y: 510 },
                { x: new Date(2018, 6), y: 217 },
                { x: new Date(2018, 7), y: 201 },
                { x: new Date(2018, 8), y: 226 },
                { x: new Date(2018, 9), y: 276 },
                { x: new Date(2018, 10), y: 385 },
                { x: new Date(2018, 11), y: 253 }
            ]
        }]
    });

    chart19.render();

    var chart20 = new CanvasJS.Chart("VisitasPerfilTwitterVice", {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Visitas al perfil"
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "cantidad mensual"
        },
        data: [{
            type: "stepLine",
            color: "#4a29e1",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 8476 },
                { x: new Date(2018, 1), y: 10100 },
                { x: new Date(2018, 2), y: 10900 },
                { x: new Date(2018, 3), y: 12000 },
                { x: new Date(2018, 4), y: 8286 },
                { x: new Date(2018, 5), y: 10300 },
                { x: new Date(2018, 6), y: 4996 },
                { x: new Date(2018, 7), y: 5551 },
                { x: new Date(2018, 8), y: 8697 },
                { x: new Date(2018, 9), y: 9682 },
                { x: new Date(2018, 10), y: 9155 },
                { x: new Date(2018, 11), y: 7505 }
            ]
        }]
    });

    chart20.render();

    var chart21 = new CanvasJS.Chart("tweetsRealizadosVice", {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Tweets realizados per mes"
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "cantidad mensual"
        },
        data: [{
            type: "stepLine",
            color: "rgba(43, 81, 22, 1)",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 227 },
                { x: new Date(2018, 1), y: 224 },
                { x: new Date(2018, 2), y: 212 },
                { x: new Date(2018, 3), y: 270 },
                { x: new Date(2018, 4), y: 186 },
                { x: new Date(2018, 5), y: 222 },
                { x: new Date(2018, 6), y: 102 },
                { x: new Date(2018, 7), y: 131 },
                { x: new Date(2018, 8), y: 208 },
                { x: new Date(2018, 9), y: 245 },
                { x: new Date(2018, 10), y: 302 },
                { x: new Date(2018, 11), y: 171 }
            ]
        }]
    });

    chart21.render();


    var chart22 = new CanvasJS.Chart("mencionesTweetsVice", {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Menciones a la cuenta"
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "cantidad mensual"
        },
        data: [{
            type: "area",
            color: "rgba(43, 81, 22, 1)",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 568 },
                { x: new Date(2018, 1), y: 418 },
                { x: new Date(2018, 2), y: 557 },
                { x: new Date(2018, 3), y: 763 },
                { x: new Date(2018, 4), y: 569 },
                { x: new Date(2018, 5), y: 628 },
                { x: new Date(2018, 6), y: 425 },
                { x: new Date(2018, 7), y: 388 },
                { x: new Date(2018, 8), y: 408 },
                { x: new Date(2018, 9), y: 491 },
                { x: new Date(2018, 10), y: 340 },
                { x: new Date(2018, 11), y: 326 }
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
                { x: new Date(2018, 0), y: 125675 },
                { x: new Date(2018, 1), y: 127009 },
                { x: new Date(2018, 2), y: 128901 },
                { x: new Date(2018, 3), y: 130715 },
                { x: new Date(2018, 4), y: 131247 },
                { x: new Date(2018, 5), y: 132714 },
                { x: new Date(2018, 6), y: 131952 },
                { x: new Date(2018, 7), y: 133260 },
                { x: new Date(2018, 8), y: 134182 },
                { x: new Date(2018, 9), y: 134082 },
                { x: new Date(2018, 10), y: 0 },
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
                { x: new Date(2018, 0), y: 0.05 },
                { x: new Date(2018, 1), y: 0.04 },
                { x: new Date(2018, 2), y: 0.05 },
                { x: new Date(2018, 3), y: 0.05 },
                { x: new Date(2018, 4), y: 0.03 },
                { x: new Date(2018, 5), y: 0.04 },
                { x: new Date(2018, 6), y: 0.02 },
                { x: new Date(2018, 7), y: 0.02 },
                { x: new Date(2018, 8), y: 0.02 },
                { x: new Date(2018, 9), y: 0.03 },
                { x: new Date(2018, 10), y: 0.02 },
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
                    { x: new Date(2018, 9), y: 23.41 },
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
                    { x: new Date(2018, 9), y: 16.37 },
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
                    { x: new Date(2018, 9), y: 29.80 },
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