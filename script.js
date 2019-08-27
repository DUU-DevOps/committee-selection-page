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
            committees: [
                    {
                        name: "LDOC",
                        img: "ldoc.jpg",
                        parameters:  "Large-scale events,Concerts,Live performances,Marketing strategy,Graphic design,Photography",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSci8zRjnTMvnme65Xwyw4ACMf-1yK60hL_sQEhobYRk2gWv8w/viewform?usp=sf_link"
                    },
                    {
                        name: "Duke@Nite",
                        img: "dukeatnite.jpg",
                        parameters:  "Weekly events,Karaoke,Trivia",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSf6G3WqCscGxIgrupLNd1AB-Auuc-ht8n-gz1K40NUo-beuig/viewform?usp=sf_link"
                    },  
                    {
                        name: "Special Events",
                        img: "specialevents.jpg",
                        parameters:  "Large-scale events,Live performances",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLScGPYpkvnYGrvZticUZuU4Fay5-ffGXO4tb-Xhy7YQXkJMGgg/viewform?usp=sf_link"
                    },
                    {
                        name: "Campus Concerts",
                        img: "cc.jpg",
                        parameters:  "Large-scale events,Concerts,Live performances,Graphic design",
                        shown: true,
                        link: "https://docs.google.com/forms/d/1FnVdGaJVxZdwGWUYqBNf4YtLw8tHOeydBh-57Ibx3l0/edit?usp=sharing"
                    },
                    {
                        name: "Coffehouse",
                        img: "coffeehouse.jpg",
                        parameters:  "Weekly events,Concerts,Live performances,Music performance,Sound engineering",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform?usp=sf_link"
                    },  
                    {
                        name: "DevOps",
                        img: "DevOpsLogoFinal.jpg",
                        parameters:  "App development,Data analytics,Web design",
                        shown: true,
                        link: "https://forms.gle/4NjsVUKrQP31A6ZcA"
                    },
                    {
                        name: "Duke Student Broadcasting",
                        img: "dsb.jpg",
                        parameters:  "Videography,Broadcasting",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform?usp=sf_link"
                    },
                    {
                        name: "Financial Analysts",
                        img: "finanalysts.jpg",
                        parameters:  "App development,Data analytics",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform?usp=sf_link"
                    },
                    {
                        name: "FIPs",
                        img: "fips.jpg",
                        parameters:  "Weekly events,Marketing strategy", //NEED HELP!
                        shown: true,
                        link: "https://drive.google.com/file/d/17QSfqkg43_TKa5p0S-QR3kSg4gDbJUY7/view?usp=sharing"
                    },
                    {
                        name: "Freewater Presentations",
                        img: "freewater.jpg",
                        parameters:  "Weekly events,Film appreciation",
                        shown: true,
                        link: "https://forms.gle/9VvuPj3ci8QogWVM6"
                    },
                    {
                        name: "Freewater Productions",
                        img: "freewaterproductions.jpg",
                        parameters:  "Videography,Visual arts,Film appreciation",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSeLdCeDYpa7gm3OunPSkU7z_3f6l0-na2--8xtmrs-zXg4Ueg/viewform?usp=sf_link"
                    },
                    {
                        name: "Speakers and Stage",
                        img: "speakers.jpg",
                        parameters:  "Large-scale events,Live performances",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform?usp=sf_link"
                    },
                    {
                        name: "Marketing",
                        img: "marketing.jpg",
                        parameters:  "Marketing strategy,Graphic design,Photography,Web design,Visual arts,Videography",
                        shown: true,
                        link: "https://forms.gle/YJahnh6ow5VuvaPp7"
                    },
                    {
                        name: "Jazz@",
                        img: "jazz.jpg",
                        parameters:  "Music performance,Weekly events,Jazz,Live performances",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform?usp=sf_link"
                    },
                    {
                        name: "Vis Arts",
                        img: "visarts.jpg",
                        parameters:  "Weekly events,Visual arts,Graphic design",
                        shown: true,
                        link: "https://forms.gle/UvaNHqERJevcuMF49"
                    },
                    {
                        name: "WXDU",
                        img: "wxdu.jpg",
                        parameters:  "Jazz,Broadcasting,Sound engineering",
                        shown: true,
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSfhy2OYIDsfY0Rm6LBmsWiU-wgr3ZldqcYW1T-79Z7AJAL6tA/viewform?usp=sf_link"
                    },
                    {
                        name: "STR",
                        img: "str.jpg",
                        parameters:  "Large-scale events,Music performance,Music production,Concerts,Jazz,Live performances,Sound engineering, Graphic design,Photographer,Marketing strategy ",
                        shown: true,
                        link: "https://forms.gle/hv9vwKBnSys3gAEj6"
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