window.onload = function() {

    var chart20 = new CanvasJS.Chart("engagementIGVice", {
        backgroundColor: "#f4d9c1",
        exportEnabled: true,
        animationEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "",
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
            color: "#d72f01",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2019, 0), y: 0.05 },
                { x: new Date(2019, 1), y: 0.08 },
                { x: new Date(2019, 2), y: 0.04 },
                { x: new Date(2019, 3), y: 0.02 },
                { x: new Date(2019, 4), y: 0.04 },
                { x: new Date(2019, 5), y: 0.16 },
                { x: new Date(2019, 6), y: 0.15 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 0 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }


                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart20.render();

    var chart21 = new CanvasJS.Chart("nuevosSeguidoreIGVice", {
        animationEnabled: true,
        backgroundColor: "#f4d9c1",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "",
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
            color: "#d72f01",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 60 },
                { x: new Date(2019, 1), y: 100 },
                { x: new Date(2019, 2), y: 201 },
                { x: new Date(2019, 3), y: 69 },
                { x: new Date(2019, 4), y: 29 },
                { x: new Date(2019, 5), y: 75 },
                { x: new Date(2019, 6), y: 124 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 0 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart21.render();



    var chart22 = new CanvasJS.Chart("nuevosMeGustaIGVice", {
        animationEnabled: true,
        backgroundColor: "#f4d9c1",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "",
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
            color: "#d72f01",
            name: "views",
            type: "stepLine",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 556 },
                { x: new Date(2019, 1), y: 1002 },
                { x: new Date(2019, 2), y: 545 },
                { x: new Date(2019, 3), y: 287 },
                { x: new Date(2019, 4), y: 540 },
                { x: new Date(2019, 5), y: 1915 },
                { x: new Date(2019, 6), y: 1860 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 0 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart22.render()



    var chart25 = new CanvasJS.Chart("publicacionesIGVice", {
        animationEnabled: true,
        backgroundColor: "#f4d9c1",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "",
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
            color: "#d72f01",
            name: "views",
            type: "stepLine",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 9 },
                { x: new Date(2019, 1), y: 15 },
                { x: new Date(2019, 2), y: 5 },
                { x: new Date(2019, 3), y: 3 },
                { x: new Date(2019, 4), y: 12 },
                { x: new Date(2019, 5), y: 21 },
                { x: new Date(2019, 6), y: 23 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 0 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart25.render();


    var chart23 = new CanvasJS.Chart("comentariosIGVice", {
        animationEnabled: true,
        backgroundColor: "#f4d9c1",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "",
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
            color: "#d72f01",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 13 },
                { x: new Date(2019, 1), y: 19 }, ,
                { x: new Date(2019, 2), y: 10 },
                { x: new Date(2019, 3), y: 9 },
                { x: new Date(2019, 4), y: 18 },
                { x: new Date(2019, 5), y: 56 },
                { x: new Date(2019, 6), y: 73 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 0 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart23.render();

    /* interacciones */
    var chart24 = new CanvasJS.Chart("interraccionesIGVice", {
        animationEnabled: true,
        backgroundColor: "#f4d9c1",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "",
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
            color: "#d72f01",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 556 },
                { x: new Date(2019, 1), y: 1021 },
                { x: new Date(2019, 2), y: 555 },
                { x: new Date(2019, 3), y: 296 },
                { x: new Date(2019, 4), y: 558 },
                { x: new Date(2019, 5), y: 1971 },
                { x: new Date(2019, 6), y: 1933 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 0 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }

            ]
        }]
    });
    chart24.render();

    //total de seguidores

    var chart25 = new CanvasJS.Chart("IGTotalSeguidores", {
        animationEnabled: true,
        exportEnabled: true,
        backgroundColor: "#f4d9c1",
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
            type: "column",
            color: "#d72f01",
            indexLabelFontColor: "#000",
            indexLabelPlacement: "outside",
            labelFontColor: "#000",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 12087 },
                { x: new Date(2019, 1), y: 12187 },
                { x: new Date(2019, 2), y: 12388 },
                { x: new Date(2019, 3), y: 12457 },
                { x: new Date(2019, 4), y: 12486 },
                { x: new Date(2019, 5), y: 12561 },
                { x: new Date(2019, 6), y: 12685 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 0 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }
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
                { x: new Date(2019, 0), y: 0.05 },
                { x: new Date(2019, 1), y: 0.08 },
                { x: new Date(2019, 2), y: 0.04 },
                { x: new Date(2019, 3), y: 0.02 },
                { x: new Date(2019, 4), y: 0.04 },
                { x: new Date(2019, 5), y: 0.16 },
                { x: new Date(2019, 6), y: 0.15 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 0 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart26.render();


};