var app1 = new Vue({
    el: "#committeeSelection",
    
    data: function(){
        return {
            parameters: [
                    {
                        name: "Big Events"
                    },
                    {
                        name: "Technology"
                    },
                    {
                        name: "Media"
                    },
                    {
                        name: "Recurring Events"
                    },
                    {
                        name: "On Campus"
                    },
                    {
                        name: "Art"
                    }, 
                    {
                        name: "Programming"
                    },
                    {
                        name: "Music"
                    },
                    {
                        name: "Video"
                    }
                ],
            committees: [
                    {
                        name: "LDOC",
                        img: "ldoc.png",
                        parameters:  "Big Events,On Campus",
                        shown: true,
                    },
                    {
                        name: "Downtown Duke",
                        img: "downtownduke.png",
                        parameters:  "Recurring Events,Art",
                        shown: true
                    },  
                    {
                        name: "Special Events",
                        img: "specialevents.png",
                        parameters:  "Recurring Events,Video",
                        shown: true
                    },
                    {
                        name: "Campus Concerts",
                        img: "cc.png",
                        parameters:  "Music,Video",
                        shown: true
                    },
                    {
                        name: "Coffehouse",
                        img: "coffeehouse.png",
                        parameters:  "Big Events,Art",
                        shown: true
                    },  
                    {
                        name: "DevOps",
                        img: "devops.png",
                        parameters:  "Recurring Events,Art",
                        shown: true
                    },
                    {
                        name: "Duke Student Broadcasting",
                        img: "dsb.png",
                        parameters:  "Technology,Big Events",
                        shown: true
                    },
                    {
                        name: "Financial Analysts",
                        img: "finanalysts.png",
                        parameters:  "Programming,Music",
                        shown: true
                    },
                    {
                        name: "FIPs",
                        img: "fips.png",
                        parameters:  "Programming,Technology",
                        shown: true
                    },
                    {
                        name: "Freewater Presentations",
                        img: "freewater.png",
                        parameters:  "Music,Art",
                        shown: true
                    },
                    {
                        name: "Freewater Productions",
                        img: "freewaterproductions.png",
                        parameters:  "Big Events,Art",
                        shown: true
                    },
                    {
                        name: "Speakers and Stage",
                        img: "speakers.png",
                        parameters:  "Big Events,Art",
                        shown: true
                    },
                    {
                        name: "Marketing",
                        img: "marketing.png",
                        parameters:  "Recurring Events,Art",
                        shown: true
                    },
                    {
                        name: "Jazz@",
                        img: "jazz.png",
                        parameters:  "Music,Technology",
                        shown: true
                    },
                    {
                        name: "Vis Arts",
                        img: "visarts.png",
                        parameters:  "Big Events,Recurring Events",
                        shown: true
                    },
                    {
                        name: "WXDU",
                        img: "wxdu.png",
                        parameters:  "Music,Technology",
                        shown: true
                    },
                    {
                        name: "STR",
                        img: "str.png",
                        parameters:  "Technology,Music",
                        shown: true
                    },
                    {
                        name: "DUU",
                        img: "duu.jpg",
                        parameters:  "Big Events,Recurring Events,Programming,Technology,On Campus,Music,Media,Art,Video",
                        shown: true
                    }
                ],
            }
        },
    
    methods: {
        select: function(){            
            var list = $(".chk:checked").map(
                function () {
                    return this.value;
                }
            );

            
            if (list.length < 1){
                for (var r=0; r<app1.committees.length;r++){
                    app1.committees[r].shown = true;
                }
            }  

            for (var r=0; r<app1.committees.length;r++){

                var paramList = app1.committees[r].parameters.split(",");
                
                if (list.length === 1){ 
                        if (paramList.includes(list[0])){
                            app1.committees[r].shown = true;
                        }
                        else{
                            app1.committees[r].shown = false;
                        }
                }
                
                if (list.length === 2){
                    console.log("list length 2 code running"); 
                        if (paramList.includes(list[0]) && paramList.includes(list[1])){
                            app1.committees[r].shown = true;
                        }
                        else{
                            app1.committees[r].shown = false;
                        }
                }                       
            }
        },
        apply: function(committeeName){
            $("#background")[0].style.display = "block";
            $("#background")[0].style.opacity = .9;
            $("#application")[0].style.display = "block";
        },
        exitApplication: function(){
            $("#background")[0].style.display = "none";
            $("#application")[0].style.display = "none";
        },
    }
});