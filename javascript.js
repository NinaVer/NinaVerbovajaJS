

   var nyArray=[];
        for (let i = 0; i < airdnb.length; i++) {
            if (typeof nyArray[airdnb[i].room_type] === "undefined") {
                nyArray[airdnb[i].room_type] = 0;
            }
            nyArray[airdnb[i].room_type]++;
        }
        var myValues= nyArray[airdnb[i].room_type];
        var myLabels = airdnb.filter(function(value, index, array){
            return array.indexOf(value) == index;
        });
    

        var data = [{
            values: myValues,
            labels: myLabels,
            type: 'pie',

        }];

        var layout = {
            height: 400,
            width: 500
        };

        Plotly.newPlot('myDiv', data, layout);