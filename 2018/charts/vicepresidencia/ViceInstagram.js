window.onload = function() {

    var chart20 = new CanvasJS.Chart("engagementIGVice", {
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
            suffix: "%"

        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#f4874b",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "##0.00'%'",
            dataPoints: [

                { x: new Date(2018, 0), y: 0.17 },
                { x: new Date(2018, 1), y: 0.15 },
                { x: new Date(2018, 2), y: 0.18 },
                { x: new Date(2018, 3), y: 0.14 },
                { x: new Date(2018, 4), y: 0.17 },
                { x: new Date(2018, 5), y: 0.20 },
                { x: new Date(2018, 6), y: 0.12 },
                { x: new Date(2018, 7), y: 0.10 },
                { x: new Date(2018, 8), y: 0.11 },
                { x: new Date(2018, 9), y: 0.14 },
                { x: new Date(2018, 10), y: 0.12 },
                { x: new Date(2018, 11), y: 0.16 }


                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart20.render();

    var chart21 = new CanvasJS.Chart("nuevosSeguidoreIGVice", {
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
                { x: new Date(2018, 0), y: 520 },
                { x: new Date(2018, 1), y: 622 },
                { x: new Date(2018, 2), y: 580 },
                { x: new Date(2018, 3), y: 636 },
                { x: new Date(2018, 4), y: 870 },
                { x: new Date(2018, 5), y: 1153 },
                { x: new Date(2018, 6), y: 1308 },
                { x: new Date(2018, 7), y: 1273 },
                { x: new Date(2018, 8), y: 1053 },
                { x: new Date(2018, 9), y: 1038 },
                { x: new Date(2018, 10), y: 917 },
                { x: new Date(2018, 11), y: 1056 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart21.render();



    var chart22 = new CanvasJS.Chart("nuevosMeGustaIGVice", {
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
                { x: new Date(2018, 0), y: 3101 },
                { x: new Date(2018, 1), y: 2886 },
                { x: new Date(2018, 2), y: 3705 },
                { x: new Date(2018, 3), y: 3066 },
                { x: new Date(2018, 4), y: 3775 },
                { x: new Date(2018, 5), y: 4612 },
                { x: new Date(2018, 6), y: 2930 },
                { x: new Date(2018, 7), y: 2638 },
                { x: new Date(2018, 8), y: 2886 },
                { x: new Date(2018, 9), y: 3910 },
                { x: new Date(2018, 10), y: 3326 },
                { x: new Date(2018, 11), y: 4834 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart22.render()



    var chart25 = new CanvasJS.Chart("publicacionesIGVice", {
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
            title: "Cantidad de publicaciones",
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
                { x: new Date(2018, 0), y: 37 },
                { x: new Date(2018, 1), y: 34 },
                { x: new Date(2018, 2), y: 39 },
                { x: new Date(2018, 3), y: 35 },
                { x: new Date(2018, 4), y: 36 },
                { x: new Date(2018, 5), y: 45 },
                { x: new Date(2018, 6), y: 26 },
                { x: new Date(2018, 7), y: 26 },
                { x: new Date(2018, 8), y: 27 },
                { x: new Date(2018, 9), y: 42 },
                { x: new Date(2018, 10), y: 37 },
                { x: new Date(2018, 11), y: 37 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart25.render();


    var chart23 = new CanvasJS.Chart("comentariosIGVice", {
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
            title: "Cantidad",
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
                { x: new Date(2018, 0), y: 189 },
                { x: new Date(2018, 1), y: 138 },
                { x: new Date(2018, 2), y: 57 },
                { x: new Date(2018, 3), y: 38 },
                { x: new Date(2018, 4), y: 126 },
                { x: new Date(2018, 5), y: 117 },
                { x: new Date(2018, 6), y: 147 },
                { x: new Date(2018, 7), y: 63 },
                { x: new Date(2018, 8), y: 96 },
                { x: new Date(2018, 9), y: 106 },
                { x: new Date(2018, 10), y: 48 },
                { x: new Date(2018, 11), y: 89 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart23.render();

    /* interacciones */
    var chart24 = new CanvasJS.Chart("interraccionesIGVice", {
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
                { x: new Date(2018, 0), y: 3290 },
                { x: new Date(2018, 1), y: 3024 },
                { x: new Date(2018, 2), y: 3762 },
                { x: new Date(2018, 3), y: 3104 },
                { x: new Date(2018, 4), y: 3901 },
                { x: new Date(2018, 5), y: 4729 },
                { x: new Date(2018, 6), y: 3077 },
                { x: new Date(2018, 7), y: 2701 },
                { x: new Date(2018, 8), y: 2982 },
                { x: new Date(2018, 9), y: 4016 },
                { x: new Date(2018, 10), y: 3384 },
                { x: new Date(2018, 11), y: 4923 }


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
                { x: new Date(2018, 0), y: 19700 },
                { x: new Date(2018, 1), y: 20322 },
                { x: new Date(2018, 2), y: 20902 },
                { x: new Date(2018, 3), y: 21538 },
                { x: new Date(2018, 4), y: 22408 },
                { x: new Date(2018, 5), y: 23561 },
                { x: new Date(2018, 6), y: 24869 },
                { x: new Date(2018, 7), y: 26146 },
                { x: new Date(2018, 8), y: 27195 },
                { x: new Date(2018, 9), y: 28233 },
                { x: new Date(2018, 10), y: 29150 },
                { x: new Date(2018, 11), y: 30206 }
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
                { x: new Date(2018, 0), y: 0.17 },
                { x: new Date(2018, 1), y: 0.14 },
                { x: new Date(2018, 2), y: 0.18 },
                { x: new Date(2018, 3), y: 0.14 },
                { x: new Date(2018, 4), y: 0.17 },
                { x: new Date(2018, 5), y: 0.20 },
                { x: new Date(2018, 6), y: 0.12 },
                { x: new Date(2018, 7), y: 0.10 },
                { x: new Date(2018, 8), y: 0.10 },
                { x: new Date(2018, 9), y: 0.14 },
                { x: new Date(2018, 10), y: 0.12 },
                { x: new Date(2018, 11), y: 0.16 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart26.render();


};