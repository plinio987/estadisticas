window.onload = function() {

    var chart11 = new CanvasJS.Chart("engagementGeneral", {
        colorset: "#3CB371",
        backgroundColor: "#e6eff3",
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
            valueFormatString: "MMM",
            labelFontColor: "#222",

        },
        axisY: {
            title: "No. engagement",
            titleFontColor: "#222",
            suffix: "M",
            labelFontColor: "#222",
            gridColor: "#edb5bf"
        },
        data: [{
            indexLabelFontColor: "rgba(11, 84, 157, 0.06)",
            color: "#73c0f4",
            name: "views",
            type: "area",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "##0.00'%'",
            dataPoints: [
                { x: new Date(2019, 0), y: 0.54 },
                { x: new Date(2019, 1), y: 0.37 },
                { x: new Date(2019, 2), y: 0.54 },
                { x: new Date(2019, 3), y: 0.40 },
                { x: new Date(2019, 4), y: 0.65 },
                { x: new Date(2019, 5), y: 0.74 },
                { x: new Date(2019, 6), y: 0.10 },
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



    /*GENERO FANS GENERAL */

    var chart12 = new CanvasJS.Chart("alcanceGeneral", {
        colorset: "#3CB371",
        backgroundColor: "#e6eff3",
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
            valueFormatString: "MMM",
            labelFontColor: "#222",

        },
        axisY: {
            title: "No. alcance",
            titleFontColor: "#222",
            suffix: "mn",
            labelFontColor: "#222",
            gridColor: "#edb5bf"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            name: "views",
            type: "area",
            color: "#73c0f4",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2019, 0), y: 23143 },
                { x: new Date(2019, 1), y: 18667 },
                { x: new Date(2019, 2), y: 10348 },
                { x: new Date(2019, 3), y: 18039 },
                { x: new Date(2019, 4), y: 12285 },
                { x: new Date(2019, 5), y: 8918 },
                { x: new Date(2019, 6), y: 83631 },
                { x: new Date(2019, 7), y: 0 },
                { x: new Date(2019, 8), y: 0 },
                { x: new Date(2019, 9), y: 0 },
                { x: new Date(2019, 10), y: 0 },
                { x: new Date(2019, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart12.render();


};