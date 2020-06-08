/*   *****************************************
            CHARTS INSTAGRAM
  **************************************** */

window.onload = function() {

    var chart20 = new CanvasJS.Chart("engagementIGManosDominicanas", {
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
                { x: new Date(2018, 0), y: 0.37 },
                { x: new Date(2018, 1), y: 0.35 },
                { x: new Date(2018, 2), y: 0.20 },
                { x: new Date(2018, 3), y: 0.16 },
                { x: new Date(2018, 4), y: 0.32 },
                { x: new Date(2018, 5), y: 0.15 },
                { x: new Date(2018, 6), y: 0.25 },
                { x: new Date(2018, 7), y: 0.31 },
                { x: new Date(2018, 8), y: 0.21 },
                { x: new Date(2018, 9), y: 0.29 },
                { x: new Date(2018, 10), y: 0.03 },
                { x: new Date(2018, 11), y: 0.19 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart20.render();

    var chart21 = new CanvasJS.Chart("nuevosSeguidoreIGManosDominicanas", {
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
                { x: new Date(2018, 0), y: 300 },
                { x: new Date(2018, 1), y: 191 },
                { x: new Date(2018, 2), y: 161 },
                { x: new Date(2018, 3), y: 43 },
                { x: new Date(2018, 4), y: 163 },
                { x: new Date(2018, 5), y: 74 },
                { x: new Date(2018, 6), y: 62 },
                { x: new Date(2018, 7), y: 96 },
                { x: new Date(2018, 8), y: 108 },
                { x: new Date(2018, 9), y: 217 },
                { x: new Date(2018, 10), y: 90 },
                { x: new Date(2018, 11), y: 222 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart21.render();



    var chart22 = new CanvasJS.Chart("nuevosMeGustaIGManosDominicanas", {
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
                { x: new Date(2018, 0), y: 3821 },
                { x: new Date(2018, 1), y: 3738 },
                { x: new Date(2018, 2), y: 2156 },
                { x: new Date(2018, 3), y: 1772 },
                { x: new Date(2018, 4), y: 3478 },
                { x: new Date(2018, 5), y: 1721 },
                { x: new Date(2018, 6), y: 2729 },
                { x: new Date(2018, 7), y: 2469 },
                { x: new Date(2018, 8), y: 2419 },
                { x: new Date(2018, 9), y: 3391 },
                { x: new Date(2018, 10), y: 377 },
                { x: new Date(2018, 11), y: 2269 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart22.render();



    var chart25 = new CanvasJS.Chart("publicacionesIGManosDominicanas", {
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
                { x: new Date(2018, 0), y: 26 },
                { x: new Date(2018, 1), y: 26 },
                { x: new Date(2018, 2), y: 21 },
                { x: new Date(2018, 3), y: 12 },
                { x: new Date(2018, 4), y: 22 },
                { x: new Date(2018, 5), y: 16 },
                { x: new Date(2018, 6), y: 24 },
                { x: new Date(2018, 7), y: 27 },
                { x: new Date(2018, 8), y: 22 },
                { x: new Date(2018, 9), y: 41 },
                { x: new Date(2018, 10), y: 5 },
                { x: new Date(2018, 11), y: 31 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart25.render();


    var chart23 = new CanvasJS.Chart("comentariosIGManosDominicanas", {
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
                { x: new Date(2018, 0), y: 73 },
                { x: new Date(2018, 1), y: 52 },
                { x: new Date(2018, 2), y: 44 },
                { x: new Date(2018, 3), y: 12 },
                { x: new Date(2018, 4), y: 54 },
                { x: new Date(2018, 5), y: 17 },
                { x: new Date(2018, 6), y: 46 },
                { x: new Date(2018, 7), y: 74 },
                { x: new Date(2018, 8), y: 40 },
                { x: new Date(2018, 9), y: 56 },
                { x: new Date(2018, 10), y: 5 },
                { x: new Date(2018, 11), y: 43 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart23.render();


    /* interacciones */
    var chart24 = new CanvasJS.Chart("interraccionesIGManosDominicanas", {
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
                { x: new Date(2018, 0), y: 3894 },
                { x: new Date(2018, 1), y: 3790 },
                { x: new Date(2018, 2), y: 2200 },
                { x: new Date(2018, 3), y: 1784 },
                { x: new Date(2018, 4), y: 3532 },
                { x: new Date(2018, 5), y: 1738 },
                { x: new Date(2018, 6), y: 2775 },
                { x: new Date(2018, 7), y: 3543 },
                { x: new Date(2018, 8), y: 2459 },
                { x: new Date(2018, 9), y: 3447 },
                { x: new Date(2018, 10), y: 382 },
                { x: new Date(2018, 11), y: 2312 }


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
                { x: new Date(2018, 0), y: 10600 },
                { x: new Date(2018, 1), y: 10791 },
                { x: new Date(2018, 2), y: 10952 },
                { x: new Date(2018, 3), y: 10995 },
                { x: new Date(2018, 4), y: 11158 },
                { x: new Date(2018, 5), y: 11232 },
                { x: new Date(2018, 6), y: 11294 },
                { x: new Date(2018, 7), y: 11390 },
                { x: new Date(2018, 8), y: 11498 },
                { x: new Date(2018, 9), y: 11715 },
                { x: new Date(2018, 10), y: 11805 },
                { x: new Date(2018, 11), y: 12207 }
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
                { x: new Date(2018, 0), y: 0.37 },
                { x: new Date(2018, 1), y: 0.35 },
                { x: new Date(2018, 2), y: 0.20 },
                { x: new Date(2018, 3), y: 0.16 },
                { x: new Date(2018, 4), y: 0.32 },
                { x: new Date(2018, 5), y: 0.15 },
                { x: new Date(2018, 6), y: 0.25 },
                { x: new Date(2018, 7), y: 0.31 },
                { x: new Date(2018, 8), y: 0.21 },
                { x: new Date(2018, 9), y: 0.29 },
                { x: new Date(2018, 10), y: 0.03 },
                { x: new Date(2018, 11), y: 0.24 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart26.render();















};