window.onload = function() {

    var chart20 = new CanvasJS.Chart("engagementIGTS", {
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
            labelFontColor: "#222",
            intervalType: "month",
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

                { x: new Date(2018, 4), y: 2.42 },
                { x: new Date(2018, 5), y: 0.88 },
                { x: new Date(2018, 6), y: 1.55 },
                { x: new Date(2018, 7), y: 1.35 },
                { x: new Date(2018, 8), y: 1.63 },
                { x: new Date(2018, 9), y: 0.99 },
                { x: new Date(2018, 10), y: 0.68 },
                { x: new Date(2018, 11), y: 0.61 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart20.render();

    var chart21 = new CanvasJS.Chart("nuevosSeguidoreIGTS", {
        animationEnabled: true,
        backgroundColor: "#ebf2ea",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Nuevos Seguidores",
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
            title: "Nuevos Seguidores",
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

                { x: new Date(2018, 3), y: 322 },
                { x: new Date(2018, 4), y: 120 },
                { x: new Date(2018, 5), y: 152 },
                { x: new Date(2018, 6), y: 53 },
                { x: new Date(2018, 7), y: 44 },
                { x: new Date(2018, 8), y: 377 },
                { x: new Date(2018, 9), y: 139 },
                { x: new Date(2018, 10), y: 82 },
                { x: new Date(2018, 11), y: 62 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart21.render();



    var chart22 = new CanvasJS.Chart("nuevosMeGustaIGTS", {
        animationEnabled: true,
        backgroundColor: "#f3d4a0",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Me gusta mensuales",
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
            color: "#0486db",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [

                { x: new Date(2018, 3), y: 275 },
                { x: new Date(2018, 4), y: 1010 },
                { x: new Date(2018, 5), y: 484 },
                { x: new Date(2018, 6), y: 938 },
                { x: new Date(2018, 7), y: 877 },
                { x: new Date(2018, 8), y: 1591 },
                { x: new Date(2018, 9), y: 1000 },
                { x: new Date(2018, 10), y: 734 },
                { x: new Date(2018, 11), y: 791 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart22.render()



    var chart25 = new CanvasJS.Chart("publicacionesIGTS", {
        animationEnabled: true,
        backgroundColor: "#d8d583",
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
            title: "Cantidad",
            labelFontColor: "#222",
            titleFontColor: "#222",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#d6618f",
            name: "views",
            type: "stepLine",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [

                { x: new Date(2018, 3), y: 9 },
                { x: new Date(2018, 4), y: 26 },
                { x: new Date(2018, 5), y: 16 },
                { x: new Date(2018, 6), y: 27 },
                { x: new Date(2018, 7), y: 24 },
                { x: new Date(2018, 8), y: 37 },
                { x: new Date(2018, 9), y: 31 },
                { x: new Date(2018, 10), y: 25 },
                { x: new Date(2018, 11), y: 28 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart25.render();


    var chart23 = new CanvasJS.Chart("comentariosIGTS", {
        animationEnabled: true,
        backgroundColor: "#d8d583",
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
            color: "#d6618f",
            name: "views",
            type: "line",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [

                { x: new Date(2018, 3), y: 19 },
                { x: new Date(2018, 4), y: 61 },
                { x: new Date(2018, 5), y: 38 },
                { x: new Date(2018, 6), y: 63 },
                { x: new Date(2018, 7), y: 56 },
                { x: new Date(2018, 8), y: 153 },
                { x: new Date(2018, 9), y: 62 },
                { x: new Date(2018, 10), y: 45 },
                { x: new Date(2018, 11), y: 28 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart23.render();

    /* interacciones */
    var chart24 = new CanvasJS.Chart("interraccionesIGTS", {
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

                { x: new Date(2018, 4), y: 1365 },
                { x: new Date(2018, 5), y: 522 },
                { x: new Date(2018, 6), y: 1001 },
                { x: new Date(2018, 7), y: 933 },
                { x: new Date(2018, 8), y: 1744 },
                { x: new Date(2018, 9), y: 1062 },
                { x: new Date(2018, 10), y: 779 },
                { x: new Date(2018, 11), y: 819 }


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
                { x: new Date(2018, 4), y: 442 },
                { x: new Date(2018, 5), y: 594 },
                { x: new Date(2018, 6), y: 647 },
                { x: new Date(2018, 7), y: 691 },
                { x: new Date(2018, 8), y: 1068 },
                { x: new Date(2018, 9), y: 1207 },
                { x: new Date(2018, 10), y: 1150 },
                { x: new Date(2018, 11), y: 1351 }
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

                { x: new Date(2018, 4), y: 2.42 },
                { x: new Date(2018, 5), y: 0.88 },
                { x: new Date(2018, 6), y: 1.55 },
                { x: new Date(2018, 7), y: 1.35 },
                { x: new Date(2018, 8), y: 1.63 },
                { x: new Date(2018, 9), y: 2.07 },
                { x: new Date(2018, 10), y: 1.47 },
                { x: new Date(2018, 11), y: 0.61 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart26.render();














};