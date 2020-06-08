window.onload = function() {

    var chart26 = new CanvasJS.Chart("visualizacionesYtVice", {
        backgroundColor: "#FFCB80",
        exportEnabled: true,
        animationEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Visualizaciones Canal Youtube Vicepresidencia",
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
            color: "#5C3921",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 2403 },
                { x: new Date(2018, 1), y: 3092 },
                { x: new Date(2018, 2), y: 5675 },
                { x: new Date(2018, 3), y: 4822 },
                { x: new Date(2018, 4), y: 3883 },
                { x: new Date(2018, 5), y: 3850 },
                { x: new Date(2018, 6), y: 2963 },
                { x: new Date(2018, 7), y: 3567 },
                { x: new Date(2018, 8), y: 3245 },
                { x: new Date(2018, 9), y: 3975 },
                { x: new Date(2018, 10), y: 3741 },
                { x: new Date(2018, 11), y: 3357 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart26.render();

    /*nuevos seguidores*/

    var chart27 = new CanvasJS.Chart("nuevosSuscriptoresYtVice", {
        animationEnabled: true,
        backgroundColor: "#FFCB80",
        exportEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Nuevos suscriptores",
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
            type: "column",
            color: "#5C3921",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 27 },
                { x: new Date(2018, 1), y: 29 },
                { x: new Date(2018, 2), y: 26 },
                { x: new Date(2018, 3), y: 36 },
                { x: new Date(2018, 4), y: 17 },
                { x: new Date(2018, 5), y: 24 },
                { x: new Date(2018, 6), y: 20 },
                { x: new Date(2018, 7), y: 30 },
                { x: new Date(2018, 8), y: 21 },
                { x: new Date(2018, 9), y: 29 },
                { x: new Date(2018, 10), y: 31 },
                { x: new Date(2018, 11), y: 33 }
            ]
        }]
    });

    chart27.render();

    var chart28 = new CanvasJS.Chart("VideosCompartidosYtVice", {
        animationEnabled: true,
        backgroundColor: "#B9B9AF",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Vídeos compartidos",
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
            color: "#EA1F49",
            name: "views",
            type: "line",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 54 },
                { x: new Date(2018, 1), y: 44 },
                { x: new Date(2018, 2), y: 78 },
                { x: new Date(2018, 3), y: 67 },
                { x: new Date(2018, 4), y: 36 },
                { x: new Date(2018, 5), y: 44 },
                { x: new Date(2018, 6), y: 55 },
                { x: new Date(2018, 7), y: 94 },
                { x: new Date(2018, 8), y: 49 },
                { x: new Date(2018, 9), y: 64 },
                { x: new Date(2018, 10), y: 78 },
                { x: new Date(2018, 11), y: 125 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart28.render();


    var chart29 = new CanvasJS.Chart("MegustaYtVice", {
        backgroundColor: "#B9B9AF",
        exportEnabled: true,
        animationEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Me gusta el vídeo",
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
            color: "#EA1F49",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 16 },
                { x: new Date(2018, 1), y: 36 },
                { x: new Date(2018, 2), y: 49 },
                { x: new Date(2018, 3), y: 62 },
                { x: new Date(2018, 4), y: 49 },
                { x: new Date(2018, 5), y: 44 },
                { x: new Date(2018, 6), y: 30 },
                { x: new Date(2018, 7), y: 61 },
                { x: new Date(2018, 8), y: 51 },
                { x: new Date(2018, 9), y: 34 },
                { x: new Date(2018, 10), y: 36 },
                { x: new Date(2018, 11), y: 106 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart29.render();


    var chart30 = new CanvasJS.Chart("comentariosYtVice", {
        animationEnabled: true,
        backgroundColor: "#B9B9AF",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Comentarios en vídeos",
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
            color: "#EA1F49",
            name: "views",
            type: "line",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 3 },
                { x: new Date(2018, 1), y: 2 },
                { x: new Date(2018, 2), y: 2 },
                { x: new Date(2018, 3), y: 5 },
                { x: new Date(2018, 4), y: 6 },
                { x: new Date(2018, 5), y: 1 },
                { x: new Date(2018, 6), y: 3 },
                { x: new Date(2018, 7), y: 3 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 2 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 7 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart30.render();

    var chart31 = new CanvasJS.Chart("VideosSubidosYtVice", {
        animationEnabled: true,
        backgroundColor: "#E4D0A7",
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
            color: "#264035",
            name: "views",
            type: "line",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 9 },
                { x: new Date(2018, 1), y: 24 },
                { x: new Date(2018, 2), y: 35 },
                { x: new Date(2018, 3), y: 14 },
                { x: new Date(2018, 4), y: 15 },
                { x: new Date(2018, 5), y: 34 },
                { x: new Date(2018, 6), y: 54 },
                { x: new Date(2018, 7), y: 30 },
                { x: new Date(2018, 8), y: 12 },
                { x: new Date(2018, 9), y: 46 },
                { x: new Date(2018, 10), y: 10 },
                { x: new Date(2018, 11), y: 28 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart31.render();


    var chart32 = new CanvasJS.Chart("noMeGustaYtVice", {
        animationEnabled: true,
        backgroundColor: "#E4D0A7",
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
            color: "#264035",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 2 },
                { x: new Date(2018, 1), y: 1 },
                { x: new Date(2018, 2), y: 5 },
                { x: new Date(2018, 3), y: 4 },
                { x: new Date(2018, 4), y: 1 },
                { x: new Date(2018, 5), y: 1 },
                { x: new Date(2018, 6), y: 1 },
                { x: new Date(2018, 7), y: 5 },
                { x: new Date(2018, 8), y: 3 },
                { x: new Date(2018, 9), y: 5 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 3 }
            ]
        }]
    });

    chart32.render();


    var chart34 = new CanvasJS.Chart("ubicacionReproducciones", {
        animationEnabled: true,
        title: {
            text: "",

        },
        data: [{
            type: "doughnut",
            //startAngle: 60,
            innerRadius: 60,
            indexLabelFontSize: 13,
            indexLabel: "{label} - #percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: [
                { y: 95.00, label: "Página de visualización de YouTube" },
                { y: 4.2, label: "Inserciones en aplicaciones y sitios web externos" },
                { y: 0.3, label: "Otras páginas de YouTube" },
                { y: 0.5, label: "Página del canal de YouTube" }

            ]
        }]
    });
    chart34.render();














};