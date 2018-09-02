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
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSci8zRjnTMvnme65Xwyw4ACMf-1yK60hL_sQEhobYRk2gWv8w/viewform?usp=sf_link"
                    },
                    {
                        name: "Downtown Duke",
                        img: "downtownduke.png",
                        parameters:  "Small Events,Recurring Events,Planning,Student Engagement",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfSq4isW3R4iCI5PzSQtoRGp4Ts7YzjqH1EOmbOSWKvKS7EkA/viewform"
                    },  
                    {
                        name: "Special Events",
                        img: "specialevents.png",
                        parameters:  "Small Events,Big Events,Recurring Events,Planning,Student Engagement",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSeP3tQNfe-56O1WVawunS5GQvt7AbN5DI2VNUA6K1wY6EcDVw/viewform?usp=sf_link"
                    },
                    {
                        name: "Campus Concerts",
                        img: "cc.png",
                        parameters:  "Big Events,Planning,Concerts",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform?usp=sf_link"
                    },
                    {
                        name: "Coffehouse",
                        img: "coffeehouse.png",
                        parameters:  "Small Events,Recurring Events,Planning,Student Engagement",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform?usp=sf_link"
                    },  
                    {
                        name: "DevOps",
                        img: "devops.png",
                        parameters:  "Small Events,Technology",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfxlNUYjsx2xHXDnND_EWPV5P8iv5bcaiUP546VnNjjNbU36A/viewform?embedded=true"
                    },
                    {
                        name: "Duke Student Broadcasting",
                        img: "dsb.png",
                        parameters:  "Small Events,Recurring Events,Technology,Media",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform?usp=sf_link"
                    },
                    {
                        name: "Financial Analysts",
                        img: "finanalysts.png",
                        parameters:  "Small Events,Planning,Technology,Media",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform?usp=sf_link"
                    },
                    {
                        name: "FIPs",
                        img: "fips.png",
                        parameters:  "Small Events,Planning,Media",
                        shown: true,
                        link: "https://drive.google.com/file/d/1rApsDl3nJU_l7hilffBHIB3Qzdiwezb8/view?usp=sharing"
                    },
                    {
                        name: "Freewater Presentations",
                        img: "freewater.png",
                        parameters:  "Small Events,Recurring Events,Production,Technology,Media",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform?usp=sf_link"
                    },
                    {
                        name: "Freewater Productions",
                        img: "freewaterproductions.png",
                        parameters:  "Small Events,Recurring Events,Production,Technology,Media",
                        shown: true,
                        link: "https://goo.gl/forms/UM2pjHuyCw6fCGvC3"
                    },
                    {
                        name: "Speakers and Stage",
                        img: "speakers.png",
                        parameters:  "Big Events,Small Events,Production,Planning,Media",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform?usp=sf_link"
                    },
                    {
                        name: "Marketing",
                        img: "marketing.png",
                        parameters:  "Small Events,Planning,Technology,Media",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform?usp=sf_link"
                    },
                    {
                        name: "Jazz@",
                        img: "jazz.png",
                        parameters:  "Small Events,Recurring Events,Planning,Media,Concerts",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform?usp=sf_link"
                    },
                    {
                        name: "Vis Arts",
                        img: "visarts.png",
                        parameters:  "Small Events,Recurring Events,Production,Planning,Media",
                        shown: true,
                        link: "https://docs.google.com/forms/u/3/d/1PAUkc5KHCPoqIzuaoQO0SFAonzYujQIVKKaXT2CqOPc/edit?usp=drive_web",
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform?usp=sf_link"
                    },
                    {
                        name: "WXDU",
                        img: "wxdu.png",
                        parameters:  "Small Events,Recurring Events,Production,Technology,Media,Student Engagement",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform?usp=sf_link"
                    },
                    {
                        name: "STR",
                        img: "str.png",
                        parameters:  "Big Events,Recurring Events,Production,Planning,Technology,Media,Concerts",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLScRVFiZj0mPxnL-LzS9Cl_Z1KAtOrKcAmQGQvZLVwLyJ2jFAg/viewform?usp=sf_link"
                    },
                    {
                        name: "DUU",
                        img: "duu.png",
                        parameters:  "Big Events,Small Events,Recurring Events,Production,Planning,Technology,Media,Concerts,Student Engagement",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform?usp=sf_link"
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
                var flag=true;
                var paramList = app1.committees[r].parameters.split(",");
                
                for (var z=0; z<list.length;z++){
                    if (! paramList.includes(list[z])){
                        app1.committees[r].shown = false;
                        flag=false;
                        break;
                    }
                }
                if (flag){
                    app1.committees[r].shown = true;
                }
            }
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