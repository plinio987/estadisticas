/*   *****************************************
            CHARTS TWITTER
  **************************************** */


window.onload = function() {

    var chart11 = new CanvasJS.Chart("engagementTwitterOpsd", {
        backgroundColor: "#d9dcd8",
        exportEnabled: true,
        animationEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Tasa engagement Twitter",
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
                { x: new Date(2018, 0), y: 1.41 },
                { x: new Date(2018, 1), y: 1.24 },
                { x: new Date(2018, 2), y: 1.24 },
                { x: new Date(2018, 3), y: 0.81 },
                { x: new Date(2018, 4), y: 1.60 },
                { x: new Date(2018, 5), y: 0.75 },
                { x: new Date(2018, 6), y: 1.10 },
                { x: new Date(2018, 7), y: 1.11 },
                { x: new Date(2018, 8), y: 1.22 },
                { x: new Date(2018, 9), y: 1.36 },
                { x: new Date(2018, 10), y: 1.29 },
                { x: new Date(2018, 11), y: 0.92 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart11.render();

    var chart12 = new CanvasJS.Chart("twitterImpresionesOpsd", {
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
                { x: new Date(2018, 0), y: 33300 },
                { x: new Date(2018, 1), y: 27200 },
                { x: new Date(2018, 2), y: 26700 },
                { x: new Date(2018, 3), y: 30400 },
                { x: new Date(2018, 4), y: 18500 },
                { x: new Date(2018, 5), y: 22300 },
                { x: new Date(2018, 6), y: 14500 },
                { x: new Date(2018, 7), y: 13100 },
                { x: new Date(2018, 8), y: 7237 },
                { x: new Date(2018, 9), y: 13600 },
                { x: new Date(2018, 10), y: 6900 },
                { x: new Date(2018, 11), y: 7300 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart12.render();


    var chart13 = new CanvasJS.Chart("nuevosSeguidoresOpsd", {
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
            title: "Nuevos seguidores",
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
                { x: new Date(2018, 0), y: 3 },
                { x: new Date(2018, 1), y: 20 },
                { x: new Date(2018, 2), y: 24 },
                { x: new Date(2018, 3), y: 17 },
                { x: new Date(2018, 4), y: 24 },
                { x: new Date(2018, 5), y: 20 },
                { x: new Date(2018, 6), y: 20 },
                { x: new Date(2018, 7), y: 15 },
                { x: new Date(2018, 8), y: 15 },
                { x: new Date(2018, 9), y: 31 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 7 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart13.render();



    var chart15 = new CanvasJS.Chart("interaccionesTwitterOpsd", {
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
                { x: new Date(2018, 0), y: 468 },
                { x: new Date(2018, 1), y: 336 },
                { x: new Date(2018, 2), y: 332 },
                { x: new Date(2018, 3), y: 215 },
                { x: new Date(2018, 4), y: 191 },
                { x: new Date(2018, 5), y: 168 },
                { x: new Date(2018, 6), y: 159 },
                { x: new Date(2018, 7), y: 145 },
                { x: new Date(2018, 8), y: 88 },
                { x: new Date(2018, 9), y: 185 },
                { x: new Date(2018, 10), y: 89 },
                { x: new Date(2018, 11), y: 67 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart15.render();

    var chart16 = new CanvasJS.Chart("meGustaTwitterOpsd", {
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
            title: "Me gusta mensual",
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
                { x: new Date(2018, 0), y: 285 },
                { x: new Date(2018, 1), y: 162 },
                { x: new Date(2018, 2), y: 165 },
                { x: new Date(2018, 3), y: 142 },
                { x: new Date(2018, 4), y: 133 },
                { x: new Date(2018, 5), y: 97 },
                { x: new Date(2018, 6), y: 97 },
                { x: new Date(2018, 7), y: 284 },
                { x: new Date(2018, 8), y: 39 },
                { x: new Date(2018, 9), y: 97 },
                { x: new Date(2018, 10), y: 44 },
                { x: new Date(2018, 11), y: 38 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart16.render();

    var chart17 = new CanvasJS.Chart("respuestaTwitterOpsd", {
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
                { x: new Date(2018, 0), y: 0 },
                { x: new Date(2018, 1), y: 0 },
                { x: new Date(2018, 2), y: 2 },
                { x: new Date(2018, 3), y: 15 },
                { x: new Date(2018, 4), y: 16 },
                { x: new Date(2018, 5), y: 0 },
                { x: new Date(2018, 6), y: 6 },
                { x: new Date(2018, 7), y: 3 },
                { x: new Date(2018, 8), y: 4 },
                { x: new Date(2018, 9), y: 26 },
                { x: new Date(2018, 10), y: 6 },
                { x: new Date(2018, 11), y: 4 }
            ]
        }]
    });

    chart17.render();



    var chart18 = new CanvasJS.Chart("retuitsOpsd", {
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
                { x: new Date(2018, 0), y: 139 },
                { x: new Date(2018, 1), y: 87 },
                { x: new Date(2018, 2), y: 73 },
                { x: new Date(2018, 3), y: 44 },
                { x: new Date(2018, 4), y: 128 },
                { x: new Date(2018, 5), y: 37 },
                { x: new Date(2018, 6), y: 33 },
                { x: new Date(2018, 7), y: 35 },
                { x: new Date(2018, 8), y: 22 },
                { x: new Date(2018, 9), y: 27 },
                { x: new Date(2018, 10), y: 10 },
                { x: new Date(2018, 11), y: 11 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart18.render();

    var chart19 = new CanvasJS.Chart("clicsTwitterOpsd", {
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
                { x: new Date(2018, 0), y: 44 },
                { x: new Date(2018, 1), y: 87 },
                { x: new Date(2018, 2), y: 92 },
                { x: new Date(2018, 3), y: 43 },
                { x: new Date(2018, 3), y: 44 },
                { x: new Date(2018, 4), y: 19 },
                { x: new Date(2018, 5), y: 34 },
                { x: new Date(2018, 6), y: 23 },
                { x: new Date(2018, 7), y: 25 },
                { x: new Date(2018, 8), y: 23 },
                { x: new Date(2018, 9), y: 35 },
                { x: new Date(2018, 10), y: 29 },
                { x: new Date(2018, 11), y: 14 }
            ]
        }]
    });

    chart19.render();

    var chart20 = new CanvasJS.Chart("VisitasPerfilTwitterOpsd", {
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
                { x: new Date(2018, 0), y: 194 },
                { x: new Date(2018, 1), y: 253 },
                { x: new Date(2018, 2), y: 559 },
                { x: new Date(2018, 3), y: 679 },
                { x: new Date(2018, 4), y: 382 },
                { x: new Date(2018, 5), y: 233 },
                { x: new Date(2018, 6), y: 301 },
                { x: new Date(2018, 7), y: 284 },
                { x: new Date(2018, 8), y: 166 },
                { x: new Date(2018, 9), y: 609 },
                { x: new Date(2018, 10), y: 260 },
                { x: new Date(2018, 11), y: 230 }
            ]
        }]
    });

    chart20.render();

    var chart21 = new CanvasJS.Chart("tweetsRealizadosOpsd", {
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
                { x: new Date(2018, 0), y: 47 },
                { x: new Date(2018, 1), y: 27 },
                { x: new Date(2018, 2), y: 33 },
                { x: new Date(2018, 3), y: 38 },
                { x: new Date(2018, 4), y: 38 },
                { x: new Date(2018, 5), y: 23 },
                { x: new Date(2018, 6), y: 27 },
                { x: new Date(2018, 7), y: 21 },
                { x: new Date(2018, 8), y: 10 },
                { x: new Date(2018, 9), y: 40 },
                { x: new Date(2018, 10), y: 27 },
                { x: new Date(2018, 11), y: 27 }
            ]
        }]
    });

    chart21.render();


    var chart22 = new CanvasJS.Chart("mencionesTweetsOpsd", {
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
                { x: new Date(2018, 0), y: 3 },
                { x: new Date(2018, 1), y: 4 },
                { x: new Date(2018, 2), y: 28 },
                { x: new Date(2018, 3), y: 19 },
                { x: new Date(2018, 4), y: 24 },
                { x: new Date(2018, 5), y: 2 },
                { x: new Date(2018, 6), y: 34 },
                { x: new Date(2018, 7), y: 7 },
                { x: new Date(2018, 8), y: 25 },
                { x: new Date(2018, 9), y: 15 },
                { x: new Date(2018, 10), y: 5 },
                { x: new Date(2018, 11), y: 11 }
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
                { x: new Date(2018, 0), y: 708 },
                { x: new Date(2018, 1), y: 728 },
                { x: new Date(2018, 2), y: 752 },
                { x: new Date(2018, 3), y: 769 },
                { x: new Date(2018, 4), y: 793 },
                { x: new Date(2018, 5), y: 813 },
                { x: new Date(2018, 6), y: 826 },
                { x: new Date(2018, 7), y: 844 },
                { x: new Date(2018, 8), y: 859 },
                { x: new Date(2018, 9), y: 886 },
                { x: new Date(2018, 10), y: 892 },
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
                { x: new Date(2018, 0), y: 0.66 },
                { x: new Date(2018, 1), y: 0.46 },
                { x: new Date(2018, 2), y: 0.44 },
                { x: new Date(2018, 3), y: 0.32 },
                { x: new Date(2018, 4), y: 0.37 },
                { x: new Date(2018, 5), y: 0.21 },
                { x: new Date(2018, 6), y: 0.19 },
                { x: new Date(2018, 7), y: 0.17 },
                { x: new Date(2018, 8), y: 0.10 },
                { x: new Date(2018, 9), y: 0.21 },
                { x: new Date(2018, 10), y: 0.10 },
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
                    { x: new Date(2018, 9), y: 3.25 },
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
                    { x: new Date(2018, 9), y: 1.75 },
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