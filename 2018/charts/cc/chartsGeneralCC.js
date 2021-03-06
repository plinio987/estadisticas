window.onload = function() {

    var chart11 = new CanvasJS.Chart("engagementGeneralCc", {
        colorset: "#3CB371",
        backgroundColor: "#6975a6",
        exportEnabled: true,
        animationEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Engagement general RRSS Cultuta Ciudadana",
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
            title: "% Engagement",
            titleFontColor: "fff",
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
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 1.03 },
                { x: new Date(2018, 1), y: 0.95 },
                { x: new Date(2018, 2), y: 1.08 },
                { x: new Date(2018, 3), y: 0.29 },
                { x: new Date(2018, 4), y: 1.09 },
                { x: new Date(2018, 5), y: 0.37 },
                { x: new Date(2018, 6), y: 0.70 },
                { x: new Date(2018, 7), y: 0.64 },
                { x: new Date(2018, 8), y: 0.57 },
                { x: new Date(2018, 9), y: 2.05 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart11.render();



    /*GENERO FANS GENERAL */

    var chart12 = new CanvasJS.Chart("alcanceGeneralCc", {
        backgroundColor: "#6975a6",
        exportEnabled: true,
        animationEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Alcance total RRSS Cultura Ciudadana",
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
            title: "No. Alcance",
            titleFontColor: "fff",
            suffix: "mn",
            gridColor: "#edb5bf",
            labelFontColor: "#fff",

        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            name: "views",
            type: "line",
            color: "#f05837",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 38102 },
                { x: new Date(2018, 1), y: 19888 },
                { x: new Date(2018, 2), y: 17393 },
                { x: new Date(2018, 3), y: 13643 },
                { x: new Date(2018, 4), y: 20733 },
                { x: new Date(2018, 5), y: 15368 },
                { x: new Date(2018, 6), y: 20467 },
                { x: new Date(2018, 7), y: 14996 },
                { x: new Date(2018, 8), y: 12289 },
                { x: new Date(2018, 9), y: 12838 },
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
                { x: new Date(2018, 0), y: 1.64 },
                { x: new Date(2018, 1), y: 1.17 },
                { x: new Date(2018, 2), y: 1.12 },
                { x: new Date(2018, 3), y: 0.35 },
                { x: new Date(2018, 4), y: 0.88 },
                { x: new Date(2018, 5), y: 0.38 },
                { x: new Date(2018, 6), y: 0.85 },
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
                { x: new Date(2018, 0), y: 1401 },
                { x: new Date(2018, 1), y: 1676 },
                { x: new Date(2018, 2), y: 1981 },
                { x: new Date(2018, 3), y: 2242 },
                { x: new Date(2018, 4), y: 2465 },
                { x: new Date(2018, 5), y: 2468 },
                { x: new Date(2018, 6), y: 2547 },
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