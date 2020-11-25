    console.log('Exercise 1');
    
    let num = '';
    for (i = 1; i <= 10; i++) {
            if (i % 2 === 0) {
                if (i % 3 === 0) {
                    num = 'FizBuz'; 
                    console.log(i, num);
                    continue;
                    }
                num = 'Fiz';  
                console.log(i, num);
            } 
            else {
                if (i % 3 === 0) {
                    num = 'FizBuz';  
                    console.log(i, num); 
                    continue;
                }
                num = 'Buz';  
                console.log(i, num);
            }
    }
    console.log('');
//----------------------------------------------------------
console.log('Exercise 2');

let faktorial_n = 10;
let faktorial = 1;
    for (i = 2; i <= faktorial_n; i++) {
        faktorial = faktorial*i;
    }
    console.log(faktorial_n, '!=', faktorial);
    console.log('');

    //------------------------------------------------------

    console.log('Exercise 3');

    const sheetsInReamPaper = 500;
    const consumptionPerWeek = 1200;
    const weeksAmount = 8;
    let consumptionОfЕverything = consumptionPerWeek*weeksAmount;
    let remainder = consumptionОfЕverything%sheetsInReamPaper;
    let TotalPacks = (consumptionОfЕverything-remainder)/sheetsInReamPaper;
    
    console.log(TotalPacks);
    console.log('');
    //-------------------------------------------------------
    
    console.log('Exercise 4');
    
    const roomNumber = 456;
    const roomsOnFloor = 3;
    const floors = 9;
    console.log('Room Number -', roomNumber);
    let roomsInPorch = roomsOnFloor*floors;
    let remainderRoom = roomNumber%roomsInPorch;
    if (remainderRoom === 0) {
        const porch = (roomNumber-remainderRoom)/roomsInPorch;
        console.log('porch -', porch);
        const floor = floors;
        console.log('floor -', floor);
    } else {
        const porch = (roomNumber-remainderRoom)/roomsInPorch+1;
        console.log('porch -', porch);
        let remainderRoomInFloor = remainderRoom%roomsOnFloor;
        if (remainderRoomInFloor === 0) {
        const floor = (remainderRoom-remainderRoomInFloor)/roomsOnFloor;
        console.log('floor -', floor);
        } else {
        const floor = (remainderRoom-remainderRoomInFloor)/roomsOnFloor+1;
        console.log('floor -', floor);   
        }       
    }
    //-------------------------------------------------------------


   
    