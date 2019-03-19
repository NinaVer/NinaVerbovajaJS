var nyArray=[];
        for (let i = 0; i < airdnb.length; i++) {
            if (typeof nyArray[airdnb[i].room_type] === "undefined") {
                nyArray[airdnb[i].room_type] = 0;
            }
            nyArray[airdnb[i].room_type]++;
        }