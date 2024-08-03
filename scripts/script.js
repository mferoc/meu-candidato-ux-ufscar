document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);

      sections.forEach((section) => {
        if (section.id === targetId) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });

      document.querySelector(".content").scrollTop = 0;
    });
  });
});

function filterTable() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toLowerCase();
  const table = document.getElementById("candidatesTable");
  const rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    let matched = false;

    for (let j = 0; j < cells.length; j++) {
      if (cells[j].textContent.toLowerCase().indexOf(filter) > -1) {
        matched = true;
        break;
      }
    }

    rows[i].style.display = matched ? "" : "none";
  }
}
