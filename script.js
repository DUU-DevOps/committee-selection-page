    var app1 = new Vue({
    el: "#committeeSelection",
    
    data: function(){
        return {
            parameters: [
                {
                    name: "Music performance"
                },
                {
                    name: "Music production"
                },
                {
                    name: "Jazz"
                },
                {
                    name: "Concerts"
                },
                {
                    name: "Sound engineering"
                },
                {
                    name: "Film appreciation"
                },
                {
                    name: "Videography"
                },
                {
                    name: "Visual arts"
                },
                {
                    name: "Broadcasting"
                },
                                {
                    name: "Large events"
                },
                {
                    name: "Regular events"
                },
                {
                    name: "Karaoke or Trivia"
                },
                {
                    name: "Live performances"
                },
                                {
                    name: "Strategy"
                },
                {
                    name: "Graphic design"
                },
                {
                    name: "Photography"
                },
                                {
                    name: "App development"
                },
                {
                    name: "Data analytics"
                },
                {
                    name: "Web design"
                }
                
            ],
            
            musicParameters: [
                {
                    name: "Music performance"
                },
                {
                    name: "Music production"
                },
                {
                    name: "Jazz"
                },
                {
                    name: "Concerts"
                },
                {
                    name: "Sound engineering"
                }
                
            ],
            
            artsMediaParameters:[
                {
                    name: "Film appreciation"
                },
                {
                    name: "Videography"
                },
                {
                    name: "Visual arts"
                },
                {
                    name: "Broadcasting"
                }
            ],
            
            eventPlanningParameters:[
                {
                    name: "Large events"
                },
                {
                    name: "Regular events"
                },
                {
                    name: "Karaoke or Trivia"
                },
                {
                    name: "Live performances"
                }
            ],
            
            marketingParameters:[
                {
                    name: "Strategy"
                },
                {
                    name: "Graphic design"
                },
                {
                    name: "Photography"
                },
            ],
            
            technologyParameters:[
                {
                    name: "App development"
                },
                {
                    name: "Data analytics"
                },
                {
                    name: "Web design"
                }
            ],
            committees: [
                    {
                        name: "LDOC",
                        img: "ldoc.png",
                        parameters:  "Large events,Concerts,Data analytics,Live performances",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSci8zRjnTMvnme65Xwyw4ACMf-1yK60hL_sQEhobYRk2gWv8w/viewform?usp=sf_link"
                    },
                    {
                        name: "Duke@Nite",
                        img: "downtownduke.png",
                        parameters:  "Regular events,Karaoke or Trivia",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfSq4isW3R4iCI5PzSQtoRGp4Ts7YzjqH1EOmbOSWKvKS7EkA/viewform"
                    },  
                    {
                        name: "Special Events",
                        img: "specialevents.png",
                        parameters:  "Large events,Live performances",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSeP3tQNfe-56O1WVawunS5GQvt7AbN5DI2VNUA6K1wY6EcDVw/viewform?usp=sf_link"
                    },
                    {
                        name: "Campus Concerts",
                        img: "cc.png",
                        parameters:  "Large events,Concerts,Music performance,Graphic design",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform?usp=sf_link"
                    },
                    {
                        name: "Coffehouse",
                        img: "coffeehouse.png",
                        parameters:  "Regular events,Concerts,Film appreciation",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform?usp=sf_link"
                    },  
                    {
                        name: "DevOps",
                        img: "devops.png",
                        parameters:  "App development,Data analytics,Web design",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfxlNUYjsx2xHXDnND_EWPV5P8iv5bcaiUP546VnNjjNbU36A/viewform?embedded=true"
                    },
                    {
                        name: "Duke Student Broadcasting",
                        img: "dsb.png",
                        parameters:  "Videography,Broadcasting",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform?usp=sf_link"
                    },
                    {
                        name: "Financial Analysts",
                        img: "finanalysts.png",
                        parameters:  "App development,Data analytics,Strategy",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform?usp=sf_link"
                    },
                    {
                        name: "FIPs",
                        img: "fips.png",
                        parameters:  "Regular events,Strategy", //NEED HELP!
                        shown: true,
                        link: "https://drive.google.com/file/d/1rApsDl3nJU_l7hilffBHIB3Qzdiwezb8/view?usp=sharing"
                    },
                    {
                        name: "Freewater Presentations",
                        img: "freewater.png",
                        parameters:  "Regular events,Film appreciation",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform?usp=sf_link"
                    },
                    {
                        name: "Freewater Productions",
                        img: "freewaterproductions.png",
                        parameters:  "Videography,Visual arts",
                        shown: true,
                        link: "https://goo.gl/forms/UM2pjHuyCw6fCGvC3"
                    },
                    {
                        name: "Speakers and Stage",
                        img: "speakers.png",
                        parameters:  "Large events,Live performances",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform?usp=sf_link"
                    },
                    {
                        name: "Marketing",
                        img: "marketing.png",
                        parameters:  "Strategy,Graphic design,Photography,Web design,Data analytics",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform?usp=sf_link"
                    },
                    {
                        name: "Jazz@",
                        img: "jazz.png",
                        parameters:  "Regular events,Concerts,Jazz,Live performances",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform?usp=sf_link"
                    },
                    {
                        name: "Vis Arts",
                        img: "visarts.png",
                        parameters:  "Regular events,Visual arts",
                        shown: true,
                        link: "https://docs.google.com/forms/u/3/d/1PAUkc5KHCPoqIzuaoQO0SFAonzYujQIVKKaXT2CqOPc/edit?usp=drive_web",
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform?usp=sf_link"
                    },
                    {
                        name: "WXDU",
                        img: "wxdu.png",
                        parameters:  "Jazz,Broadcasting,Live performances",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform?usp=sf_link"
                    },
                    {
                        name: "STR",
                        img: "str.png",
                        parameters:  "Large events,Music performance,Music production,Concerts,Jazz,Live performances,Sound engineering",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLScRVFiZj0mPxnL-LzS9Cl_Z1KAtOrKcAmQGQvZLVwLyJ2jFAg/viewform?usp=sf_link"
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
            
                        console.log(list);
            if ("Arts & media" in list){
                console.log("TRUEEEEE");
            }
            else{
                console.log("FALSEEEEEEE");
            }
            


            
            if (list.length < 1){
                for (var r=0; r<app1.committees.length;r++){
                    app1.committees[r].shown = true;
                }
            }
            else{
                for (var r=0; r<app1.committees.length;r++){
                    app1.committees[r].shown = false;
                }
            }
            for (var r=0; r<app1.committees.length;r++){
                //var flag=false;
                var paramList = app1.committees[r].parameters.split(",");
                
                for (var z=0; z<list.length;z++){
//                    if (! paramList.includes(list[z])){
//                        app1.committees[r].shown = false;
//                        flag=false;
//                        break;
//                    }
                    if (paramList.includes(list[z])){
                        app1.committees[r].shown = true;
                    }

                }
//                if (flag){
//                    app1.committees[r].shown = true;
//                }
            }
            

            //Check for category selection
            //if list.includes("")
        },
        apply: function(committeeLink){
            if (committeeLink === "https://drive.google.com/file/d/1rApsDl3nJU_l7hilffBHIB3Qzdiwezb8/view?usp=sharing"){
                window.open(committeeLink);
                return;
            }
            $("#application").replaceWith('<iframe align="middle" id="application" src="'+committeeLink+'" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>');
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