window.onload = function() {

    var chart12 = new CanvasJS.Chart("alcanceGeneralIndex", {
        colorset: "#3CB371",
        backgroundColor: "#6a8a82",
        exportEnabled: true,
        animationEnabled: true,
        //theme: "light1",  "light1", "light2", "dark1", "dark2"
        title: {
            text: "Alcance total Gabinete Digital",
            fontColor: "#fff",
            fontSize: 20,
            fontFamily: "tahoma",
            fontStyle: "italic",
        },

        axisX: {
            interval: 1,
            intervalType: "month",
            labelFontColor: "#fff",
            labelFontStyle: "italic",
            valueFormatString: "MMM"

        },
        axisY: {
            title: "No. alcance",
            titleFontColor: "#fff",
            suffix: "M",
            labelFontColor: "#fff",
            labelFontStyle: "italic",
            gridColor: "#edb5bf"
        },
        data: [{
            indexLabelFontColor: "darkSlateGray",
            name: "views",
            type: "area",
            color: "#a7414a",
            xValueFormatString: "MMM, YYYY",
            yValueFormatString: "#,###",
            dataPoints: [
                { x: new Date(2018, 0), y: 5593836 },
                { x: new Date(2018, 1), y: 3811823 },
                { x: new Date(2018, 2), y: 5629571 },
                { x: new Date(2018, 3), y: 6358334 },
                { x: new Date(2018, 4), y: 8856229 },
                { x: new Date(2018, 5), y: 3332892 },
                { x: new Date(2018, 6), y: 3658986 },
                { x: new Date(2018, 7), y: 3867427 },
                { x: new Date(2018, 8), y: 4026711 },
                { x: new Date(2018, 9), y: 4421817 },
                { x: new Date(2018, 10), y: 50781296 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart12.render();




    var chart11 = new CanvasJS.Chart("engagementGeneralIndex", {
        colorset: "#3CB371",
        backgroundColor: "#6975a6",
        exportEnabled: true,
        animationEnabled: true,
        //theme: "light1", "light1", "light2", "dark1", "dark2"
        title: {
            text: "Engagement promedio Gabinete Digital",
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
            title: "% de engagement ",
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
                { x: new Date(2018, 0), y: 1.53 },
                { x: new Date(2018, 1), y: 1.53 },
                { x: new Date(2018, 2), y: 1.49 },
                { x: new Date(2018, 3), y: 1.45 },
                { x: new Date(2018, 4), y: 1.75 },
                { x: new Date(2018, 5), y: 1.13 },
                { x: new Date(2018, 6), y: 1.38 },
                { x: new Date(2018, 7), y: 1.09 },
                { x: new Date(2018, 8), y: 1.17 },
                { x: new Date(2018, 9), y: 1.47 },
                { x: new Date(2018, 10), y: 1.06 },
                { x: new Date(2018, 11), y: 0 }

                /*indexLabel: "Highest", markerColor: "red" */
            ]
        }]
    });
    chart11.render();




};