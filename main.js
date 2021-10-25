//window.onload = (event) => {
  //  console.log('page is fully loaded');          --- u slucaju da je script-src u head-u


    var backProject = document.getElementById("openmodal-123");
    var modal = document.querySelector(".modal-container");
    var closeBtn = document.getElementById("closemodal");
    var popUp = document.getElementById("pop-up-123");
    var gotIt = document.getElementById("gotit-btn");
    var pledgeModal = document.getElementById("pledge-with-no-reward");
    var greenPledge = document.getElementById("green-pledge-modal");
    var bambooModal = document.getElementById("bamboo-stand-modal");
    var bambooInvisible = document.getElementById("bamboo-invisible");
    var greenBamboo = document.getElementById("green-bamboo-modal");
    var blackModal = document.getElementById("black-edition-stand-modal");
    var pledgeInvisible = document.getElementById("pledge-invisible-modal");
    var blackInvisible = document.getElementById("black-edition-invisible");
    var greenBlack = document.getElementById("green-black-edition");
    var mahoganyModal = document.getElementById("mahogany-special-modal");
    var mahoganyInvisible = document.getElementById("mahogany-invisible-modal");
    var greenMahogany = document.getElementById("green-mahogany-modal");
    var bambooReward = document.getElementById("bamboo-reward");
    var blackReward = document.getElementById("black-edition-reward");
    var mahoganyReward = document.getElementById("mahogany-reward");
    var pledgeCircle = document.getElementById("pledge-circle");
    var bambooCircle = document.getElementById("bamboo-circle-invisible");
    var blackCircle = document.getElementById("black-circle-invisible");
    var mahoganyCircle = document.getElementById("mahogany-circle-invisible");
    var pledgeBorder = document.getElementById("pledge-border");
    var bambooBorder = document.getElementById("bamboo-border");
    var blackBorder = document.getElementById("black-border");
    var mahoganyBorder = document.getElementById("mahogany-border");
    var pladgeOutside = document.getElementById("pledge-circle-outside");
    var bambooOutside = document.getElementById("bamboo-circle-outside");
    var blackOutside = document.getElementById("black-circle-outside");
    var mahoganyOutside = document.getElementById("mahogany-circle-outside");
    


    backProject.addEventListener("click", event => {
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", event => {
        modal.style.display = "none";
        location.reload();
    });


    gotIt.addEventListener("click", event => {
        popUp.style.visibility = "hidden";
        modal.style.display = "none";
        //location.reload();
    });



    bambooReward.addEventListener("click", event => {
        modal.style.display = "flex";
        bambooCircle.style.display = "block";
        bambooBorder.style.border = "1px solid #3cb3ab";
        bambooInvisible.style.display = "flex";
    });

    blackReward.addEventListener("click", event => {
        modal.style.display = "flex";
        blackCircle.style.display = "block";
        blackBorder.style.border = "1px solid #3cb3ab";
        blackInvisible.style.display = "flex";
    });

    mahoganyReward.addEventListener("click", event => {
        /*popUp.style.visibility = "visible";*/
        alert("Out of Stock!");
    });


    pledgeModal.addEventListener ("click", event => {
        /*popUp.style.visibility = "visible";*/

        pledgeCircle.style.display = "block";
        pledgeBorder.style.border = "1px solid #3cb3ab";
        pledgeInvisible.style.display = "flex";

        if (bambooInvisible.style.display == "flex") {
            bambooInvisible.style.display = "none";
            bambooCircle.style.display = "none";
            bambooBorder.style.border = "hidden";

        }  else if (blackInvisible.style.display == "flex") {
                    blackInvisible.style.display = "none";
                    blackCircle.style.display = "none";
                    blackBorder.style.border = "hidden";

            }  else if (mahoganyInvisible.style.display == "flex") {
                        mahoganyInvisible.style.display = "none";
                        mahoganyCircle.style.display = "none";
                        mahoganyBorder.style.border = "hidden";
                }
    });


    greenPledge.addEventListener("click", event => {
        popUp.style.visibility = "visible";
        modal.style.display = "none";
    });

    bambooModal.addEventListener("click", event => {
        bambooCircle.style.display = "block";
        bambooBorder.style.border = "1px solid #3cb3ab";
        bambooInvisible.style.display = "flex";

        if (pledgeInvisible.style.display == "flex") {
            pledgeInvisible.style.display = "none";
            pledgeCircle.style.display = "none";
            pledgeBorder.style.border = "hidden";

        }  else if (blackInvisible.style.display == "flex") {
                    blackInvisible.style.display = "none";
                    blackCircle.style.display = "none";
                    blackBorder.style.border = "hidden";

            }  else if (mahoganyInvisible.style.display == "flex") {
                        mahoganyInvisible.style.display = "none";
                        mahoganyCircle.style.display = "none";
                        mahoganyBorder.style.border = "hidden";
                }
    });

    greenBamboo.addEventListener("click", event => {
        popUp.style.visibility = "visible";
        modal.style.display = "none";
    });

    blackModal.addEventListener("click", event => {
        blackCircle.style.display = "block";
        blackBorder.style.border = "1px solid #3cb3ab";
        blackInvisible.style.display = "flex";

        if (pledgeInvisible.style.display == "flex") {
            pledgeInvisible.style.display = "none";
            pledgeCircle.style.display = "none";
            pledgeBorder.style.border = "hidden";

        }  else if (bambooInvisible.style.display == "flex") {
                    bambooInvisible.style.display = "none";
                    bambooCircle.style.display = "none";
                    bambooBorder.style.border = "hidden";

            }  else if (mahoganyInvisible.style.display == "flex") {
                        mahoganyInvisible.style.display = "none";
                        mahoganyCircle.style.display = "none";
                        mahoganyBorder.style.border = "hidden";
                }
    });

    greenBlack.addEventListener("click", event => {
        popUp.style.visibility = "visible";
        modal.style.display = "none";
    });

    mahoganyModal.addEventListener("click", event => {
        mahoganyCircle.style.display = "block";
        mahoganyBorder.style.border = "1px solid #3cb3ab";
        mahoganyInvisible.style.display = "flex";

        if (pledgeInvisible.style.display == "flex") {
            pledgeInvisible.style.display = "none";
            pledgeCircle.style.display = "none";
            pledgeBorder.style.border = "hidden";

        }  else if (bambooInvisible.style.display == "flex") {
                    bambooInvisible.style.display = "none";
                    bambooCircle.style.display = "none";
                    bambooBorder.style.border = "hidden";

            }  else if (blackInvisible.style.display == "flex") {
                        blackInvisible.style.display = "none";
                        blackCircle.style.display = "none";
                        blackBorder.style.border = "hidden";
                }
    });

    greenMahogany.addEventListener("click", event => {
        /*popUp.style.visibility = "visible";*/
        alert("Out of Stock!");
    });

    pladgeOutside.addEventListener("click", event => {
        pledgeCircle.style.display = "block";
        pledgeBorder.style.border = "1px solid #3cb3ab";
        pledgeInvisible.style.display = "flex";

        if (bambooInvisible.style.display == "flex") {
            bambooInvisible.style.display = "none";
            bambooCircle.style.display = "none";
            bambooBorder.style.border = "hidden";

        }  else if (blackInvisible.style.display == "flex") {
                    blackInvisible.style.display = "none";
                    blackCircle.style.display = "none";
                    blackBorder.style.border = "hidden";

            }  else if (mahoganyInvisible.style.display == "flex") {
                        mahoganyInvisible.style.display = "none";
                        mahoganyCircle.style.display = "none";
                        mahoganyBorder.style.border = "hidden";
                }
    });

    bambooOutside.addEventListener("click", event => {
        bambooCircle.style.display = "block";
        bambooBorder.style.border = "1px solid #3cb3ab";
        bambooInvisible.style.display = "flex";

        if (pledgeInvisible.style.display == "flex") {
            pledgeInvisible.style.display = "none";
            pledgeCircle.style.display = "none";
            pledgeBorder.style.border = "hidden";

        }  else if (blackInvisible.style.display == "flex") {
                    blackInvisible.style.display = "none";
                    blackCircle.style.display = "none";
                    blackBorder.style.border = "hidden";

            }  else if (mahoganyInvisible.style.display == "flex") {
                        mahoganyInvisible.style.display = "none";
                        mahoganyCircle.style.display = "none";
                        mahoganyBorder.style.border = "hidden";
                }
    });

    blackOutside.addEventListener("click", event => {
        blackCircle.style.display = "block";
        blackBorder.style.border = "1px solid #3cb3ab";
        blackInvisible.style.display = "flex";

        if (pledgeInvisible.style.display == "flex") {
            pledgeInvisible.style.display = "none";
            pledgeCircle.style.display = "none";
            pledgeBorder.style.border = "hidden";

        }  else if (bambooInvisible.style.display == "flex") {
                    bambooInvisible.style.display = "none";
                    bambooCircle.style.display = "none";
                    bambooBorder.style.border = "hidden";

            }  else if (mahoganyInvisible.style.display == "flex") {
                        mahoganyInvisible.style.display = "none";
                        mahoganyCircle.style.display = "none";
                        mahoganyBorder.style.border = "hidden";
                }
    });

    mahoganyOutside.addEventListener("click", event => {
        mahoganyCircle.style.display = "block";
        mahoganyBorder.style.border = "1px solid #3cb3ab";
        mahoganyInvisible.style.display = "flex";

        if (pledgeInvisible.style.display == "flex") {
            pledgeInvisible.style.display = "none";
            pledgeCircle.style.display = "none";
            pledgeBorder.style.border = "hidden";

        }  else if (bambooInvisible.style.display == "flex") {
                    bambooInvisible.style.display = "none";
                    bambooCircle.style.display = "none";
                    bambooBorder.style.border = "hidden";

            }  else if (blackInvisible.style.display == "flex") {
                        blackInvisible.style.display = "none";
                        blackCircle.style.display = "none";
                        blackBorder.style.border = "hidden";
                }
    });

   

    // ----  Bookmark button ----

    var primaryBookmark = document.getElementById("bookmark-icon");
    var replaceBookmarked = document.getElementById("bookmarked-icon");

    primaryBookmark.addEventListener("click", event => {
        primaryBookmark.style.display = "none";
        replaceBookmarked.style.display = "flex";
    });

    

    // ----  Dropdown menu ----

    var dropdown = document.getElementById("dropdown");
    var dropdownMenu = document.getElementById("menu123");
    var dropdownClosed = document.getElementById("dropdown-closed");
    var hrefAbout = document.getElementById("href-about");
    var hrefStart = document.getElementById("href-started");


    dropdown.addEventListener("click", event => {
        dropdownMenu.style.display = "flex";
    });

    dropdownClosed.addEventListener("click", event => {
        dropdownMenu.style.display = "none";
    });

    hrefAbout.addEventListener("click", event => {
        dropdownMenu.style.display = "none";
    });

    hrefStart.addEventListener("click", event => {
        modal.style.display = "flex";
        dropdownMenu.style.display = "none";
    });



    // ----  Calculation ----


    // var x = parseFloat(document.getElementById('dollars').innerText);

    // var x = document.getElementById('dollars').innerText;
    // var y = parseFloat(document.getElementById('bamboo-input').value);
    // var result = (x + y);


    // greenBamboo.addEventListener("click", event => {

    //     document.getElementById('dollars').innerText = result.toLocaleString();
    //     console.log(result);

    // });


    var i = 101;

  function buttonLeft() {

      i--;
      document.getElementById('bamboo-left').innerText = i;
      document.getElementById('bamboo-modal-left').innerText = i;
  }


  var a = 4;

  function blackLeft() {

      a--;
      document.getElementById('black-left').innerText = a;
      document.getElementById('black-modal-left').innerText = a;
  }



