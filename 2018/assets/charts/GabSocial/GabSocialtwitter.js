/*   *****************************************
            CHARTS TWITTER
  **************************************** */


window.onload = function() {

    //ENGAGEMENT

    var chart1 = new CanvasJS.Chart("engagementTwitterVice", {
        backgroundColor: "#B8E4F3",
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
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Engagement mensual",
            titleFontColor: "#000",
            suffix: "%"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#51A2D9",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2019, 0), y: 0.99 },
                { x: new Date(2019, 1), y: 1.59 },
                { x: new Date(2019, 2), y: 1.52 },
                { x: new Date(2019, 3), y: 1.64 },
                { x: new Date(2019, 4), y: 1.52 },
                { x: new Date(2019, 5), y: 1.31 },
                { x: new Date(2019, 6), y: 1.32 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 0 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart1.render();

    //IMPRESIONES

    var chart2 = new CanvasJS.Chart("twitterImpresionesVice", {
        animationEnabled: true,
        backgroundColor: "#B8E4F3",
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        exportEnabled: true,
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
            labelFontColor: "#000",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Alcance mensual",
            titleFontColor: "#000",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#51A2D9",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 18200 },
                { x: new Date(2019, 1), y: 32800 },
                { x: new Date(2019, 2), y: 58500 },
                { x: new Date(2019, 3), y: 28200 },
                { x: new Date(2019, 4), y: 46900 },
                { x: new Date(2019, 5), y: 57700 },
                { x: new Date(2019, 6), y: 57900 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 0 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart2.render();

    //NUEVOS SEGUIDORES


    var chart13 = new CanvasJS.Chart("nuevosSeguidoresVice", {
        animationEnabled: true,
        backgroundColor: "#B8E4F3",
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
            labelFontColor: "#000",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Seguidores",
            labelFontColor: "#000",
            titleFontColor: "#000",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#51A2D9",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: -1 },
                { x: new Date(2019, 1), y: 22 },
                { x: new Date(2019, 2), y: 27 },
                { x: new Date(2019, 3), y: 9 },
                { x: new Date(2019, 4), y: 27 },
                { x: new Date(2019, 5), y: 27 },
                { x: new Date(2019, 6), y: 18 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 0 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart13.render();



    var chart15 = new CanvasJS.Chart("interaccionesTwitterVice", {
        animationEnabled: true,
        backgroundColor: "#B8E4F3",
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
            title: "No. interacciones",
            titleFontColor: "#222",
            labelFontColor: "#222",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#51A2D9",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 181 },
                { x: new Date(2019, 1), y: 521 },
                { x: new Date(2019, 2), y: 890 },
                { x: new Date(2019, 3), y: 462 },
                { x: new Date(2019, 4), y: 714 },
                { x: new Date(2019, 5), y: 754 },
                { x: new Date(2019, 6), y: 763 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 0 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart15.render();

    var chart16 = new CanvasJS.Chart("meGustaTwitterVice", {
        animationEnabled: true,
        backgroundColor: "#B8E4F3",
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
            title: "Me gusta",
            titleFontColor: "#222",
            labelFontColor: "#222",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#51A2D9",
            name: "views",
            type: "line",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 107 },
                { x: new Date(2019, 1), y: 312 },
                { x: new Date(2019, 2), y: 509 },
                { x: new Date(2019, 3), y: 262 },
                { x: new Date(2019, 4), y: 392 },
                { x: new Date(2019, 5), y: 455 },
                { x: new Date(2019, 6), y: 485 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 0 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart16.render();

    var chart18 = new CanvasJS.Chart("retuitsVice", {
        animationEnabled: true,
        backgroundColor: "#B8E4F3",
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
            title: "Retuits",
            labelFontColor: "#222",
            titleFontColor: "#222",
            suffix: "mn"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#51A2D9",
            name: "views",
            type: "line",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 40 },
                { x: new Date(2019, 1), y: 128 },
                { x: new Date(2019, 2), y: 232 },
                { x: new Date(2019, 3), y: 122 },
                { x: new Date(2019, 4), y: 156 },
                { x: new Date(2019, 5), y: 153 },
                { x: new Date(2019, 6), y: 133 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 0 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart18.render();

    var chart17 = new CanvasJS.Chart("respuestaTwitterVice", {
        animationEnabled: true,
        exportEnabled: true,
        backgroundColor: "#B8E4F3",
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            text: ""
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "cantidad mensual"
        },
        data: [{
            type: "stepLine",
            color: "#51A2D9",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 6 },
                { x: new Date(2019, 1), y: 44 },
                { x: new Date(2019, 2), y: 64 },
                { x: new Date(2019, 3), y: 43 },
                { x: new Date(2019, 4), y: 59 },
                { x: new Date(2019, 5), y: 65 },
                { x: new Date(2019, 6), y: 69 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 0 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }
            ]
        }]
    });

    chart17.render();





    var chart19 = new CanvasJS.Chart("clicsTwitterVice", {
        animationEnabled: true,
        exportEnabled: true,
        backgroundColor: "#B8E4F3",
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            text: ""
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "cantidad mensual"
        },
        data: [{
            type: "line",
            xValueFormatString: "MMM, YYYY",
            color: "#51A2D9",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 28 },
                { x: new Date(2019, 1), y: 37 },
                { x: new Date(2019, 2), y: 85 },
                { x: new Date(2019, 3), y: 35 },
                { x: new Date(2019, 4), y: 107 },
                { x: new Date(2019, 5), y: 81 },
                { x: new Date(2019, 6), y: 76 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 0 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }
            ]
        }]
    });

    chart19.render();

    var chart20 = new CanvasJS.Chart("VisitasPerfilTwitterVice", {
        animationEnabled: true,
        exportEnabled: true,
        backgroundColor: "#B8E4F3",
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            text: ""
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "cantidad mensual"
        },
        data: [{
            type: "stepLine",
            color: "#51A2D9",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 265 },
                { x: new Date(2019, 1), y: 711 },
                { x: new Date(2019, 2), y: 1065 },
                { x: new Date(2019, 3), y: 684 },
                { x: new Date(2019, 4), y: 964 },
                { x: new Date(2019, 5), y: 852 },
                { x: new Date(2019, 6), y: 827 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 0 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }
            ]
        }]
    });

    chart20.render();

    var chart21 = new CanvasJS.Chart("tweetsRealizadosVice", {
        animationEnabled: true,
        backgroundColor: "#B8E4F3",
        exportEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            text: ""
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "cantidad mensual"
        },
        data: [{
            type: "stepLine",
            color: "#51A2D9",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 25 },
                { x: new Date(2019, 1), y: 65 },
                { x: new Date(2019, 2), y: 106 },
                { x: new Date(2019, 3), y: 76 },
                { x: new Date(2019, 4), y: 89 },
                { x: new Date(2019, 5), y: 96 },
                { x: new Date(2019, 6), y: 98 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 0 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }
            ]
        }]
    });

    chart21.render();


    var chart22 = new CanvasJS.Chart("mencionesTweetsVice", {
        animationEnabled: true,
        backgroundColor: "#B8E4F3",
        exportEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            text: ""
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "cantidad mensual"
        },
        data: [{
            type: "area",
            color: "#51A2D9",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 25 },
                { x: new Date(2019, 1), y: 50 },
                { x: new Date(2019, 2), y: 79 },
                { x: new Date(2019, 3), y: 35 },
                { x: new Date(2019, 4), y: 47 },
                { x: new Date(2019, 5), y: 45 },
                { x: new Date(2019, 6), y: 18 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 0 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }
            ]
        }]
    });

    chart22.render();




    /*PORCENTAJE DE PARTICIPACION ADESS*/


    var chart24 = new CanvasJS.Chart("twitterPorcentajeParticipacion", {
        animationEnabled: true,
        backgroundColor: "#B8E4F3",
        //theme: "light1", "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        title: {
            text: "",
            fontColor: "##222",
            fontFamily: "tahoma",
            fontStyle: "italic"
        },
        axisX: {
            interval: 1,
            intervalType: "month",
            labelFontColor: "##222",
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Porcentaje",
            titleFontColor: "#222",
            suffix: "mn",
            labelFontColor: "##222",
            gridColor: "#edb5bf"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#51A2D9",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2019, 0), y: 0.79 },
                { x: new Date(2019, 1), y: 2.08 },
                { x: new Date(2019, 2), y: 3.20 },
                { x: new Date(2019, 3), y: 1.60 },
                { x: new Date(2019, 4), y: 2.26 },
                { x: new Date(2019, 5), y: 2.20 },
                { x: new Date(2019, 6), y: 2.11 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 0 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart24.render();



    function addSymbols(e) {
        var suffixes = ["", "K", "M", "B"];
        var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);

        if (order > suffixes.length - 1)
            order = suffixes.length - 1;

        var suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }

    function toggleDataSeries(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }

















};