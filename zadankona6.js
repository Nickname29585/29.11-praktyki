fetch("https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty")
.then(res => res.json())
.then(res => res.kids)
.then(res => {
    console.log(res);



        const ifIdEven = (kids) => kids.filter((kids) => kids % 2 == 0);
        const sumId = (kids)  => kids.reduce((a, b) => a + b, 0);
        
        const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);
    
        const odpalamy= compose(sumId,ifIdEven);
    
        console.log(odpalamy(res));
    })

 