// ---- Add backers and calculate $ ----

    var b = 5007;
    
    function buttonBackers() {

        b++;
        document.getElementById('backers').innerText = b.toLocaleString();

        pledgeInvisible.style.display = "none";
        pledgeCircle.style.display = "none";
        pledgeBorder.style.border = "hidden";
        bambooInvisible.style.display = "none";
        bambooCircle.style.display = "none";
        bambooBorder.style.border = "hidden";
        blackInvisible.style.display = "none";
        blackCircle.style.display = "none";
        blackBorder.style.border = "hidden";
    }


    function buttonBamboo() {

        var sum = parseInt(document.getElementById("dollars").innerText);
        var newAdd = parseInt(document.getElementById("bamboo-input").value);
        var newSum = (sum + newAdd);
        
        document.getElementById("dollars").innerText = newSum;
        document.getElementById("bamboo-input").value = 25;
    }


    function buttonBlack() {

        var x = parseInt(document.getElementById("dollars").innerText);
        var y = parseInt(document.getElementById("black-input").value);
        var z = (x + y);
        
        document.getElementById("dollars").innerText = z;
        document.getElementById("black-input").value = 75;
    }


    // function buttonBamboo() {
    //     var sum = document.getElementById("dollars").innerText;
    //     var newAdd = document.getElementById("bamboo-input").value;
    //     var newSum = +sum + +newAdd;
        
    //     document.getElementById("dollars").innerText = newSum.toLocaleString();
    // }

    // function buttonBlack() {
    //     var sum = document.getElementById("dollars").innerText;
    //     var newAdd = document.getElementById("black-input").value;
    //     var newSum = +sum + +newAdd;
        
    //     document.getElementById("dollars").innerText = newSum.toLocaleString();

    //   ----  pronaci resenje kao zamenu za "toLocaleString"  ----
    // }


    //   ----  uraditi % line  ----

//  };
