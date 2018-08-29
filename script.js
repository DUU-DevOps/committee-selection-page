var app1 = new Vue({
    el: "#committeeSelection",
    
    data: function(){
        return {
            parameters: [
                    {
                        name: "Big Events"
                    },
                    {
                        name: "Production"
                    },
                    {
                        name: "Media"
                    },
                    {
                        name: "Small Events"
                    },
                    {
                        name: "Planning"
                    },
                    {
                        name: "Concerts"
                    }, 
                    {
                        name: "Recurring Events"
                    },
                    {
                        name: "Technology"
                    },
                    {
                        name: "Student Engagement"
                    }
                ],
            committees: [
                    {
                        name: "LDOC",
                        img: "ldoc.png",
                        parameters:  "Big Events,Production,Planning,Concerts",
                        shown: true,
                    },
                    {
                        name: "Downtown Duke",
                        img: "downtownduke.png",
                        parameters:  "Small Events,Recurring Events,Planning,Student Engagement",
                        shown: true
                    },  
                    {
                        name: "Special Events",
                        img: "specialevents.png",
                        parameters:  "Small Events,Big Events,Recurring Events,Planning,Student Engagement",
                        shown: true
                    },
                    {
                        name: "Campus Concerts",
                        img: "cc.png",
                        parameters:  "Big Events,Planning,Concerts",
                        shown: true
                    },
                    {
                        name: "Coffehouse",
                        img: "coffeehouse.png",
                        parameters:  "Small Events,Recurring Events,Planning,Student Engagement",
                        shown: true
                    },  
                    {
                        name: "DevOps",
                        img: "devops.png",
                        parameters:  "Small Events,Technology",
                        shown: true
                    },
                    {
                        name: "Duke Student Broadcasting",
                        img: "dsb.png",
                        parameters:  "Small Events,Recurring Events,Technology,Media",
                        shown: true
                    },
                    {
                        name: "Financial Analysts",
                        img: "finanalysts.png",
                        parameters:  "Small Events,Planning,Technology,Media",
                        shown: true
                    },
                    {
                        name: "FIPs",
                        img: "fips.png",
                        parameters:  "Small Events,Planning,Media",
                        shown: true
                    },
                    {
                        name: "Freewater Presentations",
                        img: "freewater.png",
                        parameters:  "Small Events,Recurring Events,Production,Technology,Media",
                        shown: true
                    },
                    {
                        name: "Freewater Productions",
                        img: "freewaterproductions.png",
                        parameters:  "Small Events,Recurring Events,Production,Technology,Media",
                        shown: true
                    },
                    {
                        name: "Speakers and Stage",
                        img: "speakers.png",
                        parameters:  "Big Events,Small Events,Production,Planning,Media",
                        shown: true
                    },
                    {
                        name: "Marketing",
                        img: "marketing.png",
                        parameters:  "Small Events,Planning,Technology,Media",
                        shown: true
                    },
                    {
                        name: "Jazz@",
                        img: "jazz.png",
                        parameters:  "Small Events,Recurring Events,Planning,Media,Concerts",
                        shown: true
                    },
                    {
                        name: "Vis Arts",
                        img: "visarts.png",
                        parameters:  "Small Events,Recurring Events,Production,Planning,Media",
                        shown: true
                    },
                    {
                        name: "WXDU",
                        img: "wxdu.png",
                        parameters:  "Small Events,Recurring Events,Production,Technology,Media,Music",
                        shown: true
                    },
                    {
                        name: "STR",
                        img: "str.png",
                        parameters:  "Big Events,Recurring Events,Production,Planning,Technology,Music,Media,Concerts",
                        shown: true
                    },
                    {
                        name: "DUU",
                        img: "duu.png",
                        parameters:  "Big Events,Small Events,Recurring Events,Production,Planning,Technology,Media,Concerts,Music",
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
            $("#exit img")[0].style.display = "inline";
        },
        exitApplication: function(){
            $("#background")[0].style.display = "none";
            $("#application")[0].style.display = "none";
            $("#exit img")[0].style.display = "none";
        },
    }
});