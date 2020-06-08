window.onload = function() {

    var chart26 = new CanvasJS.Chart("visualizacionesYtVice", {
        backgroundColor: "#f4f3f4",
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
            intervalType: "month",
            fontColor: "#222",
            labelFontColor: "#222",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Visualizaciones",
            fontColor: "#222",
            labelFontColor: "#222",
            titleFontColor: "#222",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#D50b53",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 2552 },
                { x: new Date(2019, 1), y: 2617 },
                { x: new Date(2019, 2), y: 4170 },
                { x: new Date(2019, 3), y: 11427 },
                { x: new Date(2019, 4), y: 4426 },
                { x: new Date(2019, 5), y: 3604 },
                { x: new Date(2019, 6), y: 4698 },
                { x: new Date(2019, 7), y: 4636 },
                { x: new Date(2019, 8), y: 5165 },
                { x: new Date(2019, 9), y: 6849 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart26.render();

    var chart11 = new CanvasJS.Chart("participacionYtVice", {
        animationEnabled: true,
        backgroundColor: "#f4f3f4",
        exportEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Porcentaje de participación",
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
            type: "area",
            color: "#D50b53",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "###0.00'%'",
            dataPoints: [
                { x: new Date(2019, 0), y: 2.48 },
                { x: new Date(2019, 1), y: 2.51 },
                { x: new Date(2019, 2), y: 3.87 },
                { x: new Date(2019, 3), y: 10.24 },
                { x: new Date(2019, 4), y: 3.98 },
                { x: new Date(2019, 5), y: 3.16 },
                { x: new Date(2019, 6), y: 3.96 },
                { x: new Date(2019, 7), y: 3.91 },
                { x: new Date(2019, 8), y: 4.28 },
                { x: new Date(2019, 9), y: 5.49 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }
            ]
        }]
    });

    chart11.render();

    /*nuevos seguidores*/

    var chart27 = new CanvasJS.Chart("nuevosSuscriptoresYtVice", {
        animationEnabled: true,
        backgroundColor: "#f4f3f4",
        exportEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
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
            title: "cantidad mensual"
        },
        data: [{
            type: "line",
            color: "#D50b53",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 14 },
                { x: new Date(2019, 1), y: 14 },
                { x: new Date(2019, 2), y: 36 },
                { x: new Date(2019, 3), y: 37 },
                { x: new Date(2019, 4), y: 27 },
                { x: new Date(2019, 5), y: 18 },
                { x: new Date(2019, 6), y: 29 },
                { x: new Date(2019, 7), y: 18 },
                { x: new Date(2019, 8), y: 34 },
                { x: new Date(2019, 9), y: 42 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }
            ]
        }]
    });

    chart27.render();

    var chart28 = new CanvasJS.Chart("VideosCompartidosYtVice", {
        animationEnabled: true,
        backgroundColor: "#f4f3f4",
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
            title: "Vídeos",
            labelFontColor: "#222",
            titleFontColor: "#222",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#D50b53",
            name: "views",
            type: "line",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 75 },
                { x: new Date(2019, 1), y: 56 },
                { x: new Date(2019, 2), y: 105 },
                { x: new Date(2019, 3), y: 108 },
                { x: new Date(2019, 4), y: 84 },
                { x: new Date(2019, 5), y: 172 },
                { x: new Date(2019, 6), y: 57 },
                { x: new Date(2019, 7), y: 25 },
                { x: new Date(2019, 8), y: 81 },
                { x: new Date(2019, 9), y: 62 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart28.render();


    var chart29 = new CanvasJS.Chart("meGustaYoutube", {
        backgroundColor: "#f4f3f4",
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
            intervalType: "month",
            labelFontColor: "#222",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Me gusta",
            titleFontColor: "#222",
            labelFontColor: "#222",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#D50b53",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 38 },
                { x: new Date(2019, 1), y: 25 },
                { x: new Date(2019, 2), y: 53 },
                { x: new Date(2019, 3), y: 55 },
                { x: new Date(2019, 4), y: 69 },
                { x: new Date(2019, 5), y: 36 },
                { x: new Date(2019, 6), y: 83 },
                { x: new Date(2019, 7), y: 47 },
                { x: new Date(2019, 8), y: 54 },
                { x: new Date(2019, 9), y: 86 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart29.render();


    var chart30 = new CanvasJS.Chart("comentariosYouTube", {
        animationEnabled: true,
        backgroundColor: "#f4f3f4",
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
            title: "Comentarios",
            labelFontColor: "#222",
            titleFontColor: "#222",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#D50b53",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 1 },
                { x: new Date(2019, 1), y: 0 },
                { x: new Date(2019, 2), y: 2 },
                { x: new Date(2019, 3), y: 3 },
                { x: new Date(2019, 4), y: 9 },
                { x: new Date(2019, 5), y: 3 },
                { x: new Date(2019, 6), y: 5 },
                { x: new Date(2019, 7), y: 3 },
                { x: new Date(2019, 8), y: 1 },
                { x: new Date(2019, 9), y: 5 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart30.render();

    var chart31 = new CanvasJS.Chart("VideosSubidosYtVice", {
        animationEnabled: true,
        backgroundColor: "#f4f3f4",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Videos subidos por mes",
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
            title: "Videos subidos",
            labelFontColor: "#222",
            titleFontColor: "#222",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#D50b53",
            name: "views",
            type: "line",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 5 },
                { x: new Date(2019, 1), y: 96 },
                { x: new Date(2019, 2), y: 24 },
                { x: new Date(2019, 3), y: 4 },
                { x: new Date(2019, 4), y: 9 },
                { x: new Date(2019, 5), y: 7 },
                { x: new Date(2019, 6), y: 11 },
                { x: new Date(2019, 7), y: 7 },
                { x: new Date(2019, 8), y: 7 },
                { x: new Date(2019, 9), y: 5 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart31.render();


    var chart32 = new CanvasJS.Chart("noMeGustaYtVice", {
        animationEnabled: true,
        backgroundColor: "#f4f3f4",
        exportEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "No me gusta el vídeo",
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
            color: "#D50b53",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 4 },
                { x: new Date(2019, 1), y: 2 },
                { x: new Date(2019, 2), y: 3 },
                { x: new Date(2019, 3), y: 3 },
                { x: new Date(2019, 4), y: 1 },
                { x: new Date(2019, 5), y: 1 },
                { x: new Date(2019, 6), y: 3 },
                { x: new Date(2019, 7), y: 1 },
                { x: new Date(2019, 8), y: 2 },
                { x: new Date(2019, 9), y: 5 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }
            ]
        }]
    });

    chart32.render();


    var chart33 = new CanvasJS.Chart("interaccionesYtVice", {
        animationEnabled: true,
        backgroundColor: "#f4f3f4",
        exportEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
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
            title: "cantidad mensual"
        },
        data: [{
            type: "area",
            color: "#D50b53",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 114 },
                { x: new Date(2019, 1), y: 81 },
                { x: new Date(2019, 2), y: 160 },
                { x: new Date(2019, 3), y: 166 },
                { x: new Date(2019, 4), y: 162 },
                { x: new Date(2019, 5), y: 211 },
                { x: new Date(2019, 6), y: 145 },
                { x: new Date(2019, 7), y: 75 },
                { x: new Date(2019, 8), y: 136 },
                { x: new Date(2019, 9), y: 153 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }
            ]
        }]
    });

    chart33.render();













};