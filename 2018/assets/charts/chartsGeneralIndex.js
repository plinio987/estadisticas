window.onload = function() {

    var chart12 = new CanvasJS.Chart("alcanceGeneralIndex", {
        colorset: "#3CB371",
        backgroundColor: "#e6eff3",
        exportEnabled: true,
        animationEnabled: true,
        //theme: "light1",  "light1", "light2", "dark1", "dark2"
        title: {
            text: "",
            fontColor: "#222",
            fontSize: 20,
            fontFamily: "tahoma",
            fontStyle: "italic",
        },

        axisX: {
            interval: 1,
            intervalType: "month",
            labelFontColor: "#222",
            labelFontStyle: "italic",
            valueFormatString: "MMM"

        },
        axisY: {
            title: "Total alcance",
            titleFontColor: "#222",
            suffix: "M",
            labelFontColor: "#222",
            labelFontStyle: "italic",
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
                { x: new Date(2019, 0), y: 4351411 },
                { x: new Date(2019, 1), y: 3531953 },
                { x: new Date(2019, 2), y: 3459449 },
                { x: new Date(2019, 3), y: 12494371 },
                { x: new Date(2019, 4), y: 5217901 },
                { x: new Date(2019, 5), y: 3415979 },
                { x: new Date(2019, 6), y: 5400066 },
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




    var chart11 = new CanvasJS.Chart("engagementGeneralIndex", {
        colorset: "#3CB371",
        backgroundColor: "#e6eff3",
        exportEnabled: true,
        animationEnabled: true,
        //theme: "light1", "light1", "light2", "dark1", "dark2"
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
            title: "% de engagement ",
            titleFontColor: "#222",
            suffix: "mn",
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
                { x: new Date(2019, 0), y: 1.26 },
                { x: new Date(2019, 1), y: 1.29 },
                { x: new Date(2019, 2), y: 1.52 },
                { x: new Date(2019, 3), y: 1.85 },
                { x: new Date(2019, 4), y: 1.24 },
                { x: new Date(2019, 5), y: 1.48 },
                { x: new Date(2019, 6), y: 1.03 },
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