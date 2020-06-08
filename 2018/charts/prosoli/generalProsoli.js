window.onload = function() {

    var chart11 = new CanvasJS.Chart("engagementGeneralProsoli", {
        colorset: "#3CB371",
        backgroundColor: "#6975a6",
        exportEnabled: true,
        animationEnabled: true,
        // theme: "light1",  "light1", "light2", "dark1", "dark2"
        title: {
            text: "Engagement general RRSS Prosoli",
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
            title: "No.engagement",
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
                { x: new Date(2018, 0), y: 1.61 },
                { x: new Date(2018, 1), y: 1.45 },
                { x: new Date(2018, 2), y: 1.72 },
                { x: new Date(2018, 3), y: 1.65 },
                { x: new Date(2018, 4), y: 1.94 },
                { x: new Date(2018, 5), y: 1.40 },
                { x: new Date(2018, 6), y: 1.51 },
                { x: new Date(2018, 7), y: 1.40 },
                { x: new Date(2018, 8), y: 1.33 },
                { x: new Date(2018, 9), y: 1.08 },
                { x: new Date(2018, 10), y: 0.64 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart11.render();



    /*GENERO FANS GENERAL */

    var chart12 = new CanvasJS.Chart("alcanceGeneralProsoli", {
        colorset: "#3CB371",
        backgroundColor: "#6975a6",
        exportEnabled: true,
        animationEnabled: true,
        //theme: "light1",  "light1", "light2", "dark1", "dark2"
        title: {
            text: "Alcance total RRSS Prosoli",
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
            titleFontColor: "#fff",
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
                { x: new Date(2018, 0), y: 574428 },
                { x: new Date(2018, 1), y: 594656 },
                { x: new Date(2018, 2), y: 540409 },
                { x: new Date(2018, 3), y: 479514 },
                { x: new Date(2018, 4), y: 516119 },
                { x: new Date(2018, 5), y: 417725 },
                { x: new Date(2018, 6), y: 433991 },
                { x: new Date(2018, 7), y: 590646 },
                { x: new Date(2018, 8), y: 665977 },
                { x: new Date(2018, 9), y: 827277 },
                { x: new Date(2018, 10), y: 831514 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart12.render();



};