function openmenu() {
    document.querySelector("header").classList.add("showheader");
    document.querySelector(".openbtn").classList.add("d-none");
    document.querySelector(".closebtn").classList.remove("d-none");
  }
  function closemenu() {
    document.querySelector("header").classList.remove("showheader");
    document.querySelector(".openbtn").classList.remove("d-none");
    document.querySelector(".closebtn").classList.add("d-none");
  }
  function closecontact() {
    document.querySelector(".contactformpopup").classList.remove("d-block");
    document.querySelector(".contactoverlay").classList.remove("d-block");
  }
  function opencontact() {
    document.querySelector(".contactformpopup").classList.add("d-block");
    document.querySelector(".contactoverlay").classList.add("d-block");
  }