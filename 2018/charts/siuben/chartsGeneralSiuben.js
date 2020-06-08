window.onload = function() {

    var chart11 = new CanvasJS.Chart("engagementGeneralSiuben", {
        colorset: "#3CB371",
        backgroundColor: "#6975a6",
        exportEnabled: true,
        animationEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Engagement general RRSS Siuben",
            fontColor: "#fff",
            fontSize: 20,
            fontFamily: "tahoma",
            fontStyle: "italic"
        },


        axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM",
            labelFontColor: "#fff",

        },
        axisY: {
            title: "No. engagement ",
            titleFontColor: "#fff",
            suffix: "mn",
            labelFontColor: "#fff",
            gridColor: "#edb5bf"
        },
        data: [{
            indexLabelFontColor: "rgba(11, 84, 157, 0.06)",
            color: "#f05837",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2018, 0), y: 1.64 },
                { x: new Date(2018, 1), y: 1.13 },
                { x: new Date(2018, 2), y: 1.20 },
                { x: new Date(2018, 3), y: 1.17 },
                { x: new Date(2018, 4), y: 1.14 },
                { x: new Date(2018, 5), y: 0.89 },
                { x: new Date(2018, 6), y: 1.06 },
                { x: new Date(2018, 7), y: 1.04 },
                { x: new Date(2018, 8), y: 1.87 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart11.render();



    /*GENERO FANS GENERAL */

    var chart12 = new CanvasJS.Chart("alcanceGeneralSiuben", {
        colorset: "#3CB371",
        backgroundColor: "#6975a6",
        exportEnabled: true,
        animationEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Alcance total Siuben",
            fontColor: "#fff",
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
            title: "No. alcance",
            titleFontColor: "#fff",
            suffix: "mn",
            labelFontColor: "#fff",
            gridColor: "#edb5bf"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            name: "views",
            type: "line",
            xValueFormatString: "MMM, YYYY",
            color: "#f05837",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 40200 },
                { x: new Date(2018, 1), y: 32400 },
                { x: new Date(2018, 2), y: 13200 },
                { x: new Date(2018, 3), y: 11100 },
                { x: new Date(2018, 4), y: 14400 },
                { x: new Date(2018, 5), y: 9100 },
                { x: new Date(2018, 6), y: 14300 },
                { x: new Date(2018, 7), y: 10800 },
                { x: new Date(2018, 8), y: 17000 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart12.render();

    /*PORCENTAJE DE PARTICIPACION*/


    var chart13 = new CanvasJS.Chart("generalPorcentajeParticipacion", {
        animationEnabled: true,
        colorset: "#3CB371",
        backgroundColor: "#583e2e",
        //theme: "light1", "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        title: {
            text: "Porcentaje total de participación",
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
            titleFontColor: "#fff",
            suffix: "%",
            labelFontColor: "#fff",
            gridColor: "#edb5bf"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            color: "#bf988f",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2018, 0), y: 0.28 },
                { x: new Date(2018, 1), y: 0.21 },
                { x: new Date(2018, 2), y: 0.15 },
                { x: new Date(2018, 3), y: 0.08 },
                { x: new Date(2018, 4), y: 0.17 },
                { x: new Date(2018, 5), y: 0.07 },
                { x: new Date(2018, 6), y: 0.12 },
                { x: new Date(2018, 7), y: 0 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart13.render();

    /*GENERAL TOTAL SEGUIDORES*/

    var chart14 = new CanvasJS.Chart("generalTotalSeguidores", {
        animationEnabled: true,
        exportEnabled: true,
        colorset: "#3CB371",
        backgroundColor: "#583e2e",
        theme: "light1", //"light1", "light2", "dark1", "dark2", light2
        title: {
            text: "Total general seguidores",
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
            title: "Seguidores",
            titleFontColor: "#fff",
            suffix: "mn",
            labelFontColor: "#fff",
            gridColor: "#edb5bf"

        },
        data: [{
            type: "bar",
            indexLabelFontColor: "#fff",
            indexLabelPlacement: "outside",
            color: "#bf988f",
            labelFontColor: "#fff",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 7478 },
                { x: new Date(2018, 1), y: 7563 },
                { x: new Date(2018, 2), y: 7599 },
                { x: new Date(2018, 3), y: 7676 },
                { x: new Date(2018, 4), y: 7811 },
                { x: new Date(2018, 5), y: 7935 },
                { x: new Date(2018, 6), y: 7987 },
                { x: new Date(2018, 7), y: 0 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }
            ]
        }]
    });

    chart14.render();

};