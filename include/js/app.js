const programs = [
    {
        id: 1,
        
        title: "Program One",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/111"
    },
    {
        id: 2,
        
        title: "Program Odfne",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/111"
    }
]
for (let a = 0; a <= programs.length; a++) {
  
   programs.map(({id,title,info}) => {
    document.getElementById("title").innerHTML=title;
    document.getElementById("info").innerHTML=info;
}
);

    
}
