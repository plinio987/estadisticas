window.onload = function() {

    var chart1 = new CanvasJS.Chart("engagementGeneralBij", {
        colorset: "#3CB371",
        backgroundColor: "#6975a6",
        exportEnabled: true,
        animationEnabled: true,
        //theme: "light1",  "light1", "light2", "dark1", "dark2"
        title: {
            text: "Engagement general RRSS BIJ",
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
            title: "No. Engagement",
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
                { x: new Date(2018, 1), y: 1.83 },
                { x: new Date(2018, 2), y: 1.75 },
                { x: new Date(2018, 3), y: 3.90, indexLabel: "Concurso Botellas Literarias", indexLabelFontColor: "white", markerColor: "yellow", markerType: "triangle" },
                { x: new Date(2018, 4), y: 1.66 },
                { x: new Date(2018, 5), y: 2.25 },
                { x: new Date(2018, 6), y: 1.85 },
                { x: new Date(2018, 7), y: 1.04 },
                { x: new Date(2018, 8), y: 1.38 },
                { x: new Date(2018, 9), y: 1.34 },
                { x: new Date(2018, 10), y: 1.33 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart1.render();



    /*GENERO FANS GENERAL */

    var chart2 = new CanvasJS.Chart("alcanceGeneralBij", {
        colorset: "#3CB371",
        backgroundColor: "#6975a6",
        exportEnabled: true,
        animationEnabled: true,
        //theme: "light1",  "light1", "light2", "dark1", "dark2"
        title: {
            text: "Alcance total RRSS BIJ",
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
            color: "#f05837",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 1031288 },
                { x: new Date(2018, 1), y: 713282 },
                { x: new Date(2018, 2), y: 883531 },
                { x: new Date(2018, 3), y: 2092054, indexLabel: "Concurso Botellas Literarias", indexLabelFontColor: "white", markerColor: "yellow", markerType: "triangle" },
                { x: new Date(2018, 4), y: 6664812, indexLabel: "Fiesta del comic", indexLabelFontColor: "white", markerColor: "orange", markerType: "triangle" },
                { x: new Date(2018, 5), y: 1353317 },
                { x: new Date(2018, 6), y: 1287541 },
                { x: new Date(2018, 7), y: 1173641 },
                { x: new Date(2018, 8), y: 868461 },
                { x: new Date(2018, 9), y: 724337 },
                { x: new Date(2018, 10), y: 577956 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart2.render();



};