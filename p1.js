document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent page reload
  alert("Login successful! Welcome to HBO Stream.");
});


function toggleDeviceText() {
  if (window.innerWidth <= 768) {
    document.querySelector(".desktop").style.display = "none";
    document.querySelector(".mobile").style.display = "block";
  } else {
    document.querySelector(".desktop").style.display = "block";
    document.querySelector(".mobile").style.display = "none";
  }
}
toggleDeviceText();
window.addEventListener("resize", toggleDeviceText);


const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.transition = "transform 0.3s ease";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});
document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const query = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  let found = false;
  cards.forEach(card => {
    const title = card.querySelector("h3").innerText.toLowerCase();
    if (title.includes(query)) {
      card.style.display = "block";
      found = true;
    } else {
      card.style.display = "none";
    }
  });

  if (!found) {
    alert("No series found for: " + query);
  }
});
function watchTrailer1() {
  window.open( "https://youtu.be/rlR4PJn8b8I");
}
function watchTrailer2() {
  window.open( "https://youtu.be/uLtkt8BonwM");
}
function watchTrailer3() {
  window.open( "https://youtu.be/UR4Pxgnm-GA");
}
function watchTrailer4() {
  window.open( "https://youtu.be/n9xhJrPXop4");
}
function watchTrailer5() {
  window.open( "https://youtu.be/DotnJ7tTA34");
}
function watchTrailer6() {
  window.open( "https://youtu.be/sItUCKJQLTU");
}
function watchTrailer7() {
  window.open( "https://youtu.be/TrueDetectiveTrailer");
}
document.querySelectorAll(".watchlist-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const series = btn.parentElement.querySelector("h3").innerText;
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    if (!watchlist.includes(series)) {
      watchlist.push(series);
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
      alert(series + " added to your Watchlist!");
    } else {
      alert(series + " is already in your Watchlist.");
    }
  });
});