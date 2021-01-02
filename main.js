$(document).ready(function(){

    //Initiate Tabs
    $("#content-1").show();


	var values = ["bg1", "bg2", "bg3", "bg4", "bg5"];
    valueToUse = values[Math.floor(Math.random() * values.length)];
	$(".loginBg").addClass(valueToUse);

	/* Navigation sub navigation open and close */

	$(document).on("click", "#subNavTrue", function(e){
    	e.preventDefault();
        $(this).children(".sub-nav-icon" ).toggle('fast');
    	$(this).siblings(".subNav" ).toggle('fast');
    	$(this).toggleClass("selected" );
    });

    /* --------------- UTC Local Date Conversion --------------- */
    $(".utc-date").each(function( index ) {
        var element = $(this);
        var date = element.text();
        var format = element.data('format');
        if (date === '') { return }

        element.text(moment.utc(date).local().format(format));
    });
    $('.tabNavMobile').on('change', function() {
        var target = $(this).val();
        tabs.tabContentChange(target);

        $(".tabNav").removeClass("selected");
        var targetClass = '#tab-' + target;
        $(targetClass).addClass("selected");
    });
});

/* Modal Functions */
$(document).on("click", ".modalTrigger", function(e){
    e.preventDefault();
    $(".modalScreen").fadeIn('fast');
});

$(document).on("click", ".modalClose", function(e){
    if ($(e.target).hasClass('modalClose')) {
        $(".modalScreen").fadeOut('fast');
        $(".modalContent").fadeOut('fast');
    }
    $(".modalScreen").fadeOut('fast');
    $(".modalContent").fadeOut('fast');
});


/* Content Tabs ====================================================
===========================================================
======================================================== */


$(document).on("click", ".tabNav", function(e){
    e.preventDefault();

    var targetRaw = $(this).attr("id");
    var target = targetRaw.split("-");

    $(".tabNav").removeClass("selected");
    $(this).addClass("selected");

    //tabs.tabNavChange(target[1]);
    tabs.tabContentChange(target[1]);
    tabs.tabMobileChange(target[1]);

    event.stopPropagation();
});
var tabs = {


    tabContentChange: function(target) {
        var targetNum = target;
        var targetContent = String("#content-" + targetNum);

        $(".tab-content").hide();
        $(targetContent).show();
        //alert(targetContent);

    },
    tabMobileChange: function(target){
        $('.tabNavMobile').val(target);
    }

};

/* Search Tabs ====================================================
===========================================================
======================================================== */


$(document).on("click", ".searchTab", function(e){
    e.preventDefault();
    //alert("We are in the thick of this shit");
    var targetRaw = $(this).attr("id");
    var target = String("#results" + targetRaw);

    $(".searchTab").removeClass("selected");
    $(this).addClass("selected");

    searchTabs.searchTabContentChange(target);

    event.stopPropagation();
});
var searchTabs = {


    searchTabContentChange: function(target) {
        var targetContent = target;
        $(".search-inner-content").hide();
        $(targetContent).show();
    }

};

/* Locations Selector =====================================
===========================================================
======================================================== */


$(document).on("click", ".locationSelect", function(e){
    e.preventDefault();
    var target = $(this).attr("id");

    $(".locationSelect").removeClass("selected");
    $(this).addClass("selected");

    locationsWindow.contentChange(target);

    event.stopPropagation();
});
var locationsWindow = {


    contentChange: function(target) {

        if(target == "omaha"){
            $(".locationBackground").hide();
            $(".omaha").show();
        }
        if(target == "midtown"){
            $(".locationBackground").hide();
            $(".midtown").show();
        }
        if(target == "lincoln"){
            $(".locationBackground").hide();
            $(".lincoln").show();
        }
        if(target == "sarpy"){
            $(".locationBackground").hide();
            $(".sarpy").show();
        }
        if(target == "grandisland"){
            $(".locationBackground").hide();
            $(".grandisland").show();
        }
        //$("." + target).show();
    },

};

/* New Mobile Menu =====================================
===========================================================
======================================================== */
$(document).on("click", ".globalMobileMenu", function(e){
    e.preventDefault();
    $(".globalMobileDrawer").show();
    event.stopPropagation();
});
$(document).on("click", ".globalMobileDrawerClose", function(e){
    e.preventDefault();
    $(".globalMobileDrawer").hide();
    $(".drawerSubMenu").hide();
    $(".drawerSubMenuToggle").children(".link-icon").removeClass("sub-menu-open");
    event.stopPropagation();
});


$(document).on("click", ".drawerSubMenuToggle", function(e){
    e.preventDefault();

    var target = $(this).attr("id");
    var targetContent = String(".drawer" + target);
    $(".drawerSubMenu").hide();
    if($(this).children(".link-icon").hasClass("sub-menu-open")){
         //$(targetContent).hide();
         $(this).children(".link-icon").removeClass("sub-menu-open")
    }else{
        $(".drawerSubMenuToggle").children(".link-icon").removeClass("sub-menu-open");
        $(this).children(".link-icon").addClass("sub-menu-open");
        $(targetContent).show();
    }

    event.stopPropagation();
});
/* New Main nav drop down =====================================
===========================================================
======================================================== */
$(document).ready(function(){
    $(".navDropDownToggle").mouseover(function() {
      $(this).children(".navDropDownMenu").show();
    });
    $(".navDropDownToggle").mouseout(function() {
      $(this).children(".navDropDownMenu").hide();
    });
});
/* Agent Filter Menu =====================================
===========================================================
======================================================== */
$(document).on("click", ".filterToggleButton", function(e){
    e.preventDefault();
    $(".agentFilterDrawer").toggleClass("agent-filter-drawer-visbility");
    $(this).children(".down-indicator").toggleClass("flip");
    event.stopPropagation();
});

