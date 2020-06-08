/*   *****************************************
            CHARTS instagram
  **************************************** */

window.onload = function() {

    var chart20 = new CanvasJS.Chart("engagementIGSiuben", {
        backgroundColor: "#ebf2ea",
        exportEnabled: true,
        animationEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Engagement mensual Instagram",
            fontSize: 20,
            fontColor: "#222",
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
            color: "#f4874b",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2018, 0), y: 0.09 },
                { x: new Date(2018, 1), y: 0.11 },
                { x: new Date(2018, 2), y: 0.11 },
                { x: new Date(2018, 3), y: 0.04 },
                { x: new Date(2018, 4), y: 0.13 },
                { x: new Date(2018, 5), y: 0.05 },
                { x: new Date(2018, 6), y: 0.08 },
                { x: new Date(2018, 7), y: 0.12 },
                { x: new Date(2018, 8), y: 0.07 },
                { x: new Date(2018, 9), y: 0.24 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart20.render();

    var chart21 = new CanvasJS.Chart("nuevosSeguidoreIGSiuben", {
        animationEnabled: true,
        backgroundColor: "#ebf2ea",
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
            titleFontColor: "#4F81BC",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#f4874b",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 9 },
                { x: new Date(2018, 1), y: 21 },
                { x: new Date(2018, 2), y: 19 },
                { x: new Date(2018, 3), y: 21 },
                { x: new Date(2018, 4), y: 79 },
                { x: new Date(2018, 5), y: 43 },
                { x: new Date(2018, 6), y: 26 },
                { x: new Date(2018, 7), y: 22 },
                { x: new Date(2018, 8), y: -1 },
                { x: new Date(2018, 9), y: -8 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart21.render();



    var chart22 = new CanvasJS.Chart("nuevosMeGustaIGSiuben", {
        animationEnabled: true,
        backgroundColor: "#f3d4a0",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Me gusta Mensuales",
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
            title: "No. Me gusta",
            labelFontColor: "#222",
            titleFontColor: "#222",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#0294a5",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 362 },
                { x: new Date(2018, 1), y: 444 },
                { x: new Date(2018, 2), y: 440 },
                { x: new Date(2018, 3), y: 160 },
                { x: new Date(2018, 4), y: 538 },
                { x: new Date(2018, 5), y: 205 },
                { x: new Date(2018, 6), y: 360 },
                { x: new Date(2018, 7), y: 483 },
                { x: new Date(2018, 8), y: 260 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart22.render();



    var chart25 = new CanvasJS.Chart("publicacionesIGSiuben", {
        animationEnabled: true,
        backgroundColor: "#f3d4a0",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Cantidad de publicaciones",
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
            title: "No. Publicaciones",
            labelFontColor: "#222",
            titleFontColor: "#222",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#0294a5",
            name: "views",
            type: "stepLine",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 15 },
                { x: new Date(2018, 1), y: 20 },
                { x: new Date(2018, 2), y: 17 },
                { x: new Date(2018, 3), y: 7 },
                { x: new Date(2018, 4), y: 15 },
                { x: new Date(2018, 5), y: 6 },
                { x: new Date(2018, 6), y: 10 },
                { x: new Date(2018, 7), y: 12 },
                { x: new Date(2018, 8), y: 6 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart25.render();


    var chart23 = new CanvasJS.Chart("comentariosIGSiuben", {
        animationEnabled: true,
        backgroundColor: "#f3d4a0",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Comentarios en publicaciones",
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
            color: "#0294a5",
            name: "views",
            type: "line",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 8 },
                { x: new Date(2018, 1), y: 13 },
                { x: new Date(2018, 2), y: 22 },
                { x: new Date(2018, 3), y: 7 },
                { x: new Date(2018, 4), y: 36 },
                { x: new Date(2018, 5), y: 13 },
                { x: new Date(2018, 6), y: 4 },
                { x: new Date(2018, 7), y: 51 },
                { x: new Date(2018, 8), y: 29 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart23.render();


    /* interacciones */
    var chart24 = new CanvasJS.Chart("interraccionesIGSiuben", {
        animationEnabled: true,
        backgroundColor: "#f3d4a0",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Total interacciones",
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
            title: "No. de interacciones",
            labelFontColor: "#222",
            titleFontColor: "#222",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#0486db",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 370 },
                { x: new Date(2018, 1), y: 457 },
                { x: new Date(2018, 2), y: 462 },
                { x: new Date(2018, 3), y: 167 },
                { x: new Date(2018, 4), y: 574 },
                { x: new Date(2018, 5), y: 218 },
                { x: new Date(2018, 6), y: 364 },
                { x: new Date(2018, 7), y: 534 },
                { x: new Date(2018, 8), y: 289 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }


            ]
        }]
    });
    chart24.render();

    //total de seguidores

    var chart25 = new CanvasJS.Chart("IGTotalSeguidores", {
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
                { x: new Date(2018, 0), y: 4186 },
                { x: new Date(2018, 1), y: 4207 },
                { x: new Date(2018, 2), y: 4226 },
                { x: new Date(2018, 3), y: 4247 },
                { x: new Date(2018, 4), y: 4326 },
                { x: new Date(2018, 5), y: 4369 },
                { x: new Date(2018, 6), y: 4395 },
                { x: new Date(2018, 7), y: 4417 },
                { x: new Date(2018, 8), y: 4416 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }
            ]
        }]
    });

    chart25.render();



    /*PORCENTAJE DE PARTICIPACION ADESS*/


    var chart26 = new CanvasJS.Chart("IGPorcentajeParticipacion", {
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
                { x: new Date(2018, 0), y: 0.09 },
                { x: new Date(2018, 1), y: 0.11 },
                { x: new Date(2018, 2), y: 0.11 },
                { x: new Date(2018, 3), y: 0.04 },
                { x: new Date(2018, 4), y: 0.13 },
                { x: new Date(2018, 5), y: 0.05 },
                { x: new Date(2018, 6), y: 0.08 },
                { x: new Date(2018, 7), y: 0.12 },
                { x: new Date(2018, 8), y: 0.07 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart26.render();



















};