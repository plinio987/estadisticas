window.onload = function() {

    var chart11 = new CanvasJS.Chart("engagementGeneralManosDominicanas", {
        colorset: "#3CB371",
        backgroundColor: "#6975a6",
        exportEnabled: true,
        animationEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Engagement general RRSS Manos Dominicanas",
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
            title: "Engagement mensual",
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
                { x: new Date(2018, 0), y: 1.54 },
                { x: new Date(2018, 1), y: 0.45 },
                { x: new Date(2018, 2), y: 0.55 },
                { x: new Date(2018, 3), y: 0.66 },
                { x: new Date(2018, 4), y: 0.70 },
                { x: new Date(2018, 5), y: 1.35 },
                { x: new Date(2018, 6), y: 0.48 },
                { x: new Date(2018, 7), y: 0.31 },
                { x: new Date(2018, 8), y: 0.21 },
                { x: new Date(2018, 9), y: 0.29 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart11.render();


};