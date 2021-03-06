window.onload = function() {

    var chart26 = new CanvasJS.Chart("visualizacionesYtProsoli", {
        backgroundColor: "#FFCB80",
        exportEnabled: true,
        animationEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Visualizaciones Canal Youtube Prosoli",
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
            title: "Visualizaciones",
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
                { x: new Date(2018, 0), y: 1794 },
                { x: new Date(2018, 1), y: 3108 },
                { x: new Date(2018, 2), y: 2230 },
                { x: new Date(2018, 3), y: 1687 },
                { x: new Date(2018, 4), y: 1568 },
                { x: new Date(2018, 5), y: 1400 },
                { x: new Date(2018, 6), y: 1122 },
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


    var chart27 = new CanvasJS.Chart("nuevosSuscriptoresYtProsoli", {
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
                { x: new Date(2018, 0), y: 12 },
                { x: new Date(2018, 1), y: 16 },
                { x: new Date(2018, 2), y: 16 },
                { x: new Date(2018, 3), y: 12 },
                { x: new Date(2018, 4), y: 19 },
                { x: new Date(2018, 5), y: 11 },
                { x: new Date(2018, 6), y: 14 },
                { x: new Date(2018, 7), y: 0 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }
            ]
        }]
    });

    chart27.render();

    var chart28 = new CanvasJS.Chart("VideosCompartidosYtProsoli", {
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
                { x: new Date(2018, 0), y: 25 },
                { x: new Date(2018, 1), y: 52 },
                { x: new Date(2018, 2), y: 23 },
                { x: new Date(2018, 3), y: 15 },
                { x: new Date(2018, 4), y: 23 },
                { x: new Date(2018, 5), y: 29 },
                { x: new Date(2018, 6), y: 15 },
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


    var chart29 = new CanvasJS.Chart("MegustaYtProsoli", {
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
                { x: new Date(2018, 0), y: 31 },
                { x: new Date(2018, 1), y: 38 },
                { x: new Date(2018, 2), y: 30 },
                { x: new Date(2018, 3), y: 21 },
                { x: new Date(2018, 4), y: 16 },
                { x: new Date(2018, 5), y: 20 },
                { x: new Date(2018, 6), y: 21 },
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


    var chart30 = new CanvasJS.Chart("comentariosYtProsoli", {
        animationEnabled: true,
        backgroundColor: "#B9B9AF",
        exportEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Comentarios en videos",
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
            title: "Comentariosl",
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
                { x: new Date(2018, 1), y: 3 },
                { x: new Date(2018, 2), y: 1 },
                { x: new Date(2018, 3), y: 6 },
                { x: new Date(2018, 4), y: 2 },
                { x: new Date(2018, 5), y: 2 },
                { x: new Date(2018, 6), y: 1 },
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

    var chart31 = new CanvasJS.Chart("VideosSubidosYtProsoli", {
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
                { x: new Date(2018, 0), y: 13 },
                { x: new Date(2018, 1), y: 8 },
                { x: new Date(2018, 2), y: 13 },
                { x: new Date(2018, 3), y: 7 },
                { x: new Date(2018, 4), y: 7 },
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


    var chart32 = new CanvasJS.Chart("noMeGustaYtProsoli", {
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
                { x: new Date(2018, 2), y: 2 },
                { x: new Date(2018, 3), y: 0 },
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
                { y: 50.00, label: "Búquedas en YouTube" },
                { y: 20.00, label: "Vídeos sugeridos" },
                { y: 7.00, label: "Otras páginas de YouTube" },
                { y: 23.00, label: "Reproductores insertados" }

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
                { y: 96.00, label: "Página vizulización YouTube" },
                { y: 4.00, label: "Inserciones aplicaciones y Sitios web externos" }



            ]
        }]
    });
    chart34.render();


    //total de seguidores

    var chart35 = new CanvasJS.Chart("youTubeTotalsuscriptores", {
        animationEnabled: true,
        exportEnabled: true,
        backgroundColor: "#f3d4a0",
        theme: "light1", //"light1", "light2", "dark1", "dark2", light2
        title: {
            text: "Total de suscriptores",
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
            title: "Suscriptores",
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
                { x: new Date(2018, 0), y: 516 },
                { x: new Date(2018, 1), y: 532 },
                { x: new Date(2018, 2), y: 548 },
                { x: new Date(2018, 3), y: 560 },
                { x: new Date(2018, 4), y: 579 },
                { x: new Date(2018, 5), y: 590 },
                { x: new Date(2018, 6), y: 604 },
                { x: new Date(2018, 7), y: 0 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }
            ]
        }]
    });

    chart35.render();



    /*PORCENTAJE DE PARTICIPACION ADESS*/


    var chart36 = new CanvasJS.Chart("youTubePorcentajeParticipacion", {
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
                { x: new Date(2018, 0), y: 0.11 },
                { x: new Date(2018, 1), y: 0.17 },
                { x: new Date(2018, 2), y: 0.10 },
                { x: new Date(2018, 3), y: 0.07 },
                { x: new Date(2018, 4), y: 0.07 },
                { x: new Date(2018, 5), y: 0.09 },
                { x: new Date(2018, 6), y: 0.06 },
                { x: new Date(2018, 7), y: 0 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart36.render();






};