window.onload = function() {

    var chart11 = new CanvasJS.Chart("engagementGeneralOpsd", {
        colorset: "#3CB371",
        backgroundColor: "#6975a6",
        exportEnabled: true,
        animationEnabled: true,
        //theme: "light1",  "light1", "light2", "dark1", "dark2"
        title: {
            text: "Engagement general RRSS OPSD",
            fontColor: "#fff",
            fontSize: 20,
            fontFamily: "tahoma",
            fontStyle: "italic"
        },


        axisX: {
            interval: 1,
            intervalType: "month",
            valueFormatString: "MMM",
            gridColor: "#edb5bf",
            labelFontColor: "#fff",

        },
        axisY: {
            title: "Engagement mensual",
            titleFontColor: "#4F81BC",
            suffix: "mn",
            gridColor: "#edb5bf",
            labelFontColor: "#fff",
        },
        data: [{
            indexLabelFontColor: "rgba(11, 84, 157, 0.06)",
            color: "#f05837",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2018, 0), y: 1.68 },
                { x: new Date(2018, 1), y: 1.88 },
                { x: new Date(2018, 2), y: 1.52 },
                { x: new Date(2018, 3), y: 0.93 },
                { x: new Date(2018, 4), y: 2.22 },
                { x: new Date(2018, 5), y: 1.00 },
                { x: new Date(2018, 6), y: 1.41 },
                { x: new Date(2018, 7), y: 1.39 },
                { x: new Date(2018, 8), y: 1.31 },
                { x: new Date(2018, 9), y: 2.02 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart11.render();



    /*GENERO FANS GENERAL */

    var chart12 = new CanvasJS.Chart("alcanceGeneralOpsd", {
        colorset: "#3CB371",
        backgroundColor: "#6975a6",
        exportEnabled: true,
        animationEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Alcance Total RRSS OPSD",
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
            titleFontColor: "#4F81BC",
            suffix: "mn",
            labelFontColor: "#fff",
            gridColor: "#0288d1"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            name: "views",
            type: "line",
            color: "#f05837",
            labelFontColor: "#fff",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 49904 },
                { x: new Date(2018, 1), y: 35231 },
                { x: new Date(2018, 2), y: 987017, indexLabel: "Publicidad pagada", indexLabelFontColor: "white", markerColor: "yellow", markerType: "triangle" },
                { x: new Date(2018, 3), y: 769557, indexLabel: "Publicidad pagada", indexLabelFontColor: "white", markerColor: "yellow", markerType: "triangle" },
                { x: new Date(2018, 4), y: 55539 },
                { x: new Date(2018, 5), y: 106783 },
                { x: new Date(2018, 6), y: 85465 },
                { x: new Date(2018, 7), y: 104585 },
                { x: new Date(2018, 8), y: 61383 },
                { x: new Date(2018, 9), y: 36004 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart12.render();




};