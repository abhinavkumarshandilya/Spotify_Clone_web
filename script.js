window.addEventListener("DOMContentLoaded", function () {
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");
  
    // Set the default banner image and text
    banner.style.backgroundImage = "url(images/banner1.svg)";
    bannerImage.setAttribute("src", "images/image.png");
    bannerHeading.textContent = "Deep Focus";
    bannerText.textContent = "Keep your focus and enjoy the serenity";
  });
  
function playAll(songNumber){
    var audioElement= document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    var songFileName = "music/"+songNumber+".mp3";
    var currentRow= document.getElementById("song"+songNumber);
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");

    if(audioElement.getAttribute("src")==songFileName && !audioElement.paused){
        audioElement.pause();
        playBtn.innerHTML='<img src="images/play-button.svg">';
        
        banner.style.backgroundImage = "url(images/banner1.svg)";
        bannerImage.setAttribute("src", "images/image.png");
        bannerHeading.textContent = "Deep Focus";
        bannerText.textContent = "Keep your focus and enjoy the serenity";
    }
    else{
        audioElement.setAttribute("src",songFileName);
        audioElement.play();
        playBtn.innerHTML='<img src="images/pause-button.svg">';
       
        if (songNumber === 1) {
            banner.style.backgroundImage = "url(images/b01.png)";
            bannerImage.setAttribute("src", "images/image 1.png");
            bannerHeading.textContent = "Mike Posner - I took a pill in Ibiza (Cover)";
            bannerText.textContent = "By Ishaan Kaushik";
        } else if (songNumber === 2) {
            banner.style.backgroundImage = "url(images/b02.png)";
            bannerImage.setAttribute("src", "images/image 2.png");
            bannerHeading.textContent = "Ghar (Cover)";
            bannerText.textContent = "By Ishaan Kaushik";
        }
        else if (songNumber === 3) {
            banner.style.backgroundImage = "url(images/b03.png)";
            bannerImage.setAttribute("src", "images/image 3.png");
            bannerHeading.textContent = "Kahi to hogi woh (Cover)";
            bannerText.textContent = "By Ishaan Kaushik";
        }
        else if (songNumber === 4) {
            banner.style.backgroundImage = "url(images/b04.png)";
            bannerImage.setAttribute("src", "images/image 4.jpg");
            bannerHeading.textContent = "Kasoor (Cover)";
            bannerText.textContent = "By Ishaan Kaushik";
        }
        else if (songNumber === 5) {
            banner.style.backgroundImage = "url(images/b05.png)";
            bannerImage.setAttribute("src", "images/image 5.png");
            bannerHeading.textContent = "Tu Hai Kahan";
            bannerText.textContent = "By Ishaan Kaushik";
        }
        else if (songNumber === 6) {
            banner.style.backgroundImage = "url(images/b06.png)";
            bannerImage.setAttribute("src", "images/image 6.png");
            bannerHeading.textContent = "Baarishein - Anuv Jain (Cover)";
            bannerText.textContent = "By Ishaan Kaushik";
        }
        else if (songNumber === 7) {
            banner.style.backgroundImage = "url(images/b07.png)";
            bannerImage.setAttribute("src", "images/image 7.png");
            bannerHeading.textContent = "Waqt Ki Baatein (Cover)";
            bannerText.textContent = "By Ishaan Kaushik";
        }
        else if (songNumber === 8) {
            banner.style.backgroundImage = "url(images/b08.png)";
            bannerImage.setAttribute("src", "images/image 8.png");
            bannerHeading.textContent = "Lovely feat. Anika Vidyarthi (Cover)";
            bannerText.textContent = "By Ishaan Kaushik";
        }
        else if (songNumber === 9) {
            banner.style.backgroundImage = "url(images/b09.png)";
            bannerImage.setAttribute("src", "images/image 9.png");
            bannerHeading.textContent = "Let me down slowly - Alec Benjamin (Cover)";
            bannerText.textContent = "By Ishaan Kaushik";
        }
        else if (songNumber === 10) {
            banner.style.backgroundImage = "url(images/b010.png)";
            bannerImage.setAttribute("src", "images/image 10.png");
            bannerHeading.textContent = "Jee Le Zara - (Cover)";
            bannerText.textContent = "By Ishaan Kaushik";
        }
    }
}

