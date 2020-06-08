window.onload = function() {



    var chart26 = new CanvasJS.Chart("visualizacionesYtCtc", {
        backgroundColor: "#FFCB80",
        exportEnabled: true,
        animationEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Visualizaciones Canal Youtube CTC",
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
            color: "#5C3921",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 89 },
                { x: new Date(2018, 1), y: 29 },
                { x: new Date(2018, 2), y: 0 },
                { x: new Date(2018, 3), y: 47 },
                { x: new Date(2018, 4), y: 40 },
                { x: new Date(2018, 5), y: 17 },
                { x: new Date(2018, 6), y: 0 },
                { x: new Date(2018, 7), y: 0 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart26.render();


    var chart27 = new CanvasJS.Chart("nuevosSuscriptoresYtCtc", {
        animationEnabled: true,
        backgroundColor: "#FFCB80",
        exportEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Nuevos Suscriptores",
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
                { x: new Date(2018, 0), y: 2 },
                { x: new Date(2018, 1), y: 0 },
                { x: new Date(2018, 2), y: 0 },
                { x: new Date(2018, 3), y: 1 },
                { x: new Date(2018, 4), y: 1 },
                { x: new Date(2018, 5), y: 0 },
                { x: new Date(2018, 6), y: 0 },
                { x: new Date(2018, 7), y: 0 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }
            ]
        }]
    });

    chart27.render();

    var chart28 = new CanvasJS.Chart("VideosCompartidosYtCtc", {
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
            title: "Compartidos",
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
                { x: new Date(2018, 0), y: 7 },
                { x: new Date(2018, 1), y: 0 },
                { x: new Date(2018, 2), y: 0 },
                { x: new Date(2018, 3), y: 0 },
                { x: new Date(2018, 4), y: 3 },
                { x: new Date(2018, 5), y: 1 },
                { x: new Date(2018, 6), y: 0 },
                { x: new Date(2018, 7), y: 0 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart28.render();


    var chart29 = new CanvasJS.Chart("MegustaYtCtc", {
        backgroundColor: "#B9B9AF",
        exportEnabled: true,
        animationEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Me gusta vídeos",
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
            labelFontColor: "#222",
            titleFontColor: "#222",
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
                { x: new Date(2018, 0), y: 2 },
                { x: new Date(2018, 1), y: 0 },
                { x: new Date(2018, 2), y: 0 },
                { x: new Date(2018, 3), y: 1 },
                { x: new Date(2018, 4), y: 0 },
                { x: new Date(2018, 5), y: 0 },
                { x: new Date(2018, 6), y: 0 },
                { x: new Date(2018, 7), y: 0 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart29.render();


    var chart30 = new CanvasJS.Chart("comentariosYtCtc", {
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
                { x: new Date(2018, 0), y: 0 },
                { x: new Date(2018, 1), y: 0 },
                { x: new Date(2018, 2), y: 0 },
                { x: new Date(2018, 3), y: 0 },
                { x: new Date(2018, 4), y: 0 },
                { x: new Date(2018, 5), y: 0 },
                { x: new Date(2018, 6), y: 0 },
                { x: new Date(2018, 7), y: 0 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart30.render();

    var chart31 = new CanvasJS.Chart("VideosSubidosYtCtc", {
        animationEnabled: true,
        backgroundColor: "#E4D0A7",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Vídeos subidos por mes",
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
            title: "Vídeos subidos",
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
                { x: new Date(2018, 0), y: 12 },
                { x: new Date(2018, 1), y: 0 },
                { x: new Date(2018, 2), y: 0 },
                { x: new Date(2018, 3), y: 1 },
                { x: new Date(2018, 4), y: 1 },
                { x: new Date(2018, 5), y: 0 },
                { x: new Date(2018, 6), y: 0 },
                { x: new Date(2018, 7), y: 0 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart31.render();


    var chart32 = new CanvasJS.Chart("noMeGustaYtCtc", {
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
            type: "bar",
            color: "#264035",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 0 },
                { x: new Date(2018, 1), y: 1 },
                { x: new Date(2018, 2), y: 0 },
                { x: new Date(2018, 3), y: 0 },
                { x: new Date(2018, 4), y: 0 },
                { x: new Date(2018, 5), y: 0 },
                { x: new Date(2018, 6), y: 0 },
                { x: new Date(2018, 7), y: 0 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }
            ]
        }]
    });

    chart32.render();

    // ***FUENTES DE TRAFICO**** //

    var chart33 = new CanvasJS.Chart("fuentesTrafico", {
        animationEnabled: true,
        title: {
            text: "",

        },
        data: [{
            type: "doughnut",
            startAngle: 60,
            //innerRadius: 60,
            indexLabelFontSize: 13,
            indexLabel: "{label} - #percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: [
                { y: 20.00, label: "Páginas del canal" },
                { y: 8.30, label: "Reproductores insertados" },
                { y: 7.70, label: "Búsqueda de YouTube" }

            ]
        }]
    });
    chart33.render();

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
                { y: 100.00, label: "Página de visualización de YouTube" }



            ]
        }]
    });
    chart34.render();










};