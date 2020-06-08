window.onload = function() {



    var chart26 = new CanvasJS.Chart("visualizacionesYtBij", {
        backgroundColor: "#FFCB80",
        exportEnabled: true,
        animationEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Visualizaciones Canal Youtube BIJ",
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
            titleFontColor: "#222",
            labelFontColor: "#222",
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
                { x: new Date(2018, 0), y: 329 },
                { x: new Date(2018, 1), y: 463 },
                { x: new Date(2018, 2), y: 354 },
                { x: new Date(2018, 3), y: 515 },
                { x: new Date(2018, 4), y: 239 },
                { x: new Date(2018, 5), y: 185 },
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


    var chart27 = new CanvasJS.Chart("nuevosSuscriptoresYtBij", {
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
                { x: new Date(2018, 0), y: 3 },
                { x: new Date(2018, 1), y: 2 },
                { x: new Date(2018, 2), y: -1 },
                { x: new Date(2018, 3), y: 8 },
                { x: new Date(2018, 4), y: -1 },
                { x: new Date(2018, 5), y: 4 },
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

    var chart28 = new CanvasJS.Chart("VideosCompartidosYtBij", {
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
                { x: new Date(2018, 0), y: 3 },
                { x: new Date(2018, 1), y: 3 },
                { x: new Date(2018, 2), y: 7 },
                { x: new Date(2018, 3), y: 11 },
                { x: new Date(2018, 4), y: 1 },
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


    var chart29 = new CanvasJS.Chart("MegustaYtBij", {
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
                { x: new Date(2018, 1), y: 2 },
                { x: new Date(2018, 2), y: 0 },
                { x: new Date(2018, 3), y: 14 },
                { x: new Date(2018, 4), y: 2 },
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


    var chart30 = new CanvasJS.Chart("comentariosYtBij", {
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
            titleFontColor: "#222",
            labelFontColor: "#222",
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
    chart30.render();

    var chart31 = new CanvasJS.Chart("VideosSubidosYtBij", {
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
                { x: new Date(2018, 0), y: 0 },
                { x: new Date(2018, 1), y: 0 },
                { x: new Date(2018, 2), y: 1 },
                { x: new Date(2018, 3), y: 1 },
                { x: new Date(2018, 4), y: 9 },
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


    var chart32 = new CanvasJS.Chart("noMeGustaYtBij", {
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
                { y: 31.00, label: "Vídeos sugeridos" },
                { y: 25.00, label: "Búsqueda de YouTube" },
                { y: 14.00, label: "Funciones de exploración" },
                { y: 30.00, label: "Otros" }

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
                { y: 92.00, label: "Página de visualización de YouTube" },
                { y: 5.2, label: "Páginas del canal" },
                { y: 3.8, label: "Inserciones en aplicaciones y sitios web externos" }


            ]
        }]
    });
    chart34.render();











};