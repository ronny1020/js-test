function checktwid(id) {
    // if(id.length==10){
    //     id.charAt(0)
    // }
    //     let check = true;
    //     let firstletter = "----------ABCDEFGHJKLMNPQRSTUVXYWZIO"
    //     if (!id.match(/^[A-Z][12][0-9]{8}$/)) {
    //         check = false;
    //     }


    //     c1=id.chartAt(0)
    //     n12=firstletter.indexOf(c1);
    //     n1=Math.floor()



    //     console.log(check);

    // }

    let ret = false;
    let letters = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
    if (id.match(/^[A-Z][12][0-9]{8}$/)) {
        let c1 = id.charAt(0);
        let n12 = letters.indexOf(c1) + 10; // E => 4 => 14
        let n1 = Math.floor(n12 / 10); // 1
        let n2 = n12 % 10; // 4
        let n3 = parseInt(id.substr(1, 1));
        let n4 = parseInt(id.substr(2, 1));
        let n5 = parseInt(id.substr(3, 1));
        let n6 = parseInt(id.substr(4, 1));
        let n7 = parseInt(id.substr(5, 1));
        let n8 = parseInt(id.substr(6, 1));
        let n9 = parseInt(id.substr(7, 1));
        let n10 = parseInt(id.substr(8, 1));
        let n11 = parseInt(id.substr(9, 1));
        let sum = n1 * 1 + n2 * 9 + n3 * 8 + n4 * 7 + n5 * 6 + n6 * 5 + n7 * 4 +
            n8 * 3 + n9 * 2 + n10 * 1 + n11 * 1;
        ret = sum % 10 == 0;

    }

    return ret;
}

function createtwid() {

}

function createtwidbyarea() {

}