$(".js-edit-settings").click(function(e){e.preventDefault(),$.ajax(this.href,{success:function(e){$("#js_actionDrawer__content").html($(e));var t=$("#form-edit-settings").find("input[name=compDir]").val(),a=$("#form-edit-settings").find("input[name=compExt]").val(),s=$("#form-edit-settings").find("input[name=stylesExt]").val(),i=$("#form-edit-settings").find("input[name=stylesDir]").val(),r=$(".atomic-h1").text();$("#form-edit-settings").submit(function(e){var o={compDir:$(this).find("input[name=compDir]").val(),compExt:$(this).find("input[name=compExt]").val(),stylesExt:$(this).find("input[name=stylesExt]").val(),stylesDir:$(this).find("input[name=stylesDir]").val(),old_compDir:t,old_compExt:a,old_stylesExt:s,old_stylesDir:i};$.ajax({type:"POST",url:"atomic-core/temp-processing/temp-edit-settings.php",data:o,dataType:"json",encode:!0}).done(function(e){e.success?window.location="atomic-core/?cat="+r:(e.errors.exists&&($(".aa_errorBox__message").html(""),$(".aa_actionDrawer").prepend('<div class="aa_errorBox"><p class="aa_errorBox__message"><i class="fa fa-times aa_js-errorBox__close"></i> '+e.errors.exists+"</p></div>").find(".aa_errorBox").hide().fadeIn(200)),e.errors.name&&($(".aa_errorBox__message").html(""),$(".aa_actionDrawer").prepend('<div class="aa_errorBox"><p class="aa_errorBox__message"><i class="fa fa-times aa_js-errorBox__close"></i> '+e.errors.name+"</p></div>").find(".aa_errorBox").hide().fadeIn(200)))}).fail(function(e){console.log(e)}),e.preventDefault()})},error:function(){}})});