let text= "Coarellegesareunderar";
 let text1 = "are";
 let idex = ba1.lastIndexOf(ba2);
    if (idex !== -1) {
        let findstr = ba1.slice(0, idex) + ba1.slice(idex +ba2.length);
        console.log(findstr);
    }   