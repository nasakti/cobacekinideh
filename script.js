var enVol = false;
            function fly_away(){
                if(enVol === false && $(window).scrollTop() != 0){
                    enVol = true;
                    $('.ciel').removeClass('stay');
                    $('.ciel').addClass('away');

                    setTimeout(function(){ stay() }, 4000);
                }
            }
            function stay(){
                if(enVol === true){
                    enVol = false;
                    $('.ciel').removeClass('away');
                    $('.ciel').addClass('stay');
                }
            }

            $(document).ready(function(){
                fly_away();
                $(window).scroll(function() {
                    fly_away();
                });

            });