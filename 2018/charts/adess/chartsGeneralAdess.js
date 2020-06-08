window.onload = function() {

    var chart11 = new CanvasJS.Chart("engagementGeneralAdess", {
        colorset: "#3CB371",
        backgroundColor: "#6975a6",
        exportEnabled: true,
        animationEnabled: true,
        animationDuration: 4000,
        //theme: "light1", "light1", "light2", "dark1", "dark2"
        title: {
            text: "Engagement general RRSS Adess",
            fontColor: "#fff",
            fontSize: 20,
            fontFamily: "tahoma",
            fontStyle: "italic"
        },


        axisX: {
            interval: 1,
            intervalType: "month",
            labelFontColor: "#fff",
            valueFormatString: "MMM",

        },
        axisY: {
            title: "No. Engagement",
            titleFontColor: "#fff",
            labelFontColor: "#fff",
            fontFamily: "tahoma",
            fontStyle: "italic",
            suffix: "mn",
            gridColor: "#edb5bf"
        },
        data: [{
            indexLabelFontColor: "rgba(11, 84, 157, 0.06)",
            color: "#f05837",
            name: "views",
            type: "splineArea",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2018, 0), y: 2.25 },
                { x: new Date(2018, 1), y: 2.03 },
                { x: new Date(2018, 2), y: 1.97 },
                { x: new Date(2018, 3), y: 1.03 },
                { x: new Date(2018, 4), y: 1.74 },
                { x: new Date(2018, 5), y: 1.10 },
                { x: new Date(2018, 6), y: 2.06 },
                { x: new Date(2018, 7), y: 1.13 },
                { x: new Date(2018, 8), y: 1.08 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart11.render();



    /*GENERO FANS GENERAL */

    var chart12 = new CanvasJS.Chart("alcanceGeneralAdess", {
        colorset: "#6975a6",
        exportEnabled: true,
        backgroundColor: "#6975a6",
        animationEnabled: true,
        animationDuration: 4000,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: " Alcance total mensual RRSS Adess",
            fontColor: "#fff",
            fontSize: 20,
            fontFamily: "tahoma",
            fontStyle: "italic"
        },

        axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM",
            fontColor: "#fff",
            labelFontColor: "#fff",



        },
        axisY: {
            title: "No. alcance",
            titleFontColor: "#fff",
            suffix: "mn",
            gridColor: "#edb5bf",
            labelFontColor: "#fff",
        },
        data: [{
            indexLabelFontColor: "#000",
            name: "views",
            type: "splineArea",
            color: "#f05837",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 60098 },
                { x: new Date(2018, 1), y: 67362 },
                { x: new Date(2018, 2), y: 57834 },
                { x: new Date(2018, 3), y: 117343 },
                { x: new Date(2018, 4), y: 62569 },
                { x: new Date(2018, 5), y: 31829 },
                { x: new Date(2018, 6), y: 47256 },
                { x: new Date(2018, 7), y: 144574 },
                { x: new Date(2018, 8), y: 119600 },
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
                { x: new Date(2018, 0), y: 0.74 },
                { x: new Date(2018, 1), y: 0.72 },
                { x: new Date(2018, 2), y: 0.40 },
                { x: new Date(2018, 3), y: 0.30 },
                { x: new Date(2018, 4), y: 0.32 },
                { x: new Date(2018, 5), y: 0.14 },
                { x: new Date(2018, 6), y: 0.43 },
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
                { x: new Date(2018, 0), y: 1716 },
                { x: new Date(2018, 1), y: 1813 },
                { x: new Date(2018, 2), y: 1896 },
                { x: new Date(2018, 3), y: 1990 },
                { x: new Date(2018, 4), y: 2114 },
                { x: new Date(2018, 5), y: 2182 },
                { x: new Date(2018, 6), y: 2233 },
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