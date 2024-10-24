// Navbar Menu
var waypoint = new Waypoint({
    element: document.getElementById('services'),
    handler: function(direction) {
        if(direction === "down") {
            document.querySelector(".navbar").classList.add("navbar-control","animate__fadeInDown", "shadow-gray-400")
        } else {
            document.querySelector(".navbar").classList.remove("navbar-control", "animate__fadeInDown", "shadow-gray-400")
        }
    },
    offset: '5%'
  })

  // Footer Menu
  var waypoint = new Waypoint({
    element: document.getElementById('pricing'),
    handler: function(direction) {
        if(direction === "down") {
            document.querySelector(".footer-fixed").classList.add("show","animate__fadeInDown")
        } else {
            document.querySelector(".footer-fixed").classList.remove("show","animate__fadeInDown")
        }
    },
    offset: '5%'
  })

  // Dark Mode
  const card = document.querySelectorAll(".card")

  const changeToDark = () => {
    document.documentElement.setAttribute("data-theme", "dark");
    document.querySelector(".navbar").classList.remove("shadow-lg");
    document.querySelector(".navbar").classList.add("pdf-border-zinc-800");
    localStorage.setItem("data-theme", "dark");

    for ( let i = 0; i < card.length; i++ ) {
      card[i].classList.remove("shadow-xl");
      card[i].classList.remove("border-0");
      card[i].classList.add("pdf-border-zinc-800");
    };
  };

  const changeToLight = () => {
    document.documentElement.setAttribute("data-theme", "light");
    document.querySelector(".navbar").classList.add("shadow-lg");
    document.querySelector(".navbar").classList.remove("border-bottom");
    document.querySelector(".navbar").classList.remove("pdf-border-zinc-800");
    localStorage.setItem("data-theme", "light");

    for ( let i = 0; i < card.length; i++ ) {
      card[i].classList.add("shadow-xl");
      card[i].classList.add("border-0");
      card[i].classList.remove("pdf-border-zinc-800");
    };
  };

  const changeTheme = document.getElementById("changeTheme");

  changeTheme.addEventListener("change", () => {
    const theme = localStorage.getItem("data-theme");
    if (theme === "dark") {
      changeToLight();
    } else {
      changeToDark();
    }
  });

  const theme = localStorage.getItem("data-theme");
  if (theme === "dark") {
    changeToDark();
    
  } else {
    changeToLight();
    
  }

  // Menu Icon
  
  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.addEventListener("click", () => {
      menuIcon.classList.toggle("show");
  });
