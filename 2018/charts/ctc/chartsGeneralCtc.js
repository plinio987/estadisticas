window.onload = function() {

    var chart11 = new CanvasJS.Chart("engagementGeneralCtc", {
        colorset: "#3CB371",
        backgroundColor: "#6975a6",
        exportEnabled: true,
        animationEnabled: true,
        //theme: "light1",  "light1", "light2", "dark1", "dark2"
        title: {
            text: "Engagement general RRSS CTC",
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
            titleFontColor: "#4F81BC",
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
                { x: new Date(2018, 0), y: 3.79 },
                { x: new Date(2018, 1), y: 3.90 },
                { x: new Date(2018, 2), y: 3.91 },
                { x: new Date(2018, 3), y: 3.21 },
                { x: new Date(2018, 4), y: 2.46 },
                { x: new Date(2018, 5), y: 2.38 },
                { x: new Date(2018, 6), y: 0.84 },
                { x: new Date(2018, 7), y: 1.58 },
                { x: new Date(2018, 8), y: 1.50 },
                { x: new Date(2018, 9), y: 2.05 },
                { x: new Date(2018, 10), y: 1.69 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart11.render();



    /*GENERO FANS GENERAL */

    var chart12 = new CanvasJS.Chart("alcanceGeneralCtc", {
        colorset: "#3CB371",
        backgroundColor: "#6975a6",
        exportEnabled: true,
        animationEnabled: true,
        theme: "light1", //"light1", "light2", "dark1", "dark2"
        title: {
            text: "Total alcance mensual RRSS CTC",
            fontColor: "#fff",
            fontFamily: "tahoma",
            fontStyle: "italic"
        },

        axisX: {
            interval: 1,
            intervalType: "month",
            labelFontColor: "#fff",
            fontSize: 20,
            valueFormatString: "MMM"

        },
        axisY: {
            title: "No. alcance",
            titleFontColor: "#4F81BC",
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
                { x: new Date(2018, 0), y: 364263 },
                { x: new Date(2018, 1), y: 413879 },
                { x: new Date(2018, 2), y: 624999 },
                { x: new Date(2018, 3), y: 434678 },
                { x: new Date(2018, 4), y: 440810 },
                { x: new Date(2018, 5), y: 371432 },
                { x: new Date(2018, 6), y: 658796 },
                { x: new Date(2018, 7), y: 884730 },
                { x: new Date(2018, 8), y: 591894 },
                { x: new Date(2018, 9), y: 621032 },
                { x: new Date(2018, 10), y: 473529 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart12.render();


};