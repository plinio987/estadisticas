window.onload = function() {

    var chart20 = new CanvasJS.Chart("engagementIGOpsd", {
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
                { x: new Date(2018, 0), y: 0.05 },
                { x: new Date(2018, 1), y: 0.04 },
                { x: new Date(2018, 2), y: 0.12 },
                { x: new Date(2018, 3), y: 0.11 },
                { x: new Date(2018, 4), y: 0.14 },
                { x: new Date(2018, 5), y: 0.13 },
                { x: new Date(2018, 6), y: 0.14 },
                { x: new Date(2018, 7), y: 0.10 },
                { x: new Date(2018, 8), y: 0.03 },
                { x: new Date(2018, 9), y: 0.14 },
                { x: new Date(2018, 10), y: 0.08 },
                { x: new Date(2018, 11), y: 0.06 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart20.render();

    var chart21 = new CanvasJS.Chart("nuevosSeguidoreIGOpsd", {
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
            title: "Nuevos seguidores",
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
                { x: new Date(2018, 0), y: -14 },
                { x: new Date(2018, 1), y: -6 },
                { x: new Date(2018, 2), y: 13 },
                { x: new Date(2018, 3), y: 14 },
                { x: new Date(2018, 4), y: 37 },
                { x: new Date(2018, 5), y: -3 },
                { x: new Date(2018, 6), y: 17 },
                { x: new Date(2018, 7), y: -3 },
                { x: new Date(2018, 8), y: -8 },
                { x: new Date(2018, 9), y: 20 },
                { x: new Date(2018, 10), y: 13 },
                { x: new Date(2018, 11), y: -7 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart21.render();



    var chart22 = new CanvasJS.Chart("nuevosMeGustaIGOpsd", {
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
            color: "#0294a5",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 143 },
                { x: new Date(2018, 1), y: 129 },
                { x: new Date(2018, 2), y: 349 },
                { x: new Date(2018, 3), y: 333 },
                { x: new Date(2018, 4), y: 436 },
                { x: new Date(2018, 5), y: 397 },
                { x: new Date(2018, 6), y: 411 },
                { x: new Date(2018, 7), y: 308 },
                { x: new Date(2018, 8), y: 103 },
                { x: new Date(2018, 9), y: 409 },
                { x: new Date(2018, 10), y: 245 },
                { x: new Date(2018, 11), y: 188 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });

    chart22.render();


    var chart25 = new CanvasJS.Chart("publicacionesIGOpsd", {
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
                { x: new Date(2018, 0), y: 16 },
                { x: new Date(2018, 1), y: 12 },
                { x: new Date(2018, 2), y: 20 },
                { x: new Date(2018, 3), y: 20 },
                { x: new Date(2018, 4), y: 21 },
                { x: new Date(2018, 5), y: 22 },
                { x: new Date(2018, 6), y: 23 },
                { x: new Date(2018, 7), y: 18 },
                { x: new Date(2018, 8), y: 6 },
                { x: new Date(2018, 9), y: 18 },
                { x: new Date(2018, 10), y: 20 },
                { x: new Date(2018, 11), y: 18 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart25.render();


    var chart23 = new CanvasJS.Chart("comentariosIGOpsd", {
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
                { x: new Date(2018, 0), y: 2 },
                { x: new Date(2018, 1), y: 1 },
                { x: new Date(2018, 2), y: 8 },
                { x: new Date(2018, 3), y: 2 },
                { x: new Date(2018, 4), y: 4 },
                { x: new Date(2018, 5), y: 4 },
                { x: new Date(2018, 6), y: 11 },
                { x: new Date(2018, 7), y: 5 },
                { x: new Date(2018, 8), y: 2 },
                { x: new Date(2018, 9), y: 10 },
                { x: new Date(2018, 10), y: 6 },
                { x: new Date(2018, 11), y: 3 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart23.render();

    /* interacciones */
    var chart24 = new CanvasJS.Chart("interraccionesIGOpsd", {
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
                { x: new Date(2018, 0), y: 145 },
                { x: new Date(2018, 1), y: 130 },
                { x: new Date(2018, 2), y: 357 },
                { x: new Date(2018, 3), y: 335 },
                { x: new Date(2018, 4), y: 440 },
                { x: new Date(2018, 5), y: 401 },
                { x: new Date(2018, 6), y: 422 },
                { x: new Date(2018, 7), y: 313 },
                { x: new Date(2018, 8), y: 105 },
                { x: new Date(2018, 9), y: 419 },
                { x: new Date(2018, 10), y: 251 },
                { x: new Date(2018, 11), y: 191 }


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
                { x: new Date(2018, 0), y: 3002 },
                { x: new Date(2018, 1), y: 2996 },
                { x: new Date(2018, 2), y: 3009 },
                { x: new Date(2018, 3), y: 3023 },
                { x: new Date(2018, 4), y: 3060 },
                { x: new Date(2018, 5), y: 3057 },
                { x: new Date(2018, 6), y: 3074 },
                { x: new Date(2018, 7), y: 3071 },
                { x: new Date(2018, 8), y: 3063 },
                { x: new Date(2018, 9), y: 3083 },
                { x: new Date(2018, 10), y: 3096 },
                { x: new Date(2018, 11), y: 3089 }
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
                { x: new Date(2018, 0), y: 0.05 },
                { x: new Date(2018, 1), y: 0.04 },
                { x: new Date(2018, 2), y: 0.12 },
                { x: new Date(2018, 3), y: 0.11 },
                { x: new Date(2018, 4), y: 0.14 },
                { x: new Date(2018, 5), y: 0.13 },
                { x: new Date(2018, 6), y: 0.14 },
                { x: new Date(2018, 7), y: 0.10 },
                { x: new Date(2018, 8), y: 0.03 },
                { x: new Date(2018, 9), y: 0.14 },
                { x: new Date(2018, 10), y: 0.08 },
                { x: new Date(2018, 11), y: 0.06 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart26.render();
















};