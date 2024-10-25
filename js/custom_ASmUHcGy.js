/* Panel Top 01 */
$(document).ready(function(){
    function panelTopBg(){
      if($(window).scrollTop() > 1){
        $(".panel.top").addClass("black");
      }else{
        $(".panel.top").removeClass("black");
      }
    }
    $(window).scroll(panelTopBg);
    panelTopBg();
  });