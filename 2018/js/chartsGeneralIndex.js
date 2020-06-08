window.onload = function () {

var chart11 = new CanvasJS.Chart("engagementGeneralIndex", {
    colorset:"#3CB371",
    backgroundColor:"#4d6d9a",
    exportEnabled: true,
    animationEnabled: true,
   //theme: "light1",  "light1", "light2", "dark1", "dark2"
    title: {
    text: "Engagement general Gab Digital",
    fontColor: "#fff", 
    fontFamily: "tahoma", 
    fontStyle: "italic"
    },
    

    axisX: {
        interval: 1,
        intervalType: "month",
        labelFontColor: "#fff", 
        labelFontStyle: "italic",
        valueFormatString: "MMM",

        
    },
    axisY: {
        title: "Engagement mensual",
        titleFontColor: "#fff",
        suffix: "Mn",
        labelFontColor: "#fff",
        gridColor: "#edb5bf"
    },
    data: [{
        indexLabelFontColor: "#fff",
        color: "#99ced3",
        name: "views",
        type: "area",
        xValueFormatString: "MMM, YYYY",
        yValueFormatString: "#,###",
        
        dataPoints: [
            { x: new Date(2018, 0), y: 4704},
            { x: new Date(2018, 1), y: 0},
            { x: new Date(2018, 2), y: 0},
            { x: new Date(2018, 3), y: 0},
            { x: new Date(2018, 4), y: 0},
            { x: new Date(2018, 5), y: 0},
            { x: new Date(2018, 6), y: 0 },
            { x: new Date(2018,7), y: 0 },
            { x: new Date(2018,8), y: 0},
            { x: new Date(2018,9), y: 0},
            { x: new Date(2018,10), y: 0},
            { x: new Date(2018,11), y: 0}

            /*indexLabel: "Highest", markerColor: "red" */
        ]
    }]
});
chart11.render();



/*GENERO FANS GENERAL */

var chart12 = new CanvasJS.Chart("alcanceGeneralIndex", {
    colorset:"#3CB371",
    backgroundColor:"#4d6d9a",
    exportEnabled: true,
    animationEnabled: true,
   //theme: "light1",  "light1", "light2", "dark1", "dark2"
    title: {
    text: "Alcance total Gab Digital",
    fontColor: "#fff", 
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
        type: "line",
        color: "#99ced3",
        xValueFormatString: "MMM, YYYY",
        yValueFormatString: "#,###",
        dataPoints: [
            { x: new Date(2018, 0), y: 5645717},
            { x: new Date(2018, 1), y: 0},
            { x: new Date(2018, 2), y: 0},
            { x: new Date(2018, 3), y: 0},
            { x: new Date(2018, 4), y: 0},
            { x: new Date(2018, 5), y: 0},
            { x: new Date(2018, 6), y: 0 },
            { x: new Date(2018,7), y: 0 },
            { x: new Date(2018,8), y: 0},
            { x: new Date(2018,9), y: 0},
            { x: new Date(2018,10), y: 0},
            { x: new Date(2018,11), y: 0}

            /*indexLabel: "Highest", markerColor: "red" */
        ]
    }]
});
chart12.render();

};


/* CALENDARIO */

