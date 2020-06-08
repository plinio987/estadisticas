window.onload = function() {

    /*   *****************************************
                CHARTS TWITTER
      **************************************** */

    var chart11 = new CanvasJS.Chart("engagementTwitterCC", {
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
                { x: new Date(2018, 0), y: 0.61 },
                { x: new Date(2018, 1), y: 0.83 },
                { x: new Date(2018, 2), y: 0.80 },
                { x: new Date(2018, 3), y: 0.56 },
                { x: new Date(2018, 4), y: 0.41 },
                { x: new Date(2018, 5), y: 0.06 },
                { x: new Date(2018, 6), y: 0.72 },
                { x: new Date(2018, 7), y: 0.15 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart11.render();

    var chart12 = new CanvasJS.Chart("twitterImpresionesCC", {
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
                { x: new Date(2018, 0), y: 24800 },
                { x: new Date(2018, 1), y: 11700 },
                { x: new Date(2018, 2), y: 9821 },
                { x: new Date(2018, 3), y: 5754 },
                { x: new Date(2018, 4), y: 13800 },
                { x: new Date(2018, 5), y: 3100 },
                { x: new Date(2018, 6), y: 10600 },
                { x: new Date(2018, 7), y: 5400 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart12.render();


    var chart13 = new CanvasJS.Chart("nuevosSeguidoresCC", {
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
                { x: new Date(2018, 0), y: 14 },
                { x: new Date(2018, 1), y: 9 },
                { x: new Date(2018, 2), y: 13 },
                { x: new Date(2018, 3), y: 13 },
                { x: new Date(2018, 4), y: 23 },
                { x: new Date(2018, 5), y: 5 },
                { x: new Date(2018, 6), y: 14 },
                { x: new Date(2018, 7), y: 10 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart13.render();



    var chart15 = new CanvasJS.Chart("interaccionesTwitterCC", {
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
                { x: new Date(2018, 0), y: 152 },
                { x: new Date(2018, 1), y: 96 },
                { x: new Date(2018, 2), y: 79 },
                { x: new Date(2018, 3), y: 32 },
                { x: new Date(2018, 4), y: 53 },
                { x: new Date(2018, 5), y: 13 },
                { x: new Date(2018, 6), y: 105 },
                { x: new Date(2018, 7), y: 20 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart15.render();

    var chart16 = new CanvasJS.Chart("meGustaTwitterCC", {
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
                { x: new Date(2018, 0), y: 96 },
                { x: new Date(2018, 1), y: 59 },
                { x: new Date(2018, 2), y: 48 },
                { x: new Date(2018, 3), y: 19 },
                { x: new Date(2018, 4), y: 35 },
                { x: new Date(2018, 5), y: 11 },
                { x: new Date(2018, 6), y: 60 },
                { x: new Date(2018, 7), y: 10 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart16.render();

    var chart17 = new CanvasJS.Chart("respuestaTwitterCC", {
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
                { x: new Date(2018, 0), y: 4 },
                { x: new Date(2018, 1), y: 6 },
                { x: new Date(2018, 2), y: 4 },
                { x: new Date(2018, 3), y: 1 },
                { x: new Date(2018, 4), y: 0 },
                { x: new Date(2018, 5), y: 0 },
                { x: new Date(2018, 6), y: 1 },
                { x: new Date(2018, 7), y: 3 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }
            ]
        }]
    });

    chart17.render();



    var chart18 = new CanvasJS.Chart("retuitsCC", {
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
                { x: new Date(2018, 0), y: 43 },
                { x: new Date(2018, 1), y: 22 },
                { x: new Date(2018, 2), y: 22 },
                { x: new Date(2018, 3), y: 9 },
                { x: new Date(2018, 4), y: 12 },
                { x: new Date(2018, 5), y: 2 },
                { x: new Date(2018, 6), y: 26 },
                { x: new Date(2018, 7), y: 6 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart18.render();

    var chart19 = new CanvasJS.Chart("clicsTwitterCC", {
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
                { x: new Date(2018, 0), y: 9 },
                { x: new Date(2018, 1), y: 9 },
                { x: new Date(2018, 2), y: 5 },
                { x: new Date(2018, 3), y: 6 },
                { x: new Date(2018, 4), y: 9 },
                { x: new Date(2018, 5), y: 0 },
                { x: new Date(2018, 6), y: 18 },
                { x: new Date(2018, 7), y: 1 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }
            ]
        }]
    });

    chart19.render();

    var chart20 = new CanvasJS.Chart("VisitasPerfilTwitterCC", {
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
                { x: new Date(2018, 0), y: 513 },
                { x: new Date(2018, 1), y: 372 },
                { x: new Date(2018, 2), y: 373 },
                { x: new Date(2018, 3), y: 227 },
                { x: new Date(2018, 4), y: 301 },
                { x: new Date(2018, 5), y: 90 },
                { x: new Date(2018, 6), y: 296 },
                { x: new Date(2018, 7), y: 219 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }
            ]
        }]
    });

    chart20.render();

    var chart21 = new CanvasJS.Chart("tweetsRealizadosCC", {
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
                { x: new Date(2018, 0), y: 15 },
                { x: new Date(2018, 1), y: 9 },
                { x: new Date(2018, 2), y: 20 },
                { x: new Date(2018, 3), y: 4 },
                { x: new Date(2018, 4), y: 6 },
                { x: new Date(2018, 5), y: 4 },
                { x: new Date(2018, 6), y: 13 },
                { x: new Date(2018, 7), y: 1 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }
            ]
        }]
    });

    chart21.render();


    var chart22 = new CanvasJS.Chart("mencionesTweetsCC", {
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
                { x: new Date(2018, 0), y: 28 },
                { x: new Date(2018, 1), y: 12 },
                { x: new Date(2018, 2), y: 07 },
                { x: new Date(2018, 3), y: 04 },
                { x: new Date(2018, 4), y: 05 },
                { x: new Date(2018, 5), y: 0 },
                { x: new Date(2018, 6), y: 2 },
                { x: new Date(2018, 7), y: 4 },
                { x: new Date(2018, 8), y: 0 },
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
                { x: new Date(2018, 0), y: 275 },
                { x: new Date(2018, 1), y: 284 },
                { x: new Date(2018, 2), y: 297 },
                { x: new Date(2018, 3), y: 310 },
                { x: new Date(2018, 4), y: 333 },
                { x: new Date(2018, 5), y: 338 },
                { x: new Date(2018, 6), y: 345 },
                { x: new Date(2018, 7), y: 355 },
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
                { x: new Date(2018, 0), y: 0.55 },
                { x: new Date(2018, 1), y: 0.34 },
                { x: new Date(2018, 2), y: 0.27 },
                { x: new Date(2018, 3), y: 0.11 },
                { x: new Date(2018, 4), y: 0.17 },
                { x: new Date(2018, 5), y: 0.04 },
                { x: new Date(2018, 6), y: 0.31 },
                { x: new Date(2018, 7), y: 0 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart24.render();


















};