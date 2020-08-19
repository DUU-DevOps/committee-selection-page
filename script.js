    var app1 = new Vue({
    el: "#committeeSelection",

    data: function(){
        return {
            currentSelection: [],
            allSelectedArts: false,
            allSelectedMusic: false,
            allSelectedEvent: false,
            allSelectedMarketing: false,
            allSelectedTech: false,
            allSelectedEngagement: false,
            parameters: [
                {
                    name: "Music performance",
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
                    name: "Large-scale events"
                },
                {
                    name: "Weekly events"
                },
                {
                    name: "Karaoke"
                },
                {
                    name: "Trivia"
                },
                {
                    name: "Live performances"
                },
                                {
                    name: "Marketing strategy"
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
                },
                {
                    name: "Are you interested in conscious programming / cultural-sensitivity / equity / community building or collaboration?"
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
                    name: "Large-scale events"
                },
                {
                    name: "Weekly events"
                },
                {
                    name: "Karaoke"
                },
                {
                    name: "Trivia"
                },
                {
                    name: "Live performances"
                }
            ],

            marketingParameters:[
                {
                    name: "Marketing strategy"
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

            engagementParameters:[
                {
                    name: "Are you interested in conscious programming / cultural-sensitivity / equity / community building or collaboration?"
                }
            ],

            committees: [
                    {
                        name: "External Engagement",
                        img:"exteng.png",
                        parameters: "Are you interested in conscious programming / cultural-sensitivity / equity / community building or collaboration?",
                        shown: true,
                        link:"https://duke.box.com/s/v1cwxbcjn0eb1uoxpsvr8plcxhajmbl0"
                    },
                    {
                        name: "LDOC",
                        img: "ldoc.png",
                        parameters:  "Large-scale events,Concerts,Live performances,Marketing strategy,Graphic design,Photography",
                        shown: true,
                        link: "https://duke.qualtrics.com/jfe/form/SV_8Hb27NvSGFCuBmZ"
                    },
                    {
                        name: "Duke@Nite",
                        img: "dukeatnite.png",
                        parameters:  "Weekly events,Karaoke,Trivia",
                        shown: true,
                        link: "https://duke.qualtrics.com/jfe/form/SV_4GvrekdhmfDjGXb"
                    },
                    {
                        name: "Special Events",
                        img: "specialevents.png",
                        parameters:  "Large-scale events,Live performances",
                        shown: true,
                        link: "https://duke.qualtrics.com/jfe/form/SV_cwpYnmzIYpYRyuN"
                    },
                    {
                        name: "Campus Concerts",
                        img: "cc.png",
                        parameters:  "Large-scale events,Concerts,Live performances,Graphic design",
                        shown: true,
                        link: "https://duke.qualtrics.com/jfe/form/SV_6n9QBgrOk9Lxo3j"
                    },
                    {
                        name: "Coffehouse",
                        img: "coffeehouse.png",
                        parameters:  "Weekly events,Concerts,Live performances,Music performance,Sound engineering",
                        shown: true,
                        link: "https://duke.qualtrics.com/jfe/form/SV_daLLP73FHzYdVIN"
                    },
                    {
                        name: "DevOps",
                        img: "DevOpsLogoFinal.png",
                        parameters:  "App development,Data analytics,Web design",
                        shown: true,
                        link: "https://duke.qualtrics.com/jfe/form/SV_25Jig3ulLvAVAHz"
                    },
                    {
                        name: "Duke Student Broadcasting",
                        img: "dsb.png",
                        parameters:  "Videography,Broadcasting",
                        shown: true,
                        link: "https://duke.qualtrics.com/jfe/form/SV_5tB4Hhz1eVIo7gp"
                    },
                    {
                        name: "Financial Analysts",
                        img: "finanalysts.png",
                        parameters:  "App development,Data analytics",
                        shown: true,
                        link: "https://duke.qualtrics.com/jfe/form/SV_1YzYSDfMi0VB1oV"
                    },
                    {
                        name: "FIPs",
                        img: "fips.png",
                        parameters:  "Weekly events,Marketing strategy,Are you interested in conscious programming / cultural-sensitivity / equity / community building or collaboration?", //NEED HELP!
                        shown: true,
                        link: "mailto:sullivan.brem@duke.edu"
                    },
                    {
                        name: "Freewater Presentations",
                        img: "freewater.png",
                        parameters:  "Weekly events,Film appreciation",
                        shown: true,
                        link: "https://duke.qualtrics.com/jfe/form/SV_1HqohDQ40YlksGF"
                    },
                    {
                        name: "Freewater Productions",
                        img: "freewaterproductions.png",
                        parameters:  "Videography,Visual arts,Film appreciation",
                        shown: true,
                        link: "https://duke.qualtrics.com/jfe/form/SV_0eWKYp3fAbqocEl"
                    },
                    {
                        name: "Speakers and Stage",
                        img: "speakers.png",
                        parameters:  "Large-scale events,Live performances",
                        shown: true,
                        link: "https://duke.qualtrics.com/jfe/form/SV_d6UPsD7wrPpMMUR"
                    },
                    {
                        name: "Marketing",
                        img: "marketing.png",
                        parameters:  "Marketing strategy,Graphic design,Photography,Web design,Visual arts,Videography",
                        shown: true,
                        link: "https://duke.qualtrics.com/jfe/form/SV_8c5urRuPAa7zl8p"
                    },
                    {
                        name: "Jazz@",
                        img: "jazz.png",
                        parameters:  "Music performance,Weekly events,Jazz,Live performances",
                        shown: true,
                        link: "https://duke.qualtrics.com/jfe/form/SV_5cB1OIpsWdHSMhT"
                    },
                    {
                        name: "Vis Arts",
                        img: "visarts.png",
                        parameters:  "Weekly events,Visual arts,Graphic design",
                        shown: true,
                        link: "https://duke.qualtrics.com/jfe/form/SV_86Nkx5eHAlOsg2p"
                    },
                    {
                        name: "WXDU",
                        img: "wxdu.png",
                        parameters:  "Jazz,Broadcasting,Sound engineering",
                        shown: true,
                        link: "https://duke.qualtrics.com/jfe/form/SV_0U2bWdtM8KmhTsV"
                    },
                    {
                        name: "STR",
                        img: "str.png",
                        parameters:  "Large-scale events,Music performance,Music production,Concerts,Jazz,Live performances,Sound engineering, Graphic design,Photographer,Marketing strategy ",
                        shown: true,
                        link: "https://duke.qualtrics.com/jfe/form/SV_09tm2sAAHJ6ppsh"
                    },
                    {
                        name: "DUU",
                        img: "duu.png",
                        parameters: "Are you interested in conscious programming / cultural-sensitivity / equity / community building or collaboration?",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform"
                    }
                ],
            }
        },


    methods: {
        select: function(){
//            var list = $(".chk:checked").map(
//                function () {
//                    return this.value;
//                }
//            );

            var list =  this.currentSelection;



            //Make everything false first to ensure committees are shown if nothing is selected
            if (list.length < 1){
                for (var r=0; r<app1.committees.length;r++){
                    app1.committees[r].shown = true;
                }
            }
            else{
                for (var r=0; r<app1.committees.length;r++){
                    app1.committees[r].shown = false;
                    if (app1.committees[r].name == "DUU"){
                        app1.committees[r].shown = true;
                    }

                }
            }


            //Match tags algorithm
            for (var r=0; r<app1.committees.length;r++){
                //var flag=false;
                var paramList = app1.committees[r].parameters.split(",");

                for (var z=0; z<list.length;z++){
                    if (paramList.includes(list[z])){
                        app1.committees[r].shown = true;
                    }

                }
            }



        },
        apply: function(committeeLink){
            window.open(committeeLink);
            return;
//            if (committeeLink === "https://drive.google.com/file/d/1rApsDl3nJU_l7hilffBHIB3Qzdiwezb8/view?usp=sharing"){
//                window.open(committeeLink);
//                return;
//            }
//            $("#application").replaceWith('<iframe align="middle" id="application" src="'+committeeLink+'" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>');
//            $("#background")[0].style.display = "block";
//            $("#background")[0].style.opacity = .9;
//            $("#application")[0].style.display = "block";
//            $("#exit img")[0].style.display = "inline";
        },
        exitApplication: function(){
            $("#background")[0].style.display = "none";
            $("#application")[0].style.display = "none";
            $("#exit img")[0].style.display = "none";
        },
        selectAllArts: function() {

            if (!this.allSelectedArts) {
                for (parameter in this.artsMediaParameters) {
                    this.currentSelection.push(this.artsMediaParameters[parameter].name.toString());
                }
            }
            else{
                var tempArr = [];
                for (parameter in this.artsMediaParameters){
                    tempArr.push(this.artsMediaParameters[parameter].name.toString());
                }
                this.currentSelection = this.currentSelection.filter( function( el ) {
                      return tempArr.indexOf( el ) < 0;
                    } );
            }
        },
        selectAllEngagement: function() {
            if (!this.allSelectedEngagement){
                for (parameter in this.engagementParameters) {
                    this.currentSelection.push(this.engagementParameters[parameter].name.toString());
                }
            }
            else{
                var tempArr = [];
                for (parameter in this.engagementParameters){
                    tempArr.push(this.engagementParameters[parameter].name.toString());
                }
                this.currentSelection = this.currentSelection.filter( function( el ) {
                      return tempArr.indexOf( el ) < 0;
                    } );
            }
        },
        selectAllMusic: function() {

            if (!this.allSelectedMusic) {
                for (parameter in this.musicParameters) {
                    this.currentSelection.push(this.musicParameters[parameter].name.toString());
                }
            }
            else{
                var tempArr = [];
                for (parameter in this.musicParameters){
                    tempArr.push(this.musicParameters[parameter].name.toString());
                }
                this.currentSelection = this.currentSelection.filter( function( el ) {
                      return tempArr.indexOf( el ) < 0;
                    } );
            }
        },
        selectAllEvent: function() {

            if (!this.allSelectedEvent) {
                for (parameter in this.eventPlanningParameters) {
                    this.currentSelection.push(this.eventPlanningParameters[parameter].name.toString());
                }
            }
            else{
                var tempArr = [];
                for (parameter in this.eventPlanningParameters){
                    tempArr.push(this.eventPlanningParameters[parameter].name.toString());
                }
                this.currentSelection = this.currentSelection.filter( function( el ) {
                      return tempArr.indexOf( el ) < 0;
                    } );
            }
        },
        selectAllMarketing: function() {
            if (!this.allSelectedMarketing) {
                for (parameter in this.marketingParameters) {
                    this.currentSelection.push(this.marketingParameters[parameter].name.toString());
                }
            }
            else{
                var tempArr = [];
                for (parameter in this.marketingParameters){
                    tempArr.push(this.marketingParameters[parameter].name.toString());
                }
                this.currentSelection = this.currentSelection.filter( function( el ) {
                      return tempArr.indexOf( el ) < 0;
                    } );
            }
        },
        selectAllTech: function() {


            if (!this.allSelectedTech) {
                for (parameter in this.technologyParameters) {
                    this.currentSelection.push(this.technologyParameters[parameter].name.toString());
                }
            }
            else{
                var tempArr = [];
                for (parameter in this.technologyParameters){
                    tempArr.push(this.technologyParameters[parameter].name.toString());
                }
                this.currentSelection = this.currentSelection.filter( function( el ) {
                      return tempArr.indexOf( el ) < 0;
                    } );
            }

        },
    }
});
