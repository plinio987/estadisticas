window.onload = function() {

    /*   *****************************************
                CHARTS TWITTER
      **************************************** */

    var chart11 = new CanvasJS.Chart("engagementTwitterAdess", {
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
                { x: new Date(2018, 0), y: 1.61 },
                { x: new Date(2018, 1), y: 1.28 },
                { x: new Date(2018, 2), y: 1.50 },
                { x: new Date(2018, 3), y: 0.74 },
                { x: new Date(2018, 4), y: 1.24 },
                { x: new Date(2018, 5), y: 0.80 },
                { x: new Date(2018, 6), y: 1.15 },
                { x: new Date(2018, 7), y: 0.88 },
                { x: new Date(2018, 8), y: 0.88 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart11.render();

    var chart12 = new CanvasJS.Chart("twitterImpresionesAdess", {
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
            labelFontColor: "#222",
            titleFontColor: "#222",
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
                { x: new Date(2018, 0), y: 28200 },
                { x: new Date(2018, 1), y: 29100 },
                { x: new Date(2018, 2), y: 9908 },
                { x: new Date(2018, 3), y: 6898 },
                { x: new Date(2018, 4), y: 9685 },
                { x: new Date(2018, 5), y: 6805 },
                { x: new Date(2018, 6), y: 12700 },
                { x: new Date(2018, 7), y: 8702 },
                { x: new Date(2018, 8), y: 6268 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart12.render();


    var chart13 = new CanvasJS.Chart("nuevosSeguidoresAdess", {
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
            title: "Seguidores",
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
                { x: new Date(2018, 0), y: 35 },
                { x: new Date(2018, 1), y: 41 },
                { x: new Date(2018, 2), y: 36 },
                { x: new Date(2018, 3), y: 15 },
                { x: new Date(2018, 4), y: 27 },
                { x: new Date(2018, 5), y: 40 },
                { x: new Date(2018, 6), y: 20 },
                { x: new Date(2018, 7), y: 45 },
                { x: new Date(2018, 8), y: 55 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart13.render();



    var chart15 = new CanvasJS.Chart("interaccionesTwitterAdess", {
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
                { x: new Date(2018, 0), y: 453 },
                { x: new Date(2018, 1), y: 372 },
                { x: new Date(2018, 2), y: 149 },
                { x: new Date(2018, 3), y: 51 },
                { x: new Date(2018, 4), y: 120 },
                { x: new Date(2018, 5), y: 73 },
                { x: new Date(2018, 6), y: 165 },
                { x: new Date(2018, 7), y: 55 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart15.render();

    var chart16 = new CanvasJS.Chart("meGustaTwitterAdess", {
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
                { x: new Date(2018, 0), y: 292 },
                { x: new Date(2018, 1), y: 217 },
                { x: new Date(2018, 2), y: 70 },
                { x: new Date(2018, 3), y: 20 },
                { x: new Date(2018, 4), y: 74 },
                { x: new Date(2018, 5), y: 43 },
                { x: new Date(2018, 6), y: 85 },
                { x: new Date(2018, 7), y: 43 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart16.render();

    var chart17 = new CanvasJS.Chart("respuestaTwitterAdess", {
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
            type: "column",
            color: "#51A2D9",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 3 },
                { x: new Date(2018, 1), y: 6 },
                { x: new Date(2018, 2), y: 4 },
                { x: new Date(2018, 3), y: 5 },
                { x: new Date(2018, 4), y: 7 },
                { x: new Date(2018, 5), y: 2 },
                { x: new Date(2018, 6), y: 18 },
                { x: new Date(2018, 7), y: 1 },
                { x: new Date(2018, 8), y: 3 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }
            ]
        }]
    });

    chart17.render();



    var chart18 = new CanvasJS.Chart("retuitsAdess", {
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
            title: "Retweets",
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
                { x: new Date(2018, 0), y: 144 },
                { x: new Date(2018, 1), y: 123 },
                { x: new Date(2018, 2), y: 48 },
                { x: new Date(2018, 3), y: 16 },
                { x: new Date(2018, 4), y: 37 },
                { x: new Date(2018, 5), y: 14 },
                { x: new Date(2018, 6), y: 19 },
                { x: new Date(2018, 7), y: 25 },
                { x: new Date(2018, 8), y: 20 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart18.render();

    var chart19 = new CanvasJS.Chart("clicsTwitterAdess", {
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
            type: "column",
            color: "#51A2D9",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 14 },
                { x: new Date(2018, 1), y: 26 },
                { x: new Date(2018, 2), y: 27 },
                { x: new Date(2018, 3), y: 16 },
                { x: new Date(2018, 4), y: 13 },
                { x: new Date(2018, 5), y: 14 },
                { x: new Date(2018, 6), y: 43 },
                { x: new Date(2018, 7), y: 08 },
                { x: new Date(2018, 8), y: 18 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }
            ]
        }]
    });

    chart19.render();

    var chart20 = new CanvasJS.Chart("VisitasPerfilTwitterAdess", {
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
            type: "bar",
            color: "#583e2e",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 641 },
                { x: new Date(2018, 1), y: 669 },
                { x: new Date(2018, 2), y: 550 },
                { x: new Date(2018, 3), y: 416 },
                { x: new Date(2018, 4), y: 615 },
                { x: new Date(2018, 5), y: 403 },
                { x: new Date(2018, 6), y: 596 },
                { x: new Date(2018, 7), y: 317 },
                { x: new Date(2018, 8), y: 280 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }
            ]
        }]
    });

    chart20.render();

    var chart21 = new CanvasJS.Chart("tweetsRealizadosAdess", {
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
            type: "column",
            color: "#583e2e",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 52 },
                { x: new Date(2018, 1), y: 47 },
                { x: new Date(2018, 2), y: 24 },
                { x: new Date(2018, 3), y: 13 },
                { x: new Date(2018, 4), y: 32 },
                { x: new Date(2018, 5), y: 17 },
                { x: new Date(2018, 6), y: 30 },
                { x: new Date(2018, 7), y: 07 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }
            ]
        }]
    });

    chart21.render();


    var chart22 = new CanvasJS.Chart("mencionesTweetsAdess", {
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
            yValueFormatString: "#,###",
            color: "#583e2e",
            dataPoints: [
                { x: new Date(2018, 0), y: 21 },
                { x: new Date(2018, 1), y: 29 },
                { x: new Date(2018, 2), y: 12 },
                { x: new Date(2018, 3), y: 14 },
                { x: new Date(2018, 4), y: 21 },
                { x: new Date(2018, 5), y: 06 },
                { x: new Date(2018, 6), y: 04 },
                { x: new Date(2018, 7), y: 12 },
                { x: new Date(2018, 8), y: 11 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
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
                { x: new Date(2018, 0), y: 975 },
                { x: new Date(2018, 1), y: 1016 },
                { x: new Date(2018, 2), y: 1052 },
                { x: new Date(2018, 3), y: 1067 },
                { x: new Date(2018, 4), y: 1094 },
                { x: new Date(2018, 5), y: 1134 },
                { x: new Date(2018, 6), y: 1145 },
                { x: new Date(2018, 7), y: 0 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
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
            text: "Porcentaje participación",
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
                { x: new Date(2018, 0), y: 0.46 },
                { x: new Date(2018, 1), y: 0.36 },
                { x: new Date(2018, 2), y: 0.14 },
                { x: new Date(2018, 3), y: 0.05 },
                { x: new Date(2018, 4), y: 0.12 },
                { x: new Date(2018, 5), y: 0.06 },
                { x: new Date(2018, 6), y: 0.14 },
                { x: new Date(2018, 7), y: 0.06 },
                { x: new Date(2018, 8), y: 0.04 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart24.render();















};