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
                { x: new Date(2018, 0), y: 3.78 },
                { x: new Date(2018, 1), y: 3.64 },
                { x: new Date(2018, 2), y: 5.41 },
                { x: new Date(2018, 3), y: 11.86 },
                { x: new Date(2018, 4), y: 5.42 },
                { x: new Date(2018, 5), y: 4.43 },
                { x: new Date(2018, 6), y: 4.91 },
                { x: new Date(2018, 7), y: 0 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

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
                { x: new Date(2018, 0), y: 2676240 },
                { x: new Date(2018, 1), y: 1996977 },
                { x: new Date(2018, 2), y: 810040 },
                { x: new Date(2018, 3), y: 670880 },
                { x: new Date(2018, 4), y: 1202716 },
                { x: new Date(2018, 5), y: 875664 },
                { x: new Date(2018, 6), y: 1138421 },
                { x: new Date(2018, 7), y: 0 },
                { x: new Date(2018, 8), y: 0 },
                { x: new Date(2018, 9), y: 0 },
                { x: new Date(2018, 10), y: 0 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart12.render();


};