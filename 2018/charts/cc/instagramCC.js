/*   *****************************************
            CHARTS INSTAGRAM
  **************************************** */

window.onload = function() {

    var chart1 = new CanvasJS.Chart("engagementIGCC", {
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
                { x: new Date(2018, 0), y: 0.80 },
                { x: new Date(2018, 1), y: 0.52 },
                { x: new Date(2018, 2), y: 0.49 },
                { x: new Date(2018, 3), y: 0.15 },
                { x: new Date(2018, 4), y: 0.34 },
                { x: new Date(2018, 5), y: 0.18 },
                { x: new Date(2018, 6), y: 0.29 },
                { x: new Date(2018, 7), y: 0.30 },
                { x: new Date(2018, 8), y: 0.24 },
                { x: new Date(2018, 9), y: 1.08 },
                { x: new Date(2018, 10), y: 0.44 },
                { x: new Date(2018, 11), y: 0.30 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart1.render();

    var chart2 = new CanvasJS.Chart("nuevosSeguidoreIGCC", {
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
                { x: new Date(2018, 0), y: 45 },
                { x: new Date(2018, 1), y: 256 },
                { x: new Date(2018, 2), y: 282 },
                { x: new Date(2018, 3), y: 242 },
                { x: new Date(2018, 4), y: 191 },
                { x: new Date(2018, 5), y: -6 },
                { x: new Date(2018, 6), y: 66 },
                { x: new Date(2018, 7), y: 211 },
                { x: new Date(2018, 8), y: 440 },
                { x: new Date(2018, 9), y: 515 },
                { x: new Date(2018, 10), y: 634 },
                { x: new Date(2018, 11), y: 549 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart2.render();

    var chart3 = new CanvasJS.Chart("nuevosMeGustaIGCC", {
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
                { x: new Date(2018, 0), y: 802 },
                { x: new Date(2018, 1), y: 647 },
                { x: new Date(2018, 2), y: 753 },
                { x: new Date(2018, 3), y: 273 },
                { x: new Date(2018, 4), y: 657 },
                { x: new Date(2018, 5), y: 354 },
                { x: new Date(2018, 6), y: 562 },
                { x: new Date(2018, 7), y: 631 },
                { x: new Date(2018, 8), y: 626 },
                { x: new Date(2018, 9), y: 3483 },
                { x: new Date(2018, 10), y: 1656 },
                { x: new Date(2018, 11), y: 1282 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart3.render()

    var chart4 = new CanvasJS.Chart("comentariosIGCC", {
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
                { x: new Date(2018, 0), y: 17 },
                { x: new Date(2018, 1), y: 22 },
                { x: new Date(2018, 2), y: 11 },
                { x: new Date(2018, 3), y: 1 },
                { x: new Date(2018, 4), y: 11 },
                { x: new Date(2018, 5), y: 5 },
                { x: new Date(2018, 6), y: 24 },
                { x: new Date(2018, 7), y: 46 },
                { x: new Date(2018, 8), y: 17 },
                { x: new Date(2018, 9), y: 145 },
                { x: new Date(2018, 10), y: 36 },
                { x: new Date(2018, 11), y: 26 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart4.render();

    var chart5 = new CanvasJS.Chart("publicacionesIGCC", {
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
                { x: new Date(2018, 0), y: 17 },
                { x: new Date(2018, 1), y: 14 },
                { x: new Date(2018, 2), y: 15 },
                { x: new Date(2018, 3), y: 7 },
                { x: new Date(2018, 4), y: 13 },
                { x: new Date(2018, 5), y: 7 },
                { x: new Date(2018, 6), y: 11 },
                { x: new Date(2018, 7), y: 17 },
                { x: new Date(2018, 8), y: 9 },
                { x: new Date(2018, 9), y: 24 },
                { x: new Date(2018, 10), y: 24 },
                { x: new Date(2018, 11), y: 23 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart5.render();

    /* interacciones */
    var chart6 = new CanvasJS.Chart("interraccionesIGCC", {
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
                { x: new Date(2018, 0), y: 819 },
                { x: new Date(2018, 1), y: 669 },
                { x: new Date(2018, 2), y: 764 },
                { x: new Date(2018, 3), y: 274 },
                { x: new Date(2018, 4), y: 668 },
                { x: new Date(2018, 5), y: 359 },
                { x: new Date(2018, 6), y: 586 },
                { x: new Date(2018, 7), y: 677 },
                { x: new Date(2018, 8), y: 643 },
                { x: new Date(2018, 9), y: 3483 },
                { x: new Date(2018, 10), y: 1692 },
                { x: new Date(2018, 11), y: 1308 }


            ]
        }]
    });
    chart6.render();

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
                { x: new Date(2018, 0), y: 1022 },
                { x: new Date(2018, 1), y: 1278 },
                { x: new Date(2018, 2), y: 1560 },
                { x: new Date(2018, 3), y: 1802 },
                { x: new Date(2018, 4), y: 1993 },
                { x: new Date(2018, 5), y: 1987 },
                { x: new Date(2018, 6), y: 2053 },
                { x: new Date(2018, 7), y: 2264 },
                { x: new Date(2018, 8), y: 2704 },
                { x: new Date(2018, 9), y: 3218 },
                { x: new Date(2018, 10), y: 3853 },
                { x: new Date(2018, 11), y: 4402 }
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
                { x: new Date(2018, 0), y: 0.80 },
                { x: new Date(2018, 1), y: 0.52 },
                { x: new Date(2018, 2), y: 0.49 },
                { x: new Date(2018, 3), y: 0.15 },
                { x: new Date(2018, 4), y: 0.34 },
                { x: new Date(2018, 5), y: 0.18 },
                { x: new Date(2018, 6), y: 0.29 },
                { x: new Date(2018, 7), y: 0.30 },
                { x: new Date(2018, 8), y: 0.24 },
                { x: new Date(2018, 9), y: 1.13 },
                { x: new Date(2018, 10), y: 0.44 },
                { x: new Date(2018, 11), y: 0.30 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart26.render();


















};