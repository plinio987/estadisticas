/*   *****************************************
            CHARTS TWITTER
  **************************************** */


window.onload = function() {

    var chart11 = new CanvasJS.Chart("engagementTwitterProsoli", {
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
                { x: new Date(2018, 0), y: 1.24 },
                { x: new Date(2018, 1), y: 1.24 },
                { x: new Date(2018, 2), y: 1.47 },
                { x: new Date(2018, 3), y: 1.37 },
                { x: new Date(2018, 4), y: 1.59 },
                { x: new Date(2018, 5), y: 1.19 },
                { x: new Date(2018, 6), y: 1.29 },
                { x: new Date(2018, 7), y: 1.12 },
                { x: new Date(2018, 8), y: 1.04 },
                { x: new Date(2018, 9), y: 0.91 },
                { x: new Date(2018, 10), y: 0.56 },
                { x: new Date(2018, 11), y: 0.75 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart11.render();

    var chart12 = new CanvasJS.Chart("twitterImpresionesProsoli", {
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
            title: "Impresiones",
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
                { x: new Date(2018, 0), y: 163500 },
                { x: new Date(2018, 1), y: 114100 },
                { x: new Date(2018, 2), y: 143200 },
                { x: new Date(2018, 3), y: 170200 },
                { x: new Date(2018, 4), y: 119200 },
                { x: new Date(2018, 5), y: 107900 },
                { x: new Date(2018, 6), y: 90800 },
                { x: new Date(2018, 7), y: 110000 },
                { x: new Date(2018, 8), y: 121900 },
                { x: new Date(2018, 9), y: 136000 },
                { x: new Date(2018, 10), y: 204600 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart12.render();


    var chart13 = new CanvasJS.Chart("nuevosSeguidoresProsoli", {
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
                { x: new Date(2018, 0), y: 234 },
                { x: new Date(2018, 1), y: 131 },
                { x: new Date(2018, 2), y: 125 },
                { x: new Date(2018, 3), y: 133 },
                { x: new Date(2018, 4), y: 110 },
                { x: new Date(2018, 5), y: 125 },
                { x: new Date(2018, 6), y: -320 },
                { x: new Date(2018, 7), y: 239 },
                { x: new Date(2018, 8), y: 112 },
                { x: new Date(2018, 9), y: 259 },
                { x: new Date(2018, 10), y: -56 },
                { x: new Date(2018, 11), y: 55 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart13.render();



    var chart15 = new CanvasJS.Chart("interaccionesTwitterProsoli", {
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
                { x: new Date(2018, 0), y: 2032 },
                { x: new Date(2018, 1), y: 1403 },
                { x: new Date(2018, 2), y: 2099 },
                { x: new Date(2018, 3), y: 2336 },
                { x: new Date(2018, 4), y: 1900 },
                { x: new Date(2018, 5), y: 1289 },
                { x: new Date(2018, 6), y: 1171 },
                { x: new Date(2018, 7), y: 1234 },
                { x: new Date(2018, 8), y: 1263 },
                { x: new Date(2018, 9), y: 1232 },
                { x: new Date(2018, 10), y: 1140 },
                { x: new Date(2018, 11), y: 806 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart15.render();

    var chart16 = new CanvasJS.Chart("meGustaTwitterProsoli", {
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
                { x: new Date(2018, 0), y: 1200 },
                { x: new Date(2018, 1), y: 848 },
                { x: new Date(2018, 2), y: 1200 },
                { x: new Date(2018, 3), y: 1187 },
                { x: new Date(2018, 4), y: 1090 },
                { x: new Date(2018, 5), y: 768 },
                { x: new Date(2018, 6), y: 711 },
                { x: new Date(2018, 7), y: 702 },
                { x: new Date(2018, 8), y: 761 },
                { x: new Date(2018, 9), y: 687 },
                { x: new Date(2018, 10), y: 541 },
                { x: new Date(2018, 11), y: 424 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart16.render();

    var chart17 = new CanvasJS.Chart("respuestaTwitterProsoli", {
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
                { x: new Date(2018, 0), y: 45 },
                { x: new Date(2018, 1), y: 28 },
                { x: new Date(2018, 2), y: 38 },
                { x: new Date(2018, 3), y: 32 },
                { x: new Date(2018, 4), y: 58 },
                { x: new Date(2018, 5), y: 31 },
                { x: new Date(2018, 6), y: 38 },
                { x: new Date(2018, 7), y: 50 },
                { x: new Date(2018, 8), y: 69 },
                { x: new Date(2018, 9), y: 105 },
                { x: new Date(2018, 10), y: 218 },
                { x: new Date(2018, 11), y: 79 }
            ]
        }]
    });

    chart17.render();



    var chart18 = new CanvasJS.Chart("retuitsProsoli", {
        animationEnabled: true,
        backgroundColor: "#B8E4F3",
        exportEnabled: true,
        theme: "light1", //"light1", "light 2", "dark1", "dark2"
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
                { x: new Date(2018, 0), y: 664 },
                { x: new Date(2018, 1), y: 420 },
                { x: new Date(2018, 2), y: 767 },
                { x: new Date(2018, 3), y: 947 },
                { x: new Date(2018, 4), y: 631 },
                { x: new Date(2018, 5), y: 433 },
                { x: new Date(2018, 6), y: 348 },
                { x: new Date(2018, 7), y: 397 },
                { x: new Date(2018, 8), y: 357 },
                { x: new Date(2018, 9), y: 361 },
                { x: new Date(2018, 10), y: 307 },
                { x: new Date(2018, 11), y: 223 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart18.render();

    var chart19 = new CanvasJS.Chart("clicsTwitterProsoli", {
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
                { x: new Date(2018, 0), y: 123 },
                { x: new Date(2018, 1), y: 107 },
                { x: new Date(2018, 2), y: 94 },
                { x: new Date(2018, 3), y: 149 },
                { x: new Date(2018, 4), y: 97 },
                { x: new Date(2018, 5), y: 57 },
                { x: new Date(2018, 6), y: 74 },
                { x: new Date(2018, 7), y: 85 },
                { x: new Date(2018, 8), y: 76 },
                { x: new Date(2018, 9), y: 79 },
                { x: new Date(2018, 10), y: 74 },
                { x: new Date(2018, 11), y: 80 }
            ]
        }]
    });

    chart19.render();

    var chart20 = new CanvasJS.Chart("VisitasPerfilTwitterProsoli", {
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
                { x: new Date(2018, 0), y: 2500 },
                { x: new Date(2018, 1), y: 2427 },
                { x: new Date(2018, 2), y: 2414 },
                { x: new Date(2018, 3), y: 3346 },
                { x: new Date(2018, 4), y: 2988 },
                { x: new Date(2018, 5), y: 2392 },
                { x: new Date(2018, 6), y: 1863 },
                { x: new Date(2018, 7), y: 2393 },
                { x: new Date(2018, 8), y: 2493 },
                { x: new Date(2018, 9), y: 3184 },
                { x: new Date(2018, 10), y: 3547 },
                { x: new Date(2018, 11), y: 2620 }
            ]
        }]
    });

    chart20.render();

    var chart21 = new CanvasJS.Chart("tweetsRealizadosProsoli", {
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
                { x: new Date(2018, 0), y: 150 },
                { x: new Date(2018, 1), y: 122 },
                { x: new Date(2018, 2), y: 131 },
                { x: new Date(2018, 3), y: 203 },
                { x: new Date(2018, 4), y: 144 },
                { x: new Date(2018, 5), y: 129 },
                { x: new Date(2018, 6), y: 107 },
                { x: new Date(2018, 7), y: 114 },
                { x: new Date(2018, 8), y: 135 },
                { x: new Date(2018, 9), y: 175 },
                { x: new Date(2018, 10), y: 258 },
                { x: new Date(2018, 11), y: 121 }
            ]
        }]
    });

    chart21.render();


    var chart22 = new CanvasJS.Chart("mencionesTweetsProsoli", {
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
                { x: new Date(2018, 0), y: 139 },
                { x: new Date(2018, 1), y: 104 },
                { x: new Date(2018, 2), y: 171 },
                { x: new Date(2018, 3), y: 174 },
                { x: new Date(2018, 4), y: 136 },
                { x: new Date(2018, 5), y: 161 },
                { x: new Date(2018, 6), y: 50 },
                { x: new Date(2018, 7), y: 297 },
                { x: new Date(2018, 8), y: 87 },
                { x: new Date(2018, 9), y: 171 },
                { x: new Date(2018, 10), y: 92 },
                { x: new Date(2018, 11), y: 139 }
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
                { x: new Date(2018, 0), y: 30154 },
                { x: new Date(2018, 1), y: 30285 },
                { x: new Date(2018, 2), y: 30410 },
                { x: new Date(2018, 3), y: 30543 },
                { x: new Date(2018, 4), y: 30653 },
                { x: new Date(2018, 5), y: 30778 },
                { x: new Date(2018, 6), y: 30847 },
                { x: new Date(2018, 7), y: 31167 },
                { x: new Date(2018, 8), y: 31283 },
                { x: new Date(2018, 9), y: 31539 },
                { x: new Date(2018, 10), y: 31490 },
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
                { x: new Date(2018, 0), y: 0.07 },
                { x: new Date(2018, 1), y: 0.05 },
                { x: new Date(2018, 2), y: 0.07 },
                { x: new Date(2018, 3), y: 0.08 },
                { x: new Date(2018, 4), y: 0.06 },
                { x: new Date(2018, 5), y: 0.04 },
                { x: new Date(2018, 6), y: 0.04 },
                { x: new Date(2018, 7), y: 0.05 },
                { x: new Date(2018, 8), y: 0.06 },
                { x: new Date(2018, 9), y: 0.04 },
                { x: new Date(2018, 10), y: 0.04 },
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
                    { x: new Date(2018, 9), y: 5.85 },
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
                    { x: new Date(2018, 9), y: 8.33 },
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
                    { x: new Date(2018, 9), y: 8.85 },
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