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
                { x: new Date(2019, 0), y: 0.05 },
                { x: new Date(2019, 1), y: 0.08 },
                { x: new Date(2019, 2), y: 0.04 },
                { x: new Date(2019, 3), y: 0.02 },
                { x: new Date(2019, 4), y: 0.04 },
                { x: new Date(2019, 5), y: 0.15 },
                { x: new Date(2019, 6), y: 0.15 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 0 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart11.render();


};