function playaudio(){
    var audio=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    if(audio.paused){
        audio.play();
        playBtn.innerHTML='<img src="images/pause-button.svg">';
    }
    else{
        audio.pause();
        playBtn.innerHTML='<img src="images/play-button.svg">';
    }
}
// script for login
jQuery(document).ready(function($){
    var $form_modal = $('.user-modal'),
      $form_login = $form_modal.find('#login'),
      $form_signup = $form_modal.find('#signup'),
      $form_forgot_password = $form_modal.find('#reset-password'),
      $form_modal_tab = $('.switcher'),
      $tab_login = $form_modal_tab.children('li').eq(0).children('a'),
      $tab_signup = $form_modal_tab.children('li').eq(1).children('a'),
      $forgot_password_link = $form_login.find('.form-bottom-message a'),
      $back_to_login_link = $form_forgot_password.find('.form-bottom-message a'),
      $main_nav = $('.main-nav');
  
    //open modal
    $main_nav.on('click', function(event){
  
      if( $(event.target).is($main_nav) ) {
        // on mobile open the submenu
        $(this).children('ul').toggleClass('is-visible');
      } else {
        // on mobile close submenu
        $main_nav.children('ul').removeClass('is-visible');
        //show modal layer
        $form_modal.addClass('is-visible'); 
        //show the selected form
        ( $(event.target).is('.signup') ) ? signup_selected() : login_selected();
      }
  
    });
  
    //close modal
    $('.user-modal').on('click', function(event){
      if( $(event.target).is($form_modal) || $(event.target).is('.close-form') ) {
        $form_modal.removeClass('is-visible');
      } 
    });
    //close modal when clicking the esc keyboard button
    $(document).keyup(function(event){
        if(event.which=='27'){
          $form_modal.removeClass('is-visible');
        }
      });
  
    //switch from a tab to another
    $form_modal_tab.on('click', function(event) {
      event.preventDefault();
      ( $(event.target).is( $tab_login ) ) ? login_selected() : signup_selected();
    });
  
    //hide or show password
    $('.hide-password').on('click', function(){
      var $this= $(this),
        $password_field = $this.prev('input');
      
      ( 'password' == $password_field.attr('type') ) ? $password_field.attr('type', 'text') : $password_field.attr('type', 'password');
      ( 'Show' == $this.text() ) ? $this.text('Hide') : $this.text('Show');
      //focus and move cursor to the end of input field
      $password_field.putCursorAtEnd();
    });
  
    //show forgot-password form 
    $forgot_password_link.on('click', function(event){
      event.preventDefault();
      forgot_password_selected();
    });
  
    //back to login from the forgot-password form
    $back_to_login_link.on('click', function(event){
      event.preventDefault();
      login_selected();
    });
  
    function login_selected(){
      $form_login.addClass('is-selected');
      $form_signup.removeClass('is-selected');
      $form_forgot_password.removeClass('is-selected');
      $tab_login.addClass('selected');
      $tab_signup.removeClass('selected');
    }
  
    function signup_selected(){
      $form_login.removeClass('is-selected');
      $form_signup.addClass('is-selected');
      $form_forgot_password.removeClass('is-selected');
      $tab_login.removeClass('selected');
      $tab_signup.addClass('selected');
    }
  
    function forgot_password_selected(){
      $form_login.removeClass('is-selected');
      $form_signup.removeClass('is-selected');
      $form_forgot_password.addClass('is-selected');
    }
  
    //REMOVE THIS - it's just to show error messages 
    $form_login.find('input[type="submit"]').on('click', function(event){
      event.preventDefault();
      $form_login.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
    });
    $form_signup.find('input[type="submit"]').on('click', function(event){
      event.preventDefault();
      $form_signup.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
    });
  
  
    //IE9 placeholder fallback
    //credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
    if(!Modernizr.input.placeholder){
      $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
          input.val('');
          }
      }).blur(function() {
        var input = $(this);
          if (input.val() == '' || input.val() == input.attr('placeholder')) {
          input.val(input.attr('placeholder'));
          }
      }).blur();
      $('[placeholder]').parents('form').submit(function() {
          $(this).find('[placeholder]').each(function() {
          var input = $(this);
          if (input.val() == input.attr('placeholder')) {
            input.val('');
          }
          })
      });
    }
  
  });
  
  
  //credits https://css-tricks.com/snippets/jquery/move-cursor-to-end-of-textarea-or-input/
  jQuery.fn.putCursorAtEnd = function() {
    return this.each(function() {
        // If this function exists...
        if (this.setSelectionRange) {
            // ... then use it (Doesn't work in IE)
            // Double the length because Opera is inconsistent about whether a carriage return is one character or two. Sigh.
            var len = $(this).val().length * 2;
            this.setSelectionRange(len, len);
        } else {
          // ... otherwise replace the contents with itself
          // (Doesn't work in Google Chrome)
            $(this).val($(this).val());
        }
    });
  };