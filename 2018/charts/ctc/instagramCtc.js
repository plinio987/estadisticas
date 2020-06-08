/*   *****************************************
            CHARTS TWITTER
  **************************************** */

window.onload = function() {

    var chart20 = new CanvasJS.Chart("engagementIGCTC", {
        backgroundColor: "#ebf2ea",
        exportEnabled: true,
        animationEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Engagement mensual Instagram",
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
            color: "#f4874b",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2018, 0), y: 1.88 },
                { x: new Date(2018, 1), y: 1.89 },
                { x: new Date(2018, 2), y: 2.15 },
                { x: new Date(2018, 3), y: 1.79 },
                { x: new Date(2018, 4), y: 1.17 },
                { x: new Date(2018, 5), y: 1.05 },
                { x: new Date(2018, 6), y: 0.58 },
                { x: new Date(2018, 7), y: 0.58 },
                { x: new Date(2018, 8), y: 0.57 },
                { x: new Date(2018, 9), y: 0.73 },
                { x: new Date(2018, 10), y: 0.61 },
                { x: new Date(2018, 11), y: 0.59 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart20.render();

    var chart21 = new CanvasJS.Chart("nuevosSeguidoreIGCTC", {
        animationEnabled: true,
        backgroundColor: "#ebf2ea",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Nuevos seguidores publicaciones",
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
            color: "#f4874b",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 195 },
                { x: new Date(2018, 1), y: 47 },
                { x: new Date(2018, 2), y: 89 },
                { x: new Date(2018, 3), y: 182 },
                { x: new Date(2018, 4), y: 410 },
                { x: new Date(2018, 5), y: 140 },
                { x: new Date(2018, 6), y: 162 },
                { x: new Date(2018, 7), y: 136 },
                { x: new Date(2018, 8), y: 63 },
                { x: new Date(2018, 9), y: 272 },
                { x: new Date(2018, 10), y: 140 },
                { x: new Date(2018, 11), y: 93 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart21.render();



    var chart22 = new CanvasJS.Chart("nuevosMeGustaIGCTC", {
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
                { x: new Date(2018, 0), y: 354 },
                { x: new Date(2018, 1), y: 450 },
                { x: new Date(2018, 2), y: 695 },
                { x: new Date(2018, 3), y: 859 },
                { x: new Date(2018, 4), y: 889 },
                { x: new Date(2018, 5), y: 1045 },
                { x: new Date(2018, 6), y: 683 },
                { x: new Date(2018, 7), y: 735 },
                { x: new Date(2018, 8), y: 786 },
                { x: new Date(2018, 9), y: 1129 },
                { x: new Date(2018, 10), y: 1066 },
                { x: new Date(2018, 11), y: 1096 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart22.render();

    var chart23 = new CanvasJS.Chart("comentariosIGCTC", {
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
                { x: new Date(2018, 0), y: 13 },
                { x: new Date(2018, 1), y: 8 },
                { x: new Date(2018, 2), y: 16 },
                { x: new Date(2018, 3), y: 57 },
                { x: new Date(2018, 4), y: 192 },
                { x: new Date(2018, 5), y: 66 },
                { x: new Date(2018, 6), y: 33 },
                { x: new Date(2018, 7), y: 58 },
                { x: new Date(2018, 8), y: 24 },
                { x: new Date(2018, 9), y: 108 },
                { x: new Date(2018, 10), y: 34 },
                { x: new Date(2018, 11), y: 42 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart23.render();

    var chart25 = new CanvasJS.Chart("publicacionesIGCTC", {
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
            title: "Alcance mensual",
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
                { x: new Date(2018, 0), y: 19 },
                { x: new Date(2018, 1), y: 19 },
                { x: new Date(2018, 2), y: 34 },
                { x: new Date(2018, 3), y: 34 },
                { x: new Date(2018, 4), y: 26 },
                { x: new Date(2018, 5), y: 33 },
                { x: new Date(2018, 6), y: 14 },
                { x: new Date(2018, 7), y: 16 },
                { x: new Date(2018, 8), y: 22 },
                { x: new Date(2018, 9), y: 24 },
                { x: new Date(2018, 10), y: 21 },
                { x: new Date(2018, 11), y: 25 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart25.render();

    /* interacciones */
    var chart26 = new CanvasJS.Chart("interraccionesIGCTC", {
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
                { x: new Date(2018, 0), y: 367 },
                { x: new Date(2018, 1), y: 458 },
                { x: new Date(2018, 2), y: 711 },
                { x: new Date(2018, 3), y: 916 },
                { x: new Date(2018, 4), y: 1081 },
                { x: new Date(2018, 5), y: 1111 },
                { x: new Date(2018, 6), y: 716 },
                { x: new Date(2018, 7), y: 793 },
                { x: new Date(2018, 8), y: 810 },
                { x: new Date(2018, 9), y: 1237 },
                { x: new Date(2018, 10), y: 1100 },
                { x: new Date(2018, 11), y: 1138 }


            ]
        }]
    });
    chart26.render();




    //total de seguidores

    var chart30 = new CanvasJS.Chart("IGTotalSeguidores", {
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
                { x: new Date(2018, 0), y: 195 },
                { x: new Date(2018, 1), y: 242 },
                { x: new Date(2018, 2), y: 331 },
                { x: new Date(2018, 3), y: 513 },
                { x: new Date(2018, 4), y: 923 },
                { x: new Date(2018, 5), y: 1063 },
                { x: new Date(2018, 6), y: 1225 },
                { x: new Date(2018, 7), y: 1361 },
                { x: new Date(2018, 8), y: 1424 },
                { x: new Date(2018, 9), y: 1696 },
                { x: new Date(2018, 10), y: 1836 },
                { x: new Date(2018, 11), y: 1929 }
            ]
        }]
    });

    chart30.render();



    /*PORCENTAJE DE PARTICIPACION ADESS*/


    var chart31 = new CanvasJS.Chart("IGPorcentajeParticipacion", {
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
                { x: new Date(2018, 0), y: 1.88 },
                { x: new Date(2018, 1), y: 1.89 },
                { x: new Date(2018, 2), y: 2.15 },
                { x: new Date(2018, 3), y: 1.79 },
                { x: new Date(2018, 4), y: 1.17 },
                { x: new Date(2018, 5), y: 1.05 },
                { x: new Date(2018, 6), y: 0.58 },
                { x: new Date(2018, 7), y: 0.58 },
                { x: new Date(2018, 8), y: 0.57 },
                { x: new Date(2018, 9), y: 0.73 },
                { x: new Date(2018, 10), y: 0.60 },
                { x: new Date(2018, 11), y: 0.59 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart31.render();















};